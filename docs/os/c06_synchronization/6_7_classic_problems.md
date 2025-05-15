---
title: "OS 6.07 - Classic Problems"
description: ""
summary: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
weight: 2034
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Synchronization problems as examples of a large class of concurrency-control problems. These problems are used for testing nearly every newly proposed synchronization scheme.

---

### 6.7.2 Reader-Writers Problem

The **Reader-Writers problem** is a classic synchronization issue that arises when multiple processes share access to a database. Some processes may need only read access (readers), while others require both read and write access (writers). 

- **Reading:** If two readers access the shared database simultaneously, no conflicts occur.
- **Writing:** If a writer and any other process (whether a reader or another writer) attempt to access the database at the same time, conflicts and inconsistencies may arise. To prevent this, writers must have **exclusive access** to the database when writing.

The goal of the Reader-Writers problem is to manage access to the shared resource (the database) in a way that ensures no conflicts occur, while also balancing fairness between readers and writers.

---

#### Variants of the Reader-Writers Problem

1. **First Readers-Writers Problem:**
   - **Requirement:** No reader should be kept waiting for access unless a writer has already been granted permission to access the database.
   - **Goal:** Ensure that readers can access the database concurrently without having to wait for other readers, even if a writer is waiting.
   
2. **Second Readers-Writers Problem:**
   - **Requirement:** Once a writer is ready, the writer should be able to access the database as soon as possible.
   - **Goal:** If a writer is waiting, no new readers should begin reading until the writer has finished.

Both problems have the potential for **starvation**:
- In the first case, **writers may starve** if readers continue to gain access.
- In the second case, **readers may starve** if writers continuously prevent new readers from starting.

---

### Solution to the First Readers-Writers Problem

The solution to the first readers-writers problem involves the following key data structures shared by reader and writer processes:

```c
semaphore rw_mutex = 1;    // Mutex for writer
semaphore mutex = 1;       // Mutex for readers
int read_count = 0;        // Tracks number of readers currently accessing the database
```

- `rw_mutex` and `mutex` are initialized to 1.
- `read_count` is initialized to 0 to track the number of active readers.

A writer process follows this structure:

```c
do {
    wait(rw_mutex);      // Acquire exclusive access for writing
    // Writing is performed
    signal(rw_mutex);    // Release exclusive access
} while (true);
```

- `rw_mutex` ensures that only one writer can access the database at a time.

A reader process follows this structure:

```c
do {
    wait(mutex);         // Ensure mutual exclusion when updating read_count
    read_count++;        // Increment number of active readers
    if (read_count == 1)
        wait(rw_mutex);  // First reader locks the writer mutex
    signal(mutex);       // Release mutex after updating read_count
    
    // Reading is performed
    
    wait(mutex);         // Ensure mutual exclusion when updating read_count
    read_count--;        // Decrement number of active readers
    if (read_count == 0)
        signal(rw_mutex); // Last reader unlocks the writer mutex
    signal(mutex);       // Release mutex after updating read_count
} while (true);
```

- `mutex` ensures mutual exclusion when modifying `read_count`.
- `rw_mutex` ensures exclusive access for writers. It is locked by the first reader and unlocked by the last reader.
  
- **Key Points:**
  - If a writer is in the critical section and there are `n` readers waiting, then 1 reader waits on `rw_mutex`, and the remaining `n-1` readers wait on `mutex`.
  - When `signal(rw_mutex)` is executed, the scheduler decides whether to resume a waiting reader or a waiting writer.

---

### Reader-Writer Locks

The Reader-Writers problem and its solutions have been extended into **reader-writer locks**, which are implemented in some systems to simplify synchronization. A **reader-writer lock** can be acquired in one of two modes:
1. **Read Mode:** For processes that only need to read shared data.
2. **Write Mode:** For processes that need to both read and write shared data.

- Multiple processes can acquire the lock in **read mode** concurrently.
- Only one process can acquire the lock in **write mode** at a time, ensuring exclusive access to the shared data.

Reader-writer locks are most useful in situations where:

1. **Processes can be clearly identified as readers or writers**, making it easy to distinguish between those that only need to read data and those that need to modify the data.
2. **There are more readers than writers**, as allowing multiple readers to access the data concurrently significantly improves performance. While the overhead of establishing a reader-writer lock is higher than using semaphores or mutual-exclusion locks, the increased concurrency of multiple readers justifies the overhead.


---

### 6.7.3 Dining-Philosophers Problem

Consider five philosophers who spend their lives thinking and eating. These philosophers share a circular table with five chairs, each belonging to one philosopher. In the center of the table is a bowl of rice, and five chopsticks are laid out for use.

#### Problem Setup:
- When a philosopher is thinking, she does not interact with her neighbors.
- From time to time, a philosopher gets hungry and tries to pick up the two chopsticks closest to her: one between her and the philosopher on her left, and the other between her and the philosopher on her right.
- A philosopher can only pick up one chopstick at a time. She cannot pick up a chopstick that is already in use by a neighboring philosopher.
- Once a philosopher has both chopsticks, she eats and does not release them until she is done.
- After eating, the philosopher puts down both chopsticks and returns to thinking.

This scenario is a simple model for the problem of allocating resources (chopsticks) among competing processes (philosophers) in a **deadlock-free** and **starvation-free** manner.

---

### Solution Using Semaphores

One straightforward solution involves representing each chopstick with a semaphore. The philosopher attempts to grab a chopstick by executing a `wait()` operation on the corresponding semaphore. When finished eating, she releases the chopsticks by executing the `signal()` operation on the respective semaphores.

#### Shared Data:
```c
semaphore chopstick[5];   // Array of semaphores for chopsticks
```
- All elements of `chopstick` are initialized to 1, representing that each chopstick is available.

#### Philosopher Process:
```c
do {
    wait(chopstick[i]);        // Pick up left chopstick
    wait(chopstick[(i+1) % 5]); // Pick up right chopstick

    /* Eat for a while */
    
    signal(chopstick[i]);        // Put down left chopstick
    signal(chopstick[(i+1) % 5]); // Put down right chopstick

    /* Think for a while */
} while (true);
```

- Each philosopher executes this loop, trying to pick up chopsticks, eat, and then think.

---

### Problems with the Simple Solution

Although this solution ensures that no two neighboring philosophers eat at the same time, it has the potential to lead to **deadlock**. 

#### Deadlock Scenario:
- Suppose all five philosophers become hungry at the same time.
- Each philosopher picks up her left chopstick (the one between her and her left neighbor).
- Now, all chopsticks are in use (value = 0), and when each philosopher tries to pick up her right chopstick, she will be blocked, waiting forever. This leads to a deadlock where no philosopher can proceed.

---

### Possible Remedies for Deadlock

Several solutions can be applied to avoid the deadlock problem:

1. **Limit the number of philosophers**: Allow at most four philosophers to sit at the table at any one time. This guarantees that at least one philosopher can always pick up both chopsticks.

2. **Critical Section for Picking Chopsticks**: 
   - Ensure that a philosopher can only pick up both chopsticks if both are available. This means the philosopher must acquire both chopsticks within a critical section to avoid conflicts.

3. **Asymmetric Solution**: 
   - Introduce an asymmetric rule to the philosophers:
     - **Odd-numbered philosophers** pick up their left chopstick first, then their right chopstick.
     - **Even-numbered philosophers** pick up their right chopstick first, then their left chopstick.
   - This solution prevents the circular wait condition and reduces the likelihood of deadlock.

---
