---
title: "NumPy - 08 Mathematical Operations"
description: ""
summary: ""
date: 2025-02-14T20:43:30+05:30
lastmod: 2025-02-14T20:43:30+05:30
draft: false
weight: 128
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Mathematical operations can be applied to arrays element-wise, using functions from the math module or direct arithmetic operations.

#### Basic Arithmetic Operations on Arrays

```python
>>> import numpy as np
>>> arr = np.array([[1, 2, 3], [4, 5, 6], [8, 9, 10]])
>>> arr = arr + 5
>>> arr
array([[ 6,  7,  8],
       [ 9, 10, 11],
       [13, 14, 15]])

>>> arr = arr - 4
>>> arr
array([[ 2,  3,  4],
       [ 5,  6,  7],
       [ 9, 10, 11]])

>>> arr = arr * 2
>>> arr
array([[ 4,  6,  8],
       [10, 12, 14],
       [18, 20, 22]])

>>> arr = arr / 2
>>> arr
array([[ 2.,  3.,  4.],
       [ 5.,  6.,  7.],
       [ 9., 10., 11.]])
```

- These operations (addition, subtraction, multiplication, and division) are element-wise, meaning they are applied to each corresponding element of the array.

---

#### Operations Between Two Arrays

Arrays of the same shape can undergo operations like addition, subtraction, multiplication, and division:

```python
>>> arr1 = np.array([10, 20, 30.5, -40])
>>> arr2 = np.array([1, 2, 3, 4])

>>> arr3 = arr1 - arr2
>>> arr3
array([  9. ,  18. ,  27.5, -44. ])

>>> arr3 = arr1 + arr2
>>> arr3
array([ 11. ,  22. ,  33.5, -36. ])

>>> arr3 = arr1 * arr2
>>> arr3
array([ 10. ,  40. ,  91.5, -160. ])
```

- Operations like `arr1 + arr2` perform element-wise addition, subtracting, or multiplying corresponding elements.

---

#### Vectorized Operations

These operations are known as **vectorized operations** because the entire array (or vector) is processed just like a variable, leading to more efficient and cleaner code. They are much faster compared to traditional looping methods.

```python
>>> arr = np.array([[1, 2, 3], [4, 5, 6], [8, 9, 10]])
>>> arr2 = np.array([[1, 2, 3], [4, 5, 6], [8, 9, 10]])

>>> arr3 = arr * arr2
>>> arr3
array([[  1,   4,   9],
       [ 16,  25,  36],
       [ 64,  81, 100]])
```

- In this case, each element is multiplied by the corresponding element in the other array.

---

### Mathematical and Statistical Methods

#### Aggregation Functions

Aggregation functions in NumPy are used to compute statistics about the entire array or along a specific axis. Common aggregation functions include `sum`, `mean`, `std` (standard deviation), and `min`/`max`.

|**Method**|**Description**|
|---|---|
|`sum`|Sum of all elements or along a specific axis.|
|`mean`|Compute the arithmetic mean.|
|`std`, `var`|Standard deviation and variance.|
|`min`, `max`|Minimum and maximum values.|
|`argmin`, `argmax`|Indices of the minimum and maximum elements.|
|`cumsum`|Cumulative sum of elements.|
|`cumprod`|Cumulative product of elements.|
|`median`|Median value of the array.|
|`percentile`|Compute the nth percentile.|
|`ptp`|Peak-to-peak (difference between max and min).|
|`skew`|Skewness (measure of asymmetry).|
|`kurtosis`|Kurtosis (measure of "tailedness").|

These methods allow for efficient statistical analysis of arrays.

---

#### Statistical Methods for One-Dimensional Arrays

For a 1D array, you can compute statistics like sum, mean, max, and min directly:

```python
>>> arr = np.array([1, 4, 6, 8, 9])
>>> np.sum(arr)
28

>>> np.mean(arr)
5.6

>>> np.max(arr)
9

>>> np.min(arr)
1
```

---

#### Statistical Methods for Two-Dimensional Arrays

For 2D arrays, you can calculate statistics along specific axes. 
- `axis=0` refers to columns (vertical axis).
- `axis=1` refers to rows (horizontal axis).

Functions like mean and sum take an optional `axis` argument that computes statistics over given axis resulting in an array with one less dimension.

for Two dimensional array can be specified to sum along the rows and columns
`np.sum(arr, axis=0)`   Sum along the columns
`np.sum(arr. axis=1)` sum along the rows
`np.sum(arr)` will sum everything into one number


```python
>>> arr = np.array([[1, 2, 3], [4, 5, 6], [8, 9, 10]])

>>> np.sum(arr)
48

>>> np.sum(arr, axis=0)  # Sum along columns
array([13, 16, 19])

>>> np.sum(arr, axis=1)  # Sum along rows
array([ 6, 15, 27])

>>> np.mean(arr, axis=0)  # Mean along columns
array([4.33333333, 5.33333333, 6.33333333])

>>> np.mean(arr, axis=1)  # Mean along rows
array([2., 5., 9.])
```

- These methods help you summarize the array by either row or column.

```python
>>> arr = np.arange(15).reshape((3,5))
>>> arr
array([[ 0,  1,  2,  3,  4],
       [ 5,  6,  7,  8,  9],
       [10, 11, 12, 13, 14]])

>>> arr.mean(axis=1)
array([ 2.,  7., 12.])

>>> arr.sum(axis=1)
array([10, 35, 60])

```

---

#### Cumulative Sum and Product

The `cumsum()` and `cumprod()` methods compute cumulative sums and products, respectively. These do not aggregate the data, but rather return an array of intermediate results.

```python
>>> arr = np.arange(4, 15)
>>> arr
array([ 4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14])

>>> arr.cumsum()
array([ 4,  9, 15, 22, 30, 39, 49, 60, 72, 85, 99])

>>> arr.cumprod()
array([          4,          20,         120,         840,        6720,
             60480,      604800,     6652800,    79833600,  1037836800,
       14529715200])
```

- For multi-dimensional arrays, the cumulative functions can be applied along specified axes:

```python
>>> arr = np.arange(15).reshape((3, 5))

>>> arr.cumsum(axis=0)
array([[ 0,  1,  2,  3,  4],
       [ 5,  7,  9, 11, 13],
       [15, 18, 21, 24, 27]])

>>> arr.cumsum(axis=1)
array([[ 0,  1,  3,  6, 10],
       [ 5, 11, 18, 26, 35],
       [10, 21, 33, 46, 60]])
```

```python
>>> arr.cumprod(axis=0)
array([[  0,   1,   2,   3,   4],
       [  0,   6,  14,  24,  36],
       [  0,  66, 168, 312, 504]])

>>> arr.cumprod(axis=1)
array([[     0,      0,      0,      0,      0],
       [     5,     30,    210,   1680,  15120],
       [    10,    110,   1320,  17160, 240240]])

```
---

#### Finding Maximum and Minimum Indices

To find the indices of the maximum and minimum elements in an array:

```python
>>> arr = np.array([1, 4, 6, 8, 9])

>>> np.argmax(arr)
4  # Index of the maximum element

>>> np.argmin(arr)
0  # Index of the minimum element
```

---

#### Element-wise Comparison Between Two Arrays

Use `np.maximum()` and `np.minimum()` to compare two arrays element-wise and return the maximum or minimum at each corresponding position.

```python
>>> a = np.array([1, 4, 6, 8, 9])
>>> b = np.array([5, 7, 3, 9, 22])

>>> np.maximum(a, b)
array([ 5,  7,  6,  9, 22])

>>> np.minimum(a, b)
array([1, 4, 3, 8, 9])
```

- These functions return a new array containing the maximum or minimum values for each element.

---


- **Vectorized Operations**: Element-wise operations are faster and cleaner.
- **Statistical Methods**: NumPy offers a wide range of aggregation functions like `sum()`, `mean()`, `std()`, and `min()`, allowing you to perform efficient statistical analysis.
- **Cumulative Functions**: `cumsum()` and `cumprod()` provide intermediate results in cumulative calculations.
- **Comparison Functions**: Use `np.maximum()` and `np.minimum()` to perform element-wise comparison between arrays.

