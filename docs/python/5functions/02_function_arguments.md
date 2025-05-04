---
title: "05 Functions - 03 Arguments"
description: ""
summary: ""
date: 2025-02-11T19:58:34+05:30
lastmod: 2025-02-11T19:58:34+05:30
draft: false
weight: 47
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



In Python, the terms **pass by value** and **pass by reference** don't apply in the same way as in some other languages. This is because everything in Python is an object, and functions always pass object references. However, the way mutable and immutable objects are handled differs.

Values are passed to functions similar to assigning values to a name.

```python
def power(x, n):
    ...

power(n=5, x=4)  # Assigns values explicitly
```

#### **1. Immutable Objects (e.g., int, str, float)**

Immutable objects, such as integers, strings, and floats, cannot be changed in place. When you pass these objects to a function, a reference to the object is passed, but since the object is immutable, you cannot modify the value inside the function and have it affect the original object.

```python
>>> def update_number(n):
...     n = 10  
... # This local variable, doesn't change the original
...     print("Inside function:", n)
... 
>>> x = 5
>>> update_number(x)
Inside function: 10
>>> print("Outside function:", x)
Outside function: 5
```

- The value of `x` remains unchanged because integers are immutable in Python. The `n = 10` inside the function creates a new local variable `n` rather than modifying the original `x`.

#### **2. Mutable Objects (e.g., list, dict)**

Mutable objects, such as lists and dictionaries, can be changed in place. When you pass a mutable object to a function, any changes made to the object inside the function will be reflected in the original object outside the function.

```python
>>> def update_list(lst):
...     lst.append(4)  # Modifies the original list
... 
>>> my_list = [1, 2, 3]
>>> update_list(my_list)
>>> print(my_list)
[1, 2, 3, 4]
```

```python
>>> def update(l, i, v):
...     if i >= 0 and i < len(l):  
...         l[i] = v
...         return True
...     else:
...         v = v + 1
...         return False
... 
>>> ns = [3, 11, 12]
>>> z = 8
>>> update(ns, 2, z)  # Updates ns[2] to 8
True
>>> update(ns, 4, z)  # Index out of range, v increments but z remains unchanged
False
```

Since `v` is immutable, its actual value does not change outside the function.

#### **3. Creating Objects Inside Functions**

Objects created inside a function will not be available outside the function unless explicitly returned. This means that any variables or objects created inside a function are local to that function.

```python

>>> def create_list():
...     lst = [1, 2, 3]  # Local list
...     return lst
... 
>>> new_list = create_list()
>>> print(new_list)
[1, 2, 3]
```


---

## Arguments

A parameter is a variable in a function definition, while an argument is the value passed to the function.

### **Formal and Actual Arguments in Functions**

In Python, functions can accept arguments, which are passed into the function when it is called. These arguments are categorized as **formal arguments** and **actual arguments**.


**Formal Arguments**: These are the parameters defined in the function definition that receive the values passed to the function.

**Actual Arguments**:  These are the values passed into the function when it is called.

```python
>>> def greet(name):  # 'name' is a formal argument
...     print(f"Hello, {name}!")
... 
>>> greet("Alice")  # "Alice" is the actual argument
Hello, Alice!
```

- `name` is a **formal argument** in the function definition.
- `"Alice"` is an **actual argument** passed when calling the function.

___

### Positional Arguments

Arguments must be passed in the same order as the parameters.

```python
>>> def dis_pet(animal, name):
...     print(f"\nI have a {animal.title()}")
...     print(f"Its name is {name.title()}")
... 
>>> dis_pet("hamster", "harry")
I have a Hamster
Its name is Harry

>>> dis_pet("dog", "Jack")
I have a Dog
Its name is Jack

```

### Keyword Arguments

Keyword arguments allow passing values without considering the order since the value is assigned to the parameters name.

```python
>>> def dis_pet(animal, name):
...     print(f"\nI have a {animal.title()}")
...     print(f"Its name is {name.title()}")
... 
>>> dis_pet(animal="hamster", name="harry")
I have a Hamster
Its name is Harry

>>> dis_pet("dog", "Jack")
I have a Dog
Its name is Jack

```

---

### Default Arguments in Functions

Default values simplify function calls by providing a fallback value when an argument is omitted.

```python
>>> def dis_pet(animal, name="Will"):
...     print(f"\nI have a {animal.title()}")
...     print(f"Its name is {name.title()}")
... 
>>> dis_pet(name="harry", animal="hamster")
I have a Hamster
Its name is Harry

>>> dis_pet("dog", "Jack")
I have a Dog
Its name is Jack

>>> dis_pet("cat")  # Defaults to "Will" unless specified
I have a Cat
Its name is Will
```

The default value of a function must be available at definition time.

```python
>>> def quicksort(A, l=0, r=None):
...     if r is None:
...         r = len(A)
...     # Quicksort logic here
... 
>>> quicksort([5, 2, 9, 1])
```

This will not work as default value as r is dependent on A the values should be defined before run time
```python
def Quicksort(A, l=0, r=len(A)):
```

Function calls with default arguments:

```python
def fan(a, b, c=14, d=22):
    ...

fan(13, 12)  # Equivalent to fan(13, 12, 14, 22)
fan(13, 12, 16)  # Equivalent to fan(13, 12, 16, 22)
```

```python
def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()  # Output: Hello, Guest!
greet("Alice")  # Output: Hello, Alice!
```


```python
int()  # Converts string to integer

int(s, b)  # s is the string, b is the base (default: 10)
int("76")  # Output: 76
int("A5", 16)  # Output: 165 (base 16)
```

---

## Optional Arguments

Making an argument optional by providing a default empty string:

```python
>>> def get_formatted_name(first_name, last_name, middle_name=''):
...     if middle_name:
...         full_name = f"{first_name} {middle_name} {last_name}"
...     else:
...         full_name = f"{first_name} {last_name}"
...     return full_name.title()
... 

>>> musician = get_formatted_name('jimi', 'hendrix')
>>> print(musician)
Jimi Hendrix

>>> musician = get_formatted_name('john', 'hooker', 'lee')
>>> print(musician)
John Lee Hooker
```

This allows the function to work with or without the middle name argument.


___


#### **Variable-Length Arguments (`*args`)**

The `*args` syntax allows a function to accept a variable number of positional arguments. These arguments are stored in a tuple.

```python
>>> def add_numbers(*args):
...     return sum(args)
... 
>>> print(add_numbers(1, 2, 3))
6
>>> print(add_numbers(5, 10))
15
```

**Passing an Arbitrary Number of Arguments**

When you don't know ahead of time how many arguments a function needs to accept, python allows function to collect an arbitrary no of arguments, from the calling statement. by using `*` in parameters, it accepts as many as it is given.

```python
>>> def make_pizza(*toppings):
...     print("\nMaking pizza with the following toppings:")
...     for topping in toppings:
...         print(f"-{topping}")
... 

>>> make_pizza('pepperoni')
Making pizza with the following toppings:
- pepperoni

>>> make_pizza('mushroom', 'pepper', 'extra cheese')
Making pizza with the following toppings:
- mushroom
- pepper
- extra cheese
```

Using both positional and arbitrary arguments:        
arbitrary must be in the end, python matches with first and passes rest to the end.

```python
>>> def make_pizza(size, *toppings):
...     print(f"\nMaking a {size}-inch pizza with the following toppings:")
...     for topping in toppings:
...         print(f"-{topping}")
... 

>>> make_pizza(16, 'pepperoni')
Making a 16-inch pizza with the following toppings:
- pepperoni

>>> make_pizza(12, 'mushroom', 'green pepper', 'cheese')
Making a 12-inch pizza with the following toppings:
- mushroom
- green pepper
- cheese
```

___

#### **Keyword Variable-Length Arguments ('**kwargs')**

The `**kwargs` syntax allows a function to accept a variable number of keyword arguments (key-value pairs). These arguments are stored in a dictionary.

```python
>>> def display(farg, **kwargs):
...     print('Formal argument:', farg)
...     for key, value in kwargs.items():
...         print(f"key = {key}, value = {value}")
... 
>>> display(5, rho=10, name="Uname", cd="UNNCD")
Formal argument:  5
key = rho, value = 10
key = name, value = Uname
key = cd, value = UNNCD

```

**Using Arbitrary keyword Arguments:**

Sometimes you'll want to accept an arbitrary number of arguments, but you won't know ahead of time, what kind of information will be passed to the function. In this case, you can write functions that accept as many key-value pairs as the calling statement provides.

```python
# **kwargs, used to collect non-specific keyword arguments
>>> def build_profile(first, last, **user_info):        
...     user_info['first_name'] = first   
...     user_info['last_name'] = last
...    # Being placed into dictionary with keys
...     return user_info
... 
>>> user_profile = build_profile('albert', 'einstein', location ='princeton', field = 'physics')

>>> print(user_profile)
{'location': 'princeton', 'field': 'physics', 'first_name': 'albert', 'last_name': 'einstein'}
```

