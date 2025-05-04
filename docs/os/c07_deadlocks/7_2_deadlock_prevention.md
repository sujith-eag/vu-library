---
title: "OS 7.02 - Deadlock Prevention Methods"
description: ""
summary: ""
date: 2025-01-12T21:27:49+05:30
lastmod: 2025-01-12T21:27:49+05:30
draft: false
weight: 2041
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


There are four approaches to dealing with deadlocks:

1. Deadlock Prevention
2. Deadlock Avoidance (e.g., Banker's Algorithm)
3. Deadlock Detection & Recovery
4. Deadlock Ignorance (Ostrich Method)

---

### Deadlock Prevention

A deadlock occurs when all four of the following conditions are met:
- Mutual Exclusion
- Hold and Wait
- No Preemption
- Circular Wait

To prevent deadlocks, at least one of these conditions must be eliminated. Deadlock prevention is a proactive method that ensures that at least one of these conditions cannot hold, thus preventing the occurrence of a deadlock.

____

#### Eliminating Mutual Exclusion

- Some resources, such as a printer or mutex lock, must be exclusive.
- Eliminating mutual exclusion for such resources is impractical.

____

#### Prevent Deadlock by Eliminating Hold and Wait

The **hold-and-wait** condition occurs when a process holds at least one resource while waiting for another.

**Prevention Strategies:**
- Ensure a process requests all resources at the start and is allocated all necessary resources before it begins execution. (This is impractical due to the dynamic nature of resource requests.)
- Force a process to release held resources before requesting new ones.
- Another protocol ensures that a thread can only request resources when it has none. A thread may request some resources and use them. Before requesting additional resources, it must release all the resources it is currently allocated.

**Possible Starvation:** A process that needs multiple resources may have to wait indefinitely because at least one resource is always in use by another process.

____

#### No Preemption

- **No preemption** means that a resource cannot be forcefully taken (preempted) from a process holding it; the process must release it voluntarily.

To ensure this condition does not hold:

- If a thread is holding some resources and requests another resource that cannot be immediately allocated to it (i.e., the thread must wait), then instead of holding and waiting, all resources the thread is currently holding are preempted and released.
- The preempted resources are added to the list of available resources, and the thread will be restarted only when it can regain its old resources, as well as the new ones it is requesting.
- Alternatively, if a thread requests some unavailable resource held by a process waiting for resources, we preempt the desired resources from the waiting thread and allocate them to the requesting thread.

**Note:** This cannot generally be applied to resources like mutex locks and semaphores, which are typically involved in deadlock scenarios. Therefore, this solution is often impractical.

____

#### Prevent Deadlock by Eliminating Circular Wait

To ensure the **circular wait** condition never holds, impose a total ordering of all resource types and require that each thread requests resources in an increasing order of enumeration.

- Ensure a process releases lower-priority resources before requesting higher-priority resources.

---

Deadlock-prevention algorithms prevent deadlocks by limiting how requests can be made. The limits ensure that at least one of the necessary conditions for deadlock cannot occur. However, the possible side effects of preventing deadlocks in this way include low device utilization and reduced system throughput.

____
