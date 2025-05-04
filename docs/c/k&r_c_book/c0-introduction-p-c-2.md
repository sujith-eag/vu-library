---
title: "K&R - Chapter 0 - Introduction using Python (Part 2)"
description: ""
summary: ""
date: 2024-12-18T12:15:49+05:30
lastmod: 2024-12-18T12:15:49+05:30
draft: false
weight: 252
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


## Comparing Python and C Code


### **Printing Output in Python vs. C**

```python
print('Hello world')
print('Answer', 42)
print('Name', 'Sarah')
print('x', 3.5, 'i', 10)
# A comment
```

```c
#include <stdio.h>

int main() {
    printf("Hello world\n");
    printf("Answer %d\n", 42);
    printf("Name %s\n", "Sarah");
    printf("x %.1f i %d\n", 3.5, 100);
}

/* A comment */
// Another comment
```

**Output** (for both Python and C)
```
Hello world
Answer 42
Name Sarah
x 3.5 i 100
```


**`#include <stdio.h>`**: Read as "Pound include standard I O"       
This tells the C compiler to include the standard input/output library, allowing the use of `printf()` and other I/O functions.
 
Every C program must have a `main()` function, where execution starts.       
 `int main()` specifies the return type as `int`, indicating the program’s exit status (usually `0` for success).

`printf("Hello world\n")` Prints text to the screen.      
`\n` adds a newline, moving the cursor to the next line.      
There cannot be single quotes used in a string, `''` means a single characters and `""` are character array (not a string).


In C, format codes (like `%d`, `%s`, `%f`) are used inside the string to indicate where values should be inserted.      
`%d` is used for integers, `%s` for strings, and `%.1f` for floating-point numbers with one decimal precision.      

`printf("Answer %d\n", 42);`    
The `%d` is replaced with the integer `42`.     

`printf("x %.1f i %d\n", 3.5, 100);`     
`%.1f` prints `3.5` with one decimal, and `%d` prints `100`.

`printf("Name %s\n", "Sarah");`     
`%s` finds the string (character array) which will have to have a proper terminating `\0` character at the end.


________

### **Number Input**

```python
print('Enter US Floor')
usf = int(input())
euf = usf - 1
print('EU Floor', euf)
```

```c
#include <stdio.h>
int main() {
    int usf, euf;
    printf("Enter US Floor\n");
    scanf("%d", &usf);
    euf = usf - 1;
    printf("EU Floor %d\n", euf);
}
```

**Output**
```
Enter US Floor
2
EU Floor 1
```

`int usf, euf;` declares two integer variables, `usf` and `euf`.

`scanf()` Function:       
In C, `scanf("%d", &usf)` works similarly to Python’s `input()`.     
The `%d` format specifier tells `scanf` to expect an integer.      
The `&` symbol means "pass the address of `usf`" allowing `scanf` to directly modify `usf` by storing the input value in its memory location (this is called **call by reference**).       
Without the `&`, it would be **call by value**, and `scanf` would not update the variable correctly.


***Call by reference and call by value***     
In python `int(input())` comes back as a ***function return*** so it is easy to assign it to `usf`.

In C without `&` on parameter it becomes call by value, where value of `usf` is given to `scanf`.      
`&usf` says to give the value coming from the `scanf` to the address of the `usf` variable instead of the value of `usf`, so the data can be stored.     

So `&` is the way C to call by reference for int and floats.


---

### **String Input**

```python
print('Enter name')
name = input()
print('Hello', name)
```

```c
#include <stdio.h>
int main() {
    char name[100];
    printf("Enter name\n");
    scanf("%100s", name);
    printf("Hello %s\n", name);
}
```

**Output**
```
Enter name
Sarah
Hello Sarah
```

**Declaring Character Arrays in C**:       
In C, `char name[100];` defines an array to hold up to 100 characters (no strings in C, just arrays of characters).      
This array has a fixed size and cannot dynamically grow like Python strings.      
In Python, strings are objects and have dynamic sizes.     
    
**Using `scanf` for String Input**:       
`scanf("%100s", name);` reads up to 100 characters into the `name` array.     
`%100s` format specifier limits the input to 100 characters.      

In C, arrays are passed by reference, so there’s no need for `&` with `name`. Simply passing the array variable provides the address of the first element.     

In C character array size has to be predefined, which can lead to buffer overflow issues if not managed carefully.      


---

### **Reading a Full Line of Input**

```python
print('Enter line')
line = input()
print('Line:', line)
```

```c
#include <stdio.h>
int main() {
    char line[1000];
    printf("Enter line\n");
    scanf("%[^\n]1000s", line);
    printf("Line: %s\n", line);
}
```

**Output**
```
Enter line
Hello world - have a nice day
Line: Hello world - have a nice day
```

**Reading Until Newline**:       
`char line[1000]` Pre-defining a character array with space for 1000 characters.      
`scanf("%[^\n]1000s", line);` reads all characters until a newline (`\n`) is encountered.     
The `^[\n]` format specifier is a regular expression that means "match any character except a newline."    
This allows to capture a full line of input (or up to 1000 characters).     


---


### **Using `fgets` for Reading Input**

```c
#include <stdio.h>
int main() {
    char line[1000];
    printf("Enter line\n");
    fgets(line, 1000, stdin);
    printf("Line: %s\n", line);
}
```

**`fgets()` for Safer Input**:      
`fgets(line, 1000, stdin);` reads up to 1000 characters from the standard input (`stdin`) and stores them in the `line` array.    
`fgets` can read a file, the third parameter is a file handle, (there are 3 predefined file handles like `stdin`)      

Unlike `scanf`, `fgets` does not stop at whitespace, so it can read the entire line, including spaces.      
`fgets` is generally safer than `scanf` because it limits the number of characters to avoid buffer overflows.     

C’s standard I/O library works with three standard file streams:    
1. `stdin` for input
2. `stdout` for output
3. `stderr` for error messages


_______

### **Read a File**

```python
hand = open('romeo.txt')
for line in hand:
    print(line.strip())
```

```c
#include <stdio.h>
int main() {
    char line[1000];
    FILE *hand;
    hand = fopen("romeo.txt", "r");
    while( fgets(line, 1000, hand) != NULL ) {
        printf("%s", line);
    }
}
```

**File Handling in C**:     
`FILE` is a type defined in `stdio.h`.     
- `FILE *hand;` declares a pointer to a `FILE` object, which is used to handle file operations.
- `fopen("romeo.txt", "r");` opens the file in read mode (`"r"`).
- `fgets(line, 1000, hand);` reads a line from the file into the `line` array. It reads up to 1000 characters or until it encounters a newline.
- The `while` loop continues until `fgets` returns `NULL`, which indicates the end of the file (EOF).

**Key Differences**:       
- Python’s `open()` function is simpler and automatically handles file objects, while C requires you to manage the file pointer manually.
- In C, `fgets()` is used to read lines, while Python uses a loop directly over the file object.


---

### **Counted Loop**

```python
for i in range(5):
    print(i)
```

```c
#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 5; i++) {
        printf("%d\n", i);
    }
}
```

**Output**:
```
0
1
2
3
4
```

**C For Loop**:  The syntax in C is similar to Python but requires explicit initialization, condition, and increment.
- `for (i = 0; i < 5; i++)` initializes `i` to 0, continues while `i` is less than 5, and increments `i` by 1 on each iteration.

Python uses `range(5)` to generate numbers, while C requires manual control over the loop variables.


---

### **Max / Min**

```python
maxval = None
minval = None

while True:
    line = input()
    line = line.strip()
    if line == "done":
        break
    
    ival = int(line)
    if (maxval is None or ival > maxval):
        maxval = ival
    if (minval is None or ival < minval):
        minval = ival

print('Maximum', maxval)
print('Minimum', minval)
```

**Input**:
```
5, 2, 9, done
```

**Output**:
```
Maximum 9
Minimum 2
```

```c
#include <stdio.h>
int main() {
    int first = 1;
    int val, maxval, minval;

    while(scanf("%d", &val) != EOF) {
        if (first || val > maxval) maxval = val;
        if (first || val < minval) minval = val;
        first = 0;
    }

    printf("Maximum %d\n", maxval);
    printf("Minimum %d\n", minval);
}
```

**Input**:
```
5, 2, 9 (EOF)
```

**Output**:
```
Maximum 9
Minimum 2
```


In Python, `maxval` and `minval` are initially `None`, and values are updated based on comparisons.       
In C, the `first` flag ensures that the `maxval` and `minval` are initialized on the first iteration.


`scanf("%d", &val)` is used to read integers from the user, updating the `val` variable.


---

### **Guessing Game**

```python
while True:
    try:
        line = input()
    except:  # if we get to EOF
        break

    line = line.strip()
    guess = int(line)
    if guess == 42:
        print('Nice work')
    elif guess < 42:
        print('Too low - guess again')
    else:
        print('Too high - guess again') 
```

```c
#include <stdio.h>
int main() {
    int guess;
    while(scanf("%d", &guess) != EOF) {
        if (guess == 42) {
            printf("Nice work!\n");
            break;
        } else if (guess < 42) {
            printf("Too low - guess again\n");
        } else {
            printf("Too high - guess again\n");
        }
    }
}
```


Python uses a `try-except` block to handle `EOF` or input errors, while C uses `scanf` to read input and checks for `EOF`.     

In C, the code must use curly braces `{}` for each block of statements within `if`, `else if`, and `else`.


In python, `if elif and else` is True multi-way `if`.      
`{}` is needed in C if there are more than one statement.

In C, `if  else if   else` is not a true multi-way `if`,     
it checks the `if`, when not true it will go to `else`,     
within the `else` there are two more `if else` nested inside so not part of a single block of code.

The indentation is done in a way that it looks like a multi-way if but it is not and the indentation doesn't represent the nesting.


---

### **Functions (Call by Value)**

```python
def mymult(a, b):
    c = a * b
    return c

retval = mymult(6, 7)
print('Answer:', retval)
```

```c
#include <stdio.h>
int main() {
    int mymult(int, int); // function declaration
    int retval;

    retval = mymult(6, 7);
    printf("Answer: %d\n", retval);
}

int mymult(int a, int b) {  // function definition
    int c = a * b;
    return c;
}
```

**Function Definition and Declaration in C**:     
- `int mymult(int, int);` declares the function signature, specifying it takes two `int` parameters and returns an `int`.
- The function body in C needs to explicitly declare types for the parameters, unlike Python where types are inferred.

C is statically typed, requiring explicit type declarations for variables and function parameters.
