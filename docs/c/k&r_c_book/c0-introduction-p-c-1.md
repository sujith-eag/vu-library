---
title: "K&R - Chapter 0 - Introduction using Python (Part 1)"
description: ""
summary: ""
date: 2024-12-18T12:15:49+05:30
lastmod: 2024-12-18T12:15:49+05:30
draft: false
weight: 251
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


## **Python and C Comparison**

| **Python**                          | **C**                      |
| ----------------------------------- | -------------------------- |
| Whitespace is essential             | Whitespace is ignored      |
| Very object-oriented                | Not object-oriented at all |
| Data structures like `list`, `dict` | `struct`, pointers         |
| Auto memory management              | Manual memory management   |
| High-level language                 | Low-level language         |

---

### **Similarities Between Python and C**

**Arithmetic Operators**:   `+`, `-`, `*`, `/`, `%`

**Comparison Operators**:  `<`, `>`, `<=`, `>=`, `!=`

**Variable Naming Rules**:    
* Case matters (e.g., `myVar` is different from `myvar`).
* Can use letters, numbers, and underscores in variable names, but they cannot start with a number.

**Control Flow**:      
**While Loops**: Both languages have `while` loops and support the `break` and `continue` statements.        
```python
i = 0
while i < 5:
    if i == 3:
        break
    print(i)
    i += 1
```

```c
int i = 0;
while (i < 5) {
    if (i == 3) {
        break;
    }
    printf("%d\n", i);
    i++;
}
```


**Constants**:         
Both Python and C allow defining constants.        
While Python has a convention for constants (uppercase variable names),      
C uses `#define` or `const` to define constants.      
```python
MAX_VALUE = 100
```

```c
#define MAX_VALUE 100
```


***Data Types***:       
**Integers and Floats**: Both languages support integer and floating-point types.      
In C, the `int` and `float` types exist, while in Python, all numbers are represented as `int` or `float` (and Python's `float` is equivalent to C's `double`).

***Characters***:     
C has `char` for single characters, while Python uses strings,    
but a single character in Python is a string of length 1.


---


### **Key Differences Between Python and C**

***Boolean Operators***:       
In Python, `and`, `not`, `or` are used for boolean operations.     
In C, `&&` (and), `!` (not), `||` (or) are used.     

```python
a = True
b = False
if a and b:
print("Both are true")
```

```c
int a = 1, b = 0;
if (a && b) {
	printf("Both are true\n");
	}
```


***For Loops***:       
Python has a `for..in` loop for iterating over elements of a list or other iterable objects.
```python
for i in range(5):
    print(i)
```

C does not have a `for..in` loop. Instead, you need to specify a loop variable, condition, and update manually:
```c
for (int i = 0; i < 5; i++) {
    printf("%d\n", i);
}
```


**Boolean Values**:      
Python has predefined constants `True` and `False` as boolean values.     
In C, there are no predefined `True` or `False` values;      
typically, `1` is used for true and `0` for false.     
```python
if True:
    print("True")
```

```c
if (1) {
    printf("True\n");
}
```


**None vs NULL**:
- **None** in Python is a special object that represents the absence of a value. It is its own type.
- **NULL** in C is a null pointer constant, typically represented as `0` or `((void*)0)`.      
	It represents a pointer that does not point to any memory address.

```python
x = None
if x is None:
	print("x is None")
```

```c
int* x = NULL;
if (x == NULL) {
    printf("x is NULL\n");
}
```


**Strings and Character Arrays**:     
- **Strings** in Python are immutable and can be treated as objects with many built-in methods.
- **C** strings are arrays of characters, terminated by a null character (`'\0'`). String manipulation in C is less intuitive and requires careful handling of memory.

```python
s = "Hello"
print(s.upper())
```

```c
char s[] = "Hello";
printf("%s\n", strupr(s));  
// Requires external string manipulation functions like `strupr()`
```


**Data Structures**:        
Python comes with built-in data structures like `list` and `dict`, which are high-level and flexible.      
In C, you must manually define data structures using `struct`, and dynamic data structures often require the use of pointers for manipulation.     

```python
my_list = [1, 2, 3]
my_dict = {"key": "value"}
```

```c
struct Point {
    int x;
    int y;
};

struct Point p = {1, 2};
```


**Memory Management**:        
Python has automatic memory management with garbage collection, meaning memory is allocated and freed automatically.     
C requires **manual memory management** using functions like `malloc()` for allocation and `free()` for deallocation.     

```python
a = [1, 2, 3]  # Memory management handled by Python
```

```c
int* arr = (int*) malloc(3 * sizeof(int));  // Manual allocation
free(arr);  // Manual deallocation
```


**No `double` in Python**:      
Python uses `float` for both single-precision and double-precision floating-point numbers, while C has both `float` (single precision) and `double` (double precision) types.
```python
a = 3.14159  # Python float (equivalent to C's double)
```

```c
double a = 3.14159;  // C double
```



___________
