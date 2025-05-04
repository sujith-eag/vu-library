---
title: "OS 7.01 - Deadlock"
description: ""
summary: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
weight: 2040
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


### Deadlock

Deadlock occurs in a set of processes when every process in the set is waiting for an event that can only be caused by another process in the set.

A deadlock occurs in a multiprogramming environment when two or more processes are permanently blocked because each is waiting for a resource held by another process. As a result, none of the processes can proceed, causing a system halt.

In a deadlock, processes never ﬁnish executing, and system resources are tied up, preventing other jobs from starting.

Example:
- Consider two processes, P1 and P2, and two resources, R1 and R2:
    - P1 holds R1 and is waiting for R2.
    - P2 holds R2 and is waiting for R1.
- Neither process can proceed because they are both waiting for each other to release the required resource. This creates a circular wait, which is one of the necessary conditions for a deadlock to occur.

---

### Deadlock Characterization

Deadlock occurs when two or more processes are permanently blocked, with each process waiting for a resource held by another process. Preventing, detecting, and handling deadlocks are crucial in multiprogramming systems.

#### 1. Necessary Conditions for Deadlock:

Deadlock can occur only if all four of the following conditions hold simultaneously:

- **Mutual Exclusion**: Resources cannot be shared.
At least one resource must be held in a nonsharable mode; that is, only one process at a time can use the resource. If another process requests that resource, the requesting process must be delayed until the resource has been released.

- **Hold and Wait**: Processes holding resources can wait for other resources.
A process must be holding at least one resource and waiting to acquire additional resources that are currently being held by other processes.

- **No Preemption**: Resources cannot be forcibly taken from a process.
Resources cannot be preempted; that is, a resource can be released only voluntarily by the process holding it, after that process has completed its task.

- **Circular Wait**: A closed chain of processes exists, where each process holds a resource that the next process in the chain is waiting for.
A set {P0 , P1 , ..., Pn } of waiting processes must exist such that P0 is waiting for a resource held by P1 , P1 is waiting for a resource held by P2 , ..., Pn−1 is waiting for a resource held by Pn , and Pn is waiting for a resource held by P0 .



#### 2. Resource Allocation Graph (RAG)

A Resource Allocation Graph (RAG) is a directed graph used to represent the allocation of resources in a system. It helps in detecting deadlocks by visualizing the relationships between processes and resources, making it easier to identify potential deadlock conditions.

The RAG is represented as `G = (V, E)`, where:

- `V` is the set of vertices (nodes), and
- `E` is the set of edges (connections between vertices).

#### Components of RAG:

- **Vertices (V)**:
    - **Processes**: Represented as circles (e.g., P1, P2, …, Pn).
    - **Resources**: Represented as rectangles (e.g., R1, R2, …, Rm).
- **Edges (E)**:
    - **Request Edge (Pi → Rj)**: A directed edge from process Pi to resource Rj, indicating that Pi is waiting for Rj.
    - **Assignment Edge (Rj → Pi)**: A directed edge from resource Rj to process Pi, indicating that Rj is allocated to Pi.

#### Example Resource Allocation Graph:

Consider a system with the following processes and resources:

- **Processes**: `P = {P1, P2, P3}`
- **Resources**: `R = {R1, R2, R3, R4}`

Set of edges (process-resource dependencies):

- `P1 → R1` (P1 requests R1)
- `P2 → R3` (P2 requests R3)
- `R1 → P2` (R1 is allocated to P2)
- `R2 → P2` (R2 is allocated to P2)
- `R2 → P1` (R2 is allocated to P1)
- `R3 → P3` (R3 is allocated to P3)

Resource instances:

- One instance of resource type R1
- Two instances of resource type R2
- One instance of resource type R3
- Three instances of resource type R4

Process states:

- **P1** is holding an instance of resource R2 and is waiting for an instance of resource R1.
- **P2** is holding an instance of R1 and an instance of R2 and is waiting for an instance of R3.
- **P3** is holding an instance of R3.

This system could potentially lead to a deadlock if processes are unable to obtain the resources they are waiting for.

____

### Deadlock Detection Using RAG


{{< figure  src="images/os/7_01_ResourceAllocation-min.jpg"  alt="7.01 Resource Allocation Graph"  caption="7.01 Resource Allocation Graph" >}}


A deadlock occurs when a cycle is present in the Resource Allocation Graph (RAG).

- If the graph contains no cycles, no process is deadlocked.
- If a cycle exists, a deadlock may be present.

{{< figure  src="images/os/7_02_Deadlock-min.jpg"  alt="7.02 Deadlock with Cycle"  caption="7.02 Deadlock with Cycle" >}}


If each resource type has exactly one instance, then a cycle implies that a deadlock has occurred.


If each resource type has several instances, then a cycle does not necessarily imply that a deadlock has occurred. In this case, a cycle in the graph is a necessary but not a sufﬁcient condition for the existence of deadlock.



---

