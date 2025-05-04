---
title: "03 - Circular Singly Linked List -(Own Implementation)"
description: ""
summary: ""
date: 2025-01-01T16:00:52+05:30
lastmod: 2025-01-01T16:00:52+05:30
draft: false
weight: 269
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



#### Final Implementation

Refer to Doubly Circular List and Doubly Linked List for Break down of logic and Reasons for the code.

```c
#include <stdio.h>
#include <stdlib.h>

struct node
{
	int data;
	struct node *next;
}*head = NULL, *tail = NULL, *new=NULL;

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
	
	new->next = new;
	head = tail = new;
}
void inB(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	
	new->next = head;
	tail->next = new;
	
	head = new;
}
void inE(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;

	new->next = head;
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
	printf("\nEnter Position: ");
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
	int len = length();

	if(pos == -1)
		return;
	if(pos == 1)
	{
		inB(ele);
		return;
	}
	if(pos == len+1)
	{
		inE(ele);
		return;
	}

	struct node *temp = head;
	for(int i=2; i<pos ; i++)
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
		printf("\nNothing to Display\n");
		return;
	}

	int len = length();
	
	struct node *temp = head;
	for(int i = 0; i<len ; i++)
	{
		printf("%d -> ", temp->data);
		temp = temp->next;
	}

	printf(" Head\n\nList has %d Nodes", len );
}
void delB()
{
	struct node *temp = head;
	
	head = head->next;
	tail->next = head;
	
	free(temp);
}
void delE()
{
	// Need two Nodes to delete
	struct node* temp = tail;
	struct node *tempPrev = head;
	int len = length();
	
// using i=2, starts from head, stop just before Tail
// Gives Node just before Tail
	for(int i=2 ; i<len ; i++ )
	{
		tempPrev = tempPrev->next;
	}
//	while( tempPrev->next != tail)
//	{ tempPrev = tempPrev->next;}

	tail = tempPrev;
	tail->next = head;
	
	free(temp);
}
void delM()
{
	int pos = getPos();
	int len = length();
	
	if(pos == -1 || pos == len+1)
		return;

	if(pos == 1)
	{
		delB();
		return;
	}
	if(pos == len)
	{
		delE();
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
	if(head == NULL)
	{
		printf("\nNothing to Delete\n");
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
		printf("\nNo elements to search\n");
		return;
	}
	
	int ele;
	printf("\nEnter the number to be Searched: ");
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
		temp = temp->next;		
	}
	// if found still 0, No Match Found
	if(!found)
		printf("\nElement %d was not found.\n", ele);
}
```

____


### Almost Final

```c
#include <stdio.h>
#include <stdlib.h>

struct node
{
	int data;
	struct node *next;
}*head = NULL, *tail = NULL, *new=NULL;

void Inserter(int ch, int ele);
void Deleter(int ch);
void Display();
void Search();
int length();
int getPos();

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
	new->next = new;
	head = new;
	tail = new;
}
void inB(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	
	new->next = head;
	tail->next = new;
	head = new;

}
void inE(int ele)
{
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	
	tail->next = new;
	new->next = head;
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
		temp = temp->next;
		len++;
	}
	len++;
	return len;
}
int getPos()
{
	int len = length();

	int pos;
	printf("\nEnter Position: ");
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
	int i = 2;
	struct node *temp = head;
	while(i < pos)
	{
		temp = temp->next;
		i++;
	}
	new = (struct node*) malloc(sizeof(struct node));
	new->data = ele;
	
	new->next = temp->next;
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
	tail->next = head;
	
	free(temp);
}
void delE()
{
	struct node *tailPrev = head;
	while(tailPrev->next != tail)
	{
		tailPrev = tailPrev->next;
	}
	
	struct node* temp = tail;
	tailPrev->next = head;
	tail = tailPrev;
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
	int i = 2;
	struct node *temp = head;
	while( i < pos)
	{
		temp = temp->next;
		i++;
	}
	for (int i =2; i <pos; i++)
	{
		temp = temp->next
	}
	struct node *delNode = temp->next;
	
	temp->next = delNode->next;
	free(delNode); 
}
void Deleter(int ch)
{
	if(head == NULL)
	{
		printf("\nNothing to Delete\n");
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
		printf("\nNothing to Display\n");
		return;
	}
	struct node *temp = head;
	while(temp != tail)
	{
		printf("%d -> ", temp->data);
		temp = temp->next;
	}
	printf("%d", temp->data);
	printf("\nList has %d Nodes", length());
}
void Search()
{
	if(head == NULL)
	{
		printf("\nNo elements to search\n");
		return;
	}
	
	int ele;
	printf("\nEnter the number to be Searched: ");
	scanf("%d", &ele);

	struct node *temp = head;
	int pos = 1;
	
	while(temp != tail)
	{
		if(temp->data == ele)
		{
			printf("\nElement %d was found at position %d\n", ele, pos);
			return;
		}
		temp = temp->next;
		pos++;
	}
	if(temp->data == ele)
	{
		printf("\nElement %d was found at position %d\n", ele, pos);
		return;
	}

	printf("\nElement %d was not found\n", ele);
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
}*head=NULL, *new=NULL;
int len;


void Begin(int a) 
{
    struct node *temp;
    new = (struct node*)malloc(sizeof(struct node));
    new->data = a;

    if (head == NULL) 
    {  
        head = new;
        new->next = head; // Circular connection
    } 
    else 
    {
        temp = head;
        while (temp->next != head) 
        { 
            temp = temp->next;
        }
        new->next = head;  // New node points to the current head
        temp->next = new;  // Last node points to the new node
        head = new;        // Update head to new node
    }
}	
void End(int a) 
{
    struct node *temp;
    new = (struct node*)malloc(sizeof(struct node));
    new->data = a;

    if (head == NULL) 
    {  // If the list is empty
        head = new;
        new->next = head; // Circular connection
    } 
    else 
    {
        temp = head;
        while (temp->next != head) 
        {  // Traverse to the last node
            temp = temp->next;
        }
        temp->next = new;  // Last node points to new node
        new->next = head;  // New node points back to head (circular)
    }
}
int length() 
{
    struct node *temp = head;
    int count = 0;

    if (head == NULL) 
    {
        return 0; // If the list is empty, length is 0
    }

    while (temp->next != head) 
    {
    
        count++;
        temp = temp->next;
    }
    count++;

    return count;
}
void Display() 
{
    struct node *temp;
    if (head == NULL) 
    {
        printf("The List is Empty\n");
        return;
    }

    temp = head;
    printf("Circular Linked List: ");

    while (temp->next != head) 
    {  
        printf("%d --> ", temp->data);
        temp = temp->next;
    }
    printf("%d --> (back to head)\n\n", temp->data); 

    len = length();
    printf("The Total Elements == %d\n", len);
}

void Middle(int a) 
{
    struct node *newNode, *temp;
    int loc, i = 1;
    len = length(); 

    if (len == 0) 
    {
        printf("The list is empty. Cannot insert in the middle.\n");
        return;
    }

    printf("Enter the location to be inserted: ");
    scanf("%d", &loc);

    if (loc > len || loc < 1) // Ensure the position is valid
    {  
        printf("Invalid Location\n");
        return;
    }

    temp = head;
    while (i < loc) // Traverse to the node before the desired position
    { 
        temp = temp->next;
        i++;
    }

    
    new = (struct node*)malloc(sizeof(struct node));
    new->data = a;

  
    new->next = temp->next;
    temp->next = new;

    printf("Node inserted successfully at position %d\n", loc);
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

    while (temp->next != head) 
    { // Traverse until the last node
        if (temp->data == key) 
        {
            printf("Element %d found at position %d\n", key, pos);
            found = 1;
            break;
        }
        temp = temp->next;
        pos++;
    }

    // Check the last node after exiting the loop
    if (temp->data == key && !found) 
    {		
        printf("Element %d found at position %d\n", key, pos);
        found = 1;
	}
}

void DBegin() 
{
    struct node *temp, *last;

    if (head == NULL) // Check if the list is empty
    {  
        printf("The list is empty. Cannot delete.\n");
        return;
    }

    if (head->next == head)  // If there's only one node in the list
    {  
        free(head);
        head = NULL;
        printf("The last node is deleted, and the list is now empty.\n");
        return;
    }

    temp = head;  

    // Find the last node in the circular linked list
    last = head;
    while (last->next != head) 
    {
        last = last->next;
    }

    // Update head to the next node
    head = head->next;
    last->next = head; // Maintain circularity

    free(temp);  // Delete the old head
    printf("First node deleted successfully.\n");
}


void DMid() 
{
    struct node *temp, *nextnode;
    int loc, i = 1;
    len = length(); 

    if (len == 0) {
        printf("The list is empty. Cannot delete.\n");
        return;
    }

    printf("Please enter the position to delete: ");
    scanf("%d", &loc);

    if (loc > len || loc < 1) {  
        printf("Invalid Location\n");
        return;
    }

    // If deleting the first node (use separate function for head deletion)
    if (loc == 1) {
        DBegin(); // Call the function to delete from the beginning
        return;
    }

    temp = head;
    while (i < loc - 1) // Traverse to the node before the one to be deleted
    { 
        temp = temp->next;
        i++;
    }

    nextnode = temp->next; // Node to be deleted
    temp->next = nextnode->next; // Adjust the link to skip the deleted node

    free(nextnode); // Free the memory of the deleted node

    printf("Node at position %d deleted successfully.\n", loc);
}

void DEnd() 
{
    struct node *temp = head, *prev;

    if (head == NULL) // Check if the list is empty
    {  
        printf("The list is empty, nothing to delete.\n");
        return;
    }

    // If there is only one node in the list
    if (head->next == head) 
    {  
        free(head);
        head = NULL;
        printf("Last node deleted, list is now empty.\n");
        return;
    }

    // Traverse to the second last node
    while (temp->next != head) {
        prev = temp;
        temp = temp->next;
    }

    prev->next = head; // Update second last node to point to head (maintain circularity)
    free(temp); // Free memory of the last node

    printf("Last node deleted successfully.\n");
}

void main()
{
	int a;
	
	while(1)
	{
		int ch;
		printf("\n1.Insert Begining\n");
		printf("2. Insert Middle \n");
		printf("3. Insert End \n");
		printf("4. Display \n");
		printf("5. Search \n");
		printf("6. Delete Begining \n");
		printf("7. Delete Middle \n");
		printf("8. Delete End \n");
		printf("\nEnter choice: ");
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
			case 7: DMid();
				break;
			case 8: DEnd();
				break;
            default:
                printf("Enter the choice Correctly\n");
                break;
		}
		
		
	}
	

}
```
