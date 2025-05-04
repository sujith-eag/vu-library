---
title: "Bash - 18 - Shell Scripts"
description: ""
summary: ""
date: 2024-12-29T16:51:59+05:30
lastmod: 2024-12-29T16:51:59+05:30
draft: false
weight: 989
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



A shell program runs in interpretive mode. It is not compiled into a separate executable file as a C Program is.  Each statement is loaded into memory when it is executed.


---

## Shell Script

When a group of commands have to be executed regularly, they should be stored in a file, and the file itself is executed as ***Shell Script or Shell Program***. Though it is not mandatory to use `.sh` extension for shell scripts, it is used to make it easy to match with wildcards.   

Shell scripts allow us to automate frequently used commands by saving them in a file, enabling us to execute them later with a single command. In essence, **shell scripts** are small programs.

Shell scripts are executed in a separate child shell process, it need to be of the same type as the login shell. A Borne shell use a Korn sub-shell to run the script by giving a interpreter first line of the script.

Example shell script file
```bash {frame="none"}
#!/bin/sh
# script.sh: Sample Shell Script
echo "Today's date: `date`"
echo "Current Month and Year:"
echo `date "+%m 20%y"`
echo "My shell: $SHELL"
```
`#` is comment and everything to the right of it is ignored, but,      
The first line is the interpreter line which always begins with a `#!` and followed by the path- name of the shell to be running the script.     
( The file has to be made executable by giving permission to execute if it does't have it before running it  `chmod +x script.sh`)

____
### Creating a Simple Shell Script

1. Navigate to the desired directory:
```bash {frame="none"}
$ cd alkanes
```

2. Create a new shell script file:
```bash {frame="none"}
$ nano middle.sh
```
This opens a file where you can write your commands.

3. Add the following command to the file to extract specific lines:
```bash {frame="none"}
head -n 15 octane.pdb | tail -n 5
   ```
   This command collects lines 11-15 of the file `octane.pdb`.

4. Save and close the file.

Executing the Script, Once the script is saved, using:
```bash {frame="none"}
$ bash middle.sh
```

____

### Using Command line arguments

Shell scripts can accept arguments from command line. Therefore they can run non-interactively and be used with redirection and pipelines.      
When arguments are specified with a shell script, they are assigned to a special "variables" - rather a *positional parameters*.     

The first argument is read by the shell into the parameter `$1`, second into `$2` and so on.     
There are other parameters used by the shell.     
* `$*` It stores the complete set of positional parameters as a single string.    
* `$#` It is set to the number of arguments specified. This lets you design scripts that check whether the right number of arguments have been entered.
* `$0` holds the commands / programs name itself.
* `$1, $2,...` are positional arguments that represent the command line arguments.
* `"$@"` Each Quoted string is treated as a separate argument (recommended over `$*`)
* `$?` Exit status of last command


```bash {frame="none"}
#!/bin/sh
# emp2.sh: Non Interactive version - uses Comamnd line arguemnts

echo "Program: $0
The Number of arguments specified is $#
The arguments are $*  "

grep "$1" $2
echo "\nJob Over"
```
Output
```bash {frame="none"}
$ emp2 director emp.lst

Program: emp2.sh
The Number of arguments spcified is 2
The arguments are director emp.lst
(Grep results...)

Job Over
```


___
### Making the Script Flexible

To make the script more versatile, replace the specific file name with `$1`, which represents the first argument passed to the script:
```bash {frame="none"}
head -n 15 "$1" | tail -n 5
```
Now, you can provide different file names as arguments when executing the script:
```bash {frame="none"}
$ bash middle.sh octane.pdb
$ bash middle.sh pentane.pdb
```

Handling Spaces in Filenames:    
To ensure the script works with filenames that contain spaces, always enclose `$1` in double quotes

___

### Using Additional Arguments

You can also modify the script to accept line numbers as arguments:     
To make sure the numbers for head and tail can be altered by arguments, they can also be taken as `$1 $2 $3` in `middle.sh`.

```bash {frame="none"}
head -n "$2" "$1" | tail -n "$3"
```
Now you can specify the number of lines for `head` and `tail`:
```bash {frame="none"}
$ bash middle.sh pentane.pdb 15 5
# 15 and 5 arguments for head and tail

$ bash middle.sh pentane.pdb 20 5
```

Adding Comments using `#` to make the script understandable:    
Comments are ignored by the shell but provide clarity for users.
```bash {frame="none"}
# Select lines from the middle of a file.
# Usage: bash middle.sh filename end_line num_lines.
head -n "$2" "$1" | tail -n "$3"
```

___

## Using `$@` to Process Multiple Files

To handle multiple files, use `$@`, which represents all command-line arguments:
```bash {frame="none"}
$ nano sorted.sh
```

Script to sort files by their length:
```bash {frame="none"}
# Sort files by their length.
# Usage: bash sorted.sh one_or_more_filenames
wc -l "$@" | sort -n
```

Executing the script with multiple files:
```bash {frame="none"}
$ bash sorted.sh *.pdb ../creatures/*.dat
```

___

### exit and Exit status of command

To terminate a program shell scripts use `exit` which is similar to `exit()` in C.     
The command is generally run with a numeric arguments:   
`exit 0`  - Used when everything went fine.      
`exit 1` - Used when something went wrong.          
No Need to place them in script as shell understands when execution is complete.

It's through the exit command that every command returns an *exit status* to caller as true or false.    `$?` stores the exit status of the last command. `echo $?` showing 0 is success.     
Exit status is important to devise program logic that branches into different paths on the success or failure of a command.    

___

### Making Scripts Interactive using read

`read` statement is the shell's internal tool for taking input from the user which makes the script interactive.    
It is used with variables and the Input supplied through the standard input is real into these variables.    
When `read name` statement is used, script pauses and takes input from keyboard and stores it in the variable `name`.     
Since this is an assignment, no `$` sign is needed before the `name`

```bash {frame = "none"}
echo "Enter the pattern to be searched: \c"
read pname
echo "Enter the file to be used: \c"
read flname
echo "Searching for $pname from file $flname"
grep "$pname" $flname
echo "Selected records shown above"
```

A single `read` can be used with multiple variables to enter multiple arguments:    
`read pname flname`     
If there are more variables then they stay unassigned, and if there are more arguments passed then thee extras are assigned to the last variable.
