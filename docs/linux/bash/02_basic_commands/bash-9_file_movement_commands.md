---
title: "Bash - 09 - File Movement and Copy Commands"
description: ""
summary: ""
date: 2024-12-29T16:49:18+05:30
lastmod: 2024-12-29T16:49:18+05:30
draft: false
weight: 978
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



***Naming Conventions***
- Avoid spaces; use `_` or `-` instead.
- Do not start names with `-` to prevent confusion with options/flags.
- Stick to characters: `0-9`, `a-z`, `.`, `-`, `_`. Special characters can have different meanings.
- Use single quotes `' '` for names with spaces or special characters.

____


### File Movement and Copy Command

Moving / Renaming (`mv`), copying (`cp`), creating, deleting (`rm`) files and directories.    
These work by modifying the directory entries of the files they access.
* `cp` adds an entry to the directory with the name of destination file and inode number that is allotted by the kernel.
* `mv` replaces the name of an existing directory entry without disturbing its inode number. 
* `rm` removes an entry from the directory.

___

### [mv](/personal-site/docs/bash-linux/command-docs/mv-move)

`mv` is used to move or rename both files and directories.

```
mv [options] source destination
```

To rename a file, `source` is the old name and `destination` is the new name. Otherwise, both need to be in different directories. If `destination` is a directory without a file name, the file's name is not changed.

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

_Note:_ Moving a file to a directory with the same name will silently overwrite the original. Use `mv -i` to prompt for confirmation.

To move files to a different directory:

```bash {frame="none"}
mv trial/quotes.txt .  
# Moves to the current directory

mv sucrose.dat maltase.dat ../raw  
# Moves files to the parent directory's raw folder
```

We are not allowed to rename multiple files using a single `mv` command as it has only a single `destination` parameter. `mv *.txt *.dat` will cause an error because `*.dat` means multiple destinations, but it needs to be a single directory or file name.

`-i` and `-f` are interactive and force modes. The difference occurs when a file being moved has the same name at the destination. If not interactive, the destination file is overwritten.

____

### [cp](/personal-site/docs/bash-linux/command-docs/cp-copy)

The format is the same as `mv`:

```
cp [options] source destination
```

```bash {frame="none"}
cp [old] [new]  # Copies a file

cp quotes.txt thesis/quotation.txt  
# Copies to a new location
```

There are three combinations that can be used:

- Destination is another directory, then the file name remains the same after copying.
- Destination is a directory and a file name, then the file is copied with a new name.
- Destination is a filename, then the file is copied into the current directory with a new name.

```bash {frame="none"}
cp fo.txt ~zap/fo1.txt
cp *.txt ~
cp ~zapp/foo.txt .
```

`-i` and `-f` remain the same as `mv`.

- `-b`: Creates a backup of every destination file.
- `-I/-s`: Creates a hard or symbolic link rather than a physical copy.
- `-u`: Copies only if the source is newer than the destination or if the destination is missing.
- `-L`: If the source is a symbolic link, it follows the link to the actual file and copies that file, not the link.
- `-v`: Provides output for each file copied. (verbose)
- `-p`: Preserves the original ownership, permissions, and timestamps. (When `cp` creates a copy, it's ownership and permissions are updated to that pf the user who issued the command.)
- `-r`: Recursive copy for directories and their contents.

To copy a directory and all its contents, use `-r`:

```bash {frame="none"}
cp -r thesis thesis_backup  
# Copies the entire directory
```

___

### Operations with Multiple Files and Directories

To copy or move multiple files, list the files followed by the target directory. If given more than one file name followed by a directory name, the directory must be the last argument.

```bash {frame="none"}
cp file1.txt file2.txt target_directory/  
# Copy multiple files

mv file1.txt file2.txt target_directory/   
# Move multiple files
```

Using wildcards simplifies this process:

```bash {frame="none"}
cp *.txt backup/  # Copies all .txt files to backup/
```

```bash {frame="none"}
$ mkdir backup

$ cp cretures/minotaur.dat creatures/unicorn.dat backup/

$ cp minotaur.dat unicorn.dat basilisk.dat
# Error occurs with multiple files; use wildcards instead
```

___

## Wildcards

Wildcards represent unknown characters in commands.

Common wildcards include:

`*`: Represents zero or more characters.
- `*.pdb` matches all files ending with `.pdb`.
- `*ethane.pdb` matches ethane and methane.
- `p*.pdb` matches files starting with `p` and ending with `.pdb`.

`?`: Represents exactly one character.
- `?ethane.pdb` matches `methane.pdb`.


#### Using Wildcards in Commands

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

_Note:_ Be cautious when using wildcards, as errors can occur if not handled properly (e.g., `*.pdf` in a directory with `.pdb` files).

### Using Wildcards for Copying

```bash {frame="none"}
$ cp *dataset* backup/datasets
# Copy anything with 'dataset' in the name to the datasets directory inside backups

$ cp *calibration.txt backup/calibration
# Copy all calibration files

$ cp 2015-11-* send_to_bob/all_november_files/
# Copy just November files

$ cp *-23-dataset* send_to_bob/all_datasets_created_on_23rd/
# Copy only 23rd files
```


____

#### [*rm*](/personal-site/docs/bash-linux/command-docs/rm-remove)

`rm` is the delete command.

```
rm [options] file(s)
```

It can work on multiple files by listing, using wildcards, or both.

```bash {frame="none"}
rm my_file.txt  
# Deletes the specified file
```

Use `rm -i` to prompt for confirmation before deletion. `rm` permanently deletes files, so it's advisable to use `-i` to ask for confirmation before deleting. 
The alias for `rm` can be set as `rm -i`

If too many files are being deleted and you want to override the prompts, use `-f`, but this can be dangerous: `rm -f *.txt`.

`rm` cannot remove directories directly. To remove a directory and its contents, use the recursive `-r` option:

```bash {frame="none"}
rm -r directory_name  
# Deletes the directory and all its contents
```

To delete a complete sub-hierarchy and override the prompts, use `rm -fr *`.

- To remove files matching a pattern (e.g., all `.txt` files) with confirmation:

```bash {frame="none"}
rm -i *.txt  # Prompts for each .txt file
```

_Note:_ The shell does not have a trash bin, so deleted files are permanently removed.


`rmdir` is the only way to delete an empty directory. Use `rmdir -p` to recursively delete parent and current directories.


___

## [*mkdir*](/personal-site/docs/bash-linux/command-docs/mkdir) Creating Directories

Used to create a directory, in the current directory or a specified path.

- `-m` `--mode`: Specify the initial permissions of the directory.
- `-z` `--context`: Specify the SELinux context.

```bash {frame="none"}
mkdir [name]  # Create a directory
```


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

To list all nested subdirectories within a directory, use `ls -R`.



#### Example:
To create a directory `2016` with a sub-directory `data` that contains two directories, `processed` and `raw`:

**Method 1: Step-by-Step Creation**

```bash {frame="none"}
mkdir 2016
mkdir 2016/data
mkdir 2016/data/processed
mkdir 2016/data/raw
```

**Method 2: Navigating and Creating**

```bash {frame="none"}
mkdir 2016
cd 2016
mkdir data
cd data
mkdir processed raw
```

**Method 3: Using `-p`**

```bash {frame="none"}
mkdir -p 2016/data/{processed,raw}  
# Creates the full structure in one command
```



---
