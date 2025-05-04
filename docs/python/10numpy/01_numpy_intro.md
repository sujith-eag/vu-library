---
title: "NumPy - 01 Introduction to Numpy"
description: ""
summary: ""
date: 2025-02-14T20:41:05+05:30
lastmod: 2025-02-14T20:41:05+05:30
draft: false
weight: 120
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



**Installation of NumPy**
If you're using Python, you can install NumPy via the `pip` package manager.
```bash
pip install numpy
```


---

#### **Introduction to NumPy**

NumPy stands for **Numerical Python** and is a fundamental library for scientific computing with Python. While parts of NumPy are written in Python, a significant portion of the library (especially the computational-heavy functions) is written in **C** or **C++** to ensure high performance.

Additionally, NumPy provides a C API that allows users to connect it with libraries written in C, C++, or Fortran, making it easier to integrate NumPy with other high-performance computing libraries.

NumPy doesn't provide built-in modeling or scientific functionalities on its own, but understanding **NumPy arrays** and **array-oriented computing** is a stepping stone for efficiently using other powerful libraries like **Pandas**. 

For instance, Pandas is better suited for handling tabular data and comes with domain-specific functionalities like time-series manipulation, which is beyond the scope of NumPy.

---

#### **Why Use NumPy?**

In Python, we have **lists** which can be used as arrays. However, Python lists are not efficient for large-scale numerical operations. They are slow to process, especially when it comes to computations on large datasets.

NumPy's primary goal is to provide an **array object** that is up to **50 times faster** than traditional Python lists. This array object is called **ndarray** (N-dimensional array).
Arrays enable you to perform mathematical operations on whole blocks of data using similar syntax to the equivalent operations between scalar elements.

NumPy is a key tool for data scientists and analysts:

1. **Performance:** NumPy arrays are optimized for fast numerical computations. Operations are vectorized, meaning they can process entire arrays at once, making them faster than using Python loops.
2. **Ease of Use:** NumPy provides a wide range of functions and methods that make it easy to work with arrays.
3. **Data Science Applications:** In the field of data science, performance and resource management are crucial. Since NumPy is optimized for performance, it helps scientists and analysts efficiently process large datasets.

---

#### **Why NumPy is Faster than Python Lists**

1. **Storage Efficiency**:  
    NumPy arrays are stored in a **single contiguous block of memory**, whereas Python lists store elements scattered across memory. This structure takes advantage of **locality of reference**, which enables faster access to array elements.
    
2. **Memory Efficiency**:  
    NumPy arrays are more memory-efficient than Python lists because their elements are of a fixed data type (such as `int`, `float`, etc.). In contrast, Python lists can store elements of varying data types, which introduces overhead due to type flexibility.
    
3. **Speed and Performance**:  
    Several factors contribute to NumPy's speed:
    
    - **Vectorization**: NumPy operations are **vectorized**, meaning they operate on entire arrays at once instead of using `for` loops. This leads to significant performance improvements, particularly with large datasets.
    - **Optimized C Code**: NumPy operations are implemented in **C** and other low-level languages, ensuring efficient execution by directly leveraging the underlying hardware and CPU architecture.
    - **No Type Checking**: NumPy arrays are homogeneous, meaning all elements are of the same type. As a result, operations don't require type checking at runtime, which reduces computational overhead.
    - **Parallelism**: NumPy can utilize **multi-core processors** to parallelize operations, further speeding up computations compared to Python lists, which do not have this capability.

---


```python
# Runing in Jupyter Notebook
>>> import numpy as np
>>> arr = np.arange(1_000_000)
>>> lis = list(range(1_000_000))

>>> %timeit arr2 = arr * 2
715 us +- 13.2 us per loop (mean +- std. dev. of 7 runs, 1000 loops each)

>>> %timeit lis2 = [x *2 for x in lis]
48.8 ms +- 298 us per loop (mean +- std. dev. of 7 runs, 10 loops each)
```

**NumPy is faster** than Python lists because of its efficient memory layout, fixed data types, and optimization via vectorized operations and low-level C code. Its ability to take advantage of multi-core processing and avoid runtime type checks makes it far more suitable for numerical computations.

---

#### **Key Features of NumPy**

- **Multidimensional Containers:** NumPy provides an `ndarray` object, which is a fast, flexible container for large data sets. These arrays can be multidimensional, making them suitable for working with matrices, higher-dimensional data, and tensors.

- **Broadcasting:** This refers to how NumPy handles element-wise operations on arrays of different shapes. Broadcasting allows operations between arrays of different shapes and is performed automatically without needing explicit for-loops, making it both efficient and intuitive.

- **Linear Algebra Operations:** NumPy provides robust tools for performing linear algebra operations like matrix multiplication, eigenvalues, singular value decomposition, and more.

- **Advanced Mathematical Functions:** NumPy offers a wide range of mathematical functions, including basic arithmetic, trigonometry, and statistical functions.

- **Integration with C/C++/Fortran Code:** NumPy can seamlessly integrate with libraries written in low-level languages like **C**, **C++**, and **Fortran** for high-performance computations.


---

#### **Common Uses of NumPy**

- **Arithmetic Operations:** You can perform element-wise arithmetic operations (addition, subtraction, multiplication, etc.) on entire arrays.
- **Mathematical Operations:** NumPy provides built-in functions for mathematical operations like logarithms, exponentials, and more.
- **Statistical Operations:** NumPy includes methods for calculating mean, median, standard deviation, etc.
- **Bitwise Operations:** NumPy allows bitwise operations like AND, OR, XOR, etc., on arrays.
- **Array Manipulation:** NumPy makes it easy to reshape, resize, and manipulate arrays through various functions (e.g., `reshape()`, `transpose()`, etc.).
- **Matrix Operations:** It provides support for matrix operations like matrix multiplication, determinant, inverse, and eigenvalues.
- **Linear Algebra:** NumPy includes advanced linear algebra tools for operations such as matrix multiplication, solving systems of linear equations, eigenvectors, and singular value decomposition.
- **Sorting & Searching:** NumPy offers efficient sorting and searching functions for arrays.
- **Broadcasting:** NumPy arrays can interact with other arrays of different shapes through broadcasting, which allows for efficient operations without the need for loops.

---

