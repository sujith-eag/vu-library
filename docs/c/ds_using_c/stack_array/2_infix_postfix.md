---
title: "02 - Infix to Postfix Conversion"
description: ""
summary: ""
date: 2025-01-01T16:00:34+05:30
lastmod: 2025-01-01T16:00:34+05:30
draft: false
weight: 263
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


`#include <ctype.h>` to get the `isalnum()` function to check alphabets and numbers which returns false for any special characters.

### Logic for Variables

- `char stack[100]`: A fixed-size array to store operators and operands for conversion.
- `int top = -1`: This variable points to the top of the stack.
- `char exp[100]`: Another array to store the user input expression.
- `char *e`: A pointer used to traverse the `exp[]` array.
- `char x`: A variable to store the element popped from the stack.

### Implementation Logic

- Declare a global stack (`stack[100]`) with `top = -1` to track the top of the stack.
- In the `main` function, declare the `exp[100]` array to capture the user input expression. Use `scanf("%s", exp)` to capture the entire expression (`%c` is for single `char`) (`&exp` is not needed as it is an array).
- Declare `e` and Set `e = exp` to point to the start of the expression, enabling traversal.
- Use `x` in the main function to capture popped elements.
- Use a `while` loop (`while(*e != '\0')`) to traverse the expression by incrementing pointer `e++`. 
- Each iteration processes one character in `exp[]` and ends when the end of the array is reached which is signaled by `*e == '\0'` 

### Conversion Logic

As the `while` loop runs, `e` is incremented and it traverses the `exp` array elements.    
`e` points at the location within the array and `*e` is element in that array location.
- **Alphanumeric Characters**: `if ( isalnum(*e) )` If the character `*e` is alphanumeric (number or letter), it is printed directly without being pushed to the stack.
- **Opening Parenthesis** `(`:  Always pushed onto the stack.
- **Closing Parenthesis** `)`: Pop elements from the stack and print them until an opening parenthesis `(` is encountered. `while( (x=pop()) != '(' )`
- **Operators**: For other characters (operators), compare their priority with the operator at the top of the stack. Pop and print operators with equal or higher priority before pushing the current operator. `while ( priority(stack[top]) >= priority(*e) )`

Conditions for pushing in the operator.    
* If stack is empty, `if (top == -1 )` then can be pushed in.
* If not empty, then priority of the element at the top of the stack `stack[top]` has to be compared with the element from the expression `*e`.

After processing the entire expression, pop all remaining operators from the stack.
After processing the entire expression the main `while` loop ends after `*e` reaches `\0`. There are still operators in the stack.
pop all remaining operators from the stack. `while (top != -1 )` print all the popped items.

### Functions logic

#### Push
* push need the `char` that has to be pushed which is in the `*e`
* Increment the top to next place `top++`, and assign the value to `stack[top]`
* `top++ ; stack[top] = x`   or `stack[++top]`

#### Pop
* Edge case is `top = -1` then return `-1` to calling function. (This allows to know the end if the pop value is used in any checking)
* else, return the value which is at the `stack[top]` and then decrement `top`
* `stack[top--]`

#### Priority
* Takes a `char` as parameter.
* Works by returning a value to reflect the operators precedence which allows the `while` loop to compare both operators based on their return value.
* Operator with lowest precedence returns `0` and next would be `1, 2, 3`
* - `(`: Lowest precedence (0).
- `+`, `-`: Medium precedence (1).
- `*`, `/`: Highest precedence (2).

```c
#include <stdio.h>
#include <ctype.h>

char stack[100];
int top = -1;

char pop();
void push(char x);
int priority(char x);

int main()
{
	char exp[100];
	char *e, x;
	
	printf("Enter the Infix Expression to be Converted: \n");
	scanf("%s", exp);
	e = exp;
	
	while( *e != '\0' )
	{
		if ( isalnum(*e) )
		{
			print("%c \n", *e );
		}
		else if ( *e == '(')
		{
			push(*e);
		}
		else if ( *e == ')')
		{
			while ( (x = pop()) != '(' )
			{
				printf("%c \n", x);
			}
		}
		else 
		{
			while ( priority(stack[top]) >= priority(*e) )
			{
				printf("%c \n", pop());
			}
			push(*e);
		}
		e++;
	}
	
	while ( top != -1)
	{
		printf("%c \n", pop());
	}
	
	return 0;
}


void push(char x)
{
	top++;
	stack[top] = x;
}
char pop()
{
	if (top == -1)
		return -1;
	else
		return stack[top--];
}
int priority(char x)
{
	if (x == '(')
		return 0;
	else if ( x == '+' || x == '-')
		return 1;
	else if ( x == '*' || x == '/')
		return 2;
	else 
		return 0;
}
```


```c
#include <stdio.h>
#include <ctype.h>

char stack[100];
int top = -1;

char pop();
void push(char x);
int priority(char x);

int main() {
    char exp[100];  // Expression to be converted
    char *e, x;     // Pointer to traverse the expression and variable to store popped element

    printf("Enter the Infix Expression to be Converted: \n");
    scanf("%s", exp);  // Take input expression

    e = exp;  // Pointer to the start of expression

    while (*e != '\0')   // Loop until end of expression 
    {  
        if (isalnum(*e))  // If the character is a number/letter 
        {  
            printf("%c \n", *e);  // Print the character (operand)
        }
        else if (*e == '(')   // If opening parenthesis
        {
            push(*e);  // Push it onto the stack
        }
        else if (*e == ')')  // If closing parenthesis
        {
            while ((x = pop()) != '(')  // Pop until '(' is encountered
            {
                printf("%c \n", x);  // Print the popped operator
            }
        }
        else  // If the character is an operator
        {
            // Pop operators of higher or equal precedence and print them
            while (priority(stack[top]) >= priority(*e))
            {
                printf("%c \n", pop());
            }
            push(*e);  // Push the current operator onto the stack
        }
        e++;  // Move to the next character in the expression
    }

    // After processing the expression, pop all remaining operators from the stack
    while (top != -1) 
    {
        printf("%c \n", pop());  // Print and pop the remaining operators
    }

    return 0;
}

// Function to push an element onto the stack
void push(char x) 
{
    top++;  // Increment the top of the stack
    stack[top] = x;  // Assign the element to the stack
}

// Function to pop an element from the stack
char pop() 
{
    if (top == -1)  // Check if the stack is empty
        return -1;  // Return -1 if stack is empty
    else
        return stack[top--];  // Return the top element and decrement top
}

// Function to return the priority of operators
int priority(char x) 
{
    if (x == '(') return 0;  // '(' has the lowest precedence
    else if (x == '+' || x == '-') return 1;  // + and - have medium precedence
    else if (x == '*' || x == '/') return 2;  // * and / have high precedence
    else return 0;  // Default case for non-operators
}

```
