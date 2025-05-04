---
title: "Bash - 18.1 - Shell Scripts - Conditionals"
description: ""
summary: ""
date: 2024-12-29T16:53:05+05:30
lastmod: 2024-12-29T16:53:05+05:30
draft: false
weight: 990
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



### Logical Operators  for Conditional Execution

`&&`, `||` which is used to allow conditional execution of things.      

`cmd1 && cmd2`  The `cmd2` is executed only when the `cmd1` succeeds.    

`cmd1 || cmd2` plays an inverse role, where `cmd2` is executed if `cmd1` fails. Here the exit status of `grep` is being used to redirect the command execution.

```bash {frame="none"}
grep 'director' emp.lst && echo "pattern found in file"

grep 'manager' emp.lst || echo "pattern not found"
```

`||` goes well with exit command, to terminate a script when a command fails.
```bash {frame="none"}
grep 'manager' emp.lst || exit 2
echo "Pattern found - Job Over"
```

These two are enough for basic decision making but `if` is needed to handle complex ones.



___

### if conditional

The `if` statement makes two-way decision depending on the fulfillment of a certain condition.  `if` also requires `then` to execute. `else` and `elif` are not always required.    
`if` is closed with corresponding `fi`.    
The basic forms are:
```bash {frame="none"}
if command is successful
then
	execute commands
else
	execute commands
fi
```

```bash {frame="none"}
if command is successful
then
	execute commands
fi
```

```bash {frame="none"}
if command is successful
then
	execute commands
elif command is successful
then ...
else ...
fi
```

All commands return a exit status and these solely determine the course of action pursued by `if` and `while`.    

```bash {frame="none"}
if grep "^$1" /etc/passwd 2>/dev/null
then 
	echo "pattern found"
else
	echo "pattern not found"
fi
```


___

### Using test to evaluate expressions

The `test` statement is needed because the true or false values returned by the expressions can't be handles by the `if`.      
`test` doesn't display any output but simply sets the parameter `$?`.

Tests work in three ways:
* Compares two numbers
* Compares two strings or a single one for a null value.
* Checks a file's attributes

___

#### Numeric Comparison 

They always begin with a hyphen `-`, followed by a two letter string enclosed on either side by whitespace.    

| Operator | Meaning                  |
| -------- | ------------------------ |
| `-eq`    | Equal to                 |
| `-ne`    | Not equal to             |
| `-gt`    | Greater than             |
| `-ge`    | Greater than or equal to |
| `-lt`    | Less than                |
| `-le`    | Less than or equal to    |
Numeric comparisons in shell is confined to integer values only; Decimal values are simply truncated.
```bash {frame="none"}
$ x=5; y=7; z=7.2
$ test $x -eq $y ; echo $?
1

$test $x -lt $y ; echo $?
0

$test $z -gt $y ; echo $?
1

$ test $z -eq $y ; echo $?
0
```

Ensure that the messages meant to draw the attention of user (mainly from `echo`) are redirected to `>/dev/tty`.    Even though it will work without it.

```bash {frame="none"}
if test $# -eq 0; then
	echo "Usage: $0 pattern file" >/dev/tty
elif test $# -eq 2; then
	grep "$1" $2 || echo "$1 not found in $2" >/dev/tty
else
	echo "You did not enter two arguments" >/dev/tty
fi
```

The Short hand for `test` is placing the expression in `[ ]` .    
`[ $x -eq $y ]` is same as `test $x -eq $y`     
There must be white space around operators like `-eq` and operands like `$x` and inside `[ ]`.

Shorthand for testing if a number is greater than zero can be `if [ $x -gt 0 ]` can be written as `if [ $x ]`

___

#### String Comparison

`test` can used to compare strings too using another set of operators like `=` where equality is performed and `!=` for inequality and `!` for negation also.     
Also `-n stg` is String `stg` is a not a null string.  `-z stg` is String `stg` is a null string.    
`stg` when String `stg` is assigned and not null.

```bash {frame="none"}
if [ $# -eq 0 ] ; then
	echo "Enter the string to be searched: \c"
	read pname
	if [ -z "$pname" ] ; then
		echo "you have not entered the string" ; exit 1
	fi
	echo "Enter the filename to be used: \c"
	read filename
	if [ ! -n "$filename" ] ; then     # ! -n is same as -z
		echo "You have not entered the filename" ; exit 2
	fi
	emp3a.sh "$pname" "$flname"
else
	emp3a.sh "$@" 
fi
```

Using and `-a` or `-o` operators for checking more than one condition in the same line.

```bash {frame="none"}
if [ -n "$pname" -a -n "$flname" ] ; then
	emp3a.sh "$pname" "$flname"
else
	echo "At least one input was a null string" ; exit 1
fi
```


___

### File Tests

`test` can be used to test the various file attributes like its type or its permissions.    

.
.
.
.

___

### The case Conditional

The `case` statement is the second conditional offered by the shell. The statement matches an expression for more than one alternative, and uses a compact construction to permit multiway branching.    
`case` also handles string tests better than `if`.
```bash {frame = "none"}
case expression in
	pattern1) commands1 ;;
	pattern2) commands2 ;;
	pattern3) commands3 ;;
		....
esac
```

```bash {frame = "none"}
echo "    Menue\n
1. List of files\n2. Process of user\n3. Today's Date
4. Users of system\n5. Quit to UNIX\nEnter Your Option: \c"
read choice
case "$choice" in
	1) ls -l ;;
	2) ps -f ;;
	3) date ;;
	4) who ;;
	5) exit ;;
	*) echo "Invalid option"  # ;; not requires for last option
esac
```

To handle ***multiple patterns*** using same case by using `|` to delimit multiple patterns like when input can be `y` or `Y`
```bash {frame="none"}
echo "Do you want to continue? (y/n): \c"
read answer
case "$answer" in
	y|Y) ;;
	n|N) exit ;;
esac
```


___


#### expr : Computation and String Handling

Not needed for Korn or Bash shell

___


