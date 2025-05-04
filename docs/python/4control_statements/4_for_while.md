---
title: "04 Control-Flow - 04 Loops"
description: ""
summary: ""
date: 2025-01-25T07:41:22+05:30
lastmod: 2025-01-25T07:41:22+05:30
draft: false
weight: 40
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




### 1. 'for' Loop: Iterating Over a Collection

The `for` loop is used to iterate over a sequence (like a list, tuple, or string) and execute a block of code for each item in the sequence.

**Basic Example 1: Iterating Over a List:**

```python
for i in [0, 1, 2]:
    print("Meow")
```

**Basic Example 2: Using `range()` to Repeat a Fixed Number of Times:**

```python
for i in range(3):  # Iterates over a range of 3 numbers (0, 1, 2)
    print("Meow")
```

**Example 3: Using `range()` to Iterate Over a Sequence of Numbers:**

```python
for i in range(0, n):  # Sequence from 0 to n-1
    # Code to execute
```

---

### 2. 'while' Loop: Loops Based on Condition

The `while` loop is useful when you don't know how many times the loop should run in advance. It keeps executing as long as the condition evaluates to `True`.

**Decrementing Example:**

```python
i = 3
while i != 0:
    print("Meow")
    i = i - 1
```

**Incrementing Example:**

```python
i = 0
while i != 3:  # Alternatively: while i < 3
    print("Meow")
    i = i + 1  # or i += 1
```

**Using `while` to Write Clear Prompts:**

```python
prompt = "Type this message\n"
prompt += "Add 'quit' to exit\n:"
message = ""
while message != "quit":
    message = input(prompt)
    print(message)
```

**Example of a counter with `while` loop:**

```python
number = 1
while number <= 5:
    print(number)
    number += 1  # Can also be number *= 2 to double the value
```


---

### 3. Using a Flag to Exit a Loop

A flag is a variable that controls whether the loop continues or stops. It’s particularly useful when there are multiple conditions to consider.

When many possible events might occur to stop the program, testing all these conditions in a single `while` statement can become complicated. Instead, we can use a flag to simplify this.

The flag acts as a signal to the program. The loop will run as long as the flag is set to `True`, and it will stop when any event sets the flag to `False`. This way, our `while` statement only needs to check one condition: whether the flag is `True`.

Other conditions that could modify the flag can be handled separately in the rest of the program.

```python
prompt = "\nType to have it repeated"
prompt += "\n: "
active = True

while active:  # Loop continues while 'active' is True
    message = input(prompt)
    if message == "quit":
        active = False  # When "quit" is entered, the flag is set to False, ending the loop
    else:
        print(message)
```


This approach keeps the program flow simple, only needing to check the flag condition in the `while` loop.

---

### 4. Using 'break' to Exit a Loop

The `break` statement immediately exits the loop, regardless of the condition.

```python
prompt = "\nEnter the city you have visited:"
prompt += "\nUse 'quit' to exit. "

while True:  # This loop will run indefinitely until 'break' is encountered
    city = input(prompt)
    if city == "quit":
        break  # Exits the loop when 'quit' is entered
    else:
        print(f"\n{city.title()} is lovely")
```

---

### 5. Using 'continue' in a Loop

The `continue` statement skips the current iteration of the loop and moves on to the next one.

**Example:**

```python
number = 0

while number < 10:
    number += 1
    if number % 2 == 0:  # Skips even numbers
        continue
    else:
        print(number)  # Prints only odd numbers
```

---

### 6. Modifying Lists Inside Loops

You can use a `while` loop to modify lists as you work through them. For example, you can move items from one list to another or remove specific values.

**Example 1: Moving Items Between Lists:**

```python
unconfirmed_users = ['alice', 'brian', 'candace']
confirmed_users = []

while unconfirmed_users:  # Continues as long as the list is not empty
    user = unconfirmed_users.pop()
    print(f"Verifying User: {user.title()}")
    confirmed_users.append(user)

print("\nThe following users have been verified:")
for user in confirmed_users:
    print(f"{user.title()}")
```

**Example 2: Removing Specific Values from a List:**

```python
pets = ['dog', 'cat', 'dog', 'goldfish', 'cat', 'rabbit', 'cat']
print(pets)

while "cat" in pets:
    pets.remove("cat")  # Removes the first instance of "cat"
print(pets)
```

---

### 7. Filling a Dictionary with User Input

A `while` loop can be used to collect multiple user inputs and store them in a dictionary.

```python
responses = {}
polling = True

while polling:
    name = input("\nWhat's your name: ")
    response = input("What mountain would you like to climb someday? ")
    responses[name] = response  # Add user response to dictionary

    repeat = input("\nWould you like another to take this poll? (y/n): ")
    if repeat == "n":
        polling = False  # Ends the loop when 'n' is entered

print("\n-- Poll Results --")
for name, response in responses.items():
    print(f"{name.title()} wants to climb {response.title()}.")
```

---

### 8. Functions with Loops

You can define functions that use loops to perform repetitive tasks.

```python
def main():
    number = get_number()
    meow(number)

def get_number():
    while True:
        n = int(input("What's n? "))
        if n > 0:
            break  # Ensures that n is positive
    return n

def meow(n):
    for _ in range(n):  # Repeats n times
        print("Meow")

main()
```

---

### 9. Simulating a 'for' Loop with a 'while' Loop

Sometimes you may want to simulate a `for` loop using a `while` loop.

**Example 1: Simulating `for` with a Range:**

```python
n = i
while n < j:
    statement
    n += 1
```

**Example 2: Simulating Iterating Over a List:**

```python
i = 0
while i < len(l):
    n = l[i]
    statement
    i += 1
```

---
