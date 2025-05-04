---
title: "01 - Stack Operations"
description: ""
summary: ""
date: 2025-01-01T16:00:28+05:30
lastmod: 2025-01-01T16:00:28+05:30
draft: false
weight: 262
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



### Variables Logic

1. `int n`: The size of the stack (input by the user).
2. `int top=-1`: A variable to track the top of the stack. Initially set to `-1` to represent an empty stack.

The variables `n` and `top` are declared globally so they can be accessed by all functions for stack operations and for condition verification.

3. `stack[n]`: An array declared locally inside the `main()` function to hold the stack elements.
4. `e`: A temporary variable used to capture the element that is being pushed onto the stack.
5. `int ch`: A variable to capture the user's choice for selecting the stack operation (Push, Pop, Peep, Display, Exit).
___

## Logic of Implementation

**Global Declaration of Variables**:
- `n` and `top = -1` are declared globally to handle the stack's size and top index throughout the functions.

**Main Function**:
- The user is prompted to enter the size of the stack, which is stored in `n`.
- The stack `stack[n]` is defined based on the size `n`. 
* `e` to capture the input data is declared to pass to the `push` function.
- A `while(1)` loop is used to repeatedly display the menu and capture the user's choice (`ch`) to perform the corresponding stack operation.
- The program will continue running until the user chooses to exit.

**Choice Handling**:    
- The `ch` variable captures the user's input for the stack operation they want to perform (Push, Pop, Peep, Display, or Exit).
- The input choice is passed to a `switch` or `if-else` block to determine the appropriate function to call.

**Exit Condition**:    
- A choice of `0` (Exit) will trigger an exit from the loop using `exit(0)`.

### Stack Operations

#### Push      
* If push was the `ch` choice, then the `e` to be pushed has to be captured.
* push needs the `stack` and the item entered in `e` as parameters.
* Edge case - stack full-  checking if `top` is at max of stack size `n` when `top == n-1`
* otherwise increment top to next position `top++` and assign `e` in that place in the stack.
* Print that the element has been pushed into stack.

#### Pop      
* If pop was the choice in `ch`, then just call pop with just the stack as parameter.
* Edge case - Stack is empty - checking if `top == -1`
* If not empty, take the element at the place of `top` by `stack[top]`. Print it as popped.
* Decrement the top with `top--`

#### Peep     
* If option was peep, call peep with `stack` as parameter.
* Edge case - Stack is empty - Checking with `top == -1`
* else, Printing `stack[top]`
* No decrement.

#### Display     
* If choice was display, call with `stack` as parameter.
* Edge case - Stack not empty - Checking with `top == -1`
* else, Using a for loop to get each element by traversal.
* `top` cannot be decremented so assigning top to `i`, that value is decremented till it is `-1`
* `for (int i = top; i>-1; i--)`
* Print element as `stack[i]`

***Default case*** or ***else*** when no case or condition is matched, re-run the loop to get valid choice.

Choice to exit the program, using `exit(0)` for some case or condition.    
`#include <stdlib.h>` has to be there for the `exit` function.     
(or flag can be used to call `break` outside switch case for the while loop)

To reduce three checks and print for if the stack is empty, `isempty()` is called to check if `top == -1` and print `it is empty` and return `1` if not empty return `0`.
`if (! isempty)` return true when not empty, then code inside will run.

___

## Implementation 1 (Using Switch Case)

```c
#include <stdio.h>
#include <stdlib.h>

int n, top = -1;  // global variables for stack size and top position

// Function declarations
void push(int stack[], int x);
void pop(int stack[]);
void peep(int stack[]);
void display(int stack[]);
int isempty();

// Main function
void main()
{
    // Input the size of the stack
    printf("Enter the size of the stack: \n");
    scanf("%d", &n);
    
    int stack[n], e;  // Local stack array and element to push

    // Menu-driven loop for stack operations
    while(1)
    {
        int ch;  // Choice variable
        printf("\nEnter the choice - \n");
        printf("0 : Exit,\n");
        printf("1 : Push,\t2 : Pop,\n");
        printf("3 : Peep,\t4 : Display\n");
        scanf("%d", &ch);

        switch(ch) 
        {
            case 0:
                exit(0);  // Exit the program
                break;
            case 1:
                printf("\nEnter the number to be pushed: \n");
                scanf("%d", &e);
                push(stack, e);  // Push the element to the stack
                break;
            case 2:
                pop(stack);  // Pop the element from the stack
                break;
            case 3:
                peep(stack);  // Display the top element without removing
                break;
            case 4:
                display(stack);  // Display all elements in the stack
                break;
            default:
                printf("\nInvalid choice. Please try again.\n");  // Handle invalid choices
                break;
        }
    }
}

// Function to check if the stack is empty
int isempty()
{
    if (top == -1)
    {
        printf("\nThe Stack is Empty\n");
        return 1;  // Stack is empty
    }
    return 0;  // Stack is not empty
}

// Function to push an element onto the stack
void push(int stack[], int x)
{
    if (top == n - 1)  // Check if the stack is full
    {
        printf("Stack is full. Cannot push %d.\n", x);
    }
    else
    {
        stack[++top] = x;  // Increment top and push the element
        printf("\nThe element %d is pushed into the stack.\n", x);
    }
}

// Function to pop an element from the stack
void pop(int stack[])
{
    if (!isempty())  // Check if stack is not empty
    {
        printf("\nThe number %d has been popped.\n", stack[top]);
        top--;  // Decrease top position after popping
    }
}

// Function to display the top element without popping
void peep(int stack[])
{
    if (!isempty())  // Check if stack is not empty
    {
        printf("\nThe number at the top is %d.\n", stack[top]);
    }
}

// Function to display all elements in the stack
void display(int stack[])
{
    if (!isempty())  // Check if stack is not empty
    {
        printf("\nThe elements in the stack are:\n");
        for (int i = top; i >= 0; i--)  // Traverse stack from top to bottom
        {
            printf("%d\n", stack[i]);
        }
    }
}
```

## Implementation 2 (Using if else)

```c
#include <stdio.h>
#include <stdlib.h>

int n, top = -1;  // Global variables for stack size and top position

// Function declarations
void push(int stack[], int x);
void pop(int stack[]);
void peep(int stack[]);
void display(int stack[]);
int isempty();

// Main function
void main()
{
    // Input the size of the stack
    printf("Enter the size of the stack: \n");
    scanf("%d", &n);
    
    int stack[n], e;  // Local stack array and element to push

    // Menu-driven loop for stack operations
    while(1)
    {
        int ch;  // Choice variable
        printf("\nEnter the choice - \n");
        printf("0 : Exit,\n");
        printf("1 : Push,\t2 : Pop,\n");
        printf("3 : Peep,\t4 : Display\n");
        scanf("%d", &ch);

        if (ch == 0) 
        {
            exit(0);  // Exit the program
        }
        else if (ch == 1) 
        {
            printf("\nEnter the number to be pushed: \n");
            scanf("%d", &e);
            push(stack, e);  // Push the element to the stack
        }
        else if (ch == 2) 
        {
            pop(stack);  // Pop the element from the stack
        }
        else if (ch == 3) 
        {
            peep(stack);  // Display the top element without removing
        }
        else if (ch == 4) 
        {
            display(stack);  // Display all elements in the stack
        }
        else 
        {
            printf("\nInvalid choice. Please try again.\n");  // Handle invalid choices
        }
    }
}

// Function to check if the stack is empty
int isempty()
{
    if (top == -1)
    {
        printf("\nThe Stack is Empty\n");
        return 1;  // Stack is empty
    }
    return 0;  // Stack is not empty
}

// Function to push an element onto the stack
void push(int stack[], int x)
{
    if (top == n - 1)  // Check if the stack is full
    {
        printf("Stack is full. Cannot push %d.\n", x);
    }
    else
    {
        stack[++top] = x;  // Increment top and push the element
        printf("\nThe element %d is pushed into the stack.\n", x);
    }
}

// Function to pop an element from the stack
void pop(int stack[])
{
    if (!isempty())  // Check if stack is not empty
    {
        printf("\nThe number %d has been popped.\n", stack[top]);
        top--;  // Decrease top position after popping
    }
}

// Function to display the top element without popping
void peep(int stack[])
{
    if (!isempty())  // Check if stack is not empty
    {
        printf("\nThe number at the top is %d.\n", stack[top]);
    }
}

// Function to display all elements in the stack
void display(int stack[])
{
    if (!isempty())  // Check if stack is not empty
    {
        printf("\nThe elements in the stack are:\n");
        for (int i = top; i >= 0; i--)  // Traverse stack from top to bottom
        {
            printf("%d\n", stack[i]);
        }
    }
}

```
