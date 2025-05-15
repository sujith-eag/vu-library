---
title: "OS 5.03.03 - Priority Scheduling"
description: ""
summary: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
weight: 2025
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



The **Priority Scheduling** algorithm assigns a priority to each process, and the CPU is allocated to the process with the highest priority. If two processes have the same priority, **First-Come, First-Served (FCFS)** scheduling is used to break the tie. 

- **SJF (Shortest Job First)** is a special case of the priority scheduling algorithm, where the priority is the inverse of the predicted next CPU burst. This means that the process with the shortest burst time has the highest priority.

#### Priority Types:
1. **Internally Defined Priorities**: These are calculated based on measurable factors such as:
   - Time limits
   - Memory requirements
   - Number of open files
   - The ratio of average I/O burst to average CPU burst

2. **Externally Defined Priorities**: These are set by external factors such as:
   - The importance of the process
   - Funds being paid for computer use
   - The sponsoring department or other external criteria (sometimes political)

#### Preemptive vs Nonpreemptive Priority Scheduling:

- **Preemptive Priority Scheduling**: If a new process arrives in the ready queue with a higher priority than the currently running process, it will preempt the CPU and start execution immediately.
  
- **Nonpreemptive Priority Scheduling**: If a new process arrives with a higher priority than the currently running process, the new process is placed at the head of the ready queue. The CPU is not preempted; instead, the currently running process continues until it completes or blocks, and then the new process is scheduled.

#### Major Issues:

**Indefinite Blocking (Starvation)**: Low-priority processes may never get a chance to run because higher-priority processes always take precedence.
   
**Aging** is used to address starvation. Aging involves gradually increasing the priority of processes that have been waiting in the system for a long time. Over time, even low-priority processes will eventually have high enough priority to be executed.

____
