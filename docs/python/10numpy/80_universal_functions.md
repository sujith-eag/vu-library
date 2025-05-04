---
title: "NumPy - 15 Universal Functions"
description: ""
summary: ""
date: 2025-02-14T20:45:59+05:30
lastmod: 2025-02-14T20:45:59+05:30
draft: false
weight: 135
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

### Universal Functions (Ufuncs)

A **universal function (ufunc)** is a function that performs element-wise operations on data in ndarrays. Ufuncs act as fast, vectorized wrappers for simple functions that take one or more scalar values and produce one or more scalar results.

Ufuncs can be classified into two types:

- **Unary ufuncs**: These take a single input array and perform operations on each element (e.g., `numpy.sqrt` or `numpy.exp`).
- **Binary ufuncs**: These take two input arrays and perform operations element-wise between them (e.g., `numpy.add` or `numpy.maximum`).

### Key Features of Ufuncs:

- **Out Argument**: Ufuncs accept an optional `out` argument that allows them to assign their results into an existing array rather than creating a new one.
- **Continuous Updates**: New ufuncs are regularly added to NumPy, so it’s best to consult the official documentation for a comprehensive list and stay up-to-date.

---

### Common Unary Ufuncs

|**Function**|**Description**|
|---|---|
|`abs`, `fabs`|Compute the absolute value element-wise for integer, floating-point, or complex values.|
|`sqrt`|Compute the square root of each element (equivalent to `arr ** 0.5`).|
|`square`|Compute the square of each element (equivalent to `arr ** 2`).|
|`exp`|Compute the exponent `e^x` of each element.|
|`log`, `log10`, `log2`, `log1p`|Compute the natural logarithm (base e), log base 10, log base 2, and `log(1 + x)` respectively.|
|`sign`|Compute the sign of each element: 1 (positive), 0 (zero), or –1 (negative).|
|`ceil`|Compute the ceiling of each element (i.e., the smallest integer greater than or equal to the number).|
|`floor`|Compute the floor of each element (i.e., the largest integer less than or equal to the number).|
|`rint`|Round elements to the nearest integer, preserving the dtype.|
|`modf`|Return fractional and integral parts of an array as separate arrays.|
|`isnan`|Return a Boolean array indicating whether each value is NaN (Not a Number).|
|`isfinite`, `isinf`|Return a Boolean array indicating whether each element is finite (non-inf, non-NaN) or infinite, respectively.|
|`cos`, `cosh`, `sin`, `sinh`, `tan`, `tanh`|Regular and hyperbolic trigonometric functions.|
|`arccos`, `arccosh`, `arcsin`, `arcsinh`, `arctan`, `arctanh`|Inverse trigonometric functions.|
|`logical_not`|Compute the truth value of `not x` element-wise (equivalent to `~arr`).|

---

### Common Binary Ufuncs

|**Function**|**Description**|
|---|---|
|`add`|Add corresponding elements in two arrays.|
|`subtract`|Subtract elements in the second array from the first array.|
|`multiply`|Multiply array elements element-wise.|
|`divide`, `floor_divide`|Divide or floor divide (truncating the remainder) element-wise.|
|`power`|Raise elements in the first array to powers indicated in the second array.|
|`maximum`, `fmax`|Element-wise maximum; `fmax` ignores NaN values.|
|`minimum`, `fmin`|Element-wise minimum; `fmin` ignores NaN values.|
|`mod`|Element-wise modulus (remainder of division).|
|`copysign`|Copy the sign of values in the second argument to values in the first argument.|
|`greater`, `greater_equal`, `less`, `less_equal`, `equal`, `not_equal`|Perform element-wise comparison, yielding a Boolean array (equivalent to infix operators: `>`, `>=`, `<`, `<=`, `==`, `!=`).|
|`logical_and`|Compute the element-wise truth value of the AND (`&`) logical operation.|
|`logical_or`|Compute the element-wise truth value of the OR (`|
|`logical_xor`|Compute the element-wise truth value of the XOR (`^`) logical operation.|

---

These ufuncs provide powerful, efficient tools for performing element-wise operations on NumPy arrays.
