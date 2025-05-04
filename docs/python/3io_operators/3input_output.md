---
title: "03 - Print and Input"
description: ""
summary: ""
date: 2024-12-17T22:34:58+05:30
lastmod: 2024-12-17T22:34:58+05:30
draft: false
weight: 31
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


## **Print()**

The `print()` function in Python is used to output data to the console. It can accept multiple arguments and display them in various formats. 

```python
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)
```

- **`objects`**: The values to be printed, separated by commas.
- **`sep`**: The separator between the objects. Default is a space `' '`.
- **`end`**: The string appended at the end of the output. Default is a newline `'\n'`.
- **`file`**: The output is directed to this file object (default is `sys.stdout`).
- **`flush`**: If `True`, the output is flushed immediately (default is `False`).

### **Key Parameters**

#### **sep (Separator)**

- `sep` is used to specify a separator between multiple values in the print function. By default, it is a space `' '`, but you can change it to any string you want.
  
```python
print("apple", "banana", "cherry", sep=", ")  # Output: apple, banana, cherry
```

#### **end**

- `end` is used to append a string after the printed output. By default, it is `'\n'` (a newline character), which means the next output will appear on a new line. You can modify this to print everything on the same line or add any custom string.

```python
print("Hello", end=" ")
print("world!")  # Output: Hello world!
```

#### **f-strings (Formatted Strings)**

- f-strings (formatted string literals) allow embedding expressions inside string literals using curly braces `{}`. Introduced in Python 3.6, f-strings provide an easy and efficient way to embed variable values into strings.

```python
name = "Alice"
age = 30
print(f"My name is {name} and I am {age} years old.")
# Output: My name is Alice and I am 30 years old.
```

You can also apply formatting options to the variables inside f-strings:

```python
pi = 3.14159265358979
print(f"Pi to 2 decimal places: {pi:.2f}")  # Output: Pi to 2 decimal places: 3.14
```

---

## **Input()**

The `input()` function is used to take input from the user via the console. It always returns a string, so if you need a different data type, you'll need to explicitly cast the value.

```python
user_input = input("Prompt message: ")
```

- **Prompt message**: A message that is displayed to the user before waiting for input.

### **Getting Multiple Inputs**

You can get multiple inputs from the user using `split()` to split the input string into a list based on a delimiter.

```python
# Getting multiple inputs
name, age = input("Enter your name and age: ").split()
print(f"Name: {name}, Age: {age}")
```

In this case, the user would input a string like `Alice 25`, and the values would be split into the `name` and `age` variables.

### **Type Casting**

Since `input()` always returns a string, you might need to cast the input to another data type (like `int`, `float`, etc.).

```python
age = int(input("Enter your age: "))  # Convert the string to an integer
print(f"Next year, you'll be {age + 1} years old.")
```

Similarly, for floating-point numbers:

```python
height = float(input("Enter your height in meters: "))  # Convert to float
```

### **Using `eval()`**

The `eval()` function can evaluate a string as a Python expression. It allows you to execute more complex expressions or mathematical formulas input by the user. Be cautious when using `eval()` since it can execute arbitrary code, which may be unsafe if you're not in control of the input.

```python
result = eval(input("Enter a mathematical expression: "))
print(f"The result is: {result}")
```

If the user enters `5 + 3`, the output would be `The result is: 8`.

---

## **Command-Line Arguments**

Python allows you to pass command-line arguments to your script, which can be accessed using the `sys.argv` list. This is useful for passing configuration or input data to your program when running it from the command line.

### **Using `sys.argv`**

1. **Importing sys**: To use `sys.argv`, you need to import the `sys` module.

2. **`sys.argv`**: This is a list containing all the command-line arguments passed to the Python script, where `sys.argv[0]` is the script name itself.

```python
import sys

# Print all arguments passed to the script
print(f"Arguments passed to the script: {sys.argv}")

# Access individual arguments
if len(sys.argv) > 1:
    print(f"First argument: {sys.argv[1]}")
```

### **Command-Line Argument Example:**

Run the Python script from the terminal:

```bash
python script.py arg1 arg2 arg3
```

**Output:**
```
Arguments passed to the script: ['script.py', 'arg1', 'arg2', 'arg3']
First argument: arg1
```

### **`len(sys.argv)`**

`len(sys.argv)` returns the number of arguments passed to the script, including the script name. This can be used to check if enough arguments are provided.

```python
import sys

if len(sys.argv) < 2:
    print("Usage: python script.py <arg1> <arg2> ...")
else:
    print(f"Received arguments: {sys.argv[1:]}")
```

---

