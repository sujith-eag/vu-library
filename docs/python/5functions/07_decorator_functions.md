---
title: "05 Functions - 08 Decorator Functions"
description: ""
summary: ""
date: 2025-02-16T22:53:47+05:30
lastmod: 2025-02-16T22:53:47+05:30
draft: false
weight: 52
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




A decorator accepts a function as an argument, modifies its behavior, and returns a new function.

A **decorator** is a special type of function in Python that allows you to modify or enhance the behavior of another function without changing the function's code. 

Decorators are widely used in Python to add additional functionality to functions or methods, such as logging, access control, performance measurement, and more.

---

### **Basic Decorator Structure**

To create a decorator, we need to define a function that accepts another function (`func`) as its argument. Inside the decorator, we define another function (often referred to as `inner` or `wrapper`) that will modify the behavior of the original function and return the modified result.

Here’s the basic structure of a decorator:

```python
# A decorator is a special type of function that modifies another function's behavior

>>> def decor(func):
...     def inner():
...         value = func()  # Call func and get the result
...         return value + 2  # Modify the result and return it
...     return inner  # Return the inner function
```

- **`decor(func)`**: The decorator function that accepts another function as its argument.
- **`inner()`**: The inner function that modifies the result of the passed function (`func`) and returns the modified result.
- **`return inner`**: The decorator function returns the `inner` function, which is now the decorated version of `func`.

---

### **Applying a Decorator to a Function**

Once we’ve defined the decorator, we can apply it to any function by passing the function to the decorator. We can use the decorator like this:

```python
>>> def decor(func):
...     def inner():
...         value = func()  # Call func and get value
...         return value + 2  # Modify the result and return it
...     return inner  # Return the inner function
>>> 
>>> def num():
...     return 10
>>> 
>>> result_func = decor(num)  # Apply the decorator to the function
>>> print(result_func())  # Call the decorated function
12
```

- The `num()` function returns `10`.
- The `decor()` function adds `2` to the result of `num()` and returns `12`.
- The `inner()` function returned by `decor()` is assigned to `result_func`, and calling `result_func()` gives the modified result.

---

### **Using the `@` Symbol to Apply Decorators**

The `@` symbol is a shorthand for applying a decorator to a function. Using `@decor` directly above the function definition allows Python to automatically apply the decorator to the function without needing to explicitly call the decorator.

```python
>>> @decor
>>> def num():
...     return 10
>>> 
>>> print(num())  
12
# The result will be 12 because the decorator adds 2 to the return value
```

This is equivalent to:

```python
>>> def num():
...     return 10
>>> 
>>> num = decor(num)
```

Now, when we call `num()`, the decorator `decor` will automatically be applied to modify the result:


---

### **Chaining Multiple Decorators**

You can apply multiple decorators to a single function. When multiple decorators are applied, they are executed from the **bottom up**, i.e., the decorator closest to the function definition is executed first, and then the others are applied in order.

```python
>>> def decor1(func):
...     def inner():
...         value = func()  # Call func and get value
...         return value + 2  # Modify the result and return it
...     return inner  # Return the inner function
>>> 
>>> def decor2(func):
...     def inner():
...         value = func()  # Call func and get value
...         return value * 2  # Modify the result and return it
...     return inner  # Return the inner function
>>> 
>>> @decor1
>>> @decor2
>>> def num():
...     return 10
>>> 
>>> print(num())  # Output: 24
24
```

In this example:

- The `num()` function returns `10`.
- `decor2` multiplies the result by `2`, making it `20`.
- `decor1` adds `2`, resulting in `24`.

Without the `@` syntax, this would be written as:
```python
>>> result_func = decor1(decor2(num))

>>> print(result_func())
24
```
- **`@decor2`** is applied first (it modifies the result of `num()`).
- Then, **`@decor1`** is applied to the result of `decor2(num)`.


---

### **General Syntax for Chaining Multiple Decorators**

When applying multiple decorators to a function, the syntax is as follows:

```python
>>> @dec1
>>> @dec2
>>> def func(arg1, arg2, ...):
...     pass

```

This is equivalent to:

```python
>>> def func(arg1, arg2, ...):
...     pass
>>> func = dec1(dec2(func))
```

In this case:

- **`dec2`** is applied first, then **`dec1`** is applied to the result of `dec2(func)`.

---

### **More Complex Decorators**


Example using decorators to add logging and timing functionality to a function:

```python
>>> import time
>>> 
>>> def log(func):
...     def wrapper(*args, **kwargs):
...         print(f"Calling function: {func.__name__} with arguments {args} and keyword arguments {kwargs}")
...         return func(*args, **kwargs)
...     return wrapper
>>> 
>>> def timing(func):
...     def wrapper(*args, **kwargs):
...         start_time = time.time()
...         result = func(*args, **kwargs)
...         end_time = time.time()
...         print(f"Execution time: {end_time - start_time} seconds")
...         return result
...     return wrapper
>>> 
>>> @log
>>> @timing
>>> def calculate_sum(a, b):
...     return a + b
>>> 
>>> result = calculate_sum(5, 3)
>>> print(f"Result: {result}")
Calling function: calculate_sum with arguments (5, 3) and keyword arguments {}
Execution time: 0.000001 seconds
Result: 8
```

- **`@log`** will log the function name and arguments when `calculate_sum()` is called.
- **`@timing`** will measure the execution time of `calculate_sum()`.
- The decorators are applied in a chain, starting with **`@timing`** (which measures time) and then **`@log`** (which logs the function call).

---


