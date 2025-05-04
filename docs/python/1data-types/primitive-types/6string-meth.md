---
title: "01 PDT - 06 String Methods"
description: ""
summary: ""
date: 2024-12-17T22:34:58+05:30
lastmod: 2024-12-17T22:34:58+05:30
draft: false
weight: 15
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Method is a function that is built into a function used to perform actions on a piece of data.
They are followed by a `()` parenthesis, as they may need additional data to work.  (need to check documentation for more)

### String Methods Covered:

1. **Case Modification**:
   - `upper()`: Converts all characters to uppercase.
   - `lower()`: Converts all characters to lowercase.
   - `swapcase()`: Swaps case (lower to upper and vice versa).
   - `title()`: Converts the first character of each word to uppercase.
   - `capitalize()`: Capitalizes the first character of the string.

2. **Cleaning Strings**:
   - `rstrip()`: Removes trailing whitespace.
   - `lstrip()`: Removes leading whitespace.
   - `strip()`: Removes both leading and trailing whitespace.
   - `removeprefix()`: Removes a specified prefix from the string.
   - `removesuffix()`: Removes a specified suffix from the string.

3. **Searching for Text**:
   - `find()`: Returns the index of the first occurrence of a substring (returns `-1` if not found).
   - `index()`: Similar to `find()`, but raises an error if the substring isn't found.

4. **Search and Replace**:
   - `replace()`: Replaces occurrences of a substring with a new one.

5. **Splitting Strings**:
   - `split()`: Splits the string into a list at each occurrence of a specified delimiter (defaults to whitespace).
   - `splitlines()`: Splits the string into a list at each newline character (`\n`).

6. **Resizing Strings**:
   - `center()`: Centers the string within a given width, padding with spaces.
   - `ljust()`: Left-aligns the string within a given width, padding with spaces.
   - `rjust()`: Right-aligns the string within a given width, padding with spaces.

7. **Checking Character Types**:
   - `isalpha()`: Returns `True` if all characters are alphabetic.
   - `isnumeric()`: Returns `True` if all characters are numeric.

8. **Other Utility**:
   - `join()`: Joins elements of an iterable (e.g., a list) into a single string, using the string as a separator.


---

### Changing Case

The `title()` method capitalizes the first letter of each word.
```python
variable.title()
print(variable.title())
```
The `.` after the variable tells Python to apply the `title()` method on it.

```python
variable.upper()
variable.lower()
variable.swapcase()
```
`lower()` is useful for handling user input data, while `swapcase()` changes uppercase to lowercase and vice versa.

To adjust mis-typed spacing and capitalization in a string:
```python
name = name.capitalize()    # Capitalizes the first letter
name = name.title()         # Converts to title case
name = name.title().strip() # Strips leading and trailing spaces
name = name.strip()         # Removes spaces on both sides
```

Everything in one line:
```python
name = input("What's your name? ").title().strip()
print(f"Hello, {name}", name, sep=' ', end="\n")
name = input("Please type your name: ").strip().title()
```

---

### Stripping White Space / Removing Prefix

When comparing two values, extra whitespace can lead to mismatches. It's a good idea to handle whitespace before storing data:
```python
variable.rstrip() 
variable.lstrip()
variable.strip()
```

To remove prefixes:
```python
url = 'https://nostarch.com'
url.removeprefix('https://')
url.removesuffix('.com')
```

---

### Searching for Text

- **`find()`**: Returns the index of the first occurrence of a substring, or `-1` if not found.
```python
s.find(pattern)
s.find(pattern, start, end)
```

- **`index()`**: Works like `find()`, but raises an error if the substring is not found.
```python
s.index(pattern)
s.index(pattern, start, end)
```


1. **Using `find()`**: 

```python
text = "Hello, welcome to the world of Python."

# Find the first occurrence of 'welcome'
position = text.find("welcome")
print(position)  # Output: 7 (index of 'w' in 'welcome')

# Find a substring within a slice
position = text.find("world", 10, 30)  # Searching in the range from index 10 to 30
print(position)  # Output: 20 (index of 'w' in 'world')
```

If the pattern is not found, `find()` will return `-1`:
```python
position = text.find("Java")
print(position)  # Output: -1 (since 'Java' isn't in the string)
```

2. **Using `index()`**:

```python
# Using index to find 'Python'
position = text.index("Python")
print(position)  # Output: 33 (index of 'P' in 'Python')

# Using index with a slice
position = text.index("world", 10, 30)
print(position)  # Output: 20 (index of 'w' in 'world')
```

If the pattern is not found, `index()` will raise an error:
```python
try:
    position = text.index("Java")
except ValueError:
    print("Pattern not found!")  # Output: Pattern not found!
```


---

### Search and Replace

Returns a copy of `s` with `fromstr` replaced by `tostr`:
```python
s.replace(fromstr, tostr)
s.replace(fromstr, tostr, n)  # Replaces at most n copies
```
Note: Strings are immutable, so `replace()` returns a new string.

---

### Splitting a String

Split a string into substrings. For example:
```python
first, last = name.split(" ")
print(f"Hey, {first}, How are you?")
```

For CSV-like data, use a delimiter like `,`:
```python
columns = s.split(",")  # Split by comma
columns = s.split(" : ", n)  # Split at most n parts
```

Example:
```python
csline = "6,7,8"
csvline.split(",")  # ['6', '7', '8']
```

---

### Resizing Strings

Resize strings to a specified width, using padding:
```python
s.center(n)  # Centers string
s.center(n, "*")  # Centers with stars

s.ljust(n)    # Left justifies string
s.ljust(n, "*")  # Left justify with stars

s.rjust(n)    # Right justifies string
s.rjust(n, "*")  # Right justify with stars
```

---

### Checking Nature of Characters in a String

Check if all characters in the string are alphabetic or numeric:
```python
s.isalpha()    # Checks if all characters are alphabetic
s.isnumeric()  # Checks if all characters are numeric
```


---


**`join()`**: Joins elements of an iterable (e.g., a list, tuple) into a single string, using the string that calls the method as the separator.

```python
words = ['Hello', 'world', 'Python']
sentence = ' '.join(words)  # Joins with space
print(sentence)  # Output: "Hello world Python"

# Join with a different separator
sentence = '-'.join(words)  # Joins with a hyphen
print(sentence)  # Output: "Hello-world-Python"
```


