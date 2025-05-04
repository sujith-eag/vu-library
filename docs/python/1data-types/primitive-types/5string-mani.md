---
title: "01 PDT - 05 String Manipulation"
description: ""
summary: ""
date: 2024-12-17T22:34:58+05:30
lastmod: 2024-12-17T22:34:58+05:30
draft: false
weight: 14
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




The `str` datatype represents a **string**, which is a sequence of characters. Strings in Python are enclosed in **single quotes** (`'`), **double quotes** (`"`), or **triple quotes** (`'''` or `"""`) for multi-line strings.

- A single character is treated the same as a string of length 1.
- **Strings are immutable**: once created, they cannot be changed.

#### **String Representation**
- Anything inside single (`'`) or double quotes (`"`) is a string.
  
```python
string1 = "Hello, World!"
string2 = 'Python is awesome'
```

You can use one type of quote inside the other without escaping:
```python
string3 = "He said, 'Hello!'"
string4 = 'She replied, "Good morning!"'
```

For multi-line strings, use triple quotes:
```python
multiline_string = '''This is a string
that spans multiple lines.'''
print(multiline_string)
```

---

#### **Avoiding Syntax Errors with Strings**

To avoid errors when using quotes within strings, you can:
- **Use different quote types** inside and outside:
  
```python
print("Hello, 'friend'")  # Using double quotes for the string
print('Hello, "friend"')  # Using single quotes for the string
```

- **Escape quotes** with a backslash (`\`):
  
```python
print("Hello, \"friend\"")  # Escape double quotes
print('Hitchhiker\'s Guide to the Galaxy')  # Escape single quote
```

---

### **f-strings (Formatted Strings)**

An **f-string** (formatted string) allows embedding expressions inside string literals for formatting. To use an f-string, prefix the string with an `f` and include expressions inside curly braces (`{}`).

```python
name = input("What's your name? ")
print(f"Hello, {name}!")  # Inserts the value of 'name' inside the string
```

```python
first = "John"
last = "Doe"
print(f"Hello, {first} {last}!")  # Output: Hello, John Doe!
```

```python
name = "john"
print(f"Hello, {name.title()}!")  # Output: Hello, John!
```

---


## Basic String manipulation

#### Combining two strings / Concatenation "+"

"+" concatenates the two strings like a text, its just one argument
```python CS50
name = input ("wht is ")         
print("hello "+ name)

s = "hello"
t = s + ", there"
```

" , " creates two arguments.
The default parameters of print function adds a space between arguments. 
```python
print("hello", name)
```
`sep=' '` is the space between the arguments and `end="\n"` is a new line at the end. 
```python
print("hello", name, sep="", end="\n\n\n")
```
This has no space and 3 extra lines.


#### Adding White Space

White space refers to non printing characters. Adding white space to strings with tabs or newlines
`\t`  to add tab to the text.
`\n`  to add a new line in a string
```python
print( "\tpython")
```
```
    python
```

`\n \t` tells python to move to new line and start with tab space.
```python
print( "Languages:\nPython\nJava\nJava Sricpt"  )
```
```
Python

Java

Java Sricpt
```


```python
print("Continue on the", end = " " )   # no new line
print("same line", end= ".\n")   
print("Next line.")
```
```
Continue on the same line.
Next line.
```


____

#### Getting to individual characters

`str` is a sequence or list of characters. Positions are `0, 1, 2, . .n-1`  for string of length n.
`-5, -4, -3, -2, -1`  to count backwards.
```python
S = "hello"
S[1] = "e"
S[-1] = "o"
S[-2] = "l"
```

```python
s = "hello"
t = "there"
s+t = "hellothere"

len(s)  # returns length of s
```


#### Extracting Sub-strings and Slices

Slice is a segment of a string.
```python
s = "hello"
s[1:4] # is "ell" as slice stops before the last number
s[:j]  # starts from 0 and ends at j-1
s[i:]  # i onwards till the end
```


#### Modifying strings

Strings are Immutable values, We cannot update a string in place.   
They cannot be changed directly without creating another value. 
```python
s = "hello" # to change it to "help"
s[3] = "p"  # will cause error

# instead, use slices and cocatination
s = "hello"
s = s[0:3] + "p!"
s = "help!"
```


#### Removing a letter from index and adding to new string 

Using `+=`    (reverse of `=+` as in int)
```python
merged = ""
word1 = "abcdef"
merged += word1[0]
merged += word1[1]

# merged = "ab"
```


#### Making a list of individual strings from a string

```python
word1 = "abcdef"
ind = list(word1)
print(ind)   # ['a', 'b', 'c', 'd', 'e', 'f']
```


#### Joining a list of strings

Recombining a list of strings using a separator
```python
seperator.join(list of strings)

columns = ['6', '7', '8']  # has list of strings 
joiningstring = ","   # this will be the seperator
csline = joiningstring.join(columns)  #  ",".join(columns)

date = "16"
month = "08"
year = "2016"

# the seperator can be directly given as in "_"
today = "_".join( [date, month, year])  
```


#### Using of set to have unique entries

Set creates a list of only unique characters, no repeats.
```python
word1 = "abababab"
ind = set(word1)
print(ind)
# {'b', 'a'}   returns a dict?
# set doesnt provide indexing!! or any order 

# make a list and pass or pass str directly, gives same result
```


