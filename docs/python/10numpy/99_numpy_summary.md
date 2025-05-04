---
title: "NumPy - 17 NumPy Summary"
description: ""
summary: ""
date: 2025-02-14T20:46:42+05:30
lastmod: 2025-02-14T20:46:42+05:30
draft: false
weight: 137
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



### **Key Concepts and Features of NumPy**

#### **1. NumPy Array ('ndarray')**

The central feature of NumPy is its **N-dimensional array** object (`ndarray`). The `ndarray` is the most important object in NumPy and allows you to store and manipulate data in a multi-dimensional array.

- **Shape**: Defines the dimensions of the array. It is represented as a tuple of integers (e.g., `(3, 4)` for a 2D array with 3 rows and 4 columns).
- **Data Type (`dtype`)**: Specifies the type of elements in the array, such as `int`, `float`, `complex`, etc. NumPy arrays are homogeneous, meaning they store data of the same type.
- **Size**: Represents the total number of elements in the array, which is the product of the dimensions of the array.
- **Stride**: The number of bytes that need to be skipped in memory to move from one element to the next in each dimension.

---

#### **2. NumPy Array Creation**

There are several ways to create NumPy arrays:

- **From lists or tuples**:

```python
>>> import numpy as np
>>> arr = np.array([1, 2, 3, 4])
>>> arr
array([1, 2, 3, 4])
```

- **Using `arange()`**: Creates an array with a range of values:

```python
>>> arr = np.arange(0, 10, 2)
>>> arr
array([0, 2, 4, 6, 8])
```

- **Using `zeros()` and `ones()`**: These methods create arrays of zeros or ones:

```python
>>> arr_zeros = np.zeros((3, 3))
>>> arr_zeros
array([[0., 0., 0.],
       [0., 0., 0.],
       [0., 0., 0.]])
>>> arr_ones = np.ones((2, 4))
>>> arr_ones
array([[1., 1., 1., 1.],
       [1., 1., 1., 1.]])
```

- **Using `linspace()`**: Creates an array of linearly spaced values:

```python
>>> arr = np.linspace(0, 10, 5)
>>> arr
array([ 0. ,  2.5,  5. ,  7.5, 10. ])
```

- **Random Array Creation**: NumPy has functions for generating arrays of random numbers:

```python
# Random values between 0 and 1
>>> rand_arr = np.random.rand(3, 3)
>>> rand_arr
array([[0.51070303, 0.18661261, 0.70044435],
       [0.97828576, 0.03086758, 0.69579492],
       [0.98253972, 0.23694274, 0.47008366]])
```

---

#### **3. Array Indexing and Slicing**

NumPy allows efficient indexing and slicing of arrays:

- **Basic Indexing**: Access elements using standard Python indexing:

```python
>>> arr = np.array([1, 2, 3, 4])
>>> arr[2]
3
```

- **Slicing**: You can extract subarrays by specifying a range of indices:

```python
>>> arr = np.array([1, 2, 3, 4, 5])
>>> arr[1:4]
array([2, 3, 4])
```

- **Multidimensional Indexing**: For multidimensional arrays, use tuples to index:

```python
>>> arr = np.array([[1, 2, 3], [4, 5, 6]])
>>> arr[0, 1]
2
```

- **Boolean Indexing**: You can use boolean arrays to index and manipulate elements conditionally:

```python
>>> arr = np.array([1, 2, 3, 4])
>>> arr[arr > 2]
array([3, 4])
```

---

#### **4. Reshaping Arrays**

NumPy allows easy reshaping of arrays without changing their data:

- **Reshape**: Change the shape of an array:

```python
>>> arr = np.array([1, 2, 3, 4, 5, 6])
>>> reshaped = arr.reshape(2, 3)
>>> reshaped
array([[1, 2, 3],
       [4, 5, 6]])
```

- **Flattening**: Convert a multi-dimensional array into a 1D array:

```python
>>> flattened = reshaped.flatten()
>>> flattened
array([1, 2, 3, 4, 5, 6])
```

---

#### **5. Universal Functions (ufuncs)**

One of the key features of NumPy is its **Universal Functions (ufuncs)**, which allow you to perform element-wise operations on arrays without needing explicit loops.

- **Mathematical Operations**: You can perform arithmetic operations like addition, subtraction, etc., on entire arrays:

```python
>>> arr1 = np.array([1, 2, 3])
>>> arr2 = np.array([4, 5, 6])
>>> result = arr1 + arr2
>>> result
array([5, 7, 9])
```

- **Broadcasting**: This allows NumPy to perform operations on arrays of different shapes in a way that aligns dimensions. This is particularly useful for applying operations to arrays with different sizes:

```python
>>> arr = np.array([1, 2, 3])
>>> result = arr + 5
>>> result
array([6, 7, 8])
```

- **Mathematical Functions**: NumPy provides a variety of functions, such as `np.sin()`, `np.cos()`, `np.log()`, etc., for mathematical operations on arrays.

---

#### **6. Broadcasting in NumPy**

**Broadcasting** is a powerful feature in NumPy that allows you to perform operations on arrays of different shapes. When operating on arrays with different shapes, NumPy automatically expands (broadcasts) the smaller array to match the shape of the larger one without the need for explicit replication.

For example, consider adding a scalar value to a 2D array:

```python
>>> arr = np.array([[1, 2, 3], [4, 5, 6]])
>>> result = arr + 10
>>> result
array([[11, 12, 13],
       [14, 15, 16]])
```

---

#### **7. Aggregation and Statistical Functions**

NumPy offers a wide variety of aggregation functions that allow you to calculate summary statistics for arrays:

- **Sum, Mean, Median, etc.**:

```python
>>> arr = np.array([1, 2, 3, 4, 5])
>>> np.sum(arr)
15
>>> np.mean(arr)
3.0
>>> np.median(arr)
3.0
```

- **Min, Max, Argmin, Argmax**:

```python
>>> np.min(arr)
1
>>> np.max(arr)
5
>>> np.argmax(arr)
4
```

- **Axis-Specific Operations**: Many aggregation functions can be applied along a specific axis (useful for multidimensional arrays):

```python
>>> arr = np.array([[1, 2, 3], [4, 5, 6]])
>>> np.sum(arr, axis=0)
array([5, 7, 9])
>>> np.sum(arr, axis=1)
array([ 6, 15])
```

---

#### **8. File Input/Output (I/O) with NumPy**

NumPy provides efficient methods for reading and writing arrays to files. These methods support both binary and text file formats.

##### **Saving Arrays**
To save an array to a binary file:

```python
>>> np.save('array.npy', arr)
```

##### **Loading Arrays**
To load an array from a binary file:

```python
>>> arr_loaded = np.load('array.npy')
```

##### **Reading from Text Files**
To read data from a text file into a NumPy array:

```python
>>> arr = np.loadtxt('data.txt')
```

##### **Writing to Text Files**
To write an array to a text file:

```python
>>> np.savetxt('output.txt', arr)
```

##### **Compressed Files**
To save arrays in a compressed `.npz` file:

```python
>>> np.savez_compressed('arrays.npz', arr1=arr, arr2=arr_loaded)
```

---

#### **9. Linear Algebra in NumPy**

NumPy includes comprehensive support for linear algebra operations:

- **Matrix multiplication**: You can use `np.dot()` or the `@` operator to perform matrix multiplication:

```python
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
result = np.dot(A, B)  # Matrix multiplication
```

```python
>>> A = np.array([[1, 2], [3, 4]])
>>> B = np.array([[5, 6], [7, 8]])
>>> result = np.dot(A, B)
>>> result
array([[19, 22],
       [43, 50]])
```

- **Matrix Inverse**:

```python
inv_A = np.linalg.inv(A)  # Inverse of matrix A
```

```python
>>> inv_A = np.linalg.inv(A)
>>> inv_A
array([[-2. ,  1. ],
       [ 1.5, -0.5]])
```

- **Eigenvalues and Eigenvectors**:

```python
eigvals, eigvecs = np.linalg.eig(A)
```

```python
>>> eigvals, eigvecs = np.linalg.eig(A)
>>> eigvals
array([-0.37228132,  5.37228132])
>>> eigvecs
array([[-0.82456484,  0.41597356],
       [ 0.56576746,  0.90937671]])
```

---


