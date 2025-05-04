---
title: "K&R - Chapter 5 - Pointers, Arrays"
description: ""
summary: ""
date: 2024-12-18T12:18:08+05:30
lastmod: 2024-12-18T12:18:08+05:30
draft: false
weight: 257
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



__Section 5.1 - Pointers__     
Pointers are where we move "below abstraction", where C can replace assembly language.
```c
#include <stdio.h>

int main() {
	int x, y;
	int* px;
	
	x = 42;
	px = &x;
	y = *px;
	printf( "%d %p %d\n", x, px, y);
}
//  42  0x16f5b31ec  42
```

`int*` integer of type pointer     
`&x` to get the address of x      
`*px` a look up operator or de-reference operator to get the value in location.

__Section 5.2 - Call by Reference / Call by value__     
Pointers give the ability to call by reference. 

__Section 5.4 - Pointer arithmetic__     
A pointer to a integer is different than a pointer to a character.     
The addresses are of the same size, but If one is added to character, one added.     
If one is added to an integer, it adds four. as integers take four characters.

So it is a pointer to a thing with a type that is pointed to. So type is important.
```c
#include <stdio.h>

int main() {
	char ca[10], *cp;
	int ia[10], *ip;
	
	cp = ca + 1;
	ip = ia + 1;
	
	printf( "ca %p cp %p\n", ca, cp);
	printf( "ia %p ip %p\n", ia, ip);
}
```

__Section 5.6 - Pointers are not integers__     
Treating pointers as integer almost works.      
Addresses are positive numbers that start from zero.

Void Pointer - provided a way to return a "generic" address of memory without choosing the type of the data that would be stored in the memory.     
`void * alloc()`      
`int *val = (int *) alloc(42)`

__Buffer overflow__      
The most major security threat, A string has no length, but no run time length so excess is stored it keeps on storing beyond its limit into other part of the program, overflowing.      
`Do not use gets()` for input.      

__Section 5.7, 5.10 to 5.12 skim__


____

## Chapter 5 - Pointers and Arrays

A pointer is a variable that contains the address of a variable.      
Pointers and Arrays are closely related.      

The type `void *` (pointer to void) replaces `char *` as the proper type for a generic pointer.


### 5.1 Pointers and Addresses

A pointer is a group of cells (often two or four) that can hold an address.     
In memory, any `byte` can be a `char`,      
a pair of `one-byte` cells are `short` and      
`four` adjacent bytes form a `long`.     


`$` is the Unary operator that gives the address of an object,     
so `p = &c;` assigns the address of `c` to variable `p`,     
and `p` is said to 'point to' `c`.  

The `&` operator applies only to objects in memory like variables and array elements.     
Not to expressions `(x+1)` `&3`, constants or register variables.


`*` is the `in-direction` or `de-referencing` operator; `*` treats its operand as the ultimate target, and accesses that address to fetch the contents. (When applied to a pointer, it accesses the object the pointer points to)  `y = *p`

`x and y` are integers and `ip` is a pointer to `int`.

```c
int x = 1, y = 2, z[10];

int *ip;   // pointer to int

ip = &x;   // now points to x
y = *ip;   // y is now 1, i.e y = x
*ip = 0;   // x = 0
ip = &z[0];  // ip now points to z[0] int
```

The declaration `int *ip;` is an mnemonic, meaning `*ip` is an `int`

`double *dp, atof(char *);`     
`*dp` and `atof(s)` have values of `double`, and      
the argument of of `atof` is a pointer to `char`.

Every pointer points to a specific datatype; A pointer points to a particular kind of object.
(exception, a pointer to `void` is used to hold any type of pointer but cannot be de-referenced itself)


If `ip` points to (address of) integer `x` , then `*ip` can occur in any context where `x` could.
```c
*ip = *ip + 10;  // increment x by 10

// incrementing the value by 1,  different methods
y = *ip + 1; 
*ip += 1;
++*ip;
(*ip)++
```
Since unary operators like `* ++` associate right to left, the `()` needed to increment what `ip` points to instead of `ip` itself.      
(removing the `*` would increment the position of pointer by one bit)

Since pointers are variables, they can be used without de-referencing.     
Suppose `iq` is another pointer to `int`     
`iq = ip` copies the content of `ip` to `iq`, making it point to whatever `ip` was pointing to.

(`&x` gets address of `x`,  `ip` has just address,   `*ip` gets the object from address/value)


### 5.2 Pointers and Function Arguments

Pointer arguments allow a function to access and change objects in the function that called it.

***Call by Value***
C passes arguments to functions by value, so the called function cannot alter the variable in the calling function.
```c
void swap(int x, int y)   // wrong
{
	int temp;
	temp = x;
	x = y;
	y = temp;
}
```
Function swaps the copies of `a and b`, cannot affect the arguments `a and b` in the routine that called it.

By passing Pointers to the values, it can be swapped.
```c
swap(&a, &b);

void swap(int *px, int *py)  // pointers of x and y
{
	int temp;
	temp = *px;
	*px = *py;
	*py = temp;
}
```


### 5.3 Pointers and Arrays

Any operation that can be achieved by array sub-scripting can also be done with pointers.

`int a[10];` defines array of size 10, with objects named from `a[0]...a[9]`     
`a[i]` refers to the `i th` element of the array. 

`int *pa;`      
`pa = &a[0];`     
Sets `pa` the pointer/address to element zero of a.

`x = *pa` will copy the first element of array `a[0]` into `x`.

Then `pa+1` will point to the next element. which is pointer arithmetic.     
So the corresponding between indexing and pointer arithmetic is very close.

By definition, The value of a variable or expression of type array is the address of the zero element of the array.     
`pa = &a[0];`.  pointer `pa` and array `a` has the same value. so `pa = a;` is also same.

`a[i]` is equal to `* (a+i)`       
meaning the location is gotten by taking location of `a` and adding `i` places to it.     
If `pa` is a pointer, `pa[i]` is identical to `* (pa+i)`.     
In short, array-index expression is equivalent to one written as a pointer and offset.


There is one difference,     
A pointer is a variable, so `pa = a` and `pa++` are legal.     
Array names are not a variable; so `a = pa` and `a++` are illegal. (incrementing array??)

When an array name is passed to a function, the location of the initial element is passed.
In that called function, this argument is a local variable.     
An array name parameter is a pointer (a variable containing an address)

```c
int strlen(char *s)
{
	int n;
	
	for (n = 0; *s != '\0', s++)
		n++;
	return n;
}
```
Since `s` is a pointer, incrementing is legal. `s++` has no effect on the character string but merely increments `strlen` private copy of the pointer.        


`char s[];`  and `char *s;`  are equivalent.

It is also possible to pass part of an array by passing the pointer to beginning of the subarray.      
if a is an array, `f(&a[2])`  and `f(a+2)` both pass the function `f` the address of subarray which starts at `a[2]`.     
Within `f` the parameter declaration can be,
```c
f(int arr[]) { ... }
// or
f(int *arr) { ... }
```

If elements exist, it also possible to index backwards in an array `p[-1] p[-2]` and so on which refer to the elements that precede `p[0]`


### 5.4 Address Arithmetic

If `p` is a pointer, then `p++` increments `p` to point to the next element of whatever kind of object `p` points to.     
`p+=i` increments `p` to `i` elements beyond where it currently does.     
These are the simplest pointer or address arithmetic.

Rudimentary storage allocator `alloc(n)` and `afree(p)`. The storage managed by these are a stack, last-in, first-out.     
The standard library provides `malloc` and `free` that have no such restrictions.

Pointer subtraction is also valid: if `p` and `q` point to members of the same array, `p-q` is the number of elements between `p & q`.
```c
strlen(s)
char *s;
{
	char *p = s;
	
	while(*p != '\0')
		p++;
	return(p-s);
}
```
p is initialized to s, to point to the first character.     
`p++` advances `p` to next character each time, and `p-s` gives the number of characters advanced over, that is the length of the string.      

Pointer arithmetic is consistent, if we had been dealing with `float's` which occupy more storage than `char`, and if `p` were a pointer to `float`, `p++` would advance to the next float.

All the pointer manipulations automatically take into account the size of the object pointed to, so nothing else has to be altered.     

Except adding, subtracting a pointer and integer and comparing two pointers, all other pointer arithmetic are illegal.     
Adding two pointers or multiply or divide or shift or mask or add float or double to them is not permitted.


### 5.5 Character Pointers and Functions

A string constant is an array of characters with `\0` so the programs can find the end.

As an argument to a function, like `printf("Hello\n");`       
The access to it is given by a character pointer to the beginning of the character array.

 C does not provide any operators for processing whole string of characters as a unit.
`char *pmessage` which initializes a pointer .     
`pmessge = "now is the time"`  this assigns a pointer to the character array.

`char amessage[] = "now is the time";`    this is an array.       
`char *pmessage = "now is the time";`   is a pointer.      

`amessage` is an array, just big enough to hold the sequence of characters and `\0` that initializes it.      
Individual characters within the array may be changed but `amessage` will always refer to the same storage.      
`pmessage` is a pointer, initialized to point to a string constant; the pointer may subsequently be modified to point elsewhere but the result is undefined if the string constant is modified.

To copy string t to string s.  ???
```c
void strcpy(char *s, char *t)
{
	int i;
	i = 0;
	
	while ( (s[i] = t[i])  != '\0' )
		i++;
}
```

```c
void strcpy(char *s, char *t)
{
	int i;
	i = 0;
	
	while ( (*s = *t) != '\0' ) {
		s++;
		t++;
	}
}
```

```c
void strcpy(char *s, char *t)
{
	while ( (*s++ = *t++) != '\0')
		;
}
```
this moves the increment of `s` and `t` into the part of the loop.


### 5.6 Pointer Arrays; Pointers to Pointers

Since pointers are variables themselves, they can be stored in array just as other variables.     

When sorting, two out of order lines which have to be exchanged, the pointers in the pointer array are exchanged, not the text lines themselves. which avoids complicated storage management with moving the lines themselves.



### 5.7 Multi-dimensional Arrays

### 5.8 Initialization of Pointer Arrays
Pointer Arrays; Pointers to pointers

The pointers themselves can be stored in an array.
.
.
.


### 5.9 Pointers vs Multi-dimensional Arrays

### 5.10 Command-line Arguments

### 5.11 Pointers to Functions

### 5.12 Complicated Declarations

