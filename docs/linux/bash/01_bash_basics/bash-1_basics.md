---
title: "Bash - 01 - Basics"
description: ""
summary: ""
date: 2024-10-22T09:32:39+05:30
lastmod: 2024-10-22T09:32:39+05:30
draft: false
weight: 970
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


### **Bash: A User Interface**

A **shell** is a user interface that runs an interpreter. 
The *interpreter* is a program that accepts user input, determines how to execute that input, converts it into executable statements, and executes them.
The **environment**'s role is to capture definitions and previous commands from the current session, allowing users to easily recall them and simplify their interaction with the system.

The development of shells has evolved over time, with major milestones including the **Thompson Shell** (1971), **Mashey Shell**, **Bourne Shell** (1977), **C-shell** (1978), and **TC-Shell** (1983). The **Bourne Again Shell (Bash)**, released in 1989, is one of the most popular shells used today.

---

### Bash - 'Bourne Again SHell'

*(Git Bash - for Windows interaction with Git)*

The grammar of a shell allows combining existing tools into powerful pipelines and handling large volumes of data automatically. Writing a sequence of commands in a script improves the reproducibility of workflows.


### Terminal Basics

**`$`** is the prompt for typing, followed by a blinking text cursor.   

```bash {frame="none"}
Ctrl + Alt + T      # Launch terminal  
Ctrl + Shift + C    # Copy from terminal  
Ctrl + Shift + V    # Paste in terminal  
clear                # Clear the terminal
```

- **`su`** - Switch user to super user  
- **`sudo`** - Execute a command with super user permissions  
- **`apt`** - Package installer for Debian-based systems
- Switch between users using `su` (switch user) or `sudo su` to switch to root.  `exit` to end the root session.

```bash {frame="none"}
sudo apt update     # Update package index
sudo apt upgrade    # Upgrade installed packages
```


___

### **Shell Command Prompt**

The shell prompt shows essential information about the user, system, and their current state. A typical prompt looks like this:

```bash {frame="none"}
sujith   @sujith-Latitude-7490   ~   $
```

`~` represents the home directory,
`$` indicates a normal user. When logged in as a **root** user, the prompt changes to `#`.
The `#` symbol signifies that the user has root (administrator) privileges.:

```bash {frame="none"}
root   @sujith-Latitude-7490   :home/sujith   #
```


---

### General Syntax of a Shell Command

The general structure for a Linux command is:
```bash {frame="none"}
command [option(s)] [parameter(s)]
```

```bash {frame="none"}
$ ls -F /
```
- **`$`** is the prompt  
- **`ls`** is the command  
- **`-F`** is the option/flag  
- **`/`** is the parameter (the root directory)

**Commands, Options, and Parameters**     
A command does not always require arguments or options;      
it can be called with multiple options and arguments (collectively referred to as parameters).

**Options** change the command's behavior:        
Options typically follow a hyphen `-`.     
Short options start with a single dash (`-`), e.g., `-r`, `-a`.       
Long options start with double dashes (`--`), e.g., `--reverse`, `--all`.     

Some options may act differently in different commands or same way across multiple commands.      
* `-f / --force` for force and `-i / --interactive` is in `cp, mv, rm`
* `-r / --recursive` perform recursive operation for `cp` `rm`
* `-a` for all and `-h / --help`  are common in most commands

**Parameters** or **Arguments** are often required or optional, depending on the command. These specify the target of the command, such as file names or directories.


Command options arguments have to be separated by spaces or tabs for the system to interpret them as *words*.
Omitting spaces causes confusion about commands, options, and arguments.    
(e.g., `ls-F` searches for a command called `ls-F`, which does not exist)

> A contiguous string of spaces and tabs together form *whitespace*. Systems permits the use of one white space which can be many tabs and spaces. Which gets compressed to single space. 


Case sensitivity matters:    
- **`ls -s`** displays the size of files.  
- **`ls -S`** sorts files by size.

---

### **Common Shell Commands**

Some common shell commands and their functions include:

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

---

### **Executing Multiple Commands**

Multiple commands can be executed on a single line by separating them with a semicolon `;`. This allows to run multiple commands consecutively, one after the other. The white space between two commands is just for readability purpose.

```bash {frame="none"}
$ uname -o; echo $SHELL; who; whoami;

GNU/Linux
/bin/bash
sujith   seat0        2024-12-24 08:55 (login screen)
sujith   tty2         2024-12-24 08:55 (tty2)
sujith
```

- `uname -o` shows the operating system type.
- `echo $SHELL` displays the shell being used.
- `who` lists logged-in users.
- `whoami` displays the current username.

Grouping together commands within parentheses:
```bash {frmae="none"}
(wc note ; ls -l note) > newlist

(wc note;ls -l note)>newlist
```

---

### **Tab Completion**

When typing a directory or command name, pressing **`Tab`** will auto-complete the name if there is only one option. Double pressing **`Tab`** will show all possible options.

Typing `Doc` + **`Tab`** may automatically complete to **Documents**.

```bash {frame="none"}
~/Documents/Odin-Project/foundations/java-script/calculator/
Doc tab      O tab     f tab     j tab    cal tab
```

**`.`** refers to the current directory.
- `git add .` stages all files in the current directory for Git.
- In VS Code, navigate to your project directory and use `code .` to open it.
- Simply typing `code` in the terminal launches **VS Code**.


____

### Command Substitution

Shell enables connecting commands in yet another way, shell enables one or more command argument to be obtained from the standard output of another command. Which is called as Command substitution.     

```bash {frame="none"}
echo "The date today is `date` "

echo The date today is `date`

echo The date today is $(date)

# The date today is Sat Jan 4 11:33:27 AM IST 2025
```

The last part represents the output of the `date` command.    
The date is put inside `backquotes` which are not single quotes.    
Using single quotes will not execute the command but treats it literally and prints whatever was inside.     
In Bash it is recommended to use of the form `$(command)` rather than the `backquotes`.  

____
