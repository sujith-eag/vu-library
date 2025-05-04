---
title: "NumPy - 07 Array Indexing and Slicing"
description: ""
summary: ""
date: 2025-02-14T20:43:12+05:30
lastmod: 2025-02-14T20:43:12+05:30
draft: false
weight: 127
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




### Basic Indexing

Indexing refers to the location of elements in an array. Indexing starts from 0 and goes up to `n-1`, where `n` is the number of elements. You can access elements like `arr[0]`, `arr[1]`, `arr[n-1]`. Negative indexing is also possible.

```python
>>> a = np.arange(10, 16)
>>> i = 0
>>> while(i < len(a)):
...     print(a[i])
...     i += 1
... 
10
11
12
13
14
15

>>> for j in range(len(a)):
...     print(a[j])
... 
10
11
12
13
14
15

>>> a = np.arange(10, 50)
>>> b = a[::5]
>>> for i in range(len(b)):
...     print(a[i], end=', ') 
... 
10, 11, 12, 13, 14, 15, 16, 17,
```

---

### Basic Slicing

Slicing is used to extract a range of elements from an array.

The general syntax is:  
`arrayname[start:stop:stepsize]`

- The default value for `start` is 0.
- The default value for `stop` is the number of elements.
- The default value for `stepsize` is 1.

```python
>>> arr = np.array([4, 5, 6, 7, 9, 1, 2])

>>> arr[::]
array([4, 5, 6, 7, 9, 1, 2])

>>> arr[1:4]
array([5, 6, 7])

>>> arr[1:4:2]
array([5, 7])

>>> arr[1::2]
array([5, 7, 1])

>>> arr[1::]
array([5, 6, 7, 9, 1, 2])

>>> arr[1::-1]
array([5, 4])  # Went in reverse order

>>> arr[:0:-1]  # Stops before 0
array([2, 1, 9, 7, 6, 5])

>>> arr[::-1]  # Reverses the entire array
array([2, 1, 9, 7, 6, 5, 4])

>>> arr[-1:-4:-1]
array([2, 1, 9])
```

---

### Slices are Views

An important distinction from Python’s built-in lists is that array slices are **views** on the original array. This means that the data is not copied, and any modifications to the slice will be reflected in the original array.

```python
>>> arr = np.arange(10)
>>> arr
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

>>> arr[5:8] = 12
>>> arr
array([ 0,  1,  2,  3,  4, 12, 12, 12,  8,  9])
```

If you assign a scalar value to a slice, as in `arr[5:8] = 12`, the value is broadcasted to the entire selection.

```python
>>> arr
array([ 0,  1,  2,  3,  4, 12, 12, 12,  8,  9])

>>> arr_slice = arr[5:8]
>>> arr_slice
array([12, 12, 12])

>>> arr_slice[1] = 12345
>>> arr
array([    0,     1,     2,     3,     4,    12, 12345,    12,     8,
           9])

>>> arr_slice[:] = 640
>>> arr
array([  0,   1,   2,   3,   4, 640, 640, 640,   8,   9])
```

When the values in `arr_slice` are changed, the mutations are reflected in the original array `arr`.

If you want a copy of a slice of an ndarray instead of a view, you need to explicitly copy the array, like this: `arr[5:8].copy()`.

---

### Indexing in Multidimensional Arrays

To access elements from 2-D arrays, you use comma-separated integers representing the dimension and the index of the element.

Think of 2-D arrays as a table with rows and columns, where the row index represents the dimension, and the column index represents the element's position in that row.

You can access individual elements of a 2D array by specifying the row and column indices, either using `[]` or a comma-separated format.

```python
>>> arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])

>>> print(arr[0])
[1 2 3 4]

>>> print(arr[0][0])
1

>>> print(arr[0, 0])
1
```

Looping through rows and elements within a 2D array.

```python
>>> arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])

# Seeing the Length of Rows and Columns
>>> print(len(arr))  # Number of rows
2
>>> print(len(arr[0]))  # Number of columns in the first row
4

# Accessing each row
>>> for i in range(len(arr)):
...     print(arr[i])
... 
[1 2 3 4]
[5 6 7 8]

# Accessing each element
>>> for i in range(len(arr)):
...     for j in range(len(arr[i])):
...             print(arr[i][j], end=' ')
...          # print(arr[i, j], end=' ')
1 2 3 4 5 6 7 8
```

---

### Indexing in 3D Arrays

To access elements in a 3D array, multiple indices are used to specify the row, column, and depth.

```python
>>> arr = np.array([[[1, 2, 3, 4], [5, 6, 7, 8]], [[11, 12, 13, 14], [15, 1, 3, 5]]])

>>> arr
array([[[ 1,  2,  3,  4],
        [ 5,  6,  7,  8]],

       [[11, 12, 13, 14],
        [15,  1,  3,  5]]])

>>> len(arr)  # Number of matrices (depth)
2

>>> arr[0]  # First matrix
array([[1, 2, 3, 4],
       [5, 6, 7, 8]])

>>> len(arr[0])  # Number of rows in the first matrix
2

>>> arr[0][0]  # First row of the first matrix
array([1, 2, 3, 4])

>>> len(arr[0][0])  # Number of columns in the first row of the first matrix
4

>>> arr[0][0][0]  # First element in the first row of the first matrix
1

>>> len(arr[0][0][0])
TypeError: object of type 'numpy.int64' has no len()
```

Looping through the rows, columns, and depth of a 3D array:

```python
>>> arr = np.array([[[1, 2, 3, 4], [5, 6, 7, 8]], [[11, 12, 13, 14], [15, 1, 3, 5]]])

>>> for i in range(len(arr)):
...     for j in range(len(arr[i])):
...             for k in range(len(arr[i][j])):
...                     print(arr[i][j][k], end="\t")
...             print()
...     print()

1	2	3	4	
5	6	7	8	

11	12	13	14	
15	1	3	5	
```

```python
>>> arr = np.array([[ [1,2,3,4],[5,6,7,8]],[[11,12,13,14],[15,1,3,5]]])
>>> for i in range(len(arr)):
...     for j in range(len(arr[i])):
...             for k in range(len(arr[i][j])):
...                     print(arr[i][j][k], end="\t")
...             print()
... 
1	2	3	4	
5	6	7	8	
11	12	13	14	
15	1	3	5
```


---

### Slicing in Multi-Dimensional Arrays

For a 1D array:  
`array_name[start:stop:stepsize]`

For a 2D array, you have start, stop, and step for rows and also for columns.  
`arr[row_start:row_stop:row_step, col_start:col_stop:col_step]`

Example for selecting every second row and columns 1 to 3:  
`arr[::2, 1:3]`

If the comma `,` is not used, it works only with the rows.

```python
>>> arr = np.array([[1,2,3,4], [5,6,7,8], [10,11,12,13]])

>>> arr[::]  
array([[ 1,  2,  3,  4],
       [ 5,  6,  7,  8],
       [10, 11, 12, 13]])

>>> arr[:, :]  
array([[ 1,  2,  3,  4],
       [ 5,  6,  7,  8],
       [10, 11, 12, 13]])

>>> arr[:2]  # 0th and 1st rows
array([[1, 2, 3, 4],
       [5, 6, 7, 8]])

>>> arr[1:3]  # 1st and 2nd rows
array([[ 5,  6,  7,  8],
       [10, 11, 12, 13]])

>>> arr[1:3:2]  # With step 2
array([[5, 6, 7, 8]])
```

To slice columns, add a `,` to separate the rows and columns:

```python
>>> arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [10, 11, 12, 13]])

>>> arr[2, :]  # 3rd row and all columns
array([10, 11, 12, 13])

>>> arr[1, :]  # 2nd row and all columns
array([5, 6, 7, 8])

>>> arr[1:]  # From the 1st row to the end
array([[ 5,  6,  7,  8],
       [10, 11, 12, 13]])

>>> arr[0:1, :]  # 0th row and all columns
array([[1, 2, 3, 4]])
```

Comma is used to separate the range of rows from the range of columns.

```python
>>> arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [10, 11, 12, 13]])

>>> arr[0:1, 0:1]  
array([[1]])

>>> arr[2:3, 0:1]  
array([[10]])

>>> arr[2:3, 0]  
array([10])

>>> arr[1:2, 1:2]  
array([[6]])

# not an array since no range is given using :
>>> arr[0, 0]  
1
```

---

For **Reshaped Arrays**:

```python
>>> arr = np.arange(11, 36, 1).reshape(5, 5)

>>> arr  
array([[11, 12, 13, 14, 15],
       [16, 17, 18, 19, 20],
       [21, 22, 23, 24, 25],
       [26, 27, 28, 29, 30],
       [31, 32, 33, 34, 35]])

>>> arr[0:2, 0:2]  
array([[11, 12],
       [16, 17]])

>>> arr[0:2, 0:3]  
array([[11, 12, 13],
       [16, 17, 18]])

>>> arr[0:1, 0:3]  
array([[11, 12, 13]])

>>> arr[2:, 3:]  
array([[24, 25],
       [29, 30],
       [34, 35]])
```

---

**Applying Step Size**:

```python
>>> arr = np.reshape(np.arange(11, 36, 1), (5, 5))

>>> arr  
array([[11, 12, 13, 14, 15],
       [16, 17, 18, 19, 20],
       [21, 22, 23, 24, 25],
       [26, 27, 28, 29, 30],
       [31, 32, 33, 34, 35]])

# all rows step 1, all columns with step 2
>>> arr[:, ::2]  
array([[11, 13, 15],
       [16, 18, 20],
       [21, 23, 25],
       [26, 28, 30],
       [31, 33, 35]])

# all rows step 1, all columns step 4
>>> arr[:, ::4]  
array([[11, 15],
       [16, 20],
       [21, 25],
       [26, 30],
       [31, 35]])

>>> arr[:, ::5]  
array([[11],
       [16],
       [21],
       [26],
       [31]])

>>> arr[::2, ::2]  
array([[11, 13, 15],
       [21, 23, 25],
       [31, 33, 35]])

>>> arr[0:4:2, 1:5:2]  
array([[12, 14],
       [22, 24]])
```

```python
# Suitable for 3D array with double comma
>>> print(arr[: , : , : 5])

IndexError: too many indices for array: array is 2-dimensional, but 3 were indexed
```

---

For **3D Arrays**:

```python
>>> arr[ row_start:row_stop:row_step,  col_start:col_stop:col_step, depth_start:depth_stop:depth_step]
```

```python
>>> arr[:2, 1:3, ::2]  
# First two rows, columns 1 to 3, every second depth slice
```

---
