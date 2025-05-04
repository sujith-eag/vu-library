---
title: "03 - Postfix Expression Evaluation"
description: ""
summary: ""
date: 2025-01-01T16:00:40+05:30
lastmod: 2025-01-01T16:00:40+05:30
draft: false
weight: 264
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



`isdigit()` is needed to check the numbers, which will be available in `<ctype.h>`

### Logic for Variables

- `int stack[100]`: A fixed-size stack to hold the operands and results of operations.
- `int top = -1`: This variable points to the top of the stack.
- `char exp[100]`: Array to store the input postfix expression.
- `char *e`: Pointer used to traverse the `exp[]` array.
- `int conv`: Variable used to hold the converted integer value from the character.
- `int n1, n2, n3`: Variables to hold the popped values from the stack and the result of operations.
 
### Logic for Implementation

* Global Variables `int stack[100]` and `int top = -1` to manage stack.
* In `main` function Declaring `char exp[100]` and `char *e` to hold the prefix expression and pointer to traverse it.
* Taking the expression from input and passing to array, `scanf("%s", exp)`
* Assigning the address of array starting location to the pointer, `e = exp`
* Declaring `int conv` to hold converted value of the character in `*e`
* Declaring `int n1, n2, n3` to hold the values in the popped values and new result.
* Starting a `while` loop to traverse through the `exp` array while incrementing `e`
* Loop ending condition when `*e == '\0'`, So runs when `while ( *e != '\0' )`
* Within the loop checking if the `*e` is a number by passing to `isdigit()` from `<ctype.h>`
* If it is a digit, convert to `int` by subtracting its ASCII value with `48` as number `0` has value of `48`, then storing it in `conv`
* Pushing `conv` to the `stack`.
* If it is not a digit, then it is an operator, then two `int` from the stack has to be popped and operated on. (there will be no `(` or `)` in postfix evaluation)

### Logic for operation

* The popped values are stored in `n1` and `n2`
* The operator is a `char` and direct operation cannot happen.
* Check the character in `*e` using `switch case` or `if else` and perform the relevant operation on `n2` and `n1`. Store result in `n3`
* The resultant `n3` is pushed into the stack.

Once the iteration of the `exp[]` is done, the `stack` will have the last value which will be the result. It can be accessed as `stack[top]` as top will be `0` or by using `pop()`

### Logic for Functions

#### Push
* Receives one parameter, returns nothing
* No checks, Increment top and push the value to stack at top, `x = stack[++top]`

#### Pop
* Returns an int, receives no parameter
* (not required) Edge case - if stack is empty, check using `top == -1` and return `-1` 
* else return the value at the top and decrement `stack[top--]` 

#### Eval
* Receives the `n1, n2, n3` integers and the `*e` character.
* Matches the `*e` with operators and performs the appropriate operation.
* The result is put in `n3`,  `n3 = n2 + n1` etc 
* `n3` is pushed into the stack

___

## Implementation 

```c
#include <stdio.h>
#include <ctype.h>

int stack[100];
int top = -1;

void push(int x);
int pop();
void eval(int n1, int n2, int n3, char x );

int main()
{
	char exp[100];
	char *e;
	
	printf("Enter the Postfix Expression: \n");
	scanf("%s", exp);
	e = exp;
	int conv;
	int n1, n2, n3;
	
	while ( *e != '\0')
	{
		if ( isdigit(*e) )
		{
			conv = *e - 48;
			push(conv);
		}
		else
		{
			n1 = pop();
			n2 = pop();
			eval(n1, n2, n3, *e);
		}
		e++;
	}
	printf("\nThe Result of the expression %s is %d\n", exp, pop()); 
	return 0;
}
void push(int x)
{
	stack[++top] = x;	
}
int pop()
{ 
	return stack[top--];
}
void eval(int n1, int n2, int n3, char x )
{
	if (x == '+')
		n3 = n2 + n1;
	else if (x == '-')
		n3 = n2 - n1;
	else if (x == '*')
		n3 = n2 * n1;
	else
		n3 = n2 / n1;
	push(n3);
}
```


### Another Implementation

```c
#include <stdio.h>
#include <ctype.h>

int stack[100];
int top = -1;

void push(int x);
int pop();
void eval(int n1, int n2, int *n3, char x);

int main() {
    char exp[100];
    char *e;
    
    printf("Enter the Postfix Expression: \n");
    scanf("%s", exp);  // Read the input postfix expression
    e = exp;  // Pointer to traverse the expression
    int conv;
    int n1, n2, n3;

    while (*e != '\0') {  // Loop until the end of the expression
        if (isdigit(*e)) {  // Check if the character is a digit
            conv = *e - '0';  // Convert char to int
            push(conv);  // Push the integer onto the stack
        }
        else {  // If the character is an operator
            n1 = pop();  // Pop first operand
            n2 = pop();  // Pop second operand
            eval(n1, n2, &n3, *e);  // Perform the operation
            push(n3);  // Push the result back onto the stack
        }
        e++;  // Move to the next character in the expression
    }
    
    printf("\nThe Result of the expression %s is %d\n", exp, pop());  // The final result
    return 0;
}

// Function to push an integer onto the stack
void push(int x) {
    stack[++top] = x;  // Increment top and store the value
}

// Function to pop an integer from the stack
int pop() {
    return stack[top--];  // Return the value at top and decrement top
}

// Function to evaluate an operation and store the result in n3
void eval(int n1, int n2, int *n3, char x) {
    switch (x) {
        case '+':
            *n3 = n2 + n1;  // Addition
            break;
        case '-':
            *n3 = n2 - n1;  // Subtraction
            break;
        case '*':
            *n3 = n2 * n1;  // Multiplication
            break;
        case '/':
            *n3 = n2 / n1;  // Division
            break;
        default:
            printf("Unknown operator %c\n", x);  // Handle invalid operators
            break;
    }
}
```
