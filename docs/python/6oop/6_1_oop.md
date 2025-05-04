---
title: "06 OOP - 01 Introduction to OOP Features"
description: ""
summary: ""
date: 2025-02-11T23:53:03+05:30
lastmod: 2025-02-11T23:53:03+05:30
draft: false
weight: 55
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



In traditional software development, tasks are divided into several sub-tasks, with each sub-task represented as a procedure or function. This approach is called the **Procedure-Oriented Approach**.

In Object-Oriented Programming, the focus shifts from functions to objects. A **class** serves as a module that contains both **data** (variables) and **methods** (functions) to accomplish tasks. 

The main task is divided into sub-tasks, and these sub-tasks are represented as **classes**. Each class contains methods to perform several interrelated tasks. This is known as the **Object-Oriented Programming (OOP)** approach.

### Five Key Features of OOP

1. **Classes and Objects**
2. **Encapsulation**
3. **Abstraction**
4. **Inheritance**
5. **Polymorphism**

---

### 1. Classes and Objects

The foundation of OOP is the concept of an **object**. An object is any entity that exists in the real world and can be distinguished from others. Everything that exists in the world can be considered an object.

An object has:
- **Attributes** of object represented by variables.
- **Actions** performed by object are represented by methods (functions).

Objects with similar behavior belong to the same category, called a **class**. For example, an individual person is an object, while the category "person" is a class.

A **class** is a blueprint or template used to create objects. The attributes and methods of a class are inherited by its objects, which are also called **instances**. While a class does not physically exist, objects created from it do.

### 2. Encapsulation

**Encapsulation** is the process of binding the data (variables) and the methods (functions) that act on the data together in a single unit, called a class. This protects the data from external interference and misuse.

In languages like **C++** and **Java**, class members (variables) are **private** by default, and methods are **public** by default. However, in Python, all members of a class are **public** by default unless specified otherwise.

Encapsulation also isolates members of different classes from one another. Each object has its own memory, preventing data from being overwritten. This allows for the use of the same variable names in different classes (e.g., `id`, `name`, `address` in `Employee` and `Student` classes).

**Example of Encapsulation:**
If a method or variable name starts and ends with two underscores, it is a built-in method or variable designed for a specific purpose, such as `__init__()` or `__name__`.


---

### 3. Abstraction

**Abstraction** is the process of hiding unnecessary details and only exposing the relevant parts of the data or functionality to the user. This helps reduce complexity and allows users to focus on essential information.

In **Java**, abstraction is achieved using access specifiers like **private**, **protected**, and **public**. In **Python**, everything is public by default, but private members can be simulated by adding two underscores before a variable name (e.g., `__var`).

**Example of Abstraction in Python:**

```python
class MyClass:
    def __init__(self):
        self.__y = 3  # Private variable

# Accessing the private variable directly will result in an error
inst = MyClass()
print(inst.y)  # Error
```

However, this private variable can be accessed using **name mangling**:     
Name mangling means using the class name differently by putting one underscore before the class name and two underscores after the class name.

```python
print(inst._MyClass__y)  # Access private variable
```

By convention, a single underscore (`_var`) indicates a protected member that should not be imported into other files.


**Interface vs Implementation**: A class defines an interface (a set of functions that interact with the object). However, the implementation details of these functions should be hidden (private) to prevent direct manipulation like a black box. This allows for optimizations in the implementation without affecting how the class is used.


---

### 4. Inheritance

Creating new classes from from existing classes so new classes will acquire all the features of the existing classes is called inheritance.

**Inheritance** is a mechanism where one class (the **subclass**) inherits the attributes and methods of another class (the **superclass**). This allows the subclass to reuse code and add its own unique features.

To create a subclass in Python, you define it as follows:

```python
class B(A):
    pass
```

In this case, class `B` inherits the properties of class `A`. The subclass `B` can access the members of both class `A` and class `B`.

The advantages of inheritance include:

- Reusability of code.
- Easier code maintenance and management.
- A hierarchical organization of classes, which makes the code modular and well-structured.

---

### 5. Polymorphism

**Polymorphism** means "many forms." It refers to the ability of a method or object to exhibit different behaviors depending on the context.

In Python, polymorphism is commonly achieved by using the same method name with different arguments, enabling different operations based on the type of input.

**Example of Polymorphism:**

```python
def add(a, b):
    print(a + b)

add(1, 2)         # Addition of two numbers
add('Hello', 'World')  # Concatenation of two strings
```

This function will print addition of two numbers if numbers are passed and Concatenates strings if strings are passed. So it is exhibiting polymorphism.

---

The programming languages which follow all the five features of OOP are called object oriented programming languages.

Object-Oriented Programming (OOP) languages, such as **C++**, **Java**, and **Python**, implement these five key features—**Classes and Objects**, **Encapsulation**, **Abstraction**, **Inheritance**, and **Polymorphism**—to provide a structured and modular approach to software development.


---

