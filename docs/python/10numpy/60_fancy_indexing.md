---
title: "NumPy - 13 Fancy Indexing"
description: ""
summary: ""
date: 2025-02-14T20:45:11+05:30
lastmod: 2025-02-14T20:45:11+05:30
draft: false
weight: 133
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Fancy indexing refers to using integer arrays or lists to index and select specific rows, columns, or elements in a NumPy array. This can be done to select a subset of rows in a particular order or create complex indexing patterns.

---

#### Creating and Indexing a Basic Array

An `8 x 4` array initialized with zeros 

```python
>>> arr = np.zeros((8, 4))
>>> for i in range(8):
...     arr[i] = i
...

>>> arr
array([[0., 0., 0., 0.],
       [1., 1., 1., 1.],
       [2., 2., 2., 2.],
       [3., 3., 3., 3.],
       [4., 4., 4., 4.],
       [5., 5., 5., 5.],
       [6., 6., 6., 6.],
       [7., 7., 7., 7.]])
```

Rows can be selected in any order by passing a list or ndarray of indices to the array:
```python
>>> arr[[4, 3, 0, 6]]
array([[4., 4., 4., 4.],
       [3., 3., 3., 3.],
       [0., 0., 0., 0.],
       [6., 6., 6., 6.]])
```

- The rows are selected in the specified order: `4, 3, 0, 6`.

Using **negative indexing** to access rows starting from the end:

```python
>>> arr[[-3, -5, -7]]
array([[5., 5., 5., 5.],
       [3., 3., 3., 3.],
       [1., 1., 1., 1.]])
```

- Negative indices count from the last row backwards.

---

### Fancy Indexing with Multiple Arrays

Passing multiple index arrays selects elements in a one-dimensional array corresponding to each tuple of indices.

```python
>>> arr = np.arange(32).reshape((8, 4))
>>> arr
array([[ 0,  1,  2,  3],
       [ 4,  5,  6,  7],
       [ 8,  9, 10, 11],
       [12, 13, 14, 15],
       [16, 17, 18, 19],
       [20, 21, 22, 23],
       [24, 25, 26, 27],
       [28, 29, 30, 31]])

>>> arr[[1], [0]]
array([4])

>>> arr[[1, 5], [0, 3]]
array([ 4, 23])

>>> arr[[1, 5, 7, 2], [0, 3, 1, 2]]
array([ 4, 23, 29, 10])
```

- `4` is from position `(1, 0)`,
- `23` is from position `(5, 3)`,
- `29` is from position `(7, 1)`,
- `10` is from position `(2, 2)`.

---

### Selecting a Rectangular Region

Selecting a **rectangular region** of a matrix by specifying rows and then columns:

```python
>>> arr
array([[ 0,  1,  2,  3],
       [ 4,  5,  6,  7],
       [ 8,  9, 10, 11],
       [12, 13, 14, 15],
       [16, 17, 18, 19],
       [20, 21, 22, 23],
       [24, 25, 26, 27],
       [28, 29, 30, 31]])

>>> arr[ [1,5,7,2]]  [ : , [0,3,1,2] ] 
array([[ 4,  7,  5,  6],
       [20, 23, 21, 22],
       [28, 31, 29, 30],
       [ 8, 11,  9, 10]])
```

- The first index array `[[1, 5, 7, 2]]` selects the rows.
- The second slice `[:, ]` selects all columns,
- The third index array `[0, 3, 1, 2]` selects specific columns for the output.

---

### Fancy Indexing and Data Copying

**Important**: Fancy indexing always returns a **copy** of the data, not a view. This means that changes made to the result of a fancy indexing operation will not affect the original array. However, if you assign values with fancy indexing, the values in the original array will be modified.

```python
>>> arr[[1, 5, 7, 2], :] = 99
>>> arr
array([[ 0,  1,  2,  3],
       [99, 99, 99, 99],
       [ 8,  9, 10, 11],
       [12, 13, 14, 15],
       [16, 17, 18, 19],
       [99, 99, 99, 99],
       [24, 25, 26, 27],
       [99, 99, 99, 99]])
```

- In this case, the rows selected by `[[1, 5, 7, 2], :]` are replaced with `99`.

---

### Key Points About Fancy Indexing

- Fancy indexing allows you to select specific rows, columns, or individual elements using integer arrays or lists.
- **Unlike slicing**, fancy indexing always creates a **new array**. The original array is not modified unless explicitly assigned.
- **Negative indexing** works similarly to standard Python negative indexing, allowing you to count from the end of the array.
- **Multiple index arrays** can be used to select individual elements from different locations in the array.

---

