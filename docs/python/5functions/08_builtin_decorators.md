---
title: "05 Functions - 09 Built-in Decorators"
description: ""
summary: ""
date: 2025-02-16T22:54:05+05:30
lastmod: 2025-02-16T22:54:05+05:30
draft: false
weight: 53
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Python provides several built-in function decorators that can be used to enhance functionality. 

Some of the commonly used **Python-provided function decorators**, along with examples and use cases:

### 1. **'@staticmethod'**

- **Purpose:** Defines a static method that doesn't require an instance of the class to be called. The method doesn't take `self` as the first argument.
- **Use Case:** Used when you need a method that belongs to the class, but does not access or modify the instance state.

```python
>>> class MyClass:
...     @staticmethod
...     def greet(name):
...         return f"Hello, {name}!"
>>> 
>>> print(MyClass.greet("Alice"))
Hello, Alice!
```

```python
>>> class MathUtility:
...     @staticmethod
...     def add(a, b):
...         return a + b
>>> 
>>> print(MathUtility.add(5, 7))
12
```


---

### 2. **'@classmethod'**

- **Purpose:** Defines a class method that takes the class as the first argument (`cls`) instead of an instance (`self`).
- **Use Case:** Useful for methods that need to operate on the class itself, rather than an instance.

```python
>>> class MyClass:
...     @classmethod
...     def class_info(cls):
...         return f"This is {cls.__name__} class."
>>> 
>>> print(MyClass.class_info())
This is MyClass class.
```

```python
>>> class MyClass:
...     count = 0
...     
...     @classmethod
...     def increment_count(cls):
...         cls.count += 1
...         return cls.count
>>> 
>>> print(MyClass.increment_count())
1
>>> print(MyClass.increment_count())
2
```


---

### 3. **'@property'**

- **Purpose:** Used to define a method as a property, so it can be accessed like an attribute.
- **Use Case:** Useful for defining read-only attributes or computing values on the fly.

```python
>>> class Circle:
...     def __init__(self, radius):
...         self._radius = radius
...     
...     @property
...     def area(self):
...         return 3.14 * (self._radius ** 2)
>>> 
>>> c = Circle(5)
>>> print(c.area)  # (accessed as an attribute)
78.5
```


---

### 4. **'@functools.lru_cache()'**

- **Purpose:** A decorator that caches the results of expensive function calls, avoiding redundant computations for the same input.
- **Use Case:** Use it for functions that are called repeatedly with the same arguments, such as in recursive algorithms.

```python
>>> from functools import lru_cache
>>> 
>>> @lru_cache(maxsize=None)  # No cache size limit
... def fibonacci(n):
...     if n <= 1:
...         return n
...     return fibonacci(n - 1) + fibonacci(n - 2)
>>> 
>>> print(fibonacci(100))  # Fast calculation due to caching
354224848179261915075
```


---

### 5. **'@property\.setter'**

- **Purpose:** Defines a setter for a property, allowing you to set a value for a property created using the `@property` decorator.
- **Use Case:** Used to provide setter functionality for read-only properties.

```python
>>> class Circle:
...     def __init__(self, radius):
...         self._radius = radius
...     
...     @property
...     def radius(self):
...         return self._radius
...     
...     @radius.setter
...     def radius(self, value):
...         if value > 0:
...             self._radius = value
...         else:
...             raise ValueError("Radius must be positive")
>>> 
>>> c = Circle(5)
>>> c.radius = 10  # Successfully sets the radius
>>> print(c.radius)
10
```


---

### 6. **'@functools\.wraps()'**

- **Purpose:** A decorator used inside other decorators to preserve the metadata (e.g., `__name__`, `__doc__`) of the original function when it is wrapped.
- **Use Case:** Used when you write custom decorators to ensure the original function's name and docstring are not lost.

```python
>>> from functools import wraps
>>> 
>>> def my_decorator(func):
...     @wraps(func)
...     def wrapper(*args, **kwargs):
...         print(f"Calling {func.__name__}")
...         return func(*args, **kwargs)
...     return wrapper
>>> 
>>> @my_decorator
... def greet(name):
...     """Greet a person."""
...     return f"Hello, {name}!"
>>> 
>>> print(greet.__name__)  # (not wrapper)
greet
>>> print(greet.__doc__)   # Greet a person (not the wrapper's docstring)
Greet a person
```


---

### 7. **'@functools\.singledispatch()'**

- **Purpose:** A decorator used to define a generic function that can be customized based on the type of the first argument.
- **Use Case:** Used for method overloading, where the function behaves differently depending on the type of its first argument.

```python
>>> from functools import singledispatch
>>> 
>>> @singledispatch
... def func(arg):
...     print(f"Function for {type(arg)}: {arg}")
>>> 
>>> @func.register(int)
... def _(arg):
...     print(f"Function for int: {arg}")
>>> 
>>> @func.register(str)
... def _(arg):
...     print(f"Function for str: {arg}")
>>> 
>>> func(10)
Function for int: 10

>>> func("hello")
Function for str: hello

```


---

### 8. **'@functools.cache_property()'**

- **Purpose:** A decorator that turns a method into a property that is computed once and then cached for further accesses.
- **Use Case:** When you want to compute a property only once and cache its value for efficiency.

```python
>>> from functools import cached_property
>>> 
>>> class Square:
...     def __init__(self, side):
...         self.side = side
...     
...     @cached_property
...     def area(self):
...         print("Computing area...")
...         return self.side * self.side
>>> 
>>> sq = Square(4)
>>> print(sq.area)
Computing area...
16
>>> print(sq.area) # (cached, no "Computing area...")
16
```


---

### Summary of Python's Built-In Function Decorators

|Decorator|Purpose|Use Case|
|---|---|---|
|`@staticmethod`|Defines a method that doesn't take `self` or `cls`.|Use when a method does not require instance state.|
|`@classmethod`|Defines a method that operates on the class (`cls`).|Use when the method needs to work with the class.|
|`@property`|Turns a method into a read-only property.|Use for computed properties.|
|`@property.setter`|Defines a setter for a property.|Use for setting a value for a property.|
|`@functools.lru_cache`|Caches results of expensive function calls.|Use for optimizing functions with repeated calls.|
|`@functools.wraps`|Preserves metadata when wrapping a function.|Use when writing custom decorators.|
|`@functools.singledispatch`|Defines a function that changes behavior based on argument type.|Use for function overloading.|
|`@functools.cache_property`|Turns a method into a property with caching.|Use for expensive computed properties.|

____

