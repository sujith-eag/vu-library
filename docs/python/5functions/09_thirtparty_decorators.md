---
title: "05 Functions - 10 Third-Party Decorators"
description: ""
summary: ""
date: 2025-02-16T22:54:25+05:30
lastmod: 2025-02-16T22:54:25+05:30
draft: false
weight: 54
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




**Third-party libraries** or **custom decorators** can provide additional functionality. There are more **decorators** available from **third-party libraries** and **custom implementations**. 


- **Performance optimization:** Using `@lru_cache` or `@memoize` to cache expensive function results.
- **Retrying failed operations:** Using `@retry` from `tenacity` for retry logic.
- **Logging and monitoring:** Custom decorators like `@log` can track function calls and parameters.
- **Data validation:** Using decorators for input validation before the function executes.
- **State management (Singleton pattern):** Custom decorators like `@singleton` can manage class instances.

___

### **Third-Party Decorators:**

1. **`@memoize` (from `memoization` library)**:

- **Purpose:** Caches the results of function calls (similar to `functools.lru_cache()` but with more flexibility and control).
- **Use Case:** When you want to cache the results of expensive or recursive functions.

```python
>>> from memoization import cached
>>> 
>>> @cached
... def slow_function(n):
...     # Some time-consuming task
...     return n * n
>>> 
>>> print(slow_function(5)) # (cached result)
25
```

- **Install**: `pip install memoization`


2. **`@retry` (from `tenacity` library)**:

- **Purpose:** Retries a function if it raises an exception, with configurable delays and retry attempts.
- **Use Case:** Retry a function in case of failure, like when working with unreliable external services.

```python
>>> from tenacity import retry
>>> 
>>> @retry
... def unreliable_function():
...     # This could raise an exception
...     pass
>>> 
>>> # This function will retry if it raises an exception
```

- **Install**: `pip install tenacity`



3. **`@timer` (from `timeit` or custom timer decorators)**:

- **Purpose:** Measures the execution time of a function.
- **Use Case:** Profiling a function to track how long it takes to execute.

```python
>>> import time
>>> 
>>> def timer(func):
...     def wrapper(*args, **kwargs):
...         start_time = time.time()
...         result = func(*args, **kwargs)
...         end_time = time.time()
...         print(f"Execution time: {end_time - start_time} seconds")
...         return result
...     return wrapper
>>> 
>>> @timer
... def my_function():
...     # Some operation
...     time.sleep(1)  # Simulating a delay
>>> 
>>> my_function()
Execution time: 1.000123 seconds
```


4. **`@log` (from `logging` or custom log decorators)**:

- **Purpose:** Logs function calls, inputs, and outputs for debugging or monitoring.
- **Use Case:** When you need to log function execution for tracking or debugging purposes.

```python
>>> import logging
>>> logging.basicConfig(level=logging.INFO)
>>> 
>>> def log(func):
...     def wrapper(*args, **kwargs):
...         logging.info(f"Calling function {func.__name__} with arguments: {args}, {kwargs}")
...         result = func(*args, **kwargs)
...         logging.info(f"Function {func.__name__} returned {result}")
...         return result
...     return wrapper
>>> 
>>> @log
... def add(a, b):
...     return a + b
>>> 
>>> add(3, 4)
INFO:root:Calling function add with arguments: (3, 4), {}
INFO:root:Function add returned 7
7
```

5. **`@singleton` (Custom or third-party)**:

- **Purpose:** Ensures that only one instance of a class exists throughout the program (Singleton pattern).
- **Use Case:** When you need to ensure a class has only one instance, for example, managing global state.

```python
>>> def singleton(cls):
...     instances = {}
...     def wrapper(*args, **kwargs):
...         if cls not in instances:
...             instances[cls] = cls(*args, **kwargs)
...         return instances[cls]
...     return wrapper
>>> 
>>> @singleton
... class Database:
...     def __init__(self):
...         self.connection = "Database Connection"
>>> 
>>> db1 = Database()
>>> db2 = Database()
>>> print(db1 is db2)  # Output: True (Both are the same instance)
True
```


### **Custom Decorators:**

In addition to third-party decorators, you can **create your own custom decorators** based on the needs of your application. These decorators can add logging, timing, validation, caching, or any other functionality.

- **Logging Decorator**: Logs the entry and exit of functions.

```python
>>> def log_function_call(func):
...     def wrapper(*args, **kwargs):
...         print(f"Function {func.__name__} called with arguments {args} and {kwargs}")
...         result = func(*args, **kwargs)
...         print(f"Function {func.__name__} returned {result}")
...         return result
...     return wrapper
>>> 
>>> @log_function_call
... def add(a, b):
...     return a + b
>>> 
>>> add(3, 4)
Function add called with arguments (3, 4) and {}
Function add returned 7
7
```


---

### **Summary of Built-in and External Decorators:**

| **Decorator**               | **Source**                     | **Purpose**                                              | **Use Case**                                         |
| --------------------------- | ------------------------------ | -------------------------------------------------------- | ---------------------------------------------------- |
| `@staticmethod`             | Python Built-in                | Defines a method that doesn’t take `self` or `cls`.      | When a method does not need instance data.           |
| `@classmethod`              | Python Built-in                | Defines a method that takes `cls` as the first argument. | When you need to access class-level data.            |
| `@property`                 | Python Built-in                | Makes a method behave like a read-only attribute.        | To define computed properties.                       |
| `@functools.lru_cache`      | Python Built-in                | Caches function results to avoid redundant calls.        | Optimize performance of repeated calls.              |
| `@functools.wraps`          | Python Built-in                | Preserves function metadata when wrapping a function.    | Writing custom decorators.                           |
| `@functools.singledispatch` | Python Built-in                | Creates function overloads based on argument type.       | Function overloading based on argument type.         |
| `@memoize`                  | External (e.g., `memoization`) | Caches function results.                                 | Caching results of recursive or expensive functions. |
| `@retry`                    | External (e.g., `tenacity`)    | Retries a function in case of failure.                   | Retry logic for unreliable operations.               |
| `@timer`                    | Custom                         | Measures and logs function execution time.               | Profiling and performance analysis.                  |
| `@log`                      | Custom                         | Logs function inputs and outputs.                        | Logging function calls for debugging.                |
| `@singleton`                | Custom                         | Ensures a class has only one instance.                   | Singleton pattern in class design.                   |

---



