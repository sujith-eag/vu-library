---
title: "Linux OS - 01 - Linux Kernel"
description: ""
summary: ""
date: 2024-12-31T07:31:18+05:30
lastmod: 2024-12-31T07:31:18+05:30
draft: false
weight: 950
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




An **Operating System (OS)** is a collection of programs that work together as a whole to support the user’s interaction with the computer by managing hardware resources and running processes. 

Operating systems typically comprise many different programs, with the heart of the OS being a single program called the **kernel**.

- The **kernel** is loaded into memory when the computer boots and remains resident in memory until the system shuts down. 
- Its role is to handle process and resource management, among other tasks. 
- The kernel may call upon other OS components to complete certain tasks, which are loaded and run as needed.
- Users may also call upon some of these OS components, which are also loaded and run as needed.

---

### The Operating System Kernel

The **kernel** is responsible for most of the important tasks of the OS. There are three primary types of kernels:

1. **Monolithic Kernel**
2. **Microkernel**
3. **Hybrid Kernel**

---

#### Monolithic Kernel

A **monolithic kernel** is a single program that operates solely within the computer’s privileged mode and its own memory(address) space. 

- Communication between the user space (running applications) and the kernel space is done via **system calls**.
- A **system call** invokes a specific portion of the OS kernel. Upon receiving a system call, the kernel switches from user mode to privileged mode.
- The kernel ensures that the user’s request is legitimate and that the appropriate access level is granted for the request to be carried.

- **Early Operating Systems** used a monolithic kernel, which was small due to limited memory and fewer system resources. As computing capabilities grew, operating systems became more complex, and so did their kernels.

---

#### Microkernel

In a **microkernel**:
- The kernel is smaller and simpler than the monolithic type.
- Communication is similar to the monolithic kernel, but the kernel relies on **servers** to handle various tasks.
- System calls occur between the kernel and servers, as well as between application software and servers.

Among the server components are: 
**File system servers**, **Network servers**, **Display servers**,  **User interface servers**, **Device driver communication servers**

The kernel retains responsibility for:
**Process scheduling**, **Memory management** (including virtual memory), **Interprocess communication** between OS components.

---

#### Hybrid Kernel

The **hybrid kernel** is a compromise between monolithic and microkernels. 
The kernel is kept small, but additional server-like components are added:
- Server components run in kernel mode but typically in the user’s address space.
- This allows processes to call upon the servers more easily than in the microkernel approach, bypassing some time-consuming system calls.

---


### Linux Kernel:

- **Modular Monolithic Kernel**: Monolithic kernels can be broken into modules, which are loaded as needed. This modular approach allows Linux to remain lightweight based on the modules loaded.
- **Linux and System Calls**: In Linux, a system call isn’t directly intercepted by the kernel. Instead, it’s handled by a **wrapper function**, which places the arguments of the function call into appropriate hardware registers before the kernel switches from user mode to privileged mode.
- **Portability**: Linux is a portable OS. It is not written for any specific hardware but can run on various platforms.

___

### Why Linux?

**Advantages:**
- **Free**: Linux is available at no cost.
- **Open-source**: The code is open, allowing users to enhance and modify it.
- **More control over the OS**: Provides greater administrative control for system management.
- **Educational value**: Helps users learn more about computers and operating systems.
- **Community-driven**: Quick fixes for major issues from the community.
- **Portable**: Can be used on various hardware platforms.

**Disadvantages:**
- **No commercial support**: Organizations might face challenges without guaranteed support.
- **Lagging behind on features and security**: Sometimes updates and fixes may be slower compared to proprietary systems.

UNIX systems have the same system calls which are described in the POSIX specification.

___

#### Features of UNIX

Multiuser System:    
Multitasking Sytem:    
Building block Approach : Hundreds of command which perform one simple job. Commands can be connected with pipe to manipulate data which are called as filters.    
It is through Pipes UNIX implements the "small is beautiful" philosophy.
UNIX tools are designed with a requirement that the output of one tool be used as input to another. That's why the architecture of UNIX had to make commands that throw out excessive verbiage and clutter the output - which is the reason why UNIX Programs are not interactive.     
If the output of `ls` contained headers or prompted users for a specific information, this output couldn't have been used as useful input to any other commands.

By interconnecting various tools, there can be a large combination of usages.



---

### Roles of OS Kernel

| **Role**                | **Meaning**                                                                 | **Example**                                  |
|-------------------------|-----------------------------------------------------------------------------|----------------------------------------------|
| **Auditing and Accounting** | Keep track of users logged in and resources allocated; log events.           | Auditing and logging programs.               |
| **Device Management**   | Ability to add, remove, and interface with peripheral devices.              | Mounting disk drives, adding devices via USB.|
| **File Management**     | Ability to manage files and directories: open, close, create, save, rename, and copy. | File operations like opening, creating, renaming files. |
| **Interprocess Communication** | Sharing information between running processes.                              | Signals and message-passing between processes.|
| **Interrupt Handling**  | Handling device interrupts and running situations.                          | Timer interrupts, I/O interrupts, interprocess interrupts. |
| **Memory Management**   | Allocation and deallocation of memory; protecting memory areas.             | Virtual memory, demand paging, memory compaction. |
| **Process Management**  | Starting new processes, monitoring running processes, and handling errors. | Multitasking, process scheduling, thread management. |
| **Protection**          | Ensuring processes can only access their own memory.                       | User account management, user mode vs privileged mode. |
| **Resource Management** | Granting access to resources while maintaining mutually exclusive access.   | Synchronization mechanisms, deadlock handling. |
| **Scheduling**          | Determining the order of process execution.                                | Priority scheduling, round-robin scheduling. |
| **Security**            | Extending protection across the network.                                   | Encryption, access control. |
| **User Interface**      | Providing an interface for users to interact with the OS, applications, and hardware. | GUI, CLI, menu-driven interfaces. |
