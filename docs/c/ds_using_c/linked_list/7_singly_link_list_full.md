---
title: "02 - Singly Linked List - Full (Own Implementation)"
description: ""
summary: ""
date: 2025-01-01T16:00:52+05:30
lastmod: 2025-01-01T16:00:52+05:30
draft: false
weight: 268
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



```c
#include <stdio.h>
#include <stdlib.h>

struct node 
{
	int data;
	struct node* next;
} *head = NULL, *tail=NULL, *new = NULL;

void Inserter(int ch, int ele);
void Deleter(int ch);
void Display();
void Search();
int Length();


void main()
{
	int ch, ele;
	
	while(1)
	{
		printf("#############################################################");
		printf("\n\t\t\t0: Exit\n");
		printf("Insert at Position\t1: Beginning\t2: Position\t3: End\n");
		printf("Delete from position\t4: Beginning\t5: Position\t6: End\n");
		printf("\t\t\t7: Display List\t\t8: Search Value\n");
		printf("#############################################################\n");
		printf("Choice:\t");
		scanf("%d", &ch);
		
		printf("\n");

		switch(ch)
		{
			case 0: exit(0);
			case 1:
			case 2:
			case 3:
				printf("\nEnter the value to Insert: ");
				scanf("%d", &ele);
				Inserter(ch, ele);  printf("\n\n");
			case 7:
				Display(); break;
			case 4:
			case 5:
			case 6:
				Deleter(ch);
				Display();
				break;
			case 8:
				Search(); 
				break;	
			default:
				printf("Not a Valid Choice, try again.\n");
		}
		printf("\n");
	}
}
void FirstNode(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	
	new->next = NULL;  // No other nodes exist
	head = tail = new;
}
void InsertAtBeginning(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	
	new->next = head;
	head = new;
}
void InsertAtEnd(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	
	new->next = NULL;
	tail->next = new;
	
	tail = new;
}
int Length()
{
	if(head == NULL)
		return 0;

	if(head == tail)
		return 1;

	struct node *temp = head;
	int len = 0;	
	while( temp != NULL ) // till end
	{
		len++;
		temp = temp->next;
	}
	// NULL used, no need for len++
	return len;
}
int GetPos()
{	
	int len = Length();
	int pos;
	printf("\nEnter the Position: ");
	scanf("%d", &pos);
	 
	if(pos <= 0 || pos > len+1) //
	{
		printf("\nInvalid Position\n");
		return -1;
	}
	return pos;
}
void InsertAtPosition(int ele)
{
	int pos = GetPos();
	int len = Length();

	if (pos == -1)
		return;
		
	if( pos == 1)
	{
		InsertAtBeginning(ele);
		return;
	}
	if (pos == len+1)
	{
		InsertAtEnd(ele);
		return;
	}
	
	struct node* temp = head; 
	for(int i =2 ; i<pos ; i++)
	{
		temp = temp->next;
	}
	
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;

	new->next = temp->next;
	temp->next = new;
}
void Inserter(int ch, int ele)
{	
	if (head == NULL) // If No elements
	{
		FirstNode(ele);  // Make first node
		return;
	}
	switch(ch)
	{
		case 1: 
			InsertAtBeginning(ele); break;
		case 2: 
			InsertAtPosition(ele); break;
		case 3: 
			InsertAtEnd(ele); break;
	}
}

void Display()
{
	if (head == NULL)
	{
		printf("\nNothing to Display\n");
		return;
	}

	int len = Length();
	
	struct node* temp = head;
	while(temp != NULL)  // to stop on last node
	{
		printf( "%d-->", temp->data );
		temp = temp->next;
	}
	
	printf("Null\n");
	printf("\nList has %d Elements.\n\n", len );
}
void DelB()
{	
	struct node *temp = head;
	
	head = head->next;
	free(temp);
}
void DelE()
{
	struct node *temp = tail;
	struct node* tempPrev = head;
	int len = Length();
	
	for(int i=2 ; i<len ; i++ )
	{
		tempPrev = tempPrev->next;
	}
	
	tail = tempPrev;
	tail->next = NULL;
	
	free(temp);
}

void DelM()
{
	int pos = GetPos();
	int len = Length();
	
	if(pos == -1 || pos == len+1)
		return;
		
	if(pos == 1)
	{
		DelB();
		return;
	}
	if(pos == len)
	{
		DelE();
		return;
	}

	struct node *temp = head;
	for (int i=2; i<pos; i++)
	{
		temp = temp->next;
	}
	// Node Next to temp has to be deleted 
	struct node *delNode = temp->next;
	
	temp->next = delNode->next;
	free(delNode);
}
void Deleter(int ch)
{
	if( head == NULL )
	{
		printf("\nNothing to delete\n");
		return;
	}	
	if ( head == tail )
	{	
		struct node* temp = head;
		head = tail = NULL;
		free(temp);
		printf("\t>>This List is Empty now\n");
		return;
	}
	// more than 1 nodes exist
	switch(ch)
	{
		case 4: DelB(); break;
		case 5: DelM(); break;
		case 6: DelE(); break;
	}
}
void Search()
{
	if(head == NULL)
	{
		printf("\nNo elements to search\n");
		return;
	}
	
	int ele;
	printf("\nEnter the value to be Searched: ");
	scanf("%d", &ele);

	int found = 0;
	struct node *temp = head;
	
	for(int i=0 ; i<Length() ; i++)
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

#### Singly Linked List Own Implementation (First Try)

The goal of this implementation is to streamline the logic by separating the core operations from redundant checks and basic actions by introducing helper functions which are created when needed.

Main functions just handle the main logic of creating, deleting, and updating nodes while Helper functions can handle the validations and basic actions (like memory allocation, empty checks, and position validation) separately from the main logic, keeping the code simple, linear without too many nested edge case checks. 

Priority also given to Presentation and Clarity of display after operations. 


```c
#include <stdio.h>
#include <stdlib.h>

struct node 
{
	int data;
	struct node* next;
} *head = NULL, *new = NULL;

typedef struct node Node;   
// assigning 'Node' as alias for 'struct node'

void CreateNode(int ele, int ch);  // Filter Function for Creating
void FirstNode(int ele);          // If No nodes exist
void InsertAtBeginning(int ele);
void InsertAtPosition(int ele);
int GetPos();    // Get Position input and check conditions
int Length();   // Returns length
void InsertAtEnd(int ele);
Node* LastNode();   // Iterates and return last node

void Display();
void DeleteNode(int ch);   // Filter Function for Deletion
void PrintDel(int ele);   // Prints Deleted value
int isEmpty(); 
void DelFirst();        // When only one element exists
void DelB();
void DelM();
void DelE();
void Search(int ele);


void main()
{
	int ele;
	
	while(1)
	{
		int ch;
		printf("#############################################################");
		printf("\n\t\t\t0: Exit\n");
		printf("Insert at Position\t1: Beginning\t2: Position\t3: End\n");
		printf("Delete from position\t4: Beginning\t5: Position\t6: End\n");
		printf("\t\t\t7: Display List\t\t8: Search Value\n");
		printf("#############################################################\n");
		printf("Choice:\t");
		scanf("%d", &ch);

		switch(ch)
		{
			case 0: exit(0);
			case 1:
			case 2:
			case 3:
				CreateNode(ele, ch);  printf("\n\n");
			case 7:
				Display(); break;
			case 4:
			case 5:
			case 6:
				DeleteNode(ch); break;
			case 8:
				Search(ele); break;	
			default:
				printf("Not a Valid Choice, try again.\n");
		}
		printf("\n");
	}
}

void CreateNode(int ele, int ch)
{
	printf("Enter the number to be inserted: ");
	scanf("%d", &ele);
	
	if (head == NULL) // If No elements
	{
		FirstNode(ele);  // Make first node
		return;
	}
	// If atleast one node exists, check and insert
	switch(ch)
	{
		case 1: InsertAtBeginning(ele); break;
		case 2: InsertAtPosition(ele); break;
		case 3: InsertAtEnd(ele); break;
	}
}

void FirstNode(int ele)
{
	new = (Node*) malloc(sizeof(Node));
	new->data = ele;
	
	new->next = NULL;  // No other nodes exist
	head = new;
}

void InsertAtBeginning(int ele)
{
	new = (Node*) malloc(sizeof(Node));
	new->data = ele;
	
	new->next = head;
	head = new;
}

void InsertAtPosition(int ele)
{
	int pos = GetPos();   // Getting input of position

	if (pos == -1)
		return;
		
	if( pos == 0)
	{
		InsertAtBeginning(ele);
		return;
	}
	if (pos == length()+1)
	{
		InsertAtEnd(ele);
		return;
	}

	new = (Node*) malloc(sizeof(Node));
	new->data = ele;

	int i = 1;  // temp is at head so at position 1
	Node* temp = head; 
	while( i < pos) // pos-1  ??
	{
		i++;
		temp = temp->next;
	}
	new->next = temp->next;
	temp->next = new;
}

int GetPos()
{	
	int len = Length();
	int pos;
	printf("Enter the Position: ");
	scanf("%d", &pos);

	// If value is negative, 0 or More than last insert point. 
	if(pos < 0 || pos > len+1)  // len+1 to allow insert and delete at end
	{
		printf("Position is larger than the length\n");
		return -1;
	}
	return pos;
}

int Length()
{
	int count = 0;
	Node*temp = head;
	
	while( temp != NULL )  // till end
	{
		count++;
		temp = temp->next;
	}
	return count;
}

void InsertAtEnd(int ele)
{
	new = (Node*) malloc(sizeof(Node));
	new->data = ele;
	new->next = NULL;

	Node* temp = LastNode();
	temp->next = new;
}

Node* LastNode()
{
	Node *temp;
	temp = head;
	while(temp->next != NULL)   // to stop on last node
	{
		temp = temp->next;
	}
	return temp;
}

void Display()
{
	if (head == NULL)
	{
		printf("No Elelemts to Display, Add something first\n");
		return;
	}
	
	Node* temp = head;
	
	while(temp->next != NULL)  // to stop on last node
	{
		printf( "%d-->", temp->data );
		temp = temp->next;
	}
	printf("%d  List has %d Elements.\n\n", temp->data, Length() );
// the first %d is to print the last element without ->

}

void DeleteNode(int ch)
{
	if( isEmpty() ) return;
	
	if ( head->next == NULL )  // single element
	{	
		DelFirst();
		return;
	}

	// more than 1 nodes exist
	switch(ch)
	{
		case 4: DelB(); break;
		case 5: DelM(); break;
		case 6: DelE(); break;
	}
}

int isEmpty()
{
	if( head == NULL )
	{
		printf("This list Has No Elements\n");
		return 1;
	}
	return 0;
}

void DelFirst()
{
	Node* temp = head;
		PrintDel(temp->data);  // printing the deleted value
	head = NULL;
	free(temp);

	printf("\t>>This List is Empty now\n");
}

void DelB()
{	
	Node* temp = head;
		PrintDel(temp->data);
	head = head->next;
	free(temp);
	
	printf("\n"); Display();
}

void PrintDel(int ele)
{	
	printf("\n");
	Display();
	printf("\t>>>>Element %d has been Deleted from this list\n",ele);
}

void DelM()
{
	Node* temp = head;
	Node* prev;
	int pos = GetPos();

	while( pos != 1 )  // iterate till given point
	{
		prev = temp;
		temp = temp->next;
		pos--;
	}
	
	prev->next = temp->next;
		PrintDel(temp->data);
	free(temp);
	
	printf("\n"); Display();
}

void DelE()
{
	Node* temp = head; 
	Node* prev;
	
	while(temp->next != NULL) // iterate to last node
	{
		prev = temp;
		temp = temp->next;
	}	
	prev->next = NULL;
		PrintDel(temp->data);
	free(temp);
	
	printf("\n"); Display();
}

void Search(int ele)
{
	if( isEmpty() )
		return;

	printf("Enter the value to Search: ");
	scanf("%d", &ele);
	
	Node* temp = head;
	
	int pos = 1;   // to find index of value
	while (temp != NULL)  // traverse till end
	{
		if(temp->data == ele)
		{
			printf("The value %d is in Position %d.\n",ele, pos);
			return;
		}
		temp = temp->next;
		pos++;
	}
	printf("The Value %d was not found in the list", ele);
}

```

___

### Program Overview and General Logic:

This program implements a **single linked list** in C, allowing the user to perform various operations on the list, such as inserting, deleting, displaying, and searching for nodes.

A linked list is a linear data structure where each element (node) points to the next one, making it easier to insert or delete elements without needing to reorganize the entire structure, unlike arrays. Here, the list is implemented with nodes where each node has two parts:

1. **Data**: The actual value stored in the node.
2. **Next**: A pointer that refers to the next node in the list.

### Functions and Their Descriptions:

#### 1. **CreateNode()**:

This function handles node creation based on the choice the user makes (insertion at beginning, position, or end).

- It asks for the value to insert.
- If the list is empty (i.e., `head == NULL`), it creates the first node using `FirstNode()`.
- Otherwise, it calls the appropriate function (`InsertAtBeginning()`, `InsertAtPosition()`, `InsertAtEnd()`) based on user input.

#### 2. **FirstNode()**:

- Creates the first node when the list is empty.
- Allocates memory dynamically for the node, sets its `data`, and its `next` pointer to `NULL` (because it's the only node in the list).
- Sets the `head` pointer to this new node.

#### 3. **InsertAtBeginning()**:

- Inserts a new node at the beginning of the list.
- Allocates memory for the new node, sets its `data`, and sets its `next` pointer to the current `head`.
- Updates `head` to point to the new node, making it the first node in the list.

#### 4. **InsertAtPosition()**:

- Inserts a new node at a specific position in the list.
- It first checks the position using `GetPos()`, which validates if the position is within a valid range.
- If the position is valid, it traverses the list to the node just before the desired position.
- The new node's `next` pointer is set to the node after the desired position, and the previous node's `next` pointer is updated to point to the new node.

#### 5. **GetPos()**:

- Prompts the user to enter the position where a node should be inserted or deleted.
- It checks if the position is valid (greater than 0 and within the bounds of the list, which is `length + 1` to allow insertion at the end).
- Returns the valid position if entered correctly; otherwise, it returns 0 to indicate an invalid position.

#### 6. **Length()**:

- Traverses the linked list from the `head` and counts the number of nodes in the list.
- Returns the length (count of nodes) of the list.

#### 7. **InsertAtEnd()**:

- Inserts a new node at the end of the list.
- Allocates memory for the new node and sets its `next` pointer to `NULL`.
- It finds the last node of the list using `LastNode()` and updates its `next` pointer to point to the new node.

#### 8. **LastNode()**:

- Traverses the list starting from the `head` until it finds the last node (the node whose `next` pointer is `NULL`).
- Returns the pointer to the last node.

#### 9. **Display()**:

- Prints all the elements in the list.
- Traverses from the `head`, printing the `data` of each node, followed by a `-->` to represent the linkage.
- If the list is empty, it prints a message informing the user that there are no elements to display.

#### 10. **DeleteNode()**:

- Determines the deletion operation based on the input (`ch`).
- It first checks if the list is empty using `isEmpty()`.
- If the list has only one node, it calls `DelFirst()` to remove the first node.
- Otherwise, it calls the appropriate delete function (`DelB()`, `DelM()`, `DelE()`) based on the user's choice.

#### 11. **PrintDel()**:

- Prints the element being deleted and updates the display.
- It is called after a node is deleted to show the updated list and confirm the deletion of the specified node.

#### 12. **isEmpty()**:

- Checks if the list is empty by checking if `head` is `NULL`.
- Returns 1 (true) if the list is empty, otherwise 0 (false).

#### 13. **DelFirst()**:

- Deletes the only node in the list when the list has only one element.
- Frees the memory allocated for the node and sets `head` to `NULL`, effectively emptying the list.

#### 14. **DelB()**:

- Deletes the first node in the list.
- It updates the `head` pointer to the second node (i.e., `head = head->next`) and frees the memory allocated to the original first node.

#### 15. **DelM()**:

- Deletes a node at a specified position.
- First, it gets the position using `GetPos()`.
- Then, it traverses the list to find the node just before the specified position and updates its `next` pointer to skip the node being deleted.
- It frees the memory allocated for the deleted node.

#### 16. **DelE()**:

- Deletes the last node in the list.
- It traverses to the last node (the one with `next == NULL`), updates the second-to-last node's `next` pointer to `NULL`, and frees the memory for the last node.

#### 17. **Search()**:

- If list is not empty, Gets the value of `ele` 
- Searches for a node with a specific value (`ele`).
- Traverses the list from the `head` and compares the `data` of each node with the target value.
- If a match is found, it prints the position of the node. If not, it informs the user that the value was not found in the list.



____

### Provided Code

```c
#include<stdio.h>
#include<stdlib.h>
struct node
{
	int data;
	struct node *next;
}*head=NULL, *new=NULL;
int len;


void Begin(int a)
{
	new = (struct node*)malloc(sizeof(struct node));
	new->data = a;
	new->next=NULL;
	if(head==NULL)
	{
		head= new;
	}
	else
	{
		new->next=head;
		head = new;
	}
	
}	

void End(int a)
{
	struct node *temp=NULL;
	new = (struct node*)malloc(sizeof(struct node));
	new->data = a;
	new->next = NULL;
	temp = head;
	while(temp->next!=NULL)
	{
		temp = temp->next;
	}
	temp->next=new;
}
	
int length()
{
	struct node *temp;
	int count=0;
	
	temp = head;
	while(temp!=NULL)
	{
		count++;
		temp=temp->next;
	}
	return count;
}

void Middle(int a)
{
	struct node *p, *temp;
	int loc, i =1;
	len = length();
	if(len==0)
	{
		printf("The list is Empty \n");
	}
	else
	{
		printf("Entet he location to be Added ");
		scanf("%d", &loc);
		if(loc>len)
		{
			printf("Invalid Location \n");
		}
		else
		{
			temp = head;
			while(i<loc)
			{
				temp=temp->next;
				i++;
			}
			new = (struct node*)malloc(sizeof(struct node));
			new->data = a;
			new->next = temp->next;
			temp->next = new;
		}
	}
}

void Search(int key)
{
    struct node *temp = head;
    int pos = 1, found = 0;

    if (head == NULL)
    {
        printf("The list is empty. Cannot search.\n");
        return;
    }
	else
	{
		while (temp != NULL)
		{
			if (temp->data == key)
			{
				printf("Element %d found at position %d\n", key, pos);
				found = 1;
				break;
			}
			temp = temp->next;
			pos++;
		}
	}
    if (!found)
    {
        printf("Element %d not found in the list.\n", key);
    }
}

void DBegin()
{
	struct node *temp;
	temp = head;
	head = head->next;
	free(temp);
	if(head==NULL)
	{
		printf("The list is empty\n");
	}
}
void DEnd()
{
	struct node *temp = head, *prev;
	if (head == NULL) 
	{
        printf("The list is empty, nothing to delete.\n");
        return;
    }

    // If there is only one node in the list
    if (head->next == NULL) 
    {
        free(head);
        head = NULL;
        printf("Last node deleted, list is now empty.\n");
        return;
    }

    // Traverse to the second last node
    while (temp->next != NULL) 
    {
        prev = temp;
        temp = temp->next;
    }

    prev->next = NULL; // Remove the last node
    free(temp); // Free memory
    printf("Last node deleted successfully.\n");
}
void DMiddle()
{
	int pos,i;
	printf("Enter the position to be deleted \n");
	scanf("%d", &pos);
	struct node *temp;
	temp = head;
	for(i=0;i<pos-1; i++)
	{
		temp=temp->next;
	}
	temp->next=temp->next->next;
}

void Display()
{
	struct node *temp;
	if(head==NULL)
	{
		printf("The List is MT \n");
		
	}
	else
	{
		temp = head;
		while(temp!=NULL)
		{
			printf("%d-->", temp->data);
			temp=temp->next;
		}
		printf("\n\n");
		len = length();
		printf("The Total Elements == %d \n", len);
	}
}	
void main()
{
	int a;
	
	while(1)
	{
		int ch;
		printf("\n1.Begining\n");
		printf("2.Middle\n");
		printf("3. End \n");
		printf("4. Display \n");
		printf("5. Search \n");
		printf("6. Delete Begining \n");
		printf("7. Delete End \n");
		printf("\nEnter choice: "); // Add one for midle
		scanf("%d",&ch);
		switch(ch)
		{
			case 1:
				printf("Enter the element to be inserted \n");
				scanf("%d", &a);
				Begin(a);
				break;
			case 2:
				printf("Enter the element to be inserted \n");
				scanf("%d", &a);
				Middle(a);
				break;
			case 3:
				printf("Enter the element to be inserted \n");
				scanf("%d", &a);
				End(a);
				break;
			case 4: Display();
					break;
					
			case 5:  // Search case
                printf("Enter the element to search: \n");
                scanf("%d", &a);
                Search(a);
                break;
            case 6: DBegin();
				 break;
			case 7: DEnd();
				break;
            default:
                printf("Enter the choice Correctly\n");
                break;
		}
		
		
	}
	

}
```


____


