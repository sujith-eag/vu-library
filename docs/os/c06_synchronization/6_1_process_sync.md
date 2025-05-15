---
title: "OS 6.01 - Process Synchronization"
description: ""
summary: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
weight: 2030
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


**Process synchronization** refers to various mechanisms used to ensure the orderly execution of cooperating processes that share a **logical address space**, ensuring **data consistency** is maintained.

### 6.1 Background

- **Concurrent vs. Parallel Execution:**
  - **Concurrent execution** occurs when processes share CPU time and are executed in overlapping time periods. While a process may not be executing at every moment, it appears to be progressing due to rapid switching between processes by the **CPU scheduler**.
  - **Parallel execution**, on the other hand, involves two or more processes executing **simultaneously** on **separate processing cores**.

- **Context of Process Execution:**
  - When processes execute concurrently or in parallel, one process may only **partially complete execution** before another process is scheduled.
  - In **concurrent execution**, a process can be interrupted at any point in its instruction stream, and another process might begin execution immediately, potentially causing issues when both processes manipulate shared data.
  - **Parallel execution** involves multiple processes running at the same time on different processors or cores, which may lead to similar data integrity issues when accessing shared data.

### Problems Arising from Concurrent Execution

- **Race Condition:**
  - A **race condition** occurs when multiple processes or threads concurrently access and manipulate shared data, and the outcome depends on the order or timing of the execution of these processes.
  - For example, if two processes simultaneously attempt to increment a shared counter variable, the outcome can vary based on the order in which the increments occur, leading to **inconsistent or incorrect results**.

  **Example:**
  - Consider two processes, **P1** and **P2**, both incrementing the shared variable `counter`:
    - **P1** reads the value of `counter`.
    - **P2** also reads the same value of `counter` before **P1** has a chance to update it.
    - **P1** increments the counter and writes back the value.
    - **P2** increments the old value and writes it back, overwriting **P1's** update.
  
  This results in **lost updates** or **incorrect values**, which is a classic race condition.

### Importance of Process Synchronization

- **Guarding Against Race Conditions:**
  - To prevent issues like race conditions, it is necessary to ensure that only one process can manipulate shared data at a time. **Process synchronization** mechanisms are required to control access to shared resources.
  
- **Goal:**
  - Synchronization guarantees that processes are executed in such a way that shared data is protected from conflicting updates, ensuring **correctness** and **data consistency**.

### The Impact of Multicore Systems

- **Multithreading and Data Sharing:**
  - The rise of **multicore systems** has led to an increase in **multithreaded applications**, where multiple threads run in parallel on different processing cores.
  - **Shared Data**: In multithreaded programs, multiple threads may access and modify the same shared data, further emphasizing the need for synchronization.
  - **Potential for Conflict**: Without synchronization, concurrent updates to shared data could result in race conditions, even in parallel execution environments.
  
- **Challenges:**
  - Synchronizing processes across multiple cores can be more complex due to the simultaneous execution of threads.
  - Effective synchronization ensures that updates from threads running on different cores do not interfere with each other and guarantees **data integrity**.

___

