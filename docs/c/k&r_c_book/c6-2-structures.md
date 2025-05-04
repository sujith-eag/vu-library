---
title: "K&R - Chapter 6.1 - Structures"
description: ""
summary: ""
date: 2024-12-18T12:27:38+05:30
lastmod: 2024-12-18T12:27:38+05:30
draft: false
weight: 259
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## Chapter 6 - Structures

A structure is a collection of one or more variables, possibly of different types, grouped together under a single name for convenient handling.      
Structures help to organize complicated data, allowing a group of related variables to be treated as a unit instead of separate entities.      
Employee has many attributes, a point is a pair of co ordinates etc.


### 6.1 Basics of Structures

The keyword `struct` introduces a structure declaration, which is a list of declarations enclosed in braces.        
An optional name called `structure tag` may follow the `struct` keyword. (here `point`) which can be used as shorthand.       
The variables names in it are called `members`.

Basic object is a point which has x and y co-ordinate, both integers.
```c
struct point {
	int x;
	int y;
};
```

A structure member or tag and an ordinary variable can have the same name without conflict, since they can always be distinguished by context.      
The same member name may occur in closely related objects.    

A `struct` declaration defines a type. The right brace that terminates the list of members may be followed by a list of variables, just as any basic types.

`struct { ... } x, y, z;`  is similar to `int x, y, z;`     
in a sense, it declares `x, y, z` to be variables of the named type and sets aside space for them.

A structure declaration that is not followed by a list of variables reserves no storage; it merely describes a template or shape of a structure.

`struct point pt;`     
defines a variable `pt` which is a structure of type `struct point`.

```c
struct date {
	int day;
	int month;
	int year;
	int yearday;
	char mon_name[4];
};

struct date d = { 14, 7, 1776, 186, "JUl" }; 
// initialized with list of initializers.
```
`struct date d;`  template without without list of variables.


Operator `.` connects the structure name and member name.     
A member of a structure is accessed / referred to in an expression by a construction of form,
`structure-name.member`      
`printf("%d, %d", pt.x, pt.y)`  to print co-ordinates of the point `pt`

To set `leap` from the date in `structure d`
```c
leap = d.year%4 == 0 && d.year%100 != 0 || d.year%400 == 0;
```
to check month name,
```c
if (strcmp(d.mon_name, "Aug") == 0 ) ...
```
to convert first character of month name to lower case,
```c
d.mon_name[0] = lower(d.mon_name[0]);
```



Structures can be nested (a rectangle is a pair of points that denotes diagonally opposite corners)
```c
struct rect {
	struct point pt1;
	struct point pt2;
};
```

A payroll record
```c
struct person {
	char name[NAMESIZE];
	char address[ADRSIZE];
	double salary;
	struct date birthday;
	struct date hiredate;
};
```
The person structure contains two date structures.     
`struct person emp;`  declaring `emp`;      
`emp.birthday.month` refers to month of birth.     
`.` associates from left to right.

If declared `screen` as  `struct rect screen;`, then     
`screen.pt1.x` refers to x co ordinate of `pt1` member of `screen`


### 6.2 Structures and Functions

There are number of restrictions on C structures.      
The only legal operations on a structure are taking its address with `&` and accessing its members, copying it, or assigning to it as a unit (as arguments),     
(copying structures make a shallow copy, pointers are copied but does not make copy of the data to which the pointers point to. Structures in structures are also shallow copied)

Structures may not be compared.     
A structure may be initialized by a list of constant member values;    
an automatic structure may be initialized by an assignment.     

`makepoint` will take two integers and return a `point` structure:
```c
struct point makepoint(int x, int y)
{
	struct point temp;
	
	temp.x = x;
	temp.y = y;
	return temp;
}
```
Argument name and member names are same but there is no conflict.      
`makepoint` can be used to make any structure dynamically or provide structure arguments to a function.

```c
struct rect screen;
struct point middle;
struct point makepoint(int, int);

screen.pt1 = makepoint(0,0);
screen.pt2 = makepoint(XMAX, YMAX);
middle = makepoint( (screen.pt1.x) + (screen.pt2.x)/2,
					  (screen.pt1.y) + (screen.pt2.y)/2);
```

Functions for doing arithmetic on points.
```c
struct addpoints (struct point p1, struct point p2)
{
	p1.x += p2.x;
	p1.y += p2.y;
	return p1;
}
```
Here both arguments and the return value are structures.
.
.
.

Passing structures to a function as a pointer is more efficient than to copy the whole structure.      
`struct point *pp;` says,     
`pp` is a pointer to a structure of type `strcut point`.      
If `pp` points to a `point` structure, `*pp` is the structure, and `(*pp).x`  and `(*pp).y` are the members.
```c
struct point origin, *pp;
pp = &origin;
printf("origin is (%d, %d)\n", (*pp).x, (*pp).y);
```

A shorthand to represent a pointer `p` to a structure. `p->member-of-structure`
```c
printf("origin is (%d, %d)\n", pp->x, pp->y);
```
both `. and ->` associate from left to right.

```c
struct rect r, *rp = &r;

r.pt1.x
(r.pt1).x
rp->pt1.x
(rp->pt1).x   // all four are equivalent
```


`++p->len` increments `len`, not p because it means`++(p->len)`.      
`(++p)->len` increments p before accessing `len`      
`(p++)->len` increments p afterwards.      

Similarly
`*p->str` fetches whatever `str` points to;      
`*p->str++` increments `str` after accessing whatever it points to;     
`(*p->str)++` increments whatever `str` points to;     
`*p++->str` increments `p` after accessing whatever `str` points to.     


### 6.3 Arrays of Structures

To count the occurrences of each keyword in C.     
Each keyword is a pair of word and its count:
```c
char *word;
int count;
```

A structure with an array:

```c
struct key {
	char *word;
	int count;
} keytab[NKEYS];
```
The structure declaration declares a structure of type `key`, defies an array `keytab` of structures in this type and sets aside storage for them.     
Each element of the array is a structure. also written as.
```c
struct key {
	char *word;
	int count;
};

struct key keytab[NKEYS];
```

Since `keytab` contains constant set of names, it is easier to make it an external variable and initialize it when it is defined.
```c
struct key {
	char *word;
	int count;
} keytab [] = {
	{"auto", 0},
	{"break", 0},
	...
}
```
The inner braces are not necessary when initializers are simple variables or character strings but not in pairs corresponding to the structure members.

____
The keyword counting program........
```c
#include <stdio.h>
#include <ctype.h>
#include <string.h>

#define MAXWORD 100

int getword(char *, int);
int binsearch(char *, struct key, int);

// count C keywords
main() {
	int n;
	char word[MAXWORD];
	
	while (getword(word, MAXWORD) != EOF)
		if ( isalpha(word[0]) )
			if ( (n = binsearch(word, keytab, NKEYS)) >= 0)
				keytab[n].count++;
	
	for (n = 0; n < NKEYS; n++)
		if (keytab[n].count > 0)
			printf("%4d %s\n", keytab[n].count, keytab[n].word);
	
	return 0;
}

// find words in tab[0]...tab[n-1]
int binsearch(char *word, struct key tab[], int n)
{
	int cond;
	int low, mid, high;

	low = 0;
	high = n-1;
	
	while (low <= high) {
		mid = (low+high)/2
		if ( (cond = strcomp(word, tab[mid].word)) < 0)
			high = mid -1;
		else if (cond > 0)
			low = mid +1;
		else
			return mid;
		}
	return -1;
}
```

`getword` finds a word, which is copied into the array named as its first argument.
```c
// get next word or character from input
int getword(char *word, int lim)
{
	int c, getch(void);
	void ungetch(int);
	char *w = word;
	
	while ( isspace(c = getch()) )
		;
	
	if ( c != EOF )
		*w++ = c;
	if (!isalpha(c)) {
		*w = '\0';
		return c;
	}
	for ( ; --lim > 0; w++)
		if (!isalnum(*w = getch()) ) {
			ungetch(*w);
			break;
		}
	*w = '\0';
	return word[0];
}
```
`getword` uses `getch` and `ungetch` from chapter 4.     
`isspace` to skip space and `isalpha` to identify letters, `isalnum` to identify letters and digits;
all are from `<ctype.h>`


### 6.4 Pointers to Structures

Rewriting the keyword counting program again using pointers instead of array indices.
`main` and `binsearch` need modification.
```c
#include <stdio.h>
#include <ctype.h>
#include <string.h>

#define MAXWORD 100

int getword(char *, int);
struct key *binsearch(char *, struct key, int);   // changed

// count C keywords
main() {
	char word[MAXWORD];
	struct key *p;
	
	while (getword(word, MAXWORD) != EOF)
		if ( isalpha(word[0]) )
			if ( (p = binsearch(word, keytab, NKEYS)) != NULL )
				p->count++;
	
	for (p = keytab; p < keytab + NKEYS; p++)
		if (p->count > 0)
			printf("%4d %s\n", p->count, p->word);
	return 0;
}

// find words in tab[0]...tab[n-1]
struct key *binsearch(char *word, struct key tab[], int n)
{
	int cond;
	struct key *low = &tab[0];
	struct key *high = &tab[n];
	struct key *mid;
		
	while (low < high) {
		mid = low + (high-low) /2;
		if ( (cond = strcomp(word, mid->word)) < 0)
			high = mid;
		else if (cond > 0)
			low = mid + 1;
		else
			return mid;
		}
	return NULL;
}
```
The declaration of `binsearch` indicates that it return a pointer to `struct key` instead of an integer. this is declared both in function prototype and in `binsearch`.     
If it finds a word, it return a `pointer` to it otherwise `NULL`.     

The elements of `keytab` are now accessed by pointers. which changes `binsearch`.
`high low` are pointers.     
computation of `mid` has to change as it is illegal to to add pointers. but subtraction is legal.
`high-low` is number of elements so `mid = low + (high-low) / 2` sets `mid` to element halfway between `high and low`.

```c
// get next word or character from input
int getword(char *word, int lim)
{
	int c, getch(void);
	void ungetch(int);
	char *w = word;
	
	while ( isspace(c = getch()) )
		;
	
	if ( c != EOF )
		*w++ = c;
	if (!isalpha(c)) {
		*w = '\0';
		return c;
	}
	for ( ; --lim > 0; w++)
		if (!isalnum(*w = getch()) ) {
			ungetch(*w);
			break;
		}
	*w = '\0';
	return word[0];
}
```


### 6.5 Self-referential Structures


When wanting to handle data where the words are not known beforehand and searching through the seen words everytime in a list is not time efficient.     
Solution is to keep a set of seen words in a sorted order all the time and placing the words in proper position as they arrive. This can be done by `binary tree`.

The `binary tree` node, with four components.
```c
struct tnode {
	char *word;           // points to the text of the word
	int count;            // number of occurences
	struct tnode *left;   // points to left child
	struct tnode *right;  // points to right child
};
```
It is illegal for a structure to contain an instance of itself.     
`struct tnode *left;` declares `left` to be a pointer to a `tnode`, not `tnode` itself.

No node may contain more than two children.     
It is maintained in such a way that the left node always contains only the words which are lexicographically less than the word at that node, and right node contains the words that are greater.

```c
#include <stdio.h>
#include <ctype.h>
#include <string.h>

#define MAXWORD 100
struct tnode *addtree(struct tnode *, char *);
void treeprint(struct tnode *);
int getword(char *, int);

// word frewuency count
main()
{
	struct tnode *root;
	char word[MAXWORD];
	
	root = NULL;
	while (getword(word, MAXWORD) != EOF)
		if (isalpha(word[0]))
			root = address(root, word);
	treeprint(root);
	return 0;
}
```
The function `addtree` is recursive.     
A word is presented by `main` to top level of the tree. At each stage the word is comapred to word in the node; and percolated down by recursive call to `addtree`.     
Eventually, the word either match something or null pointer is encountered, indicating that a node must be created and added to the tree.     
`addtree` returns a pointer to new node.

.
.
.
.

If tree becomes unbalanced because the words do not come in random order(words are already in order) then the running time of the program can grow too much.


### 6.6 Table Lookup



### 6.7 Typedef



### 6.8 Unions



### 6.9 Bit-fields
