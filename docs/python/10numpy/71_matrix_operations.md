---
title: "NumPy - 14 Matrix Operations"
description: ""
summary: ""
date: 2025-02-14T20:45:31+05:30
lastmod: 2025-02-14T20:45:31+05:30
draft: false
weight: 134
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Matrix represents a rectangular array of elements arranged in rows and columns (m X n)

To work with matrix, numpy provides a special object called matrix. It is a special 2D array that retains its 2D nature through operations.

___

The syntax for creating a matrix is 
`matrix_name = matrix(2D_array or string)`

`np.` is needed depending on how numpy is imported.

```python
>>> arr = np.reshape(np.arange(11,17), (2,3))
>>> arr
array([[11, 12, 13],
       [14, 15, 16]])
>>> np.matrix(arr)
matrix([[11, 12, 13],
        [14, 15, 16]])

>>> arr = np.reshape(np.arange(11,36), (5,5))
>>> arr
array([[11, 12, 13, 14, 15],
       [16, 17, 18, 19, 20],
       [21, 22, 23, 24, 25],
       [26, 27, 28, 29, 30],
       [31, 32, 33, 34, 35]])
>>> np.matrix(arr)
matrix([[11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35]])
````

Matrix can be directly typed inside the matrix also

```python
>>> mat = np.matrix( [ [1,2,3,4],[4,3,2,1] ])
>>> mat
matrix([[1, 2, 3, 4],
        [4, 3, 2, 1]])
```

Or a string can be passed where elements of one array are separated by `;` semicolon from elements of another array.

```python
>>> mat = np.matrix( '1 2 3; 3 4 5; 6 7 8' )
>>> mat
matrix([[1, 2, 3],
        [3, 4, 5],
        [6, 7, 8]])
```

---

### Getting the diagonal elements of a matrix

Using the `diagonal()` function `dia = diagonal(matrix)`

```python
>>> mat = np.matrix( "1 2; 3 4; 5 6" )
>>> mat
matrix([[1, 2],
        [3, 4],
        [5, 6]])

>>> dia = np.diagonal(mat)
>>> dia
matrix([1, 4])
```

### Finding Maximum and Minimum Elements

`max()` `min()`

```python
>>> mat = np.matrix( "1 2; 3 4; 5 6" )
>>> mat
matrix([[1, 2],
        [3, 4],
        [5, 6]])

>>> mat.min()
1

>>> mat.max()
6
```

### Finding Sum and Average

`sum()` `mean()`

```python
>>> mat.sum()
21

>>> mat.mean()
3.5
```

### Product of Row or Column Elements

`prod(0)` returns matrix with products of elements in each column. `prod(1)` returns products in each row

```python
>>> mat = np.matrix( np.arange(12).reshape(3,4) )
>>> mat
matrix([[ 0,  1,  2,  3],
        [ 4,  5,  6,  7],
        [ 8,  9, 10, 11]])

>>> col_prod = mat.prod(0)
>>> col_prod
matrix([[  0,  45, 120, 231]])

>>> row_prod = mat.prod(1)
>>> row_prod
matrix([[   0],
        [ 840],
        [7920]])
```

---

### Sorting Matrix

`sort()` function sorts the matrix elements into ascending order.

`np.sort(matrix_name, axis=0/1)` `arr.sort(axis=0/1)`

If `axis = 0` it sorts the row elements. If `axis = 1` it sorts the column elements.

Like Python’s built-in list type, NumPy arrays can be sorted in place with the sort method.

```python
>>> mat = np.matrix( '5 2 1; 25 20 5; 15 4 8' )
>>> mat
matrix([[ 5,  2,  1],
        [25, 20,  5],
        [15,  4,  8]])

>>> mat.sort()
>>> mat
matrix([[ 1,  2,  5],
        [ 5, 20, 25],
        [ 4,  8, 15]])

>>> mat = np.matrix( '5 2 1; 25 20 5; 15 4 8' )
>>> mat.sort(axis=0)
>>> mat
matrix([[ 5,  2,  1],
        [15,  4,  5],
        [25, 20,  8]])
```

Works for arrays also:

```python
>>> arr = np.array( [[ 5,  2,  1], [25, 20, 5 ], [15, 4, 8] ])
>>> arr
array([[ 5,  2,  1],
       [25, 20,  5],
       [15,  4,  8]])

>>> arr.sort()
>>> arr
array([[ 1,  2,  5],
       [ 5, 20, 25],
       [ 4,  8, 15]])

>>> arr.sort(axis=0)
>>> arr
array([[ 1,  2,  5],
       [ 4,  8, 15],
       [ 5, 20, 25]])

>>> arr = np.array( [[ 5,  2,  1], [25, 20, 5 ], [15, 4, 8] ])
>>> arr.sort(axis=0)
>>> arr
array([[ 5,  2,  1],
       [15,  4,  5],
       [25, 20,  8]])
```

The top-level method `numpy.sort` returns a sorted copy of an array (like the Python built-in function sorted) instead of modifying the array in place.

Passing the array or matrix as parameter to `sort(arr)` will not change the original and also returns the sorted array which can be assigned to a variable.

```python
>>> mat = np.matrix([ [3,1,2],[5,2,8],[9,1,5] ])
>>> mat
matrix([[3, 1, 2],
        [5, 2, 8],
        [9, 1, 5]])

# Not specifying axis sorts the row elements
>>> row = np.sort(mat)
>>> row
matrix([[1, 2, 3],
        [2, 5, 8],
        [1, 5, 9]])

>>> row = np.sort(mat, axis=1)
>>> row
matrix([[1, 2, 3],
        [2, 5, 8],
        [1, 5, 9]])

# column sort with axis as 0
>>> col = np.sort(mat, axis=0)
>>> col
matrix([[3, 1, 2],
        [5, 1, 5],
        [9, 2, 8]])
```

---

### Transpose of a matrix

Rows into columns and vice versa is called as transpose. A `m X n` matrix will become `n X m`.

Transpose can be done with `transpose()` and `getT()` methods in numpy.

```python
>>> mat = np.matrix([ [3,1,2],[5,2,8],[9,1,5] ])
>>> mat
matrix([[3, 1, 2],
        [5, 2, 8],
        [9, 1, 5]])

>>> tra = mat.transpose()
>>> tra
matrix([[3, 5, 9],
        [1, 2, 1],
        [2, 8, 5]])

>>> mat = np.matrix([ [3,1,2],[5,2,8],[9,1,5],[10,15,1],[5,7,8] ])
>>> mat
matrix([[ 3,  1,  2],
        [ 5,  2,  8],
        [ 9,  1,  5],
        [10, 15,  1],
        [ 5,  7,  8]])

>>> tra = mat.transpose()
>>> tra
matrix([[ 3,  5,  9, 10,  5],
        [ 1,  2,  1, 15,  7],
        [ 2,  8,  5,  1,  8]])
```

Similarly for `getT()` also.

### Matrix addition and multiplication

Math operators like `+, -, *, /` can be used to perform operations on 2 matrices.

```python
>>> mat = np.matrix([ [3,1,2],[5,2,8],[9,1,5],[10,15,1],[5,7,8] ])
>>> mat1 = np.matrix(np.arange(15).reshape(5,3) )
>>> mat
matrix([[ 3,  1,  2],
        [ 5,  2,  8],
        [ 9,  1,  5],
        [10, 15,  1],
        [ 5,  7,  8]])

>>> mat1
matrix([[ 0,  1,  2],
        [ 3,  4,  5],
        [ 6,  7,  8],
        [ 9, 10, 11],
        [12, 13, 14]])

>>> add = mat + mat1
>>> add
matrix([[ 3,  2,  4],
        [ 8,  6, 13],
        [15,  8, 13],
        [19, 25, 12],
        [17, 20, 22]])

>>> sub = mat - mat1
>>> sub
matrix([[  3,   0,   0],
        [  2,  -2,   3],
        [  3,  -6,  -3],
        [  1,   5, -10],
        [ -7,  -6,  -6]])

>>> sub = mat1 - mat
>>> sub
matrix([[-3,  0,  0],
        [-2,  2, -3],
        [-3,  6,  3],
        [-1, -5, 10],
        [ 7,  6,  6]])

>>> div = mat1 / mat
>>> div
matrix([[ 0.        ,  1.        ,  1.        ],
        [ 0.6       ,  2.        ,  0.625     ],
        [ 0.66666667,  7.        ,  1.6       ],
        [ 0.9       ,  0.66666667, 11.        ],
        [ 2.4       ,  1.85714286,  1.75      ]])
```

---

Multiplication doesn't multiply the corresponding matrix elements, it needs the col of one to be equal to row of another. That is, if one is `m x n`, the other needs to be `n x p`. The resultant will be `m x p`.

Same kind of matrix format will not work unless it is a square matrix.

```python
>>> prod = mat1 * mat
ValueError: shapes (5,3) and (5,3) not aligned: 3 (dim 1) != 5 (dim 0)
```

Transposing one of the matrices solves the problem if they are the same.

```python
>>> mat1
matrix([[ 0,  1,  2],
        [ 3,  4,  5],
        [ 6,  7,  8],
        [ 9, 10, 11],
        [12, 13, 14]])

# 5 x 3 matrix
# 3 x 5 matrix
>>> mat2 = mat.transpose()
>>> mat2
matrix([[ 3,  5,  9, 10,  5],
        [ 1,  2,  1, 15,  7],
        [ 2,  8,  5,  1,  8]])

# 5 x 5 matrix
>>> prod = mat1 * mat2
>>> prod
matrix([[  5,  18,  11,  17,  23],
        [ 23,  63,  56,  95,  83],
        [ 41, 108, 101, 173, 143],
        [ 59, 153, 146, 251, 203],
        [ 77, 198, 191, 329, 263]])

# Reversing the matrix
# 3 x 5 * 5 x 3 will be 3x3
>>> div = mat2 * mat1
>>> div
matrix([[219, 251, 283],
        [231, 257, 283],
        [159, 183, 207]])
```

---

### A program to accept two matrices and find their product

```python
import sys
import numpy as np

r1, c1 = [int(a) for a in input("First matrix rows, cols: ").split()]

r2, c2 = [int(a) for a in input("Second matrix rows, cols: ").split()]

if c1 != r2:
    print("Multiplication not possible")
    sys.exit()

str1 = input("Enter first matrix elements: \n")
x = np.reshape(np.matrix(str1), (r1,c1))

str2 = input("Enter second matrix elements: \n")
y = np.reshape(np.matrix(str2), (r2,c2))

print("The product of the matrix: :")
z = x * y
z
```

Now, the arrays will be shown directly as outputs in the console!
