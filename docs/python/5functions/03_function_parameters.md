---
title: "05 Functions - 04 Parameters"
description: ""
summary: ""
date: 2025-02-11T19:58:41+05:30
lastmod: 2025-02-11T19:58:41+05:30
draft: false
weight: 48
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---





In Python, parameters are used to pass values into functions. A parameter can have an **optional** value, often represented by `None`, which acts as a placeholder for an argument that may or may not be provided.

The special value `None` is often used in conditional tests because it evaluates to `False`. This allows us to include logic to handle missing or optional parameters.

```python

>>> def build_person(first_n, last_n, age=None):
...     """Builds a dictionary representing a person."""
...     person = {"first": first_n, "last": last_n}
...     if age:  # If age is provided, add it to the dictionary
...         person["age"] = age
...     return person
... 
>>> name = build_person("jimi", "hendrix", 27)
>>> print(name)
{'first': 'jimi', 'last': 'hendrix', 'age': 27}

>>> name_without_age = build_person("jimmy", "page")
>>> print(name_without_age)
{'first': 'jimmy', 'last': 'page'}
```


---

### **Using Functions with a While Loop**

Functions and loops can work together to make your program interactive and repetitive. A **while loop** can be used to repeatedly ask for input, such as names, and call a function based on that input.

```python
>>> def get_formatted_name(first_name, last_name):
...     """Returns a neatly formatted full name."""
...     full_name = f"{first_name} {last_name}"
...     return full_name.title()
... 
>>> while True:
...     print("\nPlease tell me your name: ")
...     print("(Enter 'q' at any time to exit)")
... 
...     f_name = input("First Name: ")
...     if f_name == "q":
...         break
... 
...     l_name = input("Last Name: ")
...     if l_name == "q":
...         break
... 
...     name = get_formatted_name(f_name, l_name)
...     print(f"\n{name.title()}")
```

---

### **Passing a List to a Function**

Functions can also process multiple values by accepting a **list** (or any other collection) as an argument. This allows the function to perform an operation on each element in the list.

```python
>>> def greeting(names):
...     """Prints a greeting for each name in the list."""
...     for name in names:
...         print(f"Hello, {name.title()}.")
... 

>>> usernames = ['hannah', 'ty', 'margot']

>>> greeting(usernames)
Hello, Hannah.
Hello, Ty.
Hello, Margot.
```

- The `greeting()` function takes a list of names (`usernames`) as an argument.
- It then loops through the list and prints a greeting for each name.

---

#### **Moving Elements to a New List and Printing Without a Function**

You can perform operations like moving elements from one list to another and then printing them without using functions. This is useful for simple tasks but can become cumbersome when working with larger or more complex programs.

```python
>>> unprinted_designs = ['phone case', 'robot pendant', 'dodecahedron']
>>> completed_models = []
>>> while unprinted_designs:
...     one = unprinted_designs.pop()
...     print(f"The following model is done: {one}")
...     completed_models.append(one)
... 
...
>>> print("\nThese have been printed:")
>>> for model in completed_models:
...     print(model)
The following model is done: dodecahedron
The following model is done: robot pendant
The following model is done: phone case

These have been printed:
dodecahedron
robot pendant
phone case
```


---

### **Performing the Same Action with Functions**

To make the code more modular and reusable, you can refactor repetitive code into functions. This allows you to encapsulate logic, making the program more organized and easier to maintain.

```python
>>> def making_print(unprinted_designs, completed_models):
...     """Simulates printing each design until none are left."""
...     while unprinted_designs:
...         one = unprinted_designs.pop()
...         print(f"The following model is done: {one}")
...         completed_models.append(one)
... 
>>> def last_check(completed_models):
...     """Displays all completed models."""
...     print("\nThese have been printed:")
...     for model in completed_models:
...         print(model)
... 

>>> # Lists to store designs
>>> unprinted_designs = ['phone case', 'robot pendant', 'dodecahedron']
>>> completed_models = []

>>> # Call functions
>>> making_print(unprinted_designs, completed_models)
>>> last_check(completed_models)
The following model is done: dodecahedron
The following model is done: robot pendant
The following model is done: phone case

These have been printed:
dodecahedron
robot pendant
phone case
```

- The `making_print()` function moves designs from `unprinted_designs` to `completed_models`.
- The `last_check()` function prints out the models that have been completed.

By using functions, we can clearly separate different pieces of logic, making the code easier to follow and reuse.

---

### **Using Slice Notation to Pass a Copy of a List**

When you need to pass a **copy** of a list to a function instead of the original list, you can use **slice notation** (`[:]`). This creates a shallow copy of the list, ensuring that any changes made to the copy inside the function do not affect the original list.

```python
>>> def print_models(unprinted_designs, completed_models):
...     """Prints each model and adds it to the completed models list."""
...     while unprinted_designs:
...         one = unprinted_designs.pop()
...         print(f"Printing model: {one}")
...         completed_models.append(one)
... 
>>> # Lists
>>> unprinted_designs = ['phone case', 'robot pendant', 'dodecahedron']
>>> completed_models = []
>>> # Call the function with a copy of the list
>>> print_models(unprinted_designs[:], completed_models)
>>> 
>>> # Original list remains unchanged
>>> print("\nUnprinted designs after function call:")
>>> print(unprinted_designs)
['phone case', 'robot pendant', 'dodecahedron']
>>> 
>>> print("\nCompleted models:")
>>> print(completed_models)
['dodecahedron', 'robot pendant', 'phone case']

```

- The `[:]` slice notation creates a copy of the `unprinted_designs` list and passes it to the `print_models()` function.
- The original list `unprinted_designs` remains unchanged because we passed a copy, not the original list.

This approach ensures that the original data remains intact while still allowing the function to perform operations on it.
