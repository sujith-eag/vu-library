---
title: "OS 7.04 - Deadlock Detection and Recovery"
description: ""
summary: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
weight: 2043
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




If a system does not employ either a deadlock-prevention or deadlock-avoidance algorithm, then a deadlock situation may occur. In such an environment, the system may provide:

- An algorithm to examine the state of the system and determine whether a deadlock has occurred.

- An algorithm to recover from the deadlock.


A **deadlock-detection algorithm** can evaluate processes and resources on a running system to determine if a set of processes is in a deadlocked state.

---

#### 1. Single Instance of Each Resource Type

When all resources have only a single instance, we can use a variant of the **resource-allocation graph**, called a **wait-for graph**, to detect deadlocks. This graph is derived from the resource-allocation graph by removing the resource nodes and collapsing the appropriate edges.



In a **wait-for graph**:

- An edge from Ti to Tj implies that thread Ti is waiting for thread Tj to release a resource that Ti needs.

- A deadlock exists in the system if and only if the wait-for graph contains a cycle.


To detect deadlocks, the system needs to maintain the wait-for graph and periodically invoke an algorithm that searches for a cycle in the graph. A cycle detection algorithm requires O(n²) operations, where n is the number of vertices (processes) in the graph.

The **wait-for graph** scheme is not applicable to systems with multiple instances of each resource type.


{{< figure  src="images/os/7_09_TwoGraphs-min.jpg"  alt="."  caption="." >}}

---

#### 2. Multiple Instances of a Resource Type

The **wait-for graph** approach is not suitable for systems with multiple instances of each resource type. In such cases, other detection algorithms must be used that account for the possibility of multiple resources of the same type being requested by different processes.

These algorithms need to track the allocation and request of resources, considering scenarios where multiple processes may be waiting for shared resources.

---

#### 3. Detection-Algorithm Usage

If deadlocks occur frequently in the system, the deadlock-detection algorithm should be invoked more often.

The algorithm can be invoked each time a request for resource allocation cannot be granted immediately. This allows the system to detect any deadlock as soon as it happens and take corrective actions.

---

### Recovery from Deadlock

When a deadlock is detected, the system must decide how to recover from the deadlock situation. There are two main options for breaking a deadlock:

1. Abort one or more processes involved in the deadlock.

2. Preempt resources from the deadlocked processes and allocate them to other processes to break the deadlock cycle.


---

#### 1. Process Termination

One way to recover from deadlock is to abort one or more deadlocked processes. This will break the circular wait cycle, but it comes with significant overhead, as partial computations may need to be discarded, and the processes may need to be recomputed later.

- **Abort all deadlocked processes**: This method is guaranteed to break the deadlock cycle, but at a high cost.

- **Abort one process at a time**: This method involves aborting one process at a time until the deadlock cycle is eliminated. However, it incurs considerable overhead since after each process is aborted, the deadlock-detection algorithm must be invoked to check if any processes are still deadlocked.


---

#### 2. Resource Preemption

Another way to resolve deadlocks is through **resource preemption**. This involves preempting resources from processes and reallocating them to other processes until the deadlock cycle is broken.

Three issues must be addressed when using resource preemption to resolve deadlocks:

1. **Selecting a victim**:
    - As in process termination, we need to determine the order of preemption to minimize cost. Cost factors include the number of resources a deadlocked process is holding and the amount of time the process has consumed.
	
2. **Rollback**:
    - When a resource is preempted from a process, the process cannot continue as it is missing a required resource. In such cases, the process must be rolled back to a **safe state** and restarted from there.
	
    - Since it can be difficult to determine a safe state, a simple solution is to perform a **total rollback**, which involves aborting the process and restarting it from scratch.
	
3. **Starvation**:
    - It is important to ensure that resources are not always preempted from the same process, as this could result in **starvation**, where the process is never able to complete its task.
	
    - In systems where victim selection is based primarily on cost factors, it may happen that the same process is always chosen as a victim. This can result in starvation, which is a situation that must be avoided in practical systems.

---

By addressing these issues, systems can recover from deadlocks while minimizing the associated costs and risks.

____

