---
title: "07 Exceptions - 02 Errors Handling"
description: ""
summary: ""
date: 2025-02-11T23:55:42+05:30
lastmod: 2025-02-11T23:55:42+05:30
draft: false
weight: 66
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


**Flow of Control**

When a function calls another function, and an error occurs in the deepest function, the error propagates back to the calling functions unless handled. If the error is not handled at any level, the program will terminate. However, if it’s handled by a `try-except` block, the program can continue running.

- **Without handling**: The error causes the program to abort.
- **With exception handling**: The error is caught and handled, allowing the program to continue.

---

### **Example: Handling Input Errors with Loops**

Instead of letting the program quit when the user enters an invalid input, you can use a loop to keep prompting the user until they provide a valid input.

#### **Version 1**: Using `try-except` with `else` to handle input errors

```python
# Repeatedly prompt for input until the user enters a valid integer
while True:
    try:
        x = int(input("What is x? "))  # Attempt to convert input to an integer
    except ValueError:
        print("x is not an integer")  # Handle invalid input (not an integer)
    else:
        break  # If no error occurs, break out of the loop

print(f"x is {x}")  # Print the valid integer entered by the user
```

- The `else` block is executed only when no exception occurs.
- If the user enters an invalid value, the program keeps asking for input.

#### **Version 2**: Simplified with `try-except`

```python
while True:
    try:
        x = int(input("What is x? "))  # Attempt to convert input to an integer
        break  # Break out of the loop if no error occurs
    except ValueError:
        print("x is not an integer")  # Handle invalid input
print(f"x is {x}")  # Print the valid integer entered by the user
```

- This version skips the `else` block and directly breaks out of the loop once a valid input is received.

---

### **Using `return` Instead of `break`**

You can define a reusable function to handle input and return the value when the input is valid. Using `return` allows you to pass the value back to the calling function.

#### **Example**: Using `return` to handle input validation

```python
def get_int():
    while True:
        try:
            x = int(input("What is x? "))  # Attempt to convert input to an integer
            return x  # Return the valid input
        except ValueError:
            print("x is not an integer")  # Handle invalid input

x = get_int()  # Call the function and store the returned value
print(f"x is {x}")  # Print the valid integer entered by the user
```

- This function loops until the user enters a valid integer and returns that value.

---

### **Passing Values Between Functions**

When calling a function from another function, you can pass values (such as user input) between them.

#### **Example**: Correcting Value Passing

```python
def main():  # Main function that calls get_int
    x = get_int()  # Store the returned value from get_int
    print(f"x is {x}")  # Print the value

def get_int():
    while True:
        try:
            x = int(input("What is x? "))  # Prompt for input and convert it to an integer
            return x  # Return the valid input to main
        except ValueError:
            print("x is not an integer")  # Handle invalid input

main()  # Call main to start the process
```

- In this example, the `get_int()` function is called from `main()`, and the value is passed back to `main()` when valid.

---

### **Using `pass` to Ignore Errors Silently**

You can use the `pass` statement to ignore an error without showing a message or taking any action. This is useful when you want to silently handle an exception.

#### **Example**: Using `pass` to silently ignore errors

```python
def main():
    x = get_int()  # Call the function and store the returned value
    print(f"x is {x}")  # Print the valid integer entered by the user

def get_int():
    while True:
        try:
            x = int(input("What is x? "))  # Prompt for input and convert it to an integer
            return x  # Return the valid input
        except ValueError:
            pass  # Ignore the error silently and continue the loop

main()  # Call main to start the process
```

- The `pass` statement simply ignores the `ValueError` and keeps prompting the user for a valid input without printing any error messages.

---

### **Making Functions More Reusable (Passing Prompts as Arguments)**

You can make functions more reusable by passing the prompt message as an argument to the function. This allows different parts of your program to provide different prompts for the same input function.

#### **Example**: Passing a prompt to a reusable function

```python
def main():
    x = get_int("What is x? ")  # Call get_int with a custom prompt
    print(f"x is {x}")  # Print the valid integer entered by the user

def get_int(prompt):  # Accept a prompt as an argument
    while True:
        try:
            x = int(input(prompt))  # Use the prompt passed to the function
            return x  # Return the valid input
        except ValueError:
            pass  # Ignore invalid input silently

main()  # Call main to start the process
```

- This approach allows you to customize the prompt message without modifying the function each time.
- The `main()` function passes the prompt message to `get_int()`, making the function flexible and reusable.

---

### **Summary**

- **Exception handling**: Use `try-except` blocks to anticipate and handle errors.
- **Loops**: Use loops to repeatedly ask for user input until valid data is provided.
- **`return`**: Use `return` in functions to pass back valid data.
- **`pass`**: Use `pass` to silently ignore an error and continue execution.
- **Reusable functions**: Make your functions more flexible by passing arguments (e.g., the prompt message) to them.

This structured approach allows you to handle user input and errors efficiently while keeping your code clear and reusable.
