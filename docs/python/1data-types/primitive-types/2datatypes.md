---
title: "01 PDT - 02 Datatypes"
description: ""
summary: ""
date: 2024-12-17T22:33:48+05:30
lastmod: 2024-12-17T22:33:48+05:30
draft: false
weight: 11
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



A **datatype** represents the type of data stored in a variable or memory location.

- **Built-in datatypes**: These are the pre-defined data types provided by Python.
- **User-defined datatypes**: These are custom data types created by programmers.

---

### Built-in Data Types

The built-in data types in Python can be broadly categorized into:

- **None type**
- **Numeric types**
- **Sequences**
- **Sets**
- **Mappings**

---

## None Type

The **None** type is used to represent the absence of a value or a null value.

- **None** is an object that does not contain any value, referred to as the `None` object.
- It is commonly used as a default value in functions, especially when no value is passed.
- In boolean expressions, **None** is considered `False`.

```python
x = None
```

---

## Numeric Types

Python supports three numeric data types:

- **int**: Integer numbers (whole numbers, no decimals)
- **float**: Floating-point numbers (numbers with decimals)
- **complex**: Complex numbers (numbers with both real and imaginary parts)

#### `int` Datatype

- Represents integer numbers, which are whole numbers without any decimal or fractional part.
- There is **no limit** to the size of integers in Python (only limited by the system’s memory).

```python
x = 42
```

#### `float` Datatype

- Represents numbers containing a decimal point.
- **Scientific notation** can also be used for floating-point numbers (e.g., `1.5e2` represents `150.0`).

```python
y = 3.14
```

#### `complex` Datatype

- A complex number has both a **real part** and an **imaginary part**, written in the form `a + bj` where `a` is the real part and `b` is the imaginary part.
- The **imaginary unit** is represented by `j`, which is the square root of `-1`.

```python
z = 2 + 3j
```

---

### Type Conversion

Python automatically assigns data types to variables based on the values assigned. However, you can explicitly convert one data type to another using **type conversion**.

- `int(x)` – Converts to an integer
- `float(x)` – Converts to a float
- `complex(x)` – Converts to a complex number
- `complex(a, b)` – Converts to a complex number with real part `a` and imaginary part `b`

```python
x = int(3.14)    # Converts 3.14 to 3
y = float(3)     # Converts 3 to 3.0
z = complex(1, 2) # Converts to 1 + 2j
```


---

### **Determining the Datatype of a Variable**

In Python, you can determine the datatype of a variable using the built-in `type()` function. This function returns the type of the object passed to it.

```python
type(variable)
```

```python
a = 15
print(type(a))  # Output: <class 'int'>
```

```python
ch = 'A'
print(type(ch))  # Output: <class 'str'>
```

---

### `bool` Datatype

The **`bool`** datatype represents boolean values. It only has two possible values:

- `True`
- `False`

Internally, `True` is represented as `1` and `False` as `0`. 

- An **empty string** (`""`) is also considered `False`.
- Other empty collections (like empty lists, dictionaries, etc.) are also considered `False`.

```python
is_active = True
is_empty = False
```


---

## Sequences in Python

A **sequence** is a group of ordered elements or items. Sequences allow for storing multiple items in a single variable, and each item in a sequence can be accessed by its index (position in the sequence).

A **sequence** can contain various types of elements, including integers, strings, or other objects. For example, a sequence of integers would look like this: `[1, 2, 3, 4]`.

Python provides **six types** of sequences:

- **`str`** (string)
- **`bytes`**
- **`bytearray`**
- **`list`**
- **`tuple`**
- **`range`**

#### 1. **`str`** (String)

- A **string** is a sequence of characters enclosed in quotes (either single or double quotes).
- Strings are **immutable**, meaning once created, their contents cannot be changed.
  
```python
s = "Hello, World!"
```

#### 2. **`bytes`**

- The **`bytes`** type is a sequence of immutable byte values.
- Used to represent binary data (e.g., when reading from files or network protocols).
  
```python
b = bytes([65, 66, 67])  # Represents the byte values for 'A', 'B', 'C'
```

#### 3. **`bytearray`**

- Similar to `bytes`, but **mutable**, meaning you can change the values of its elements.
- Used when you need to manipulate binary data.

```python
ba = bytearray([65, 66, 67])  # A mutable sequence of bytes
ba[0] = 90  # Modify first element (from 65 -> 90, i.e., 'Z')
```

#### 4. **`list`**

- A **list** is an ordered, **mutable** collection of elements. Lists can contain elements of different data types.
- Lists are very flexible, as you can add, remove, and change elements.
  
```python
lst = [1, 2, 3, "apple", 5.5]
```

#### 5. **`tuple`**

- A **tuple** is an ordered, **immutable** collection of elements. Like lists, tuples can store multiple items of different types.
- Once a tuple is created, its values cannot be changed (no appending or removing elements).
  
```python
t = (1, 2, 3, "apple", 5.5)
```

#### 6. **`range`**

- The **`range`** type is a special type of sequence used for generating a sequence of numbers, often used in `for` loops.
- It represents an immutable sequence of numbers, generated on demand (i.e., it doesn’t store all the values in memory).
  
```python
r = range(1, 5)  # Generates numbers 1, 2, 3, 4

r = range(10)  # Numbers from 0 to 9

r = range(30, 40, 2)  # 30 to 39, step size 2
```

```python
lst = list( range(10))  # to make a list using range
```

---

## Sets in Python

A **set** is an unordered collection of unique elements. Unlike sequences (lists, tuples), sets are **unordered** and do not store duplicate elements. Since it is unordered, No slicing or Indexing to retrieve the values.

- **Mutable**: You can add or remove elements from a set after it is created.
- **Unordered**: The elements in a set do not have a specific order.
- **No duplicates**: Sets automatically remove any duplicate elements.

```python
s = {1, 2, 3, 4}
```

`s.update()` and `s.remove()` are used to add and remove any particular element.

- **Set Operations**:
  - Union: `set1 | set2`
  - Intersection: `set1 & set2`
  - Difference: `set1 - set2`
  - Symmetric Difference: `set1 ^ set2`


```python
a = {1, 2, 3}
b = {3, 4, 5}
print(a & b)  # Intersection: {3}
print(a | b)  # Union: {1, 2, 3, 4, 5}
print(a - b)  # Difference: {1, 2}
```

---

## Mappings in Python

A **mapping** is a collection of key-value pairs. The most common mapping type in Python is the **dictionary**.

- **Dictionaries** store data in key-value pairs, where each key is unique.
- **Mutable**: You can change the value associated with a key or add/remove key-value pairs.
- **Unordered**: The key-value pairs in a dictionary are unordered, although from Python 3.7 onward, insertion order is preserved.

##### `dict` (Dictionary)

A dictionary is a mapping type that stores key-value pairs. The keys must be immutable (e.g., strings, numbers, tuples), while the values can be of any data type.

```python
d = {"name": "John", "age": 30, "city": "New York"}
```

- **Accessing values**: You access values in a dictionary using keys.
  ```python
  print(d["name"])  # Outputs: John
  ```

- **Adding or updating values**:
  ```python
  d["age"] = 31  # Update value for existing key
  d["country"] = "USA"  # Add new key-value pair
  ```

- **Removing items**:
  ```python
  del d["city"]  # Removes the key 'city'
  ```

- **Dictionary Operations**:
  - `keys()` – Returns a view object of all keys
  - `values()` – Returns a view object of all values
  - `items()` – Returns a view object of key-value pairs

Example:
```python
print(d.keys())   # dict_keys(['name', 'age', 'country'])
print(d.values()) # dict_values(['John', 31, 'USA'])
print(d.items())  # dict_items([('name', 'John'), ('age', 31), ('country', 'USA')])
```

---

***Summary of Sets and Mappings***

- **Sets** are useful for storing a collection of unique elements, and they provide various set operations (union, intersection, etc.).
- **Dictionaries** (mappings) are key-value pair collections that are ideal for situations where you need to quickly look up data based on a unique key.

---
