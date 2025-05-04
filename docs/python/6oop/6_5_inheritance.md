---
title: "06 OOP - 05 Inheritance in Python"
description: ""
summary: ""
date: 2025-02-11T23:54:04+05:30
lastmod: 2025-02-11T23:54:04+05:30
draft: false
weight: 59
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Inheritance is a mechanism in object-oriented programming where one class (the **subclass**) inherits the attributes and methods of another class (the **superclass**). This allows the subclass to reuse code and add its own unique features or modify inherited behavior.

```python
class B(A):
    pass

class Subclass(BaseClass):
    pass
```

In this case, class `B` inherits the properties and methods of class `A`. The subclass `B` can access the members of both class `A` and class `B`.

For example, if a `Student` class is created using a `Teacher` class:

```python
class Student(Teacher):
    pass
```

Here, the `Student` class inherits all properties and methods of the `Teacher` class. When an object of the `Student` class is created, it contains a copy of the `Teacher` class within it, establishing a relationship between the two.

---

### **Overriding Superclass Constructors and Methods**

When a subclass is created, it automatically has access to the constructor of the superclass. Any variables or values defined in the superclass constructor are also available in the subclass. However, when a constructor is defined in the subclass, the superclass constructor is no longer available. Only the subclass constructor is accessible from the subclass object. This concept is known as **Constructor Overriding**.

Similarly, if a method is defined in the subclass with the same name as a method in the superclass, it will override the superclass method. This is known as **Method Overriding**.

#### Example of Constructor and Method Overriding:

```python
class Father:
    def __init__(self):
        self.property = 80000.00

    def display_property(self):
        print(f"Father's Property = {self.property}")

class Son(Father):
    def __init__(self):
        self.property = 20000.00

    def display_property(self):
        print(f"Son's Property = {self.property}")

# Creating an instance of the Son class
s = Son()
s.display_property()

# Output: Son's Property = 20000.00
```

In this example, the subclass `Son` overrides both the constructor and the method from the `Father` class. Overriding should be done when we want to modify the existing behavior of a constructor or method in the subclass.

---

### **Using 'super()' Method**

When a constructor is written in the subclass, the constructor of the superclass is not automatically available. The built-in `super()` function provides a way to call the superclass constructor or methods from the subclass.

Syntax:
```python
super().__init__()    # Calls the superclass constructor
super().__init__(arguments)  # Passing arguments to the superclass constructor
super().method()      # Calls the superclass method
```

When the superclass constructor has parameters, the subclass must define a constructor with parameters as well and use `super()` to call the superclass constructor from within the subclass constructor to pass the parameter.
```python
# sub class constructor

def __init__(self, prop1 = 0, prop2 = 0):
	super().__init__(prop2) # Sending to super class constructor
	self.property = prop2  # storing in sub class
```
So two parameters need to be passed here while creating the sub class.


Example of passing argument through `super()`

```python
class Father:
    def __init__(self, property=0):
        self.property = property

    def display_property(self):
        print(f"Father's Property = {self.property}")

class Son(Father):
    def __init__(self, property1=0, property=0):
        super().__init__(property)  # Calling superclass constructor
        self.property1 = property1

    def display_property(self):
        print(f"Son's Property = {self.property1 + self.property}")

# Creating an instance of Son with two parameters
s = Son(20000, 80000)
s.display_property()

# Output: Son's Property = 100000
```

---

In this example, we use `super()` to call the super class constructor and override methods in a subclass:

```python
class Square:
    def __init__(self, x):
        self.x = x

    def area(self):
        print(f"Area of square = {self.x * self.x}")

class Rectangle(Square):
    def __init__(self, x, y):
        super().__init__(x)  # Calls the constructor of Square
        self.y = y

    def area(self):
        super().area()  # Calls the area method of Square
        print(f"Area of rectangle = {self.x * self.y}")

# Create an instance of Rectangle and calculate areas
a, b = [float(x) for x in input("Enter two measures: ").split()]
r = Rectangle(a, b)
r.area()

# Example input: 10 5.5
# Output:
# Area of square = 100.0
# Area of rectangle = 55.0
```

---

### **Types of Inheritance in Python**

---

### **Single Inheritance**

**Single inheritance** refers to the process of deriving one or more subclasses from a single base class. A subclass inherits the properties and behaviors (attributes and methods) of only one superclass.

```python
class Bank:
    cash = 1000000  # class variable
    
    @classmethod
    def available_cash(cls):
        print(cls.cash)

class AbBank(Bank):
    pass

class StateBank(Bank):
    cash = 200000  # overriding the base class variable
    @classmethod
    def available_cash(cls):
        print(cls.cash + Bank.cash)

# Creating objects of subclasses
a = AbBank()
a.available_cash()  # Output: 1000000

s = StateBank()
s.available_cash()  # Output: 1200000
```

- `Bank` class has a class variable `cash` and a class method `available_cash()`.
- `StateBank` overrides the `cash` variable and modifies the behavior of the `available_cash()` method to include its class variable also.
- `AbBank` does not override `cash`, so it uses the class variable from `Bank`.

In `cls.cash + Bank.cash`, `cls.cash` refers to the current class's `cash` variable, and `Bank.cash` refers to the `cash` variable in the superclass.

---

### **Multiple Inheritance**

**Multiple inheritance** occurs when a subclass inherits from more than one base class. In Python, all base classes are available to the subclass, and the subclass can have its own members as well.

```
class Subclass(Baseclass1, Baseclass2, ...):

class C(A, B):
```

```python
class A:
    def __init__(self):
        self.a = 'a'
        print(self.a)

class B:
    def __init__(self):
        self.b = 'b'
        print(self.b)

class C(A, B):  # Inheriting from both A and B
    def __init__(self):
        self.c = 'c'
        print(self.c)
        super().__init__()  # Calls constructor of the superclass

# Creating an object of class C
opp = C()

# Output:
# c
# a
```

- Class `C` inherits from both `A` and `B`.
- `super().__init__()` ensures the constructor of the superclass (`A` in this case) is called. As a result, it first prints `c` (from `C`), then `a` (from `A`).

While using `super()` function in sub class constructor to call the constructors of super classes returns only one from the two, (the one at the left hand side of). If left one doesn't have a constructor then the one on the right side is called. This means C cannot access the instance variables of both the super classes.

If C has to access instances of all base classes, then all the Base classes also need to use `super().__init__()`

```python
class A:
	def __init__(self):
		self.a = 'a'
		print(self.a)
		super().__init__()

class B:
	def __init__(self):
		self.b = 'b'
		print(self.b)
		super().__init__()

class C(A, B):
	def __init__(self):
		self.c = 'c'
		print(self.c)
		super().__init__()


opp = C()

# c
# a
# b
```

When constructor of C is called it prints C and then the `super().__init__()` is called and it moves to constructor of A and prints A, but constructor of A also has a `super().init()` which will try to execute the constructor of object class and since it does not have any, the search continues on the right hand side where B is printed and move on to object class from its constructor.

Searching in this manner is called as `Method Resolution Order(MRO)`


#### Method Resolution Order (MRO)

In the case of multiple inheritance, **Python uses the Method Resolution Order (MRO)** to determine the order in which constructors and methods are called.

MRO dictates the order in which base classes are searched for a method or attribute. In multiple inheritance, Python follows the **left-to-right, depth-first search** principle, and each class is visited only once.

**Order of search:**
- First, search the subclass.
- If not found, search the base classes from left to right (in the order the classes are inherited).
- Python does not visit the same class twice.

In the case of multiple inheritance, **MRO** can be viewed using the `mro()` method or `__mro__` attribute.

```python
print(C.mro())  # Prints the MRO for class C
```


---
