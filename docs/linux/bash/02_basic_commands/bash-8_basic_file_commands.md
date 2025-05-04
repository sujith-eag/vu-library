---
title: "Bash - 08 - Basic File Commands"
description: ""
summary: ""
date: 2024-12-29T16:48:46+05:30
lastmod: 2024-12-29T16:48:46+05:30
draft: false
weight: 976
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




Many file commands can operate on many different types of items because Linux treats them all as files.      
Linux treats various entities such as regular files, directories, symbolic links, pipes, sockets, and device files as files.   

---

### file Command

The `file` command is used to determine the type of a file. It analyzes the contents of a file and returns a description of its type.

```bash {frame="none"}
file <filename>
```

```bash {frame="none"}
sujith@sujith-Latitude-7490:~$ file /home/sujith/Downloads/Print\ Resume.pdf
/home/sujith/Downloads/Print Resume.pdf: PDF document, version 1.4, 1 page(s)

sujith@sujith-Latitude-7490:~$ file /etc/passwd
/etc/passwd: ASCII text

sujith@sujith-Latitude-7490:~$ file -i /etc/passwd
/etc/passwd: text/plain; charset=us-ascii
```

The `-i` flag adds MIME type information along with the file description.


---

### Common File Commands


#### pwd (Print Working Directory)

[*pwd*](/personal-site/docs/bash-linux/command-docs/pwd) - Displays the current working directory.
`~`  tilde character at the start of a path means **the current users home directory**

`~/data` refers to `/Users/sujith/data`, useful for absolute path typing.


#### cd (Change Directory)

[*cd*](/personal-site/docs/bash-linux/command-docs/cd-change-directory) - Used to change the current directory.

```bash {frame="none"}
cd /home/user/Documents
cd ~     # Go to the home directory
cd ..    # Go to the parent directory
cd -     # Toggle to previous directory
cd /     # goes to root directory
cd ../.. # goes up two levels (parent of parent)
```


#### ls (List Directory Contents)
Lists files in the current directory with several options:


#### mv (Move or Rename Files)
Used to move or rename files and directories.
- `-f`: Force move (overwrite without prompting).
- `-i`: Interactive move (prompt before overwriting).
- `-n`: Do not overwrite existing files.
```bash {frame="none"}
mv oldfile.txt newfile.txt
mv file1 /home/user/dir/  # Move file1 to a directory
```


#### cp (Copy Files)

Copies files or directories.
- `-r`: Recursive copy (used for directories).
- `-b`: Create backups of each destination file.
- `-L`: Follow symbolic links.
- `-p`: Preserve the original file’s metadata (permissions, timestamps).
- `-v`: Verbose mode (shows each step).
- `-I` `-s`   Create hard/symbolic link rather than physical copy
- `-u`  copy only if source is newer than the destination or destination missing

```bash {frame="none"}
cp file1.txt file2.txt   # Copy a file
cp -r dir1 dir2          # Copy a directory recursively
```


#### rm (Remove Files)

Deletes files and directories.
- `-f`: Force removal (no confirmation).
- `-i`: Interactive removal (prompt before each deletion).
- `-r`: Recursive removal (for directories).

```bash {frame="none"}
rm file1.txt
rm -r dir1    # Remove a directory and its contents
```


#### mkdir (Make Directory)

Creates a new directory.

```bash {frame="none"}
mkdir newdir
```


#### rmdir (Remove Directory)

Removes an empty directory.

```bash {frame="none"}
rmdir emptydir
```


#### cat (Concatenate and Display Files)

Displays the contents of files.
- `-n`: Add line numbers to output.
- `-T`: Show tab characters as `^I`.

```bash {frame="none"}
cat file.txt
cat -n file.txt        
# Display with line numbers
```


#### less (View File Content Page by Page)

Displays a file's content one screen at a time.
- `-c`: Clear the screen before displaying content.
- `-f`: Open non-regular files.

```bash {frame="none"}
less file.txt
```


#### more (View File Content Page by Page)

Similar to `less`, but with fewer features.
- `-num #`: Specify screen size in rows.
- `+#`: Start viewing at a specific line number.

```bash {frame="none"}
more file.txt
more -10 file.txt      # View file starting at line 10
```


#### head (Display the First Part of a File)

Displays the first 10 lines of a file by default.
- `-n #`: Specify the number of lines to display.
- `-c #`: Display the first number of bytes.

```bash {frame="none"}
head file.txt
head -n 5 file.txt    # Display the first 5 lines
```


#### tail (Display the End of a File)

Displays the last 10 lines of a file by default.
- `-n #`: Specify the number of lines to display.
- `-c #`: Display the last number of bytes.

```bash {frame="none"}
tail file.txt
tail -n 5 file.txt    # Display the last 5 lines
```


#### find (Locate Files)

Searches for files based on conditions like name, type, size, etc.

```bash {frame="none"}
find /home/user/ -name "*.txt"      # Find all .txt files
find / -type d -name "mydir"        # Find a directory named "mydir"
```


#### cmp (Compare Files)

Compares two files byte by byte.
- `-i` : Ignore case differences.
- `-E` : Ignore tabs.
- `-Z` : Ignore trailing space
- `-b` : Ignore white space
- `-B` : Ignore blank lines

```bash {frame="none"}
cmp file1.txt file2.txt
```


#### cut (Remove Portions of Each Line)

Extracts parts of lines from a file based on specified delimiters.
- `-b`: Select bytes.
- `-c`: Select characters.
- `-d`: Specify a delimiter.
- `-f`: Select specific fields.

```bash {frame="none"}
cut -d -f1 /etc/passwd      
# Extract first field of /etc/passwd
```


#### wc (Word Count)

Counts lines, words, and characters in a file.
- `-c`: Count characters.
- `-w`: Count words.
- `-l`: Count lines.

```bash {frame="none"}
wc file.txt
wc -l file.txt       # Count lines in file
```


#### touch (Create/Modify File Timestamps)

Creates a new empty file or updates the access/modification timestamp of an existing file.
- `-a`: Update access time.
- `-m`: Update modification time.

```bash {frame="none"}
touch newfile.txt       # Create a new empty file
```


---

#### Directory Stack Commands

If you need to manage multiple directories you frequent, you can use the directory stack:

- `pushd <dirname>`: Adds a directory to the stack and changes to it.
- `popd`: Removes the top directory from the stack and switches to it.
- `dirs`: Displays the contents of the directory stack.

---


### General Utility Commands

#### File and Text Handling

* `cat` - Display or concatenate file contents
* `tee` - Redirect output to a file and screen simultaneously
* `wc` - Count lines, words, and characters
* `sort` - Sort lines in a file
- `head` – Show the first few lines of a file
- `tail` – Show the last few lines of a file
- `uniq` - Remove or count duplicate lines
- `cut` – Remove sections from lines of files
- `paste` – Merge lines from multiple files
- `tr` – Translate or delete characters
- `split` – Split a file into pieces
- `more/less` - Paginate file content for viewing
- `xargs` – Build command lines from input

---

#### File Management

- `cp` – Copy files and directories
- `mv` – Move or rename files and directories
- `rm` – Remove files or directories
- `ls` – List directory contents
- `touch` – Create an empty file or update its timestamp
- `mkdir` - Create directories
- `rmdir` - Remove empty directories

---

#### Permissions and Ownership

`chmod` - Change file permission
`chown` - Change file owner
`chgrp` - Change file group ownership
`umaks` - Set default permission mask

____

#### Searching and Pattern Matching

- `awk` – Pattern scanning and processing language
- `grep` - Search for patterns in files
- `egrep` - Extended grep (supports more regex)
- `find` - Search for files and directories
- `sed` – Stream editor for filtering and transforming text
- `locate` – Quickly find files by name
- `which` – Shows the location of executables
- `stat` - Detailed file information

---

#### Compression & Archiving

* `tar` - Archive multiple files into one
- `gzip` / `gunzip` – Compress and decompress files
- `zip` / `unzip` – Compress and extract zip archives
- `bzip2` / `bunzip2` – Alternative compression utility

---

#### System Information and Monitoring

- `date` – Show or set the system date/time
- `cal` – Display a calendar
- `whoami` – Show current user
- `uptime` – Show system uptime
- `hostname` – Show or set system’s hostname
- `top` – Real-time system process viewer
- `ps` – Snapshot of current processes
- `uptime` – System uptime and load average
- `df` – Disk space usage
- `du` – Disk usage of files/directories


---
