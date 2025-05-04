---
title: "04 Control-Flow - 01 Conditional Branching"
description: ""
summary: ""
date: 2025-01-25T07:40:52+05:30
lastmod: 2025-01-25T07:40:52+05:30
draft: false
weight: 36
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


### Control Flow Statements in Python

- **`if`**  
- **`if...else`**  
- **`if...elif...else`**  

These are the primary structures for controlling the flow of execution based on conditions.

- **`while`** – Used to repeat a block of code based on a condition.
- **`for`** – Used to repeat a block of code a fixed number of times.
- **`else`** – Executes code when the preceding condition is not true.
- **`break`** – Exits the loop immediately.
- **`continue`** – Skips the rest of the current loop iteration and moves to the next iteration.
- **`pass`** – Does nothing; used as a placeholder.
- **`assert`** – Used for debugging purposes to test if a condition is true.
- **`return`** – Exits a function and optionally returns a value.

Note: Python **does not have** a `switch case` statement. but `match case` is introduced in `python 3.10`

---

### Altering Control Flow

- **`if`, `elif`, `else`** – Conditional execution of code blocks based on boolean expressions.
- **`for` loop** – Used to repeat code a fixed number of times, often iterating over a sequence (like a list or range).
- **`while` loop** – Repeats a block of code as long as a specified condition is true.

---

### Conditional Execution

Python allows you to track conditions efficiently with boolean expressions (`True` or `False`). Some examples include:

```python
if m % n != 0:  # This executes only if m % n != 0 is True
(m, n) = (n, m % n)
```

**Alternating Execution** (using `else`):
```python
if m % n != 0:
(m, n) = (n, m % n)
else:
gcd = n  # Optional else branch
```

In Python, certain values are treated as `False` in boolean contexts:
- Numeric value `0`
- Empty sequences: `""`, `[]`

For example, the expression `if m % n` will be `True` if there is a remainder, and `False` if the remainder is `0`.

---

### Checking Membership

You can check if a value is in or not in a sequence (like a list or string):

- Check if a value **is in a list**:
```python
"Mushroom" in some_list
```

- Check if a value **is not in a list**:
```python
if user not in banned_users:
  print(f"{user.title()}, you can post a response.")
```

---

### Types of `if` Statements

- **Simple `if` statement** – A single condition with one action when the condition is true:
```python
if condition:
  # action
```

- **`if...else` statement** – Takes one action if the condition is true, and a different one if it's false:
```python
if condition:
  # action 1
else:
  # action 2
```

- **`if...elif...else` chain** – Used when more than two possible outcomes need to be considered. Python checks each condition in order, and once one condition is true, it skips the rest:
```python
if condition1:
  # action 1
elif condition2:
  # action 2
else:
  # action 3
```

- **`if...if...if` chain** – Checks all conditions, even if one of them is true. Each `if` is independent:
```python
if condition1:
  # action 1
if condition2:
  # action 2
if condition3:
  # action 3
```

---

### Multi-way Branching

When you have multiple conditions to check, nested `if` statements can become hard to read. Here’s an example with nested `if` statements:

```python
if x == 1:
    y = f1(x)
else:
    if x == 2:
        y = f2(x)
    else:
        if x == 3:
            y = f3(x)
        else:
            y = f4(x)
```

This is difficult to follow. A cleaner way is using `elif` to avoid unnecessary nesting:

```python
if x == 1:
    y = f1(x)
elif x == 2:
    y = f2(x)
elif x == 3:
    y = f3(x)
else:
    y = f4(x)
```

---

### Using `if` Statements with Lists

You can check for special values and ensure that a list is not empty. When the name of a list is used in an `if` statement, Python returns `True` if the list contains at least one item.

```python
request = []
if request:
    for _ in request:
        print(f"Adding {_}.")
else:
    print("You want something?")
```

---

### Using Multiple Lists: Checking and Comparing Two Lists

You can compare two lists to check if items are present in both.

```python
having = ["apple", "banana", "cherry"]
ordered = ["apple", "grape", "cherry"]

for item in ordered:
    if item in having:
        print(f"Adding {item}")
    else:
        print(f"Sorry, we don't have {item}")
```

---

### CS50 Conditionals

Conditions allow you to take different paths based on boolean expressions (Yes or No).

#### Example 1: Basic Comparison
```python
x = int(input("What is x? "))
y = int(input("What is y? "))

if x < y:
    print("x is less than y")
if x > y:
    print("x is greater than y")
if x == y:
    print("x is equal to y")
```

Even if the first condition is true, Python will execute all the lines asking three questions.

#### Example 2: Using `elif` to Avoid Unnecessary Checks
Using `elif` helps avoid executing unnecessary conditions after one is found to be true:

```python
if x < y:
    print("x is less than y")
elif x > y:
    print("x is greater than y")
elif x == y:
    print("x is equal to y")
```

---

### Using `else` with `if`

The `else` statement is used to handle the case where none of the previous conditions were true.

```python
if x < y:
    print("x is less than y")
elif x > y:
    print("x is greater than y")
else:
    print("x is equal to y")
```

---

### Using `or` for Multiple Conditions

The `or` operator can be used to combine multiple conditions into one line:

```python
if x > y or x < y:
    print("x is not equal to y")
else:
    print("x is equal to y")
```

Alternatively, you can use `!=` to simplify the condition:

```python
if x != y:
    print("x is not equal to y")
else:
    print("x is equal to y")
```

---

### Using Multiple `if` Statements

When you use multiple `if` statements (instead of `elif`), each condition is checked independently, and all true conditions will result in executed code:

```python
score = int(input("Score: "))

if score >= 90:
    print("Grade: A")
if score >= 80:
    print("Grade: B")
if score >= 70:
    print("Grade: C")
else:
    print("Grade: F")
```

---

### Checking for Even or Odd Numbers (Parity)

You can use the modulus operator (`%`) to determine if a number is even or odd. An even number divided by 2 leaves a remainder of `0`.

#### Example:

```python
if x % 2 == 0:
    print("x is even")
else:
    print("x is odd")
```

---

### Using Boolean Functions

A boolean function returns `True` or `False` and can be used in `if` statements for conditions.

#### Example:

```python
def is_even(n):
    if n % 2 == 0:
        return True
    else:
        return False

def main():
    x = int(input("What is x? "))
    if is_even(x):  # Calls the is_even function
        print("Even")
    else:
        print("Odd")
```

Alternatively, you can simplify the function to return the result directly:

```python
def is_even(n):
    return n % 2 == 0

def main():
    x = int(input("What is x? "))
    if is_even(x):  # Directly checks if the result is True
        print("Even")
    else:
        print("Odd")
```

---

### Simplifying Multiple `if` Conditions with `or`

Instead of checking for multiple conditions with multiple `if` statements, you can combine conditions into one line using `or`:

```python
name = input("What is your name? ")
if name == "Harry" or name == "Hermione" or name == "Ron":
    print("Gryffindor")
elif name == "Draco":
    print("Slytherin")
else:
    print("Who?")
```

---

