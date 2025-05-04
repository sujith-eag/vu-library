---
title: "man - mkdir"
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


## mkdir --help

```bash
Usage: mkdir [OPTION]... DIRECTORY...
Create the DIRECTORY(ies), if they do not already exist.

Mandatory arguments to long options are mandatory for short options too.
  -m, --mode=MODE   set file mode (as in chmod), not a=rwx - umask
  -p, --parents     no error if existing, make parent directories as needed,
                    with their file modes unaffected by any -m option.
  -v, --verbose     print a message for each created directory
  -Z                   set SELinux security context of each created directory
                         to the default type
      --context[=CTX]  like -Z, or if CTX is specified then set the SELinux
                         or SMACK security context to CTX
      --help        display this help and exit
      --version     output version information and exit
```


## man mkdir

```bash
NAME
       mkdir - make directories

SYNOPSIS
       mkdir [OPTION]... DIRECTORY...

DESCRIPTION
       Create the DIRECTORY(ies), if they do not already exist.

       Mandatory arguments to long options are mandatory for short options too.

       -m, --mode=MODE
              set file mode (as in chmod), not a=rwx - umask

       -p, --parents
              no  error if existing, make parent directories as needed, with their file
              modes unaffected by any -m option.

       -v, --verbose
              print a message for each created directory

       -Z     set SELinux security context of each created  directory  to  the  default
              type

       --context[=CTX]
              like  -Z,  or  if CTX is specified then set the SELinux or SMACK security
              context to CTX

       --help display this help and exit

       --version
              output version information and exit


```
