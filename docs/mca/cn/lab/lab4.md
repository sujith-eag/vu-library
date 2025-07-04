
# Routing with NAT and IPTables

## VirtualBox Setup

In **VirtualBox > Preferences → Network → Host-only Networks**, create two Host-Only networks:

1. `vboxnet0`: `192.168.56.0/24` — connects **VM1** and **VM2**
    
2. `vboxnet1`: `192.168.57.0/24` — connects **VM2** and **VM3**

___

Use **two Host‑Only networks** to isolate subnets. Then, configure each VM’s network adapters:

**VM1 :**

- Adapter 1: Host-Only (vboxnet0) -> IP: `192.168.56.5/24`
	  
**VM2 :**
- Adapter 1: Host‑Only (vboxnet0) → `192.168.56.6/24`
	
- Adapter 2: Host‑Only (vboxnet1) → `192.168.57.5/24`
        
**VM3 :**
- Adapter 1: Host‑Only (vboxnet1) → IP: `192.168.57.6/24`
	
___

- `vboxnet0`: connects **VM1** and **VM2**
    
- `vboxnet1`: connects **VM2** and **VM3**

- VM2 is the only system connected to both networks. It must act as a **router**.
	
- **VM1 (192.168.56.5)** ↔ **VM2 (192.168.56.6 / 192.168.57.5)** ↔ **VM3 (192.168.57.6)**
    
## Configuration Steps

### Step 1: Create & Assign IPs

On each VM, check interfaces:

```bash
# On VM1, VM2, VM3
ifconfig
```

If Specific IP are needed (Static IPs), Configure interfaces through `ifconfig`.

Identify your actual interface names with:
```bash
ip link
```

- `enp0s3`: connected to `192.168.56.0/24` → refer to this as `<iface56>`
    
- `enp0s8`: connected to `192.168.57.0/24` → refer to this as `<iface57>`


Replace `<iface56>` and `<iface57>` with actual interface names fond via: `ip link`

```bash
#VM1
sudo ifconfig <iface56> 192.168.56.5/24 up
```

```bash
# On VM2
sudo ifconfig <iface56> 192.168.56.6/24 up

sudo ifconfig <iface56> 192.168.57.5/24 up
```

```bash
# On VM3
sudo ifconfig <iface57> 192.168.57.6/24 up
```

Confirm with:

```bash
ip addr show
# or
ip a show
```

### Similar Configuration using IP

```bash
sudo ip addr add 192.168.56.5/24 dev <iface56>
sudo ip link set <iface56> up
```
* Assigns the IP address and subnet mask to the interface.
* Brings the interface **up** (activates it).

```bash
sudo ip addr del 192.168.56.5/24 dev <iface56>
```

To remove the IP from an Interface.

---

### Step 2: Test Initial Connectivity


From VM3:
```bash
ping -c 3 192.168.57.5    # VM2 (should succeed)

ping -c 3 192.168.56.6    # VM2’s other IP (should fail)
ping -c 3 192.168.56.5    # VM1 (should fail)
```

---

### Step 3: Enable IP Forwarding & NAT on VM2

```bash
sudo -i

cat /proc/sys/net/ipv4/ip_forward
```

Check the current state of IP forwarding. The output will be `0` if it's disabled.
```bash
# Enable forwarding
echo 1 > /proc/sys/net/ipv4/ip_forward
```

To make changes permanent:

```bash
sudo nano /etc/sysctl.conf
# Add or uncomment:
net.ipv4.ip_forward = 1

# Apply the change:
sudo sysctl -p
```

### Context

- `192.168.56.0/24` — VM1-side network (via vboxnet0)
    
- `192.168.57.0/24` — VM3-side network (via vboxnet1)
    

VM2 is the router between these two networks. Traffic from VM1 to VM3 (and back) must flow through VM2. Since VM3 has no knowledge of `192.168.56.0/24`, we use **NAT (masquerading)** so that traffic appears to come from VM2 itself. This ensures replies from VM3 can return properly.

#### Set Up IPTables NAT and Forwarding Rules 

Identify the interfaces:

- `<iface56>`: Interface connected to 192.168.56.0/24
    
- `<iface57>`: Interface connected to 192.168.57.0/24

Accept Forwarded Packets:
```bash
iptables -P FORWARD ACCEPT
```

This masquerades **all outgoing traffic** leaving through the interface connected to `192.168.57.0/24`. regardless of source IP. (less precise)
```bash
iptables -t nat -A POSTROUTING -o enp0s31f6 -j MASQUERADE
```

### Setting Specific NAT rule

Rule to Masquerade from 56 to 57. This restricts masquerading only to traffic **from** VM1’s subnet, going **out to** the VM3 side.
```bash
sudo iptables -t nat -A POSTROUTING 
	-s 192.168.56.0/24 
		-o <iface57> 
			-j MASQUERADE
```

- **Table**: `-t nat` → Uses the **NAT table**, for address translation.
    
- **Chain**: `POSTROUTING` → Rule applies **after the routing decision**, right before the packet leaves the system.
    
- **Match**:
    - `-s 192.168.56.0/24`: Source subnet (VM1). Match packets **originating** from the VM1 network.
    - `-o <iface57>`: Interface toward VM3. Match packets going **out of** interface `eth57`.

* Action: `-j MASQUERADE`: Replace source IP with VM2’s IP on `<iface57>`. So that the destination (VM3) thinks the traffic is from VM2.

#### Allow forwarding

Allow forwarding from VM1 to VM3:
```bash
sudo iptables -A FORWARD 
	-i <iface56> 
		-o <iface57> 
			-j ACCEPT
```

Allow return traffic from VM3 to VM1 **only if it's part of an established connection**:
```bash
sudo iptables -A FORWARD 
	-i <iface57> 
		-o <iface56> 
		-m state 
		--state RELATED,ESTABLISHED 
		-j ACCEPT
```

**Chain**: `FORWARD` : for packets routed through VM2. Controls packets that are being routed _through_ the system (not destined _to_ or _from_ the system itself).
    
**Match**:
* `-i <iface56>` / `-i <iface57>`: Match incoming interface.
* `-o <iface57>` / `-o <iface56>`: Match outgoing interface.
  
- `-m state --state RELATED,ESTABLISHED` : Only allow packets that are **part of an already established connection**, or related (like TCP ACKs or ICMP replies).

**Action**: `ACCEPT` → Allow this packet to be forwarded.

#### If Issue arises, reset IPTables 

```bash
sudo iptables -F
sudo iptables -t nat -F
sudo iptables -P FORWARD ACCEPT
```

```bash
sudo iptables -A FORWARD -j ACCEPT
```

Then reapply the NAT and FORWARD rules.

---

### Step 4: Set Default Gateway on VM3

```bash
# Tell VM3 to use VM2 as gateway
sudo route add default gw 192.168.57.5
```
Or (newer systems):

```bash
sudo ip route add default via 192.168.57.5
```

Check:

```bash
ip route show
```

Should show `default via 192.168.57.5`.

---

### Step 5: Set VM1's Gateway to VM2

forward _all_ outbound traffic through VM2:

```bash
sudo route add default gw 192.168.56.6
```

---

### Step 6: Final Connectivity Test

- On **VM1**:

```bash
ping -c 3 192.168.57.6   # VM3 Should succeed
```

- On **VM3**:

```bash
ping -c 3 192.168.56.5    # VM1 Should succeed
```

- **VM2** acts as a forwarder between networks.
    
- Proper routing and NAT ensure end-to-end connectivity.

