---
title: "Bash - 11 - File Permissions"
description: ""
summary: ""
date: 2024-12-29T16:50:02+05:30
lastmod: 2024-12-29T16:50:02+05:30
draft: false
weight: 980
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



File permissions are a mechanism that supports operating system protection, ensuring that users do not misuse system resources like CPU, memory, or the network. 

Since users primarily interact with files, the resources that we protect with permissions are **files** and **directories**.

### Access Control Mechanism

Many operating systems implement file permissions using **Access Control Lists (ACLs)**. An ACL is attached to a specific file or directory and lists the users and groups that have access rights to that resource. The list can become lengthy, depending on the number of users.

Each **user** or **group** can have specific access rights to a file.
- The **owner** might have **read**, **write**, and **execute** permissions.
- Other users (members of the **group** or the **world**) might have different levels of access, such as **read** or **execute** only.

#### Permission Types and Access Rights

In Linux, file permissions are defined for **three categories**:
- **Owner (`u`)**
- **Group (`g`)**
- **Others (`o`)**, also known as **world**

#### Access Rights:

**`r` (read)**:
- For **files**: Allows viewing, copying, or opening as read-only.
- For **directories**: Allows listing the contents with `ls`.

**`w` (write)**:
- For **files**: Allows overwriting or modifying the file.
- For **directories**: Allows creating, modifying, or deleting files in the directory.

**`x` (execute)**:
- For **files**: Allows executing the file (important for programs or shell scripts).
- For **directories**: Allows `cd` into the directory.

---

### Changing Permissions from the Command Line


#### Using the `chmod` Command

`chmod` (change mode) is used to alter the permissions of a file or directory.

```bash {frame="none"}
chmod permissions file(s)
```
**`file(s)`** refers to the file(s) or directories to which you want to apply the permissions.

**`permissions`** can be specified in three ways: 
using symbols (`+`, `-`, `=`), or numeric values (3-digit numbers).


#### 1. Using `+` and `-` for Permission Changes
This approach adds (`+`) or removes (`-`) specific permissions for the **user (`u`)**, **group (`g`)**, or **others (`o`)** along with `r, w, x`

To **remove** write permission for the **group** and **read** permission for **others**:
```bash {frame="none"}
chmod g-w,o-r file.txt
```

To **add** execute permission for the **owner** and **group**:
```bash {frame="none"}
chmod u+x,g+x file.txt
```

To apply changes to **all** categories (owner, group, others) at once using `a`:
```bash {frame="none"}
chmod a+x file.txt
```


#### 2. Using `=` to Set Exact Permissions

Instead of adding or removing permissions, you can **assign** permissions directly using `=`.

To **assign** `rwx` (read, write, and execute) permissions to the **owner**, `r` (read) to the **group**, and **no permissions** to **others**:
```bash {frame="none"}
chmod u=rwx,g=r,o= file.txt
```

If you do not specify a category (like `u=`), it will **not change** the permissions for that category:
```bash {frame="none"}
chmod g=,o= file.txt  
# Does not change owner permissions
```

You can combine `=` with `+` or `-`:
```bash {frame="none"}
chmod u=rwx,g-w,o-r file
chmod u=rwx,g-w,o= file
chmod u+x,g=r,o-r file
chmod u+x,g-w,o= file
```

#### 3. Using Numeric Permissions

This approach uses **3-digit numbers** to represent permissions. Each digit corresponds to the permissions for **owner**, **group**, and **others**, respectively.

The numbers are calculated by adding:
- `4` for **read (r)**
- `2` for **write (w)**
- `1` for **execute (x)**

To set `rwx` (7), `r-x` (5), and no permissions (0) for owner, group, and others respectively:
```bash {frame="none"}
chmod 750 file.txt  # rwx (7) for owner, r-x (5) for group, no permissions (0) for others
```

##### Breakdown of Permission Calculation:
- `rwx` = 4 + 2 + 1 = **7**
- `r-x` = 4 + 1 = **5**
- `---` = 0 = **0**

So, `750` represents the permissions `rwx r-x ---`.

`----- 000`    
`--x--x--x  111`
`r----- 400` Many more combinations

[table of 3 digit permission meaning]


| Permission | `rwx` | `rw-` | `r-x` | `---` |
| ---------- | ----- | ----- | ----- | ----- |
| **Owner**  | 7     | 6     | 5     | 0     |
| **Group**  | 7     | 6     | 5     | 0     |
| **Others** | 7     | 6     | 5     | 0     |


---


## Changing Ownership and Group


> **Note:** Only the **root** user can change ownership of files. Non-root users can only change the group of a file they own, provided they are a member of the target group.

#### Commands to Change Ownership

**`chown`** is used to change both **owner** and **group** of a file or directory.
```bash {frame="none"}
chown newowner file(s)
chown newowner:newgroup file(s)
```

**`chgrp`** is used to change only the **group** of a file.
```bash {frame="none"}
chgrp newgroup file(s)
```

```bash {frame="none"}
chown fox /home/fox/*.txt
chown www:www /usr/local/apache/htdocs/*

chgrp citg /home/fox/citg/project-data.txt
```

---

## Changing Permissions from the GUI

Many **File Browsers** allow you to view and change file permissions graphically. You can typically right-click on a file or directory, select **Properties**, and then navigate to the **Permissions** tab to make changes.

---

## Advanced Permissions

There are additional, advanced permission types in Linux that provide more complex control over file access:

### **1. SELinux (Security-Enhanced Linux)**

SELinux provides a more complex and granular mechanism for defining access policies compared to the traditional `ugo/rwx` permission system. SELinux operates at a higher level, allowing administrators to enforce security policies that go beyond basic file permissions.

### **2. User ID (Setuid) and Group ID (Setgid)**

- **Setuid** (`s` in the owner’s execute position) is used for executable files. When a user runs a setuid program, it executes with the privileges of the file owner, not the user running it.
- **Setgid** (`s` in the group’s execute position) is used for executable files or directories. When a setgid program is run, it executes with the privileges of the file's group, not the user's group.

### **3. Sticky Bit**

The **sticky bit** is used for directories. When set on a directory, it restricts the deletion of files within the directory so that only the **owner** of a file can delete or modify it, even if other users have write permissions for the directory.

- Setting the sticky bit on a directory:
```bash {frame="none"}
chmod +t /some/directory
```


> **Example Scenario**: A directory with **777** permissions would allow anyone to read, write, or execute files in it. However, when the **sticky bit** is set, only the file owner can delete or modify their files, even though others can still read and write.

---

