---
title: "NumPy - 05 Modifying Arrays"
description: ""
summary: ""
date: 2025-02-14T20:42:37+05:30
lastmod: 2025-02-14T20:42:37+05:30
draft: false
weight: 125
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



NumPy provides several functions to reshape, flatten, and resize arrays, allowing for flexible manipulation of array structures. 

Three important functions: `flatten()`, `reshape()`, and `resize()`.

---

#### 'flatten()' - Converting to One-Dimensional Array

The `flatten()` function collapses a multi-dimensional array into a one-dimensional array. It returns a **copy** of the array, not a view.

```python
>>> arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
>>> arr.flatten()
array([1, 2, 3, 4, 5, 6, 7, 8, 9])
```

- **Note**: The output is a one-dimensional version of the original 2D array.

---

#### 'flatten()' with 'order' Argument

The `flatten()` function has an optional `order` parameter that specifies the order in which elements are read.

- `'C'`: Default **row-major order** (C-style).
- `'F'`: **Column-major order** (Fortran-style).

```python
>>> arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
>>> arr.flatten(order='C')
array([1, 2, 3, 4, 5, 6, 7, 8, 9])

>>> arr.flatten(order='F')
array([1, 4, 7, 2, 5, 8, 3, 6, 9])
```

- **`order='C'`** flattens row by row.
- **`order='F'`** flattens column by column.

---

#### 'reshape()' - Changing the Shape of an Array

The `reshape()` function allows you to change the shape of an array without modifying its data. The total number of elements must remain the same before and after reshaping.

A 1D array reshaped into a 2D array:

```python
>>> import numpy as np
>>> arr = np.arange(10)
>>> arr
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

>>> re = arr.reshape(5, 2)
>>> re
array([[0, 1],
       [2, 3],
       [4, 5],
       [6, 7],
       [8, 9]])

>>> re = arr.reshape(2, 5)
>>> re
array([[0, 1, 2, 3, 4],
       [5, 6, 7, 8, 9]])
```

- The original array `arr` with 10 elements is reshaped into a 2D array of shape `(5, 2)` and `(2, 5)`.

---

#### Reshaping with 3D Arrays

Reshaping arrays into more complex shapes, including 3D arrays:

```python
>>> arr = np.array([[[1, 2, 3, 4], [5, 6, 7, 8]], [[11, 12, 13, 14], [15, 1, 3, 5]]])
>>> re = arr.reshape(4, 4)
>>> re
array([[ 1,  2,  3,  4],
       [ 5,  6,  7,  8],
       [11, 12, 13, 14],
       [15,  1,  3,  5]])

# Using General syntax without
>>> re = np.reshape(arr, (4, 4))
>>> re
array([[ 1,  2,  3,  4],
       [ 5,  6,  7,  8],
       [11, 12, 13, 14],
       [15,  1,  3,  5]])
```

- The array is reshaped from a 3D array into a 2D array `(4, 4)`.

---

#### Reshaping into 3D Arrays

Reshape arrays into 3D arrays by specifying the shape:

`np.reshape(array_name, (n, r, c))`      
n indicates the number of arrays in the resultant array.

```python
>>> arr = np.arange(16)
>>> re = np.reshape(arr, (2, 4, 2))
>>> re
array([[[ 0,  1],
        [ 2,  3],
        [ 4,  5],
        [ 6,  7]],

       [[ 8,  9],
        [10, 11],
        [12, 13],
        [14, 15]]])

>>> re = np.reshape(arr, (1, 4, 4))
>>> re
array([[[ 0,  1,  2,  3],
        [ 4,  5,  6,  7],
        [ 8,  9, 10, 11],
        [12, 13, 14, 15]]])
```

- The shape `(2, 4, 2)` creates a 3D array, while the shape `(1, 4, 4)` results in a 3D array with a single "layer."

---

#### Reshaping into 3D with More Complex Dimensions

```python
>>> arr = np.arange(12)
>>> arr
array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11])

>>> re = np.reshape(arr, (3, 2, 2))
>>> re
array([[[ 0,  1],
        [ 2,  3]],

       [[ 4,  5],
        [ 6,  7]],

       [[ 8,  9],
        [10, 11]]])
```

- The array is reshaped into a 3D array with dimensions `(3, 2, 2)`.

---

#### ' resize() ' - Changing the Shape and Size of an Array

Unlike `reshape()`, which returns a new array, the `resize()` function **modifies the array in place** and does not return anything. 

If the new size is larger, the new elements will be filled with zeros.

```python
>>> arr = np.array([[1, 2, 3], [4, 5, 6]])
>>> arr.resize(3, 3)
>>> arr
array([[1, 2, 3],
       [4, 5, 6],
       [0, 0, 0]])
```

---

#### Resizing to Smaller Sizes

You can resize to smaller dimensions, but this will **truncate** the array:

```python
>>> arr = np.array([[1, 2, 3], [4, 5, 6], [8, 9, 10]])
>>> arr.resize(2, 2)
>>> arr
array([[1, 2],
       [3, 4]])
```

- The array is resized to `(2, 2)` with data removed.

---

#### Resizing to Larger Sizes

Resizing to larger sizes will add zeros to the new positions:

```python
>>> arr = np.array([[1, 2, 3], [4, 5, 6], [8, 9, 10]])
>>> arr.resize(4, 4)
>>> arr
array([[1, 2, 3, 4],
       [0, 0, 0, 0],
       [0, 0, 0, 0],
       [0, 0, 0, 0]])

>>> arr.resize(4, 4)
>>> arr
array([[ 1,  2,  3,  4],
       [ 5,  6,  8,  9],
       [10,  0,  0,  0],
       [ 0,  0,  0,  0]])
```

---

- **`flatten()`**: Returns a one-dimensional copy of the array. You can specify the order of flattening (`C` or `F`).
- **`reshape()`**: Changes the shape of the array without modifying its data, while maintaining the same number of elements.
- **`resize()`**: Changes the shape and size of the array **in place**, filling any missing elements with zeros.

---


