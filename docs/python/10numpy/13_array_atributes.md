---
title: "NumPy - 03 Array Atributes"
description: ""
summary: ""
date: 2025-02-14T20:41:41+05:30
lastmod: 2025-02-14T20:41:41+05:30
draft: false
weight: 123
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Numpy's array class is called `ndarray`. It is known by the alias name `array`.     
There is another `array` class in Python, which is different from Numpy's `array` class.

---

### 'ndim' Attribute

The `ndim` attribute represents the number of dimensions or axes (rank) of the array.

```python
>>> arr = np.array([1, 2, 3, 4])
>>> arr.ndim
1

>>> arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [11, 12, 13, 14]])
>>> arr.ndim
2

>>> arr = np.array([[[1, 2, 3, 4], [5, 6, 7, 8]], [[11, 12, 13, 14], [15, 1, 3, 5]]])
>>> arr.ndim
3
```

---

### 'shape' Attribute

The `shape` attribute gives the shape of an array (rows and columns).  
The shape is a tuple listing the number of elements along each dimension (axis).

For a 1D array, the shape gives the number of elements.

For a 2D array, it specifies the number of rows and columns.

```python
>>> arr = np.array([1, 2, 3, 4])
>>> arr.shape
(4,)

>>> arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [11, 12, 13, 14]])
>>> arr.shape
(3, 4)
```

For a 3D array, it represents the Depth, rows, and columns.

```python
>>> arr = np.array([[[1, 2, 3, 4], [5, 6, 7, 8]], [[11, 12, 13, 14], [15, 1, 3, 5]]])
>>> arr
array([[[ 1,  2,  3,  4],
        [ 5,  6,  7,  8]],

       [[11, 12, 13, 14],
        [15,  1,  3,  5]]])

>>> arr.shape
(2, 2, 4)  # 2 matrices, with 2 rows and 4 columns

>>> arr.size
16
```

---

### 'size', 'itemsize' and 'nbytes' Attributes

- `itemsize`: Returns the memory size of the array elements in bytes.
- `nbytes`: Returns the total size in bytes of all items, i.e., the total memory usage of the entire array.
- `size` attribute gives the total number of elements in the array. (For an array with 3 rows and 4 columns, it will return 12.)

```python
>>> arr = np.array([[[1, 2, 3, 4], [5, 6, 7, 8]], [[11, 12, 13, 14], [15, 1, 3, 5]]], int)
>>> arr.itemsize
8

>>> arr = np.array([[[1, 2, 3, 4], [5, 6, 7, 8]], [[11, 12, 13, 14], [15, 1, 3, 5]]], float)
>>> arr.itemsize
8
```

---

### 'dtype' Attribute

The `dtype` attribute returns the data type of the elements in the array (e.g., `int64`, `float32`, etc.).

Data type objects (`dtype`) are instances of the `numpy.dtype` class.  
They describe how the bytes in the fixed-size block of memory corresponding to an array item should be interpreted.

```python
>>> arr = np.array([0, 4, 2])
>>> arr1 = np.array([1.2, 4.5])

>>> arr.dtype
dtype('int64')

>>> arr1.dtype
dtype('float64')
```

---

### Hierarchy of NumPy Data Types

NumPy follows a type promotion hierarchy when handling mixed data types.  
If an array contains different types, NumPy automatically converts (upcasts) to the most flexible data type that can hold all values without data loss.  
When mixing different data types in an array, NumPy promotes to the highest precision type.

NumPy ranks data types as:  
**bool → int → float → complex → string → object**

If you want to keep the data numerical, avoid including a string in the list:

```python
>>> sample_array_1 = np.array([[0, 1, 2]])  # All integers
>>> sample_array_1.dtype
dtype('int32')  # or dtype('int64')
```

If you intentionally want a mixed array, you can use `dtype=object`:

```python
>>> sample_array_1 = np.array([[0, 'a', 2]], dtype=object)
>>> sample_array_1.dtype
dtype('object')  # Can store mixed types
```

This keeps numbers as integers and strings as strings inside a NumPy array, but it won't allow efficient mathematical operations.

---

### 'astype()' Method

The `astype()` method converts an array to a different data type.

```python
>>> arr = np.array([1, 2, 3, 4, 5])
>>> arr.dtype
dtype('int64')

>>> float_arr = arr.astype(np.float64)
>>> float_arr
array([1., 2., 3., 4., 5.])

>>> float_arr.dtype
dtype('float64')
```

Integers were cast to floating-point. If you cast some floating-point numbers to an integer data type, the decimal part will be truncated:

```python
>>> arr = np.array([3.7, -1.2, -2.6, 0.5, 12.9, 10.1])
>>> arr
array([ 3.7, -1.2, -2.6,  0.5, 12.9, 10.1])

>>> arr.astype(np.int32)
array([ 3, -1, -2,  0, 12, 10], dtype=int32)
```

If you have an array of strings representing numbers, you can use `astype()` to convert them to numeric form:

```python
>>> numeric_strings = np.array(["1.25", "-9.6", "42"], dtype=np.string_)
>>> numeric_strings.astype(float)
array([ 1.25, -9.6 , 42. ])
```

---

