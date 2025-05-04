---
title: "Linux OS - 02 - Forms of Process Management"
description: ""
summary: ""
date: 2024-12-31T07:31:43+05:30
lastmod: 2024-12-31T07:31:43+05:30
draft: false
weight: 951
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Two simplest entities support the UNIX System - *file* and *process*.     
A File is just an array of bytes that can virtually contain anything. It is also related to other files by being part of a single hierarchical structure. File is located with reference to a predetermined place.

Process is the name given to a file when it is executed as a program.    
Process is simply the "time image" of an executable file. It also belongs to a separate hierarchical structure with parents, children and grandchildren.


___

Program is a static entity.     
A process is a running program, it has a `state` which changes over time.
The programs are identical but the processes all differ because each will have its own unique state. 

A process is described in many ways,     
Is it currently being run by the CPU or waiting?      
if waiting, where?      
What are the values of its variables? where in memory is it stored?      
If in memory, what resources does it have assigned to it?     
The answers to these questions are just some of the ways we describe a process.      

Whenever a process runs, Linux kernel keeps track of it through process ID (PID).       
The first process the kernel starts after it is loaded is `systemd`.      
`systemd` is responsible for for starting the run-time environment and then monitering the environment.      
`systemd` is given PID of 1, each new process gets the next available PID.

In Linux, a process can only be created by another process (except `systemd`).

Creating process is referred to as `parent` and created process is `child` where parent process spawns the child process.     
Spawning of a process utilizes the system call of the parent process to the Linux kernel.

____


***Several forms of child process creation system calls. ***      
* `fork()`  Creates a duplicate process of the parent but with its own PID, own memory and its own resources. Parent and child an run concurrently.

* `vfork()` Same as `fork` except parent is temporarily suspended and child might be permitted to use the parent's memory space.

* `clone()` Like `fork` except there is more control over the child process produced with respect to what is duplicated and what is shared between parent and child.

* `exec()` take an existing process and replace its image (executable code) with new image.

* `wait()` Suspended parent process to wait for an event of a child process.

The current process (parent) invokes one of the system call function like `fork()` `clone()`. There are several different clone systems `clone() clone2() clone3()`         
The difference between `clone fork vfork` is how much will be shared between the parent and the child.

`vfork()` suspends the parent process while the child runs.      
Another option is to create a child with `clone or fork` and then have the parent `wait`

There are several wait systems,      
with `wait()` the parent is suspended till one child terminates.       
with `waitid()`  `waitpid()` the parent suspends until the child with the specified PID terminates.       
These can be modified to make the parent resume under different circumstances also. This makes `wait()` more flexible than `vfork()`


`exec()` 
`fork, clone, vfork` create a child that has the same executable code as the parent.
(calling `wc` from `bash`, the child created by `fork` is still `bash`, here `exec` replaces the child code with `wc`)
`exec` replaces the parents code with the child with the image of the program the child should be. 

There are several versions of `exec()` known as `exec` family of system calls.
`execl()` `execle()` `execlp()` `execv()` `execve()` and `execvp()`.
The difference between them is the parameters passed to them.


It is common to pair up `fork()` and `exec()`

______


CPU stores information about the running process via its registers. These register values changes as the process executes.
The program counter (PC) stores the address of the next instruction to fetch from memory.
The Instruction register (IR) stores the current instruction.
status flag (SF) register
stack pointer (SP)

 The Operating system must keep track of the process's state and does so through a data structure  called the `process control block` (PCB).
 PCB collects the most important data about the running process.

***Process Control Block Information***

* Process State : Run-time state of the process; usually one of `new, ready, running, suspended, terminating, waiting`
* Process ID : Usually a numeric designer to differentiate the process from others.
* Other process data : Parent process, process owner, priority, scheduling information, accounting data such as CPU time elapsed.
* Process Location : Which queue the process resides in (ready, wait, job)
* Process privilege/state : What mode the process runs in (user, Privileged, some other)
* Hardware-stored values : PC, IR, SF, SP (possibly data register values) and interrupt masks.
* Resource allocation : I/O devices currently allocated to the process; memory in use; page table.

The operating system is also in charge of scheduling when process run, and of changing the process status as needed doing `process management`.


### Single process execution

OS starts a process and the CPU attention is entirely held by that one running process until it terminates or requests some operation from OS.

Batch processing, scheduling programs, process requests (jobs)

During batch processing era, different scheduling algorithms were developed.
Simplest and fairest is `first come first serve` `FCFS` or `First in first out` `FIFO`

Ordering jobs statistically from shortest to longest is known as `shortest-job first`
opposite would be `longest-job first`
A `priority` schedule may be used with `FIFO`.
A series of queues are used to order the process by priority


### Concurrent Processing

It is to switch from a waiting process to a process ready to execute leading to improved form of process management called `multiprogramming`.
CPU executes single process but if that process needs to perform time-consuming I/O then that process is set aside and another process is executed.

There will be atleast two queues, ready queue and wait queue. There might be multiple I/O wait queues. It is the OS job (scheduler) to choose which process the CPU should switch to.
This is `cocurrent processing`, multiprogramming is one of concurrent processing.

The changing of CPU from one process to another is called `context switch` where OS gets involved.
`coopeartive multitasking`, `rendezvous`

The next evolution of process management is to `force a context switch` so that no single process can monopolize the CPU.
A hardware called `timer` which counts cock cycles.
It is initialized to some value, gets decremented and when it reaches 0, the timer alerts the OS to perform a context switch.
The running process is moved to the `ready queue` and the CPU resumes the process next in line in the ready queue.

This becomes `preemptive multitasking` which is multitasking or previously known as `time sharing`

`round robin sheduling`  `time slice` `quanta` 

Setting 1000 * (process priority)
Priority 1 gets 1000 each time while priority 10 gets 10,000 each time to finish faster.

They can be made to age process to lessen the priority over time.

Threads?? New concepts 
`multithreading`

___

Linux by default uses cooperative and preemptive multitasking and multi-threading.
It can also perform batch processing on request using `batch` instruction.

___


### Interrupt Handling

CPU repeatedly fetches and runs program instructions (fetch-execute cycle) until it finishes executing the current process.
The timer reaching 0 is an example where some hardware component needs the CPU's attention, where it can interrupt the CPU's fetch-execute cycle and request the CPU focus its attention on hardware component to handle whatever situation arose.
Naturally, interrupting the CPU is called `interrupt`,
and process of requesting an interrupt is an `interrupt request` (IRQ)

`IRQ` might originate from hardware or software.
Hardware through reserved line on the bus to CPU
for software `IRQ` is submitted as an interrupt signal.

Upon receiving an interrupt request, the CPU finishes the current fetch-execute cycle.
CPU determines which device or software raised the interrupt.
CPU acknowledges the IRQ to the interrupting device.
To handle interrupt, CPU switches from `user porocess` to `operating system` which is privileged.

For every type of interrupt, the OS contains an interrupt handler.
It is a piece of code written to handle a specific type of interrupting situation.
CPU performs a `context switch` from current process to proper `interrpt handler`, 
requiring that CPU saves what it was doing with respect to the user process.

The interrupt handler executes and upon completion, the OS switches back to the process that had been running (or new process if the interrupt was from the timer reaching 0), also changing mode back to `user mode`.

IRQ's are prioritized, if the CPU is currently handling an IRQ and higher priority IRQ arrives, the CPU will postpone the lower IRQ for newer one.

___

In Linux, interrupt handlers are part of Kernel.
The information about the interrupt is recorded in `/proc/interrupts`

The file `/proc/stat` also contains interrupt information.






___

## Process Monitering


### Ownership of running processes

### Launching a process from command line

`control + c`
`control + z` 


### Monitoring Process

To see what the a process is doing.

### GUI Monitoring Tools
System Monitor
`gnome-system-monitor` command to launch from CLI

There are two versions, one for Gnome and another for KDE.


### Command line monitoring tools

`top` `ps`

#### `top`
`top` program when launched outputs and remains running. It is an interactive program that updates its output in specified refresh rate (default 3 sec).
This can be altered using `-d s.t`  s is seconds and t is tenth of second
`-d 1` update every second 
`-d 0.5` `-d 0.0001`

```bash {frame="none"}
sujith@sujith-Latitude-7490:~$ top -d 5

top - 18:37:00 up  2:35,  1 user,  load average: 0.15, 0.25, 0.25
Tasks: 251 total,   1 running, 250 sleeping,   0 stopped,   0 zombie
%Cpu(s):  1.0 us,  0.9 sy,  0.0 ni, 98.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st 
MiB Mem :   7818.0 total,   5118.5 free,   1647.7 used,   1641.4 buff/cache     
MiB Swap:   4096.0 total,   4096.0 free,      0.0 used.   6170.4 avail Mem 

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND  
   1559 sujith    20   0 4872356 281168 127100 S   7.8   3.5   3:29.14 gnome-s+ 
   3386 sujith    20   0  554448  52336  41552 S   3.0   0.7   0:03.12 gnome-t+ 
    234 root     -51   0       0      0      0 S   1.8   0.0   0:02.40 irq/51-+ 
   2431 sujith    20   0 1159.6g 269780 129124 S   0.6   3.4  14:18.19 obsidian 
   4964 sujith    20   0   14536   5760   3584 R   0.6   0.1   0:00.25 top      
    760 systemd+  20   0   21584  12544  10368 S   0.4   0.2   0:05.00 systemd+ 
   1749 sujith    20   0  388872  11756   6784 S   0.4   0.1   0:00.85 ibus-da+ 
   2412 sujith    20   0   32.6g 133844  97160 S   0.4   1.7   4:00.22 obsidian 
   2750 root      20   0       0      0      0 I   0.4   0.0   0:05.31 kworker+ 
   2921 root      20   0       0      0      0 I   0.4   0.0   0:02.67 kworker+ 
     17 root      20   0       0      0      0 I   0.2   0.0   0:01.45 rcu_pre+ 
     79 root     -51   0       0      0      0 S   0.2   0.0   0:21.71 irq/9-a+ 
    114 root       0 -20       0      0      0 I   0.2   0.0   0:07.62 kworker+ 
    184 root       0 -20       0      0      0 I   0.2   0.0   0:00.18 kworker+ 
    761 systemd+  20   0   91044   7680   6784 S   0.2   0.1   0:04.19 systemd+ 
   2074 sujith    20   0  236772   7040   6528 S   0.2   0.1   0:00.15 ibus-en+ 
   2263 sujith    20   0 1156.1g 160496 124608 S   0.2   2.0   2:12.02 obsidian 
```

`-H` to show threads
`-i` to show idle process 
`-u username` to show process started by that username
`-n #` where hash is integer to indicate the number of refreshes that top should perform before terminating. `top -n 10`

***Keystroke commands for `top`***
A - to use alternative display mode
d - to change the interval time
i - Turn on off including idle processes
`f, o` - to add remove or alter display order
`l` - to on off load statistics
t - to on off task statistics
m - to on off memory statistics
H - Show threads
U - show specified user owned processes only
n - show only specified number of processes

q - quit


#### `ps`
`ps` command provides a detailed examination of the running process as a snapshot and is not interactive. Displays and exits.
Without any options, the only process displayed is `bash`

Lots of options to get what is needed but complex
___


Orphans, adoption from `systemd`
zombies, sleeping parent, killing




