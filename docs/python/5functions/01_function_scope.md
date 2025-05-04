---
title: "05 Functions - 02 Scope of Variables"
description: ""
summary: ""
date: 2025-02-11T17:08:40+05:30
lastmod: 2025-02-11T17:08:40+05:30
draft: false
weight: 46
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



If a variable is defined inside a function, it cannot be accessed outside its scope.


**Function Calls and Scope Issues**

The `main()` function prompts for a name and calls another function to process it.

```python
# Defining and calling functions
>>> def main():
...     name = input("What's your name? ")    
...     hello(name)
... 
>>> def hello(to="world"):
...     print("Hello,", to)
... 
>>> main()
What's your name? : Sujith
Hello, Sujith
```

```python
# Scope issue example
>>> def main():
...     name = input("What's your name? ")    
...     hello()
... 
>>> def hello():   # No parameter defined
...     print("Hello,", name)  
... 
>>> main()
What's your name? : Sujith
NameError: name is not defined
```

Since `name` is local to `main()`, `hello()` cannot access it directly.

Issue of "Scope" which refers to a variable only existing in the context it was defined in. `name` was defined in `main()` so it cannot be used directly in `hello()`.
When the value is handed to `hello()` within the `main()`, it can be used.
Its for each function to name its own variable so the "name" variable in main can be passed to "hello" which becomes "to"

---

Returning values allows functions to pass data back.

```python
# Returning values between functions
>>> def main():
...     x = int(input("What's x? "))
...     print("Value of x squared is:", square(x))
... 
>>> def square(n):
...     return n * n  
... 
>>> main()
What's x? 4
Value of x squared is: 16
```

---

## Scope in Functions

### Local vs. Global Scope

Variables inside a function are separate from those outside.

```python
# Scope demonstration
>>> def f():
...     y = x
...     print(y)
... 
>>> x = 7  # Global variable
>>> f()  
7
```

If a variable is defined inside the function, it does not check the external definition:

```python
# Local scope overriding global
>>> def f():
...     y = x  
...     print(y)  
...     x = 22  # Local x is defined after usage  
... 
>>> x = 7
>>> f()
UnboundLocalError: local variable 'x' referenced before assignment
```
in first case, there is no x inside the function so it checks outside.
this applies only to immutable values.

___

### Global Variables and Mutability

Lists and dictionaries are mutable and can be updated globally.

```python
# Modifying a global mutable variable

>>> def f():
...     y = x[0]
...     print(y)
...     x[0] = 22  # Modifies global list
... 
>>> x = [7]  # x is a list
>>> f()  # Prints 7 and updates x
7
>>> print(x)  
[22]
```

### Modifying Global Immutable Variables

To modify global immutable variables, `global` must be declared.

```python
# Using global to modify immutable variables
>>> def f():
...     global x  # Declare global usage
...     y = x
...     print(y)
...     x = 22  # Modifies global x
... 
>>> x = 7
>>> f()  #  Prints 7, updates x to 22  
7
>>> print(x)  
22
```

---

## Nested Functions

A function can be defined inside another function called "helper" function. 

```python
# Nested functions example
>>> def f():
...     def g(a):
...         return a + 1
...     def h(b):
...         return 2 * b
...     global x
...     y = g(x) + h(x)
...     print(y)
...     x = 22
... 
>>> x = 7
>>> f()  
15
>>> print(x)  
22
```

Here, `g()` and `h()` are only accessible within `f()`. Nested functions are useful for encapsulating helper logic within a function.

---

### **Global Keyword**

The `global` keyword in Python allows you to modify a variable defined outside a function from within the function. Without using `global`, a variable inside a function would be considered local, and changes to it wouldn't affect the global variable.

```python
>>> x = 5
>>> def modify_global():
...     global x
...     x = 10  # This modifies the global variable 'x'  
... 
>>> modify_global()
>>> print(x)  
10
```

- The `global x` statement inside the function tells Python to modify the global `x` variable, not a local one.
- After calling `modify_global()`, the value of `x` is updated to `10`.

---

### **Passing a Group of Elements to a Function**

To pass multiple elements (such as a list of numbers) to a function, you can group them together in a list or another collection type and pass that collection to the function.

##### **Example: Passing a List to a Function**

```python
>>> def process_numbers(lst):
...     total = sum(lst)
...     print("Total:", total)
... 
>>> numbers = [int(x) for x in input().split()]
>>> process_numbers(numbers)
1 2 3 4
Total: 10
```

- The `process_numbers()` function accepts a list of numbers, calculates the total sum, and prints it.
- The list `numbers` is created by reading space-separated input values, converting them to integers, and passing the list to the function.

This approach is flexible and can be adapted to process any group of data.
