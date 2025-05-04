---
title: "NumPy - 04 Metods of Creating Arrays"
description: ""
summary: ""
date: 2025-02-14T20:42:03+05:30
lastmod: 2025-02-14T20:42:03+05:30
draft: false
weight: 124
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Arrays with different numbers of dimensions can be created in NumPy. 

( While it's not necessary to use `print()` in a terminal, it works to display arrays in Python. When an array is called directly, it will display with its type `array([...])` )

#### **1D Array (Single-Dimensional)**

```python
>>> import numpy as np
>>> arr = np.array([1, 2, 2, 3])
>>> arr
array([1, 2, 2, 3])

>>> print(arr)
[1 2 2 3]
```

```python
>>> from numpy import *
>>> arr = array([1, 2, 3, 4])
>>> arr
array([1, 2, 3, 4])

>>> print(arr)
[1 2 3 4]
```

---

### **Creating Arrays using 'np.array()'**

Arrays can be created by passing lists of values. The type of array can be explicitly defined, but NumPy will automatically infer the data type based on the input values.

#### **Integer Array**

```python
>>> arr = np.array([1,2,3,4], int)
>>> arr
array([1, 2, 3, 4])

>>> arr = np.array([1,2,3,4], float)
>>> arr
array([1., 2., 3., 4.])
```

Note: Specifying the type is optional. NumPy will automatically convert all elements to a suitable type if necessary.

```python
arr = np.array(['a', 'b', 'c'])
```

---

#### **2D Array (Multi-Dimensional)**

A 2D array has more than one row or column. Internally, the array is stored as a flat array in memory, but it is displayed in a structured form.

```python
>>> arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
>>> arr
array([[1, 2, 3, 4],
       [5, 6, 7, 8]])
```

Even though `arr` is displayed as a 2D array (2 rows and 4 columns), the internal memory allocates these elements as a single row with 8 blocks. The indexing would be `[0][0]`, `[0][1]`, up to `[1][3]`.

---

### **Aliasing Arrays**

When assigning an array to another variable, the new variable doesn't create a copy of the array but instead references the original array. This is called **aliasing**.

```python
>>> import numpy as np
>>> a = np.array([1, 2, 3, 4])   # original array
>>> b = np.array(a)     # creating b from array function
>>> c = a    # creating c by assignment
>>> a
array([1, 2, 3, 4])
>>> b
array([1, 2, 3, 4])
>>> c
array([1, 2, 3, 4])
```

In the example above, `c = a` does not create a new copy of the array. Both `a` and `c` refer to the same data.

---

### **Creating a View of an Array**

A **view** of an array can be created with `view()`. The new array will have the same data, but it will occupy a different memory location. If the data is modified in the the original array, the view will also reflect those changes as they are mirror images.

```python
>>> a = np.array([4, 5, 6, 7])
>>> arr = np.array([4, 5, 6, 7])
>>> arr2 = arr.view()
>>> arr
array([4, 5, 6, 7])
>>> arr2
array([4, 5, 6, 7])

>>> arr[1] = 10
>>> arr2
array([ 4, 10,  6,  7])
```

It is also possible to change the data type of the view:

```python
arr.view(np.int16)
```

---

### **Copying Arrays**

To create two independent arrays, create a deep copy using the `copy()` method. This ensures that changes to one array do not affect the other.

```python
>>> arr = np.array([[2, 3, 4, 5], [5, 2, 4, 5]])
>>> b = np.copy(arr)
>>> b = arr.copy()  # both methods work

>>> arr
array([[2, 3, 4, 5],
       [5, 2, 4, 5]])

>>> arr[0][1] = 33
>>> arr
array([[ 2, 33,  4,  5],
       [ 5,  2,  4,  5]])

>>> b
array([[2, 3, 4, 5],
       [5, 2, 4, 5]])
```

In this case, modifying `arr` does not affect `b`, since `b` is a copy of the original.

---

### **Defining the Number of Dimensions**

An array can have any number of dimensions. When an array is created, the number of dimensions can also be defined.

While `ndim` is useful for **checking** the number of dimensions of an array, **it is not used** to specify the number of dimensions during array creation.

```python
>>> arr = np.array([1, 2, 3, 4])
>>> arr = arr.reshape(1, 1, 1, 1, 4)  
>>> # Reshaping the array to have 5 dimensions
>>> arr
array([[[[[1, 2, 3, 4]]]]])
>>> arr.ndim
5
```

---

### Using 'linspace()' Function

`linspace()` is used to create an array with evenly spaced points between a starting and ending point.

```python
np.linspace([start, stop, n])`
```

```python
>>> import numpy as np
>>> a = np.linspace(0, 10, 5)
>>> a
array([ 0. ,  2.5,  5. ,  7.5, 10. ])
```

Starting from 0 and ending at 10, it is divided into 5 equal parts.

If the number of steps is omitted, it will be taken as 50 by default.

```python
>>> b = np.linspace(0,10)
>>> b
array([ 0.        ,  0.20408163,  0.40816327,  0.6122449 ,  0.81632653,
        1.02040816,  1.2244898 ,  1.42857143,  1.63265306,  1.83673469,
        2.04081633,  2.24489796,  2.44897959,  2.65306122,  2.85714286,
        3.06122449,  3.26530612,  3.46938776,  3.67346939,  3.87755102,
        4.08163265,  4.28571429,  4.48979592,  4.69387755,  4.89795918,
        5.10204082,  5.30612245,  5.51020408,  5.71428571,  5.91836735,
        6.12244898,  6.32653061,  6.53061224,  6.73469388,  6.93877551,
        7.14285714,  7.34693878,  7.55102041,  7.75510204,  7.95918367,
        8.16326531,  8.36734694,  8.57142857,  8.7755102 ,  8.97959184,
        9.18367347,  9.3877551 ,  9.59183673,  9.79591837, 10.        ])
```

---

### Creating an Array using 'arange()' Function

It is similar to Python's `range()` function.

```python
np.arange(start, stop, stepsize)
```

```python
>>> np.arange(10)
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

>>> np.arange(0,10)
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

>>> np.arange(0,10,2)
array([0, 2, 4, 6, 8])

>>> np.arange(0,10,3)
array([0, 3, 6, 9])

>>> np.arange(0,10,4)
array([0, 4, 8])

>>> np.arange(0,10,1.5)
array([0. , 1.5, 3. , 4.5, 6. , 7.5, 9. ])

>>> np.arange(10,1,-1)
array([10,  9,  8,  7,  6,  5,  4,  3,  2])

>>> np.arange(2,11,2)
array([ 2,  4,  6,  8, 10])
```

---

### Creating Arrays using ' zeros() ' and ' ones() ' Functions

`zeros(n, datatype)`  
`ones(n, datatype)`

If the datatype is omitted, the default is float.

```python
>>> arr = np.zeros(6, int)
>>> arr
array([0, 0, 0, 0, 0, 0])

>>> arr = np.zeros(6, float)
>>> arr
array([0., 0., 0., 0., 0., 0.])

>>> arr = np.ones(6, float)
>>> arr
array([1., 1., 1., 1., 1., 1.])

>>> arr = np.ones(6, int)
>>> arr
array([1, 1, 1, 1, 1, 1])
```

These can be used to create 2D arrays with rows and columns.  
`ones((r,c), dtype)`  
`zeros((r,c), dtype)`

```python
>>> arr = np.ones((3,6))
>>> arr
array([[1., 1., 1., 1., 1., 1.],
       [1., 1., 1., 1., 1., 1.],
       [1., 1., 1., 1., 1., 1.]])
       
>>> arr = np.ones((3,6), int)
>>> arr
array([[1, 1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1, 1]])

>>> arr = np.zeros((3,6))
>>> arr
array([[0., 0., 0., 0., 0., 0.],
       [0., 0., 0., 0., 0., 0.],
       [0., 0., 0., 0., 0., 0.]])
       
>>> arr = np.zeros((3,6), int)
>>> arr
array([[0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0]])
```

---

### ' eye() ' Function

The `eye()` function creates a 2D array and fills the elements in the diagonal with 1s. It can only create a square matrix of `nxn` form, so it takes only one parameter.

`eye(n, dtype=datatype)`

```python
>>> arr = np.eye(4)
>>> arr
array([[1., 0., 0., 0.],
       [0., 1., 0., 0.],
       [0., 0., 1., 0.],
       [0., 0., 0., 1.]])
       
>>> arr = np.eye(4, dtype=int)
>>> arr
array([[1, 0, 0, 0],
       [0, 1, 0, 0],
       [0, 0, 1, 0],
       [0, 0, 0, 1]])
```

---


