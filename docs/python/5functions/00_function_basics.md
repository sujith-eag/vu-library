---
title: "05 Functions - 01 Defining a Function"
description: ""
summary: ""
date: 2025-02-11T17:08:10+05:30
lastmod: 2025-02-11T17:08:10+05:30
draft: false
weight: 45
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Functions are named blocks of code designed to perform a specific task. When you want to execute a task defined in a function, you call the function responsible for it.

### Why Use Functions?

- Avoid repetition by defining reusable code blocks which can be called when needed.
- Improve readability and maintainability.
- Allow abstraction by breaking down complex logic into smaller parts.

Function written inside a class becomes a method and is called by either  `objectname.methodname()` or `Classname.methodname()`

___

### **Functions as First-Class Objects in Python**

In Python, **functions are first-class objects**, meaning they can be treated just like any other object. This includes the ability to:

- Assign functions to variables
- Pass functions as arguments to other functions
- Return functions from other functions
- Store functions in data structures like lists or dictionaries

This characteristic of functions allows for great flexibility and the ability to create more abstract, reusable code.


---

## Defining a Function

To define a function, use the `def` keyword, followed by the function name and parameters in parentheses `()` and `:` for the defining to begin. 
The function body is indented (Whatever gets indented is the functions body).

Defining and Calling a Function
```python CS50
>>> def hello(to):
...     print("hello", to)
... 
>>> name = input("What's your name? : ")
What's your name? : Sujith
>>> hello(name)
hello Sujith

```

```python
>>> def greet(username):   # Function with a parameter
...     """Prints a greeting message."""  
...     print(f"Hello, {username.title()}!")  
... 
>>> greet("jess")  # Function call with an argument
Hello, Jess!
```

### Function Components:

1. **Function Name**: Identifier for the function.
2. **Parameters (Arguments)**: Input values the function can accept.
3. **Body**: Indented block of statements.
4. **Return Statement**: Optionally returns a value.
5. **Function Call**: Executes the function with given arguments.

---

## Function Parameters and Arguments

Functions can accept multiple arguments.

```python
# Function with Multiple Parameters
>>> def add(a, b, c):
...     """Returns the sum of three numbers."""
...     return a + b + c
... 
>>> result = add(2, 3, 5)
>>> print(result)  
10
```

---

## Default Parameter Values

Functions can have default parameter values. If an argument is not provided during the function call, the default value is used.

```python
# Function with Default Argument
>>> def hello(to="world"):
...     """Prints a greeting with a default name."""
...     print("Hello,", to)
... 
>>> hello()  
Hello, world

>>> name = input("What's your name? ")
What's your name? : Alice

>>> hello(name)  
Hello, Alice
```


Giving default value to the function like print had `sep=' '` and `end='\n'`.
If no value is provided default can run, if defined it gets replaced.

---



### **Return Values in Python Functions**

In Python, functions can return values using the `return` statement. This enables functions to produce results that can be stored, manipulated, or used in further calculations. When a function returns a value, it stops executing and hands over the result to the caller.

A returned value can be stored in a variable, used in expressions, or even passed directly into other functions. This makes functions more flexible and powerful in Python programming.

---

### **1. Returning a Single Value**

You can define a function that performs some operation and returns a single result using the `return` statement.

```python
# Function that returns a formatted full name
>>> def format_name(first, last):
...     """Returns a formatted full name."""
...     full_name = f"{first.title()} {last.title()}"
...     return full_name
... 
>>> person = format_name("michal", "jackson")
# Call the function and store the returned value in a variable
>>> print(person)  
Michael Jackson
```

---

### **2. Returning Multiple Values**

Python allows functions to return more than one value. When you return multiple values, Python actually returns them as a **tuple**. This is useful when you want to return several pieces of data from a single function.

```python
# Function that returns multiple values
>>> def calculate_area_and_perimeter(length, width):
...     """Returns both the area and perimeter of a rectangle."""
...     area = length * width
...     perimeter = 2 * (length + width)
...     return area, perimeter  # Returning multiple values as a tuple
... 
... # Call the function and unpack the returned tuple into separate variables
>>> area, perimeter = calculate_area_and_perimeter(5, 3)
>>> print("Area:", area)  
Area: 15
>>> print("Perimeter:", perimeter)  
Perimeter: 16
```

---

### **3. Returning No Value (Implicit Return)**

A function does not always have to return a value. If a function does not include a `return` statement, or if it just has `return` without specifying any value, Python will implicitly return `None`. This is useful for situations where the function performs an action but doesn't need to return a result.

```python
# Function that performs an action without returning a value
>>> def print_message(message):
...     """Prints the given message but returns nothing."""
...     print(message)
... 
>>> result = print_message("Hello, World!")
Hello, World!
>>> print(result)  
None
```


---

### **4. Returning Values in Expressions**

You can also use the return value of a function directly in expressions or as arguments to other functions, making the code more compact and expressive.

```python
# Function returning a value
>>> def add_numbers(a, b):
...     """Returns the sum of two numbers."""
...     return a + b
... 
... # Using the returned value directly in an expression
>>> result = add_numbers(3, 5) * 2  
>>> print(result)  
16
```



---




### Assigning Functions to Different Names

A function can be assigned to another name (variable), allowing it to be referenced differently using the variable.

```python
# Assigning a function to a new name
def f(a, b, c):
    ...

g = f  # g is now another name for f
```

```python
>>> def greet(name):
...     return f"Hello, {name}!"
...
... # Assigning the function to a variable
>>> greeting_function = greet
>>> # Calling the function using the variable
>>> print(greeting_function("Alice"))  
Hello, Alice!
```

#### **Passing Functions as Arguments**

Since functions are objects, you can pass them as arguments to other functions, which allows for higher-order functions (functions that take other functions as arguments).

This technique is useful for passing functions as arguments to other functions.

```python
# Applying a function repeatedly
>>> def apply(func, x, n):
...     res = x
...     for i in range(n):
...         res = func(res)
...     return res
... 
>>> def square(x):
...     return x * x
... 
>>> print(apply(square, 5, 2))  
625
```

Here, `square` is passed as `func` to `apply()`.



---

#### **Returning Functions from Functions**

Function definitions can be conditionally assigned.

```python
if condition:
    def f(a, b, c):
        ...
else:
    def f(a, b, c):
        ...
```

Functions can also be returned from other functions. This is useful for scenarios where the returned function is created dynamically or customized based on input.

```python
>>> def multiplier(factor):
...     """Returns a function that multiplies its argument by a given factor."""
...     def multiply(x):
...         return x * factor
...     return multiply
... 
... # Create a function that multiplies by 3
>>> times_three = multiplier(3)
>>> print(times_three(5))  
15
```

- The `multiplier()` function returns a new function `multiply()` that multiplies its argument by a specific factor.
- We create a function `times_three` by calling `multiplier(3)`, and then use it to multiply `5` by `3`, resulting in `15`.

___

## Customizing Function Behavior

Functions can be customized based on parameters, such as sorting based on a comparison function.

```python
>>> def sort_function(l, cmp_fn=default_cmp_fn):
...     pass
```


____
