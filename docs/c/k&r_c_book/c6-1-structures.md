---
title: "K&R - Chapter 6 - Structures"
description: ""
summary: ""
date: 2024-12-18T12:18:19+05:30
lastmod: 2024-12-18T12:18:19+05:30
draft: false
weight: 258
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Mid Chapter Surprise     
Structures 6.1 - 6.4 - New type      
Data Structures 6.5, 6.6 - Applications of structures


___6.1 Structures___      
A structure is a user defined `type` that contain one or more types that can be treated as a unit.     
The elements or variables mentioned in a structure are called `members`     
The dot operator allows us to access the members of the structure.
```c
# include <stdio.h>

int main()
{
	struct point {
		double x;
		double y;
	};
	
	struct point p1, p2;
	
	p1.x = 3.0;
	p1.y = 4.0;
	
	p2 = p1;
	printf( "%f %f\n", p2.x, p2.y);
}
// 3.000000   4.000000
```

call by value in structure
```c
#include <stdio.h>

struct point {
	double x;
	double y;
};

void func(pf)
	struct point pf;
{
	pf.x = 9.0;
	pf.y = 8.0;
	printf("func %f %f\n", pf.x, pf.y);
}

int main() {
	struct point pm;
	
	pm.x = 3.0;
	pm.y = 4.0;
	
	printf( "main %f %f\n", pm.x, pm.y);
	func(pm);
	printf( "back %f %f\n", pm.x, pm.y);
}

/*
main 3.000000  4.000000
func 9.000000  8.000000
back 3.000000  4.000000
*/ 
```
Defining a new type called point, then making objects of that type and initializing its members.      
The passed `struct` to function is also accepted as `struct`


___6.2 Structures and Pointers___
```c
#include <stdio.h>

int main()
{
	struct point{
		double x;
		double y;
	};
	
	struct point pt, *pp;
	
	pp = &pt;
	
	pt.x = 3.0;
	(*pp).y = 4.0;
	
	printf("%p %f %f\n", pp, (*pp).x, pp->y );
}

//  0x16d72fle0  3.000000  4.000000
```
Pointer `*pp` also needs a type it represents. here it is a struct

To pass a structure by reference / address using `&`
```c
#include <stdio.h>

struct point {
	double x;
	double y;
};

void func(pp)
	struct point *pp;
{
	pp->x = 9.0;
	pp->y = 8.0;
	printf("func %f %f\n", pp->x, pp->y);
}

int main() {
	struct point pm;
	
	pm.x = 3.0;
	pm.y = 4.0;
	
	printf( "main %f %f\n", pm.x, pm.y);
	func(&pm);
	printf( "back %f %f\n", pm.x, pm.y);
}

/*
main 3.000000  4.000000
func 9.000000  8.000000
back 9.000000  8.000000
*/ 
```
`func(&pm);` passes the address of `pm` to the function,      
The type in `func` is defined as `struct point *pp` means we are getting as parameter an address, not the value, The value will be struct.     
Now `pp` points to `pm` and members are changed.


___6.2 Storage Allocation___     
`sizeof()` operator to find the size of something in characters.
```c
#include <stdio.h>

int main() {
	struct point {
		double x;
		double y;
	};
	
	struct point pt, *pp;
	
	printf("sizeof pt %ld\n", sizeof(pt));
	printf("sizeof pp %ld\n", sizeof(pp));
	printf("sizeof point %ld\n", sizeof(struct point));  // size of a type
}

/*
sizeof pt 16
sizeof pp 8
sizeof point 16
*/
```


___6.2 Dynamic memory allocation___
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
	struct point {
		double x;
		double y;
	};
	
	struct point *pp;
	
	pp = (struct point *) malloc(sizeof(struct point));
	
	pp->x = 3.0;
	(*pp).y = 4.0;
	
	printf("%p %f %f\n", pp, (*pp).x, pp->y);
}

//  0x600002a   3.000000   4.000000
```
`stdlib.h` has to be included to use `malloc`     
`*pp` represents the 8 character address, not the struct two doubles of 16 bits.     
`malloc(sizeof(struct point)` will find free memory of character size 16.      
`(struct point *)` casting the returned address from `malloc`, pointer to a point ????    


___6.5.1 A list of Strings___     
Combining Dynamic memory and Structures to create lists

Printing out lines in a file using lists in python.
```python
lines = list()
hand = open('romeo.txt')

for line in hand:
	lines.append(line.rstrip())

for line in lines:
	print(line)
```


___6.5.1 Self Referential Structures___     
In C we need to create build a `list()` structure before we can use it.     
The entries in the list will be stored in dynamically allocated memory.     
Each list entry contains some data and links to other members of the list using pointers.
```c
struct lnode {
	char *text;    // pointer to a character array
	struct lnode *next;
};
```

Linked Lists
```c
struct lnode {
	char *text;
	struct lnode *next;
};

struct lnode *head;
struct londe *tall;
```
Head points to the first item in the list, there is text and next in it, next is the address to the next thing.     
Tail has text and the next will be Null, which is indicator of end of list.

```c
while(fgets(line, MAXLINE, stdin) != NULL) {
	char *save = (char *) malloc(strlen(line)+1 );
	strcpy(save, line);
	
	struct lnode *new = (struct lnode *) malloc(sizeof(struct lnode));
	
	if ( tail != NULL ) tail->next = new;
	new->text = save;
	new->next = NULL;
	tail = new;
	
	if ( head == NULL ) head = new;
}
```

`while(fgets(line, MAXLINE, stdin) != NULL) {`      
reads a value into (line) automatic character array variable (max 1000 characters).

`char *save = (char *) malloc(strlen(line)+1 );`     
`strcpy(save, line);`      
Allocate memory for the new line and copy the contents from line to save.       
Allocating memory for a new string using `malloc`, which is given the length of string plus one extra line end character. The address is cast to a `char *`, it is assigned to `save`.

Allocating memory for a new `sruct lnode`.       
`struct lnode *new = (struct lnode *)`    
	`malloc (sizeof(struct lnode));`     

`if ( tail != NULL ) tail->next = new;`     
Append the new node to the end of the linked list.

`new->text = save;`     
Point to text pointer in the `lnode` to the recently allocated copy of line. 

`new->next = NULL;`     
Mark the newly allocated `struct lnode` as the last item in the list using `NULL`

`tail = new;`     
Update tail to point to the newly allocated the `last item` in the list.


> Draw a Picture and arrows

Walking the list     
Deleting the node (First, middle, last)


___6.5.1 Doubly Linked list___     
Doubly linked list allows for reversing a string easy.      
To scan a linked list in reverse, we need a "previous" entry in addition to the "next" entry.
Since it has links to both, it is called doubly linked list pointing to front and back.

```c
struct lnode {
	char *text;
	struct lnode *prev;
	struct lnode *next;
};

int main()
{
	struct lnode *head = NULL;
	struct lnode *tail = NULL;
	struct lnode *current;
	char line[MAXLINE];

	while(fgets(line, MAXLINE, stdin) != NULL) {
		char *save = (char *) malloc(strlen(line)+1 );
		strcpy(save, line);
		
		struct lnode *new = (struct lnode *) malloc(sizeof(struct lnode));
		
		if ( tail != NULL ) tail->next = new;
		new->text = save;
		new->next = NULL;
		new->prev = tail;
		tail = new;
		
		if ( head == NULL ) head = new;
	}

	for (current = tail; current != NULL; current = current->prev ) {
		printf( "%s", current->text);
	}
}
```


___6.8 Unions___      
A union is like a structure but all of the elements of the union overlap and allow you to view the same area of memory as multiple types.



____

