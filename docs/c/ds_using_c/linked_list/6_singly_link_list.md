---
title: "01 - Singly Linked List - Basics"
description: ""
summary: ""
date: 2025-01-01T16:00:52+05:30
lastmod: 2025-01-01T16:00:52+05:30
draft: false
weight: 267
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



A `node` data type is defined using a `struct` that contains two elements:
1. **Data Element**: An integer (`int`) to store the actual data of the node.
2. **Next Pointer**: A pointer (`next`) of type `struct node*` that holds the memory location of the next node in the list.

#### Pointers for Operations
To manage the list, three pointers of type `struct node*` are used:
- `*new`: Holds the address of a newly created node (allocated via `malloc`).
- `*temp`: Holds and links the old node, used to link to the new node.
- `*head`: Points to the first node of the list and is used for iteration. It is never incremented during traversal.
- `*tail`: Points to the Last node of the list, useful for deletion and insertion at end.
Initially, all pointers (`head`, `temp`, `new`, `tail`) are set to `NULL`.

---

#### Creating a node

The steps to create a new node using `create` function :

1. **Memory Allocation**:
```c
new = (struct node*) malloc(sizeof(struct node));
```
- Using `malloc()` to allocate memory for the node with size of `struct node.
- The `malloc()` function returns a `void*`, which is typecasted into a `(struct node*)` and assigned to `new` pointer
- `new` now points to the memory location where the new node is stored.

2. **Initializing  the Node**:
- Accessing and assigning values to the node using dot`.` or `->` methods
- `new->data`: Assign the value entered by the user.
- `new->next`: Initialize to `NULL` since this is the only node at the moment.

3. **Linking the Node to Previous node**:
- **For First Insertion**: If `head == NULL` (i.e., the list is empty), `new` is assigned to `head` and `temp`.
```c
if (head == NULL) {
	head = temp = new;
}
```
- This makes the newly created node the first node in the list and there is no further pointers inside to update.

- **Subsequent Insertions**:
- For other insertions, `temp` holds the address of the previous node. The new node's address is assigned to the `next` pointer within the previous node:
- Then, `temp` is updated to point to the new node to be used for the next creation.
```c
else {
	temp->next = new;
	temp = new;
}
```


---

#### **Display Function**

To traverse and display the elements of the linked list:

- Create a temporary pointer (`te`) to traverse the list, starting from `head`:
```c
struct node* te;
te = head;
```

- If `head == NULL`, the list is empty, so nothing is displayed.
- If the list is not empty, a `while` loop is used to traverse the list and display the node data:

```c
while (te != NULL) {
	printf("%d -> ", te->data);
	te = te->next;
}
```

- The loop continues until `te` becomes `NULL`, indicating the end of the list.

---


```c
#include<stdio.h>
#include<stdlib.h>
struct node
{
	int data;
	struct node *next;
}*new=NULL, *head=NULL, *temp=NULL;
void Create(int a)
{
	//struct node *temp;
	new = (struct node*) malloc(sizeof(struct node));
	new->data = a;
	new->next = NULL;
	
	printf("%d \n", new->data);
	printf("%d \n", new->next);
	
	if(head == NULL)
	{
		head = new;
		temp = new;
	}
	else
	{
		temp->next = new;
		temp = new;
	}
}

void Display()
{
	struct node *te;
	te=head;
	if(te ==NULL)
	{
		printf("Currently list is empty\n");
		printf("***************************\n");
	}
	else
	{
		while(te !=NULL)
		{
			printf("%d-->",te->data);
			te=te->next;
		}
		printf("\n\n");
	}
}

	
void main()
{
	int a;
	
	while(1)
	{
		int ch;
		printf("\n1.Creating Linked List\n");
		printf("2.Display\n");
		printf("\nEnter choice: ");
		scanf("%d",&ch);
		switch(ch)
		{
			case 1:
				printf("Enter the element to be inserted \n");
				scanf("%d", &a);
				Create(a);
				break;
			case 2:
				Display();
				break;
		
			default: printf("Enter the choice Correctly");
			break;
		}
	}	
}
```



___


```c
#include <stdio.h>
#include <stdlib.h>

void create(int x);
void display();

void main()
{
	int val;
	while(1)
	{
		int ch;
		printf("Make a Choise:\n");
		printf("0 = Exit\n1 = Add Value\t2 = Display all Values\n");
		scanf("%d", &ch);
		
		switch(ch)
		{
			case 0:
				exit(0);
			case 1:
				printf("\nEnter the value to be added: \n");
				scanf("%d", &val);
				create(val);
				break;
			case 2:
				display();
				break;
		}
	}
}
struct node
{
	int data;
	struct node *next;
} *new=NULL, *temp=NULL, *head=NULL;

void create(int x)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data=x;
	new->next=NULL;

	printf("\tThe Value %d has been inserted\n", x);
	
	if(head == NULL)
	{
		head = new;
		temp = new;
	}
	else
	{
		printf("\n\t%p is the previous node, ", temp);
		printf("linked with new node %p. \n", new);
		temp->next=new;
		temp=new;
	}

}
void display()
{
	struct node *tem;
	tem = head;
	
	if (tem == NULL)
	{
		printf("\n\tThe List is empty\n\n");
	}
	else
	{
		printf("\tThe Values in the list are: ");
		while(tem != NULL)
		{
			printf("%d  ", tem->data);
			tem=tem->next;
		}
		printf("\n\n");
	}
}
```


___


```c
#include <stdio.h>
#include <stdlib.h>

void create(int x);
void display();

void main()
{
    int val;
    while(1)
    {
        int ch;
        printf("Make a Choice:\n");
        printf("0 = Exit\n1 = Add Value\t2 = Display all Values\n");
        scanf("%d", &ch);
        
        switch(ch)
        {
            case 0:
                exit(0);
            case 1:
                printf("\nEnter the value to be added: \n");
                scanf("%d", &val);
                create(val);
                break;
            case 2:
                display();
                break;
        }
    }
}

struct node
{
    int data;
    struct node *next;
} *head = NULL;

void create(int x)
{
    struct node *new = (struct node*) malloc(sizeof(struct node));
    new->data = x;
    new->next = NULL;

    printf("\tThe Value %d has been inserted\n", x);

    if (head == NULL)
    {
        head = new;
        printf("New node %p is now the head of the list.\n", new);
    }
    else
    {
        struct node *temp = head;
        while (temp->next != NULL)
        {
            temp = temp->next;
        }
        temp->next = new;
        printf("\t%p is the previous node, linked with new node %p. \n", temp, new);
    }
}

void display()
{
    struct node *tem = head;
    
    if (tem == NULL)
    {
        printf("The List is empty\n");
    }
    else
    {
        printf("\tThe Values in the list are: ");
        while (tem != NULL)
        {
            printf("%d ", tem->data);
            tem = tem->next;
        }
        printf("\n");
    }
}

```


____
