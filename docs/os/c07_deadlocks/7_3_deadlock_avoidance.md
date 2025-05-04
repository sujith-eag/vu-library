---
title: "OS 7.03 - Deadlock Avoidance"
description: ""
summary: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
weight: 2042
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




Deadlock avoidance requires that the operating system be given additional information about how resources are to be requested during a process's lifetime. With knowledge of the complete sequence of requests and releases for each thread, the system can decide whether or not a thread should wait to avoid a potential deadlock.

To determine if the current request can be satisfied or if the thread must be delayed, the system must consider:

- The resources currently available
- The resources currently allocated to each process
- The future requests and releases of each process

The simplest and most useful model involves each thread declaring the maximum number of resources of each type that it may need.

The **resource-allocation state** is defined by the number of available and allocated resources, as well as the maximum demands of the threads.

---

#### 1. Safe State

A state is considered **safe** if the system can allocate resources to each thread (up to its maximum demand) in some order, while avoiding deadlock.

- A system is in a **safe state** only if there exists a safe sequence.

- If no such sequence exists, the system is said to be in an **unsafe state**.


A sequence of threads <T1, T2, ..., Tn> is a **safe sequence** for the current allocation state if, for each Ti, the resource requests that Ti may still make can be satisfied by the currently available resources, plus the resources held by all Tj, where j < i.

If the resources that Ti needs are not immediately available, then Ti can wait until all Tj have finished. Once they finish, Ti can obtain all of its required resources.

- A **deadlocked state** is an unsafe state, but not all unsafe states result in deadlocks. An unsafe state may eventually lead to a deadlock.


Whenever a thread requests a resource that is currently available, the system must decide whether the resource can be allocated immediately, or if the thread must wait. The request is granted only if the allocation leaves the system in a safe state.

In this approach, if a thread requests a resource that is currently available, it may still need to wait. As a result, resource utilization may be lower than optimal.

---

#### 2. Resource Allocation Graph Algorithm

In addition to the request and assignment edges in a **Resource Allocation Graph (RAG)**, a new type of edge, called a **claim edge**, is used for deadlock avoidance.

- A **claim edge** (Ti → Rj) indicates that thread Ti may request resource Rj at some point in the future. This edge resembles a request edge but is represented in the graph by a dashed line.


**Operations:**

- When thread Ti requests resource Rj, the claim edge (Ti → Rj) is converted to a request edge.

- When resource Rj is released by Ti, the assignment edge (Rj → Ti) is reconverted to a claim edge (Ti → Rj).


When thread Ti requests resource Rj, the request can be granted only if converting the claim edge (Ti → Rj) to an assignment edge (Rj → Ti) does not create a cycle in the graph (detected using a cycle-detection algorithm).

- If no cycle exists, the allocation is safe and the resource is granted.

- If a cycle is found, the allocation would put the system in an unsafe state, and thread Ti must wait for its request to be satisfied.

{{< figure  src="images/os/7_07_DeadlockAvoidance-min.jpg"  alt="."  caption="." >}}


**Cycle Detection:**

- A cycle detection algorithm in this context requires O(n²) operations, where n is the number of threads in the system.


Example scenario: Suppose thread T2 requests resource R2. Although R2 is free, allocating it to T2 would create a cycle in the graph. A cycle indicates an unsafe state, and a deadlock could occur if T1 requests R2 and T2 requests R1.

{{< figure  src="images/os/7_08_UnsafeState-min.jpg"  alt="."  caption="." >}}

The resource-allocation graph algorithm does not apply to systems with multiple instances of each resource type.

---

#### 3. Banker's Algorithm

When a new thread enters the system, it must declare the maximum number of instances of each resource type it may need. This number cannot exceed the total number of resources available in the system. When a thread requests a set of resources, the system must determine whether allocating those resources will leave the system in a safe state. If so, the resources are allocated; otherwise, the thread must wait.

**Data Structures Used in Banker's Algorithm:**

- **Available**: A vector of length m, indicating the number of available resources of each type. If `Available[j] = k`, then k instances of resource type Rj are available.

- **Max**: An n × m matrix defining the maximum demand of each thread. If `Max[i][j] = k`, thread Ti may request at most k instances of resource Rj.

- **Allocation**: An n × m matrix defining the number of resources of each type currently allocated to each thread. If `Allocation[i][j] = k`, thread Ti is currently allocated k instances of resource Rj.

- **Need**: An n × m matrix indicating the remaining resource need of each thread. If `Need[i][j] = k`, thread Ti may need k more instances of resource Rj to complete its task.


`Need[i][j] = Max[i][j] - Allocation[i][j]`.

**Resource-Request Algorithm for Safe Granting of Requests:**

1. If `Requesti ≤ Needi`, go to step 2. Otherwise, raise an error since the thread has exceeded its maximum claim.

2. If `Requesti ≤ Available`, go to step 3. Otherwise, thread Ti must wait, since the resources are not available.

3. Pretend to allocate the requested resources to thread Ti by modifying the system state as follows:

    - `Available = Available - Requesti` (remove from available)

    - `Allocationi = Allocationi + Requesti` (add to allocation)

    - `Needi = Needi - Requesti` (remaining need is reduced)


If the resulting resource-allocation state is safe, the transaction is completed, and thread Ti is allocated its resources. However, if the new state is unsafe, Ti must wait, and the old resource-allocation state is restored.

---

### Problems with the Banker's Algorithm

| Process | Allocation (A, B, C) | Max (A, B, C) | Available (A, B, C) |
| ------- | -------------------- | ------------- | ------------------- |
| T0      | 0, 1, 0              | 7, 5, 3       | 3, 3, 2             |
| T1      | 2, 0, 0              | 3, 2, 2       |                     |
| T2      | 3, 0, 2              | 9, 0, 2       |                     |
| T3      | 2, 1, 1              | 2, 2, 2       |                     |
| T4      | 0, 0, 2              | 4, 3, 3       |                     |

**Need Matrix**

|Task|A|B|C|
|---|---|---|---|
|T0|7|4|3|
|T1|1|2|2|
|T2|6|0|0|
|T3|0|1|1|
|T4|4|3|1|

The system is currently in a **safe state**. The sequence <T1, T3, T4, T2, T0> satisfies the safety criteria.

Suppose T1 requests (1, 0, 2). First, check that `Request1 ≤ Available`, i.e., (1, 0, 2) ≤ (3, 3, 2), which is true. The request can be granted because the new system state remains safe.

After the request, the new state is as follows:

|Process|Allocation (A, B, C)|Need (A, B, C)|Available (A, B, C)|
|---|---|---|---|
|T0|0, 1, 0|7, 4, 3|2, 3, 0|
|T1|3, 0, 2|0, 2, 0||
|T2|3, 0, 2|6, 0, 0||
|T3|2, 1, 1|0, 1, 1||
|T4|0, 0, 2|4, 3, 1||

After executing the safety algorithm, we find that the sequence <T1, T3, T4, T0, T2> satisfies the safety requirements. Therefore, T1's request can be immediately granted.

When the system is in this state, a request for (3, 3, 0) by T4 cannot be granted, as the resources are not available. A request for (0, 2, 0) by T0 also cannot be granted, even though the resources are available, as it would lead to an unsafe state with no safe sequence.

---
