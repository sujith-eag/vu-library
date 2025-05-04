---
title: "K&R - Chapter 1 - Basic Syntax"
description: ""
summary: ""
date: 2024-12-18T12:16:28+05:30
lastmod: 2024-12-18T12:16:28+05:30
draft: false
weight: 253
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


The C Programming Language by Kernighan and Ritchie

Chapter 1-4 - Mostly syntax, Arrays, Strings (Character arrays)     
Chapter 5 - Pointers and Arrays     
Chapter 6 - Structures     
Chapter 7-8 - Detailed C features    

_____

### Character Arrays

We must carefully understand the 'size' of the character array and not exceed it. In C nothing is 'auto extended'.

```python
x = ""
for i in range(1000):
	x += "*"
print (x)
```
This will not cause any problem as memory allocation is flexible.

```c
#include <stdio.h>
int main() {
	char x[10];
	int i;

	for( i=0; i<1000; i++) x[i] = '*';
	printf("%s\n", x);
}

$ a.out

Segmentation falult: 11
```
The size of the string has been exceeded.      
This is the reason why C is not used to write programs.     

"Buffer Overrun Errors"      
90% all security holes are due to C code.


### String / Character Constants

In C single quotes `''` are a character and double quotes `""` are a character array (neither are string) with a 0 character at the end of it.       
A `""` with one character in it is actually 2 bytes.

A Character is a byte - a short(8-bit) integer.

```c
#include <stdio.h>
int main() {
	char x[3] = "Hi";
	char y[3] = { 'H', 'i'};

	printf("x %s\n, x");
	printf("y %s\n, y");

	printf("%s\n", "Hi");
	printf("%c%c\n", 'H', 'i');
}
```
```
$ a.out

x Hi
y Hi
Hi
Hi
```


### Character Sets

The C char type is just a number (8-bits long) usually ASCII.      
Modern characters include multi-byte sequences using Unicode and `UTF-8`

```python
#include <stdio.h>
int main() {
	print("%c %d\n", 'A', 'A');
}
```
```
$ a.out

A 65
```
A character is more similar to an int than to a string.

#### Terminating a String

```c
#include <stdio.h>
int main() {
	char x[6];
	x[0] = 'H';
	x[1] = 'e';
	x[2] = 'l';
	x[3] = 'l';
	x[4] = 'o';
	x[5] = '\0';
	
	printf("%s\n", x);
	
	x[2] = 'L';
	printf("%s\n", x);
	
	x[3] = '\0';
	printf("%s\n", x);
}
```
```
$ a.out

Hello
HeLlo
HeL
```

There are no strings, they are "arrays of characters", there is no length.      
The size of the "string" stored in C array is not the length of the array.      
C Uses a special character `\0` that marks the string end by convention.     
So character arrays need to allocate extra byte to store the line end character.    

Terminating a string is very important to think before creating a new string and scanning through a string, if something is appended to a "character array" then the end character has to be moved.

**Manipulation**: String manipulation in C involves careful management of the null terminator, where the null terminator is moved or altered.
```c
char x[6];
x[0] = 'H'; x[1] = 'e'; x[2] = 'l'; x[3] = 'l'; x[4] = 'o'; x[5] = '\0';
printf("%s\n", x);  // prints "Hello"
```


#### String length

In C string "length" must be computed in a loop that scans for a zero character.     
There the `strlen()` function in `string.h` computes string length.

```python
x = 'Hello'
print(x, len(x))   
# Hello 5 
```
in python x is an object and `len` is an attribute of that object.

```c
#include <stdio.h>
int main() {
	char x[] = "Hello";
	int py_len();
	
	printf("%s %d\n", x, py_len(x));
}

int py_len(self)
	char self();
{
	int i;
	for(i=0; self[i]; i++);    
	/* when string gets over it turns false */
	return i;
}
// a.out
// Hello 5
```

```c
int py_len(char self[]) {
    int i;
    for (i = 0; self[i]; i++);
    return i;
}
```


#### Reverse a String in place in C

Exercise 1-19 in K&R     
Reversing a string in place involves swapping characters from the start and end of the string until the middle is reached.
```c
#include <stdio.h>
int main() {
	char x[]= "Hello";
	char reverse();
	printf("%s "  )
}
```

________


## Chapter 1

### 1.1 Getting started
`int main() {}`     
`printf()`      
`\n` is the only way of adding a new line.      
`\t` for tab, `\b` for backspace, `\"` for double quotes, `\\` for back slash itself.

### 1.2 Variables and Arithmetic

Comments     
Declaring variables     
(when there is an error a Diagnostic message containing type and list of variables will be shown.)     
Int and float have size difference. 16bit signed number, 32 bit quantity with 7 significant bits.     

Other basic data types,
```
int
float 
char - character, a single byte, 
short - short integer, 
long - long integer,
double - double-precision floating point
```
assignment operator to assign values `=`     
terminating statements using `;`
```c
#include <stdio.h>
/* Print Farenheit-Celsius table for 
f =0, 20, ..., 300 */

int main() {
	int lower, upper, step;
	float fahr, celsius;

	lower = 0;    // lower limit of the temperature
	upper = 300;  // uppr limit
	step = 20;    // step size
	
	fahr = lower;
	
	while (fahr <= upper) {
		celsius = (5.0/9.0) * (fahr-32.0);
		printf("%4.0f %6.1f\n", fahr, celsius);
		fahr = fahr + step;
	}
}
```

while loop `while (fahr<= upper) {...}`     
Indentation and white space is for readability, any position is permissible.

Using `(5.0/9.0)` instead of `5/9` to prevent truncating of numbers and additional numbers are discarded. i.e `5/9 will be 0` which means everything will be zero.

`printf()` is a general purpose format conversion function. It is not part of C, but the standard library.      
`printf("%4.0f %6.1f\n", fahr, celsius);`     
`%4.0f` states that a floating point number is to be printed in a space at least four character wide, with no digits after the decimal point.     
`%6.1f` describes a floating point number in 6 character space, with one digit after the decimal.

Parts of a specification may be omitted, `%6f` at least six characters wide.     
`%.2f` requests two place after the decimal place, but width is not constrained.     
`%f` says print the number as a floating point number.     

`printf` also recognizes `%d` for decimal integer, `%o` for octal, `%x` for hexadecimal, `%c` for character, `%s` for character string and `%%` for `%` itself. 

Each `%` constraint in first argument should pair with its corresponding second, third arguments, they must line up properly by number and type.      

If you have to input numbers, then consider function `scanf` which reads input instead of writing output like `printf`

### 1.3 The For Statement


```c
for (initialization; condition; increment) {
    // loop body
}
```

```c
#include <stdio.h>

main() {
	int fahr;

	for (fahr = 0; fahr <=300; fahr = fahr + 20)
		printf("%4d %6.1f\n", fahr, (5.0/9.0)*(fahr-32));
}
```

First part is done once, second part is the condition that is checked each iteration, and last is re-initialization step.

While and for loops are in-determinant loops structure because they must be read closely to make sure they are properly constructed and not unintentionally a "infinite loop".

`for` loop in python and `foreach` in PHP are determinant loops. They iterate over all of the elements in a collection which is not finite.

### 1.4 Symbolic Constants

To avoid magic numbers like 300, 20 which are buried inside the code which might not convey any information while reading as to what they are.      
With `#define` construction, at the beginning of the program a _symbolic name_ or _symbolic constant_ to be a particular string of characters.      
The compiler will replace the unquoted occurrences of the name by corresponding string.

```c
#include <stdio.h>

#define LOWER 0
#define UPPER 300
#define STEP 20

main()
{
	int fahr;
	
	for (fahr = LOWER; fahr <= UPPER; fahr = fahr+STEP)
		printf("%4d %6.1f\n", fahr, (5.0/9.0)*(fahr-32));
}
```
The LOWER, UPPER, STEP are constants so they do not appear in declarations.     
To separate them from lower case variable names they are made Fully upper.     
There are no `;` after the definition because the whole line after the define will be copied, so to avoid too many semicolons in the `for`.


### 1.5 Collection of Useful Programs

Family of related programs for doing simple operations in character data.

`getchar()` and `putchar()` which are provided by the library.


***File Copying***
```c
#include <stdio.h>

main()    /* copy input to output*/
{
	int c;
	c = getchar();
	while (c != EOF) {
		putchar(c);
		c = getchar();
		}
}
```
For the end of file is, the common convention is -1 when the program has run out of input.
The symbolic name EOF is a symbolic name. (The EOF is defined in `stdio.h` so should never be defined in code.)

```c
#include <stdio.h>
main() {
	int c;
	while ( (c=getchar())  !=EOF )
		putchar(c);
}
```
The program gets a character, assigns it to c and tests whether the character was the end of file signal. If it was not, the body of the while is executed, printing the character.      
When end input is reached, while terminates.

***Character Counting***
```c
#include <stdio.h>

main()
{
	long nc;
	
	nc = 0;
	while (getchar() != EOF)
		++nc;
	printf("%ld\n", nc);
}
```
`++nc` means increment by one. also `--nc`     
similar to `nc = nc + 1`     
Prefix operators `++nc` and `postfix` operators `nc++` both increment but have different values in expressions.     
`%ld` signals that corresponding argument is a long integer.     

To cope with even bigger numbers `double`(double length float) can be used.
```c
#include <stdio.h>
main()
{
	double nc;
	
	for (nc = 0; getchar() != EOF; ++nc)
		;
	printf("%.0f\n, nc");
}
```
`;` in the middle is an empty statement to show there is nothing in the body of for loop. but grammatically it should have a body. 

`%.0f` suppresses printing of the non-existent fraction part.


***Line Counting***
Input lines are assumed to be terminated by the newline character `\n`

```c
#include <stdio.h>

main() {
	int c, nl;
	
	nl = 0;
	while ( (c = getchar()) != EOF)
		if (c == '\n')
			++nl;
	printf("%d\n", nl);
}
```
If statement inside the while controls the increment if line is found.      
Any character written between a `''` to produce a value equal to numerical value of the character.     
`'A' is 65` 

`'\n'` is a single character and is equivalent to a single integer,      
on the other hand `"\n"` is a character string which happens only one character.


***Word Counting***
A loose definition of word that does not contain blank, tab or newline.
```c
#include <stdio.h>

#define YES 1
#define NO 0

main() {  /* count lines, words, characters in input*/
	int c, nl, nw, nc, inword;

	inword = NO;
	nl = nw = nc = 0;
	while ( (c=getchar()) != EOF ) {
		++nc;
		if (c == '\n')
			++nl;
		if (c == ' ' || c == '\n' || c == '\t')
			inword = NO;
		else if ( inword == NO ) {
			inword = YES;
			++nw;
		}
	}
	printf("%d %d %d\n", nl, nw, nc);
}
```
The variable `inword` records if the program is in a word or not, initially 'not in a word' .

The `else` is an alternative action to be done if the condition part of `if` is false.
```
if (epression)
	statement-1
else
	statement-2
```

One and only one of the two statements associated with `if-else` is done, not both.


### 1.6 Arrays

The number of elements in an array declaration must be constant at compile time, and the size of the array cannot be adjusted using an array declaration while program is running.

This leads to security flaws referred to as "buffer overflow" where a program reads mode data than it can fit into an array where it may overwrite the data or compromise the application.

```c
#include <stdio.h>

main()   /*count digits, white space and other*/
{
	int c, i, nwhite, nother;
	int ndigit[10];
	
	nwhite = nother = 0;
	for (i=0; i<10; ++i)
		ndigit[i] = 0;
	
	while ( (c = getchar()) != EOF )
		if (c >= '0' && c<= '9')
			++ndigit[c-'0'];
		else if ( c == '' || c == '\n' || c == '\t')
			++nwhite;
		else
			++nother;
	printf("digits =");
	
	for (i=0; i<10; ++i)
		printf(" %d", ndigit[i]);
	
	printf("\nwhite space = %d, other = %d\n", nwhite, nother);
}
```

`int ndigit[10];` is an array of 10 integers.     
`if (c >= '0' && c<= '9')` checks if the character in c is a digit.     
If it is, then `c-'0'` is the digit.     

By definition, arithmetic involving char and int converts everything to int before proceeding.
so `c-'0'` is an integer expression.


### 1.7 Functions

In C, a function is equivalent to a subroutine or function, Encapsulate in a back box.
```c
#include <stdio.h>

main() 
{
	int i;
	
	for (i = 0; i<10; ++i)
		printf("%d %d %d\n", i, power(2,i), power(-3,i));
}

power(x, n)  /* raise x to nth power;  n>0 */
int x, n;
{
	int i, p;

	p = 1;
	for (i = 1; i<=n; ++i)
		p = p * x;
	return (p);
}
```

 Each function has the same form:
 ```c
 name (argument list, if any)
 argument declarations, if any
	 declarations
	 statements
```


### 1.8 Arguments - Call by Value

In C, function arguments are passed by value. This means the function is given the value of it's arguments in temporary variables (on a stack) rather than on their address.      
Passing 'by value' has become the norm after C as it doesn't allow the called code to mess with the arguments and create side effects.      

The call stack that made it possible to pass by value also made it possible for the function to call itself recursively.

In python, simple variables like integers and strings are passed by value while Structured data like Dict and list are passed by reference.

```c
power(x, n) 
int x, n;
{
	int i, p;
	
	for (p = 1; n>0; --n)
		p = p*x;
	return (p);
}
```
The argument n is used as a temporary variable which counts down till it becomes 0. So no need of i.


### 1.9 Character Arrays

```c
#include <stdio.h>

#define MAXLINE 1000   /* max input line size*/

main()   /* find longest line */
{
	int len;                /* current line length */
	int max;                /* Max length seen so far */
	char line[MAXLINE];     /* current input line */
	char save[MAXLINE];     /* longest line, saved */
	
	max = 0;
	while ((len = get_line(line, MAXLINE)) > 0 )
		if (len > max) {
			max = len;
			copy(line, save);
		}
	if (max > 0)    /* there was a line */
		printf("%s", save);
}

get_line(s, lim)    /* get line into s, return length */
char s[];
int lim;
{
	int c, i;
	
	for (i=0; i<lim-1 && (c=getchar()) != EOF && c!='\n'; ++i )
		s[i] = c;
	if (c == '\n') {
		s[i] = c;
		++i;
	}
	s[i] = '/0';
	return(i);
}

copy(s1, s2)    /* copy s1 to s2; assume s2 big enough */
char s1[], s2[];
{
	int i;
	i = 0;
	while ((s2[i] = s1[i]) != '\0' )
		++i;
}
```


### 1.10 Scope; External Variable

The variables in main(line, save) are private or local to main as they are declared within main. No other functions have direct access to them.      
The variable in a routine comes to life only if the function is called and disappears when the function exists.      

Global variables which are declared outside can be accessed by any function. They retain their value as they do not disappear.     

The variable must also be declared in each function that wants to access it. this maybe done wither by explicit `extern` declaration or implicitly by context. 

```c
#include <stdio.h>

#define MAXLINE 1000   /* max input line size*/

char line[MAXLINE];     /* current input line */
char save[MAXLINE];     /* longest line, saved */
int max;                /* Max length seen so far */


main()   /* find longest line */
{
	int len;                /* current line length */
	extern int max;
	extern char save[];		
	max = 0;
	
	while ((len = get_line()) > 0 )
		if (len > max) {
			max = len;
			copy();
		}
	if (max > 0)    /* there was a line */
		printf("%s", save);
}

get_line()    /* get line into s, return length */
{
	int c, i;
	extern char line[];
	
	for (i=0; i<MAXLINE-1 && (c=getchar()) != EOF && c!='\n'; ++i )
		line[i] = c;
	if (c == '\n') {
		line[i] = c;
		++i;
	}
	line[i] = '\0';
	return(i);
}

copy()    /* copy s1 to s2; assume s2 big enough */
{
	int i;
	extern char line[], save[];
	
	i = 0;
	while ((save[i] = line[i]) != '\0' )
		++i;
}
```

The external variables are there even when you don't want them.
