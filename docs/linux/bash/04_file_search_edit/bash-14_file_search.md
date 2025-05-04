---
title: "Bash - 14 - File Searching"
description: ""
summary: ""
date: 2024-12-29T16:50:54+05:30
lastmod: 2024-12-29T16:50:54+05:30
draft: false
weight: 985
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




Linux offers several methods to search for files or directories, with the `find` command being one of the most powerful and versatile tools. 

### File Browser

A **file browser** provides a graphical interface for searching files. It includes:
- A **search bar** where you can enter search terms.
- **Drop-down menus** to filter by criteria such as modification date, file type, or size.

In some cases, file browsers also allow **full-text searching**, where the search examines both the filename and the contents of text files.


_____

### 'find' Command

The `find` command is used to search for files and directories based on specific criteria. It’s a flexible and powerful tool with many options and actions.

To start using `find`, specify the directory in which to search and the search criteria:
```bash {frame="none"}
find [directory] [expression]

find path_list selection_criteria action
```


To list all files and directories under the current directory:
```bash {frame="none"}
$ find .
```
This command will recursively list all files and directories starting from the current directory.

___

#### Filtering by Type

You can filter the search results by file type using the `-type` option:

**`-type d`**: Lists only directories.
```bash {frame="none"}
$ find . -type d
```

**`-type f`**: Lists only files.
```bash {frame="none"}
$ find . -type f
```


___

#### Searching by Name

To search for files based on their name, use the `-name` option with the string or pattern you're looking for. 
```bash {frame="none"}
$ find . -name "*.txt"
```

This finds all `.txt` files in the current directory and all its subdirectories. (`*` gets expanded before expansion)

**Note**: Enclose the pattern in quotes to prevent shell expansion of `*`. Otherwise, it will only search for files named literally `*.txt`.

```bash {frame="none"}
find /etc -name "*.conf"
```
 to locate files ending in `.conf` in the `/etc` directory.


To search case-insensitively, use `-iname`:
```bash {frame="none"}
$ find . -iname "*.txt"
```


____

### Combining 'find' with Other Commands

You can use `find` with other commands. For example, to count the lines in all `.txt` files found by `find`, use command substitution:

```bash {frame="none"}
$ wc -l $(find . -name "*.txt")
```

This will pass all `.txt` files to `wc -l` to count their lines.


To count lines in all `.dat` files and sort the results numerically:
```bash {frame="none"}
$ wc -l $(find . -name "*.dat") | sort -n
```
This command finds all `.dat` files, counts their lines, and sorts the results.

____

There are three categories of options
1. Search criteria: which `-name` and `-iname` are part
2. Options that alter `find`'s behavior.
3. Actions: which control what should happen when it has located an item.



***The search criteria options***       
Most but not all search expression require a parameter.      
`n` indicates an integer (time, size or `UID/GID`)      
`file` indicates filename.      
`test` indicates a set of permissions.     
`type` represents file type or file system type.      
`name` is user or group name.     
`pattern` is regular expression.      


`[+-]n` for time and size, if the number is by itself then it tries to find an exact match.      
If the integer is preceded by `+` then `find` looks for matches where the property is greater than the integer.     
`-5` looks for property values less than 5.


___

### Search Criteria Options
`find` offers many search criteria to refine searches, including time-based, size-based, and type-based options.     

#### Time-Based Options

These options let you search for files based on when they were last accessed or modified: 

- **`-amin [+-]n`**: Files accessed `n` minutes ago (use `+` for older, `-` for more recent).
```bash {frame="none"}
$ find . -amin -5  # Files accessed in the last 5 minutes
```

- **`-mmin [+-]n`**: Files modified `n` minutes ago.
```bash {frame="none"}
$ find . -mmin -100  # Files modified in the last 100 minutes
```

- **`-atime [+-]n`**: Files accessed `n` days ago.
- **`-mtime [+-]n`**: Files modified `n` days ago.

```bash {frame="none"}
$ find . -mtime +10  # Files modified more than 10 days ago
```


#### Size-Based Options

You can search for files based on their size:
- **`-size [+-]n`**: Files of a specific size. Use suffixes like `c` (bytes), `k` (kilobytes), `M` (megabytes), etc.

```bash {frame="none"}
$ find . -size +1M  # Files larger than 1MB
```

`n` can be followed by b (512-byte blocks), c (byte), w (2-word bytes), 
k (kilobytes), M (megabytes) and G (Gigabytes)      
`-size +1024c`  `-size +1k`       
`-size 1000c` means exactly 1000 bytes in size.      
`-size -1000c` means less than 1000 bytes in size.     


#### File Type Options

You can filter by file type:
- **`-type d`**: Directories
- **`-type f`**: Regular files
- **`-type l`**: Symbolic links
-  (s - socket, p - pipe, c - characters, b - block)

```bash {frame="none"}
$ find . -type f  # Regular files
```


#### Permission-Based Options

Search for files based on their permissions:
- **`-perm`**: Files with specific permissions. For example, to find files with `755` permissions:
```bash {frame="none"}
$ find . -perm 755
```


#### Owner and Group Search

Search for files based on their owner or group:
- **`-user username`**: Files owned by a specific user.

```bash {frame="none"}
$ find . -user alice  # Files owned by 'alice'
```

- **`-group groupname`**: Files belonging to a specific group.

```bash {frame="none"}
$ find . -group staff  # Files belonging to the 'staff' group
```

_____

### Logical Operators

You can combine multiple conditions using logical operators:

**`-and`** or **`-a`**: Represents ANDed conditions.
```bash {frame="none"}
$ find . -size +100c -and -size -200c
$ find . -size +100c -size -200c
$ find . -size +100c -a -200c

# Files between 100 and 200 bytes
```


**`-or`** or **`-o`**: Represents ORed conditions.
```bash {frame="none"}
$ find . -size +100c -o -name "*.txt"  
# Files larger than 100 bytes OR .txt files
```


**`-not`** or **`!`**: Negates a condition.
```bash {frame="none"}
$ find . -not -type d  
# Files that are not directories
```

```bash {frame="none"}
find /dev ! -type c
find /dev -not -type c
# All files that are not character type.
```
Without parenthesis, not is applied first, followed by and, then or.


____


### Depth and Mounting Options

- **`-maxdepth`**: Limit the search to a certain depth.

```bash {frame="none"}
$ find . -maxdepth 2  # Search only two levels deep
```

- **`-mount`**: Prevents `find` from descending into other mounted filesystems.

```bash {frame="none"}
$ find . -mount -name "*.txt"  # Only search the current filesystem
```

---

## 3. Actions with `find`

You can specify actions to take on the found files using options like `-exec`, `-delete`, and others.

- **`-delete`**: Deletes all files that match the criteria.

```bash {frame="none"}
$ find . -empty -delete  # Delete all empty files and directories
```

- **`-exec`**: Executes a command on each found file. For example, to count lines in each file:

```bash {frame="none"}
$ find . -type f -exec wc -l {} \;  # Count lines in each file
```

- **`-ok`**: Similar to `-exec`, but asks for confirmation before executing the command on each file.

```bash {frame="none"}
$ find . -type f -exec chmod 755 {} \;  # Change permissions, with confirmation
```

- **`-ls`**: Lists the files using `ls -l` format.

```bash {frame="none"}
$ find . -name "*.txt" -ls
```

- **`-prune`**: Prevents `find` from descending into directories.

```bash {frame="none"}
$ find . -name "*.txt" -prune  # Skip directories
```

- **`-quit`**: Stops the search after finding the first match.

```bash {frame="none"}
$ find . -name "*.txt" -quit  # Stop after finding the first .txt file
```

---

## 4. Other Methods of Locating Files


**`which`**: Finds the path of an executable file which is present in `PATH`.

```bash {frame="none"}
$ which name

$ which ls  
# Locate the 'ls' command
```


**`whereis`**: Locates binary, source, and man pages for a command (not reliant on `PATH`).

```bash {frame="none"}
$ whereis man  # Locate the 'man' command and its files
```


**`locate`**: Uses a database to quickly find files. The database must be updated with `updatedb`.
```bash {frame="none"}
$ locate man  # Locate files related to 'man'
```


---

