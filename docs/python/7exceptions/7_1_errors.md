---
title: "07 Exceptions - 01 Errors"
description: ""
summary: ""
date: 2025-02-11T23:55:10+05:30
lastmod: 2025-02-11T23:55:10+05:30
draft: false
weight: 65
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



**Exceptions in Python**

Exceptions are special objects in Python that are created to manage errors that arise while the program is running. They allow you to handle unexpected situations without crashing your program.

- **Predictable errors**: Errors that are expected during the execution of the program (e.g., dividing by zero, trying to access a missing dictionary key).
- **Contingency plan**: Exception handling allows you to define a way to handle these predictable errors gracefully.

When an exception occurs, if not handled, it will terminate the program's execution. Exception handling enables you to provide a way to recover from these errors and continue execution.

---

### **Types of Errors**

Python errors can be broadly classified into two types: **syntax errors** and **runtime errors**.

#### 1. **Syntax Errors**

These errors occur when the code doesn't follow the correct syntax or structure in Python. Syntax errors prevent the code from running at all.

```python
# SyntaxError: invalid syntax
print("Hello world"  # Missing closing parenthesis
```

#### 2. **Runtime Errors**

These errors occur during the execution of the program, and they are handled using exceptions.

- **NameError**: When a variable is referenced before it’s defined.

```python
# NameError: name 'x' is not defined
print(x)
```

- **ValueError**: When a function receives an argument of the correct type but inappropriate value.

```python
# ValueError: invalid literal for int() with base 10: 'cat'
x = int('cat')  # Cannot convert 'cat' to an integer
```

- **ZeroDivisionError**: When a division by zero is attempted.

```python
# ZeroDivisionError: division by zero
y = 10 / 0
```

- **IndexError**: When an invalid index is used to access a list.

```python
# IndexError: list index out of range
my_list = [1, 2, 3]
print(my_list[5])  # Index 5 is out of range
```

- **KeyError**: When attempting to access a dictionary with a key that doesn't exist.

```python
# KeyError: 'some_key'
my_dict = {'key1': 'value1'}
print(my_dict['some_key'])  # Key does not exist
```

---

### **Handling Exceptions**

In Python, exceptions can be caught and handled using `try-except` blocks. This allows you to anticipate errors and take appropriate actions without stopping the program.

#### **Basic Syntax of Exception Handling**:

```python
# Using try-except to handle errors
try:
    x = int(input("What is x? "))
    print(f"x is {x}")
except ValueError:
    print("x is not an integer")  # Handle specific error (ValueError)
```

#### **Multiple Except Blocks**:

You can handle different types of errors separately by using multiple `except` blocks.

```python
try:
    ...  # Code that may raise errors
except IndexError:
    ...  # Handling IndexError
except (NameError, KeyError):  # Handle multiple errors in one block
    ...  # Handling NameError or KeyError
except:  # General catch-all block for any other error
    ...
else:
    ...  # Code to execute if no error occurs (i.e., code runs successfully)
```

- The `else` block is executed only if the code inside the `try` block runs without exceptions.
- The `except` block catches the exceptions and handles them.
- The `except` block can be used with specific errors (like `ValueError`), or you can use a general `except` to catch any exception.

---

### **Using Exceptions "Positively"**

Exceptions can be used as a tool for positive programming, especially when dealing with situations like missing keys in a dictionary. Instead of checking if the key exists before performing an action, you can try to perform the action directly and handle the exception if it occurs.

#### **Traditional Approach**: Check if the key exists before modifying the dictionary.

```python
# Traditional approach using if statement
b = {}
if b in scores.keys():   # Check if the key exists in the dictionary
    scores[b].append(s)  # Append to the list if the key exists
else:
    scores[b] = [s]      # Create the key if it doesn't exist
```

#### **Using Exceptions**: Handle the exception when the key doesn't exist.

```python
# Using exceptions to handle missing keys
try:
    scores[b].append(s)  # Try to append to the list
except KeyError:  # If the key doesn't exist, a KeyError will occur
    scores[b] = [s]  # Create the key and add the value
```

- **Why use exceptions positively?** This approach simplifies the code by removing the need for conditional checks. It relies on trying the operation and handling the exception if it occurs, instead of explicitly checking beforehand.

---

### **Summary of Exception Handling**

- **`try` block**: Contains the code that might cause an error.
- **`except` block**: Catches the exception and allows you to handle it without crashing the program.
- **`else` block**: Executes if no exception occurs in the `try` block.
- **`finally` block** (optional): Executes code regardless of whether an exception occurred or not. It’s typically used for cleanup actions, such as closing files or releasing resources.

By using exception handling, you can ensure that your program can recover gracefully from predictable errors and keep running, making it more robust and user-friendly.

---

