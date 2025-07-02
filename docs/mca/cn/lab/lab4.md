
# Routing with NAT and IPTables


## VirtualBox Setup

In VirtualBox **Preferences → Network → Host-only Networks**, ensure both networks are created and properly configured.

1. **vboxnet0** – for the `192.168.56.0/24` network
    
2. **vboxnet1** – for the `192.168.57.0/24` network
    
Use **two Host‑Only networks** to isolate subnets. Then, configure each VM’s network adapters:

**VM1 :**
- Adapter 1: Host‑Only (vboxnet0) → `192.168.56.5/24`
	
- Adapter 2: _None_
        
**VM2 :**
- Adapter 1: Host‑Only (vboxnet0) → `192.168.56.6/24`
	
- Adapter 2: Host‑Only (vboxnet1) → `192.168.57.5/24`
        
**VM3 :**
- Adapter 1: Host‑Only (vboxnet1) → `192.168.57.6/24`
	
- Adapter 2: _None_
        
___

- `vboxnet0`: connects **VM1** and **VM2**
    
- `vboxnet1`: connects **VM2** and **VM3**

```
VM1 (192.168.56.5/24)──[vboxnet0]──VM2 (192.168.56.6/24, ens3)
                                    │
                                    │
                    (ens8, 192.168.57.5/24)──[vboxnet1]──VM3 (192.168.57.6/24)
```


## Configuration Steps

### Step 1: Create & Assign IPs

On each VM, check interfaces:

```bash
# On VM1, VM2, VM3
ifconfig
```

If Specific IP are needed, Configuring interfaces (chosen from output) through `ifconfig`
```bash
#VM1
sudo ifconfig enp0s31f6 192.168.56.5/24 up
```

```bash
# On VM2
sudo ifconfig enp0s31f6 192.168.56.6/24 up
sudo ifconfig enp0s31f6 192.168.57.5/24 up
```

```bash
# On VM3
sudo ifconfig enp0s31f6 192.168.57.6/24 up
```

Confirm with:

```bash
ip addr show
# or
ip a show
```

#### Similar Configuration with IP

```bash
sudo ip addr add 192.168.56.5/24 dev enp0s31f6
sudo ip link set enp0s31f6 up
```
* Assigns the IP address and subnet mask to the interface.
* Brings the interface **up** (activates it).

```bash
sudo ip addr del 192.168.56.5/24 dev enp0s31f6
```
To remove the IP from an Interface.

---

### Step 2: Test Initial Connectivity

- **VM3 ➝ VM2 (first)**:

```bash
ping -c 3 192.168.57.5    # Should succeed
```

- **VM3 ➝ VM2 (second)**:

```bash
ping -c 3 192.168.56.6    # Should fail
```

- **VM3 ➝ VM1**:

```bash
ping -c 3 192.168.56.5    # Should fail
```


---

### Step 3: Enable IP Forwarding & NAT on VM2

```bash
sudo -i
```

Check Current state of forwarding
```bash
cat /proc/sys/net/ipv4/ip_forward
```
the output will be `0` meaning False.

```bash
# Enable forwarding
echo 1 > /proc/sys/net/ipv4/ip_forward
```

> To change Permanently, Add in `/etc/sysctl.conf`,  `net.ipv4.ip_forward = 1`,  `sudo sysctl -p`

**Configure iptables rules**: 

```bash
iptables -P FORWARD ACCEPT

iptables -t nat -A POSTROUTING -o enp0s31f6 -j MASQUERADE
```

These allow **VM2** to forward and NAT packets between subnets.

---

### Step 4: Set Default Gateway on VM3

```bash
# Tell VM3 to use VM2 as gateway
sudo route add default gw 192.168.57.5
```

Verify:

```bash
ip route show
```

Should show `default via 192.168.57.5`.

---

### Step 5: Configure VM1

If **VM1** needs to route traffic to **VM3**, configure:

```bash
sudo route add default gw 192.168.56.6
```

---

### Step 6: Final Connectivity Test

- On **VM1**:

```bash
ping -c 3 192.168.57.6    # Should succeed
```

- On **VM3**:

```bash
ping -c 3 192.168.56.5    # Should succeed
```

- **VM2** acts as a forwarder between networks.
    
- Proper routing and NAT ensure end-to-end connectivity.

