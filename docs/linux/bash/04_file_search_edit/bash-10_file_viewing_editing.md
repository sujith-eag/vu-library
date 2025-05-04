---
title: "Bash - 10 - File Viewing and Editing Commands"
description: ""
summary: ""
date: 2024-12-29T16:49:46+05:30
lastmod: 2024-12-29T16:49:46+05:30
draft: false
weight: 979
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Filters are Commands which accepts data from standard input, manipulates it and write the result to standard output.      
Each performs a simple function, these can be combined with other tools using redirection and piping.    

____

## 1. File Creation and Editing

### Creating a Text File Using the Nano Editor

To create a text file with the `nano` editor:
```bash {frame="none"}
nano draft.txt  
# Opens nano for editing
```

**Editing in Nano**:
- Type your content, then save using `Ctrl + O`, followed by `Enter`, and exit with `Ctrl + X`.
- **Note**: `nano` is a simple text editor suitable for plain text files. For more complex editing, consider `Emacs`, `Vim`, or graphical editors like `Gedit` or `VS Code`.

**Alternatives**: On Windows, you can use editors like `Notepad++` or `Notepad`.

---

### Creating a Blank File with [*touch*](/personal-site/docs/bash-linux/command-docs/touch)

```bash {frame="none"}
touch my_file.txt  
# Creates a blank text file
```

`touch` primarily modifies the last access or modification time of a file. If the file doesn’t exist, it creates an empty one.
- `-a`: Modifies only the access time.
- `-m`: Modifies only the modification time.
- `-t`: Allows you to specify a custom timestamp in the format `[[CC]YY]MMDDhhmm[.ss]`.

---


## 2. Text File Viewing and Analysis

### Word Count with [wc](/personal-site/docs/bash-linux/command-docs/wc-word-count)

The `wc` command outputs the count of characters (bytes), words (whitespace between characters), and lines (`\n`) in a text file.

- `-c`, `-m`: Limits count to characters.
- `-l`: Line count.
- `-w`: Word count.
- `-L`: Displays the length of the longest line.

```bash {frame="none"}
wc -l *.pdb  
# Displays the word count for all .pdb files in the current directory
```

Piping the result of a command to `wc`:
Counts the number of lines in the output of `ls -l`
```bash {frame="none"}
ls -l | wc -l
```

If  `wc -l` is run without specifying a filename, it waits for input,  can exit using `Ctrl + C`.


---

### Finding Printable Characters with `strings`

```bash {frame="none"}
strings sujith.jpeg -n 10
```

- `strings` extracts printable characters from a file, even from binary files like `.jpeg`.
- **`-n number`** can override the length of strings to search for.

```bash {frame="none"}
6*&&*6>424>LDDL_Z_||
6*&&*6>424>LDDL_Z_||
Bm&EmvX{2;
!1 0AQ@Paq
```

---


## 3. Text File Navigation Commands

### Viewing Files with `more`, `less`, and `cat`

- **`cat`**: Displays the entire content of a file. Best for small files.

- **`more`**: Displays a screen of content at a time. Press `<space>` to scroll forward, and `q` to quit.

- `-n`: Specify the number of lines to show per screen.
- `+linenumber`: Start viewing from a specific line number.
- **`less`**: Similar to `more`, but allows both forward and backward navigation with arrow keys. To quit, press `q`.

- **Bonus**: `less` works like a `vi` browser, allowing `vi`-style navigation.

---

### Viewing Specific Parts of a File with `head` and `tail`

[*head and tail*](/personal-site/docs/bash-linux/command-docs/head-tail)
**`head`**: By default, shows the first 10 lines of a file.      
We can precede the integer with a minus sign to indicate that the program should skip that number of bytes or lines.
- `head -n 5 file.txt`: Displays the first 5 lines.
- `head -n -3 file.txt`: Shows all but the last 3 lines.
- `head -c -20 file.txt`: Stops at the 21st byte of the file.

**`tail`**: By default, shows the last 10 lines of a file.       
Precede the integer with plus to indicate the starting point within the file.
- `tail -n 5 file.txt`: Displays the last 5 lines.
- `tail -n +12 file.txt`: Displays the file starting from line 12.

---


## 4. Sorting and Manipulating Files

### Sorting Files with [*sort*](/personal-site/docs/bash-linux/command-docs/sort)

The `sort` command sorts lines of text files / output:
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

---


## 5. File Comparison and Difference Commands


### Comparing Files with *cmp*, *comm*, and *diff*


#### cmp : Comparing two files

**`cmp`**: Compares two files byte by byte. It stops when the first difference is found, showing the byte and line number.

```bash {frame="none"}
cmp file1 file2 -i 100:150 -n 1024
```
Compares files one and two, starting at 101 of `file1` and 151 of `file2`. Comparing 1024 bytes.

`cmp` can be forced to skip over a specified number of bytes for each file or stop after reaching a specified limit. If no mismatch then no output.
The default counting used with `cmp -i` (`--ignore-initial`) is a value in bytes (characters)

When the two files are identical, `cmp` returns a prompt without any message. This behavior is important as comparison return a `true` value which is used in shell script to control the flow of the program.

___
#### comm : What is Common?

**`comm`**: Compares two sorted files and outputs three columns:
- Column 1: Lines only in the first file.
- Column 2: Lines common to both files.
- Column 3: Lines only in the second file.

Options can be used to drop a particular column, they can also be combined. 
`-1`: Suppress lines unique to the first file.     
`-2`: Suppress lines unique to the second file.    
`-3`: Suppress lines common to both files.    

___

#### diff : Converting one file to another.

**`diff`**: Compares two files or directories and outputs differences. Useful for checking changes between files.      
It also tells which lines have to be changed to make the two files identical using special symbols and instructions to indicate the changes required.

`-i`: Case-insensitive comparison.     
`-b`: Ignore differences in spaces.     
`-y`: Output in columns for side-by-side comparison.

---

### **Removing Duplicate Lines with `uniq`**

It operates on a single file, searching for consecutive duplicate lines.     Parameters can be used to remove duplicate lines.      
It does not overwrite the file but the output can be can be moved to a new file.

```bash {frame="none"}
uniq file.txt > file_without_duplicates.txt
```

`-c` for counting occurrences,      
`-d` for displaying only duplicate lines.


---


## 6. File Manipulation Commands

### Joining Files with `join`

Joins two sorted files based on a common field (default is field 1).
```bash {frame="none"}
join file1.txt file2.txt
```
When the two files contain a row that contains that same value, then those two lines are joined together. Lines that do not contain a matching first field are not joined.      
(Joining tables using a matching keys)

`-1 NUM`: Specifies which field to join on in the first file.     
`-2 NUM`: Specifies which field to join on in the second file.     
`-i`: Ignore case differences.      
`-e` uses `STRING` in place of an empty field      
`-a 1` or `-a 2` outputs lines from the first or second file which did not contain a match to the other file.

---

### Merging Files with `paste`

```bash {frame="none"}
paste file1.txt file2.txt
```
**`paste`** merges files line by line without requiring a common field. The first line is appended to the first line of other file.


---

### Splitting Files with `split`

```bash {frame="none"}
split -b 1000 file.txt prefix
```
**`split`** divides a large file into smaller files. By default, each file is 1000 bytes.      
We specify the file to split and a `prefix` which is name used for new files.

`-b value`: Specifies the byte size per file.     
`-d`: Use numeric suffixes (e.g., `00`, `01`).

---

### Extracting Data with `cut`

Slitting a file vertically.      
The `cut` command is used to remove or extract specific sections of each line in a file:
```bash {frame="none"}
cut -d , -f 2 animals.csv
# Extracts the second field from a comma-delimited file
```

`-d`: Specifies the delimiter (e.g., comma, space).    
`-f`: Specifies the field(s) to extract.     
**`--complement`**: Returns everything except the specified fields.


To get the three (fields)columns of data within a table which are delimited by tab
```bash {frame="none"}
cut -f 3,4,6 file
```
if the delimiter was space then it has to specified using `-d ' '`

We can pipe the results of other command to reduce the output.

To remove duplicates from the output, you can pipe `cut` into `sort` and `uniq`:

```bash {frame="none"}
$ cut -d , -f 2 animals.csv | sort | uniq
```
Removing the duplicates using `uniq`      
Using `uniq -c` gives the count of occurrences for each line in input.


`ls -l | cut -c 2-10`  outputs only the permissions of the files which starts from 2nd character to 10th.

```bash {frame="none"}
sujith@sujith-Latitude-7490:~/Desktop$ ls -l | cut -c 2-10
otal 56
rw-rw-r--
rwxrwxr-x
rw-rw-r--
rwxr-xr-x
rwxr-xr-x
rwxrwxr-x
rwxrwxr-x
rwxrwxr-x
```

 To get the permissions and the file name (getting the first 2-10 chars and also the 9th field where the names are present, with delimiter being space.)
 `ls -l | cut -f 1,9 -d ' '`   won't work properly due to unevenness. 

(`awk` offers better solution that cut for selecting fields)


---

### Example Workflow

```bash {frame="none"}
cd nart-pacific-gyre
wc -l *.txt           # Get the word count for all .txt files
wc -l *.txt | sort -n | head -n 5  # Display the first five file line counts
wc -l *.txt | sort -n | tail -n 5  # Display the last five file line counts
```

---



### Text Editors: `vi` and `vim`

**`vi`** (or its improved version **`vim`**) is the default text editor found in most Linux distributions. It is used for editing text files from the command line. `vim` (Vi IMproved) offers additional features like syntax highlighting, better search functionalities, and more. While `vi` is still widely used, `vim` is recommended due to its enhanced capabilities.

