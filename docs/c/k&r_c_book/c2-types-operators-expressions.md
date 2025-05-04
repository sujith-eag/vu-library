---
title: "K&R - Chapter 2 - Types, Operators, Expressions"
description: ""
summary: ""
date: 2024-12-18T12:16:56+05:30
lastmod: 2024-12-18T12:16:56+05:30
draft: false
weight: 254
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Section 2.2 - Data types and storage allocation - Character, integer, short, long. 
Section 2.7 - Type conversion
Section 2.9 - Bit-wise Logical operations

-----
## Chapter 2 - Types, Operators and Expressions

Declaration lists the variables being used, along with their type and perhaps their initial value.      
Operators specify what is to be done to them.      
Expressions combine Variables and constants to produce new values.

There are _signed_ and _unsigned_ forms of all integer types.


### 2.1 Variable names

Naming conventions...    
lower case for variable names and all upper case for symbolic constants.     
Significant characters of a name (31), Uniqueness for     


### 2.2 Data types and sizes

`char, int, float, double`

Qualifiers that can be applied to these basic types are,    
`short, long` here `int` can be omitted also.
```c
short int sh;
long int sh;
```

Qualifiers `signed, unsigned` can be used for `char` or any integer.

`unsigned char` numbers are positive or zero, between 0 and 255,     
`signed char` has values b/w `-128 127`.      
`long double` specifies extended-precision floating point.


### 2.3 Constants

***Integer constant***      
**long constants** with terminal `l`      
**unsigned constants** with terminal `u`     

suffixes, `ul - unsigned double`, `f - float`, `l - long double`

Leading `0` in an integer constant meas octal, decimal `31` can be written as  `037`
leading `0x` means hexadecimal `31` becomes `0x1f`

A ***Character constant*** is an integer, `0 is 48 in ASCII`     
these participate in numeric operations just as any other integers, although they are mostly used in comparison with other characters.

***Escape sequences*** which looks like 2 character but is only one. `\n  \v  \0`

A ***constant expression*** involves only constants and are evaluated during _compilation time_ rather than runtime.
```c
#define MAXLINE 1000
char line[MAXLINE+1];

#define LEAP 1
int days[31+28+LEAP+31];
```


***string constant/literal*** is sequence of zero or more characters surrounded by double quotes `""`.       
Technically it is an ***array of characters***.      
The strings internal representation has a _null character_ `\0` at the end. So the physical storage is one one more than number of characters.

`strlen` and other string functions are declared in the standard header `<string.h>`.
It returns length of character string excluding `\0` 
```c
int strlen(char s[])
{
	int i;
	while (s[i] != '\0')
		++i;
	return i;
}
```

`'x' "x"` are not the same.     
One is a an integer representing x, and other is array of characters containing x and `\0`


***enumeration constant*** is a list of constant integer values.      
The first name in `enum` has value 0, next 1 so on. Unless explicit values are specified.     
If not all values are specified, unspecified values continue the progression from the last specified.
```c
enum boolean (NO, YES);

enum escapes (BELL = '\a', BACKSPACE = '\b', TAB = '\t');

enum months ( JAN = 1, FEB, MAR, APR, MAY);
/* FEB = 2, MAR = 3 etc*/
```
Names of `enum` have to be distinct but values need not be.      
This can be an alternative to `#define`


### 2.4 Declarations

All variables must be declared before use,      
certain declarations can be made implicitly by content.
```c
int lower, upper, step;
char c, line[1000];
```
Can be done individually which allows for adding comments.

A variable can also be initialized during its declaration.
```c
char esc = '\\';
int i = 0;
int limit = MAXLINE+1;
float eps = 1.0e-5;
```
The initializer must be a constant expression as initialization is done only once before the program execution.      
An explicitly initialized automatic variable is initialized each time the function or block it is in is entered; the initializer may be an expression.     

The qualifier `const` can be applied to the declaration of any variable to specify the value will not change. It can be used with any arguments.     
`const double e = 2.7182818;`      
`const char msg[] = "warning: ";`     
`int strlen (const char[]);`     

The result is implementation defined if an attempt is made to change a `const`


### 2.5 Arithmetic Operators

`+ - * / %`

```c
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
	printf("%d is a leap year\n", year);
else
	printf("%d is not a leap year\n", year);
```
`%` cannot be applied to float or double.


### 2.6 Relational and Logical Operators

Relational operators `> >= < <=`       
Equality operators `==  !=`      
These have lower precedence than arithmetic operators.

`&& ||` is evaluated left to right
```c
for (i=0; i < lim-1 && ( c=getchar()) != '\n' && c != EOF;  ++i )
	s[i] = c;
```
Before reading a new character it is necessary to check that there is room to store it in the array s, so the test `i < lim-1` must be made first. If failed, must go to read another character.


### 2.7 Type Conversion

When an operator has operands of different types, they are converted to a common type according to a small number of rules.      
Converting `int` to `float` that happens automatically as there is no loss in information `f + i`.

Where information might loose info, like long to short, or float to int may draw a warning but are not illegal.

In arithmetic operator like `+ *` which take two operands, if they are of different type the lower type is promoted to higher type.

String to numeric equivalent
```c
int atoi(char s[])
{
	int i, n;
	
	n = 0;
	for (i=0; s[i] >= '0' && s[i] <= '9'; ++i)
		n = 10 * n + (s[i]-'0');
	return n;
}
```
`s[i] - '0'` gives the numeric value of the character stored in `s[i]`



### 2.8 Increment and Decrement Operators

`++` adds one, `--` subtracts one.     
Both can be used as prefix or suffix, both does the job but prefix increments before its values is used, while suffix increments after the value has been used.     
`x = n++   x = ++n`

```c
/* squeeze: delete all c from s */

void squeeze(char s[], int c)
{
	int i, j;

	for (i = j = 0; s[i] != '\0';  i++)
		if (s[i] != c)
			s[j++] = s[i];
	s[j] = '\0';
}
```
Each time a non-c occurs, it is copied into the current j position, and only then is j incremented to be ready for the next character. This is equivalent to
```c
if (s[i] != c) {
	s[j] = s[i];
	j++;
}
```

also
```c
if (c == '\n') {
	s[i] = c;
	++i;
}
```
In more compact way
```c
if ( c == '\n') {
	s[i++] = c;
}
```


To concatenate a string to end of another string.
```c
void strcat(char s[], char t[])
{
	int i, j;
	
	i = j = 0;
	while ( s[i] != '\0' )      /* find end of s */
		i++;
	
	while ( (s[i++] = t[j++] ) != '\0' )
		;
}
```
As each member is copied from t to s, the postfix ++ is applied to both to make sure they are in position for the next pass through the loop.

`s[i++] = t[j++]`  i will be in right position!!     
The check of ` != '\0'` is odd !!!


### 2.9 Bitwise Operators

```c
&  |  ^  <<  >>  ~
```


### 2.10 Assignment Operators and Expressions

`i = i + 2` is `i += 2`      
Here `+=` is the assignment operator.

Most binary operators have a corresponding assignment operator `op=` where `op` is one of `+ - * / % << >> & ^ |`     

`x *= y + 1`  is  `x = x * (y + 1)`

Assignment statement has a value and can occur in expression;      
`while ((c=getchar()) != EOF)`


### 2.11 Conditional Expressions

To get Z as max(a, b)
```c
if (a > b)
	z = a;
else
	z = b;
```
The alternate is using ternary operator `? :`
```c
z = (a > b) ? a : b;
```
If (a > b) is true, then z = a,  otherwise z = b

`expr1 ? expr2 : expr3`     
If 1 is true then 2 is evaluated, if false then 3 is evaluated.    

To print `n` elements from an array, 10 per line, with each separated by one blank line including the terminating newline.
```c
for (i = 0; i < n; i++)
	printf( "%6d%c", a[i], (i%10==9 || i==n-1) ? '\n' : ' ' );
```


### 2.12 Precedence and Order of Evaluation

Left to right and Right to left associativity.

Writing code that depends on order of evaluation is a bad programming practice as the order might change depending on the compiler and machine run on.

