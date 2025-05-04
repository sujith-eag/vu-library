---
title: "Bash Commands"
description: ""
summary: ""
date: 2024-10-22T09:32:39+05:30
lastmod: 2024-10-22T09:32:39+05:30
draft: false
weight: 998
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Most commonly used Bash commands:

1. [**ls**](/personal-site/docs/bash-linux/command-docs/ls-list) - List directory contents.  
2. [**cd**](/personal-site/docs/bash-linux/command-docs/cd-change-directory) - Change the current directory.  
3. [**pwd**](/personal-site/docs/bash-linux/command-docs/pwd) - Print the current working directory.  
4. [**cp**](/personal-site/docs/bash-linux/command-docs/cp-copy) - Copy files and directories.  
5. [**mv**](/personal-site/docs/bash-linux/command-docs/mv-move) - Move or rename files and directories.  
6. [**rm**](/personal-site/docs/bash-linux/command-docs/rm-remove) - Remove files or directories.  
7. [**touch**](/personal-site/docs/bash-linux/command-docs/touch) - Create an empty file or update the timestamp of an existing file.  
8. [**mkdir**](/personal-site/docs/bash-linux/command-docs/mkdir) - Create a new directory.  
9. **rmdir** - Remove an empty directory.  
10. [**cat**](/personal-site/docs/bash-linux/command-docs/cat-concatenate) - Concatenate and display file contents.  
11. [**echo**](/personal-site/docs/bash-linux/command-docs/echo) - Display a line of text or variables.  
12. [**grep**](/personal-site/docs/bash-linux/command-docs/grep) - Search for patterns in files.  
13. **find** - Search for files and directories in a directory hierarchy.  
14. **chmod** - Change file permissions.  
15. **chown** - Change file owner and group.  
16. **tar** - Archive files.  
17. **wget** - Download files from the web.  
18. **curl** - Transfer data to or from a server.  
19. **man** - Display the manual for a command.  
20. **history** - Show the command history.  

These commands form the backbone of file management and system navigation in the Bash shell.

## help

```bash
These shell commands are defined internally.  Type `help' to see this list.
Type `help name' to find out more about the function `name'.
Use `info bash' to find out more about the shell in general.
Use `man -k' or `info' to find out more about commands not in this list.

A star (*) next to a name means that the command is disabled.

 job_spec [&]                            history [-c] [-d offset] [n] or hist>
 
 (( expression ))                        if COMMANDS; then COMMANDS; [ elif C>
 
 . filename [arguments]                  jobs [-lnprs] [jobspec ...] or jobs >
 
 :                                       kill [-s sigspec | -n signum | -sigs>
 
 [ arg... ]                              let arg [arg ...]
 
 [[ expression ]]                        local [option] name[=value] ...
 
 alias [-p] [name[=value] ... ]          logout [n]
 
 bg [job_spec ...]                       mapfile [-d delim] [-n count] [-O or>
 
 bind [-lpsvPSVX] [-m keymap] [-f file>  popd [-n] [+N | -N]
 
 break [n]                               printf [-v var] format [arguments]
 
 builtin [shell-builtin [arg ...]]       pushd [-n] [+N | -N | dir]
 
 caller [expr]                           pwd [-LP]    
 
 case WORD in [PATTERN [| PATTERN]...)>  read [-ers] [-a array] [-d delim] [->
 
 cd [-L|[-P [-e]] [-@]] [dir]            readarray [-d delim] [-n count] [-O >
 
 command [-pVv] command [arg ...]        readonly [-aAf] [name[=value] ...] o>
 
 compgen [-abcdefgjksuv] [-o option] [>  return [n]
 
 complete [-abcdefgjksuv] [-pr] [-DEI]>  select NAME [in WORDS ... ;] do COMM>
 
 compopt [-o|+o option] [-DEI] [name .>  set [-abefhkmnptuvxBCEHPT] [-o optio>
 
 continue [n]                            shift [n]
 
 coproc [NAME] command [redirections]    shopt [-pqsu] [-o] [optname ...]
 
 declare [-aAfFgiIlnrtux] [name[=value>  source filename [arguments]
 
 dirs [-clpv] [+N] [-N]                  suspend [-f]
 
 disown [-h] [-ar] [jobspec ... | pid >  test [expr]
 
 echo [-neE] [arg ...]                   time [-p] pipeline
 
 enable [-a] [-dnps] [-f filename] [na>  times
 
 eval [arg ...]                          trap [-lp] [[arg] signal_spec ...]
 
 exec [-cl] [-a name] [command [argume>  true
 
 exit [n]                                type [-afptP] name [name ...]
 
 export [-fn] [name[=value] ...] or ex>  typeset [-aAfFgiIlnrtux] name[=value>
 
 false                                   ulimit [-SHabcdefiklmnpqrstuvxPRT] [>
 
 fc [-e ename] [-lnr] [first] [last] o>  umask [-p] [-S] [mode]
 
 fg [job_spec]                           unalias [-a] name [name ...]
 
 for NAME [in WORDS ... ] ; do COMMAND>  unset [-f] [-v] [-n] [name ...]
 
 for (( exp1; exp2; exp3 )); do COMMAN>  until COMMANDS; do COMMANDS-2; done
 
 function name { COMMANDS ; } or name >  variables - Names and meanings of so>
 
 getopts optstring name [arg ...]        wait [-fn] [-p var] [id ...]
 
 hash [-lr] [-p pathname] [-dt] [name >  while COMMANDS; do COMMANDS-2; done
 
 help [-dms] [pattern ...]               { COMMANDS ; }


```



## info

```bash

* Menu:

Basics
* Common options: (coreutils)Common options.
* Coreutils: (coreutils).       Core GNU (file, text, shell) utilities.
* Date input formats: (coreutils)Date input formats.
* Ed: (ed).                     The GNU line editor
* File permissions: (coreutils)File permissions.
                                Access modes.
* Finding files: (find).        Operating on files matching certain criteria.
* Time: (time).                 time

Compression
* Gzip: (gzip).                 General (de)compression of files (lzw).

Development
* SSIP: (ssip).                 Speech Synthesis Interface Protocol.
* Speech Dispatcher: (speech-dispatcher).
                                Speech Dispatcher.

Editors
* nano: (nano).                 Small and friendly text editor.

GNU organization
* Maintaining Findutils: (find-maint).
                                Maintaining GNU findutils

GNU Utilities
* dirmngr-client: (gnupg).      X.509 CRL and OCSP client.
* dirmngr: (gnupg).             X.509 CRL and OCSP server.
* gpg-agent: (gnupg).           The secret key daemon.
* gpg2: (gnupg).                OpenPGP encryption and signing tool.
* gpgsm: (gnupg).               S/MIME encryption and signing tool.

Individual utilities
* arch: (coreutils)arch invocation.             Print machine hardware name.
* b2sum: (coreutils)b2sum invocation.           Print or check BLAKE2 digests.
* base32: (coreutils)base32 invocation.         Base32 encode/decode data.
* base64: (coreutils)base64 invocation.         Base64 encode/decode data.
* basename: (coreutils)basename invocation.     Strip directory and suffix.
* basenc: (coreutils)basenc invocation.         Encoding/decoding of data.
* cat: (coreutils)cat invocation.               Concatenate and write files.
* chcon: (coreutils)chcon invocation.           Change SELinux CTX of files.
* chgrp: (coreutils)chgrp invocation.           Change file groups.
* chmod: (coreutils)chmod invocation.           Change access permissions.
* chown: (coreutils)chown invocation.           Change file owners and groups.
* chroot: (coreutils)chroot invocation.         Specify the root directory.
* cksum: (coreutils)cksum invocation.           Print POSIX CRC checksum.
* cmp: (diffutils)Invoking cmp.                 Compare 2 files byte by byte.
* comm: (coreutils)comm invocation.             Compare sorted files by line.
* cp: (coreutils)cp invocation.                 Copy files.
* csplit: (coreutils)csplit invocation.         Split by context.
* cut: (coreutils)cut invocation.               Print selected parts of lines.
* date: (coreutils)date invocation.             Print/set system date and time.
* dd: (coreutils)dd invocation.                 Copy and convert a file.
* df: (coreutils)df invocation.                 Report file system usage.
* diff: (diffutils)Invoking diff.               Compare 2 files line by line.
* diff3: (diffutils)Invoking diff3.             Compare 3 files line by line.
* dir: (coreutils)dir invocation.               List directories briefly.
* dircolors: (coreutils)dircolors invocation.   Color setup for ls.
* dirname: (coreutils)dirname invocation.       Strip last file name component.
* du: (coreutils)du invocation.                 Report file usage.
* echo: (coreutils)echo invocation.             Print a line of text.
* env: (coreutils)env invocation.               Modify the environment.
* expand: (coreutils)expand invocation.         Convert tabs to spaces.
* expr: (coreutils)expr invocation.             Evaluate expressions.
* factor: (coreutils)factor invocation.         Print prime factors
* false: (coreutils)false invocation.           Do nothing, unsuccessfully.
* find: (find)Invoking find.                    Finding and acting on files.
* fmt: (coreutils)fmt invocation.               Reformat paragraph text.
* fold: (coreutils)fold invocation.             Wrap long input lines.
* groups: (coreutils)groups invocation.         Print group names a user is in.
* gunzip: (gzip)Overview.                       Decompression.
* gzexe: (gzip)Overview.                        Compress executables.
* head: (coreutils)head invocation.             Output the first part of files.
* hostid: (coreutils)hostid invocation.         Print numeric host identifier.
* hostname: (coreutils)hostname invocation.     Print or set system name.
* id: (coreutils)id invocation.                 Print user identity.
* install: (coreutils)install invocation.       Copy files and set attributes.
* join: (coreutils)join invocation.             Join lines on a common field.
* kill: (coreutils)kill invocation.             Send a signal to processes.
* link: (coreutils)link invocation.             Make hard links between files.
* ln: (coreutils)ln invocation.                 Make links between files.
* locate: (find)Invoking locate.                Finding files in a database.
* logname: (coreutils)logname invocation.       Print current login name.
* ls: (coreutils)ls invocation.                 List directory contents.
* md5sum: (coreutils)md5sum invocation.         Print or check MD5 digests.
* mkdir: (coreutils)mkdir invocation.           Create directories.
* mkfifo: (coreutils)mkfifo invocation.         Create FIFOs (named pipes).
* mknod: (coreutils)mknod invocation.           Create special files.
* mktemp: (coreutils)mktemp invocation.         Create temporary files.
* mv: (coreutils)mv invocation.                 Rename files.
* nice: (coreutils)nice invocation.             Modify niceness.
* nl: (coreutils)nl invocation.                 Number lines and write files.
* nohup: (coreutils)nohup invocation.           Immunize to hangups.
* nproc: (coreutils)nproc invocation.           Print the number of processors.
* numfmt: (coreutils)numfmt invocation.         Reformat numbers.
* od: (coreutils)od invocation.                 Dump files in octal, etc.
* paste: (coreutils)paste invocation.           Merge lines of files.
* patch: (diffutils)Invoking patch.             Apply a patch to a file.
* pathchk: (coreutils)pathchk invocation.       Check file name portability.
* pr: (coreutils)pr invocation.                 Paginate or columnate files.
* printenv: (coreutils)printenv invocation.     Print environment variables.
* printf: (coreutils)printf invocation.         Format and print data.
* ptx: (coreutils)ptx invocation.               Produce permuted indexes.
* pwd: (coreutils)pwd invocation.               Print working directory.
* readlink: (coreutils)readlink invocation.     Print referent of a symlink.
* realpath: (coreutils)realpath invocation.     Print resolved file names.
* rm: (coreutils)rm invocation.                 Remove files.
* rmdir: (coreutils)rmdir invocation.           Remove empty directories.
* runcon: (coreutils)runcon invocation.         Run in specified SELinux CTX.
* sdiff: (diffutils)Invoking sdiff.             Merge 2 files side-by-side.
* seq: (coreutils)seq invocation.               Print numeric sequences
* sha1sum: (coreutils)sha1sum invocation.       Print or check SHA-1 digests.
* sha2: (coreutils)sha2 utilities.              Print or check SHA-2 digests.
* shred: (coreutils)shred invocation.           Remove files more securely.
* shuf: (coreutils)shuf invocation.             Shuffling text files.
* sleep: (coreutils)sleep invocation.           Delay for a specified time.
* sort: (coreutils)sort invocation.             Sort text files.
* split: (coreutils)split invocation.           Split into pieces.
* stat: (coreutils)stat invocation.             Report file(system) status.
* stdbuf: (coreutils)stdbuf invocation.         Modify stdio buffering.
* stty: (coreutils)stty invocation.             Print/change terminal settings.
* sum: (coreutils)sum invocation.               Print traditional checksum.
* sync: (coreutils)sync invocation.             Sync files to stable storage.
* tac: (coreutils)tac invocation.               Reverse files.
* tail: (coreutils)tail invocation.             Output the last part of files.
* tee: (coreutils)tee invocation.               Redirect to multiple files.
* test: (coreutils)test invocation.             File/string tests.
* timeout: (coreutils)timeout invocation.       Run with time limit.
* touch: (coreutils)touch invocation.           Change file timestamps.
* tr: (coreutils)tr invocation.                 Translate characters.
* true: (coreutils)true invocation.             Do nothing, successfully.
* truncate: (coreutils)truncate invocation.     Shrink/extend size of a file.
* tsort: (coreutils)tsort invocation.           Topological sort.
* tty: (coreutils)tty invocation.               Print terminal name.
* uname: (coreutils)uname invocation.           Print system information.
* unexpand: (coreutils)unexpand invocation.     Convert spaces to tabs.
* uniq: (coreutils)uniq invocation.             Uniquify files.
* unlink: (coreutils)unlink invocation.         Removal via unlink(2).
* updatedb: (find)Invoking updatedb.            Building the locate database.
* uptime: (coreutils)uptime invocation.         Print uptime and load.
* users: (coreutils)users invocation.           Print current user names.
* vdir: (coreutils)vdir invocation.             List directories verbosely.
* wc: (coreutils)wc invocation.                 Line, word, and byte counts.
* who: (coreutils)who invocation.               Print who is logged in.
* whoami: (coreutils)whoami invocation.         Print effective user ID.
* xargs: (find)Invoking xargs.                  Operating on many files.
* yes: (coreutils)yes invocation.               Print a string indefinitely.
* zcat: (gzip)Overview.                         Decompression to stdout.
* zdiff: (gzip)Overview.                        Compare compressed files.
* zforce: (gzip)Overview.                       Force .gz extension on files.
* zgrep: (gzip)Overview.                        Search compressed files.
* zmore: (gzip)Overview.                        Decompression output by pages.

Kernel
* grub-dev: (grub-dev).         The GRand Unified Bootloader Dev
* grub-install: (grub)Invoking grub-install.
                                Install GRUB on your drive
* grub-mkconfig: (grub)Invoking grub-mkconfig.
                                Generate GRUB configuration
* grub-mkpasswd-pbkdf2: (grub)Invoking grub-mkpasswd-pbkdf2.
* grub-mkrelpath: (grub)Invoking grub-mkrelpath.
* grub-mkrescue: (grub)Invoking grub-mkrescue.
                                Make a GRUB rescue image
* grub-mount: (grub)Invoking grub-mount.
                                Mount a file system using GRUB
* grub-probe: (grub)Invoking grub-probe.
                                Probe device information
* grub-script-check: (grub)Invoking grub-script-check.
* GRUB: (grub).                 The GRand Unified Bootloader

Libraries
* RLuserman: (rluserman).       The GNU readline library User's Manual.

Math
* bc: (bc).                     An arbitrary precision calculator language.

Miscellaneous
* dc: (dc).                     Arbitrary precision RPN "Desktop Calculator".

Network applications
* Wget: (wget).                 Non-interactive network downloader.

Sound
* SSIP: (ssip).                 Speech Synthesis Interface Protocol.
* Say for Speech Dispatcher: (spd-say).
                                Say.
* Speech Dispatcher: (speech-dispatcher).
                                Speech Dispatcher.

Texinfo documentation system
* info stand-alone: (info-stnd).
                                Read Info documents without Emacs.

Text creation and manipulation
* Diffutils: (diffutils).       Comparing and merging files.
* grep: (grep).                 Print lines that match patterns.
* sed: (sed).                   Stream EDitor.  

```


## info bash
```bash
Total manual
```
