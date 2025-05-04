---
title: "05 Functions - 07 Lambda Functions"
description: ""
summary: ""
date: 2025-02-16T22:53:20+05:30
lastmod: 2025-02-16T22:53:20+05:30
draft: false
weight: 51
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




An **anonymous function** is a function that doesn't have a name. In Python, these are commonly referred to as **lambda functions**, and they are defined using the `lambda` keyword, rather than the standard `def` keyword.

Lambda functions are useful for short-lived operations or when you need to pass a function as an argument to another function. They can only consist of a single **expression**, and there is no need to use the `return` statement. The value of the expression is automatically returned.

#### **Syntax for Lambda Function**

The general syntax of a lambda function is:

```python
lambda argument_list : expression
```

- **`argument_list`**: A comma-separated list of parameters for the function (similar to function arguments).
- **`expression`**: A single expression that the function evaluates. It’s automatically returned.

You can assign the lambda function to a variable and then call it like any regular function:
```python
>>> square = lambda x: x * x
>>> square(5)
25
```

Lambda is assigned to `square` so it is a lambda function call that returns the square of a number.

___

You can also pass multiple arguments to a lambda function:

```python
>>> f = lambda x, y: x + y
>>> f(1.5, 10)
11.5
>>> f(2, 5)
7
```

---

### **Using Lambda with the `filter()` Function**

The `filter()` function is used to **filter out elements** from a sequence (such as a list, string, or tuple) based on a function's result. The function is applied to each element of the sequence, and the elements for which the function returns `True` are included in the result.


**Syntax for `filter()`**
```python
filter(function, sequence)
```

- **`function`**: A function that returns `True` or `False` for each element in the sequence.
- **`sequence`**: A list, string, or tuple that the function will be applied to.
The function is applied to every element and when  the function returns true it is the element is extracted.

Using a lambda function to filter even numbers from a list:

```python
>>> lst = [10, 11, 12, 13, 14, 15, 16, 17]
>>> lst_even = list(filter(lambda x: (x % 2 == 0), lst))
>>> lst_even
[10, 12, 14, 16]
```

In this example, the lambda function `lambda x: (x % 2 == 0)` checks if a number is even, and `filter()` collects the numbers for which the function returns `True`.

#### **Using a Traditional Function with `filter()`**

Instead of using a lambda, you can define a normal function and use it with `filter()`:

```python
>>> def is_even(x):
...     if x % 2 == 0:
...         return True
...     else:
...         return False
>>> lst_ev = list(filter(is_even, lst))
>>> lst_ev
[10, 12, 14, 16]
```

Both methods achieve the same result, but the lambda function is more concise and typically used for short operations.

---

### **Using Lambda with the `map()` Function**

The `map()` function applies a given function to each item in a list (or other iterable) and returns a map object, which is an iterator that yields the results.

You can also use `map()` with multiple lists (of the same length), where the lambda function takes arguments from each list simultaneously.


**Syntax for `map()`**
```python
map(function, list1, list2, ...)
```

- **`function`**: A function that is applied to each item of the lists.
- **`list1, list2, ...`**: The lists (or other iterables) to which the function is applied.

Multiply corresponding elements from two lists using a lambda function:

```python
>>> lst1 = [10, 11, 12, 13, 14, 15, 16, 17]
>>> lst2 = [2, 1, 0, 33, 1, 45, 236, 23]
>>> result = list(map(lambda x, y: x * y, lst1, lst2))
>>> result
[20, 11, 0, 429, 14, 675, 3776, 391]
```

- The lambda function `lambda x, y: x * y` multiplies corresponding elements from `lst1` and `lst2`.
- `map()` applies this function to each pair of elements from the two lists and returns the results in a list.

---

### **Using Lambda with the 'reduce()' Function**

The `reduce()` function is used to apply a binary function (a function that takes two arguments) cumulatively to the items of a sequence. This function is from the `functools` module, so it needs to be imported.

`reduce()` reduces the sequence to a single value by processing each element according to the function provided.


**Syntax for `reduce()`**
```python
from functools import reduce

reduce(function, sequence)
```

- **`function`**: A function that takes two arguments and processes them.
- **`sequence`**: The sequence of elements that the function will be applied to.


To find the product of all elements in a list:

```python
>>> from functools import reduce
>>> lst = [10, 11, 12, 13, 14, 15, 16, 17]
>>> result = reduce(lambda x, y: x * y, lst)
>>> result
980179200
```

- The lambda function `lambda x, y: x * y` is applied to each pair of elements in the list, resulting in their cumulative product.
- `reduce()` processes the elements in sequence: first, it multiplies the first two elements, then multiplies the result with the next element, and so on, until all elements are processed.


**Using 'reduce()' to Sum a Range of Numbers**

```python
>>> from functools import reduce
>>> result = reduce(lambda x, y: x + y, range(1, 51))
>>> result
1275
```
The `reduce()` function cumulatively adds the numbers from `1` to `50`.

---


Lambda functions provide a concise way to define small, unnamed functions. They can be used effectively with built-in functions like `filter()`, `map()`, and `reduce()`, making them powerful tools for functional programming in Python. They are particularly useful when you need a simple, one-line function to pass as an argument to another function.


___

