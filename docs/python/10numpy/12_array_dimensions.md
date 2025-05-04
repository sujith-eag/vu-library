---
title: "NumPy - 02 Dimensions of an Array"
description: ""
summary: ""
date: 2025-02-14T20:41:26+05:30
lastmod: 2025-02-14T20:41:26+05:30
draft: false
weight: 122
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


### **Dimensions of NumPy Arrays**

In NumPy, the **dimensions** of an array represent the number of axes or "directions" in which data is organized. The arrangement of elements can be described using rows (horizontal) and columns (vertical).

____

#### **0D Array (Scalar)**

An array with only a single element is called a **0D array**. This is equivalent to a scalar value in mathematics.

```python
>>> import numpy as np
>>> arr = np.array([4])
>>> arr
array([4])
```

Here, `arr` is a scalar (0-dimensional), containing just one value.

#### **1D Array (Vector)**

An array with only one row or one column is called a **1D array**. Essentially, this is an array of **0D arrays**.

1D arrays are used to represent simple lists of numbers, such as:

```python
>>> arr = np.array([1, 2, 3, 4])
>>> arr
array([1, 2, 3, 4])
```

It has a single dimension (i.e., one row or one column), and each element is a scalar (0D).
1D arrays can also be represented as column vectors:

____

### Multi-Dimensional Arrays

#### **2D Array (Matrix)**

A **2D array** is essentially a matrix. It has both rows and columns, and each element in the array is itself a **1D array** (vector).

```python
>>> arr = np.array([[1, 2, 3], [4, 5, 6]])
>>> arr
array([[1, 2, 3],
       [4, 5, 6]])
# 2 rows, 3 columns
```

```python
>>> arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [11, 12, 13, 14]])
>>> arr
array([[ 1,  2,  3,  4],
       [ 5,  6,  7,  8],
       [11, 12, 13, 14]])
# 3 rows and 4 columns
```

#### **3D Array (Tensor)**

A **3D array** is essentially an array of 2D arrays (matrix). It is used to represent higher-dimensional data.

A 3D array can hold multiple matrices:
```python
>>> arr = np.array([[[1, 2, 3, 4], [5, 6, 7, 8]], [[11, 12, 13, 14], [15, 16, 17, 18]]])
>>> arr
array([[[ 1,  2,  3,  4],
         [ 5,  6,  7,  8]],

        [[11, 12, 13, 14],
         [15, 16, 17, 18]]])
# two 2D arrays, and each 2D array has 2 rows and 4 columns.
```


---
#### **Inhomogeneous Arrays**

The number of rows and columns must match when creating multidimensional arrays. If the arrays are not consistent (i.e., if the number of elements in each row or column differs), NumPy will raise an error.

```python
>>> arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [11, 12]])

ValueError: setting an array element with a sequence. The requested array has an inhomogeneous shape after 1 dimensions. The detected shape was (3,) + inhomogeneous part.
```
In this case, the third row does not have the same number of elements as the first two rows, causing a mismatch.

```python
>>> arr = np.array([[[1, 2, 3, 4], [5, 6, 7, 8]], [[11, 12, 13, 14]]])

ValueError: setting an array element with a sequence. The requested array has an inhomogeneous shape after 1 dimensions. The detected shape was (2,) + inhomogeneous part.
```

Here, the second "slice" (or 2D array) does not have the same dimensions as the first slice, resulting in a ValueError.

---

