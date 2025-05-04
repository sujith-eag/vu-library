---
title: "NumPy - 10 Array Comparison"
description: ""
summary: ""
date: 2025-02-14T20:44:20+05:30
lastmod: 2025-02-14T20:44:20+05:30
draft: false
weight: 130
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




In NumPy, you can compare arrays of the same shape using operators such as `<`, `>`, `>=`, `<=`, `==`, and `!=`. These operators compare the corresponding elements of the arrays, returning a new array with boolean values (`True` or `False`).

```python
>>> arr1 = np.array([10, 20, 30.5, -40])
>>> arr2 = np.array([1, 2, 3, 4])

>>> c = arr1 == arr2
>>> print(c)
[False False False False]

>>> d = arr1 != arr2
>>> print(d)
[ True  True  True  True]

>>> e = arr1 < arr2
>>> print(e)
[False False False  True]

>>> f = arr1 > arr2
>>> print(f)
[ True  True  True False]
```

Boolean values are coerced to `1` (True) and `0` (False), which allows for the use of `sum()` to count `True` values in a Boolean array:

```python
>>> arr = np.array([[0, 1, 2, 3, 4],
...                 [5, 6, 7, 8, 9],
...                 [10, 11, 12, 13, 14]])

>>> (arr > 0).sum()  # number of positives
14

>>> (arr < 0).sum()  # number of negatives
0

>>> (arr <= 0).sum()  # number of zeros or negatives
1
```

### Using  'any()' &  'all()'

- `any()` checks if at least one value in the array is `True`.
- `all()` checks if all values are `True`.

These functions are particularly useful for working with boolean arrays:

```python
>>> d = arr1 != arr2
>>> d
array([ True,  True,  True,  True])

>>> np.any(d)  # Checks if any element is True
True

>>> np.all(d)  # Checks if all elements are True
True

>>> print(c)
[False False False False]
>>> print(any(c))
False
```

### Logical Operations: 

`logical_and()`, `logical_or()`, and `logical_not()`

These functions perform element-wise logical operations on arrays:

- `logical_and()`: Returns `True` if both conditions are `True` for each element.
- `logical_or()`: Returns `True` if at least one condition is `True`.
- `logical_not()`: Returns the inverse (`True` becomes `False`, and vice versa).

```python
>>> import numpy as np
>>> a = np.array([1, 2, 3])
>>> b = np.array([3, 2, 1])

>>> c = np.logical_and(a > 0, a < 4)
>>> print(c)
[ True  True  True]

>>> d = np.logical_and(a < b, a == 2)
>>> print(d)
[False False False]

>>> e = np.logical_or(a < b, b == 2)
>>> print(e)
[ True  True False]

>>> d = np.logical_and(a < b, a = 2)  # Error due to invalid syntax
```

### Conditional Array Operations: 'where()'

The `np.where()` function can be used to create a new array based on a given condition. If the condition is true, it takes one value (expression1), otherwise another value (expression2).

```python
>>> a = np.array([10, 21, 30, 41, 50])
>>> c = np.where(a % 2, a, 0)  # Replace even numbers with 0
>>> print(c)
[ 0 21  0 41  0]

>>> arr = np.array([1, 2, 3, 4, 5, 6, 7, 8])
>>> c = np.where(arr % 2 == 0, arr, 0)  # Replace odd numbers with 0
>>> print(c)
[0 2 0 4 0 6 0 8]

>>> arr2 = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
>>> c = np.where(arr2 % 2 == 0, arr2, 0)  # Replace odd numbers with 0
>>> print(c)
[[0 2 0 4]
 [0 6 0 8]]
```

You can also use `np.where()` to compare two arrays element-wise and choose the larger value:

```python
>>> arr1 = np.array([[2, 3, 4, 5], [10, 11, 12, 3]])
>>> arr2 = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])

>>> lar = np.where(arr1 > arr2, arr1, arr2)  # Select the larger of two arrays
>>> print(lar)
[[ 2  3  4  5]
 [10 11 12  8]]
```

### Replacing Values with 'where()'

You can replace values based on a condition, such as replacing all positive values with `2` and negative values with `-2`:

```python
>>> np.where(arr > 0, 2, -2)  # Replace positive values with 2, negatives with -2
```

You can also replace all positive values with `2` while leaving the negative ones unchanged:

```python
>>> np.where(arr > 0, 2, arr)  # Replace positive values with 2
```

___

### Finding Non-Zero Elements: 'nonzero()'

The `nonzero()` function returns the indices of elements that are non-zero:

```python
>>> arr = np.array([1, 2, 3, 4, 5, 6, 7, 8])
>>> d = np.nonzero(arr)
>>> print(d)
(array([0, 1, 2, 3, 4, 5, 6, 7]),)

>>> arr = np.array([2, 4, 5, 0, 6, 0, 20, 0])
>>> d = np.nonzero(arr)
>>> print(d)
(array([0, 1, 2, 4, 6]),)
```

For multi-dimensional arrays, `np.nonzero()` returns a tuple of indices:

```python
>>> arr1 = np.array([[2, 0, 4, 5], [10, 11, 0, 3]])
>>> c = np.nonzero(arr1)
>>> print(c)
(array([0, 0, 0, 1, 1, 1]), array([0, 2, 3, 0, 1, 3]))


# the indexed nonzero values
[ [ 2,  0,  4,  5],
  [10, 11,  0,  3]   ]

```

The first non-zero element is at `(0, 0)` (value `2`).
The tuple consists of two arrays:
1. The first array contains the row indices of non-zero elements.
2. The second array contains the column indices of those non-zero elements.

To retrieve the non-zero elements:

```python
>>> arr = np.array([2,4,5,0,6,0,20,0])
>>> c = np.nonzero(arr)

>>> print(c)
(array([0, 1, 2, 4, 6]),)

>>> print(arr[c])  # c passed to array
[ 2  4  5  6 20]

# another way using loops
>>> for i in c:
...     print(i)
...
[0 1 2 4 6]
```

___


