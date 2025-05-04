---
title: "05 Functions - 06 Generator Functions"
description: ""
summary: ""
date: 2025-02-11T19:58:45+05:30
lastmod: 2025-02-11T19:58:45+05:30
draft: false
weight: 50
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



A **generator** is a special type of function in Python that allows you to iterate over a sequence of values lazily, meaning values are produced one at a time as needed, rather than all at once. This makes generators a memory-efficient way of dealing with large datasets or sequences.

Generators are written just like regular functions, but instead of using a `return` statement, they use the `yield` statement to return values one at a time. Each time `yield` is called, the function's state is saved, and the function's execution can be resumed later from where it left off.

Generators are often used with other built-in functions like `map()`, `filter()`, and `reduce()` for efficient, on-the-fly processing of data.


---

#### **Basic Generator**

A simple generator function that generates numbers between `x` and `y`:

```python
>>> def range_gen(x, y):
...     while x <= y:
...             yield x
...             x += 1
... 
>>> g = range_gen(5,10)

>>> for i in g:
...     print(i, end=' ')
... 
5 6 7 8 9 10
```

- The `range_gen()` function generates a sequence of numbers from `x` to `y` using the `yield` statement.
- The variable `g` is the generator object returned by the `range_gen()` function.
- We can iterate over `g` with a `for` loop to print each value in the sequence.

Once the generator finishes yielding all values, it is considered **exhausted**, meaning you cannot reuse it.

---

### **Generator Object and Exhaustion**

When we convert a generator object into a list, the values are retrieved one by one. After the generator is exhausted, it can no longer produce values unless it is recreated.

```python
>>> def range_gen(x, y):
...     while x <= y:
...         yield x
...         x += 1
... 

>>> g = range_gen(5, 10)
>>> lst = list(g)
>>> g
<generator object range_gen at 0x7fd9f79a90c8>

>>> lst
[5, 6, 7, 8, 9, 10]

>>> lst2 = list(g)
>>> lst2
[]
```

- **`lst`** contains the values `[5, 6, 7, 8, 9, 10]`, which were yielded by the generator.
- **`lst2`** is an empty list because the generator `g` has already been exhausted and cannot yield more values.
- Once the generator has yielded all values, it is exhausted, and any further attempts to use it will result in an empty list or no further values.

---

#### **Statefulness of Generators**

Generators are **stateful**, meaning they maintain the state of their execution between successive calls to `yield`. This allows them to resume execution from where they left off rather than starting over. As a result, generators are memory-efficient for producing large sequences of data because they do not require storing the entire sequence in memory.

#### **Generators Are Not Reusable**

Once a generator has been exhausted (i.e., it has yielded all of its values), it cannot be reused. To re-iterate the sequence, you must create a new generator instance.

---

### **Using 'next()' with Generators**

The `next()` function can be used to retrieve the next value from a generator one at a time. Each time `next()` is called, the generator yields the next value in the sequence. If the generator is exhausted, calling `next()` raises a `StopIteration` exception.

```python
>>> def mygen():
...     yield 'A'
...     yield 'B'
...     yield 'C'
... 

>>> g = mygen()

>>> print(next(g))
A

>>> print(next(g))
B

>>> print(next(g))
C

>>> print(next(g))  # Raises StopIteration
StopIteration
```

---

### **Generator Benefits**

1. **Memory Efficiency**: Generators produce values one at a time and do not store the entire sequence in memory. This is especially useful when working with large datasets that would otherwise consume significant memory.
    
2. **Lazy Evaluation**: Generators produce values only when needed. This can improve performance when working with large data sets or computations that involve expensive operations.
    
3. **Infinite Sequences**: Since generators do not store all values at once, they can be used to represent infinite sequences (like Fibonacci numbers or counting numbers) that would otherwise be impractical to store in memory.
    

---

### **Infinite Generator**

```python
>>> def count_up_from(start):
...     while True:
...             yield start
...             start += 1
... 
>>> g = count_up_from(1)
>>> next(g)
1
>>> next(g)
2
>>> next(g)
3
>>> next(g)
4
```

In this case, `count_up_from()` is an infinite generator. It keeps yielding numbers starting from `1` and increments by `1` on each call. Since it never terminates, it can be used to produce an infinite sequence of numbers.

---

