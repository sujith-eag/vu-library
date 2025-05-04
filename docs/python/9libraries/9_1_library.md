---
title: "Packages - 01 Random and Statistics (Basics)"
description: ""
summary: ""
date: 2025-02-12T00:02:40+05:30
lastmod: 2025-02-12T00:02:40+05:30
draft: false
weight: 86
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


In Python, **modules** are files(`.py`) containing Python code—functions, classes, and variables—that you can import and use in your programs. Modules help organize code, avoid repetition, and improve structure and readability. You can use built-in Python modules or create your own custom ones to save time by reusing code across different projects.

### **Importing Modules**

Python provides a way to bring external code into your program using the `import` keyword. This gives you access to all functions and classes defined within the module.

To import an entire module, use the `import` statement followed by the module name:

```python
import random
```

You can either import an entire module or specific functions from the module, depending on your needs.


Now, all the functions and variables defined in the `random` module are available in your program. You access them by prefixing the function or variable name with `random.` because it has to be associated with the scope of the module.

```python
random.choice()  # Calling the 'choice' function from the random module
```

---

### **Using the `random` Module**

The `random` module in Python provides various functions for generating random numbers or selecting random items from sequences.

#### **1. Random Choice: Randomly Selecting Items**

The `random.choice()` function randomly selects an item from a sequence, such as a list or a tuple. It’s great for things like flipping a coin or making random selections.

**Example: Coin Flip Simulation**

```python
import random

# Choose a random item from the list
coin = random.choice(["heads", "tails"])  # Randomly chooses between "heads" and "tails"
print(coin)
```

In this example, the `random.choice()` function picks either "heads" or "tails" randomly from the list.

---

#### **2. Importing Specific Functions**

If you only need a specific function from a module, you can import just that function using the `from ... import ...` syntax. This allows you to avoid having to reference the module name each time you call the function.

**Example: Using `choice()` without Prefix**

```python
from random import choice

# Directly use the 'choice' function without the 'random.' prefix
coin = choice(["heads", "tails"])
print(coin)
```

Here, `choice()` is imported directly from the `random` module, so you don’t need to prefix it with `random.`.

---

#### **3. Generating Random Integers**

The `random.randint(a, b)` function generates a random integer between `a` and `b` (both inclusive).

**Example: Generating a Random Number**

```python
import random

# Generate a random integer between 1 and 10 (inclusive)
random_number = random.randint(1, 10)
print(random_number)
```

This example demonstrates how to generate a random integer from 1 to 10, inclusive of both limits.

---

#### **4. Shuffling a List**

The `random.shuffle()` function randomly shuffles the elements of a list in place. Note that it doesn’t return a new list but modifies the original one.

**Example: Shuffling a Deck of Cards**

```python
import random

# List of cards
cards = ["king", "jack", "queen", "joker"]

# Shuffle the list of cards in place
random.shuffle(cards)

# Print the shuffled cards
for card in cards:
    print(card)
```

Here, `random.shuffle(cards)` rearranges the elements of the `cards` list randomly. The original list is modified, and no new list is created.

---

### **Using the `statistics` Module**

Python’s `statistics` module offers a collection of functions to perform common statistical calculations, such as finding the mean (average), variance, or standard deviation of a set of numbers.

#### **Example: Calculating the Mean (Average)**

```python
import statistics

# List of numbers
numbers = [100, 90, 85, 95]

# Calculate the mean (average) of the list
mean_value = statistics.mean(numbers)
print(mean_value)
```

The `statistics.mean()` function returns the arithmetic mean of the numbers in the list.

---

### **Importing Functions from Your Own Modules**

You can also create your own Python modules by saving your functions in separate files. Once the functions are saved in another file, you can import them into other scripts, making your code more modular and reusable.

#### **Example: Creating and Importing a Custom Module**

**1. Creating a Custom Module**

Let’s first create a Python file named `my_module.py` and define some simple functions in it:

```python
# my_module.py

def hello(name):
    print(f"Hello, {name}!")

def goodbye(name):
    print(f"Goodbye, {name}!")
```

**2. Importing Functions from the Custom Module**

Now, you can import these functions into another script to use them:

```python
# main.py

from my_module import hello, goodbye

def main():
    hello("world")
    goodbye("world")

if __name__ == "__main__":  # Ensures this block runs only when executed directly
    main()
```

- `from my_module import hello, goodbye` imports the two functions from the `my_module.py` file.
- `if __name__ == "__main__":` ensures that the `main()` function is only executed when the script is run directly, not when it’s imported as a module.

---

### **Using Command-Line Arguments with Imported Functions**

If you want to pass arguments to a Python script when it is executed from the command line, you can use the `sys.argv` list. This allows your program to accept arguments and process them dynamically.

#### **Example: Command-Line Arguments**

```python
import sys
from my_module import hello

# Check if there is exactly one argument (besides the script name)
if len(sys.argv) == 2:
    hello(sys.argv[1])  # Pass the argument to the hello function
```

If you run this script from the command line as follows:

```bash
python main.py John
```

It will print:

```
Hello, John!
```

---

### **The Role of `__name__` and `__main__`**

The `__name__` variable is crucial for controlling how a Python file behaves when executed directly or when imported as a module. When a Python file is run directly, the `__name__` variable is set to `"__main__"`. You can use this behavior to prevent certain code from running when the file is imported as a module into another program.

#### **Example: Using `__name__` to Control Execution**

```python
# main.py

def hello(name):
    print(f"Hello, {name}!")

def goodbye(name):
    print(f"Goodbye, {name}!")

if __name__ == "__main__":  # Runs only if this file is executed directly
    hello("world")
    goodbye("world")
```

If you import `main.py` into another script, the `main()` function won’t run automatically because `__name__` will not be `"__main__"`.

---

### **Conclusion**

Python's **modules** and **libraries** are powerful tools that help organize your code and make it reusable. By importing external modules like `random` and `statistics`, or even creating your own, you can write more modular, clean, and efficient Python programs.

- Use `import` to bring an entire module into your script.
- Use `from ... import ...` to import specific functions from a module.
- Use `random` for generating random numbers and making random selections.
- Use `statistics` to perform common statistical calculations.
- Organize your code into custom modules to improve reusability.
- Use `sys.argv` and `__name__ == "__main__"` to handle command-line arguments and control code execution.

By understanding these concepts, you’ll be able to create more flexible and organized Python programs.
