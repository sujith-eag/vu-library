---
title: "08 - Binary Tree (Recursive)"
description: ""
summary: ""
date: 2025-01-01T16:00:52+05:30
lastmod: 2025-01-01T16:00:52+05:30
draft: false
weight: 274
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

struct Node 
{
    int data;
    struct Node *left, *right;
};

// Function to create a new node
struct Node* createNode(int value) 
{
    struct Node *new;
    new = (struct Node*)malloc(sizeof(struct Node));
    new->data = value;
    new->left = NULL;
    new->right = NULL;
    return new;
}

// Function to insert a node into the binary tree
struct Node* insertNode(struct Node* root, int value) 
{
    if (root == NULL) {
        return createNode(value);
    }

    char choice;
    printf("Insert %d to the left or right of %d? (l/r): ", value, root->data);
    scanf(" %c", &choice);
    // The one space is crucial

    if (choice == 'l' || choice == 'L') {
        root->left = insertNode(root->left, value);
    } else {
        root->right = insertNode(root->right, value);
    }

    return root;
}

// Inorder Traversal (Left, Root, Right)
void inorderTraversal(struct Node* root) 
{
    if (root != NULL) 
    {
        inorderTraversal(root->left);
        printf("%d --> ", root->data);
        inorderTraversal(root->right);
    }
}

// Preorder Traversal (Root, Left, Right)
void preorderTraversal(struct Node* root) 
{
    if (root != NULL) 
    {
        printf("%d --> ", root->data);
        preorderTraversal(root->left);
        preorderTraversal(root->right);
    }
}

// Postorder Traversal (Left, Right, Root)
void postorderTraversal(struct Node* root) 
{
    if (root != NULL) 
    {
        postorderTraversal(root->left);
        postorderTraversal(root->right);
        printf("%d --> ", root->data);
    }
}

// Main function
int main() 
{
    struct Node* root = NULL;
    int choice, value;

    while (1) 
    {
        printf("\n1. Insert Node");
        printf("\n2. Inorder Traversal");
        printf("\n3. Preorder Traversal");
        printf("\n4. Postorder Traversal");
        printf("\n5. Exit");
        printf("\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice) 
        {
            case 1:
                printf("Enter value to insert: ");
                scanf("%d", &value);
                root = insertNode(root, value);
                break;

            case 2:
                printf("\nInorder Traversal: ");
                inorderTraversal(root);
                printf("NULL\n");
                break;

            case 3:
                printf("\nPreorder Traversal: ");
                preorderTraversal(root);
                printf("NULL\n");
                break;

            case 4:
                printf("\nPostorder Traversal: ");
                postorderTraversal(root);
                printf("NULL\n");
                break;

            case 5:
                exit(0);

            default:
                printf("\nInvalid choice! Try again.\n");
        }
    }
    return 0;
}
```



____


```c
#include <stdio.h>
#include <stdlib.h>

struct node 
{
	int data;
	struct node *left;
	struct node *right;
};

struct node* insertNode(struct node* root, int value);
struct node* createNode(int value);
void inorderTraversal(struct node* root);
void preorderTraversal(struct node* root);
void postorderTraversal(struct node* root);

int main()
{
	struct node* root = NULL;
	int choice, value;
	
	while(1)
	{
		printf("\n1.Insert\t2.Inorder\t3.Preorder\t4.Postorder\t5.Exit\n");
		printf("Enter yout Choice: ");
		
		scanf("%d", &choice);
		
		switch(choice)
		{
			case 1:
				printf("Enter value: ");
				scanf("%d", &value);
				root = insertNode(root, value);
				break;
			case 2:
				printf("InorderTraversal: ");
				inorderTraversal(root);
				printf("\n");
				break;
			case 3:
				printf("PreOrderTraversal: ");
				preorderTraversal(root);
				printf("\n");
				break;
			case 4:
				printf("PostOrderTraversal: ");
				postorderTraversal(root);
				printf("\n");
				break;
			case 5:
				exit(0);
			default:
				printf("Enter a Valid Choice\n");
		}
	}
	return 0;
}
struct node* insertNode(struct node* root, int value)
{
	if(root == NULL)
	{
		return createNode(value);
	}
	
	char ch;
	printf("Insert %d to left or right of %d. (l/r): ", value, root->data);
	scanf(" %c", &ch);

	if(ch == 'l' || ch == 'L')
	{
		root->left = insertNode(root->left, value);
	}
	else
	{
		root->right = insertNode(root->right, value);
	}
	return root;

}
struct node* createNode(int value)
{
	struct node* new;
	new = (struct node*) malloc(sizeof(struct node));
	new->data = value;
	new->left = NULL;
	new->right = NULL;
	return new;
}
void inorderTraversal(struct node* root)
{
	if(root!= NULL)
	{
		inorderTraversal(root->left);
		printf("%d ->", root->data);
		inorderTraversal(root->right);
	}
}
void preorderTraversal(struct node* root)
{
	if(root!=NULL)
	{
		printf("%d ->", root->data);
		preorderTraversal(root->left);
		preorderTraversal(root->right);
	}
}
void postorderTraversal(struct node* root)
{
	if(root!=NULL)
	{
		postorderTraversal(root->left);
		postorderTraversal(root->right);
		printf("%d ->", root->data);
	}
}
```


____


