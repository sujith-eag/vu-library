---
title: "K&R - Chapter 4 - Function, Program Structure"
description: ""
summary: ""
date: 2024-12-18T12:17:34+05:30
lastmod: 2024-12-18T12:17:34+05:30
draft: false
weight: 256
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


__Section 4.1 - Automatic variables, parameters and stack__     
Stack - last in first out implementation     
Call by value says within a function, parameter can be changed but doesn't affect the variable in main. Parameters are "isolated" within the function. This is accomplished using stack.      
stack frames were used to the variables of function and removed when it is exited.

__Section 4.3 - Why arrays pass by reference__      
A string in python passed as argument to function acts like a cal by value, not changing things outside of function.
```python
def zap(y):
	print ('Y start zap:', y)
	y = 'CHANGED'
	print ( 'Y end  zap:', y)

x = 'ORIGINAL'
print('X before zap:', x)
zap(x)
print('X after  zap:', x)

# X before zap: ORIGINAL
# Y start  zap: ORIGINAL
# Y end    zap: CHANGED
# X after  zap: ORIGINAL
```
This happens as value `Y` was a pointer to it, when it changed in `zap` it did not affect the pointer of `X` in main.     

In C, string is a character array, where array passes by reference.      
Similar code as above will result in
```c
// X before zap: ORIGINAL
// Y start  zap: ORIGINAL
// Y end    zap: CHANGED
// X after  zap: CHANGED
```
The array 'location' is passed by 'value' ( a copy made into the stack frame of location) but no copy is made of the data in the array.  (so it is pass by location)      
Since function knows where the data is, it can change the data.

__Section 4.7 - Register variables__     
Register variables are from assembly language which was necessary for performance.    
There is no way to get the "memory address" of a variable declared as register.    
Likely completely ignored in modern compilers.    
`register int x;`     
`register char c;`     

__Section 4.10 - Recursion__     
When a function calls itself it is called "recursion"     
Used for writing good code in special situations like parsing expressions like      
`(5 * 2) + ( (6 + 5) * 9)` or traversing tree like structures. Uses call stack which can be inefficient as new stack frames get added to the stack with variables and automatic variables.

__Section 4.11 - Pre-processor - Compiler architecture__     
There has been many evolution in language, library, hardware and operating system.
C always operates in an environment, even though the language has changed

The Pre-processor allowed for adjusting to these changes without breaking backwards compatibility.     
It is not a compiler, it is a C source code to C source code translator. It expands the include files, also many `#` sign.
```c
#include <stdio.h>

#ifdef USE_LONG
#define INT_32 long
#else
#define INT_32 int
#endif
```


_____

## Chapter 4 - Function and Program Structure

Functions break large computing tasks into smaller ones and enables others to build upon what others have done instead of starting over from scratch.

### 4.1 Basics of Functions

Each function definition has the form 
```c
return-type function-name (argument-declarations)
{
	declarations and statements
}
```
If the return type is omitted, `int` is assumed.

Communication between the function is through arguments and and values returned by the functions, and through external variables.      
Function can be in any order and in multiple files.

`return expression`, the expression will be converted to the return-type if necessary.      
Control returns to the caller even when there is no expression.

***Compiling and Running***     
`cc` command compiles the mentioned file or files.     
`cc main.c getline.c strindex.c` , this compiles the source files into object files      
`main.o getline.o strindex.o` and loads them all into an executable file called `a.out`


### 4.2 Functions Returning Non-integers

If a name which has not been previously declared occurs in an expression and followed by a left parenthesis, it is declared by context to be a function name.     
`while (get_line(line, MAXLINE) > 0)`

A type has to be declared to a function as to what it returns,      
`void` type was invented to show a function which returns nothing.    

To convert a string to a double precision floating point number using `atof`, it should be preceded by the type of it.     
`double atof (char s[]) {}`     
`double sum, atof (char s[])`  multiple declarations.     
Second, the calling routine must know that `atof` returns a non-int value by declaring `atof` explicitly. 

If the function takes arguments, declare them; If it takes no arguments, use `void`
```c
int atoi (char s[])
{
	double atof(char s[]);
	return (int) atof(s);
}
```
Here the the return of `atof` which is a double is converted to `int` and returned from `atoi`


### 4.3 External Variables

Internal which describes the arguments and automatic variables defined inside functions.
External variables are globally accessible, they provide an alternative to function arguments and returned values for communicating data between functions. Any function can access this by referring to its name.

C does not allow functions to be defined inside other functions, so functions are always external.      
Any function may access an eternal variable by referring to it by name.

If a large number of variables have to be shared between functions, then external variables are more convenient than a long argument lists.

External variables are also more useful because of their greater scope and lifetime.     
Automatic variables are internal to a function which come into existence when the function is entered and disappears when it is left.


### 4.4 Scope Rules

The scope of a name is the part of the program over which the name is defined.      
For an automatic variable declared at the beginning of a function, the scope is the function in which the name is declared.     
Variables of the same name in different functions are unrelated. Same is true for the arguments of a function.     

If an external variable is to be referred before it is defined, or if it is defined in a different source file from the one where it is being used, then an `extern` declaration is mandatory.

A declaration announces the property of a variable (primarily its type, size);     
A definition also cases storage to be set aside.    

```c
int sp;
double val[MAXVAL];
```
appear outside any function, they define the external variables `int and val`, causes storage to be set aside, and also serve as the declarations for the rest of the source file.

```c
extern int sp;
extern double val[];
```
declare for the rest of the source file that `sp` is an `int` and `val` is a `double` array (size to be determined and allocated elsewhere) but they do not create the variables or reserve storage for them.

There must be only one `definition` of an external variable among all files that make up the source program;     
other files must contain `extern` declaration to access it.     
There maybe a `extern` declaration within the file having the definition.      
Any initialization of an external variable goes only with the definition. Array size must be specified with the definition, but are optional with `extern` declaration.

```c
// in file 1:
extern int sp;
extern double val[];

void push (double f) { ... }

double pop(void) { ... }


// in file 2:
int sp = 0;
double val[MAXVAL];
```
Since `extern` declaration lies outside the function in file one, they apply to all functions; one set of declarations suffice for all file one.


### 4.5 Header Files

It is probably best to have one header file that contains everything that is to be shared between any two parts of the program like definitions and declarations; So that there will be only one copy to get and keep right as the program evolves.

These common material are placed in a `header` file `calc.h` which will be included as necessary in other files.

```c
// calc.h
#define NUMBER '0'
void push(double);
double pop(void);
int getop(char[]);
int getch(void);
void ungetch(int);
```
```c
// main.c

#include <stdio.h>
#include <stdlib.h?
#include "calc.h"

#define MAXOP 100
main() {
	...
}
```



### 4.6 Static Variables

The `static` declaration, applied to an external variable or function, limits the scope of that object to the rest of the source file being compiled only.     
So it provides a way to hide names which must be external but yet should not be visible to users of other files.

```c
static char buf[BUFSIZE];
static int bufp = 0;

int getch(void) { ... }

void ungetch(int c) { ... }
```
No other routines will be able to access `buf  bufp` and those names will not conflict with the same names in other files of the same program.

Functions are global, visible to any part of the entire program. If a function is declared `static`, its name is invisible outside the file in which is declared.

Internal `static` variables are local to a particular function just as automatic variables, but they remain in existence rather than coming and going each time the function is activated.
This means that the internal `static` variables provide private, permanent storage within a single function.


### 4.7 Register Variables

`register` variables are to be placed in the machine registers which may result in faster programs. Which means `register` declaration advises the compiler that the variable will be heavily used.     
But compilers are free to ignore the advice.

```c
register int x;
register char c;
```

`register` variables can only be applied to automatic variables and parameters of a function.
```c
f(register unsigned m, register long n)
{
	register int i;
	...
}
```

Due to hardware imitation, only few variables in each function may be kept in registers and only certain types are allowed.      
It is not possible to take address of a register variable, regardless of it is placed in a register or not.


### 4.8 Block Structure

Function cannot be defined within a function but a variable can be defined in a block-structured fashion within a function.      
variables declared in this way hide any identically named variable in outer block, and remain in existence until the matching right brace.

```c
if (n>0) {
	int i;    /* declaring a new i */

	for ( i = 0; i<n; i++)
		...
}
```

Automatic variables and formal parameters also hide eternal variables and functions of the same name. Better to avoid using same names which conceal names in outer scope to avoid confusion.


### 4.9 Initialization

In the absence of explicit initialization, external and static variables are guaranteed to be initialized to zero;      
automatic and register variables have undefined (garbage) initial values.

***Scalar variables***, may be initialized when they are defined, by following the name with an equal sign and an expression.
```c
int x = 1;
char squota = '\'';
long day = 100L * 60L * 60L * 24L  // milliseconds in a day
```

***external and static variables***, the initializer must be a constant expression; the initialization is done once, conceptually before the program begins execution.

***automatic and register variables***, the initializer is not restricted to being a constant; it can even be a previously defined value, even function calls.

Initializing a array of int, supplying initializer less than specified length adds zero, supplying more causes errors.     
There is no way to initialize an element in the middle of an array without supplying all preceding values.     
`int days[] = {31, 28, 31, ...}`

Character arrays are a special case of initialization; a string may be used instead of the braces and commas notation.     
`char pattern = "ould";`     
`char patter[] = { 'o', 'u', 'l', 'd', '\0' };`


### 4.10 Recursion

A function may call itself directly or indirectly.     
When a function calls itself recursively, each invocation gets a fresh set of all the sutomatic variables independent of the previous set.

Quick sort using the middle of array for partitioning.
```c
void qsort(int v[], int left, int right)
{
	int i, last;
	void swap(int v[], int i, int j);
	
	if (left >= right)
		return;  /* Less than 2 elements, do nothing */
		
	swap(v, left, (left + right)/2 );
	last = left;
	
	for ( i = left + 1; i <= right; i++)
		if (v[i] < v[left])
			swap(v, ++last, i);
			
	swap(v, left, last);
	qsort(v, left, last-1);
	qsort(v, last+1, right);
}

void swap (int v[], int i, int j)
{
	int temp;
	
	temp = v[i];
	v[i] = v[j];
	v[j] = temp;
}
```

The standard library includes a version of `qsort` that can sort objects of any type.


### 4.11 The C Preprocessor

Preprocessor is a separate first step in compilation.     
examples, `#include` to include the contents of a file during compilation,      
`#define` to replace a token by an arbitrary sequence of characters.

#### 4.11.1 File Inclusion

`#include "filename"` or `#include <filename>` is replaced by the contents of the file name.

If the file name is quoted, searching for the file typically begins where the source program was found; if it is not there, or file name has `<>`, searching follows an implementation defined rule to find the file.     
An included file may itself contain `#include` lines.

#### 4.11.2 Macro Substitution

`#define name replacement text`      
subsequent occurrences of the token `name` will be replaced by the `replacement text`.

#### 4.11.3 Conditional Inclusion

Controlling pre-processing itself with conditional statements that are evaluated during pre-processing. 
```c
#if !defined(HDR)
#define HDR

#endif
```

```c
#if SYSTEM == SYSV
	#define HDR "sysv.h"
#elif SYSTEM == BSD
	#define HDR "basd.h"
#elif SYSTEM == MSDOS
	#define HDR "msdos.h"
#else
	#define HDR "default.h"
#endif
#include HDR
```

`#ifdef  #ifndef`
