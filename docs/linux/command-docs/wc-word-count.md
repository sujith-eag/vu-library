---
title: "man - wc"
description: ""
summary: ""
date: 2024-10-22T09:32:39+05:30
lastmod: 2024-10-22T09:32:39+05:30
draft: true
weight: 998
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


## wc --help

```bash
Usage: wc [OPTION]... [FILE]...
  or:  wc [OPTION]... --files0-from=F
Print newline, word, and byte counts for each FILE, and a total line if
more than one FILE is specified.  A word is a non-zero-length sequence of
printable characters delimited by white space.

With no FILE, or when FILE is -, read standard input.

The options below may be used to select which counts are printed, always in
the following order: newline, word, character, byte, maximum line length.
  -c, --bytes            print the byte counts
  -m, --chars            print the character counts
  -l, --lines            print the newline counts
      --files0-from=F    read input from the files specified by
                           NUL-terminated names in file F;
                           If F is - then read names from standard input
  -L, --max-line-length  print the maximum display width
  -w, --words            print the word counts
      --total=WHEN       when to print a line with total counts;
                           WHEN can be: auto, always, only, never
      --help        display this help and exit
      --version     output version information and exit
```



## man wc


```bash
NAME
       wc - print newline, word, and byte counts for each file

SYNOPSIS
       wc [OPTION]... [FILE]...
       wc [OPTION]... --files0-from=F

DESCRIPTION
       Print  newline,  word,  and  byte counts for each FILE, and a total line if more
       than one FILE is specified.  A word is a non-zero-length sequence  of  printable
       characters delimited by white space.

       With no FILE, or when FILE is -, read standard input.

       The  options below may be used to select which counts are printed, always in the
       following order: newline, word, character, byte, maximum line length.

       -c, --bytes
              print the byte counts

       -m, --chars
              print the character counts

       -l, --lines
              print the newline counts

       --files0-from=F
              read input from the files specified by NUL-terminated names in file F; If
              F is - then read names from standard input

       -L, --max-line-length
              print the maximum display width

       -w, --words
              print the word counts

       --total=WHEN
              when to print a line with total counts; WHEN can be: auto, always,  only, never

       --help display this help and exit

       --version
              output version information and exit
```
