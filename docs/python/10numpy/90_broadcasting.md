---
title: "NumPy - 16 Broadcasting"
description: ""
summary: ""
date: 2025-02-14T20:46:20+05:30
lastmod: 2025-02-14T20:46:20+05:30
draft: false
weight: 136
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


**Broadcasting** is a powerful feature in NumPy that allows arrays with different shapes to be combined in arithmetic operations without explicit loops. It automatically expands smaller arrays to match the shape of larger ones, making operations more efficient.

#### **Why Use Broadcasting?**

- **Faster Execution**: Avoids explicit loops, making code faster and more readable.
- **Memory Efficient**: Uses less memory because it doesn’t create unnecessary copies of data.
- **Simplifies Operations**: Makes it easier to perform operations on arrays of different shapes.

#### **The Broadcasting Rule**

Two arrays are compatible for broadcasting if, for each trailing dimension (i.e., starting from the end), the axis lengths match, or if either of the lengths is 1. Broadcasting is then performed over the missing or length 1 dimensions.

---

#### **Simple Scalar and Array Operation**

In this example, a scalar value is broadcast to each element of the array:

```python
>>> import numpy as np
>>> arr = np.arange(5)
>>> arr
array([0, 1, 2, 3, 4])
>>> arr * 4
array([ 0, 4, 8, 12, 16])
```

Here, the scalar value `4` is broadcast across all elements of the array `arr`.

---

#### **Broadcasting with Scalar and Array**

When performing operations between a scalar and an array, the scalar is broadcast across all the elements of the array.

```python
>>> from numpy import array
>>> a = array([1, 2, 3])
>>> print(a)
[1 2 3]
>>> b = 2
>>> print(b)
2
>>> c = a + b
>>> print(c)
[3 4 5]
```

In this example, `b = 2` is broadcast to each element of array `a`, resulting in `[3, 4, 5]`.

---

#### **Broadcasting with Scalar and Two-Dimensional Array**

Broadcasting also works with two-dimensional arrays. The scalar is broadcast to each row of the matrix.

```python
>>> from numpy import array
>>> A = array([[1, 2, 3], [1, 2, 3]])
>>> print(A)
[[1 2 3]
 [1 2 3]]
>>> b = 2
>>> print(b)
2
>>> C = A + b
>>> print(C)
[[3 4 5]
 [3 4 5]]
```

Here, `b = 2` is added to each element of the 2D array `A`.

---

#### **Broadcasting Between Two Arrays**

Arrays of different shapes can also be broadcast together, as long as their dimensions are compatible according to the broadcasting rule.

```python
>>> import numpy as np
>>> a = np.array([[0.0, 0.0, 0.0], [10.0, 10.0, 10.0], [20.0, 20.0, 20.0], [30.0, 30.0, 30.0]])
>>> b = np.array([1.0, 2.0, 3.0])

>>> print('First array:')
>>> print(a)
First array:
[[ 0.  0.  0.]
 [10. 10. 10.]
 [20. 20. 20.]
 [30. 30. 30.]]

>>> print('\nSecond array:')
>>> print(b)
Second array:
[1. 2. 3.]

>>> print('\nFirst Array + Second Array')
>>> print(a + b)
[[ 1.  2.  3.]
 [12. 12. 13.]
 [23. 22. 23.]
 [34. 32. 33.]]
```

In this case, the 1D array `b` is broadcast across the rows of the 2D array `a` to perform element-wise addition.

---
