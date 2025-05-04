---
title: "06 OOP - 06 Polymorphism in Python"
description: ""
summary: ""
date: 2025-02-11T23:54:04+05:30
lastmod: 2025-02-11T23:54:04+05:30
draft: false
weight: 60
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



**Polymorphism** means "many forms." It refers to the ability of different classes to respond to the same method in different ways. In Python, polymorphism is implemented through:

- **Duck Typing**: Python allows you to use objects of any class as long as they implement the required methods or behaviors, without needing explicit type declarations.
- **Method Overriding**: Subclasses can provide specific implementations of methods defined in their superclasses.
- **Operator Overloading**: Python allows operators to be customized to perform operations on objects of user-defined classes.

---

### **Operator Overloading**

**Operator overloading** allows the same operator to have different meanings depending on the type of operands involved. Python achieves this by defining **magic methods** for specific operators.

Operator overloading enables an operator to perform additional functions beyond its default behavior. For example, the addition operator (`+`) can be used not only to add numbers but also to concatenate strings and combine lists.

The addition operator (`+`) is internally represented by the `__add__()` method. We can overload this method to define how the `+` operator works for custom objects.

#### Example of Overloading the `+` Operator:

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        """Overload + operator to add two points."""
        return Point(self.x + other.x, self.y + other.y)

    def __repr__(self):
        return f"Point({self.x}, {self.y})"

p1 = Point(1, 2)
p2 = Point(3, 4)
result = p1 + p2  # This calls the __add__ method
print(result)  # Output: Point(4, 6)
```

- In this example, the `__add__()` method is overloaded to define how the `+` operator works for `Point` objects. The `x` and `y` coordinates of two `Point` objects are added together.

You can also overload other operators. For example, multiplying a `Point` object by a scalar:

```python
def __mul__(self, scalar):
    """Multiply the point by a scalar value."""
    return Point(self.x * scalar, self.y * scalar)
```

#### Common Magic Methods for Operator Overloading:

- `__add__(self, other)` for `+`
- `__sub__(self, other)` for `-`
- `__mul__(self, other)` for `*`
- `__truediv__(self, other)` for `/`
- `__lt__(self, other)` for `<`
- `__eq__(self, other)` for `==`
- `__len__(self)` for `len()`

---

### **Method Overloading**

**Method overloading** refers to defining a method that can perform different tasks depending on the arguments passed to it. However, **Python does not support traditional method overloading** like in Java or C++.
Python does not allow multiple methods with the same name and different argument types (unlike Java or C++).

In Python, method overloading is typically achieved using default arguments or variable-length arguments (`*args` and `**kwargs`).

#### Example of Method Overloading with Default Arguments:

```python
class Calculator:
    def add(self, a, b=0):  # Default value for b allows overloading
        return a + b

calc = Calculator()
print(calc.add(5))  # Output: 5
print(calc.add(5, 10))  # Output: 15
```

- In this case, the `add()` method behaves like an overloaded method, accepting either one or two arguments. The default value of `b` allows this flexibility.


---

### **Method Overriding**

**Method overriding** allows a subclass to provide its specific implementation of a method that is already defined in its superclass.

If a method is written in such a way that it can perform more than one task depending on the arguments, it is called **method overloading**. However, **Python does not support method overloading** in the traditional sense, and it does not allow methods with the same name but different arguments.

In contrast, **method overriding** allows a subclass to modify the behavior of a method inherited from its superclass.

#### Example of Method Overriding:

```python
class Animal:
    def sound(self):
        print("Animal sound")

class Dog(Animal):
    def sound(self):  # Overriding the sound method
        print("Bark")

dog = Dog()
dog.sound()  # Output: Bark
```

- In the example above, the `Dog` class overrides the `sound()` method from the `Animal` class. The `Dog` class provides its own implementation of the `sound()` method, which is called when `dog.sound()` is invoked.

---

### Summary of Key Concepts:

- **Single Inheritance**: One subclass inherits from one superclass.
- **Multiple Inheritance**: A subclass inherits from multiple superclasses.
- **Polymorphism**: "Many forms"; allows the same method to behave differently depending on the context (via method overriding, operator overloading, etc.).
- **Method Resolution Order (MRO)**: Defines the order in which base classes are searched for methods and attributes in multiple inheritance.
- **Operator Overloading**: Allows customization of the behavior of operators (`+`, `-`, `*`, etc.) for custom objects.
- **Method Overloading**: Python does not support traditional method overloading but allows similar functionality using default arguments.


---
