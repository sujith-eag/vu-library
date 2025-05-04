---
title: "NumPy - 06 Transposing Arrays"
description: ""
summary: ""
date: 2025-02-14T20:42:53+05:30
lastmod: 2025-02-14T20:42:53+05:30
draft: false
weight: 126
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Transposing is a special form of reshaping that returns a view of the underlying data without making a copy. Transposing an array swaps its rows and columns.

Arrays can be transposed using the `.T` attribute or the `transpose()` method.

---

#### ' arr.T ' - Using the ' .T ' Attribute for Transposing

The `.T` attribute returns the transpose of an array, swapping its rows and columns.

```python
>>> import numpy as np
>>> arr = np.array([[2, 3, 4, 5], [5, 2, 4, 5]])
>>> arr.T
array([[2, 5],
       [3, 2],
       [4, 4],
       [5, 5]])
```

- The original array's rows and columns are swapped.

---

#### Transposing a 2D Array

```python
>>> arr = np.arange(15).reshape((3, 5))
>>> arr
array([[ 0,  1,  2,  3,  4],
       [ 5,  6,  7,  8,  9],
       [10, 11, 12, 13, 14]])

>>> arr.T
array([[ 0,  5, 10],
       [ 1,  6, 11],
       [ 2,  7, 12],
       [ 3,  8, 13],
       [ 4,  9, 14]])
```

---

#### Matrix Multiplication using Transpose

Matrix multiplication can be performed using the transposed array with `np.dot()` or the `@` infix operator.

```python
>>> arr
array([[ 0,  1,  2,  3,  4],
       [ 5,  6,  7,  8,  9],
       [10, 11, 12, 13, 14]])
    
>>> np.dot(arr.T, arr)
array([[125, 140, 155, 170, 185],
       [140, 158, 176, 194, 212],
       [155, 176, 197, 218, 239],
       [170, 194, 218, 242, 266],
       [185, 212, 239, 266, 293]])

>>> arr.T @ arr
array([[125, 140, 155, 170, 185],
       [140, 158, 176, 194, 212],
       [155, 176, 197, 218, 239],
       [170, 194, 218, 242, 266],
       [185, 212, 239, 266, 293]])
```

- Both `np.dot(arr.T, arr)` and `arr.T @ arr` perform the same matrix multiplication.

---

### ' swapaxes() ' - Swapping Array Axes

The `swapaxes()` method allows you to swap any two axes of an array. This rearranges the data and returns a view on the data without copying.

```python
>>> arr = np.arange(24).reshape((6, 4))
>>> arr
array([[ 0,  1,  2,  3],
       [ 4,  5,  6,  7],
       [ 8,  9, 10, 11],
       [12, 13, 14, 15],
       [16, 17, 18, 19],
       [20, 21, 22, 23]])

>>> arr.swapaxes(0, 1)
array([[ 0,  4,  8, 12, 16, 20],
       [ 1,  5,  9, 13, 17, 21],
       [ 2,  6, 10, 14, 18, 22],
       [ 3,  7, 11, 15, 19, 23]])
```

- The `swapaxes(0, 1)` swaps the first and second axes of the array.

---

#### Swapping Axes Without Changing the Original Array

```python
>>> arr
array([[ 0,  1,  2,  3],
       [ 4,  5,  6,  7],
       [ 8,  9, 10, 11],
       [12, 13, 14, 15],
       [16, 17, 18, 19],
       [20, 21, 22, 23]])

>>> arr.T
array([[ 0,  4,  8, 12, 16, 20],
       [ 1,  5,  9, 13, 17, 21],
       [ 2,  6, 10, 14, 18, 22],
       [ 3,  7, 11, 15, 19, 23]])
```

- After calling `.T`, the result is the same as after using `swapaxes(0, 1)`.

---

### Summary of Key Functions

- **`arr.T`**: Returns the transpose of the array, swapping rows and columns.
- **`np.dot()`**: Performs matrix multiplication using the transpose.
- **`@` operator**: Another way to perform matrix multiplication with the transpose.
- **`swapaxes()`**: Swaps two axes of the array, returning a view without copying data.
