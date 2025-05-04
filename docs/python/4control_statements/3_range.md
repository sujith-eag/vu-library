---
title: "04 Control-Flow - 03 Range"
description: ""
summary: ""
date: 2025-01-25T07:41:22+05:30
lastmod: 2025-01-25T07:41:22+05:30
draft: false
weight: 39
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



The `range()` function generates a sequence of numbers, commonly used for looping or generating lists with specific patterns.

- **`range(i, j)`** Generates a sequence of numbers starting from `i` and ending before `j`.
```python
range(i, j)
# Produces the sequence: i, i+1, ..., j-1
```

- **`range(j)`** Starts from `0` and ends before `j`. This is equivalent to `range(0, j)`.
```python
range(j)
# Like slice(:j), starts from 0, ends at j-1
```

#### Increment with `range()`:

- **`range(i, j, k)`**  
Adds an optional third argument `k` for defining the step increment, useful for sequences with a specific pattern, like arithmetic progressions (AP).
```python
range(i, j, k)
# Produces: i, i+k, i+2k, ..., i+nk
```

#### Reverse Counting:

- To count in reverse, use a negative value for `k`. Ensure `i > j` when using a negative step.
```python
range(i, j, -1)
# i must be greater than j (i > j)
```

- This can be useful for iterating over a list’s valid indices:
```python
range(0, len(l))
# Produces a valid range of indices for the list l
```

#### Converting `range()` to a List:

- **`range()`** creates a `range` object, not a list. To convert it into a list, use the `list()` function:
```python
list(range(0, 5))  
# Converts range to list: [0, 1, 2, 3, 4]
```

#### Skipping Numbers in Sequences:

- Useful for generating sequences where numbers are skipped, such as even numbers or multiples:
```python
even = list(range(2, 11, 2))
print(even)  
# Output: [2, 4, 6, 8, 10]
```

---

### Using `range()` to Generate Sequences

`range()` can be particularly useful in a variety of contexts, such as repeating actions or generating specific number sequences.

##### Example 1: Repeating a String Multiple Times

```python
# Repeating the string "meow" 3 times:
print("meow" * 3)  # Output: meowmeowmeow
```

##### Example 2: Using Newlines with `range()`

```python
# Using newline `\n`:
print("meow\n" * 3)  # Output: meow (with new line after each "meow")
```

##### Example 3: Removing the Default Newline in `print()`

```python
# Removing the default newline after the print:
print("meow\n" * 3, end="")  # Output: meowmeowmeow (without extra newline)
```

##### Example 4: Finding All Factors of a Number `n`

You can use `range()` in a `for` loop to find all factors of a given number `n`:

```python
def factors(n):
flist = []
for i in range(1, n + 1):
	if n % i == 0:
		flist.append(i)  # Can also use flist = flist + [i]
return flist
```

---
