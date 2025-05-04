---
title: "K&R - Chapter 0 - Introduction to C language"
description: ""
summary: ""
date: 2024-12-18T12:15:49+05:30
lastmod: 2024-12-18T12:15:49+05:30
draft: false
weight: 250
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

### **Introduction to C Language**

C is a powerful, procedural programming language that provides a straightforward and efficient way to write system-level software.     
It is a lower-level language than modern high-level languages, allowing direct access to memory and hardware, and is known for its efficiency and flexibility.

- **Procedural Language**: C is procedural, meaning that the program is typically divided into functions that can be called in sequence. The language does not emphasize objects or data structures like object-oriented programming languages (e.g., C++ or Java).

- **Low-Level Access**: C allows direct manipulation of memory and hardware, making it ideal for system-level programming but requiring careful management to avoid issues like buffer overflows and pointer errors.


#### **Basic Characteristics of C**

- **No built-in I/O statements**: C does not have built-in input/output functions like high-level languages. All input and output operations need to be explicitly handled by the functions provided by libraries (such as `printf()`, `scanf()`).

- **No file access methods**: File manipulation must be done manually using file handling functions like `fopen()`, `fclose()`, `fread()`, and `fwrite()`.

- **Control Flow Constructs**: C provides simple, single-threaded control flow mechanisms such as:      
    **Tests**: Conditional statements (`if`, `else`, `switch`)     
    **Loops**: Iteration structures (`for`, `while`, `do-while`)     
    **Grouping/Sub-grouping**: Blocks of code enclosed in `{}` to group statements

C does **not** have built-in support for:     
    Multi-programming (running multiple programs simultaneously)    
    Parallel operations    
    Synchronization    
    Co-routines (functions that can be paused and resumed)    


#### **Memory Management in C**

**Dynamic Memory Allocation**:     
C provides the functions `malloc()` and `free()` to manually allocate and deallocate memory on the **heap** during runtime.
- `malloc(size_t size)`: Allocates a block of memory of the specified size and returns a pointer to the first byte of this memory block.
- `free(void *ptr)`: Frees previously allocated memory, making it available for reuse.

The **heap** refers to the region of memory managed dynamically during the execution of a program. It is separate from the **stack** (used for function call management) and **static memory**.

**Memory Leaks**:       
If memory allocated via `malloc()` is not freed with `free()`, it leads to **memory leaks**. Over time, if this happens repeatedly, the program may run out of available memory, causing crashes or slowdowns.

**Memory Fragmentation**:     
Continuous allocation and deallocation of memory blocks can cause the heap to become fragmented, making it harder to find contiguous blocks of memory. This requires **garbage collection** or memory management techniques to clean up fragmented areas.


#### **Garbage Collection in C**
C does not have automatic garbage collection like higher-level languages (e.g., Java or Python). The programmer is responsible for managing memory allocation and deallocation. Poor memory management leads to **memory leaks** or fragmented memory.

While C does not provide automatic garbage collection, developers can use tools or libraries to check for memory leaks or to help with memory management.


#### **Lint Checking**

**Lint**: A static code analysis tool that examines C source code to identify potential errors or areas of concern without executing the program.      
It can catch a variety of issues, such as:
- Possible typos or misuses of variables
- Unused variables or functions
- Suspicious expressions
- Possible memory allocation failures

 **Lint vs Compiler**: Linting is separate from the compiler. While the compiler checks for syntax and types, **linting** looks for logical or potential runtime problems in code. 
 Using both linting tools and a compiler helps ensure more robust and error-free code.
