
# VirtualBox VM Setup Guide

### Add Oracle’s GPG key and repository:

```bash
sudo apt update
sudo apt install -y gnupg wget
wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
echo "deb [arch=amd64] https://download.virtualbox.org/virtualbox/debian $(lsb_release -cs) contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list
```

### b. Install VirtualBox:

```bash
sudo apt update
sudo apt install virtualbox-7.0
```

Check installation:

```bash
virtualbox
```

---

**2. Download Lubuntu 16.04 ISO**

- Official archived ISO:  
    [https://cdimage.ubuntu.com/lubuntu/releases/16.04/release/](https://cdimage.ubuntu.com/lubuntu/releases/16.04/release/)

**3. Create a Virtual Machine in VirtualBox**

a. Launch VirtualBox, Click **"New"** and configure:

---

**4. Network Settings**

Two main options depending on your use case.

**a. NAT (Default – For Internet Access)**

- Go to **Settings > Network**
    
- Adapter 1: Attached to **NAT**
    
- This allows the VM to access the internet through your host system
    

**b. Detached Mode (for GNS3 or Host-only networking)**

- Go to **Settings > Network**
    
- Adapter 1: Attached to **Bridged Adapter** or **Host-only Adapter**
    
- Bridged: VM will get IP from the same network as the host (works for GNS3)
    
- Host-only: Useful for isolated lab setups without internet
    

Optional: Add a second adapter for dual-networking

- Adapter 2: Enable and attach to **Host-only Adapter** or **Internal Network** as needed for GNS3 or lab designs
    
___

**5. Post-Installation**

After first login:

- Update packages:
    
```bash
sudo apt update && sudo apt upgrade -y
```

- Install `openssh-server` (for remote access):
    
```bash
sudo apt install openssh-server
```

* Check SSH service status:
	
```bash
sudo systemctl status ssh
```

You should see `active (running)`. If not, start and enable it:
	
```bash
sudo systemctl enable ssh
sudo systemctl start ssh
```
	
Check listening port (default is 22):

```bash
ss -tlnp | grep ssh
```

Optional: Adjust firewall to allow SSH (if UFW is enabled):

```bash
sudo ufw allow ssh
sudo ufw enable
```

Test SSH Access from Another PC:

```bash
ssh yourusername@<ip-of-vm>
```

---

**c. Install and Configure ProFTPD (FTP Server)**

* Install ProFTPD:
	
```bash
sudo apt install proftpd
```

- During installation, choose **standalone mode** and press Enter.
    

* Edit ProFTPD configuration:

```bash
sudo nano /etc/proftpd/proftpd.conf
```

> Make the required changes or confirmations to the file:

* Add `/bin/false` to valid login shells:

```bash
echo "/bin/false" | sudo tee -a /etc/shells
```

* Create an FTP user (with restricted shell):

```bash
sudo useradd -d /var/ftp -s /bin/false ftpuser
sudo passwd ftpuser
```

* Create the FTP directory and set ownership:

```bash
sudo mkdir -p /var/ftp
sudo chown ftpuser:ftpuser /var/ftp
sudo chmod 755 /var/ftp
```

* Restart the FTP service:

```bash
sudo systemctl restart proftpd
```

* Test FTP Access from a Client:

```bash
ftp <ip-of-vm>
```

Use `ftpuser` and the password you set. Try uploading or downloading a file.

