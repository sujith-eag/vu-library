---
title: "02 CDT - 06 Sets"
description: ""
summary: ""
date: 2024-12-17T22:47:04+05:30
lastmod: 2024-12-17T22:47:04+05:30
draft: false
weight: 26
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




A **set** is an unordered collection of unique elements. Unlike sequences (such as lists or tuples), sets are **unordered** and do not store duplicate elements. Since sets are unordered, they do not support indexing, slicing, or other sequence-like behavior.

Sets are commonly used for operations like checking membership, removing duplicates, and performing mathematical set operations.

### Key Characteristics of Sets:
- **Mutable**: You can add or remove elements from a set after it is created.
- **Unordered**: The elements in a set do not have a specific order, and you cannot access elements by index.
- **No duplicates**: Sets automatically remove any duplicate elements, ensuring that all elements are unique.

Creating a set looks similar to dictionary but is not having key value pairs.
```python
s = {1, 2, 3, 4}
```


---

### Adding and Removing Elements

- **`update()`**: Adds multiple elements to the set (from an iterable).
- **`remove()`**: Removes a specific element from the set. Raises a `KeyError` if the element doesn't exist.
- **`discard()`**: Removes a specific element from the set, but does **not raise an error** if the element doesn't exist.


#### **'set.update()'**

The `update()` method is used to **add multiple elements** to a set. You can pass any iterable (e.g., a list, tuple, or another set) to the `update()` method, and it will add all the elements from the iterable to the set.

**Note**: `update()` does not add duplicates to the set, as sets do not allow duplicate elements.

```python
>>> s = {1,2,3}
>>> type(s)
<class 'set'>
```

```python
>>> s.update([4])
>>> s   # passing list
{1, 2, 3, 4}
>>> s.update([5,6,7])

>>> s.update({8,9})
>>> s   # pssing set
{1, 2, 3, 4, 5, 6, 7, 8, 9}

>>> s.update((9,10))
>>> s   # passing tuple
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}


>>> s.update(10)
TypeError: 'int' object is not iterable
```

___

#### **'set.remove()'**

The `remove()` method is used to **remove a specific element** from the set. If the element is not found, it raises a `KeyError`.

```python
>>> s = {1,2,3,4,5}

>>> s.remove(3)
>>> s
{1, 2, 4, 5}

>>> s.remove(6)
KeyError: 6
# Trying to remove an element that does not exist raises an error
```

___

#### **'set.discard()'**

The `discard()` method is similar to `remove()`, but it does **not raise an error** if the element does not exist in the set. This makes it a safer option if you're unsure whether the element is in the set.

```python
>>> s = {1,2,3,4,5}

>>> s.discard(5)
>>> s
{1, 2, 3, 4}

>>> s.discard(10)
>>> s
{1, 2, 3, 4}
```

---


### Set Operations

Python provides a variety of operations to perform set-related tasks:

- **Union** (`|`) : `set1 | set2` Combines two sets, returning all unique elements from both sets.
- **Intersection** (`&`) : `set1 - set2` Returns only the elements that are present in both sets.
- **Difference** (`-`) : `set1 - set2` Returns the elements that are in the first set but not in the second set.
- **Symmetric Difference** (`^`) : `set1 ^ set2` Returns elements that are in either of the sets, but not in both.

```python
>>> a = {1,2,3}
>>> b = {3,4,5}

# Intersection: Elements present in both sets
>>> a & b
{3}

# Union: All unique elements from both sets
>>> a | b
{1, 2, 3, 4, 5}

# Difference: Elements in 'a' but not in 'b'
>>> a - b
{1, 2}

# Difference: Elements in 'b' but not in 'a'
>>> b - a
{4, 5}

# Symmetric Difference: Elements in either 'a' or 'b', but not both
>>> a ^ b
{1, 2, 4, 5}
```


---


