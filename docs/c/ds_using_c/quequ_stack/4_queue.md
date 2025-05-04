---
title: "01 - Queue using Array"
description: ""
summary: ""
date: 2025-01-01T16:00:44+05:30
lastmod: 2025-01-01T16:00:44+05:30
draft: false
weight: 265
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

#### **Basic Logic**

**Queue Structure**: The queue is a data structure where elements are added at the **back** and removed from the **front**.

**Pointers**:
- `head` points to the first element in the queue (front).
- `tail` points to the next available position for insertion (back).
- The `head` is incremented after each removal, and `tail` is incremented after each insertion.

#### **Variables**

- **`int n`**: Size of the queue.
- **`int head = -1, tail = -1`**: Initialize the `head` and `tail` pointers to indicate an empty queue.
- **`stack[n]`**: Array of integers or characters used as the queue.
- **`ele`**: The value to be added to the queue (enqueue operation).
- **`ch`**: Integer variable used to store the user’s choice for queue operations.

#### Implementation Logic

**Global Variables**:
- Declare `n`, `head = -1`, and `tail = -1` globally to manage the queue.
- Functions for queue operations (`enque`, `deque`, and `display`) are declared, all of which return `void`.

**Input Handling**:
- In the `main()` function, the size of the queue is taken as input (`scanf("%d", &n)`).
- Declare `stack[n]` to store the queue elements and `ele` for input values of relevant type.

* A `while(1)` loop used to continuously display options and perform chosen operation.
* Declare `int ch` to hold the choice of user.
* make `if else` conditions for each function, an exit and miss typed number.
* Only option for `enque` needs to be passed the value to be added with `stack`

#### **Function Logic**

**`enque`**:
- Checks if the queue is full (`tail == n-1`).
- If not full, it increments `tail` and inserts the element into `stack[tail]`.
- If `head` is `-1` (first insertion), it increments `head` to indicate that the queue is no longer empty.
**`dequ`**:
- Removal happens at the head, so check if (`head == -1 || head > tail`) which means queue is empty
- If not empty, it removes the element at `head` and increments `head`.
**`display`**:
- Checks if the queue is empty (`head == -1 || head > tail`).
- If not empty, it displays all elements from `head` to `tail`.
* run a for loop with `i = front` and running till `i <= tail` with `i++`
* Print each `stack[i]`

### Implementation

```c
#include <stdio.h>
#include <stdlib.h>

int n, head = -1, tail = -1;

void enqu(int stack[], int x);
void dequ(int stack[]);
void display(int stack[]);

void main()
{
	printf("Enter the size of the Queue \n");
	scanf("%d", &n);
	int stack[n], ele;

	while(1)
	{
		int ch;
		printf("Make a choise:\n");
		printf("\n0.Exit\t1.Enqueue\n2.Dequeue\t3.Display\n");
		scanf("%d", &ch);
		
		if (ch == 0)
			exit(0);
		else if (ch == 1)
		{
			printf("\nProvide the Number to Add: \n");
			scanf("%d", &ele);
			enqu(stack, ele);
		}
		else if (ch == 2)
			dequ(stack);
		else if (ch == 3)
			display(stack);
		else
			printf("Enter a Proper choice\n");
	}
}

void enqu(int stack[], int x)
{
	if ( tail == n-1)
	{
		printf("\nThe Queue is Full\n");
	}
	else
	{
		if ( head == -1)
			head++;
		tail++;
		stack[tail] = x;
		printf("\nNumber %d has been inserted in the Queue\n\n", x);	
	}
}
void dequ(int stack[])
{
	if ( head == -1 || head > tail)
		printf("\nThe Queue is empty\n");
	else
	{
		printf("The Number %d has been removed\n", stack[head]);
		head++;
	}
}
void display(int stack[])
{
	if ( head == -1 || head > tail)
		printf("\nThe Queue is empty\n");
	else
	{
		printf("The Elements in the Queue are: \n");
		for( int i = head; i <= tail; i++)
		{
			printf("%d \t", stack[i]);
		}
		printf("\n");
	}
}
```

