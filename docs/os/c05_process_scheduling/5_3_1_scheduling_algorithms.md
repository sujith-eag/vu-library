---
title: "OS 5.03 - Scheduling Algorithms"
description: ""
summary: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
weight: 2022
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



CPU scheduling deals with the problem of deciding which of the processes in the ready queue is to be allocated the CPU. There are many different CPU-scheduling algorithms.

### 5.3.1 First-Come, First-Served Scheduling (FCFS)

The **First-Come, First-Served (FCFS)** scheduling algorithm allocates the CPU to processes in the order they request it, using a **FIFO queue**. The process at the head of the queue is given the CPU, and once it completes, it is removed.

The **average waiting time** varies significantly with process order.

**Example**:   For processes with burst times:
- **P1**: 24ms  
- **P2**: 3ms  
- **P3**: 3ms  

If they arrive in the order **P1 → P2 → P3**, the **Gantt chart** would be:

```
| P1 | P2 | P3 |
0    24    27   30
```

- **Waiting time**:  
  - **P1**: 0ms  
  - **P2**: 24ms  
  - **P3**: 27ms  
- **Average waiting time** = (0 + 24 + 27) / 3 = **17ms**

If the arrival order is changed to **P2 → P3 → P1**, the **Gantt chart** is:

```
| P2 | P3 | P1 |
0    3     6    30
```

- **Average waiting time** = (6 + 0 + 3) / 3 = **3ms**

---

### Drawbacks of FCFS

1. **Monopolization of CPU**:  
   - The **CPU-bound process** consumes the CPU, while **I/O-bound processes** finish their I/O and enter the ready queue.
   - During this time, **I/O devices** remain idle, which is inefficient.

2. **Transition and Idle CPU**:  
   - Once the CPU-bound process completes its CPU burst, it moves to the I/O queue.
   - The **I/O-bound processes**, with shorter CPU bursts, execute quickly and return to the I/O queue, causing the CPU to remain idle.

3. **Convoy Effect**:  
   - When a CPU-bound process is allocated the CPU, causing **I/O-bound processes** to wait. This convoy effect results in a situation where short processes are delayed by the long CPU-bound process, leading to inefficient CPU and device utilization.


**Non-preemptive Scheduling**:  
- Once a process is allocated the CPU, it keeps it until it either terminates or requests I/O. This behavior is **problematic in time-sharing systems**, where it’s crucial for each process to get regular CPU time.


---

