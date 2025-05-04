---
title: "06 OOP - 02 Creating Class and Instance Variables"
description: ""
summary: ""
date: 2025-02-11T23:53:16+05:30
lastmod: 2025-02-11T23:53:16+05:30
draft: false
weight: 56
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



A class contains **methods** and **variables**, and it is used as a blueprint to create objects. An **object** is an instance of a **class**.

The variables in a class are often referred to as **instance variables** because they are created inside the instance (object).

___

### 1. Creating a Class

A class is created using the `class` keyword followed by the **class name** and a colon `:` 
```python
class Classname:
    # class body
```

**Class names** are written in **CamelCase** (starting with a capital letter) as per the Python naming convention.

We can specify a base class (which all Python classes are derived from) as `Classname(object)`, but this is not mandatory in Python as it is automatically implied.

The class does not require parentheses unless it inherits from a base class (this is a topic related to object inheritance).


---

### 2. The `__init__()` Method (Constructor)

The `__init__()` method is a special method in Python, often referred to as the **constructor**. It is automatically called when a new object of the class is created. The purpose of the `__init__()` method is to initialize the instance’s attributes and set up the initial state of the new object.

`__init__()`** method does **not** create an instance; instead, it initializes the instance by assigning the beginning values to its attributes. It is called only once during the creation of the instance.

The first parameter of `__init__()` is always **self**, which represents the instance of the class itself. This is true for all methods inside the class to allowing access to instance itself.

#### Understanding 'self'

When an object is created, `self` will allow us to access the attributes and methods of that particular object.

- When an object is instantiated, **self** stores the memory location of that object.
- Through **`self`**, we can access all the instance-specific data and methods.
- **`self`** refers to the **instance** of the class and is used to access instance variables and methods. It is automatically passed to all methods in the class as they have self as first parameter.

```python
S1 = Student()
```

Here, `S1` is an instance of the class `Student`, and it holds the memory address of the instance. The instance variable values (such as `name` and `age`) are accessed using **`self`**.

---

### 3. Using 'self' in Methods

In addition to its use in the `__init__()` method, **`self`** is also used as the first parameter in other instance methods to refer to the instance variables.

```python
>>> class Student:
...     def __init__(self):
...             self.name = 'Vishnu'
...             self.age = 20
...
...     def talk(self):
...             print( f"Hi, i am {self.name}" )
...             print( f"My age is {self.age}")
... 

>>> student1 = Student()
>>> student1.talk()
Hi, i am Vishnu
My age is 20
```

Here the method `talk()` has to act on the instance variables, so it should know the memory location of the instance variables which is by default present in `self`. By passing self, the method now knows the memory address of the current instance.

____

### 4. Instance Attributes

In Python, there are two types of variables used inside a class:
1. **Instance variables**
2. **Class variables** (also called **Static variables**)

#### Instance Variables

**Instance variables** are variables that have a separate copy for each instance (object) of the class. If you create multiple objects, each object will have its own independent copy of the instance variables. Modifying the instance variable in one object will not affect the other objects.

- **Instance Variables** are defined inside the `__init__()` method using the `self` keyword.
- **Instance Variables** can be accessed inside the class using `self.variable`, and outside the class using `instanceName.variable`.

For passing some values then they have to be passed in the `()` after the class name to the constructor in addition to self. Here default values are given as empty string and 0 to handle the values not getting passed. 
```python
>>> class Student:
...     def __init__(self, na='', ma=0):
...             self.name = na
...             self.marks = ma
...
...     def display(self):
...             print("Hi", self.name)
...             print("Your marks", self.marks)
... 

>>> s1 = Student()
>>> s1.display()
Hi 
Your marks 0

>>> s2 = Student("Anjani Roy")
>>> s2.display()
Hi Anjani Roy
Your marks 0

>>> s3 = Student("Rahul", 50)
>>> s3.display()
Hi Rahul
Your marks 50
```

In this case, `s1.name`, `s2.name`, and `s3.name` represent different values for each object (instance) of the class `Student`.

When you create an instance, you can access the instance attributes using dot notation.

```python
>>> class Dog:
...     def __init__(self, name, age):
...             self.name = name
...             self.age = age
...  # Assign the values to the instance attributes.

>>> my_dog = Dog('Will', 6)
>>> your_dog = Dog('Lucy', 3)

>>> f"My dog is {my_dog.name} and is {my_dog.age} years old."
"My dog is Will and is 6 years old."

>>> f"Your dog is {your_dog.name} and is {your_dog.age} years old."
"Your dog is Lucy and is 3 years old."
```

`my_dog.name` refers to the `name` attribute of the `my_dog` instance, and `my_dog.age` refers to its `age` attribute.

---

#### Class Variables (Static Variables)

**Class variables** are shared among all instances of a class. There is only one copy of the class variable, and if it is modified in one instance, it gets modified for all instances.

Class variables are defined directly in the class without using the `self` keyword.

To access and modify a class variable, the `cls` reference (instead of `self`) since class variables are tied to the class, not the individual instance. 

A class method can access and modify the class variable, to refer to it `cls` is passed as first parameter.  Also the built-in `@classmethod` decorator to mark a method (class method) that will work with class variables.

```python
>>> class Sample:
...     x = 10
...     @classmethod
...     def modify(cls):
...             cls.x += 1
... 

>>> s1 = Sample()
>>> s2 = Sample()
>>> s1.modify()

>>> s1.x
11
>>> s2.x
11
>>> Sample.x
11
```

In this example, `x` is a class variable, and modifying it through `s1.modify()` changes it for all instances (`s1`, `s2`, and `Sample`).

To access the class variable we can use `cls.x` and to access from outside the `classname.variable` or `instanceName.variable` can also be used.


---

- **A class** is a blueprint for creating objects and contains methods and variables.
- **An object** is an instance of a class, and it holds its own copy of the instance variables.
- The **`__init__()`** method (constructor) is used to initialize the object's attributes when the object is created.
- **`self`** is the reference to the instance of the class and allows methods to access and modify the instance’s attributes.
- **Instance Variables** are unique to each object and are defined inside the `__init__()` method using `self`.
- **Class Variables** are shared across all instances of a class and are defined directly in the class body.
- Use **`self`** to define and access instance variables and **`cls`** to define and access class variables.



____

