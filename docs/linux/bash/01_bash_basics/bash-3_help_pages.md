---
title: "Bash - 03 - help pages"
description: ""
summary: ""
date: 2024-10-22T09:33:44+05:30
lastmod: 2024-10-22T09:33:44+05:30
draft: false
weight: 972
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Linux provides several forms of support, with the most commonly used being the **man (manual)** pages.

**`--help`** : Pass this option to any command to see the available options.
```bash {frame="none"}
cd --help
ls --help
mkdir --help
```

**`help`** : Provides help for built-in shell commands.
```bash {frame="none"}
help cd
help echo  
# Works for built-in commands only
```

For commands with both long (`--option`) and short (`-o`) versions, use the short version in the terminal and the long version in scripts for clarity.


---

### **man Pages**

`man` is the manual for a command (if it exists). 
It expects the name of the command as its argument and displays the corresponding **man page**.

```bash {frame="none"}
man ls
man mkdir
```

In the manual:
- **Space** or **B** to scroll down.
- **N** to navigate between search hits.
- **Shift + N** to navigate backwards.

Note: **`man cd`** doesn't exist because `cd` is a built-in shell function. Use `--help` instead.

The man page is displayed within the `vi` editor (view/search mode only).

A man page typically contains sections like:
- **Name**
- **Synopsis**
- **Description**
- **Options**
- **Configuration Files**
- **Exit Codes**
- **Files**
- **Other man pages to consult**

---

### **Other Command Line Help**

#### whatis

**`whatis`** : Provides a brief description of a command.

```bash {frame="none"}
sujith@sujith-Latitude-7490:~$ whatis ls pwd rm rmdir mkdir touch echo
ls (1)               - list directory contents
pwd (1)              - print name of current/working directory
rm (1)               - remove files or directories
rmdir (1)            - remove empty directories
rmdir (2)            - delete a directory
mkdir (1)            - make directories
mkdir (2)            - create a directory
touch (1)            - change file timestamps
echo (1)             - display a line of text
```

**`whatis`** also supports the `-w` option for wildcards.

```bash {frame="none"}
sujith@sujith-Latitude-7490:~$ whatis -w mkd*
mkdir (1)            - make directories
mkdir (2)            - create a directory
mkdirat (2)          - create a directory
mkdosfs (8)          - create an MS-DOS FAT filesystem
mkdtemp (3)          - create a unique temporary directory
```

---

**Searching in `/usr/bin`** To see all available commands which are present in contents of `/usr/bin`.

---

### **Using apropos**

`apropos` allows finding commands using a description.     
It takes a string and searches for commands that has description that match the string provided as an argument.

```bash {frame="none"}
apropos delete
apropos delete directory
```

Using `" "` can help narrow down the search to specific phrases:

```bash {frame="none"}
apropos "remove directory"
```

Using regular expressions (e.g., `.*`) to match anything between words:
```bash {frame="none"}
apropos "remove .* directory"
apropos "delete .* directory"
```


```bash {frame="none"}
sujith@sujith-Latitude-7490:~$ apropos "virtual memory"
mremap (2)           - remap a virtual memory address
proc_sys_vm (5)      - virtual memory subsystem
proc_vmstat (5)      - virtual memory statistics
tmpfs (5)            - a virtual memory filesystem
vmstat (8)           - Report virtual memory statistics
rmdir (2)            - delete a directory
```

```bash {frame="none"}
sujith@sujith-Latitude-7490:~$ apropos "user account"
userdel (8)          - delete a user account and related files
usermod (8)          - modify a user account
```


---
