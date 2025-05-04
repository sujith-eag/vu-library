---
title: "OS 3.01 - Process Concept"
description: ""
summary: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
weight: 2016
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




Contemporary computer systems allow multiple programs to be loaded into memory and executed concurrently. This requires tighter control and better compartmentalization of various programs. These needs led to the concept of a **process**, which is a program in execution.

- A **process** is a unit of work in a modern time-sharing system.
- In a **batch system**, jobs are executed.
- In a **time-sharing system**, there are user programs or tasks, which might involve running multiple programs for a single user. The operating system (OS) must also support its internal activities.

All of these activities are referred to as **processes**. 

The terms **job** and **process** can often be used interchangeably.

---

### **3.1.1 The Process**

A process consists of more than just the program code (referred to as the **text section**). It also includes several other components:

- **Program Counter:** Represents the current activity.
- **Processor Registers:** Contain the contents representing the state of the processor.
- **Process Stack:** Stores temporary data such as:
  - Function parameters
  - Return addresses
  - Local variables
- **Data Section:** Contains global variables.

Additionally, a process may have a **heap**, which is dynamically allocated memory during runtime.

#### **Structure of a Process in Memory:**

{{< figure  src="images/os/3_01_Process_Memory.jpg"  alt="3.01 A Process in Memory"  caption="3.01 A Process in Memory" >}}

---

### **Program vs. Process**

- A **program** is not a process; it is a passive entity. It can be a file containing a list of instructions (e.g., an executable file) along with associated resources.
  
- A **program becomes a process** when it is loaded into memory.

Although multiple processes may be associated with the same program, each process is considered a separate execution sequence. For example:
- Several users running different copies of the same program, or
- A single user using multiple instances of a program like a web browser.

Each of these is a separate **process**, although their text sections (program code) are identical. The **data**, **heap**, and **stack** sections will differ.

---

### **Executable Environment for Code**

- A process can act as an **executable environment** for other code. For example, in the **Java** programming environment, Java code is executed within the **Java Virtual Machine (JVM)**.
  - The **JVM** itself is a process that:
    - Interprets the loaded Java code.
    - Executes actions on behalf of the Java code via native machine instructions.


___

### **3.1.2 Process State**

As a process executes, it transitions through various **states** based on its current activity. The process can be in one of the following states:

- **New:** The process is being created.
- **Running:** Instructions are being executed.
- **Waiting:** The process is waiting for some event to occur (e.g., I/O completion, reception of a signal).
- **Ready:** The process is waiting to be assigned to a processor.
- **Terminated:** The process has finished execution.

**Note:**  
- Only one process can be **running** on a processor at any given moment.  
- Many processes may be **ready** or **waiting** at the same time.

{{< figure  src="images/os/3_02_ProcessState.jpg"  alt="3.02 States Of Process"  caption="3.02 States Of Process" >}}


---

### **3.1.3 Process Control Block (PCB)**

Each process in an operating system is represented by a **Process Control Block (PCB)**, also known as a **Task Control Block**. The PCB contains various pieces of information associated with a specific process:

- **Process State:** The current state of the process (e.g., Running, Waiting, Ready).
- **Program Counter:** Indicates the address of the next instruction to be executed for the process.
- **CPU Registers:** Varies in number and type depending on the architecture (e.g., accumulators, index registers, stack pointers, general-purpose registers).
- **CPU Scheduling Information:** Includes process priority, pointers to scheduling queues, and any other scheduling parameters.
- **Memory Management Information:** Includes values of base and limit registers, page tables, or segment tables, depending on the memory system.
- **Accounting Information:** Contains CPU and real time usage, time limits, account numbers, job or process numbers, and other metrics.
- **I/O Status Information:** Lists all I/O devices allocated to the process, open files, and other I/O-related data.


{{< figure  src="images/os/3_03_PCB.jpg"  alt="3.03 Process Control Block"  caption="3.03 Process Control Block" >}}


When an interrupt occurs, the program counter and state information must be saved to ensure the process can continue correctly afterward.



{{< figure  src="images/os/3_04_ProcessSwitch.jpg"  alt="3.04 Process Switching"  caption="3.04 Process Switching" >}}

---

### **3.1.4 Threads**

Modern operating systems have extended the concept of a process to allow **multiple threads** of execution. This enables the process to perform more than one task simultaneously, which is especially beneficial in multi-core systems where multiple threads can run in parallel.

- **Threads** are smaller units of execution within a process, and they share the same resources like memory and I/O devices, but execute independently.

#### **PCB and Threads**

On systems that support threads, the **Process Control Block (PCB)** is expanded to include information for each thread. This allows the OS to manage and schedule threads within a single process efficiently.

---


{{< callout note >}}
**Linux OS and the Task Structure**
In Linux, the **Process Control Block** is represented by the C structure `task_struct`, which is found in the `<linux/sched.h>` header file within the kernel source code.  
 This structure contains all necessary information about a process, including:
 - Process state
 - Scheduling and memory management information
 - List of open files
 - Pointers to the process's parent, children, and siblings
{{< /callout >}}


---
