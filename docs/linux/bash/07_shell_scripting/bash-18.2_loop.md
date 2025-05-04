---
title: "Bash - 18.2 - Shell Scripts - Loops"
description: ""
summary: ""
date: 2024-12-29T16:52:30+05:30
lastmod: 2024-12-29T16:52:30+05:30
draft: false
weight: 991
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Loops are programming constructs that allow us to repeat a command or set of commands for each item in a list.     
Shell features three loops - `while`, `until` and `for`. All of them repeat the instruction enclosed by certain keywords as often as their control command permits.

___

### while : Looping

`while` performs a set of instructions until the control command returns a true exit status.
```bash {frame="none"}
while condition is true
do
	commands
done
```
Any UNIX command or test can be used as the condition.

```bash {frame="none"}
answer=y     # must set it to y to enter the loop

while [ "$answer" = "y" ]
do
	echo "Enter the code and description: \c" >/dev/tty
	read code description             # reading both together
	echo "$code|$description" >> newlist 
	echo "Enter any more (y/n)? \c" >/dev/tty
	read anymore
	case $anymore in
		y*|Y*) answer=y ;;        # accepts Yes, yes etc
		n*|N*) answer=n ;;
			*) answer=y ;;
	esac
done	
```
`>dev/tty` is used to bring some outputs to the terminal.

The `>>` used inside to append the file opens and closes the file every time it is called, this can be avoided by providing the redirection of output at the `done` keyword itself as `done > newlist` which opens the file once and writes all the outputs.

Redirection is available at the `esac` and `fi` keywords also, it can also include input redirection and piping.     
`done < param.lst` - Statements in loops take inputs from param file.     
`done | while true` - Pipes out to a while loop.     
`fi > fio` - Affects statements between `if` and `fi`.     
`esac > foo` - Affects statements between `case` and `esac`

`sleep` command can be set inside the while loop to introduce delay in a script for some files or functions to occur and to check repeatedly after certain interval of time.

using `true` as the condition, the script can be made to run endlessly in the background to check or clear some processes.
```bash {frame="none"}
while true ; do
	df -t          # df reports free space on disk
	sleep 300
done &            # & after done runs the loop in the background
```

This keeps running in the background and it cannot be stopped with interrupt key `ctrl + c` to kill this loop.  `kill $!` has to be used to kill the last background job.


___
_____

### for : Looping with a List

`for` doesn't test a condition, but uses a list instead:
```bash {frame="none"}
for variable in list
do
	commands
done
```
Each space separated word in `list` is assigned to the `variable` in turn, and commands are executed until `list` is exhausted.

```bash {frame="none"}
for filename in basilisk.dat minotaur.dat unicorn.dat
do
    echo $filename
    head -n 2 $filename | tail -n 1
done
```
- `$` is used to denote a variable that will be replaced by its value.


When Handling Filenames that has Spaces in them, enclose them in quotes:
```bash {frame="none"}
for filename in "red dragon.dat" "purple unicorn.dat"
do
    head -n 100 "$filename" | tail -n 20
done
```
*Note: Do not enclose `$filename` in quotes inside the loop.*

___

***Example: Echoing Numbers***
```bash {frame="none"}
for number in 0 1 2 3 4 5 6 7 8 9
do
    echo $number
done
```


***Example : Copying files to new extension***
```bash {frame="none"}
for file in chap20 chap21 chap22 chap23;
do
	cp $file ${file}.bak
	echo $file copied to $file.bak
done
```


____


The `list` can consist of practically any of the expressions that the shell understands and processes.      
Lists from Variables, Wildcards, Command Substitutions, Positional Parameters are few sources.  

***List from Variables :***      
A series of variables in the command line can be used, which will be evaluated before executing the loop.
```bash {frame="none"}
for var in $PATH $HOME ; do echo "$var"; done
```

***List from Command Substitution :***      
To pick up the list from a file when the list is very large and the list can be changed without changing the script.
```bash {frame="none"}
for file in `cat clist`
```

***Lists from wildcards :***    
When the list consists of wildcards, the shell interprets them as file names. 

Printing each file individually.
```bash {frame="none"}
for data in *.pdb
do
    ls $data
done
```

```bash {frame="none"}
for file in *.htm *.html ; do
	sed 's/strong/STRONG/g
	s/img src/IMG SRC/g' $file > $$
	mv $$ $file
	gzip $file
done
```


***List from Positional Parameters :***     
Processing positional parameters that are assigned from command line argument, by using `$@` to scan from command line to get all of the arguments.
```bash {frame="none"}
for pat in "$@" ; do
	grep "$pat" emp.lst || echo "pattern $pat not found"
done
```


___

### Example Scripts 

***Filtering Files :*** To print only specific files: *This prints files starting with `c`*
```bash {frame="none"}
for filename in c*   # to print cubane.pdb
do
    ls $filename
done
```

___

To print files that contain `c`:
```bash {frame="none"}
for filename in *c*
do
    ls $filename
done
```

___

Saving Output to a File in a Loop: *This appends the contents of all `.pdb` files into `alkanes.pdb`. Using `>` would overwrite the file each time.* 
```bash {frame="none"}
for alkanes in *.pdb
do
    echo $alkanes
    cat $alkanes >> alkanes.pdb
done
```

___

Combining commands using a pipe (`|`) : *This outputs the last 20 lines from the first 100 lines of each `.dat` file.* So gives lines from 81 to 100.
```bash {frame="none"}
for filename in *.dat
do
    echo $filename
    head -n 100 $filename | tail -n 20
done
```

____

***Copying Files into Multiple Files***    

Using a wildcard directly with `cp` may raise errors: *This fails if there are multiple files or last argument is not a directory.*
```bash {frame="none"}
cp *.dat original-*.dat
```

Using a loop:
```bash {frame="none"}
for filename in *.dat
do
    cp "$filename" "original-$filename"
done
```
*This copies each `.dat` file with a prefix of `original-`.*
Now each of `.dat` file come one by one and in the `cp` there will be only two files,   
so will be copied into the other.

___

To echo commands without executing them:
```bash {frame="none"}
for datafile in *.dat
do
    echo "cat $datafile >> all.pdb"
done
```
*Using quotes here prevents the command from executing immediately.*

___

***Finding Unique Entries :***     
To find unique species in CSV files, where the species is the second data field, use a loop to process each file: This script loops through all provided filenames and extracts unique species from each.
```bash {frame="none"}
for file in "$@"
do
    echo "Unique species in $file:"
    # Extract species names
    cut -d , -f 2 "$file" | sort | uniq
done
```

___

### Nested Loops

Nest loops can perform more complex tasks:
```bash {frame="none"}
for species in cubane ethane methane
do
    for temp in 25 30 37 40
    do
        mkdir "$species-$temp"
    done
done
```
*This creates directories named after each species combined with the temperature.*


___

### basename : Changing Filename Extensions

`basename` extracts the "base" filename from an absolute pathname:
```bash {frame="none"}
$ basename /home/john/project/data.p1
data.p1
```

When `basename` is used with two arguments, it strips off the second argument from the first argument
```bash {frame="none"}
$ basename ux2nd.txt txt
ux2nd.     # txt was stripped off
```

This feature can be used to rename file name extensions.
```bash {frame="none"}
for file in *.txt ; do
	leftname=`basename $file txt`
	mv $file ${leftname}doc
done
```

____

### set and shift : Manipulating the Positional parameters

The `set` statement assigns its arguments to positional parameters `$1, $2` and so on. and also sets the `$#` and `$*`    
```bash {frame="none"}
set 987 234 534

echo "\$1 is $1, \$2 is $2, \$3 is $3"
$1 is 987, $2 is 234, $3 is 534

echo "The $# arguments are $*"
The 3 arguments are 987 234 534
```

Extracting individual fields from the `date` output
```bash {frame="none"}
set `date`
echo $*
Mon Jan 6 05:05:05 IST 2025

echo "The date today is $2 $3, $6"
The date today is Jan 6, 2025
```
Set by default parses the arguments on the delimiters specified in the environment variable IFS, which is by default whitespace. This can be changed to make `set` work on different delimiters so any field can be extracted without using `cut`.


### shift : Shifting Arguments Left

`shift` transfers the contents of a positional parameter to its immediate lower numbered one. This can be done as many times as the statement is called.     
`$2` becomes `$1` and so on.

```bash {frame="none"}
set `date`
echo "$@"        # $* and "$@" are interchangable
Mon Jan 6 05:05:05 PM IST 2025

echo $1 $2 $3
Mon Jan 6

shift 2   # to shift 2 places
echo $1 $2 $3
6 05:05:05 PM
```
The contents of the left most parameters `$1` is lost everytime shift is invoked.  so that value has to be saved in a variable before using `shift`.    
Save the first three and then use `shift 3`.     
If there are 12 arguments, `$10` can be accessed by first shifting it to `$9` 

There will be issue when the string passed to `set` has letters starting with `-` which will get interpreted as options and cause error, or when the passed command returns null.   
By using two hyphens `--` after the `set` will make whatever comes after it to be treated as arguments only.


___

### << Here Document
Is used to pass a set of arguments to run a interactive program non interactively.

___

### trap : Interrupting a Program

Shell scripts terminate whenever the interrupt key is pressed. which is not a good way to end programs as it might leave lot of temporary files on disk.    

The `trap` statement lets us do what we want to do when the script receives a signal.     
The statement is normally placed at the beginning of a shell script and uses two lists:
```bash {frame="none"}
trap 'command_list' signal_list
```

The signal list can contain the integer values or names of one or more signals - the ones used with the `kill` command.     
So instead of using `2 15` to represent the signal list, it can be `INT TERM`

```bash {frame="none"}
trap 'rm $$* ; echo "Program interrupted" ; exit ' HUP INT TERM
```

`trap` is a signal handler. It first removes the files, echoes a message and finally terminates the script when the signals `SIGHUP(1)`, `SIGINT(2)` or `SIGTERM(15)` are sent to the shell process running the script.   
When Interrupt key is pressed, it sends the number 2.

Script can be made to ignore the signal and continue by passing a null command list.
```bash {frame="none"}
trap '' 1 2 15    # script can't be killed by normal means
```

