---
title: "Bash - 02 - Features"
description: ""
summary: ""
date: 2024-10-22T09:33:16+05:30
lastmod: 2024-10-22T09:33:16+05:30
draft: false
weight: 971
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


### Command-Line Editing

Bash supports several special keystrokes for command-line editing. These keystrokes are combinations of the **Control** key, **Escape** key, or other keys and are based on the `emacs` text editor.

**Control Key (`Ctrl`)** : Hold the Control key and press the other key.     
**Escape Key (`Esc`)** : Press the Escape key, release it, and then press the other key.

**Navigation and Editing Keystrokes**
- **`Ctrl + p`** / **`↑`** : Move up in the history list (previous command).
- **`Ctrl + n`** / **`↓`** : Move down in the history list (next command).

- **`Ctrl + a`** : Move the cursor to the beginning of the line.
- **`Ctrl + e`** : Move the cursor to the end of the line.

- **`Ctrl + d`** or **`Delete`** : Delete the character the cursor is on.
- **`Backspace`** or **`Ctrl + h`** : Delete the character before the cursor.
- **`Ctrl + w`** : Delete one word, removing characters from the cursor to the beginning of the word.

- **`Ctrl + k`** : Delete everything from the cursor to the end of the line.
- **`Ctrl + u`** : Delete everything from the current command line.

- **`Ctrl + l`** : Clear the terminal screen but leave the current command line intact.

**Text Transformation**
- **`Ctrl + y`** : Yank (paste) the last deleted characters.
- **`Esc + u`** : Uppercase the word from the cursor position to the next space.
- **`Esc + l`** : Lowercase the word from the cursor position to the next space.
- **`Esc + c`** : Capitalize the first letter of the word at the cursor position.

___
`Crtl + c` : or `Delete` to interrupt a command (Interrupt character).     

`Ctrl + s` : and `Ctrl + q` to Freeze and Release the terminal.    

`Ctrl + j` or `Ctrl + m` : Alternative to Enter Key

---

### Redirection

Redirection is the process of using operators to control where input or output from a command goes.

##### **Writing to a File / Capturing Output**

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


___

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


---

Two Special files are `/dev/null` and `dev/tty`.    
These files always have zero size and will incinerate any output written to it. This facility is useful to redirecting error messages away from terminal. Or to check the program running successfully without seeing the output. 


____
### Pipes

Pipes (`|`) allow the output of one command to be used as input for another command, enabling efficient chaining of multiple commands.

#### Basic Pipe Usage

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


***When a Command Needs to be Ignorant of Its Source***     
I
f `wc *.c`   would give the individual count of all the files and also the total count.      
By passing the input to `wc` using pipe when the command does not know the source, it outputs just the total of the stream from pipe.

```bash {frame="none"}
cat *.c | wc -c
# 9636

if [`cat *c | wc -c` -lt 1474560] ; then
	echo 'These files will fit into a single 3.5" diskette'
fi
```

---

#### Using Tilde Expansion

In Bash, **tilde expansion** allows the `~` symbol to represent the home directory, eliminating the need to type the full path `/home/username/`.

Change to the home directory:
```bash {frame="none"}
$ cd ~
```

List `.txt` files in the home directory:    
```bash {frame="none"}
$ ls ~/*.txt
```
`*` is a wildcard that replaces everything found and there are more.
it is termed as `filename` expansion.      
`ls -l *.txt`    the `.*txt` is replaced by all the files before execution.

---

#### Brace Expansion

Brace expansion allows for grouping file names or directories that share the same path. It’s useful for creating multiple files or directories in one go.

List specific files or directories:
```bash {frame="none"}
$ ls -l /home/{one,two/{.,stuff},underwood,overwood/{.,lyrics,music}}
```
Here the `.` are used to include the current directories also.

This will expand to:
```
/home/one
/home/two
/home/two/.stuff
/home/two/stuff
/home/underwood
/home/overwood
/home/overwood/.lyrics
/home/overwood/music
```


____


### History List

All entered commands are stored in a history list. Can be viewed by typing `history`.

```bash {frame="none"}
sujith@sujith-Latitude-7490:~/Desktop$ cd Desktop/; history > comm.txt;
```

Creates a file (`comm.txt`) containing all the commands typed, which can have thousands of commands.

The history list can store a maximum of 1000 commands. Older commands are discarded when the list exceeds this limit. 

The number preceding the command in the history list can be used to recall it.       
Using `!100` recalls the command at position 100 in the history list.

---

#### Recalling Instructions from the History List

- **`!!`** : Recalls and runs the last instruction.
- **`!n`** : Recalls and runs the `n`-th instruction from the history list.
- **`!str`** : Recalls the latest instruction that uniquely starts with `str`.

**Using parameters from the last command:**

- **`command !^`** : Issues the command and uses the first parameter/option from the last instruction.
- **`command !$`** : Issues the command and uses the last parameter/option from the last instruction.
- **`command !*`** : Issues the command and uses all parameters/options from the last instruction.

```bash {frame="none"}
ls -l !^
ls -l !$
ls !*
```

#### Recalling Previous Instructions to Edit or Display

- **`<up arrow>`** or **`Ctrl + p`** : Retrieve the last instruction in the history list.
- **`<down arrow>`** or **`Ctrl + n`** : Move forward in the history list.

Can also use:
- **`!!:p`** : Prints the last instruction from the history list.
- **`!:2000`** : Prints the 2000th instruction from the history (may not work if there are fewer than 2000 entries).
- **`!:str`** : Prints the last instruction that starts with `str`.

#### Options for the `history` Command

- **`history -c`** : Clears the history list.

- **`history -d n`** : Deletes the `n`-th entry from the history list, causing the remaining entries to shift up.

- **`history -r filename`** : Loads the history list from `filename` and replaces the current history list. (Note: Previous history numbers may be appended to the commands.)

- **`history -w filename`** : Writes the current history list to a file.

- **`history -a filename`** : Appends the current history list to a file.

- **`history -n filename`** : Reads from `filename`, adding any new lines not already in the current history list to the current history.


______
