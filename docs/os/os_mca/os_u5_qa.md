---
title: "OS - Unit-5 - Linux"
description: ""
summary: ""
date: 2025-01-12T21:20:56+05:30
lastmod: 2025-01-12T21:20:56+05:30
draft: false
weight: 1986
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Some common shell commands and their functions:

- **`cd`**: Change the directory
- **`ls`**: List files in the current directory
- **`pwd`**: Display the current directory path      

- **`vi`** or **`emacs`**: Text editors for editing files     

- **`who`**: Show who is logged in     
- **`whoami`**: Display the current username
- **`hostname`**: Display the computer’s hostname
- **`uname`**: Show system information (e.g., `uname -o` for the operating system)
- **`arch`**: Show the computer’s architecture

- **`echo`**: Print text or values to the screen (e.g., `echo $SHELL` to display the shell being used)
- **`bash`**: Start a new Bash session within the current session
- **`exit`**: Exit the current Bash session (If it is the outermost one, it will close the window)
- **`passwd`**: Change the user password
- **`ps`** : Report a snapshot of the current processes.
- **`stty`** : Change and prints Terminal Settings (`-a` to show all settings)

#### General purpose utility commands
File Names, Path Name, type, locating commands, The file attributes. 


#### Hard and Soft Links

* Explain links and their types. List out the difference between them.
* Comparison of Hard-Link and Soft-link with example each.
* Define hard links and symbolic links.

**Answer :**

`link` is a pointer which points from a file in a directory to its `inode`.

An **inode** is a data structure which is part of Linux file space, it doesn't contain the name and contents but stores all metadata about a file and contains pointers to point at the files's physical blocks.

#### Hard Link  

A **hard link** is essentially an additional directory entry that associates a file name with the same inode number. 

A hard link is a direct reference to the inode of a file. Multiple hard links can point to the same inode, and they are indistinguishable from the original file. 

When the link count of a file (i.e., the number of hard links) is greater than one, the file is still accessible as long as one link exists.

#### Symbolic Links (Soft links)

A **symbolic link** (also known as a **soft link**) is a special type of file that contains a reference to another file or directory in the form of a **path**.

* Points at a hard link of a file. A symbolic link is a reference to another file or directory by its path. 

* Symbolic links are identified by the `l` file type when viewed using the `ls -l` command.  (`lrwxrwxrwx`).

* Symbolic links **do not increase the link count** of the original file, unlike hard links.

* The name is indicated as `link -> file` where `link` is the symbolic link and the `file` is the item being pointed at. The file will be in another directory.

____

#### Relative and Absolute Path

* Bring out the difference between Absolute path and Relative path with example.
* Define path name? Explain different types of path names with an example for each.

**Answer :**

There are two primary ways to access files:

1. **Absolute Path**: Starts from the root directory (`/`) and specifies the full path to a file or directory. `/home/user/Documents/file.txt`

2. **Relative Path**: Describes the location relative to the current working directory. It does not start with a `/` and uses `.` for the current directory and `..` for the parent directory.

 `../Documents/file.txt` (moving up one directory and then down into `Documents`).
 
**Special Directory References**:
- `.`  : Represents the current directory.
- `..`  : Represents the parent directory.

___

#### Command Substitution

* What do you mean by command substitution? Explain with suitable example.

**Answer :**

Shell enables one or more command argument to be obtained from the standard output of another command. Which is called as Command substitution.     

```bash {frame="none"}
echo "The date today is `date` "

echo The date today is `date`

echo The date today is $(date)

# The date today is Sat Jan 4 11:33:27 AM IST 2025
```

The date is put inside `backquotes` which are not single quotes. In Bash it is recommended to use of the form `$(command)` rather than the `backquotes`.  


____

#### Redirection 

* Explain the following with examples. (i) Pipes  (ii) tee  (iii) Standard input
* What is pipe? Explain with suitable example.
* Exemplify the three different types of redirection with example.
* Demonstrate redirection of input and output with suitable examples.
**Answer :**

Redirection is the process of using operators to control where input or output from a command goes.

`>  <  >>  <<`

___

**`>`** : Redirects output to a file, overwriting its contents.
```bash {frame="none"}
$ cat *.txt > newfile.txt
```
This command combines all `.txt` files in the directory and writes them to `newfile.txt`. If the file already exists, it will be overwritten.

**`>>`** : Appends output to a file if it already exists.
```bash {frame="none"}
$ cat *.txt >> newfile.txt
```
This command appends the content of all `.txt` files to `newfile.txt`.

**`<`** : Redirect input to a command.
```bash {frame="none"}
$ cat < *.txt
```
This will feed the content of all `.txt` files as input to the `cat` command.

**Here Documents (`<<`)** : Accepts input until a specified delimiter is reached.
```bash {frame="none"}
$ cat << quit
```
This will take input until the word `quit` is typed.

```bash {frame="none"}
$ cat << done > fruit.txt
```
This will take input until `done` is typed and save it into `fruit.txt`.

**List and redirect output to a file:**     
This command lists the contents of `/home/sujith` and writes it to `user_entries.txt`.
```bash {frame="none"}
$ ls -l /home/sujith > user_entries.txt
```


**Count lines of `.pdb` files and redirect to a new file:**     
This command counts the number of lines in each `.pdb` file and writes the result to `lengths.txt`.
```bash {frame="none"}
$ wc -l *.pdb > lengths.txt
```


**Read and write specific lines from a file:**     
This creates `animals-subset.csv` containing the first 3 lines of `animal.csv`.
```bash {frame="none"}
$ head -n 3 animal.csv > animals-subset.csv
```

This appends the last 2 lines of `animals.csv` to `animals-subset.csv`.
```bash {frame="none"}
$ tail -n 2 animals.csv >> animals-subset.csv
```

___

#### Pipes

Pipes (`|`) allow the output of one command to be used as input for another command, enabling efficient chaining of multiple commands.

Sort a file and display the smallest value.
```bash {frame="none"}
$ sort -n lengths.txt | head -n 1
```
This command sorts `lengths.txt` numerically and then displays the first line (smallest value).


Chain `wc` with `sort` and `head`.
```bash {frame="none"}
$ wc -l *.pdb | sort -n | head -n 1
```
This command counts the lines in all `.pdb` files, sorts them, and then displays the shortest file.


Pipe output to a new file.    
```bash {frame="none"}
$ cat *.txt | sort > newfile.txt
```
This command concatenates all `.txt` files, sorts their contents, and writes the sorted output to `newfile.txt`.

____

* Explain the two special files /dev/null and /dev/tty.
* Explain standard input, standard output, and standard error for redirection.
* Explain the three standard files for redirection. 

**Answer :**

Two Special files are `/dev/null` and `dev/tty`.    

These files always have zero size and will incinerate any output written to it. This facility is useful to redirecting error messages away from terminal. Or to check the program running successfully without seeing the output. 

___

#### Internal and External Commands

* Differentiate between internal and external commands with suitable examples.
* Is the “echo” command treated by the shell as an external command or as an internal command.
* Differentiate between internal and external commands in shell scripting. Provide examples of each and explain how they are executed by the shell.

**Answer :**

Shell built-in commands (also called **internal commands**) are commands that are executed directly by the shell, without calling an external program. These are part of the shell itself and are typically used for basic shell control, environment configuration, and scripting.

```bash {frame="none"}
type <command>
```

```bash {frame="none"}
type cd
# cd is a shell builtin

type echo
# echo is a shell builtin
```

`echo` is not an external command, Shell won't look for it in the PATH variable to locate it when it is called. Rather it will execute it from its own set of built in commands that are not stored as separate files.

Certain commands are built into the shell because it is difficult or impossible to implement them as separate external commands.    
The child process inherits the current working directory from its parent as one of the environmental parameters. It is important for the `cd` command to not spawn any children to achieve a change of directory. If it did so through a separate process then after `cd` had completed its run, control would revert to the parent and the original directory would be restored. Then it would be impossible to change directory.  

- `cd` – Change the current directory
- `pwd` – Print working directory
- `echo` – Print text to the terminal
- `help` – Display help for builtins
- `set` – Set shell options or positional parameters
- `shift` – Shift positional parameters
- `alias` / `unalias` – Create or remove command aliases

___

#### File Attributes

* What are file attributes? Write commands to list the various attributes of a file.
* Give the significance of seven attributes ls -l command and date command with format specifiers.
* List and explain the attributes displayed by ls –l command.
* Define file attributes? How will you obtain them? Explain each of them.

**Answer :**

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
-rw-rw-r--  1 sujith sujith 2957628 Oct 30 13:52 'WorkSheet.pdf'
```

1. **File Type**:  The first part of file permissions. 
    `d` represents a directory
    `-` represents a regular file
    `l` represents a symbolic link

2. **Permissions** (Mode): Shows the file’s access permissions for the owner, group, and others. `rw- r-- ---` 9 characters combined with file type becomes 10 characters.  (`.` at end of permissions to indicate the `SELinux` content)

3. **Hard Links**: The number of hard links pointing to the file. For files, it is usually `1`, and for directories, it is typically `2` but can be more.

4. **User, Group**: The user who owns the file and the group to which it belongs. For most users the group is the user's private group.  `sujith sujith`
 
5. **Size**: The size of the file or directory in bytes. `68146` for the `sujith.jpeg` file.

6. **Last Modified Date**: The last modification date and time of the file or directory. (creation date/time if not modified)

7. **Name**: The name of the file or directory. (For a symbolic link, the name is followed by `->`) 

___

#### Files in Linux

* What is a file? Discuss different type of files supported by UNIX briefly.
* What are the Ordinary, Directory and Device files?
* Discuss the types of files supported in Unix file system.

**Answer :**

A File is the smallest logical unit within the file space. It is a container for storing information or a sequence of characters. It has properties like name, type, and data.

The file will contain only what is written in it, there is no end-of-file (eof) mark. A file's size, nor even it's name is not stored in the file itself. It is all kept separately in the disk which is only accessible to the kernel.    

**Ordinary file (Regular files)** : Contains only data as a stream of characters. Text files and Binary files.
* **Text file** contains printable characters which makes up viewable contents.
* **Binary files** contain both printable and unprintable characters that cover the entire ASCII range.  Most of UNIX commands are Binary files. Executable files, Pictures, sound and video files are all binary files.

**Directory files** : A directory contains no data but keeps the names of files / directories it contains and a number associated with them called the inode number.

**Device files** : All devices and peripherals are represented by files. To read or write a device, operations has to be performed on its associated file.    
Device file names are usually found within the `/dev` directory.

___

#### File Permission Commands

* List various file permissions. Explain the different ways of changing them with an example.
* What is Relative Permissions and Absolute Permission? Give example.
* Explain the following commands: (i) umask (ii) chown (iii) chmod
* Change file permission using chmod with both symbolic and numeric mode. 

**Answer :**

Each **user** or **group** can have specific access rights to a file.
- The **owner** might have **read**, **write**, and **execute** permissions.
- Other users (members of the **group** or the **world**) might have different levels of access, such as **read** or **execute** only.

In Linux, file permissions are defined for **three categories**:
- **Owner (`u`)**
- **Group (`g`)**
- **Others (`o`)**, also known as **world**

##### Access Rights:

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

#### 'chmod' Command

`chmod` (change mode) is used to alter the permissions of a file or directory.

```bash {frame="none"}
chmod permissions file(s)
```
**`file(s)`** refers to the file(s) or directories to which you want to apply the permissions.

**`permissions`** can be specified in three ways: 
using symbols (`+`, `-`, `=`), or numeric values (3-digit numbers).


##### 1. Using `+` and `-` for Permission Changes

This approach adds (`+`) or removes (`-`) specific permissions for the **user (`u`)**, **group (`g`)**, or **others (`o`)** along with `r, w, x`

To **remove** write permission for the **group** and **read** permission for **others**:
```bash {frame="none"}
chmod g-w, o-r file.txt
```

To **add** execute permission for the **owner** and **group**:
```bash {frame="none"}
chmod u+x, g+x file.txt
```

To apply changes to **all** categories (owner, group, others) at once using `a`:
```bash {frame="none"}
chmod a+x file.txt
```


##### 2. Using `=` to Set Exact Permissions

Instead of adding or removing permissions, you can **assign** permissions directly using `=`.

To **assign** `rwx` (read, write, and execute) permissions to the **owner**, `r` (read) to the **group**, and **no permissions** to **others**:
```bash {frame="none"}
chmod u=rwx, g=r, o= file.txt
```

If you do not specify a category (like `u=`), it will **not change** the permissions for that category:
```bash {frame="none"}
chmod g=, o= file.txt  
# Does not change owner permissions
```

You can combine `=` with `+` or `-`:
```bash {frame="none"}
chmod u=rwx, g-w,o-r file
chmod u=rwx, g-w,o= file
chmod u+x, g=r, o-r file
chmod u+x, g-w, o= file
```

##### 3. Using Numeric Permissions

This approach uses **3-digit numbers** to represent permissions. Each digit corresponds to the permissions for **owner**, **group**, and **others**, respectively.

The numbers are calculated by adding:
- `4` for **read (r)**
- `2` for **write (w)**
- `1` for **execute (x)**

To set `rwx`(7), `r-x`(5), and no permissions `---`(0) for owner, group, and others respectively:
```bash {frame="none"}
chmod 750 file.txt  
# rwx (7) for owner, r-x (5) for group, 
# no permissions (0) for others
```

- `rwx` = 4 + 2 + 1 = **7**
- `r-x` = 4 + 1 = **5**
- `---` = 0 = **0**

So, `750` represents the permissions `rwx r-x ---`.

`----- 000`    
`--x--x--x  111`
`r----- 400` Many more combinations

| Permission | `rwx` | `rw-` | `r-x` | `---` |
| ---------- | ----- | ----- | ----- | ----- |
| **Owner**  | 7     | 6     | 5     | 0     |
| **Group**  | 7     | 6     | 5     | 0     |
| **Others** | 7     | 6     | 5     | 0     |


____

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

____
* An user issues the following command umask 022, What are the permissions for all files and directories created after this command.
* How do you add write permission to group and execute permission to others for a file named test.
* What is the impact of removing write and execute permission for a user of a directory.


A file’s current permission are r_- r_x rw_ specify the chmod expression required to change them for the following
(i) rwx rwx rwx
(ii) r_ _ r_ _ _ _ _
(iii) _ _ _ _ _ _ _ _ _
(iv)_ _ _ r_ _ r_ _
Using relative and octal methods.

Assuming that a file’s current permissions are rw-r-xr--, specify the chmod expression to change them to
i) rwxrwxrwx
ii) r--r-----
iii) ---------
iv) rw-rwx--x
using both relative and octal methods of assigning permissions.

___

#### manual page

* Explain `man` documentation with an example.

`man` is the manual for a command (if it exists). 
It expects the name of the command as its argument and displays the corresponding **man page**.

```bash {frame="none"}
man ls
man mkdir
```

Note: **`man cd`** doesn't exist because `cd` is a built-in shell function. Use `--help` instead.

The man page is displayed within the `vi` editor (view/search mode only).

____

#### Basic Utility Commands

* Explain any eight general purpose utilities available in UNIX.
* List and explain the four features of cat Command and also write the advantage of script and who command.
* Explain the following commands with example. i)find ii) touch iii) script
* Explain the following commands with options and examples. (i) date (ii) printf (iii) bc (iv)uname (v) cal (vi)script.
* With suitable example, illustrate the following UNIX Commands: i) bc ii) wc iii) rm iv) cal v) date.
* Discuss the following commands with an example. i. date ii. cat iii. wc
* Explain the command to set the modification and access time of a file with syntax and options.

**Answer :**

##### touch (Create/Modify File Timestamps)

Creates a new empty file or updates the access/modification timestamp of an existing file.
```bash {frame="none"}
touch newfile.txt       
# Create a new empty file
```

- `-a`: Update access time.
- `-m`: Update modification time.

##### wc (Word Count)

Counts lines, words, and characters in a file.
```bash {frame="none"}
wc file.txt

wc -l file.txt       
# Count lines in file
```

- `-c`: Count characters.
- `-w`: Count words.
- `-l`: Count lines.

##### cat (Concatenate and Display Files)

The cat (concatenate) command is used to view, combine, and create files.

`cat [options] filename`

Displays the contents of files.
- `-n`: Add line numbers to output.
- `-T`: Show tab characters as `^I`.

```bash {frame="none"}
cat file.txt
cat -n file.txt        
# Display with line numbers
```


##### ls (List Directory Contents)

Lists files in the current directory with several options:

```bash {frame="none"}
ls ~/Desktop/trial
# Using absolute path

ls -F Desktop
# List contents of Desktop directory
```

`-a` Show hidden files (those starting with `.`) and the `.` (current directory) and `..` (parent directory).     

`-h` Displays file sizes in human readable format (KB, MB) (along with `-l`).    
`-i` Shows inode numbers for the files

`-r` Reverse alphabetical order of file listing.    
`-R` Recursive listing (listing all contents of all sub directories)

`-S` Sort files by size (used with `-l`)
`-t` Sorts files by modification time (along with `-l`).    
`-X` Extension based sorting (along with `-l`)



##### pwd (Print Working Directory)

Displays the current working directory. `~`  tilde character at the start of a path means **the current users home directory**

`~/data` refers to `/Users/sujith/data`, useful for absolute path typing.


##### cd (Change Directory)

Used to change the current directory.

```bash {frame="none"}
cd /home/user/Documents
cd ~     # Go to the home directory
cd ..    # Go to the parent directory
cd -     # Toggle to previous directory
cd /     # goes to root directory
cd ../.. # goes up two levels (parent of parent)
```


##### date 

The `date` command is used to display or set the system date and time. 
```bash {frame="none"}
date [OPTION]... [+FORMAT]

date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][]]
```

OPTION : Various options to customize how the date is displayed.
FORMAT : The format in which you want to display the date. (it has to follow `+`)

```bash {frame="none"}
$ date "+%a, %b %d, %Y - %r"

Sun, Dec 31, 2024 - 02:00:00 PM
```

```bash {frame="none"}
$ date +%a:%A

Sun:Sunday
```


##### bc (Basic Calculator)


`bc` is an arbitrary precision calculator language. It's used for performing arithmetic operations, and it supports a variety of functions and operations, including basic math, variable assignments, and more.

Simply typing `bc` will start an interactive mode, where we can input mathematical expressions and get results.      
We can also use `bc` for calculations directly from the command line.

```bash {frame="none"}
$ echo "3 + 4" | bc
7
```

- **Addition and Division**:
```bash {frame="none"}
$ echo "5 + 3" | bc
8
$ echo "10 / 4" | bc
2
```

- **Using `scale` for Decimal Precision**:
```bash {frame="none"}
$ echo "scale=4; 7/3" | bc
2.3333
```

- **Using Functions with `-l`**:
```bash {frame="none"}
$ echo "scale=5; sqrt(100)" | bc -l
10.00000
```

- **Assigning Variables**:
```bash {frame="none"}
$ echo "a=5; b=3; a*b" | bc
15
```

____

#### File Management Commands

* Explain the effect of copying a file to an existing file? How is it different from copying to a new file? Give examples.
* Illustrate with an example how will you perform renaming and moving operation in UNIX.
* Illustrate cp and mv command. Highlight the difference between them.
* List and explain any Three directory related commands.

**Answer :**


##### mv (Move or Rename Files)

Used to move or rename files and directories.
```
mv [options] source destination
```

- `-f`: Force move (overwrite without prompting).
- `-i`: Interactive move (prompt before overwriting).
- `-n`: Do not overwrite existing files.
```bash {frame="none"}
mv oldfile.txt newfile.txt
mv file1 /home/user/dir/  
# Move file1 to a directory
```

If `destination` is a directory without a file name, the file's name is not changed.

```bash {frame="none"}
mv fo1.txt ~/temp
# moves to temp

mv fo1.txt ~/temp/fo2.txt
# moves and renames

mv *.txt /home/zapp
```

To move a file into the current directory, `.` can be used as the destination.


**Renaming Files**
To rename a file or move it to a new location:
```bash {frame="none"}
mv [old] [new]  # Moves or renames a file
```

```bash {frame="none"}
mv trial/draft.txt trial/quotes.txt  
# Renames draft.txt to quotes.txt

mv draft.txt quotes.txt
# Renames within the same directory
```

##### cp (Copy Files)

Copies files or directories.
- Destination is another directory, then the file name remains the same after copying.
- Destination is a directory and a file name, then the file is copied with a new name.
- Destination is a filename, then the file is copied into the current directory with a new name.

```bash {frame="none"}
cp [old] [new]  # Copies a file

cp quotes.txt thesis/quotation.txt  
# Copies to a new location
```

- `-r`: Recursive copy (used for directories).
- `-b`: Create backups of each destination file.
- `-L`: Follow symbolic links.
- `-p`: Preserve the original file’s metadata (permissions, timestamps).
- `-v`: Verbose mode (shows each step).
- `-I` `-s`   Create hard/symbolic link rather than physical copy
- `-u`  copy only if source is newer than the destination or destination missing

```bash {frame="none"}
cp file1.txt file2.txt   
# Copy a file

cp -r dir1 dir2          
# Copy a directory recursively
```

##### rm (Remove Files)

Deletes files and directories.

```
rm [options] file(s)
```

- `-f`: Force removal (no confirmation).
- `-i`: Interactive removal (prompt before each deletion).
- `-r`: Recursive removal (for directories).

```bash {frame="none"}
rm file1.txt

rm -r dir1    
# Remove a directory and its contents
```

Use `rm -i` to prompt for confirmation before deletion. `rm` permanently deletes files, so it's advisable to use `-i` to ask for confirmation before deleting. 


##### mkdir (Make Directory)

Used to create a directory, in the current directory or a specified path.

```bash {frame="none"}
mkdir newdir
```
- `-m` `--mode`: Specify the initial permissions of the directory.

To create multiple directories at once:
```bash {frame="none"}
mkdir north south pacific  
# Creates three separate directories
```


Creating a Directory Tree, by creating the main directory first, then child directories inside.
```bash {frame="none"}
mkdir place place/one place/two
```


The `-p` option is used to create multiple directories at once:
```bash {frame="none"}
mkdir -p [path/to/nested/directories]  
# Creates nested directories

mkdir -p ../project/data ../project/results
```

```bash {frame="none"}
mkdir -p 2016/data/{processed,raw}  
# Creates the full structure in one command
```

To list all nested subdirectories within a directory, use `ls -R`.



##### rmdir (Remove Directory)

Removes an empty directory.

```bash {frame="none"}
rmdir emptydir
```


____

Assuming that you are positioned in the directory /home/mca, what are these commands presumed to do and explain whether they will work at all
(i) cd../..
(ii) mkdir ../bin
(iii) rmdir ..
(iv) ls ..

Which of these following commands work? Explain with reasons.
(i) mkdir a/b/c
(ii) mkdir a a/b
(iii) rmdir a/b/c
(iv)rmdir a a/b
(v) mkdir /bin/foo

What does the following command lines do?
```
(i) mv * ../bin
(ii) lp note[0-1][0-9]
(iii) rm *.[!l][!o][!g]
(iv) cp –r /home/kumar/{include,lib,bin}
```

___

#### Filter Commands

* Give the syntax of Head, Tail, command with example
* Explain the following commands: i) pr ii) head iii) tail iv) cut v) sort.
* Explain the following commands with options. (i) sort (ii) Cut (iii) Pr (iv) Head
* Illustrate by creating files of the following UNIX commands: head, tail, cut, uniq.
* How are the following Unix command useful? Also, write the syntax and explain them with all options. i) sort  ii) uniq
* Explain the working of cut command depicting the working to show how the slitting a file vertically.
* What happens when you use head with multiple filenames?

**Answer :**

Filters are the set of commands that take input from standard input stream i.e. stdin, perform some operations and write output to standard output stream i.e. stdout.

Filters in Unix are commands that take input, process it, and produce output, typically used for text processing.

Common filter commands are `cat, cut, head, tail, sort, uniq, tr`

##### head (Display the First Part of a File)

The head command is used to display the first few lines or bytes of a file. It is useful for quickly viewing the beginning of large text files.

`head [options].. [files]..`

Displays the first 10 lines of a file by default.
- `-n #`: Specify the number of lines to display.
- `-c #`: Display the first number of bytes.

```bash {frame="none"}
head file.txt

head -n 5 file.txt    # Display the first 5 lines
```

##### tail (Display the End of a File)

The tail command is used to display the last few lines or bytes of a file. It is useful for viewing logs, real-time updates, and recent data.

`tail [options].. [files]..`

Displays the last 10 lines of a file by default.
- `-n #`: Specify the number of lines to display.
- `-c #`: Display the last number of bytes.

```bash {frame="none"}
tail file.txt

tail -n 5 file.txt    # Display the last 5 lines
```


##### sort 

The sort command is used to arrange lines in text files in a specific order.
`sort [options].. [files]..`

```bash {frame="none"}
sort lengths.txt  # Sorts alphanumerically by default
sort -n           # Sorts numerically
sort -r           # Sorts in reverse order
```
- `-r`: Reverse order.
- `-f`: Ignore case differences.
- `-n`: Numeric sorting.

Sort doesn't change the file, but sends results to screen.     
To sort a file and redirect the output to a new file:

```bash {frame="none"}
sort -n lengths.txt > sorted-lengths.txt
```


##### cut (Remove Portions of Each Line)

The cut command in Unix is used to extract specific sections of each line from a file or standard input. It is commonly used for text processing and works by selecting portions of data based on bytes, characters or fields.

`cut [options] filename`

Extracts parts of lines from a file based on specified delimiters.
- `-b`: Select bytes.
- `-c`: Select characters.
- `-d`: Specifies the delimiter (e.g., comma, space).    
- `-f`: Specifies the field(s) to extract.     
- `--complement`: Returns everything except the specified fields.

```bash {frame="none"}
cut -d -f1 /etc/passwd      
# Extract first field of /etc/passwd
```

Slitting a file vertically.      
The `cut` command is used to remove or extract specific sections of each line in a file:
```bash {frame="none"}
cut -d , -f 2 animals.csv
# Extracts the second field from a comma-delimited file
```


##### uniq

The uniq command in Linux is used to filter out adjacent duplicate lines from a sorted file or input. It helps in detecting and removing consecutive duplicate entries while keeping the first occurrence.
`uniq [options] file1`

It operates on a single file, searching for consecutive duplicate lines.     Parameters can be used to remove duplicate lines.      
It does not overwrite the file but the output can be can be moved to a new file.

```bash {frame="none"}
uniq file.txt > file_without_duplicates.txt
```

`-c` for counting occurrences,      
`-d` for displaying only duplicate lines.


##### Merging Files with 'paste'

The paste command in Linux is used to merge lines of files horizontally (side by side) by joining them column-wise.
`paste [options] file1 file2 ...`

```bash {frame="none"}
paste file1.txt file2.txt
```
**`paste`** merges files line by line without requiring a common field. The first line is appended to the first line of other file.


##### Joining Files with 'join'

Joins two sorted files based on a common field (default is field 1).
```bash {frame="none"}
join file1.txt file2.txt
```
When the two files contain a row that contains that same value, then those two lines are joined together. Lines that do not contain a matching first field are not joined. (Joining tables using a matching keys)

`-1 NUM`: Specifies which field to join on in the first file.    
`-2 NUM`: Specifies which field to join on in the second file.     
`-i`: Ignore case differences.      
`-e` uses `STRING` in place of an empty field      
`-a 1` or `-a 2` outputs lines from the first or second file which did not contain a match to the other file.

---


The tr (translate) command in Linux is used for text transformation by replacing, deleting, or compressing characters from standard input (stdin)
`tr [options] set1 [set2]`


The pr command in Linux is used to format text files for printing. It adds headers, footers, page breaks, columns, and more to make output look structured when printed
`pr [options] [file]`

____

### Filters and regular expression: 
grep: Searching for a pattern, Basic Regular Expression, Extended Regular Expression and egrep, types of grep. 


* What are regular expressions? Explain any seven meta characters in regular expressions with an example for each.
* What is regular expression? Explain the meaning of special character `+` and `$` with example.

Write Regular expressions for the followings:
i. Match all positive numbers with or without sign “+”
ii. To match a number between 2000 and 2999
iii. To match a non-digit character
iv. List all the lines ends with 4 digit numbers begins with 9 such as
9001, 9002
v. List all the lines begins with printf
vi. To match agarawal, Agrawal, aggrawal.

___

#### grep command

* Explain the command grep and egrep in detail with example.
* Explain the different grep options with example.
* What is `grep` command? How does ‘grep’ command help in searching pattern? Explain with suitable examples and options.
* Explain the “grep” command using n, l and f options with examples.
* Demonstrate the usage of the following UNIX commands: tr, sort, egrep, paste.

**Answer :**

The grep stands for Global Regular Expression Print. The grep command in Linux is used to search for specific text or patterns in files or input streams.

```bash {frame="none"}
egrep [options] regex filename(s)

grep [OPTIONS] PATTERNS [FILE(s)]

grep -c "hello" file.txt
```

`-i, --ignore-case`    ignore case distinctions in patterns and data 
(Perform case-insensitive search  `grep -i "error\|fail" logfile.txt`)

`-n, --line-number  `       print line number along with matching output lines
`grep -n "error" logfile.txt`

`-v, --invert-match`        select non-matching lines (print the lines that do not have the pattern) `grep -v "sucess" logfile.txt`

`^` Matches the lines that starts with the specific pattern

`$` Match lines that end with specific pattern
`grep "^Start" logfile.txt`   `grep "End$" logfile.txt`


`grep` program searches one or more files by line to match against a specified regular expression. Each line is treated as the string and `grep` searches for any substring of the line that matches the regex. If found, by default `grep` outputs the matching lines.

regex is a string that can but does not have to include metacharacters.     
Files can be listed with space or wildcards.     

>[!important]
>The regex is placed in single quotes `' '` to avoid metacharacters being interpreted as wildcards and doing filename expansion (globbing) on wildcards `* ? []`.     
>`|` will sets up pipes instead of performing OR action. 
>Items Found in `" "` are interpreted, they are not treated literally like in `' '`



To search for a specific phrase using quotes makes it easier to search for phrases or single words:
```bash {frame="none"}
$ egrep "is not" haiku.txt

$ egrep "not" haiku.txt
```

```bash {frame="none"}
egrep 2022 *.txt  
# all lines that contain 2022

egrep ^a *.txt
# all lines that start with an a
```

```bash {frame="none"}
egrep '[Ss]mith' *.txt
# Find lines having smith or Smith

egrep 'Duke|Zappa' *.txt
# Find lines containing Duke or Zappa
```

```bash {frame="none"}
egrep '[0-9]+' *.txt
# Find lines that contain atleast one digit 
```

```bash {frame="none"}
egrep '^[0-9]*[^0-9]+$' *.txt
# Finds lines that if they have digits are found at the beginning of the line.

egrep '^[A-Z][a-z]+ [A-Z][a-z]+$' *.txt
# Find all lines that contain exactly two words, both capitalized

egrep '[a-z]+ [a-z]+ [a-z]+' *.txt
# Find lines that contain at least 3 words, lowercased
```



___

### sed: stream editor, Line addressing, Context addressing, Text editing, Substitution. 


* What is sed? Explain Using multiple instructions, line addressing and context addressing.
* Explain the command sed wih respect to line and context addressing.
* Explain the following with respect to sed: i) Line addressing ii) Context addressing iii) Text Editing iv) Substitution.

How do you achieve the following using sed:
i) Append !! at the end of each line
ii) Delete multiple spaces in a file
iii) Replace lower case characters with upper case characters.
iv) Print the lines that do not contain the word Read.


**Answer :**

`sed` is **stream-editor** which a program that takes a stream of text and modifies it.     
It is a multipurpose tool that combines the work of several filters.   

A stream is a short for I/O stream meaning the stream of text characters that are being input from one source and output to another.      
The role of `sed` is to manipulate the text in the stream en route from input to output.     

Like `diff` command, `sed` uses instructions to act on text.     
An instruction combines an **address** for selecting lines, with an **action** to be taken on them.  

```bash {frame="none"}
sed [options] script file(s)

sed [options] 'address action' file(s)
```
`-e`option that lets use multiple instructions       
`-f` to take instructions from a file.      


Addressing in `sed` is done in two ways:
* One line number to select a single line or two line numbers (3,7), which specifies a group of contiguous lines. 
* By specifying a `/` enclosed pattern which occurs in a line (`/From:/`)

The action component is drawn from `sed`'s internal commands.

`sed` processes several instruction in a sequential manner. each instruction operates on the previous instruction.

To select first two lines similar to head command.
```bash {frame="none"}
sed -n '1,2p' emp.lst
```


`$` to select the last line. which is simulating the tail command.
```bash {frame="none"}
sed -n '$p' emp.lst
```

But `sed` can select a contiguous lines from anywhere `(9,11)`which is not possible with head and tail.     
It can also select multiple groups of lines from many sections.
```bash {frame="none"}
sed -n '1,2p 
7,9p 
$p' emp.lst
```

`-e` allows for entering multiple instructions each preceded by the option.
```bash {frame="none"}
sed -n -e '1,2p' -e '7,9p' -e '$p' emp.lst
```


#### Context Addressing

Context addressing allows for specifying one or two patterns to locate lines. Patterns must be bordered with `/` on either side.
```bash {frame="none"}
sed -n '/director/p' emp.lst
```
A comma separated pair of context addresses to select a group of lines. Line and context address can also be mixed.
```bash {frame="none"}
sed -n '/guptha/,/Sena/p' emp.lst

sed -n '1,/guptha/p' emp.lst
```

> Note: Multiple files, file gobbing works only in the context addressing but not in line addressing and not even when line addressing and context are mixed.

Here two files are given but only one is selected and read
```bash {frame="none"}
$ sed -n '1,/void/p' singly_list.c singly_list_final.c 
#include <stdio.h>
#include <stdlib.h>

void create(int x);
```

This will search from multiple files because both are context addressing
```bash {frame="none"}
$ sed -n '/struct/,/void/p' singly_list.c singly_list_final.c 
$ sed -n '/struct/,/void/p' *.c
```

___

#### Using Regular Expressions

Context addressing can also use Regular expressions.
```bash {frame="none"}
sed -n '[aA]gg*[ar]wal/p' emp.lst

sed -n '/sa[kx]s*ena/p
		guptha/p' emp.lst
```
First to select all the Agarwals and second to select Saksena or guptha.


____


### Writing Selected lines to a file

`w` write command can be used to write the selected line to a separate file.
```bash {frame="none"}
sed -n '/director/w dlist' emp.lst 
```
Here when `-n` is used there will be no display of all the lines but it is not needed to write to file.    

Full file can be split up by giving multiple address.
```bash {frame="none"}
sed -n '/director/w dlist
		/manager/w mlist
		/executive/w elist' emp.lst

sed -n '1,500w file1
	501,$w file2' file.main
```



_____

### Introduction to Shell Script: 
Shell scripts, read, command line arguments, exit, variables, wildcards, escape characters logical operators and conditional operators, if conditional, case conditional, expr computations and string handling, while looping, for looping,
set and shift, trap interrupting a program, debugging shell scripts with set command.


* What are wild cards? Explain each of them with suitable example.
* Explain the pattern matching with wild cards. Give suitable example.
* What is the difference between a wild card and a regular expression? 

**Answer :**

Bash allows the use of wildcards (also called globbing) to match multiple files.
- `*`: Matches any number of characters.
- `?`: Matches exactly one character.
- `[chars]`: Matches one character from the specified list.
- `[char1-char2]`: Matches one character within the specified range. `[0-9] [a-e] [A-Z]`
- `{word1, word2, word3}`: Matches any of the specified words.
- `[!chars]`  match any one character not in the list   `ls [!a]*` means first character not `a`

Examples of Wildcard Usage :

* `ls *.txt`: Lists all files with a `.txt` extension.

* `ls f*`: Lists all files starting with `f`.

* `ls [abc]*`: Lists all files starting with either `a`, `b`, or `c`. `[]` is for one character only.

* `ls [abc][abc][abc]`

* `ls file?.{dat,txt}`: Lists files like `file1.dat`, `file2.txt`, etc.

```bash {frame="none"}
ls *t*ane.pdb   
# Lists files with 't' and 'ane' in their names

cp *dataset* backup/datasets  
# Copies all files with 'dataset' in the name

ls *t?ne.*     # matches octane, pentane
ls *t??ne.pdb  # matches ethane, methane
ls ethane.*    # only ethane
```

Wildcards can be combined for more specific patterns:

```bash {frame="none"}
ls ???ane.pdb  
# Matches any three characters followed by 'ane.pdb'
```

When a shell sees a wildcard, it expands the wildcard to create a list of matching filenames before running the preceding command.

___

Write the command with wild card patterns to match the expressions below :       
(i) msrcse msrmca msrmech msrise msrece.
(ii) MCa MCA MCb MCB MCC MCc.
(iii) MCa MCA MCb MCB MCC MCc using character class.
(iv) mca1.txt mcamca.txt mcaa.txt mcab.txt mcaz.txt

Frame wild card patterns for : 
i) filenames containing ‘msrit’ as an embedded string.
ii) filesnames except ‘.sh’ extension
iii) filesnames Chapx, Chap1, Chapz, Chaty
iv) filenames that have atleast four characters
v) filenames in the range note0 to note19.


___

#### Shell Scripting Characters and Commands

* Describe the role of meta-characters in shell scripting. Provide examples of commonly used meta-characters and explain their functions.
* Write a short note with help of examples on control structures in Linux.
* Explain the commands used to schedule the execution of processes in UNIX.
* What are the commands available for manipulating positional parameters in shell programming? Explain.
* With suitable examples, discuss the following command used in shell scripting: i) shift ii) set.

* Explain the following commands with examples: i) expr ii) while iii) read iv) exit v)shift.
* With suitable examples, discuss the following command used in shell scripting: i) expr ii) test.
* How do the following commands work? i)expr ii) set and shift iii) for.
* Give syntax of ‘for’ loop in a shell script? Explain different ways of making lists.

___

#### Shell Script Programs

* Demonstrate the running jobs in background.

* Write a shell script to display all filenames in a directory having n number of characters in the current directory. You can take value of n from user.

* Write a shell script to accept two command line arguments from user and then display sum, different, product of the arguments. Use expr command for calculations. Explain the script.

* Develop a shell script to perform the following: i) To find whether a given number is even or odd.  ii) To accept a number and find its reverse.

* Write a shell script that accepts two files names as arguments, check if the permissions for these files are identical and if the permissions are identical, then output common permissions and otherwise output each file name followed by its permissions.

* Write a shell program to find whether a given number is even or odd.


Write a shell script that folds long lines into 40 columns. Thus any line that exceeds 40 characters must be broken after 40th, a “\” is to be appended as the indication of folding and the processing is to be continued with the residue. The input is to be supplied through a text file created by the user.

Develop a menu driven program to achieve the following:
i) Check whether a given file is readable
ii) Search in the file emp.txt for the patterns stored in a file pat.lst
iii) Display the contents of the file.
iv) Display an attributes of the file ab.txt
v) List the login users
vi) Quit.


Develop a script that computes the gross salary of an employee according to the following rules: i) If basic salary is `< 1500` then HRA =10% of the basic and DA =90% of the basic. ii)If basic salary is `>=1500` then HRA =Rs500 and DA=98% of the basic The basic salary is entered interactively through the key board. 


____

## Unix OS Theory

* List the salient features of Unix operating system.
* List and explain the features of UNIX Operating system.
* Explain the architecture of Unix Operating System in detail with a neat diagram.
* What is the command structure in UNIX? Explain how it is processed by the shell with example.
* What is POSIX standard? List and Explain the different subsets of POSIX standard? Also write a Structure of a POSIX program.
* Describe the Kernel-Shell relationship in the Architecture of Unix with neat diagram.

____
