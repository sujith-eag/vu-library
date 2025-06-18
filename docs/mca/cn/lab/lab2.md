
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

## For Modes of Cisco Router Configuration

Cisco routers operate through a hierarchical command-line interface with different modes, each serving specific purposes in configuration and monitoring. The four primary configuration modes are:


### 1. User EXEC Mode

- **Prompt:** `Router>`
    
- **Access Level:** Basic user access; read-only.
    
- **Entered by:** Logging into the router.
    
- **Purpose:** Basic monitoring and diagnostics. No configuration allowed.
    
- **Exit:** Type `logout` or `exit`.
    

#### Common Commands:

- `ping 8.8.8.8` – Test connectivity to a remote host.
    
- `traceroute 8.8.8.8` – Show the path packets take to Google DNS.
    
- `show version` – Display IOS version and system information.
    
- `show ip interface brief` – Summarize interfaces and statuses.
    
- `?` – View available commands.
    

---

### 2. Privileged EXEC Mode

- **Prompt:** `Router#`
    
- **Access Level:** Full read access and limited write access.
    
- **Entered by:** Typing `enable` from User EXEC Mode.
    
- **Purpose:** View detailed configuration, debug, and access all operational commands.
    
- **Exit:** Use `disable` to return to User EXEC Mode.
    

#### Common Commands:

- `show running-config` – Display current configuration.
    
- `show startup-config` – View saved configuration in NVRAM.
    
- `copy running-config startup-config` – Save current configuration.
    
- `reload` – Reboot the router.
    
- `debug [option]` – Enable troubleshooting/debugging.
    
- `configure terminal` – Enter Global Configuration Mode.
    
- `Ctrl + Z` – Return to Privileged EXEC Mode from any configuration mode.
    

---

### 3. Global Configuration Mode

- **Prompt:** `Router(config)#`
    
- **Access Level:** Full write access to system-wide settings.
    
- **Entered by:** Typing `configure terminal` from Privileged EXEC Mode.
    
- **Purpose:** Modify global device configurations.
    
- **Exit:** Use `exit` to return to Privileged EXEC Mode or `Ctrl + Z`.
    
#### Common Commands:

- `hostname CoreRouter` – Change the device name.
    
- `enable secret [password]` – Set encrypted Privileged EXEC password.
    
- `line console 0` / `line vty 0 4` – Configure console/remote access.
    
- `interface FastEthernet0/0` – Enter Interface Configuration Mode.
    
- `ip route [dest] [mask] [next-hop]` – Add static routes.
	
- `ip route 10.0.0.0 255.0.0.0 192.168.1.2` — Add static route to 10.0.0.0 via 192.168.1.2
	
- `banner motd #Message#` – Set login banner message.
    

---

### 4. Interface Configuration Mode

- **Prompt:** `Router(config-if)#`
    
- **Access Level:** Modify settings specific to an interface.
    
- **Entered by:** From Global Config Mode: `interface [type] [number]`  
    _(e.g., `interface FastEthernet0/0`)_
    
- **Purpose:** Configure individual router interfaces (IP, speed, duplex).
    
- **Exit:** Use `exit` to return to Global Configuration Mode.
    

#### Common Commands:

- `ip address 192.168.1.1 255.255.255.0` – Assign IP address.
    
- `no shutdown` – Enable the interface (bring it up).
    
- `shutdown` – Disable the interface.
    
- `description Link-to-Switch1` – Label interface.
    
- `duplex full` – Set full-duplex communication.
    
- `speed 100` – Set speed to 100 Mbps.
    

---

### Useful Keyboard Shortcuts and CLI Tips

|Shortcut|Function|
|---|---|
|`TAB`|Auto-complete the current command.|
|`?`|Display available commands or options.|
|`Ctrl + C`|Cancel current command or operation.|
|`Ctrl + Z`|Exit to Privileged EXEC Mode.|
|`UP/DOWN arrows`|Scroll through command history.|
|`SHOW ?`|List all "show" command options.|

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
    


# FTP Server using ProFTPD

Set up an FTP server on **PC1** using **ProFTPD**, allowing clients to upload and download files via FTP.

## Step-by-Step Procedure

#### 1. Update Package Repository and Install ProFTPD

```bash
sudo apt-get update
sudo apt-get install proftpd
```

- During installation, select **"standalone"** mode using the arrow keys and press **Enter**.
    
#### **2. Configure ProFTPD Settings**

Edit the main configuration file:

```bash
sudo nano /etc/proftpd/proftpd.conf
```

Make the following changes:

- Disable IPv6:

```apache
UseIPv6 off
```

- Set a custom server name:

```apache
ServerName "CNLAB.com"
```

- Uncomment to restrict FTP users to their home directories:

```apache
DefaultRoot ~
```

- Enter the absolute path for the folder to be set for serving:

```apache
RequireValidShell on
```

- Uncomment authentication module line:

```apache
AuthOrder mod_auth_unix.c
```

**Save and exit:**  
Press `Ctrl + O` → `Enter` → `Ctrl + X`

---

#### 3. Add `/bin/false` to Valid Shells

This step ensures that users with `/bin/false` as their shell can still authenticate for FTP.

```bash
sudo nano /etc/shells
```

**Add this line at the end:**

```
/bin/false
```

---

#### 4. Create FTP User

Create a user with restricted shell access and assign a home directory:

```bash
sudo useradd -d /var/www/ -s /bin/false ftpuser
sudo passwd ftpuser
```

> When prompted, enter and confirm a password (e.g., `myftp123`).

---

#### 5. Create FTP Directory and Set Ownership

Ensure the user's home directory exists and has correct permissions:

```bash
sudo mkdir -p /var/www/
sudo chown ftpuser:ftpuser /var/www/
sudo chmod 755 /var/www/
```

> `chmod 755` allows read & execute access to others so FTP commands work.

---

#### 6. Allow FTP Through the Firewall (If UFW Is Enabled)

If the firewall is active, allow FTP traffic:

```bash
sudo ufw allow 21/tcp
sudo ufw reload
```

---

#### 7. Restart ProFTPD Service

Apply the configuration changes:

```bash
sudo systemctl restart proftpd
```

---

#### 8. Test FTP Connection from Client PC (PC2 or PC3)

On another PC in the same network:

```bash
ftp 172.20.10.X
```

> Replace `X` with PC1’s actual IP address.  
> Log in using:
> 
> - **Username:** `ftpuser`
>     
> - **Password:** `myftp123` (or your chosen password)
>     

---

### 9. Test File Upload/Download

Inside the FTP session:

```bash
ftp> put Hello.txt      # Upload a file
ftp> get Hello.txt      # Download a file
ftp> ls                 # List directory contents
ftp> quit               # Exit FTP session
```

---

### 10. Fixing Common Errors (Permission Denied)

If you see:

```
550 Hello.txt: Permission denied
```

Run:

```bash
sudo chown ftpuser:ftpuser /var/www/
sudo chmod 755 /var/www/
sudo systemctl restart proftpd
```

---

### Final Verification

- FTP login should succeed using `ftpuser`.
    
- Uploads (`put`) and downloads (`get`) should complete without errors.
    
- Directory listing (`ls`) should show files in `/var/www/`.
    