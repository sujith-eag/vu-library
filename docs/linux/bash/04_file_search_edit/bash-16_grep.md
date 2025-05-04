---
title: "Bash - 16 - egrep"
description: ""
summary: ""
date: 2024-12-29T16:51:37+05:30
lastmod: 2024-12-29T16:51:37+05:30
draft: false
weight: 987
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



[*grep*](/personal-site/docs/bash-linux/command-docs/grep) stands for "global/regular expression/print."       
It is a powerful tool for searching text and is commonly used in UNIX text editors.    

`grep` program searches one or more files by line to match against a specified regular expression. Each line is treated as the string and `grep` searches for any substring of the line that matches the regex. If found, by default `grep` outputs the matching lines.

`grep` only applies the POSIX basic regular expression set and extended regular expressions set `egrep` is used.      
`egrep` can do everything `grep` can do, there is no need to use anything other than `egrep`.

```bash {frame="none"}
egrep [options] regex filename(s)
```
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

egrep '[A-Za-z]+[[:punct:]]' *.txt
# Find lines that contain letters followed by any punctuation mark anywhere in the line. 
```

```bash {frame="none"}
egrep '^[0-9]*[^0-9]+$' *.txt
# Finds lines that if they have digits are found at the beginning of the line.

egrep '^[A-Z][a-z]+ [A-Z][a-z]+$' *.txt
# Find all lines that contain exactly two words, both capitalized

egrep '[a-z]+ [a-z]+ [a-z]+' *.txt
# Find lines that contain at least 3 words, lowercased
```

_____

### Options

- **Recursive Search (`-r`)**: Searches through all files in the directory and subdirectories.
```bash {frame="none"}
$ egrep -r "Yesterday"
```

- **Count (`-c`)**: Gives the count of the matches for each file instead of a list.
```bash {frame="none"}
$ egrep -c '[0-9]{1,3}' /etc/resolve.conf
```

- **Word Boundary (`-w`)**: Limits matches to whole words only.
```bash {frame="none"}
$ grep -w "The" haiku.txt
```

- **Line Numbers (`-n`)**: Numbers the results with the line numbers.
```bash {frame="none"}
$ grep -n "it" haiku.txt
```

- **Case Insensitivity (`-i`)**: Makes the search case insensitive.
```bash {frame="none"}
$ grep -n -w -i "the" haiku.txt
```

- **Invert Match (`-v`)**: Inverts the search to get all lines that do not match.
```bash {frame="none"}
$ grep -v -n -w "the" haiku.txt
```

Regex can be placed in a file and `-f` option can be used to reference the file.    

`-e` and `-f` ???

_______

The outputs of `ls` are piped to `egrep`, Outputs are all regular files whose owner permissions are `rwx`. `^` starts the regex, since `$` is not given, doesn't match whole string. 
```bash {frame="none"}
ls -l /etc | egrep '^-rwx'
```

???
```bash {frame="none"}
ls -l /etc | egrep '.{13}[^1]'
```

