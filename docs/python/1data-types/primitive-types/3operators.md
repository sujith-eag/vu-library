---
title: "01 PDT - 03 Operators"
description: ""
summary: ""
date: 2024-12-17T22:33:59+05:30
lastmod: 2024-12-17T22:33:59+05:30
draft: false
weight: 12
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




An **operator** is a symbol that performs an operation on one or more operands (variables or values). Operators can be classified based on the number of operands they work with (Unary, Binary and Ternary operator) and their functionality.

#### **Classification Based on Nature:**
- **Arithmetic Operators**
- **Assignment Operators**
- **Unary Operators**
- **Relational Operators**
- **Logical Operators**
- **Membership Operators**
- **Identity Operators**
- **Boolean Operators**
- **Bitwise Operators**

---

### **1. Arithmetic Operators**

Arithmetic operators are used to perform basic arithmetic operations like addition, subtraction, multiplication, etc.

**Operators**: `+`, `-`, `*`, `/`, `%`, `**`, `//`

- **`+`**: Addition
- **`-`**: Subtraction
- **`*`**: Multiplication
- **`/`**: Division (returns a float)
- **`%`**: Modulo (returns the remainder of division)
- **`//`**: Floor Division (returns the quotient without the remainder)
- **`**`**: Exponentiation (raises the left operand to the power of the right operand)

```python
a = 10
b = 3

print(a + b)  # 13 (Addition)
print(a - b)  # 7 (Subtraction)
print(a * b)  # 30 (Multiplication)
print(a / b)  # 3.333... (Division)
print(a % b)  # 1 (Modulo)
print(a // b) # 3 (Floor Division)
print(a ** b) # 1000 (Exponentiation)
```

**Note:** It's always good practice to use parentheses `()` to suggest the order of operations, as Python follows standard operator precedence.

---

### **2. Assignment Operators**

Assignment operators are used to assign values to variables, sometimes in a shorthand way.

**Operators**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`, `//=`

- **`=`**: Simple assignment
- **`+=`**: Add and assign (e.g., `x += 1` is the same as `x = x + 1`)
- **`-=`**: Subtract and assign
- **`*=`**: Multiply and assign
- **`/=`**: Divide and assign
- **`%=`**: Modulo and assign
- **`**=`**: Exponent and assign
- **`//=`**: Floor division and assign

```python
x = 5
x += 3  # x = x + 3 => x = 8
x *= 2  # x = x * 2 => x = 16
```

---

### **3. Unary Operators**

A **unary operator** operates on a single operand (value).

#### **Unary Minus (`-`)**

The **unary minus operator** negates the value of a variable (changes a positive value to negative and vice versa).

```python
x = 10
y = -x  # y = -10
```

---

### **4. Relational Operators**

Relational (or comparison) operators are used to compare two values. They return a boolean value (`True` or `False`).

**Operators**: `>`, `<`, `==`, `!=`, `<=`, `>=`

- **`>`**: Greater than
- **`<`**: Less than
- **`==`**: Equal to
- **`!=`**: Not equal to
- **`<=`**: Less than or equal to
- **`>=`**: Greater than or equal to

```python
x = 10
y = 20
print(x < y)  # True
print(x == y) # False
print(x != y) # True
```

**Note:** Relational operators can also be chained. If any condition is `False`, the result will be `False`.

```python
# Example of chaining:
print(5 < 10 < 20)  # True
print(10 < 5 < 20)  # False
```

---

### **5. Logical Operators**

Logical operators are used to combine conditional statements. They are commonly used in `if` statements.

**Operators**: `and`, `or`, `not`

- **`and`**: Returns `True` if both operands are `True`
- **`or`**: Returns `True` if at least one operand is `True`
- **`not`**: Reverses the boolean value (returns `True` if the operand is `False`, and vice versa)

```python
x = True
y = False
print(x and y)  # False
print(x or y)   # True
print(not x)    # False
```

---

### **6. Membership Operators**

Membership operators are used to check if a value is present in a sequence (like a string, list, tuple, etc.).

**Operators**: `in`, `not in`

- **`in`**: Returns `True` if the value is found in the sequence
- **`not in`**: Returns `True` if the value is **not** found in the sequence

```python
fruits = ['apple', 'banana', 'orange']
print('apple' in fruits)    # True
print('grapes' not in fruits)  # True
```

---

### **7. Identity Operators**

Identity operators are used to compare the memory locations of two objects. These operators help check if two variables point to the same object in memory.

**Operators**: `is`, `is not`

- **`is`**: Returns `True` if both operands refer to the same object in memory
- **`is not`**: Returns `True` if both operands do not refer to the same object

```python
x = [1, 2, 3]
y = [1, 2, 3]
z = x
print(x is y)    # False (different objects in memory)
print(x is z)    # True (same object in memory)
```

You can also use the `id()` function to get the memory address of an object.

```python
print(id(x))
print(id(y))
```

---

### **8. Bitwise Operators**

Bitwise operators are used to perform bit-level operations on integers. These operations work at the binary level.

**Operators**: `&`, `|`, `^`, `~`, `<<`, `>>`

- **`&`**: Bitwise AND
- **`|`**: Bitwise OR
- **`^`**: Bitwise XOR
- **`~`**: Bitwise NOT
- **`<<`**: Left shift
- **`>>`**: Right shift

```python
x = 5  # (binary: 0101)
y = 3  # (binary: 0011)

print(x & y)  # Bitwise AND: 1 (binary: 0001)
print(x | y)  # Bitwise OR: 7 (binary: 0111)
print(x ^ y)  # Bitwise XOR: 6 (binary: 0110)
print(~x)     # Bitwise NOT: -6 (binary: 1010)
```

---

- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `//`, `**`
- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`, `%=` , `**=`, `//=`
- **Unary**: `-` (negation)
- **Relational**: `>`, `<`, `==`, `!=`, `<=`, `>=`
- **Logical**: `and`, `or`, `not`
- **Membership**: `in`, `not in`
- **Identity**: `is`, `is not`
- **Bitwise**: `&`, `|`, `^`, `~`, `<<`, `>>`

---


