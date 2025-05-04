---
title: "04 Control-Flow - 02 Match-Case"
description: ""
summary: ""
date: 2025-01-25T07:41:04+05:30
lastmod: 2025-01-25T07:41:04+05:30
draft: false
weight: 38
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



`match` Statement in Python introduced in `Python 3.10`

The `match` statement allows you to compare a variable against different patterns and execute corresponding code blocks. much like the `switch` statement in other languages.

- **`match`**: Used to compare the variable against different patterns.
- **`case`**: Each potential pattern the variable could match.
- **`_`**: The wildcard pattern, acting as a default case if no other pattern matches.

This feature is useful for matching complex data structures and handling various cases in a more readable way than using multiple `if` statements.

#### Syntax:

```python
match variable:
    case pattern1:
        # block of code if pattern1 matches
    case pattern2:
        # block of code if pattern2 matches
    case _:
        # block of code if no pattern matches (default case)
```

#### Example:

```python
name = input("What is your name? ")
match name:
    case "Harry":
        print("Gryffindor")
    case "Hermione":
        print("Gryffindor")
    case "Draco":
        print("Slytherin")
    case _:  # Default case
        print("Who?")
```

```
Gryffindor (if the name is Harry or Hermione)
Slytherin (if the name is Draco)
Who? (if the name is something else)
```

---

### Using the `|` (OR) Operator in `match` Cases

The `|` (vertical bar) can be used to match multiple patterns (like an "OR" operator).

```python
name = input("What is your name? ")
match name:
    case "Harry" | "Hermione" | "Ron":
        print("Gryffindor")
    case "Draco":
        print("Slytherin")
    case _:  # Default case
        print("Who?")
```

```
Gryffindor (if the name is Harry, Hermione, or Ron)
Slytherin (if the name is Draco)
Who? (if the name is something else)
```

---

### Matching Complex Data Structures

You can use `match` to handle complex data structures, such as tuples:

```python
def describe_shape(shape):
    match shape:
        case ("circle", radius):
            print(f"A circle with radius {radius}")
        case ("rectangle", width, height):
            print(f"A rectangle with width {width} and height {height}")
        case _:
            print("Unknown shape")

describe_shape(("circle", 5))
describe_shape(("rectangle", 4, 7))
describe_shape(("triangle", 3))

# Output:
# A circle with radius 5
# A rectangle with width 4 and height 7
# Unknown shape
```

---
