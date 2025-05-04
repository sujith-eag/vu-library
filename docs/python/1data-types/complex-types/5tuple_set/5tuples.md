---
title: "02 CDT - 05 Tuples"
description: ""
summary: ""
date: 2024-12-17T22:46:50+05:30
lastmod: 2024-12-17T22:46:50+05:30
draft: false
weight: 25
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



A **tuple** is similar to a list in that it contains a collection of elements, which can be of different types. 

However, unlike lists, **tuples are immutable**, meaning that once a tuple is created, its elements cannot be modified. This makes tuples **read-only** sequences. So the methods to update the list like `append, extend, insert, remove, pop, clear` do not work.

Tuple is meant for storing data which should not be modified and to retrieve data on demand.

- **Elements** in a tuple are separated by commas and enclosed in parentheses `()`.
```python
>>> tup = ()
>>> tup
()

>>> tup = 1,2,3,4
>>> tup
(1, 2, 3, 4)

>>> tpl = (1, 2, 3, "apple", 4.5)
>>> tpl
(1, 2, 3, 'apple', 4.5)
```

A single element needs a `,` to be considered a tuple
```python
>>> tup = (10,)
>>> tup
(10,)
>>> type(tup)
<class 'tuple'>

>>> tup = (10)
>>> tup
10
>>> type(tup)
<class 'int'>
```

### Key Characteristics of Tuples:

1. **Immutable**: Once a tuple is created, you cannot change its elements. This makes it a **read-only** sequence.
- `tpl[0] = 10` trying to modify element will raise an error.

2. **Heterogeneous Elements**: A tuple can contain elements of different types, just like a list.
```python
>>> tpl = (23, "Kamal", [2, 3, 5, 7])
```

3. **Accessing Elements**: Values can be accessed and extracted from a tuple using **indexing** (with square brackets) or **slicing**, similar to list.

```python
>>> tpl = (1, 2, 3, "apple", 4.5)
>>> tpl[1]
2
>>> tpl[-2]
'apple'
```

4. **Slicing**: Just like lists, tuples support slicing to extract parts of the tuple.

```python
>>> tpl = (1, 2, 3, "apple", 4.5)
>>> tpl[1:3]
(2, 3)

>>> tpl[-2:]
('apple', 4.5)

>>> tpl[-1:]
(4.5,)
```

5. **Multiplying Tuples**: Tuples can be repeated using the multiplication operator `*`.

```python
>>> tpl*2
(1, 2, 3, 'apple', 4.5, 1, 2, 3, 'apple', 4.5)
```

6. **Simultaneous Assignment**: Tuples are often used in Python for **simultaneous assignment**, where multiple variables can be assigned values from a tuple in a single statement.

This is very similar to using a list, but tuples are typically used when the values should remain constant.
```python
>>> tup = (23, 'Kamal', [2,3,5,7])

>>> age, name, primes = tup

>>> age
23
>>> name
'Kamal'
>>> primes
[2, 3, 5, 7]

>>> age, name, primes
(23, 'Kamal', [2, 3, 5, 7])
```


7. Converting a list and range into a tuple

```python
>>> lst = [1,2,3,4]
>>> tuple(lst)
(1, 2, 3, 4)

>>> tuple(range(4,9,2))
(4, 6, 8)
```

### Use Cases for Tuples:

- **Data Integrity**: Use tuples when you want to ensure that the data remains unchanged, as tuples cannot be modified once created.
- **Multiple Return Values**: Functions often use tuples to return multiple values.

```python
def get_coordinates():
  return (3.5, 4.8)

x, y = get_coordinates()
```

- **Performance**: Since tuples are immutable, they are generally faster than lists for iteration and storage.

**Tuple of Values**: assigning a tuple of values to a variable, is useful for grouping related data.

```python
>>> point = (3.5, 4.8)
>>> point
(3.5, 4.8)

>>> date = 16, 'Jan', 2023
>>> date
(16, 'Jan', 2023)

>>> xcoordinate = point[0] # 3.5
>>> monthyear = date[1:]   # (7, 2023)
```

---

#### Methods for tuples

repeated using `*`
Concatenation using `+`
`in` and `not in` membership operators

`len()`  
`min()`  
`max()`
`count()`
`index()`
`sorted()` `sorted( tple, reverse=True)`


___

To accept a tuple and display their sum and average
```python
>>> num = eval( input("Enter elements in (): ") )
Enter elements in (): (1,2,3,4,5,6)
>>> sum = 0
>>> n = len(num)
>>> for i in range(n):
...     sum += num[i]
... 
>>> sum
21
>>> sum/n   # average
3.5
```

A program to find the first occurrence of an element in a tuple
```python
>>> str = input( 'Enter comma separated elements: ').split(',')
Enter comma separated elements: 10,20,30,40

>>> tup = tuple(str)

>>> str = input( 'Enter comma separated elements: ').split(',')
Enter comma separated elements: 10,20,30,40

>>> lst = [int(s) for s in str]

>>> tup = tuple(lst)

>>> ele = int( input("Enter an element to search: "))
Enter an element to search: 20

>>> try:
...     pos = tup.index(ele)
...     print('Element was in position', pos+1)
>>> exceptValueError:  # error if not found
...     print('Element not found in tuple')


>>> str
['10', '20', '30', '40']
>>> tup
('10', '20', '30', '40')
>>> lst
[10, 20, 30, 40]
>>> tup
(10, 20, 30, 40)
```


____

