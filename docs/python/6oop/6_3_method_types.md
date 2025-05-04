---
title: "06 OOP - 03 Types of Methods"
description: ""
summary: ""
date: 2025-02-11T23:53:35+05:30
lastmod: 2025-02-11T23:53:35+05:30
draft: false
weight: 57
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



The purpose of a method is to process the variables provided in the class or in the method. Methods within a class define the behavior or actions that objects of that class can perform. A method is simply a function defined inside a class.

### Types of Methods

- **Instance Methods** operate on instance variables and are tied to an object.
    - Accessor methods **(getter)**: Read data without modifying it.
    - Mutator methods **(setter)**: Modify instance data.
- **Class Methods** operate on class-level data and are used for tasks that are shared across all instances of a class.
- **Static Methods** are used for tasks that don't require class or instance data, but are logically related to the class.


---

### Instance Methods

Instance methods act upon the instance variables of the class. They are bound to instances (objects) and hence are called as `instancename.method()`.

The memory address of the instance variables in the object is provided to the instance method while defining, by passing `self` as the first parameter. When calling the instance method, there is no need to pass any value for `self` since it is automatically passed.

Instance methods are further divided into two types:

#### 1. Accessor Methods

Accessor methods simply access and read the data of the instance variables. They do not modify the data. Accessor methods are generally written as `getSomething()` and are also called **getter methods**.

```python
def getName(self):
    return self.name
```

```python
>>> class Dog:
...     def __init__(self, name, age):
...             self.name = name
...             self.age = age
...     def sit(self):
...             print(f"{self.name} is now sitting.")
...     def roll_over(self):
...             print(f"{self.name} rolled over!")
... 
>>> my_dog = Dog( 'Will', 6 )
>>> your_dog = Dog( 'Lucy', 3 )
>>> 
>>> my_dog.sit()
Will is now sitting.
>>> your_dog.roll_over()
Lucy rolled over!
>>> print(f"Your dog name is {your_dog.name}.")
Your dog name is Lucy.
```

- Methods like `sit()` and `roll_over()` don't require extra arguments because they only need to operate on the specific instance (i.e., the dog that called the method).

#### 2. Mutator Methods

Mutator methods are responsible for modifying the instance variables. They are generally written in the form `setSomething()` and are also known as **setter methods**.

```python
def setName(self, name):
    self.name = name
```

When mutator methods define or set values for instance variables, the constructor is not needed to initialize the instance variables.

```python
>>> class Student:
...     # Setter methods
...     def setName(self, name):
...         self.name = name
...     def setMarks(self, marks):
...         self.marks = marks
...     # Getter methods
...     def getName(self):
...         return self.name
...     def getMarks(self):
...         return self.marks
... 
>>> n = int(input('How many students?: '))
How many students?: 2
>>> i = 0
>>> while(i < n):
...     name = input('Enter name: ')
...     s.setName(name)
...     marks = int(input('Enter marks: '))
...     s.setMarks(marks)
...     print("Hi", s.getName())
...     print("Your marks", s.getMarks())
...     i += 1
...     print("-"*25)
... 
Enter name: Krishna  # input
Your marks: 30

Hi Krishna           # output
Your marks 30
-------------------------
Enter name: Vimal
Your marks: 50

Hi Vimal
Your marks 50
-------------------------
```

---

### Class Methods

Class methods are used for processing that is commonly needed by all instances of a class. These methods act on class-level variables or static variables.

Class methods are written using the `@classmethod` decorator and have `cls` (which refers to the class itself) as the first parameter.

Class variables are referenced as `cls.variable`.

These methods are generally called as `classname.method()`.

```python
>>> class Bird:
...         # class variable
...     wings = 2
...         # class method
...     @classmethod
...     def fly(cls, name):
...         print(f"{name} flies with {cls.wings} wings.")
... 
>>> Bird.fly('Sparrow')
Sparrow flies with 2 wings.

>>> Bird.fly('Pigeon')
Pigeon flies with 2 wings.

>>> sparrow = Bird()
>>> sparrow.fly()
TypeError: Bird.fly() missing 1 required positional argument: 'name'
```

---

### Static Methods

Static methods are used when some processing is related to the class but doesn't require the class or its instances to perform the work.

These methods can accept values, process them, and return results without needing access to the class or its instance variables. Setting environmental variables, counting no of instances of class, changing attributes in another class are tasks related to a class, which can be handled by static methods.

Static methods are defined using the `@staticmethod` decorator.

Static methods are called as `classname.method()`.

**Example 1: Static method to track number of instances created**

```python
>>> class Myclass:
...     n = 0  # class variable
...     # constructor incrementing class variable
...     def __init__(self):
...         Myclass.n += 1
...
...     @staticmethod
...     def noObjects():
...         print(f"No. of instances created: {Myclass.n}")
... 

>>> obj1 = Myclass()
>>> obj2 = Myclass()
>>> obj3 = Myclass()

>>> Myclass.noObjects()
No. of instances created: 3
```

**Example 2: Static method to calculate the square root**

```python
>>> import math

>>> class Sample:
...
...     @staticmethod
...     def calculate(x):
...         result = math.sqrt(x)
...         return result
... 
>>> num = float(input('Enter a number: '))
Enter a number: 49

>>> result = Sample.calculate(num)
>>> print(f"The square root of {num} is {result:.2f}")
The square root of 49.0 is 7.00
```


---

Static methods are part of a class but do not have access to or interact with the class or instance variables. Static methods are used when we want to perform operations that do not rely on the instance or class data. They behave like normal functions but are logically grouped within the class.

Static methods are useful when we want to pass values from outside and perform calculations within the method, without requiring access to the class or instance state.

---

#### **Characteristics of Static Methods**

- **No Need for Instance or Class Reference**: Static methods are designed to operate independently of class or instance attributes. As a result, they don’t need access to `self` (the instance reference) or `cls` (the class reference). This makes static methods very flexible for utility functions.

- **Can Be Called on the Class**: Static methods can be called using the class name itself. They do not need an instance of the class to be invoked.

- **Almost Like Normal Functions**: Static methods function much like regular functions but are grouped logically inside a class. This provides better organization for code, especially when you want to relate certain functionality to a class without modifying or interacting with the instance or class-level data.

- **No Access to Instance or Class Variables**: Static methods do not have access to the instance (`self`) or class (`cls`) variables. They work solely with the arguments passed to them.

- **Use Cases**: Static methods are most commonly used when you have utility functions that are logically related to the class but don’t need access to the instance state. They can also be useful when you need to perform calculations or other tasks based on values passed from the outside.


___

#### **Calculating the Power of a Number**

```python
>>> class Myclass:
...     @staticmethod
...     def mymthod(x,n):
...             result = x**n
...             print(f"{x} to power {n} is {result}")
... 
>>> # Calling the static method without creating an instance of MyClass
>>> Myclass.mymthod(5,3)
5 to power 3 is 125
>>> Myclass.mymthod(5,4)
5 to power 4 is 625
```

- `myMethod(x, n)` performs a calculation (raising `x` to the power of `n`), but it does not interact with any instance data (`self`) or class-level variables.

---

#### **Passing Class Members to Another Class**

It is possible to pass objects of one class to a static method in another class. This allows to manipulate the attributes of an object without directly modifying the object’s class.

- The static method does not need to know about the internal workings of the `Emp` class. It simply receives an object and modifies its attributes.
- By passing the `Emp` object to the static method, we achieve flexibility in manipulating data from one class in another, all while keeping the method static (without needing access to the class or instance).

```python
>>> class Emp:
...     def __init__(self, id, name, salary):
...             self.id = id
...             self.name = name
...             self.salary = salary
...     def display(self):
...             print("ID = ", self.id)
...             print("Name = ", self.name)
...             print("Salary = ", self.salary)
... 
>>> class Myclass:
...     @staticmethod
...     def mymethod(e):
...             e.salary += 1000
...             e.display()
... 
>>> # Creating an instance of the Emp class
>>> raj = Emp(10, "Raj Kumar", 15000 )

# Calling the static method of MyClass and passing the Emp object to it
>>> Myclass().mymethod(raj)
ID =  10
Name =  Raj Kumar
Salary =  16000

```

- The `MyClass` class contains a static method `myMethod(e)` that accepts an `Emp` object (`e`) as an argument.
- The static method modifies the `salary` attribute of the `Emp` object (`e.salary += 1000`) and then calls the `display()` method to print the updated details of the `Emp` object.


---


### Inner Classes

Creating a class within a class is called as Creating an inner class or nested class.

It is better to write the date of birth as a seperate class inside the person class.
This DOB class is created in the constructor of the person class as 

The inner class can be referred by using instance of both outer and inner instance assigned to a variable if the inner class exists within the constructor of the outer class.
```python
class Person:
	def __init__(self):
		self.name = 'Charlie'
		self.db = self.Dob()  # this is Dob object
```
So now `db` represents the inner class `Dob`. These can now be referenced as,
```python
p = Person()  # crating outer class object
p.display()
p.name

x = p.db   # create inner class object
x.display()  # calling inner class method and variables
x.yy
```


It is not necessary to create the inner class object inside the outer class. means it is not needed to be included in the constructor with `self` and variable.

Now there is no connection beween the inner and outer class object. 

In this case we have to create the outer class object and then use dot operator to mention the inner class object.
```python
x = Person().Dob()   # create inner class object
x.display()
x.yy
```


```python
class Person:
    def __init__(self):
        self.name = 'Charles'
        self.db = self.Dob()  # Create an instance of the Dob class
    def display(self):
        print('Name = ', self.name)
    
    class Dob:
        def __init__(self):
            self.dd = 10
            self.mm = 5
            self.yy = 2000
        def display(self):
            # Use 'self' to access instance variables
            print(f"Dob = {self.dd}/{self.mm}/{self.yy}")

# Creating an instance of Person
p = Person()
p.display()  # Output: Name =  Charles

# Accessing the Dob class and calling its display method
x = p.db  # Access the Dob instance through the Person instance
x.display()  # Output: Dob = 10/5/2000

```



____


