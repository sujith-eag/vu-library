---
title: "08 File I/O - 02 Handling File Content"
description: ""
summary: ""
date: 2025-02-11T23:58:33+05:30
lastmod: 2025-02-11T23:58:33+05:30
draft: false
weight: 76
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---





Python offers powerful tools for working with files, for reading from them, writing to them, processing their contents, handling exceptions, analyzing text, and working with multiple files.

---

## **1. Working with a File's Contents**

When Python reads from a text file, it interprets everything in the file as a string. If you’re reading numbers and need to work with them numerically, you must convert them to integers or floats using the `int()` or `float()` functions, respectively.

### **Reading File Content**

```python
from pathlib import Path

# Open the file and read its contents
path = Path('py_digits.txt')
contents = path.read_text().rstrip()  # Read text and strip trailing whitespace
lines = contents.splitlines()  # Split text into a list of lines

# Concatenate all lines into a single string, removing leading whitespace from each line
pi_string = ''
for line in lines:
    pi_string += line.lstrip()

# Print the resulting string and its length
print(pi_string)
print(len(pi_string))  # The length of the string (number of characters)
```

- **`rstrip()`** removes any trailing whitespace (like newlines) from the text.
- **`splitlines()`** splits the content into a list of lines.
- **`lstrip()`** removes leading whitespace from each line.

### **Handling Numbers in a File**

```python
# If the file contains numbers (e.g., digits of pi), you might want to convert them to integers or floats
number_string = "3.14159"
pi_value = float(number_string)  # Convert the string to a float
print(pi_value)
```

If the file contains numbers and you need them in a numeric context, convert them with `int()` or `float()`.

---

## **2. String Manipulation with `replace()`**

You can manipulate strings by replacing parts of the text using the `replace()` method.

### **Example: Replacing Words in a String**

```python
message = "I really like dogs."
new_message = message.replace('dog', 'cat')
print(new_message)  # Output: 'I really like cats.'
```

This method is useful when you want to change specific parts of the text, such as replacing certain words or phrases.

---

## **3. Writing to a File**

Writing data to a file is just as simple as reading from it. You can write text to a file using `write_text()` from the `pathlib` module.

### **Basic File Writing**

```python
from pathlib import Path

# Content to write to the file
contents = "I love programming.\n"
contents += "I love creating new games.\n"
contents += "I love working with data.\n"

# Create a file (or overwrite if it exists) and write the contents
path = Path('prog.txt')
path.write_text(contents)
```

**Important Notes:**

- The **`write_text()`** method writes text to the file and automatically closes the file after writing.
- If the file doesn't exist, Python will create it; if it does exist, **`write_text()`** will overwrite its contents.

### **Handling File Overwrites**

Be cautious when using `write_text()` on existing files as it will erase all previous data in the file. Always ensure that overwriting the file is intended.

---

## **4. Handling Exceptions**

Python provides an efficient mechanism for handling errors and exceptions that can occur during the execution of your program. This allows your program to continue running even when an error occurs.

### **Basic Exception Handling Example**

```python
print("Give me two numbers, I'll divide them.")
print("Enter 'q' to quit")

while True:
    first_no = input("\nFirst Number: ")
    if first_no == "q":
        break

    second_no = input("\nSecond Number: ")
    if second_no == 'q':
        break
    
    try:
        # Attempt the division
        answer = int(first_no) / int(second_no)
    except ZeroDivisionError:
        # Handle division by zero
        print("You cannot divide by zero")
    except ValueError:
        # Handle invalid input (non-numeric values)
        print("Please enter valid numbers.")
    else:
        # This block runs if no exception occurs
        print(f"Answer: {answer}")
```


- **`try` block**: Contains code that may raise an exception.
- **`except` block**: Catches specific exceptions (e.g., `ZeroDivisionError` or `ValueError`) and handles them gracefully.
- **`else` block**: Executes if no exceptions are raised.

### **General Rule for `try`, `except`, and `else`:**

- Only include code in the `try` block that might raise an exception.
- Use the `else` block for code that should run if no exceptions occur.

---

## **5. Analyzing Text Files**

You can read and analyze text files in Python to extract useful information like word counts or frequency analysis.

### **Counting Words in a File**

```python
from pathlib import Path

# Read the contents of the file
path = Path('alice.txt')
contents = path.read_text(encoding='utf-8')

# Split the content into a list of words and count them
words = contents.split()
num_words = len(words)

print(f"The file {path} has about {num_words} words.")
```

### **Handling File Not Found Exception**

If the file does not exist, you can handle the error gracefully using a `try`/`except` block.

```python
from pathlib import Path

path = Path('alice.txt')
try:
    contents = path.read_text(encoding='utf-8')
except FileNotFoundError:
    print(f"Sorry, the file {path} does not exist.")
else:
    words = contents.split()
    word_count = len(words)
    print(f"The file {path} contains {word_count} words.")
```

### **Reusable Word Count Function**

```python
from pathlib import Path

def count_words(path):
    """Count the number of words in a file"""
    try:
        contents = path.read_text(encoding='utf-8')
    except FileNotFoundError:
        print(f"Sorry, the file {path} doesn't exist.")
    else:
        words = contents.split()
        num_words = len(words)
        print(f"The file {path} has about {num_words} words.")

# Example usage
path = Path('alice.txt')
count_words(path)
```

---

## **6. Working with Multiple Files**

When working with multiple files, you can loop over a list of filenames and process each file in turn.

### **Example: Counting Words in Multiple Files**

```python
filenames = ['alice.txt', 'siddhartha.txt', 'moby_dick.txt', 'little_women.txt']

for filename in filenames:
    path = Path(filename)
    count_words(path)  # Count words in each file
```

### **Handling Missing Files Silently**

If you want to fail silently (i.e., do nothing when a file is missing), you can use the `pass` statement in the `except` block:

```python
filenames = ['alice.txt', 'siddhartha.txt', 'moby_dick.txt', 'little_women.txt']

for filename in filenames:
    path = Path(filename)
    try:
        count_words(path)  # Attempt to count words
    except FileNotFoundError:
        pass  # If the file is not found, do nothing
```

---

## **7. Storing and Retrieving Data (JSON)**

JSON (JavaScript Object Notation) is a widely-used format for storing and transmitting data, and Python provides a convenient library (`json`) for working with JSON data.

### **Storing Data in JSON Format**

```python
from pathlib import Path
import json

# A list of numbers to store
numbers = [2, 3, 5, 7, 11, 13]

# Convert the list to JSON and write it to a file
path = Path('numbers.json')
content = json.dumps(numbers)
path.write_text(content)
```

### **Reading Data from JSON File**

```python
from pathlib import Path
import json

# Read the JSON file and convert the content back to a Python object
path = Path('numbers.json')
content = path.read_text()
numbers = json.loads(content)

# Print the numbers
print(numbers)
```

---

