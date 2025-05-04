---
title: "07 - Queue Using Linked List"
description: ""
summary: ""
date: 2025-01-01T16:00:52+05:30
lastmod: 2025-01-01T16:00:52+05:30
draft: false
weight: 273
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
    struct node *next;
} *front = NULL, *rear = NULL;

void enqueue(int e) 
{
    struct node* new = (struct node*)malloc(sizeof(struct node));
    if (new == NULL) 
    {
        printf("Queue is Full\n");
        return;
    }
    new->data = e;
    new->next = NULL;
    if (rear == NULL) 
    {
        front = rear = new;
    } 
    else 
    {
        rear->next = new;
        rear = new;
    }
    printf("******************************************************\n");
    printf("\nElement %d is Enqueued \n", e);
    printf("******************************************************\n");
}

void dequeue() 
{
    if (front == NULL) 
    {
        printf("******************************************************\n");
        printf("Queue is Underflow \n");
        printf("******************************************************\n");
    } 
    else 
    {
        struct node* temp = front;
        printf("******************************************************\n");
        printf("Element %d is Dequeued \n", front->data);
        printf("******************************************************\n");
        front = front->next;
        if (front == NULL) 
        {
            rear = NULL;
        }
        free(temp);
    }
}

void peek() 
{
    if (front == NULL) 
    {
        printf("******************************************************\n");
        printf("Queue is Underflow \n");
        printf("******************************************************\n");
    } 
    else 
    {
        printf("******************************************************\n");
        printf("The Front Element is %d\n", front->data);
        printf("******************************************************\n");
    }
}

void display() 
{
    if (front == NULL) 
    {
        printf("Queue is Empty \n");
    } 
    else 
    {
        struct node* temp = front;
        printf("Elements of Queue are \n");
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
        printf("\n\n1->Enqueue element \t2->Dequeue element \n3->Peek \t\t4->Display \n5->Exit\n");
        printf("\nEnter choice:\n");
        scanf("%d", &ch);
        switch (ch) {
            case 1:
                printf("Enter the element to be enqueued \n");
                scanf("%d", &e);
                enqueue(e);
                break;
            case 2:
                dequeue();
                break;
            case 3:
                peek();
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



_____

