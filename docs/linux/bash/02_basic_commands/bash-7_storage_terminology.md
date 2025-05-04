---
title: "Bash - 07 - Storage Terminology in Linux"
description: ""
summary: ""
date: 2024-12-29T16:48:21+05:30
lastmod: 2024-12-29T16:48:21+05:30
draft: false
weight: 976
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Key concepts related to storage and file management in Linux.

#### File Space

File space is the physical collection of storage devices (like hard drives or SSDs) used to store files and makes up the locations of all files and directories. This space can be viewed in two ways:

- **Logical View**: This is the way we interact with files and directories. Files and directories are organized hierarchically and accessed by logical names (e.g., `home/user/documents`).

- **Physical View**: This is the actual layout of the files on physical storage devices. We can view the file space as devices, partitions, mountings and breakdown of the files into their disk block. The files are stored as blocks scattered across disk surfaces.

OS have commands to show both views but we prefer to see logical view.

___

## Files and Directories

### Files:     

A File is the smallest logical unit within the file space. It is a container for storing information or a sequence of characters. It has properties like name, type, and data.     
The file will contain only what is written in it, there is no end-of-file (eof) mark. A file's size, nor even it's name is not stored in the file itself. It is all kept separately in the disk which is only accessible to the kernel.    

Files are stored as a collection of disk blocks. These blocks might not be stored contiguously on the disk and can be scattered.    

UNIX treats directories and devices also as files only, so is the shell and kernel.  


**Ordinary file (Regular files)** : Contains only data as a stream of characters. Text files and Binary files.
* **Text file** contains printable characters which makes up viewable contents.
* **Binary files** contain both printable and unprintable characters that cover the entire ASCII range.  Most of UNIX commands are Binary files. Executable files, Pictures, sound and video files are all binary files.

**Directory files** : A directory contains no data but keeps the names of files / directories it contains and a number associated with them called the inode number. Directories are used to organize files in a hierarchical structure. Sub-directories can be created within a directory to form a deeper organizational structure.

**Device files** : All devices and peripherals are represented by files. To read or write a device, operations has to be performed on its associated file.    
Device file names are usually found within the `/dev` directory.

___

### Partitioning

A **partition** is a physical division of storage on a device. Linux allows partitions to be mounted into specific locations (directories) in the filesystem. Partitions can be used to separate system files, user files, and virtual memory (swap space).

**Mounting**: The process of associating a partition with a directory so that the files on the partition are accessible through that directory.
For backing up, we can `unmount` a specific partition containing that content and while unmounted, no one can access it. Other partitions will not be affected.

**Logical Volume Manager (LVM)**: An alternative to physical partitioning that allows more flexible management of disk space so no restriction on partition growth. It can dynamically allocate disk space without the need for physical partitions, but it may introduce overhead to disk access and also problem loading `kernel` files.

Linux offers three separate partitions: `/boot`, `LVM` and `swap`
`/boot` must be separated from `LVM` and also `swap` as swap space (virtual memory) is treated differently from rest of the file space and not directly accessed by the user.

___

### Inode

An **inode** is additional part of Linux file space, it is a data structure that doesn't contain the name and contents but stores all metadata about a file, such as:
- File type (regular file, directory, symbolic link, etc.)
- File owner UID and group GID
- File Permissions (nine permissions and three more)
- Timestamps (creation, modification, access times)
- An Array of Pointers to the data blocks on disk that store the file's content
- Number of links (number of aliases the file has)
- File size in bytes

Each file, directory, and symbolic link has an associated inode. The inode does not contain the file's name, but the name is associated with the inode through directory entries.

___

#### Links

`link` is a pointer which points from a file in a directory to its `inode` which contains pointers to point at the files's physical blocks.

- **Hard Link**:  Points directly at the file's `inode`. A hard link is a direct reference to the inode of a file. Multiple hard links can point to the same inode, and they are indistinguishable from the original file. When the link count of a file (i.e., the number of hard links) is greater than one, the file is still accessible as long as one link exists.

- **Symbolic (Soft) Link**:  Points at a hard link. A symbolic link is a reference to another file or directory by its path. A symbolic link can point to a file in another directory and is distinguishable from regular files by the leading `l` in the file permissions (`lrwxrwxrwx`).
- The name is indicated as `link -> file` where `link` is the symbolic link and the `file` is the item being pointed at. The file will be in another directory.

___

### Relative and Absolute Paths

We will be in `current working directory` and accessing files in another directory needs specifying a directory path.

There are two primary ways to access files:

1. **Absolute Path**: Starts from the root directory (`/`) and specifies the full path to a file or directory. `/home/user/Documents/file.txt`

2. **Relative Path**: Describes the location relative to the current working directory. It does not start with a `/` and uses `.` for the current directory and `..` for the parent directory.
 `../Documents/file.txt` (moving up one directory and then down into `Documents`).
 
**Special Directory References**:
- `.`  : Represents the current directory.
- `..`  : Represents the parent directory.
- The path can be omitted for executable files if the file is stored in our `PATH` variable.

___

#### 'PATH' Variable

The `PATH` environment variable holds a list of directories where executable files are located. When you type a command like `ls` or `cat`, the system checks these directories to find the corresponding executable.

```bash {frame="none"}
/home/sujith/.nvm/versions/node/v20.17.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin
```

`PATH` variable  can be modified, to add new directories:

```bash {frame="none"}
PATH=$PATH:/new/directory

PATH=new_directory:$PATH
```

___

#### Filename Arguments and Wildcards

**Wildcard Expansion (Globbing)**: 

Bash allows the use of wildcards (also called globbing) to match multiple files.
- `*`: Matches any number of characters.
- `?`: Matches exactly one character.
- `[chars]`: Matches one character from the specified list.
- `[char1-char2]`: Matches one character within the specified range. `[0-9] [a-e] [A-Z]`
- `{word1,word2, word3}`: Matches any of the specified words.
- `[!chars]`  match any one character not in the list   `ls [!a]*` means first character not `a`

`ls *.txt`: Lists all files with a `.txt` extension.
`ls f*`: Lists all files starting with `f`.

`ls [abc]*`: Lists all files starting with either `a`, `b`, or `c`. `[]` is for one character only.
`ls [abc][abc][abc]`

`ls file?.{dat,txt}`: Lists files like `file1.dat`, `file2.txt`, etc.

___

#### **The Top-Level Directory Structure**

[image of top-level directory structure of Linux]

Every Linux distribution has a standard set of top-level directories. Some of the common top-level directories include:

**`/boot`**: Contains files required to boot the system, such as the Linux kernel.

**`/dev`**: Contains all device files, which represent hardware devices. These files do not occupy space on the disk.

**`/etc`**: Contains system configuration files.

**`/proc`**: A virtual filesystem providing information about processes and kernel parameters.

**`/usr`**: Contains user binaries, libraries, and documentation.

`/usr/share/man` : Contains the man pages.

`/bin` and `/usr/bin` : Contains all commonly used UNIX commands (Binaries, hence the name bin).

`/sbin` and `/usr/sbin` : Commands a system administrator can execute would be in these directories.

___

Users work with their own files, write programs and create files. These are available in `/tmp, /var, /home`.   

**`/home`**: The home directory for all the users.

**`/tmp`** : Where a user is allowed to create temporary files which are wiped away regularly by the system.

**`/var`**: Contains variable data such as log files and databases of the file system.


___
