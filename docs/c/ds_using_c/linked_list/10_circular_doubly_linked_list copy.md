---
title: "05 - Circular Doubly Linked List -(Own Implementation)"
description: ""
summary: ""
date: 2025-01-01T16:00:52+05:30
lastmod: 2025-01-01T16:00:52+05:30
draft: false
weight: 271
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Fixed Insert and Delete Middle Traversal :
* The issue of Traversing for Insertion at middle and deletion was handled by shifting to index 1 instead of mixing 0 and 1 index.

Length Function:
* Length gives the actual number of elements so it is 1 index.
* Length checks no nodes in list with `head == NULL` and returns 0
* So 0 become no node, 1 is first node
* Length also handles 1 element, that is if `head == tail`, returns 1
* `while()` loop traverses the list, runs for list with at least 2 elements, till `temp != tail`. (Last one length has to incremented outside the loop to include tail)

Function to Get Position and Check is it Valid:
*  Position to delete and insert at, both need to be at different locations, for insertion just behind the place of insertion and for deletion on the node (two nodes for singly linked lists)
* `getPos` should not accept `-1, 0 and len+2` and return `-1` for these values so it can be neglected in the code.
* If it is 1, insert at beginning or delete at beginning.
* for insertion if `pos == len+1` then insert at end 
* but for deletion `len+1` should be discarded. if it is `len` then delete at end.
* So After handling these edge cases, the range of traversal will be from `2` to `len`.

All `while()` loops can be replaced with `for()` loop (except in length function) for better readable and error less code.

For insertion taking `i = 2` and `i < pos` will iterate to node just before the place, 
* Example: Input of `pos = 2` will keep temp at head so insertion can happen in 2nd place and so on.

For deletion temp needs to be on the node, so `i = 1` and `i < pos` will place temp in the needed node so `free(temp)` will delete the node (Works well in Doubly Linked Lists).
* In singly linked list, two nodes need to be selected for linking and deleting a node.
* better to take `i = 2`, move `temp` to node just before the node to be deleted and assign `temp->next` which can be linked and deleted.

For Search :
* key `found = 0` switch is used to signal if it is found so Exit message can be printed.
* Using `for()` loop for iteration since length is known, so last element can also be accessed.
* No need to check last element outside the loop using `if(temp->data == ele && found == 0)`.

___

### Final Implementation

Generalized Rules for List Traversal
* `while(temp != tail)` used only in `length()` function.
* `for(i=2; i<pos; i++)` will put temp on node just before position( for `inserMiddle()` in doubly linked list).
* `for(i=1; i<pos; i++)` will put temp on the node ( for `deleteMiddle()`)
* `for(i=0; i<length(); i++)` to iterate through whole list ( for `display()` and `search()`) 

```c
#include <stdio.h>
#include <stdlib.h>

struct node
{
	int data;
	struct node *prev;
	struct node *next;
}*head = NULL, *tail=NULL, *new=NULL;


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
		printf("4. Display\t5. Search\n");
		printf("6. Delete Beginning\t7. Delete inBetween\t8. Delete End\n");
		printf("0. Exit\n");
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
			case 4:
				Display();
				printf("\nLength is: %d\n", length());
				break;
			case 5:
				Search();
				break;
			case 6:
			case 7:
			case 8:
				Deleter(ch);
				Display();
				break;
		}
	}
	return 0;
}
void firstNode(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	
	new->next = new->prev = new;
	head = tail = new;
}
void inB(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	
	new->next = head;
	new->prev = tail;
	
	head->prev = new;
	tail->next = new;
	
	head = new;
}
void inE(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	
	new->next = head;
	new->prev = tail;
	
	head->prev = new;
	tail->next = new;
	
	tail = new;
}
int length()
{
	if(head == NULL)
		return 0;  // No element
		
	if(head == tail)
		return 1; // One Element
		
	struct node *temp = head;
	int len = 0;
	while(temp != tail)
	{
		len++;
		temp = temp->next;
	}
	len++;  // Adding 1 for tail node
	return len;
}
int getPos()
{
	int len = length();

	int pos;
	printf("\nEnter position: ");
	scanf("%d", &pos);

	// Regect Invalid positions -1, 0, len+2
	if(pos <= 0 || pos > len+1) 
	{
		printf("\nInvalid Location\n");
		return -1;
	}
	return pos;
}
void inM(int ele)
{
	int pos = getPos();
	int len = length();
	
	if(pos == -1) // Handling invalid Position
		return;
		
	if(pos == 1) // Handling 1st Position
	{
		inB(ele);
		return;
	}
	if(pos == len+1) // Handling len+1
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
	// temp is one node behind where new node has to be inserted 
	// for pos = 2, temp will be head
	
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
		case 3:
			inE(ele);
			break;
		case 2:
			inM(ele);
			break;
	}
}
void Display()
{
	if(head == NULL)
	{
		printf("\nNo Elements\n");
		return;
	}
	// Traverse till end using length
	int len = length();
	
	struct node *temp = head;
	for(int i = 0; i<len ; i++)
	{
		printf("%d <-> ", temp->data);
		temp = temp->next;
	}
	printf("Head\n");
	
	printf("\nTotal elements are : %d\n\n", len );
}
void delB()
{
	struct node *temp = head;
	
	head = head->next;
	head->prev = tail;
	tail->next = head;
	free(temp);
}
void delE()
{
	struct node *temp = tail;
	
	tail = tail->prev;
	tail->next = head;
	head->prev = tail;
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
	if(head == NULL) // No Elements
	{
		printf("\nNothing to delete\n");
		return;
	}
	if(head == tail) // One Element
	{
		struct node *temp = head;
		head = tail = NULL;  // Reset
		free(temp);
		return;
	}
	
	// There are More than 1 elements
	switch(ch)
	{
		case 6:
				delB();
				break;
		case 7:
				delM();
				break;
		case 8:
				delE();
				break;
	}
}
void Search()
{
	if(head == NULL)
	{
		printf("\nNo Elements in List.\n");
		return;
	}
	
	int ele;
	printf("\nEnter the element to search: ");
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
```


_____

### Fixed Code for Insert(But While Loops)

```c
#include <stdio.h>
#include <stdlib.h>

struct node
{
	int data;
	struct node *prev;
	struct node *next;
}*head = NULL, *tail=NULL, *new=NULL;


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
		printf("4. Display\t5. Search\n");
		printf("6. Delete Beginning\t7. Delete inBetween\t8. Delete End\n");
		printf("9. Exit\n");
		printf("Enter a Choice: ")
		scanf("%d", &ch);
		printf("\n");

		switch(ch)
		{
			case 1:
			case 2:
			case 3:
				printf("\nEnter the value to Insert: ");
				scanf("%d", &ele);
				Inserter(ch, ele);
			case 4:
				Display();
				printf("\nLength is: %d\n", length());
				break;
			case 5:
				Search();
				break;
			case 6:
			case 7:
			case 8:
				Deleter(ch);
				Display();
				break;
			case 9:
				exit(0);
		}
	}
	return 0;
}
void firstNode(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	new->next = new->prev = new;
	head = tail = new;
}
void inB(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	
	new->next = head;
	head->prev = new;
	
	new->prev = tail;
	tail->next = new;

	head = new;
	
}
void inE(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;

	new->next = head;
	head->prev = new;
	
	new->prev = tail;
	tail->next = new;

	tail = new;
}
int length()
{
	if(head == NULL)
		return 0;

	if(head == tail)
		return 1;
		
	struct node *temp = head;
	int len = 0;
	while(temp != tail)
	{
		len++;
		temp = temp->next;
	}
	len++;
	return len;
}
int getPos()
{
	int len = length();

	int pos;
	printf("Enter position: ");
	scanf("%d", &pos);
	
	if(pos <= 0 || pos > len+1)
	{
		printf("\nInvalid Location\n");
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

	struct node *temp = head;
	int i = 2;
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
		case 3:
			inE(ele);
			break;
		case 2:
			inM(ele);
			break;
	}
}
void Display()
{
	if(head == NULL)
	{
		printf("\nNo Elements\n");
		return;
	}
	struct node *temp = head;
	while(temp != tail)
	{
		printf("%d -> ", temp->data);
		temp = temp->next;
	}
	printf("%d ", temp->data);
	printf("\n");
}
void delB()
{
	struct node *temp = head;

	head = head->next;
	head->prev = tail;
	tail->next = head;
	free(temp);
}
void delE()
{
	struct node *temp = tail;
	
	tail = tail->prev;
	tail->next = head;
	head->prev = tail;
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
	while(i<pos)
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
		printf("Nothing to delete");
		return;
	}
	if(head == tail)
	{
		struct node *temp = head;
		head = tail = NULL;
		free(temp);
		return;
	}
	
	switch(ch)
	{
		case 6:
				delB();
				break;
		case 7:
				delM();
				break;
		case 8:
				delE();
				break;
	}
}
void Search()
{
	if(head == NULL)
	{
		printf("\nNo Elements in List.\n");
		return;
	}
	int ele;
	printf("\nEnter the element to search: ");
	scanf("%d", &ele);
	struct node *temp = head;

	int pos = 1, found = 0;

	while(temp != tail)
	{
		if (temp->data == ele)
		{
			printf("\nElement %d found at position %d\n", ele, pos);
			found =1;
			break;
		}
		temp = temp->next;
		pos++;
	}
	if (temp->data == ele && found == 0)
	{
		printf("\nElement %d found at position %d\n", ele, pos);
		found =1;
	}
	if(!found)
		printf("\nElement %d was not found.\n", ele);
}
```


___

#### Still issue with Delete in middle

```c
#include <stdio.h>
#include <stdlib.h>

struct node
{
	int data;
	struct node *prev;
	struct node *next;
};

struct node *head=NULL, *tail=NULL, *new=NULL;

int length();
void Inserter(int ch, int ele);
void Deleter(int ch);
void Display();
void Search();


int main()
{
	int ch, ele;
	while(1)
	{
		printf("\n1. Insert at Beginning\t2. Insert inBetween\t3. Insert at End\n");
		printf("4. Display\t5. Search\n");
		printf("6. Delete Beginning\t7. Delete inBetween\t8. Delete End\n");
		printf("9. Exit\n");
		scanf("%d", &ch);

		switch(ch)
		{
			case 1:
			case 2:
			case 3:
				printf("\nEnter the value to Insert: ");
				scanf("%d", &ele);
				Inserter(ch, ele);
			case 4:
				Display();
				printf("\nLength is: %d\n", length());
				break;
			case 5:
				Search();
				break;
			case 6:
			case 7:
			case 8:
				Deleter(ch);
				Display();
				break;
			case 9:
				exit(0);
		}
	}
	return 0;
}

void firstNode(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	new->next = new;
	new->prev = new;
	head = new;
	tail = new;

}
void inBeginning(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	new->next = head;
	new->prev = tail;
	tail->next = new;
	head->prev = new;
	head = new;
	return;
}
void inEnd(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	new->next = head;
	new->prev = tail;
	tail->next = new;
	head->prev = new;
	tail = new;
}
int length()
{
	struct node* temp = head;
	int count = 0;

	if (head == NULL)
		return 0;
	
	while (temp != tail )
	{
		count++;
		temp = temp->next;
	}
	count++;
	return count;
}
int getPos()
{
	printf("Enter the Position to insert at:\n");
	int pos;
	scanf("%d", &pos);

	int len = length();
	
	if(pos<0 || pos>len)
	{
		printf("\nInvalid Position\n");
		return -1;
	}
	return pos;
}
void inBetween(int ele)
{
	int pos = getPos();

	if (pos == -1)
		return;

	if (pos == 0)
	{
		inBeginning(ele);
		return;
	}
	else if(pos == length())
	{
		inEnd(ele);
		return;
	}
	struct node *temp;
	temp = head;

	int i = 1;
	while( i < pos)
	{
		temp = temp->next;
		i++;
	}

	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	new->next = temp->next;
	new->prev = temp;

	temp->next = new;
	temp->next->prev = new;
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
			inBeginning(ele);
			break;
		case 2:
			inBetween(ele);
			break;
		case 3:
			inEnd(ele);
			break;
	}
}
void delB()
{
	struct node *temp = head;

	head = head->next;
	head->prev = tail;
	tail->next = head;
	free(temp);

}
void delE()
{
	struct node *temp = tail;

	tail = tail->prev;
	tail->next = head;
	head->prev = tail;
	free(temp);
}
void delM()
{
	
	int pos = getPos();
	
	if (pos == 1 || pos == 0)
	{
		delB();
		return;
	}
	if (pos == length())
	{
		delE();
		return;
	}
	if (pos == -1)
		return;
	
	struct node *temp = head;
	int i = 1;
	while(i < pos)
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
		printf("\nThe list has no elements to delete\n");
		return;
	}
	if (head == tail)
	{
		struct node *temp = head;
		head = tail = NULL;
		free(temp);
		return;
	}
	switch(ch)
	{
		case 6:
			delB();
			break;
		case 8:
			delE();
			break;
		case 7:
			delM();
			break;
	}
}
void Display()
{
	struct node *temp;
	temp = head;

	while (temp!=tail)
	{
		printf("%d ->", temp->data);
		temp = temp->next;
	}
	printf("%d", temp->data );
}
void Search()
{
	printf("\nEnter the value to search: \n");
	int val;
	int found = 0;
	int pos = 0;
	scanf("%d", &val);

	struct node *temp = head;
	while(head != tail)
	{
		if(temp->data == val)
		{	found = 1;
			break;
		}
		pos++;
		temp = temp->next;
	}
	if (found == 1)
	{
		printf("\nThe value %d was found at %d\n", val, pos);
		return;
	}
	printf("\nThe value %d was not found\n", val);
}
```


____

#### Early Code 

```c
#include <stdio.h>
#include <stdlib.h>

struct node 
{
    int data;
    struct node *prev;
    struct node *next;
};

struct node *head = NULL, *tail = NULL, *new=NULL; // Using tail pointer

int length();
void Begin(int a);
void End(int a);
void Middle(int a);
void Search(int key);
void DBegin();
void DMid();
void DEnd();
void Display();


// Main function
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

// Function to calculate the length of the circular linked list
int length() 
{
    struct node *temp = head;
    int count = 0;

    if (head == NULL) 
        return 0; // Empty list

    while (temp != tail) // Traverse until the last node
    { 
        count++;
        temp = temp->next;
    }
    count++; // Count the last node

    return count;
}

// Insert at the beginning
void Begin(int a) 
{
    new = (struct node*)malloc(sizeof(struct node));
    new->data = a;

    if (head == NULL) // First node
    { 
		new->next = new;
        new->prev = new;
        head = tail = new;
       
    } else {
        new->next = head;
        new->prev = tail;

        tail->next = new;
        head->prev = new;

        head = new;  // Update head to new node
    }
}

// Insert at the end
void End(int a) 
{
    new = (struct node*)malloc(sizeof(struct node));
    new->data = a;

    if (head == NULL) { // First node
        new->next = new;
        new->prev = new;
        head = tail = new;
    } 
    else 
    {
        new->next = head;
        new->prev = tail;

        tail->next = new;
        head->prev = new;

        tail = new; // Update tail to new node
    }
}

// Insert in the middle
void Middle(int a) 
{
    struct node *temp;
    int loc, i = 1, len;

    len = length();
    if (len == 0) 
    {
        printf("The list is Empty\n");
        return;
    }

    printf("Enter the location to be inserted: ");
    scanf("%d", &loc);

    if (loc > len || loc < 1) 
    {
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

    temp->next->prev = new;
    temp->next = new;
}

// Search for an element
void Search(int key) 
{
    struct node *temp = head;
    int pos = 1, found = 0;

    if (head == NULL) {
        printf("The list is empty. Cannot search.\n");
        return;
    }

    while (temp != tail) { 
        if (temp->data == key) {
            printf("Element %d found at position %d\n", key, pos);
            found = 1;
            break;
        }
        temp = temp->next;
        pos++;
    }

    if (temp->data == key) { // Check last node
        printf("Element %d found at position %d\n", key, pos);
        found = 1;
    }

    if (!found) {
        printf("Element %d not found in the list.\n", key);
    }
}

// Delete from the beginning
void DBegin() 
{
    if (head == NULL) {
        printf("The list is empty\n");
        return;
    }

    struct node *temp = head;

    if (head == tail) 
    { // Only one node
        free(head);
        head = tail = NULL;
    } 
    else 
    {
        head = head->next;
        tail->next = head;
        head->prev = tail;
        free(temp);
    }
}

// Delete from the middle
void DMid() 
{
    struct node *temp;
    int loc, i = 1, len;

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

    if (loc == 1) {
        DBegin(); // Use DBegin if deleting the first node
        return;
    }

    temp = head;
    while (i < loc) {
        temp = temp->next;
        i++;
    }

    if (temp == tail) { // If the last node is being deleted, use DEnd()
        DEnd();
        return;
    }

    temp->prev->next = temp->next;
    temp->next->prev = temp->prev;

    free(temp);
}

// Delete from the end
void DEnd() {
    if (head == NULL) {
        printf("The list is empty, nothing to delete.\n");
        return;
    }

    if (head == tail) { // Only one node
        free(head);
        head = tail = NULL;
        printf("Last node deleted, list is now empty.\n");
        return;
    }

    struct node *temp = tail;

    tail = tail->prev;
    tail->next = head;
    head->prev = tail;

    free(temp);

    printf("Last node deleted successfully.\n");
}

// Display the linked list
void Display() {
    struct node *temp;
    if (head == NULL) {
        printf("The list is empty\n");
        return;
    }

    temp = head;
    while (temp != tail) { 
        printf("%d <-> ", temp->data);
        temp = temp->next;
    }
    printf("%d <-> (Head)\n", temp->data); // Print last node

    printf("Total Elements: %d\n", length());
}
```


____
