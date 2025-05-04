---
title: "K&R - Chapter 3 - Control Flow"
description: ""
summary: ""
date: 2024-12-18T12:17:09+05:30
lastmod: 2024-12-18T12:17:09+05:30
draft: false
weight: 255
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


__Section 3.1 - Semicolon across languages__      
C, JAVA, PHP use `;` as terminator for every statement.     
Python, JavaScript, Shell script use `;` as separator, `:` is terminator.

__Section 3.3 - else if across languages__     
In python `elif` is a real keyword, while in C, `else if` is just bad indentation.

__Section 3.4 - Never use the switch statement__     
In exceedingly a rare situation, we might use a "jump table" where a small integer was used to look up an address "Where to go next".      
This could save a few repeating "else if" evaluation when computers were slow.

__Section 3.5 - Using comma__     
In C, `,` is like light version of `;`      
We use it when we are already using a semicolon for something but need two or more statements.     
`for ( i = 0, j = strlen(s)-1; i< j; i++, j++)`

__Section 3.5 - Excessive Succinctness / brevity__
```c
while ( (c = getchar()) == ' ' || c == '\n' || c == '\t')
	;
```
Here Value is accessed, stored in a variable c, compared to see if it is `' '`,     
also compared to see if it is `\n or \t`.     
All the work has been done in the loop termination test. There is nothing to do in the body of the loop so just a `;`


____

## Chapter 3 - Control Flow

The control flow statements of a language specify the order in which computations are done.

### 3.1 Statements and Blocks

An expression followed by a semicolon `;` becomes a statement. `;` is the statement terminator.

`{}` braces are used to group declarations and statements together into a `compound statement` or `block` so they are syntactically equal to single statement.

Because of this, space and line ends do not matter to C and C-like languages. It is used just to communicate our intent to humans.


### 3.2 If-Else

```c
if (expression)
	statement1;
else
	statement2;
```
`if` tests the numeric value of the expression, its true if the value is non zero.

To avoid moving a `else` statement to the inner `if`
```c
if (n>0)
	if (a>b)
		z = a;
	else 
		z = b;
```
To avoid this, braces can be used to separate it
```c
if (n>0) {
	if (a>b)
		z = a;
	}
else
	z = b;
```
The indentation is good to see but compiler doesn't go with that so better to separate using braces.


### 3.3 Else-If

```c
if (expression)
	statement
else if (expression)
	statement
else
	statement
```

Binary search       
To find x in a sorted array v with increasing order. Returns position of number in array 
```c
int binarysearch (int x, int v[],  int n)
{
	int low, high, mid;
	
	low = 0;
	high = n-1;
	while ( low <= high) {
		mid = (low + high)/2;
		
		if (x < v[mid])
			high = mid +1;
		else if (x > v[mid])
			low = mid + 1;
		else    /* match found */
			return mid;
	}
	return -1    /* No match */
}
```


### 3.4 Switch

```c
switch (expression) {
	case const_expr: statements
	case const_expr: statements
	default: statements
}
```

The `switch` statement is a multi-way decision that tests whether an expression matches one of a number of `constatnt` integer values, and branches accordingly.

The execution starts from the case that matches. default executes if nothing matches, its optional like the else.      
`break` causes an immediate exit from the `switch`.

If there is no explicit `break`, or `return` the execution `falls through` to the next level.

`fall through` can be used by attaching multiple cases to a single action. which should be used sparingly.      
Its best defensive programming to add break to each case and include default.

 
### 3.5 Loops - While and For

```c
while (expression)
	statement
```
if expression evaluation gives non-zero value, the statement is evaluated.      
This continues till the expression evaluates to zero.

```c
for (expr1; expre2; expre3)
	statement

for (i=0; i<10; i++)
	statement
```
This is equivalent to
```c
expre1;
while (expre2) {
	statement
	expre3;
}
```

Any three part can be omitted but the semicolon must remain.     
Dropping the second one makes it forever true so break and return can be used.

It is better to use while when there is no re-initialization and increment.
```c
while ( (c = getchar()) == ' ' || c =='\n' || c == '\t' )
	;            /* Skip white space characters*/
```


for loop is preferable when there is a simple initialization and increment. It keeps the loop control visible at the top of the loop.
```c
for ( i = 0; i<n; i++)
	...
```


Shell sort
Far apart elements are compared rather than adjacent ones as in simple interchange sort.

```c
void shellsort (int v[], int n)
{
	int gap, i, j, temp;
	
	for (gap = n/2; gap > 0; gap /= 2)
		for (i = gap; i < n; i++)
			for (j = i-gap; j >= 0 && v[j] > v[j+gap];  j -= gap) {
				temp = v[j];
				v[j] = v[j+gap];
				v[j+gap] = temp;
			}
}
```

Using `,` to put multiple expressions which are evaluated left to right. The type and value of the result are the type and value of the right operand.

```c
void reverse(char s[])
{
	int c, i, j;
	
	for (i=0, j = strlen(s)-1;    i < j;    i++, j--) {
		c = s[i];
		s[i] = s[j];
		s[j] = c;
	}
}
```


### 3.6 Loops - Do-While

`do-while` tests at the bottom, after making each pass through the loop of the body; the body is always executed at least once.
```c
do 
	statement
while (expression);
```


### 3.7 Breaks and Continue

`break` gives a way to exit the loops early without the tests at the top or bottom.

removing trailing blanks, tabs, newlines
```c
int trim(char s[])
{
	int n;
	
	for ( n = strlen(s)-1;  n >= 0;  n--)
		if ( s[n] != ' ' && s[n] != '/t' && s[n] != '\n')
			break;
	s[n+1] = '\0';
	return n;
}
```
`strlen` returns the length of the string. The `for` loop starts at the end and scans backwards looking for the first character that is not a blank or tab or newline.

`continue` causes next iteration of the enclosing loop to begin.      
It doesn't apply to switch. 
```c
for (i = 0; i < n; i++)
	if (a[i] < 0)   /* skips negative values */
		continue;
	... /* do positive elements */
```


### 3.8 Goto and Labels

`goto` is used sometime to break out of multiple deeply nested loops at once.      
`break` only exists from the inner most loop. ( `goto` is never used, exceptions, throw catch is preferred )

```c
	for ( ... )
		for ( ... ) {
			...
			if (disaster)
				goto error;
		}
	...
error:
	/* clean up the mess */
```

A label has same form as a variable name and is followed by a colon.     
It can be attached to any statement in the same function as the `goto`.     
The scope of the label is the entire function.




