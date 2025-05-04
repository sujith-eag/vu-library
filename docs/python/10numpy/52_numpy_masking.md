---
title: "NumPy - 12 NumPy Masking"
description: ""
summary: ""
date: 2025-02-14T20:44:57+05:30
lastmod: 2025-02-14T20:44:57+05:30
draft: false
weight: 132
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



NumPy masking refers to the technique of filtering or selecting elements in an array based on a condition using Boolean masks. It is commonly used for conditional operations and efficiently filtering data. NumPy masking is a powerful tool for filtering, modifying, and handling missing data.

---

### 1. **Creating a Boolean Mask**

A mask is a Boolean array (same shape as the original array) where:

- `True` indicates that the corresponding element satisfies the condition.
- `False` indicates that it does not.

```python
>>> import numpy as np
>>> arr = np.array([10, 20, 30, 40, 50])
>>> mask = arr > 25  # Mask for values greater than 25
>>> print(mask)
[False False  True  True  True]
```

---

### 2. **Using Masking to Filter Data**

You can use the Boolean mask to extract elements that meet a condition.

```python
>>> import numpy as np
>>> arr = np.array([10, 20, 30, 40, 50])
>>> mask = arr > 25  # Mask for values greater than 25
>>> print(mask)
[False False  True  True  True]
>>> filtered = arr[mask]  # Extract elements where mask is True
>>> print(filtered)
[30 40 50]
```

---

### 3. **Applying Multiple Conditions**

You can use logical operators like:

- `&` (AND)
- `|` (OR)
- `~` (NOT)

```python
>>> import numpy as np
>>> arr = np.array([10, 20, 30, 40, 50])
>>> mask = (arr > 15) & (arr < 45)  # Values between 15 and 45
>>> filtered = arr[mask]
>>> print(filtered)
[20 30 40]
```

---

### 4. **Modifying Elements Using a Mask**

You can modify elements that satisfy a condition.

```python
>>> import numpy as np
>>> arr = np.array([10, 20, 30, 40, 50])
>>> arr[arr > 30] = 100  # Replace values greater than 30 with 100
>>> print(arr)
[ 10  20  30 100 100]
```

---

### 5. **Masking with 'np.where()'**

`np.where(condition, x, y)` returns an array where:

- `x` is placed where the condition is `True`
- `y` is placed where the condition is `False`

```python
>>> import numpy as np
>>> arr = np.array([10, 20, 30, 40, 50])
>>> new_arr = np.where(arr < 25, 1, 0)  # Replace values < 25 with 1, others with 0
>>> print(new_arr)
[0 0 1 1 1]
```

---

### 6. **Masked Arrays with 'numpy.ma'**

NumPy provides a `numpy.ma` module for handling masked (missing or invalid) data.

```python
>>> import numpy as np
>>> arr = np.array([10, 20, 30, 40, 50])
>>> masked_arr = np.ma.array(arr, mask=(arr < 25))  # Mask values less than 25
>>> print(masked_arr)
[10 20 -- -- --]
```

---

### 7. **Counting and Summing Masked Values**

You can count or sum elements using masks.

```python
>>> import numpy as np
>>> arr = np.array([10, 20, 30, 40, 50])
>>> count = np.sum(arr > 25)  # Count values greater than 25
>>> total = np.sum(arr[arr > 25])  # Sum of values greater than 25
>>> print(count)  # Output: 3
3
>>> print(total)  # Output: 120
120
```

---

### 8. **Masking in 2D Arrays**

You can apply the same masking techniques to 2D arrays.

```python
>>> import numpy as np
>>> arr2D = np.array([[10, 20, 30], [40, 50, 60]])
>>> mask2D = arr2D > 25  # Mask for values greater than 25
>>> print(arr2D[mask2D])
[30 40 50 60]
```

---

### 9. **Using 'np.where()' for Indexing**

`np.where()` is also useful for obtaining the indices of elements that satisfy a given condition.

```python
>>> import numpy as np
>>> arr = np.array([10, 20, 30, 40, 50])
>>> indices = np.where(arr > 25)  # Returns indices where the condition is True
>>> print(indices)
(array([2, 3, 4]),)  # Indices of 30, 40, 50
```

---

