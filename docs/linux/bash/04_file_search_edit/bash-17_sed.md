---
title: "Bash - 17 - sed"
description: ""
summary: ""
date: 2024-12-29T16:51:47+05:30
lastmod: 2024-12-29T16:51:47+05:30
draft: false
weight: 988
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


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

> [!note]
> The address and action are enclosed within single quotes.
> Double quotes should be used only when variable evaluation or command substitution is embedded in the quoted string.

Addressing in `sed` is done in two ways:
* One line number to select a single line or two line numbers (3,7), which specifies a group of contiguous lines. 
* By specifying a `/` enclosed pattern which occurs in a line (`/From:/`)

The action component is drawn from `sed`'s internal commands.

`sed` processes several instruction in a sequential manner. each instruction operates on the previous instruction.

___

#### Options
`-e`option that lets use multiple instructions       
`-f` to take instructions from a file.      
Both work the same way they do in `grep`

____

```bash {frame="none"}
sed '3q' emp.lst
```
`3q` can be broken down to the address `3` and the action `q (quit)`.      
When it is enclosed in quotes and followed by  a file name, then it simulates the `head -n 3` which prints the first three lines.

> [!note]
> Generally `p` command is used for printing, it has a strange behavior to print the selected lines and also all the lines. So selected lines appear twice.      
> Using `-n` option with `p` command will suppress this. 


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


Negating the action using `!` negation operator which can be used with any action.      
Selecting the first two lines by Not selecting the 3rd line till the last line.
```bash {frame="none"}
sed -n '3,$!p' emp.lst
```


___

#### Using `-e` and `-f` for multiple instructions

`-e` allows for entering multiple instructions each preceded by the option.
```bash {frame="none"}
sed -n -e '1,2p' -e '7,9p' -e '$p' emp.lst
```

When there are too many instruction it is better to store them in a file first and then load them in.
```bash {frame="none"}
$ cat inst.fil
1,2p
7,9p
$p
```
Now `-f` can be used to direct `sed` to take instructions from the file
```bash {frame="none"}
sed -n -f inst.fil emp.lst
```

Using multiple files and combining `-e -f`
```bash {frame="none"}
sed -n -f inst.fil1 -f inst.fil2 emp.lst

sed -n -e '/sen/p' -f instr.fil1 -f inst.fil2 emp?.lst
```

___

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


____

### Text editing

`sed` can insert and change existing text in a file.    
It is similar to the vi command `i` for insert, `a` for append, `c` to change, `d` to delete.

.
.
.
.

___
