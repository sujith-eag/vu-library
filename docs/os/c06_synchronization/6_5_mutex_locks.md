---
title: "OS 6.05 - Mutex Locks"
description: ""
summary: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
weight: 2032
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Operating system designers use software tools to address the **critical-section problem**, and one of the simplest tools used is the **mutex lock**. 

The term **mutex** is short for **mutual exclusion**, and its purpose is to protect critical regions of code to prevent **race conditions**.

### Purpose of Mutex Locks:
- A **mutex lock** ensures that only one process can access a critical section at a time.
- A process must **acquire** the lock before entering a critical section and must **release** the lock when it exits the critical section.

### Functions:
- **acquire()**: This function is used to acquire the mutex lock before entering the critical section.
- **release()**: This function is used to release the lock once the process exits the critical section.

### Mechanism:
- A mutex lock uses a boolean variable called **available** to track whether the lock is available or not.
  - If **available** is true, the lock is available, and the process can acquire it.
  - If **available** is false, the lock is unavailable, and the process trying to acquire the lock will be blocked until the lock is released.
  
### acquire() Function:
The definition of the `acquire()` function is as follows:

```c
acquire() {
    while (!available)
        ; /* busy wait */
    available = false;
}
```

- The `acquire()` function checks if the lock is available by evaluating the `available` variable.
- If the lock is unavailable (`available == false`), the process enters a **busy wait**, meaning it continuously checks if the lock becomes available.
- Once the lock is available, the process acquires it by setting `available` to **false**, making the lock unavailable for other processes.

### release() Function:
The definition of the `release()` function is as follows:

```c
release() {
    available = true;
}
```

- The `release()` function simply sets `available` to **true**, indicating that the lock is now available for other processes to acquire.

- **Atomicity**: Calls to `acquire()` and `release()` must be **atomic** to avoid race conditions during the process of acquiring and releasing the lock.

#### Example of Mutex Lock Usage:
```c
do {
    acquire();  // Acquire the lock
    critical_section();  // Execute the critical section
    release();  // Release the lock
    remainder_section();  // Execute the remainder section
} while (true);
```


### Disadvantages of Mutex Locks:

1. **Busy Waiting**:
   - The primary drawback of the above mutex lock implementation is **busy waiting**. While a process is in its critical section, any other process trying to enter its critical section must **loop continuously** in the `acquire()` function.
   - This results in inefficient use of CPU resources, especially in a **multiprogramming system**, where a single CPU is shared among many processes. The CPU is occupied by the spinning process instead of being used by other processes.

2. **Spinlock**:
   - A mutex lock with busy waiting is often referred to as a **spinlock** because the process "spins" in a loop while waiting for the lock to become available.
   - This spinning wastes CPU cycles that could be used by other processes.

### Advantages of Spinlocks:

- **No Context Switching**:
   - Spinlocks have the advantage of **avoiding context switching** when a process waits for the lock. A context switch can be time-consuming, and by using a spinlock, the overhead of a context switch is eliminated.
   - This makes spinlocks useful when locks are held for **short durations**, as the process will spend minimal time waiting and will not need a context switch.

- **Useful in Multiprocessor Systems**:
   - Spinlocks are particularly beneficial in **multiprocessor systems**, where one thread can "spin" on one processor while another thread executes its critical section on a separate processor.
   - In this case, one processor is available to handle the spinning process, while the other processor executes the critical section, leading to more efficient resource utilization.

### Conclusion:
- **Mutex locks** are essential tools for protecting critical sections and preventing race conditions in concurrent systems. 
- While the **busy-waiting** nature of mutex locks (spinlocks) has drawbacks in terms of CPU resource usage, they offer benefits such as **avoiding context switching** and are suitable for situations where locks are held for short durations or in multiprocessor environments.

---

