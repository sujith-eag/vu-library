---
title: "Linux OS - 03 System Resources"
description: ""
summary: ""
date: 2024-12-31T07:32:00+05:30
lastmod: 2024-12-31T07:32:00+05:30
draft: false
weight: 952
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


All processes use system resources.
At minimum, every process has a PCB stores in the operating system's portion of memory and some amount of memory space allocated to it.
plus a place in queue and access to CPU.

Other resources may request are access to I/O, storage and communication devices, inter process communications with other processes through domain sockets, names pipes, remote procedure calls.


### Memory and Virtual Memory

The OS maintains tables of process memory space in the the form of `memory maps`.

As user processes are given their own memory space, the computer must ensure that one process does not try to access memory allocated to another process.

DRAM is limited in size and the processes that needs to be done will not wholly fit in main memory as large number of programs are running.
The main memory is extended with reserved data on the hard disk (SSD) called `swap space`.

Portions of our running programs reside in swap space rather than memory so that we can accommodate both a number of processes and large processes at one time.

We refer to this extension of memory as `virtual memeory`


The typical strategy to implement virtual memory in OS is to divide the programs into fixed size units called `pages` and memory into fixed size units called `frames`.
One page fits precisely into one frame.
The program's pages are loaded when needed (on demand) by the OS.

`page table` is the data structure which contains the info about which process pages are in which frames of memory. also which pages are stored in memory.
each process has its own page table, and all page tables are stored in OS's reserved portion of memory.

When a process is running, the CPU generated address are `virtual address` which are not in memory but are locations of where to find the item within the program.
The physical location of that item in memory is called `physical address`

We need a process to translate the `virtual address` to a `physical address`. This mapping is handled by exchanging the address `page` number for the `frame` number containing that page stored in DRAM in various frames.

`page fault` for accessing page that is not in memory.
Interrupt to let OS handle the page fault, obtaining the needed page from swap space and moving it into memory.

`page swapping` moving the pages in and out of memory(frames)

`replacement strategy` to select  a page to discard from memory.
removing the the one that wont be used again using prediction based on `least recently used` (LRU), or other approximation algorithms are used.
Or the unmodified page, as modified page has to be moved to swap space before being removed.



### Linux commands to Inspect System Resources

`Sytem monitor` `top` `ps` were used to explore process usage.

`iostat` and `mpstat` might not come pre installed on Linux (its there)

If not installed, then can be got by `-get install sysstat` when in `sudo`

#### `mpstat`
is used to display multiprocessor statistics.
It gives a snapshot of processor load.

```bash {frame="none"}
sujith@sujith-Latitude-7490:~$ mpstat
Linux 6.8.0-51-generic (sujith-Latitude-7490) 	12/27/2024 	_x86_64_	(8 CPU)

07:58:15 PM  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle
07:58:15 PM  all    1.62    0.01    0.54    0.03    0.00    0.01    0.00    0.00    0.00   97.79
```

#### `iostat`
reports on both process and I/O statistics.
Without options it outputs almost same info as `mpstat`
It can also output various device several statistics.

Two other instructions of use are to view memory and virtual memory usage are `free` and `vmstat`.
`free` gives report on total amount of memory and swap space, amount currently using and amount free.
`vmstat` provides average since last boot of virtual memory and CPU usage and process.


#### `pmap`
allows us to explore the memory map of a specified process. (needs PID)



