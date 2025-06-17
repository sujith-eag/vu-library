
# Static Routing

Static routing is a method of manually configuring routes in a router’s routing table. In this approach:

- The network administrator defines the path for data packets manually.
    
- Unlike **dynamic routing**, routers do **not** automatically learn routes.
    
- **Dynamic routing** uses protocols like **RIP** and **OSPF** to discover routes automatically.
    
## Introduction to Router

A **router** is a networking device that connects multiple computer networks and directs data packets between them.

### Key Functions:

- Operates at **Layer 3** (Network Layer) of the OSI model, Analyzes incoming data packets to determine destination address.
    
- Determines the best path to forward incoming packets.
    
- Facilitates communication between different **IP networks**.
    
- Manages traffic between different IP networks like  **LANs** (Local Area Networks) and the **WAN** (Wide Area Network).
    

### Cisco Router Configuration Modes:

|Mode|Prompt|Description|
|---|---|---|
|User EXEC Mode|`Router>`|Basic monitoring commands|
|Privileged EXEC Mode|`Router#`|Full access to show and debug commands|
|Global Config Mode|`Router(config)#`|Configure global router settings|
|Interface Config Mode|`Router(config-if)#`|Configure individual interfaces|

## Four Modes of Cisco Router Configuration

### 1. User EXEC Mode

- **Prompt:** `Router>`
    
- Initial mode after accessing the router.
    
- Allows **basic monitoring**.
    
- **Examples:**
    
    - `show version`
        
    - `ping 8.8.8.8`
        

### 2. Privileged EXEC Mode

- **Prompt:** `Router#`
    
- Entered using the `enable` command.
    
- Allows access to all user-level and configuration commands.
    
- **Examples:**
    
    - `show running-config`
        
    - `reload`
        

### 3. Global Configuration Mode

- **Prompt:** `Router(config)#`
    
- Entered using `configure terminal` in Privileged EXEC Mode.
    
- Used to configure **global router settings**.
    
- **Example:** `hostname CoreRouter`
    

### 4. Interface Configuration Mode

- **Prompt:** `Router(config-if)#`
    
- Entered using `interface FastEthernet0/0` in Global Config Mode.
    
- Used for **interface-specific configurations** (IP, speed, description).
    
- **Examples:**
    
    - `ip address 192.168.1.1 255.255.255.0`
        
    - `no shutdown`
        
## Basic Commands for Cisco Router Configuration

### 1. User EXEC Mode Commands (`Router>`)

- `ping 192.168.1.1` — Test connectivity.
    
- `traceroute 8.8.8.8` — Trace the route to Google DNS.
    
- `show version` — Displays OS version and hardware info.
    
- `show ip interface brief` — Summary of interface statuses.
    

### 2. Privileged EXEC Mode Commands (`Router#`)

- `enable` — Switch to Privileged EXEC Mode.
    
- `show running-config` — Show current configuration.
    
- `show startup-config` — View saved configuration in NVRAM.
    
- `copy running-config startup-config` — Save current settings.
    
- `reload` — Restart the router.
    

### 3. Global Configuration Mode Commands (`Router(config)#`)

- `hostname CoreRouter` — Change router hostname.
    
- `interface FastEthernet0/0` — Enter interface config mode.
    
- `ip route 10.0.0.0 255.0.0.0 192.168.1.2` — Add static route to 10.0.0.0 via 192.168.1.2
	

### 4. Interface Configuration Mode Commands (`Router(config-if)#`)

- `ip address 192.168.1.1 255.255.255.0` — Assign IP.
    
- `no shutdown` — Enable interface.
    
- `description Link-to-Switch1` — Add interface description (label for connection).
    
- `duplex full` / `speed 100` — Set duplex and speed.
    

### 5. Other Useful Shortcuts

- `TAB` — Auto-complete command.
    
- `Ctrl + Z` — Return to Privileged EXEC Mode.
    
- `Ctrl + C` — Cancel command.
    
- `?` — List available commands (show ? lists all "show" subcommands).
    
## Static Routing Configuration Example

Configure static routing between **R1** and **R2** using FastEthernet interfaces.

### Network Diagram Details

| Router | Interface       | IP Address | Network    |
| ------ | --------------- | ---------- | ---------- |
| R1     | FastEthernet0/0 | 10.0.0.1   | 10.0.0.0/8 |
| R1     | FastEthernet0/1 | 20.0.0.1   | 20.0.0.0/8 |
| R2     | FastEthernet0/0 | 20.0.0.2   | 20.0.0.0/8 |
| R2     | FastEthernet0/1 | 30.0.0.1   | 30.0.0.0/8 |

Interconnecting Network (between R1 and R2): 20.0.0.0/8

---

### Configuration Steps

#### R1 Configuration

```bash
R1(config)# interface fastethernet0/0
R1(config-if)# ip address 10.0.0.1 255.0.0.0
R1(config-if)# no shutdown

R1(config)# interface fastethernet0/1
R1(config-if)# ip address 20.0.0.1 255.0.0.0
R1(config-if)# no shutdown

! Add static route to R2's LAN
R1(config)# ip route 30.0.0.0 255.0.0.0 20.0.0.2
```

#### R2 Configuration

```bash
R2(config)# interface fastethernet0/0
R2(config-if)# ip address 20.0.0.2 255.0.0.0
R2(config-if)# no shutdown

R2(config)# interface fastethernet0/1
R2(config-if)# ip address 30.0.0.1 255.0.0.0
R2(config-if)# no shutdown

! Add static route to R1's LAN
R2(config)# ip route 10.0.0.0 255.0.0.0 20.0.0.1
```

### Static Route Syntax

```bash
ip route <destination-network> <subnet-mask> <next-hop-IP>
```

## Expected Outcome

- All interfaces should be in **up/up** state after using `no shutdown`.
    
- R1 and R2 should successfully **ping each other's LAN IPs**:
    
    - From R1: `ping 30.0.0.1`
        
    - From R2: `ping 10.0.0.1`
        
- `show ip route` should display manually configured static routes.
    
- `show ip interface brief` should confirm correct IP assignments and interface status.
    


## Installation and Configuration of FTP Server using ProFTPD

Install and configure an FTP server on PC1 using ProFTPD, allowing FTP clients to upload and download files successfully.

### Step-by-Step Procedure


1. Install ProFTPD
    
```bash
sudo apt-get update
sudo apt-get install proftpd
```
    
- During installation, select **standalone mode** and press **Enter** to complete.
        
2. Configure ProFTPD
    
```bash
sudo nano /etc/proftpd/proftpd.conf
```
    
Make the following changes in the configuration file:
- Set `UseIPv6 off`
	
- Set `ServerName "CNLAB.com"`
	
- Uncomment `DefaultRoot ~`
	
- Set `RequireValidShell on`
	
- Uncomment `AuthOrder mod_auth_unix.c`
	
- Save and exit: **Ctrl + O**, **Enter**, then **Ctrl + X**.
	
3. **Add `/bin/false` to Valid Shells**
    
```bash
sudo nano /etc/shells
```
    
Add the following line at the end of the file:    
```
/bin/false
```
    
4. **Create FTP User**
    
```bash
sudo useradd -d /var/www/ -s /bin/false ftpuser
sudo passwd ftpuser
```    
When prompted, enter and confirm a password (e.g., `myftp123`).
    
5. **Create FTP Directory and Set Permissions**
    
```bash
sudo mkdir -p /var/www/
sudo chown ftpuser:ftpuser /var/www/
```
    
6. **Restart ProFTPD Service**
    
```bash
sudo systemctl restart proftpd
```
    
7. **Access FTP Server from Client (PC2 or PC3)**
    
```bash
ftp 172.20.10.X
```
Replace `X` with the correct IP address of PC1.  Enter the FTP username and password when prompted.
    
8. **Test File Transfer Commands**  
Inside the FTP session:
    
```
ftp> put Hello.txt      # To upload
ftp> get Hello.txt      # To download
ftp> ls                 # To list files
ftp> quit               # To exit
```
    
9. **Fixing "Permission Denied" Error (if encountered)**  
    
If you receive the error:
```
550 Hello.txt: Permission denied
```
    
Run the following commands:
```bash
sudo chown ftpuser:ftpuser /var/www/
sudo chmod 755 /var/www/
sudo systemctl restart proftpd
```


The FTP server should allow a successful login using the `ftpuser` account. File uploads and downloads should function correctly without any permission issues.
