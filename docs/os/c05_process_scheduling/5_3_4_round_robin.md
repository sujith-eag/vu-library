---
title: "OS 5.03.04 - Round-Robin Scheduling"
description: ""
summary: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
weight: 2026
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



The **Round-Robin (RR)** scheduling algorithm is similar to **FCFS (First-Come, First-Served)** scheduling, with the key difference being **preemption**, which allows the system to switch between processes. Primarily designed for time-sharing systems.

- **Time Quantum (or Time Slice):** A small unit of time (typically between **10 to 100 milliseconds**) that is defined to allocate CPU time to each process.
- **Preemption:** No process is allocated the CPU for more than 1 time quantum in a row (unless it is the only runnable process).

### RR Scheduling Process:

1.  The **Ready Queue** is treated as a **circular queue**.
2. The CPU scheduler goes around the **ready queue**, allocating the CPU to each process for a time interval of **up to 1 time quantum**.
3. The ready queue operates as a **FIFO (First-In-First-Out)** queue:
   - New processes are added to the tail of the queue.
   - The CPU scheduler selects the **first process** from the queue.
4. The CPU scheduler sets a **timer** to interrupt after **1 time quantum** and dispatches the process.
5. **If CPU Burst < 1 Time Quantum:**
   - The process releases the CPU voluntarily.
   - The scheduler moves to the next process in the queue.
6. **If CPU Burst > 1 Time Quantum:**
   - The timer interrupts, causing a **context switch**.
   - The process is preempted and placed back at the **tail of the ready queue**.
   - The scheduler then selects the next process.

___

### Performance and Time Quantum:

- **Impact of Time Quantum Size:**
  - If the time quantum is too large, RR scheduling becomes equivalent to **FCFS** scheduling.
  - If the time quantum is too small (e.g., 1 millisecond), it can result in a large number of **context switches**, leading to inefficiency.

- **Ideal Time Quantum:**
  - The time quantum should be **large relative to the context-switch time**. For example, if the context-switch time is about **10% of the time quantum**, then approximately **10% of the CPU time** will be spent on context switching.
  - A rule of thumb is that **80% of CPU bursts** should be shorter than the time quantum to optimize performance.

### Average Waiting Time:
- The **average waiting time** under RR scheduling is typically **longer** compared to other scheduling algorithms.
- The **average turnaround time** can improve if most processes finish their CPU burst within a single time quantum.

- **Fairness:** If there are **n processes** in the ready queue and the time quantum is **q**, then each process gets **1/n** of the CPU time in chunks of up to **q** time units.
- **Maximum Wait Time:** Each process must wait no longer than **(n - 1) × q** time units until its next time quantum.
Example:
- With 5 processes and a time quantum of **20 milliseconds**, each process will get up to **20 milliseconds** every **100 milliseconds**.


--- 

#### Example 1: Different CPU Burst Times

**Assumptions:**
- 4 processes: **P1**, **P2**, **P3**, **P4**
- Time quantum = **3 milliseconds**
- CPU bursts:
  - P1: 5 ms
  - P2: 2 ms
  - P3: 6 ms
  - P4: 4 ms

**Ready Queue:** P1 → P2 → P3 → P4

#### Step-by-Step Execution:

| Time | Process Running | Event                       | Ready Queue                |
|------|-----------------|-----------------------------|----------------------------|
| 0    | P1              | P1 runs for 3 ms            | P2 → P3 → P4               |
| 3    | P2              | P1 preempted, P2 runs for 2 ms | P3 → P4 → P1               |
| 5    | P3              | P2 finishes, P3 runs for 3 ms | P4 → P1                    |
| 8    | P4              | P3 preempted, P4 runs for 3 ms | P1 → P3                    |
| 11   | P1              | P4 preempted, P1 runs for 2 ms | P3 → P4                    |
| 13   | P3              | P1 finishes, P3 runs for 3 ms | P4 → P1                    |
| 16   | P4              | P3 finishes, P4 runs for 1 ms | P1 → P3                    |
| 17   | P1              | P4 finishes, P1 runs for 3 ms | P3                         |
| 20   | P3              | P1 finishes, P3 finishes     |                            |

Processes are rotated based on the time quantum, and processes that need more CPU time are repeatedly preempted and moved back to the end of the queue until they complete.

---

### Example 2: Time Quantum Too Large (Degenerating to FCFS)

**Assumptions:**
- 3 processes: **P1**, **P2**, **P3**
- Time quantum = **10 milliseconds** (larger than the CPU bursts)

**Ready Queue:** P1 → P2 → P3

#### Step-by-Step Execution:

| Time | Process Running | Event                   | Ready Queue         |
|------|-----------------|-------------------------|---------------------|
| 0    | P1              | P1 runs for 10 ms       | P2 → P3             |
| 10   | P2              | P1 finishes, P2 runs for 10 ms | P3             |
| 20   | P3              | P2 finishes, P3 runs for 10 ms |                    |
| 30   |                 | P3 finishes             |                     |

In this case, the **time quantum is larger** than the CPU bursts of the processes (which could be around 5 ms each). Therefore, each process runs to completion without being preempted, making the Round-Robin algorithm essentially behave like **FCFS** scheduling.


---
