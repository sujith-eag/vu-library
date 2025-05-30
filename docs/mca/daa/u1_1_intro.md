
# Algorithm

An **algorithm** is a sequence of unambiguous instructions for solving a problem — i.e., for obtaining a required output for any legitimate input in a finite amount of time.

```
           Problem
              |
Input --> Computer --> Output
```

Think of it like a **recipe, process, method, technique, procedure, or routine**, which must satisfy the following requirements:

1. **Finiteness**: It must terminate after a finite number of steps.
    
2. **Definiteness**: Each step must be rigorously and unambiguously specified.
    
3. **Input**: Valid inputs must be clearly defined.
    
4. **Output**: It must produce the correct output for every valid input, and this correctness can be proven.
    
5. **Effectiveness**: Each step must be sufficiently simple and basic to be carried out.
    

### Important Points to remember

- **Non-ambiguity** of every step is **non-negotiable** so cannot be compromised.
    
- The **range of inputs** for which the algorithm works must be clearly specified.
    
- The **same algorithm** can be represented in multiple forms.
    
- **Multiple algorithms** may exist to solve the same problem.
    
- Algorithms for the same problem may be based on **vastly different ideas** and exhibit **dramatically different performance**.

## GCD of Two Integers — Three Methods

We present three distinct methods to compute the **Greatest Common Divisor (GCD)** of two integers:

1. **Euclid’s Algorithm**
    
2. **Consecutive Integer Checking Algorithm**
    
3. **Prime Factorization Method**
    

---

### 1. GCD Using Euclid’s Algorithm

The algorithm is based on the principle:  
**`gcd(m, n) = gcd(n, m mod n)`**, repeated until `m mod n = 0`, at which point `gcd(m, 0) = m`.

**Algorithm Steps:**

1. If `n = 0`, return `m` as answer and stop.
    
2. Otherwise, compute `r = m mod n`. (Divide `m` by `n` and assign the value of remainder to `r`)
    
3. Assign `m = n`, `n = r`, and repeat from step 1.    


**Psuedocode for this algorithm:**

```
Algorithm Euclid(m, n)
// Computes gcd(m, n) using Euclid’s algorithm
// Input: Two non-negative integers m and n (not both zero)
// Output: GCD of m and n

while n ≠ 0 do
    r ← m mod n
    m ← n
    n ← r
return m
```

The value of the second number in the pair eventually becomes 0, and the algorithm stops.
**Example Problem:** Find `gcd(31415, 14142)` using Euclid’s algorithm:

**Example: GCD(60, 24)**

```
GCD(60, 24) = GCD(24, 60 mod 24) = GCD(24, 12)

GCD(24, 12) = GCD(12, 24 mod 12) = GCD(12, 0)

GCD = 12
```


**Example: GCD(31415, 14142)**

```
gcd(31415, 14142) = gcd(14142, 3131)
                  = gcd(3131, 1618)
                  = gcd(1618, 1513)
                  = gcd(1513, 105)
                  = gcd(105, 43)
                  = gcd(43, 19)
                  = gcd(19, 5)
                  = gcd(5, 4)
                  = gcd(4, 1)
                  = gcd(1, 0)
	GCD = 1
```

---

### 2. GCD Using Consecutive Integer Checking Algorithm

**Steps:**

1. Let `t = min(m, n)`.
    
2. If `m mod t = 0`, (remainder of m/n is 0) proceed to step 3; otherwise, go to step 4.
    
3. If `n mod t = 0`, return `t` as the GCD and stop; otherwise, go to step 4.
    
4. Decrease `t` by 1. Repeat from step 2.
    

---

### 3. GCD Using Prime Factorization Method

**Steps:**

1. Find the prime factors of `m`.
    
2. Find the prime factors of `n`.
    
3. Identify all common prime factors. For each common prime `p`, take it to the power of `min(pm, pn)` where `pm` and `pn` are the powers of `p` in `m` and `n`, respectively.
    
4. Multiply all common factors to get the GCD.
    

**Example:**

```
60 = 2 × 2 × 3 × 5
24 = 2 × 2 × 2 × 3

Common factors: 2 × 2 × 3 = 12
GCD(60, 24) = 12
```

This procedure is more complex and ambiguity arises since the prime factorization is not defined. So to make it as an efficient algorithm, incorporate the algorithm to find
the prime factors.

## Fundamentals of Algorithmic Problem Solving

Algorithms can be considered to be procedural solutions to problems. There are certain steps to be followed in designing and analyzing an algorithm.
```
Understand the Problem
      ↓
Decide on: Computational Means, Exact vs. Approximate Solving, Algorithm Design Thinking
      ↓
Design an Algorithm
      ↓
Prove Correctness
      ↓
Analyze the Algorithm
      ↓
Code the Algorithm
```

### Understanding the Problem

- An **input** to an algorithm specifies an instance of the problem the algorithm is meant to solve.
    
- It is essential to **specify the range of instances** the algorithm must handle.
    
- One must clearly understand the problem and **clarify any doubts** after reading the problem description.
    
- A **correct algorithm** should work for **all valid inputs**.
    

---

### Ascertaining the Capabilities of a Computational Device

- Understand the limitations and capabilities of the computing machine.
    
- The classical **von Neumann architecture**, modeled by **RAM (Random Access Machine)**, executes instructions **sequentially**, one operation at a time.
    
    - Algorithms for such machines are called **sequential algorithms**.
        
- Algorithms that support **concurrent execution** of operations are known as **parallel algorithms**.
    

---

### Choosing Between Exact and Approximate Problem Solving


Three main reasons for choosing **approximation algorithms**:
    
1. Some problems (e.g., extracting square roots, solving non-linear equations) **cannot be solved exactly**.
	
2. Some problems are computationally expensive (e.g., **Traveling Salesman Problem**) and require approximation to run efficiently.
	
3. Approximation may be part of a more **sophisticated exact algorithm**.
        

---

### Deciding on Data Structures

Data structures are crucial in both **designing** and **analyzing** algorithms.
    
 The principle:  
    **Algorithms + Data Structures = Programs**
    

---

### Algorithm Design Techniques

An **algorithm design technique** is a general, reusable method for developing algorithms that apply across many problem from different domains.

**Importance:**

1. Guides the design of solutions for **new problems**.
    
2. Forms the **foundation of computer science**.

Algorithm design techniques make it possible to classify algorithms according to an underlying design idea; therefore, they can serve as a natural way to both categorize and study algorithms.

---

### Methods of Specifying an Algorithm

- **Pseudocode**: A combination of natural language and programming language constructs.
    
- **Flowcharts**: A graphical method using connected geometric shapes to describe each step of the algorithm.

---

### Proving an Algorithm’s Correctness

- **Correctness must be proven** for every algorithm.
    
- An algorithm is correct if it produces the correct output for **every valid input** and terminates in **finite time**.
    

---

### Analyzing an Algorithm

Two key efficiency metrics for analyzing an algorithm:
- **Time efficiency:** indicates how fast the algorithm runs; 
- **Space efficiency:** indicates how much extra memory the algorithm needs.

Other desirable characteristics: 
- **Simplicity:** Easier to understand and debug
- **Generality**

---

### Coding an Algorithm

- Implement the algorithm using a **programming language**.
    
- **Formal verification** is used for small, critical programs.
    
- **Testing and debugging** are used to validate the implementation.
    
* Inputs should fall within a range and hence require no verification.

* The program’s stopping / terminating condition has to be set.

## Important Problem Types

1. **Sorting**
    
2. **Searching**
    
3. **String Processing**
    
4. **Graph Problems**
    
5. **Combinatorial Problems**
    
6. **Geometric Problems**
    
7. **Numerical Problems**
    

---

### Sorting

- **Sorting** involves rearranging the items of a list in **ascending order**.
    
- Commonly sorted data: numbers, characters, strings, records (e.g., student or library info).
    

**Important Properties:**

- **Stable**: Maintains the relative order of equal elements in its input.
    
    - Example: Sorting students by GPA—if two students have the same GPA, their order remains unchanged.
        
- **In-place**: Requires **no extra memory** (beyond a constant amount).
    

---

### Searching

- The **searching problem** involves finding a value (search key) in a dataset.
    
- Algorithms range from **linear search** to **binary search**.
    

**Applications:**

- Crucial in large databases for storing and retrieving information.
    
- Some algorithms are faster but require more memory, and others are optimized for **sorted data**.
	
* Searching, mainly deals with Insertion and deletion of records. In such cases the data structure and algorithm are chosen to balance efficiency of operations.

---

### String Processing

A **string** is a sequence of characters. Common string types:
    
- **Text strings** (letters, numbers, symbols)
	
- **Bit strings** (binary: 0s and 1s)
        

**Key Problems:**

- **String matching**: Finding a word in a body of text.
    Examples: Sequential search, brute-force string matching.

---

### Graph Problems

A **graph** consists of **vertices (nodes)** and **edges (connections)**. They are used to model real-life applications such as **transportation**, **communication networks**, and **scheduling**.
    

**Example Problems:**

- Graph traversal
    
- Shortest path algorithms
    
- Topological sorting
    

**Complex Problems:**

- Some graph problems (e.g., graph coloring) are computationally hard.
    
- Example: **Graph coloring** assigns colors to vertices such that no adjacent vertices share the same color — useful in scheduling.
    

---

### Combinatorial Problems

Involve finding **combinatorial objects** (e.g., permutations, combinations, subsets) that satisfy constraints and optimize some goal (e.g., maximize value, minimize cost).

- Examples: **Traveling Salesman Problem**, **Graph Coloring**.

These problems are difficult to solve because:

1. Number of possibilities grows **exponentially** with input size.
    
2. Many lack known efficient algorithms and solutions which can solve in acceptable amount of time.

---

### Geometric Problems

Concerned with geometric objects like **points**, **lines**, **polygons**, and shapes (e.g., triangles, circles).
    
**Applications:**
- Used in **computer graphics**, **robotics**, etc.

**Example Problems:**

- **Closest-pair problem**: Find the closest pair of points in a plane, given `n` points. 
    
- **Convex-hull problem**: Find the smallest convex polygon enclosing all points in a set.
    

---

### Numerical Problems

Deal with **continuous mathematical objects**: solving equations, computing integrals, evaluating functions.    

**Characteristics:**

- Usually solved **approximately**, not exactly.
    
- Involve **real numbers**, represented approximately in computers.
    
- Can lead to **round-off errors** accumulation.

**Applications:**

- Common in **scientific** and **engineering** domains.
