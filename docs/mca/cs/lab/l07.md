
# Wireshark Notes for Cybersecurity

## 1. Introduction to Wireshark

Wireshark is a free, open-source network protocol analyzer. It is one of the most important tools in a cybersecurity analyst’s toolkit.

- Captures and displays real-time network traffic in a readable format.
    
- Supports deep packet inspection for hundreds of network protocols.
    
- Useful for protocol analysis, malware detection, intrusion detection, digital forensics, and network troubleshooting.
    
- Commonly used to detect suspicious behavior, investigate breaches, and validate network security controls.
    

## 2. Installation

### On Ubuntu/Debian:

```bash
sudo apt update

sudo apt install wireshark
```

If prompted:  
“Should non-superusers be able to capture packets?” → Choose **Yes** if you want regular users to capture packets.

To allow a user to capture packets:

```bash
sudo usermod -aG wireshark $USER
newgrp wireshark
```

Log out and log in again to apply the changes.


## 3. Interface Selection

When Wireshark is opened, it shows a list of all available network interfaces.

- Select the interface connected to the network to be analyzed (e.g., `eth0`, `wlan0`, `lo`).
    
- Click the shark fin (Start Capture) to begin capturing live packets on that interface.
    

## 4. Key Wireshark Features for Security Analysis

| Feature                | Purpose                                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| Live Capture           | Monitor network packets in real-time. Useful for detecting ongoing attacks or anomalies.               |
| Filtering              | Helps isolate relevant traffic quickly. Useful for narrowing down suspicious connections or protocols. |
| Protocol Decoding      | Analyzes packet details for protocols like HTTP, TCP, DNS, etc.                                        |
| Follow TCP Stream      | Reconstructs entire conversations (like login sessions or downloads) for a specific TCP connection.    |
| Export Objects         | Extract files transferred over HTTP, FTP, or SMB. Helps in malware analysis.                           |
| Packet Coloring        | Visually highlights different types of packets, making patterns easier to spot.                        |
| Marking and Commenting | Allows analysts to annotate packets during investigation.                                              |

## 5. Capture Filters vs Display Filters

### Capture Filters

Capture filters are applied before data is collected. They limit which packets Wireshark will store.

Examples (BPF syntax):

```bash
port 80               # Capture only HTTP traffic

host 192.168.1.10     # Traffic to or from IP 192.168.1.10

tcp                   # Only TCP traffic

udp                   # Only UDP traffic

net 192.168.1.0/24    # All traffic from subnet
```

### Display Filters

Display filters are used after capture to filter what you see in the packet list.

```bash
ip.addr == 192.168.1.10    # Show traffic involving this IP

tcp.port == 22             # Show SSH traffic

http.request               # Show HTTP GET/POST requests

dns.qry.name == "example.com"   
# Show DNS queries to a specific domain

tcp.flags.syn == 1 and tcp.flags.ack == 0  
# Show SYN scans (used by Nmap)
```

## 6. Use Cases in Cybersecurity

### Detecting Port Scans

Display filter:

```bash
tcp.flags.syn == 1 and tcp.flags.ack == 0
```

- Shows initial SYN packets sent during port scanning.
    
- Check for a high number of such packets from a single source IP to multiple destination ports.
    
### DNS Tunneling Detection

Display filter:

```bash
dns and frame.len > 300
```

- Suspiciously large DNS packets could indicate data exfiltration through DNS queries.
    
- Often used by malware for bypassing firewalls.
    
### Detecting Malicious File Downloads

Display filter:

```bash
http contains ".exe"
```

- Shows packets where `.exe` files may be transmitted over HTTP.
    
- Export these files: File → Export Objects → HTTP
    
### Credential Theft (Cleartext Protocols)

Protocols like Telnet, FTP, and HTTP may transmit credentials unencrypted.

- Use: Right-click → Follow TCP Stream
    
- Look for usernames and passwords in the stream, especially in POST requests or FTP commands.
    
### Man-in-the-Middle (MITM) Detection

ARP spoofing is a common MITM method.

Display filter:

```bash
arp.duplicate-address-detected == 1
```

- Detects attempts to impersonate another device on the LAN.
    
### Detecting Command and Control Traffic

Look for:

- Repetitive periodic connections (beaconing).
    
- Long HTTP POST requests with binary or encoded data.
    
- Obscure user-agents or connections to rare domains.
    
## 7. Exporting and Documentation

- Save the full capture: File → Save As (`.pcapng` format).
    
- Export individual packets or streams: Right-click → Export Packet Bytes
    
- Mark important packets: Select → Press `Ctrl+M`
    
- Add comments: Press `Ctrl+Shift+M` after marking
    
## 8. Tips for Effective Analysis

- Use **display filters** early to reduce noise and focus on suspicious traffic.
    
- Focus on **time windows** (e.g., known time of compromise).
    
- Customize **coloring rules**: View → Coloring Rules.
    
- Use **profiles** to save your preferred layouts, filters, and settings.
    
## 9. Command-Line Equivalent: TShark

`tshark` is the terminal-based version of Wireshark, suitable for automation and scripting.

Example: capture HTTP traffic and save it

```bash
sudo tshark -i eth0 -f "port 80" -w capture.pcap
```

To read a saved capture:

```bash
tshark -r capture.pcap
```

To apply a display filter:

```bash
tshark -r capture.pcap -Y "ip.addr == 192.168.1.10"
```

## 10. Sample Filters

| Task                                      | Display Filter                               |
| ----------------------------------------- | -------------------------------------------- |
| View HTTP traffic                         | `http`                                       |
| Detect SYN scan                           | `tcp.flags.syn == 1 and tcp.flags.ack == 0`  |
| Extract FTP/Telnet credentials            | Use "Follow TCP Stream" on `ftp` or `telnet` |
| Monitor DNS queries to suspicious domains | `dns.qry.name == "suspicious.com"`           |
| View SSL/TLS packets                      | `ssl` or `tls`                               |
| Show ping (ICMP) traffic                  | `icmp`                                       |
| Find large DNS packets                    | `dns and frame.len > 300`                    |
|                                           |                                              |

