---
title: "04 - Doubly Linked List -(Own Implementation)"
description: ""
summary: ""
date: 2025-01-01T16:00:52+05:30
lastmod: 2025-01-01T16:00:52+05:30
draft: false
weight: 270
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


* Using tail to reduce the loops for reaching last node for insertion and deletion.
* With `NULL` available at end of Last node, `while(temp != NULL)` can be used to iterate over the full length of the list in `length()`.
* The length counter need not be incremented after the loop ends since it is Going till `NULL` which is next of tail so count will be right.
* This iterates over all values of list without leaving the last node also, so it useful for `Display()` and `Search()` functions.
* Or `for(let i=0; i<length() ; i++)` for similar result.
* Check Circular Doubly Linked List for More Info on changes and reasons.


___

#### Final Implementation

```c
#include <stdio.h>
#include <stdlib.h>

struct node
{
	int data;
	struct node *prev;
	struct node *next;
} *head = NULL, *tail = NULL, *new = NULL;

void Inserter(int ch, int ele);
void Deleter(int ch);
void Display();
void Search();
int length();

int main()
{
	int ch, ele;
	while(1)
	{
		printf("\n1. Insert at Beginning\t2. Insert inBetween\t3. Insert at End\n");
		printf("4. Delete Beginning\t5. Delete inBetween\t6. Delete End\n");
		printf("7. Display\t8. Search\t0. Exit\n");
		printf("Enter a Choice: ");
		
		scanf("%d", &ch);
		printf("\n");
		
		switch(ch)
		{
			case 0:
				exit(0);
			case 1:
			case 2:
			case 3:
				printf("\nEnter the value to Insert: ");
				scanf("%d", &ele);
				Inserter(ch, ele);
				Display();
				break;
			case 4:
			case 5:
			case 6:
				Deleter(ch);
				Display();
				break;
			case 7:
				Display();
				printf("\nLength is: %d\n", length());
				break;
			case 8:
				Search();
				break;
		}
	}
	return 0;
}
void firstNode(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	
	new->next = new->prev = NULL;
	head = tail = new;
}
void inB(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;

	new->next = head;
	new->prev = NULL;

	head->prev = new;
	head = new;
}
void inE(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;

	new->prev = tail;
	new->next = NULL;
	
	tail->next = new;
	tail = new;
}
int length()
{
	if(head == NULL)
		return 0; // No Element

	if(head == tail)
		return 1; // One Element

	struct node *temp = head;
	int len = 0;
	while(temp != NULL) // (temp != tail) can also be used
	{
		len++;
		temp = temp->next;
	}
	// No need of len++, All elements traversed 
	return len; 
}
int getPos()
{
	int len = length();
	
	int pos;
	printf("\nEnter Position: ");
	scanf("%d", &pos);
	
	// Regect Invalid positions -1, 0, len+2
	if(pos <= 0 || pos > len+1)
	{
		printf("\nInvalid Location \n");
		return -1;
	}
	return pos;
}
void inM(int ele)
{
	int pos = getPos();
	int len = length();
	
	if(pos == -1) // handling Invalid Positons
		return;
		
	if(pos == 1) // Handling 1st Position
	{
		inB(ele);
		return;
	}
	if(pos == len+1) // Last position len+1
	{
		inE(ele);
		return;
	}
	
	// Inserting at Middle Positions
	struct node *temp = head;
	
	for(int i=2; i<pos; i++)
	{
		temp = temp->next;		
	}
	
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;

	new->next = temp->next;
	new->prev = temp;
	
	temp->next->prev = new;
	temp->next = new;
}
void Inserter(int ch, int ele)
{
	if(head == NULL)
	{
		firstNode(ele);
		return;
	}
	switch(ch)
	{
		case 1:
			inB(ele);
			break;
		case 2:
			inM(ele);
			break;
		case 3:
			inE(ele);
			break;
	}
}
void Display()
{
	if(head == NULL)
	{
		printf("\nNo Elements to display\n");
		return;
	}
	// Traverse till end using length
	int len = length();
	
	struct node *temp = head;
	for(int i = 0; i<length(); i++)
	{
		printf("%d <-> ", temp->data);
		temp = temp->next;
	}
	printf("Null\n");
	
	printf("\nTotal elements are : %d\n\n", length());
}
void delB()
{
	struct node *temp = head;
	
	head = head->next;
	head->prev = NULL;
	free(temp);
}
void delE()
{
	struct node *temp = tail;
	
	tail = tail->prev;
	tail->next = NULL;
	free(temp);
}
void delM()
{
	int pos = getPos();
	int len = length();

	// Handle invalid possitions, -1, 0, len+2
	// Also handle len+1, no node to delete there 
	if(pos == -1 || pos == len+1)
		return;

	if(pos == 1) // Delete First
	{
		delB();
		return;
	}
	if(pos == len) // Delete Last
	{
		delE();
		return;
	}

	struct node *temp = head;

	for( int i=1 ; i<pos ; i++)
	{
		temp = temp->next;
	}
	// Used i=1 so temp is on the node to be deleted
	// Works in Doubly linked list only because prev can be accessed
	// in Singly linked i=2 works better to stop before node
	
	temp->prev->next = temp->next;
	temp->next->prev = temp->prev;
	free(temp);
}
void Deleter(int ch)
{
	if(head == NULL)  // No Elements
	{
		printf("\nNothing to delete\n");
		return;
	}
	if( head == tail) // One Element
	{
		struct node *temp = head;
		head = tail = NULL;  // Reset
		free(temp);	
		return;
	}

	// There are more than 1 elements
	switch(ch)
	{
		case 4:
			delB();
			break;
		case 5:
			delM();
			break;
		case 6:
			delE();
			break;
	}
}


void Search()
{
	if(head == NULL)
	{
		printf("\nNo values\n");
		return;
	}
	
	int ele;
	printf("\nEnter the Value to search: ");
	scanf("%d", &ele);
	
	int found = 0;	
	struct node *temp = head;
	
	for(int i=0 ; i<length() ; i++ )
	{
		if (temp->data == ele)
		{
			printf("\nElement %d found at index %d\n", ele, i);
			found =1;
			break;
		}
		// Moving temp to next node
		temp = temp->next;		
	}
	// if found still 0, No Match Found
	if(!found)
		printf("\nElement %d was not found.\n", ele);
}

// Since NULL is available while() can be used similar to length()

//	int pos = 0;
//	while(temp != NULL)
//	{
//		if(temp->data == ele)
//		{
//			printf("\nValue %d found at %d location\n", ele, pos);
//			return;
//		}
//		pos++;
//		temp = temp->next;
//	}
//	printf("\nElement %d not found in list\n", ele);
```

____


```c
#include <stdio.h>
#include <stdlib.h>

struct node
{
	int data;
	struct node *prev;
	struct node *next;
} *head = NULL, *tail = NULL, *new = NULL;

void Inserter(int ch, int ele);
void Deleter(int ch);
void Display();
void Search();
int length();

int main()
{
	int ch, ele;
	while(1)
	{
		printf("\n1. Insert at Beginning\t2. Insert inBetween\t3. Insert at End\n");
		printf("4. Delete Beginning\t5. Delete inBetween\t6. Delete End\n");
		printf("7. Display\t8. Search\t0. Exit\n");
		printf("Enter a Choice: ");
		
		scanf("%d", &ch);
		printf("\n");
		
		switch(ch)
		{
			case 0:
				exit(0);
			case 1:
			case 2:
			case 3:
				printf("\nEnter the value to Insert: ");
				scanf("%d", &ele);
				Inserter(ch, ele);
				Display();
				break;
			case 4:
			case 5:
			case 6:
				Deleter(ch);
				Display();
				break;
			case 7:
				Display();
				printf("\nLength is: %d\n", length());
				break;
			case 8:
				Search();
				break;
		}
	}
	return 0;
}
void firstNode(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	
	new->next = NULL;
	new->prev = NULL;
	head = new;
	tail = new;
}
void inB(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;

	new->next = head;
	head->prev = new;
	head = new;
}
void inE(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;

	new->prev = tail;
	tail->next = new;

	new->next = NULL;
	tail = new;
}
int length()
{
	if(head == NULL)
	{
		return 0;
	}
	struct node *temp = head;
	int len = 0;

	while(temp != NULL)
	{
		len++;
		temp = temp->next;
	}
	return len;
}
int getPos()
{
	int pos;
	printf("\nEnter Position: ");
	scanf("%d", &pos);

	if(pos <= 0 || pos > length()+1)
	{
		printf("\nInvalid Location \n");
		return -1;
	}
	return pos;
}
void inM(int ele)
{
	int pos = getPos();

	if(pos == -1)
		return;
	if(pos == 1)
	{
		inB(ele);
		return;
	}
	if(pos == length()+1)
	{
		inE(ele);
		return;
	}

	int i = 2;
	struct node *temp = head;
	
	while( i < pos)
	{
		temp = temp->next;
		i++;
	}
	
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;

	new->next = temp->next;
	temp->next->prev = new;
	new->prev = temp;
	temp->next = new;
}
void Inserter(int ch, int ele)
{
	if(head == NULL)
	{
		firstNode(ele);
		return;
	}
	switch(ch)
	{
		case 1:
			inB(ele);
			break;
		case 2:
			inM(ele);
			break;
		case 3:
			inE(ele);
			break;
	}
}
void delB()
{
	struct node *temp = head;
	head = head->next;
	head->prev = NULL;
	free(temp);
}
void delE()
{
	struct node *temp = tail;
	tail = tail->prev;
	tail->next = NULL;
	free(temp);
}
void delM()
{
	int pos = getPos();

	if(pos == -1 || pos == length()+1)
		return;

	if(pos == 1)
	{
		delB();
		return;
	}
	if(pos == length())
	{
		delE();
		return;
	}

	struct node *temp = head;
	 
	int i = 1;
	while( i < pos)
	{
		temp = temp->next;
		i++;
	}
	temp->prev->next = temp->next;
	temp->next->prev = temp->prev;
	free(temp);
}
void Deleter(int ch)
{
	if(head == NULL)
	{
		printf("\nNo elements in List\n");
		return;
	}
	if( head == tail)
	{
		struct node *temp = head;
		head = tail = NULL;
		free(temp);	
		return;
	}
	switch(ch)
	{
		case 4:
			delB();
			break;
		case 5:
			delM();
			break;
		case 6:
			delE();
			break;
	}
}
void Display()
{
	if(head == NULL)
	{
		printf("\nNo Elements to display\n");
		return;
	}
	struct node *temp = head;
	while(temp != NULL)
	{
		printf("%d -> ", temp->data );
		temp = temp->next;
	}
	printf("\nTotal elements are : %d\n\n", length());
}

void Search()
{
	if(head == NULL)
	{
		printf("\nNo values\n");
		return;
	}
	int ele;
	printf("\nEnter the Value to search: ");
	scanf("%d", &ele);

	int pos = 0;
	struct node *temp = head;
	while(temp != NULL)
	{
		if(temp->data == ele)
		{
			printf("\nValue %d found at %d location\n", ele, pos);
			return;
		}
		pos++;
		temp = temp->next;
	}
	printf("\nElement %d not found in list\n", ele);
}
```



____


```c
#include <stdio.h>
#include <stdlib.h>

struct node 
{
    int data;
    struct node *prev;
    struct node *next;
} *head = NULL, *new = NULL;

int len; // Global length variable

// Function to calculate the length of the linked list
int length() 
{
    struct node *temp = head;
    int count = 0;
    
    while (temp != NULL) {
        count++;
        temp = temp->next;
    }
    return count;
}

// Insert at the beginning
void Begin(int a) 
{
    new = (struct node*)malloc(sizeof(struct node));
    new->data = a;
    new->prev = NULL;
    new->next = NULL;

    if (head == NULL) { 
        head = new;
    } else {
        new->next = head;  
        head->prev = new;  
        head = new;         // Update head to new node
    }
}

// Insert at the end
void End(int a) 
{
    struct node *temp = head;
    new = (struct node*)malloc(sizeof(struct node));
    new->data = a;
    new->next = NULL;

    if (head == NULL) {
        new->prev = NULL;
        head = new;
        return;
    }

    while (temp->next != NULL) {
        temp = temp->next;
    }

    temp->next = new;
    new->prev = temp;
}

// Insert in the middle
void Middle(int a) 
{
    struct node *temp;
    int loc, i = 1;
    len = length();

    if (len == 0) {
        printf("The list is Empty\n");
        return;
    }

    printf("Enter the location to be inserted: ");
    scanf("%d", &loc);

    if (loc > len || loc < 1) {
        printf("Invalid Location\n");
        return;
    }

    temp = head;
    while (i < loc) {
        temp = temp->next;
        i++;
    }

    new = (struct node*)malloc(sizeof(struct node));
    new->data = a;

    new->next = temp->next;
    new->prev = temp;
    
    if (temp->next != NULL) 
    {
        temp->next->prev = new;
    }

    temp->next = new;
}

// Search for an element
void Search(int key) {
    struct node *temp = head;
    int pos = 1, found = 0;

    if (head == NULL) {
        printf("The list is empty. Cannot search.\n");
        return;
    }

    while (temp != NULL) {
        if (temp->data == key) {
            printf("Element %d found at position %d\n", key, pos);
            found = 1;
            break;
        }
        temp = temp->next;
        pos++;
    }

    if (!found) {
        printf("Element %d not found in the list.\n", key);
    }
}

// Delete from the beginning
void DBegin() {
    struct node *temp;
    if (head == NULL) {
        printf("The list is empty\n");
        return;
    }

    temp = head;
    head = head->next;

    if (head != NULL) {
        head->prev = NULL;
    }

    free(temp);
}

// Delete from the middle
void DMid() {
    struct node *temp;
    int loc, i = 1;
    len = length();

    if (len == 0) {
        printf("The list is empty\n");
        return;
    }

    printf("Enter the position to delete: ");
    scanf("%d", &loc);

    if (loc > len || loc < 1) {
        printf("Invalid Location\n");
        return;
    }

    temp = head;
    while (i < loc) {
        temp = temp->next;
        i++;
    }

    if (temp->prev != NULL) {
        temp->prev->next = temp->next;
    } else { 
        head = temp->next; // If deleting the first node, update head
    }

    if (temp->next != NULL) {
        temp->next->prev = temp->prev;
    }

    free(temp);
}

// Delete from the end
void DEnd() {
    struct node *temp = head;

    if (head == NULL) {
        printf("The list is empty, nothing to delete.\n");
        return;
    }

    if (head->next == NULL) { // Only one node in the list
        free(head);
        head = NULL;
        printf("Last node deleted, list is now empty.\n");
        return;
    }

    while (temp->next != NULL) {
        temp = temp->next;
    }

    temp->prev->next = NULL; // Second last node becomes last
    free(temp);
    printf("Last node deleted successfully.\n");
}

// Display the linked list
void Display() 
{
    struct node *temp;
    if (head == NULL) {
        printf("The list is empty\n");
        return;
    }

    temp = head;
    while (temp != NULL) {
        printf("%d <-> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");

    len = length();
    printf("Total Elements: %d\n", len);
}

int main() {
    int a, ch;

    while (1) {
        printf("\n1. Insert Beginning\n");
        printf("2. Insert Middle\n");
        printf("3. Insert End\n");
        printf("4. Display\n");
        printf("5. Search\n");
        printf("6. Delete Beginning\n");
        printf("7. Delete Middle\n");
        printf("8. Delete End\n");
        printf("9. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &ch);

        switch (ch) {
            case 1:
                printf("Enter the element to be inserted: ");
                scanf("%d", &a);
                Begin(a);
                break;
            case 2:
                printf("Enter the element to be inserted: ");
                scanf("%d", &a);
                Middle(a);
                break;
            case 3:
                printf("Enter the element to be inserted: ");
                scanf("%d", &a);
                End(a);
                break;
            case 4:
                Display();
                break;
            case 5:
                printf("Enter the element to search: ");
                scanf("%d", &a);
                Search(a);
                break;
            case 6:
                DBegin();
                break;
            case 7:
                DMid();
                break;
            case 8:
                DEnd();
                break;
            case 9:
                printf("Exiting...\n");
                return 0;
            default:
                printf("Enter a valid choice!\n");
        }
    }
}
```

___
