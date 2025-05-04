---
title: "NumPy - 09 Unique, Set Logic, Linear Algebra"
description: ""
summary: ""
date: 2025-02-14T20:43:52+05:30
lastmod: 2025-02-14T20:43:52+05:30
draft: false
weight: 129
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


### Unique and Set Logic in NumPy

#### Array Set Operations

|**Method**|**Description**|
|---|---|
|`unique(x)`|Compute the sorted, unique elements in array `x`.|
|`intersect1d(x, y)`|Compute the sorted, common elements in arrays `x` and `y`.|
|`union1d(x, y)`|Compute the sorted union of elements from arrays `x` and `y`.|
|`in1d(x, y)`|Compute a Boolean array indicating whether each element of `x` is contained in `y`.|
|`setdiff1d(x, y)`|Set difference; elements in `x` that are not in `y`.|
|`setxor1d(x, y)`|Set symmetric difference; elements that are in either `x` or `y`, but not in both.|

___
#### 'numpy.unique'

The `numpy.unique()` function is the most commonly used method for extracting unique values from a 1D array. It sorts the array and removes any duplicates, returning the sorted, unique elements as an ndarray.

```python
>>> import numpy as np
>>> arr = np.array([3, 1, 2, 3, 2, 4, 5, 1])
>>> unique_values = np.unique(arr)
>>> unique_values
Array([1 2 3 4 5])
```

This is similar to Python’s `sorted( set(...) )`, but `numpy.unique()` is faster and returns an ndarray rather than a Python list.

---

#### 'numpy.in1d'

The `numpy.in1d()` function is used to test whether each element of one array (`x`) is contained in another array (`y`). It returns a Boolean array, where each element corresponds to whether the corresponding element of `x` is present in `y`.

```python
>>> import numpy as np
>>> arr1 = np.array([3, 1, 4, 2])
>>> arr2 = np.array([1, 2, 5])
>>> membership = np.in1d(arr1, arr2)
>>> membership
[ True  True False  True]
```

In this example, `numpy.in1d()` checks each element of `arr1` against `arr2`. The resulting Boolean array `[True, True, False, True]` indicates that `3` and `4` are **not** in `arr2`, while `1` and `2` are present.


---

### Linear Algebra in NumPy

Linear algebra operations, such as matrix multiplication, decompositions, determinants, and other square matrix math, are crucial in many array libraries. When multiplying two 2D arrays with `*`, it performs an element-wise product. For matrix multiplication, you need to use the `dot` function. This function is available both as a method on arrays and as a function in the NumPy namespace.

#### Matrix Operations

|**Function**|**Description**|
|---|---|
|`diag`|Return the diagonal (or off-diagonal) elements of a square matrix as a 1D array, or convert a 1D array into a square matrix with zeros on the off-diagonal.|
|`dot`|Perform matrix multiplication. Equivalent to `np.dot(x, y)` or `x.dot(y)`.|
|`trace`|Compute the sum of the diagonal elements of a matrix.|
|`det`|Compute the determinant of a square matrix.|
|`eig`|Compute the eigenvalues and eigenvectors of a square matrix.|
|`inv`|Compute the inverse of a square matrix.|
|`pinv`|Compute the Moore-Penrose pseudoinverse of a matrix.|
|`qr`|Compute the QR decomposition of a matrix.|
|`svd`|Compute the Singular Value Decomposition (SVD) of a matrix.|
|`solve`|Solve the linear system `Ax = b` for `x`, where `A` is a square matrix.|
|`lstsq`|Compute the least-squares solution to the linear system `Ax = b`.|

These functions enable advanced matrix operations, making NumPy an essential tool for linear algebra and numerical analysis.
