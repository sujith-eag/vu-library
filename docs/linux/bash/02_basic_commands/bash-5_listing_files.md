---
title: "Bash - 05 - Listing Files"
description: ""
summary: ""
date: 2024-10-22T09:34:28+05:30
lastmod: 2024-10-22T09:34:28+05:30
draft: false
weight: 974
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



The **[*ls*](/personal-site/docs/bash-linux/command-docs/ls-list)** command is used to list files and directories in the current directory.

```bash {frame="none"}
ls ~/Desktop/trial
# Using absolute path

ls /Users/sujith/Desktop/trial
# Another way using absolute path

ls -F Desktop
# List contents of Desktop directory
```

These commands display the contents of the `Desktop` directory (or any specified directory). The `-F` option appends a character to each file to indicate its type (e.g., `/` for directories, `*` for executables).


#### 'ls' with Multiple Directories

```bash {frame="none"}
sujith@sujith-Latitude-7490:~$ ls ./ Desktop/ Documents/ Downloads/
```

In this example, the `ls` command lists the contents of multiple directories. However, using semicolons `;` between the commands might not work as intended because semicolons separate commands rather than options.

```bash {frame="none"}
sujith@sujith-Latitude-7490:~$ ls .; Desktop/; Documents/; Downloads/;

Desktop    Downloads  Music     Public  snap       Videos
Documents  grep.txt   Pictures  repos   Templates
bash: Desktop/: Is a directory
bash: Documents/: Is a directory
bash: Downloads/: Is a directory
```

The `ls` command should be executed separately for each directory or with valid options that do not cause errors.

---

### Long Listing Format

`-l` option to get a more detailed view of files and directories:

```bash {frame="none"}
sujith@sujith-Latitude-7490:~/Desktop$ ls -l
```

```bash {frame="none"}
total 24
drwxrwxr-x 4 sujith sujith 4096 Sep  3 15:29  courses
drwxr-xr-x 2 sujith sujith 4096 Dec 22 16:11 'MCA Sem1 Books'
drwxr-xr-x 4 sujith sujith 4096 Dec 18 19:56  obsidian-vaults
drwxrwxr-x 7 sujith sujith 4096 Oct  6 15:21  Opage
drwxrwxr-x 6 sujith sujith 4096 Dec 24 10:09  pylab
drwxrwxr-x 8 sujith sujith 4096 Oct 26 09:04  websites
-rw-rw-r--  1 sujith sujith   68146 Dec 24 12:43  sujith.jpeg
-rw-rw-r--  1 sujith sujith 2957628 Oct 30 13:52 'Option WorkSheet.pdf'
```

#### Understanding the Output of 'ls -l'

1. **File Type**:  The first part of file permissions. 
    `d` represents a directory
    `-` represents a regular file
    `l` represents a symbolic link

2. **Permissions** (Mode): Shows the file’s access permissions for the owner, group, and others. `rw- r-- ---` 9 characters combined with file type becomes 10 characters.  (`.` at end of permissions to indicate the `SELinux` content)

3. **Hard Links**: The number of hard links pointing to the file. For files, it is usually `1`, and for directories, it is typically `2` but can be more.

4. **User, Group**: The user who owns the file and the group to which it belongs. For most users the group is the user's private group.  `sujith sujith`
 
5. **Size**: The size of the file or directory in bytes. `68146` for the `sujith.jpeg` file.

6. **Last Modified Date**: The last modification date and time of the file or directory. (creation date/time if not modified)

7. **Name**: The name of the file or directory. (For a symbolic link, the name is followed by `->` )


---

### **Useful Options for `ls`**

Options combined with `ls` to modify its output:

`-a` Show hidden files (those starting with `.`) and the `.` (current directory) and `..` (parent directory).     
`-A` Similar to `-a` but excludes `.` and `..`

`-g` Similar to `-l` but the owner is not shown.     
`-G` Group owner is hidden (along with `-l`)

`-h` Displays file sizes in human readable format (KB, MB) (along with `-l`).    
`-i` Shows inode numbers for the files

`-r` Reverse alphabetical order of file listing.    
`-R` Recursive listing (listing all contents of all sub directories)

`-s` Size shown in blocks instead of bytes (along with `-l`).    
`-S` Sort files by size (used with `-l`)

`-t` Sorts files by modification time (along with `-l`).    
`-X` Extension based sorting (along with `-l`)

`-C` Displays the output in columns (default behavior).    
`-1` Displays 1 file per line (not to use columns)


These options an be combined in any order:

```bash {frame="none"}
ls -Fal    # Combined options (file types, human-readable sizes, and long listing)
ls -la     # Long listing with hidden files
ls -al     # Another variation
```

___
