---
title: "NumPy - 11 Boolean Indexing"
description: ""
summary: ""
date: 2025-02-14T20:44:41+05:30
lastmod: 2025-02-14T20:44:41+05:30
draft: false
weight: 131
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




```python
>>> names = np.array(["Bob", "Joe", "Will", "Bob", "Will", "Joe", "Joe"])
>>> data = np.array([[4, 7], [0, 2], [-5, 6], [0, 0], [1, 2], [-12, -4], [3, 4]])

>>> names  
array(['Bob', 'Joe', 'Will', 'Bob', 'Will', 'Joe', 'Joe'], dtype='<U4')

>>> data  
array([[ 4,  7],
       [ 0,  2],
       [ -5,  6],
       [  0,  0],
       [  1,  2],
       [-12, -4],
       [ 3,  4]])
```

Each name corresponds to a row in the `data` array, and we can use **Boolean indexing** to filter data based on the values in `names`.

---

#### Selecting Rows for a Specific Name

Like arithmetic operations, comparisons (`==`  `!=`) with arrays are also vectorized.
```python
>>> names == "Bob"  
array([ True, False, False,  True, False, False, False])

>>> data[names == "Bob"]  
array([[4, 7],
       [0, 0]])
```

- The condition `names == "Bob"` generates a Boolean array.
- This Boolean array is used to index the `data` array and return the corresponding rows.

The boolean array must be of the same length as the array axis it is indexing.


---

#### Selecting Specific Columns for a Name

To select the rows where `names == "Bob"` and also index the columns too.

```python
>>> data[names == "Bob", 1: ]  
array([[7],
       [0]])

>>> data[names == "Bob", 1 ]  
array([7, 0])
```

- The `1:` specifies that only the columns starting from index 1 will be included.

---

#### Selecting Everything Except a Specific Name

To select rows where the name is not "Bob", the condition can be negated using `!=` or `~`:

```python
>>> names != "Bob"  
array([False,  True,  True, False,  True,  True,  True])

>>> ~(names != "Bob")  
array([ True, False, False,  True, False, False, False])

>>> ~(names == "Bob")  
array([False,  True,  True, False,  True,  True,  True])

>>> data[names != "Bob"]  
array([[  0,   2],
       [ -5,   6],
       [  1,   2],
       [-12,  -4],
       [  3,   4]])
```

The `~` operator is useful to invert a boolean array referenced by a variable.

```python
>>> cond = names == "Bob"  
>>> data[ ~cond ]  
array([[  0,   2],
       [ -5,   6],
       [  1,   2],
       [-12,  -4],
       [  3,   4]])
```

- The variable `cond` stores the condition, and `~cond` is used to invert the Boolean array.

---

#### Selecting Multiple Names Using Boolean Operators ('&', '|')

combining conditions using the **bitwise** operators `&` (and) and `|` (or).

```python
>>> names = np.array(["Bob", "Joe", "Will", "Bob", "Will", "Joe", "Joe"])
>>> data = np.array([[4, 7], [0, 2], [-5, 6], [0, 0], [1, 2],[-12, -4], [3,4]])

>>> mask = (names == "Bob") | (names == "Will")
>>> mask  
array([ True, False,  True,  True,  True, False, False])

>>> data[mask]  
array([[ 4,  7],
       [-5,  6],
       [ 0,  0],
       [ 1,  2]])
```

- `&` is for logical AND, and `|` is for logical OR.
- **Important**: Do **not** use Python's `and` or `or` for element-wise Boolean operations. Use `&` and `|` for **Boolean arrays**.

Selecting data from an array by Boolean Indexing and assigning the results to a new variable *always* creates a new copy of the data, even if the returned array is unchanged.

When indexing and modifying arrays with Boolean conditions, the changes are applied directly to the original array.

---

#### Modifying Data Based on a Condition


```python
>>> data[names != "Joe"] = 7  
>>> data  
array([[  7,   7],
       [  0,   2],
       [  7,   7],
       [  7,   7],
       [  7,   7],
       [-12,  -4],
       [  3,   4]])
```

- The condition `names != "Joe"` identifies rows where the name is not "Joe".
- These rows are updated to have the value `7` in the `data` array.

---

