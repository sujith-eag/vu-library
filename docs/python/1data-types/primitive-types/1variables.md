---
title: "01 PDT - 01 Variables"
description: ""
summary: ""
date: 2024-12-17T22:32:32+05:30
lastmod: 2024-12-17T22:32:32+05:30
draft: false
weight: 10
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



In languages like Java, C, and others, variables are directly tied to memory allocation. A specific memory "box" is created for the variable, and the value is stored within it. If the value changes, the box is updated with the new value.  
When one variable is assigned to another, the value is copied into a new memory "box."

---

### Variables in Python

In Python, a variable is more of a **reference** or **label** rather than a direct container for data. When you assign a value to a variable, the variable is essentially given a **tag** (or name) that points to a particular object (value) in memory. This means the variable doesn't directly store the data itself; it points to a location in memory where the data is stored.

If the value associated with a variable changes (e.g., when you reassign a new value to the variable), the variable now points to a new object, and the old value becomes a **referenced object**. Once the reference to the old value is lost (i.e., no variable is pointing to it), the **garbage collector** will eventually remove the object from memory to free up space.

This behavior is crucial for understanding Python’s memory management, particularly how **immutable** and **mutable** objects are handled. For example:
- **Immutable objects** (e.g., integers, strings, tuples) cannot be changed after they are created. When you "change" an immutable object, Python creates a new object and points the variable to this new object.
- **Mutable objects** (e.g., lists, dictionaries) can be modified in place. If you assign a mutable object to a variable and change its contents, the variable still points to the same object in memory, and the changes will be reflected in all references to that object.

In summary,     
it’s better to think of variables as **labels** that point to values or objects, rather than traditional storage containers. When you assign one variable to another, you are simply creating another label (variable) that points to the same memory location. Both variables now refer to the same object in memory.

---

### Rules for Variable Names

Python has specific rules regarding valid variable names:
**Variable names can contain**:
- **Letters** (both uppercase and lowercase)
- **Numbers** (but **not at the start** of the name)
- The **underscore** character (`_`)

Examples of valid variable names:
```python
my_variable
name1
user_age
```

**Variable names cannot**:
- Begin with a **number** (e.g., `1variable` is invalid)
- Contain spaces (e.g., `my variable` is invalid)
- Python is **case-sensitive**, meaning that `myVariable` and `myvariable` are considered different variables.
- Reserved keywords (such as `if`, `else`, `for`, etc.) cannot be used as variable names, as they have predefined meanings in the language.

*(Note: A "traceback" refers to the detailed report that Python generates when an error occurs during the execution of your program. It shows where the error happened in your code, making it easier to debug.)*


---

### Comments in Python

```python
# Single-line comment

'''
Multiline comment
'''

"""
Multiline comment
"""
```

- Triple quotes (`'''` or `"""`) are not technically multiline comments, but rather string literals that can span multiple lines.
- These strings are only treated as comments if they are not assigned to a variable. When unused, they are removed from memory.
- If used at the beginning of a function, class, or method, they are called **docstrings**, which are useful for documentation purposes.

---

### **Constants in Python**

Python does not have a built-in constant type, meaning that there is no special syntax for defining constants. 

- **No Built-in Constant Type**: Python doesn't enforce constants, so you can still reassign a value to a "constant" if desired.
- **Naming Convention**: Constants are typically written in **all uppercase** with words separated by underscores (e.g., `MAX_CONNECTION`, `PI`, `TOTAL_ITEMS`).
- **Immutability by Convention**: While Python doesn’t enforce immutability, constants are meant to represent values that should not be changed during the program's execution. The convention suggests that once assigned, the constant's value should remain unchanged.

```python
MAX_CONNECTION = 5000
PI = 3.14159
TOTAL_ITEMS = 100
```

Even though Python does not prevent you from reassigning values to these constants, it’s best practice to treat them as values that should not be modified.

---


### Python Keywords

The following keywords have a specific meaning in Python. If you try to use any of them as variable names, you will encounter an error:

```python
False    await    else     import    pass
None     break    except    in        raise
True     class    finally   is        return
and      continue for      lambda    try
as       def      from      nonlocal  while
assert   del      global    not       with
async    elif     if        or        yield
```

---

### Python Built-in Functions

You can use the following built-in functions as variable names, but **doing so will override their behavior**:

```python
abs()        complex()    hash()       min()        slice()     aiter()      delattr()    help()      next()      sorted()
all()        dict()       hex()        object()     staticmethod() any()      dir()       id()        oct()       str()
anext()      divmod()     input()      open()       sum()        ascii()     enumerate() int()       ord()       super()
bin()        eval()       isinstance() pow()        tuple()     bool()      exec()      issubclass() print()     type()
breakpoint() filter()      iter()       property()   vars()       bytearray() float()      len()        range()     zip()
bytes()      format()     list()       repr()       __import__() callable()   frozenset() locals()     reversed()  chr()
getattr()    map()        round()      classmethod() globals()    max()       set()        compile()    hasattr()  memoryview()
setattr()
```


___


```c
# >>> import this

The Zen of Python, by Tim Peters
  
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

