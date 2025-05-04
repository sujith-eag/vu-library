---
title: "07 Exceptions - 03 Unit Testing"
description: ""
summary: ""
date: 2025-02-11T23:56:06+05:30
lastmod: 2025-02-11T23:56:06+05:30
draft: false
weight: 67
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Unit testing is a software testing technique where individual units or components of a program are tested in isolation. The goal is to ensure that each function or module works as expected. Unit testing helps catch errors early, provides better documentation, and ensures that the code continues to work correctly as it evolves.

Python provides several ways to perform unit testing. Here, we will focus on the `assert` keyword, manual error handling, and the powerful testing framework `pytest`.

---

## **1. Basic Unit Test Using `assert`**

The `assert` keyword is used to verify that an expression evaluates to `True`. If the expression is `False`, an `AssertionError` is raised. This is a simple way to test the correctness of your code.

### **Example 1: Testing a Simple Function with `assert`**

Let's say we have a function `square(x)` that returns the square of a number.

#### **Function to be tested**:

```python
# calculator.py
def square(x):
    return x ** 2
```

#### **Unit Test Code**:

```python
from calculator import square  # Importing the function to test

def main():
    test_square()

def test_square():
    # Using assert to check the correctness of the function
    assert square(2) == 4   # 2 squared is 4
    assert square(3) == 9   # 3 squared is 9

if __name__ == "__main__":
    main()
```

### **Explanation**:

- `assert square(2) == 4`: This checks if the function `square(2)` returns 4. If it doesn’t, an `AssertionError` will be raised.
- Using `assert` is preferable to manually checking the condition and printing messages because it provides immediate feedback during testing and is easier to automate.

### **Outcome**:

- If both assertions are true, the program will exit quietly, meaning no errors were encountered.
- If any assertion fails, an `AssertionError` will occur, and the test will be marked as failed.

---

## **2. Handling Errors Using `try-except`**

While `assert` is simple and effective for basic testing, you might want to handle errors more explicitly. You can do this using `try-except` blocks.

### **Example 2: Handling Assertion Errors with `try-except`**

```python
from calculator import square

def main():
    test_square()

def test_square():
    try:
        assert square(2) == 4
    except AssertionError:
        print("2 squared was not 4")
    
    try:
        assert square(3) == 9
    except AssertionError:
        print("3 squared was not 9")

if __name__ == "__main__":
    main()
```

### **Explanation**:

- Here, we manually handle `AssertionError` exceptions using `try-except` blocks.
- If the assertion fails, a custom error message will be printed.

### **Outcome**:

- This method gives you more control over the output, but it’s more verbose and less automated than using `assert` alone.

---

## **3. Using `pytest` for Automated Testing**

`pytest` is a popular testing framework in Python that can be used to write more sophisticated tests. It handles error reporting, test isolation, and much more.

### **Installing `pytest`**:

To use `pytest`, install it using pip:

```bash
pip install pytest
```

### **Example 3: Testing with `pytest`**

```python
# test_calculator.py
from calculator import square

def test_square():
    assert square(2) == 4    # Test for positive number
    assert square(-2) == 4   # Test for negative number
    assert square(3) == 9    # Another test for positive number
    assert square(0) == 0    # Test for zero
```

### **Running the Test**:

To run the test, execute the following command in the terminal:

```bash
pytest test_calculator.py
```

### **Explanation**:

- `pytest` automatically identifies functions prefixed with `test_` as test cases.
- It handles the assertion and error reporting. If any assertion fails, `pytest` will print detailed error messages to help you debug.

### **Outcome**:

- `pytest` gives a clear, easy-to-read output and can handle large suites of tests efficiently.
- It automatically discovers and runs the test functions.

---

## **4. Reducing Side Effects for Better Testing**

One of the challenges with testing code is dealing with functions that have "side effects"—such as printing to the console or modifying global variables. For unit tests to be effective, it’s best to minimize these side effects.

### **Example 4: Avoiding Side Effects**

#### **Before**:

```python
def hello(to="world"):
    print("Hello,", to)

def main():
    name = input("What's your name? ")
    hello(name)
```

This function `hello()` prints a message to the console. When testing it, the output isn’t easy to validate because it doesn’t return anything, making it difficult to check the output programmatically.

#### **After**:

To make this function more testable, we can modify it to **return** the string instead of printing it.

```python
def hello(to="world"):
    return f"Hello, {to}"

def main():
    name = input("What's your name? ")
    print(hello(name))  # Print the returned value
```

Now, the `hello()` function returns the string, which makes it easy to test.

### **Example 5: Testing the New Version of `hello()`**

```python
# test_hello.py
from hello import hello

def test_hello():
    assert hello("David") == "Hello, David"  # Testing with name provided
    assert hello() == "Hello, world"         # Testing with default value
```

### **Explanation**:

- The modified version of `hello()` returns the string rather than printing it.
- Now, the test checks the returned values, which is easier to validate and automate.

---

## **Best Practices for Unit Testing**

### **1. Write Small Functions**

Break your code into small, focused functions. Smaller functions are easier to test, debug, and maintain. Each function should ideally have a single responsibility and clear input/output.

### **2. Avoid Side Effects**

Side effects, like modifying global variables or printing output, should be minimized. Functions should return values rather than print them, making them easier to test and reuse.

### **3. Use Descriptive Test Names**

Name your test functions clearly. The name should describe the behavior being tested (e.g., `test_square_positive_numbers()`).

### **4. Test for Edge Cases**

Make sure to test edge cases and unexpected inputs, such as negative numbers, zero, or very large numbers.

### **5. Automate Testing**

Use tools like `pytest` to automate your tests. This saves time, especially when you have many tests and want to run them regularly.

### **6. Separate Tests from Code**

Keep your tests in separate files or modules, such as `test_calculator.py`, so they can be managed independently from your main program.

---

