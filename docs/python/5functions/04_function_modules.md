---
title: "05 Functions - 05 Importing Functions from Modules"
description: ""
summary: ""
date: 2025-02-11T19:58:45+05:30
lastmod: 2025-02-11T19:58:45+05:30
draft: false
weight: 49
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




In Python, you can organize your code into separate modules for better structure, reusability, and easier sharing between different programs.

### **Module**

A module is a `.py` file containing Python code (usually functions or classes) that can be imported and used in other scripts.

```python
>>> # my_module.py
>>> def hello(name):
...     """Prints a greeting to the user."""
...     print(f"Hello, {name}!")
... 
>>> def goodbye(name):
...     """Prints a goodbye message to the user."""
...     print(f"Goodbye, {name}!")
```

---

### **Importing a Module**

To use functions from a module, you first need to import it:

```python
>>> # pizza.py
>>> def make_pizza(size, *toppings):
...    print(f"\nMaking a {size}-inch pizza with the following toppings:")
...    for topping in toppings:
...        print(f"- {topping}")
```

You can then import and use the functions like so:

```python
>>> # making_pizzas.py
>>> import pizza
>>> pizza.make_pizza(16, 'pepperoni')
Making a 16-inch pizza with the following toppings:
- pepperoni

>>> pizza.make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
Making a 12-inch pizza with the following toppings:
- mushrooms
- green peppers
- extra cheese

```

---

### **Importing Specific Functions**

Instead of importing the entire module, you can import specific functions directly:

```python
>>> from pizza import make_pizza

>>> make_pizza(16, 'pepperoni')
Making a 16-inch pizza with the following toppings:
- pepperoni

>>> make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
Making a 12-inch pizza with the following toppings:
- mushrooms
- green peppers
- extra cheese
```

This allows you to call the function directly without needing to reference the module. The Syntax will be
```python
from module_name import function_0, function_1, function_2
```

---

### **Using Aliases for Functions and Modules**

If a function name is too long or conflicts with another function, you can give it a shorter alias using `as` keyword:

```python
>>> from pizza import make_pizza as mp

>>> mp(16, 'pepperoni')
Making a 16-inch pizza with the following toppings:
- pepperoni

>>> mp(12, 'mushrooms', 'green peppers', 'extra cheese')
Making a 12-inch pizza with the following toppings:
- mushrooms
- green peppers
- extra cheese
```

You can also assign an alias to the entire module for convenience:

```python
>>> import pizza as p

>>> p.make_pizza(16, 'pepperoni')
Making a 16-inch pizza with the following toppings:
- pepperoni
```

General syntax for aliasing:

```python
from module_name import function_name as fn

import module_name as mn
```

---

### **Importing All Functions from a Module**

You can import all functions from a module using the `*` wildcard:

```python
>>> from pizza import *

>>> make_pizza(16, 'pepperoni')
Making a 16-inch pizza with the following toppings:
- pepperoni

>>> make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
Making a 12-inch pizza with the following toppings:
- mushrooms
- green peppers
- extra cheese

```

However, this is not recommended for larger modules as it can lead to name conflicts, and it can make it harder to track where a function is coming from. 

Since every function is imported, you can call each function by name without using the dot notation. 

---



### **Creating and Importing Your Own Modules**

In Python, you can organize your code by breaking it into smaller, reusable parts called **modules**. 

A module is simply a Python file that contains functions, variables, and classes that you can import into other scripts. This approach helps maintain a clean structure and improves code reusability.

#### **1. Creating a Module**

To create a module, write your Python functions or classes in a separate file. For example, let's create a file named `my_module.py` that contains two simple functions:

```python
>>> # my_module.py
>>> def hello(name):
...     """Prints a greeting to the user."""
...     print(f"Hello, {name}!")
... 
>>> def goodbye(name):
...     """Prints a goodbye message to the user."""
...     print(f"Goodbye, {name}!")

```

#### **2. Importing and Using the Module**

Once you’ve created a module, you can import its functions into other Python scripts. Below is an example of how you can use the `hello` and `goodbye` functions in another script, say `main.py`:

```python
>>> # main.py
>>> from my_module import hello, goodbye  
>>> # Import specific functions from my_module
>>> 
>>> def main():
...     hello("world")   # Calls the hello function
...     goodbye("world") # Calls the goodbye function
... 
>>> if __name__ == "__main__":
...     main()
Hello, world!
Goodbye, world!
```

The `if __name__ == "__main__":` block ensures that the `main()` function runs only when `main.py` is executed directly, not when it is imported as a module elsewhere.

---


#### **Understanding __name__ and __main__ in Python**

In Python, the `__name__` variable is a special built-in variable that plays a crucial role in controlling how Python scripts behave when executed. It helps to distinguish between when a script is executed directly and when it is imported as a module into another script.

- When a Python script is **executed directly** (e.g., `python main.py`), Python sets the `__name__` variable to `"__main__"`.
- When the script is **imported as a module** (e.g., `import main`), the `__name__` variable is set to the **name of the module** (in this case, `"main"`).

This distinction allows you to control which parts of your code run, depending on whether the script is executed directly or imported into another program.

---

#### **The if __name__ == "__main__":  Condition**

The most common use of `__name__` is the `if __name__ == "__main__":` condition. This construct ensures that certain parts of your code are only executed when the script is run directly, not when it is imported as a module elsewhere.

- **Prevent Unwanted Code Execution**: When a script is imported as a module, code inside `if __name__ == "__main__":` will **not** run, ensuring that only functions or classes are available for import, but not the code meant for direct execution.
- **Make Scripts Reusable**: This allows you to write reusable modules with testable code, which can be imported without triggering unintended behavior.

#### **Example: Preventing Code Execution on Import**

```python
>>> # main.py
>>> def hello(name):
...     """Print a greeting message."""
...     print(f"Hello, {name}!")
... 
>>> def main():
...     """Main function that runs when script is executed directly."""
...     hello("world")
... 
>>> if __name__ == "__main__":
...     main()  # Runs only if the script is executed directly
Hello, world!
```

- If `main.py` is executed directly (`python main.py`), the `main()` function will run and call `hello("world")`.
- If `main.py` is imported into another script, the code inside `if __name__ == "__main__":` is **skipped**, and only the functions (e.g., `hello`) will be available.



---

### **Practical Use Cases**

1. **Creating Modules**: When you create a module with reusable functions or classes, you don’t want those functions to execute when the module is imported. The `if __name__ == "__main__":` block ensures this by keeping execution code separate.

2. **Testing Code Locally**: You can use the `if __name__ == "__main__":` block to write test code or examples that only run when you want to test your script locally, without affecting other programs that import it as a module.

3. **Command-Line Scripts**: For scripts designed to be run from the command line, you can place the main execution logic inside the `if __name__ == "__main__":` block, ensuring that the script behaves as expected when executed from the terminal.


---

### **Using Command-Line Arguments**

Python's `sys.argv` to pass command-line arguments to your script. This feature makes your program interactive, as it can accept input directly from the terminal or command prompt.

#### **Example: Accepting Command-Line Arguments**

```python
>>> import sys
>>> from my_module import hello
>>> 
>>> if len(sys.argv) == 2:  # Check if one argument (besides the script name) is passed
...     hello(sys.argv[1])  # Pass the argument to the hello function
... 
>>> # Running the script from the command line:
>>> # python main.py John
>>> Hello, John!
```

- `sys.argv` is a list where the first element (`sys.argv[0]`) is the script name, and subsequent elements are the arguments passed.
- The script checks if exactly one argument is provided and passes it to the `hello` function.

If no argument is passed or there are more than one, the script won't run the `hello` function.
