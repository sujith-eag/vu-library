---
title: "06 - Stack Using Linked List"
description: ""
summary: ""
date: 2025-01-01T16:00:52+05:30
lastmod: 2025-01-01T16:00:52+05:30
draft: false
weight: 272
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



* Data structure with One node linking to next node.
* `top -> next -> next -> next -> NULL`
* Top is holding value of the last added element.
* Element is pushed in, giving top as next to new node so stack grows with new node on top.
* When deleting, temp holds top, top shifted to previous one and temp is released.
* Display is traversing till temp is NULL to mark end of Stack.

```c
#include <stdio.h>
#include <stdlid.h>

struct node
{
	int data;
	struct node *next;
}*top=NULL;

void push(int ele);
void pop();
void peep();
void display();

int main()
{
	int ele;
	int ch;

	while(1)
	{
		printf("\n1. Insert\t2. Delete\t3. Peep\t4. Dispaly\t5. Exit\n");
		printf("\nEnter choice: ");
		scanf("%d", &ch);
		switch(ch)
		{
			case 1:
				printf("\nEnter the value to Push: ");
				scanf("%d", &ele);
				push(ele);
				display();
				break;
			case 2:
				pop();
				display();
				break;
			case 3:
				peep();
				break;
			case 4:
				display();
				break;
			case 5:
				exit(0);
			default:
				printf("\nEnter right choice\n");
		}
	}
	return 0;
}
void push(int ele)
{
	struct node* new;
	new = (struct node*) malloc(sizeof(struct node));
	
	new->data = ele;
	new->next = top;
	top = new;
	
	printf("Element %d is pushed in.\n", ele);
}
void pop()
{
	if(top == NULL)
	{
		printf("\nStack is empty\n");
		return;
	}
	struct node* temp = top;
	top = top->next;
	free(temp);
}
void peep()
{
	if(top == NULL)
	{
		printf("No values\n");
		return;
	}
	printf("\nValue on top is %d", top->data);
}
void display()
{
	if(top == NULL)
	{
		printf("No values\n");
		return;
	}
	struct node* temp = top;

	while(temp != NULL)
	{
		printf("%d -> ", temp->data);
		temp = temp->next;
	}
	printf("\n");
}
```



____


```c
#include <stdio.h>
#include <stdlib.h>

struct node 
{
    int data;
    struct node *next;
}*top = NULL;

void push(int e) 
{
    struct node* new = (struct node*)malloc(sizeof(struct node));  // Local variable
    if (new == NULL) 
    {
        printf("Stack is Full\n");
        return;
    }
    new->data = e;
    new->next = top;
    top = new;
    printf("******************************************************\n");
    printf("\nElement %d is Pushed \n", e);
    printf("******************************************************\n");
}

void pop() 
{
    if (top == NULL) 
    {
        printf("******************************************************\n");
        printf("Stack is Under Flow \n");
        printf("******************************************************\n");
    } 
    else 
    {
        struct node* temp = top;
        printf("******************************************************\n");
        printf("Element %d is popped \n", top->data);
        printf("******************************************************\n");
        top = top->next;
        free(temp);
    }
}

void peep() 
{
    if (top == NULL) 
    {
        printf("******************************************************\n");
        printf("Stack is Under Flow \n");
        printf("******************************************************\n");
    } 
    else 
    {
        printf("******************************************************\n");
        printf("The Top Most Element is %d\n", top->data);
        printf("******************************************************\n");
    }
}

void display() 
{
    if (top == NULL) 
    {
        printf("Stack is Empty \n");
    } 
    else 
    {
        struct node* temp = top;
        printf("Elements of Stack are \n");
        printf("******************************************************\n");
        while (temp != NULL) 
        {
            printf("%d \n", temp->data);
            temp = temp->next;
        }
    }
}

int main() {
    int e, ch;
    while (1) {
        printf("\n\n1->Insert element \t2->Delete element \n3->Peep \t\t4->Display \n5->Exit\n");
        printf("\nEnter choice:\n");
        scanf("%d", &ch);
        switch (ch) {
            case 1:
                printf("Enter the element to be pushed \n");
                scanf("%d", &e);
                push(e);
                break;
            case 2:
                pop();
                break;
            case 3:
                peep();
                break;
            case 4:
                display();
                break;
            case 5:
                exit(0);
            default:
                printf("Enter the choice Correctly\n");
        }
    }
    return 0;
}
```


____


