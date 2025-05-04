---
title: "01 - Tower of Hanoi"
description: ""
summary: ""
date: 2025-01-01T16:00:11+05:30
lastmod: 2025-01-01T16:00:11+05:30
draft: false
weight: 261
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



- **`n`**: The number of disks to move.
- **Poles `A`, `B`, and `C`**: Representing the three rods (source, auxiliary, and destination).
- **Function signature**: The function takes four parameters — the number of disks (`n`), and three characters representing the poles (`A`, `B`, and `C`).

### Approach:

1. **Base Case**:
   - If there are no disks left to move (`n == 0`), the function terminates (returns nothing).

2. **Recursive Case**:
   - To move `n` disks from pole `A` to pole `C` using pole `B` as auxiliary:
     - First, **move `n-1` disks** from pole `A` to pole `B` using pole `C` as an auxiliary. This is done through a recursive call.
     - Then, **move the nth disk** from pole `A` to pole `C`.
     - Finally, **move the `n-1` disks** from pole `B` to pole `C` using pole `A` as an auxiliary, again via recursion.

3. **Termination**:
   - The function stops when `n == 0`, as no further moves are required.

4. **No Return Value**:
   - The function is void, meaning it does not return any values. Instead, it prints the moves directly.

```c
#include <stdio.h>

void towerOfHanoi(int n, char A, char B, char C)
{
	if (n>0)
	{
		towerOfHanoi(n-1, A, C, B);
		printf("\nMove the disk %d, from %c tower to %c \n", n, A, C);
		towerOfHanoi(n-1, B, A, C);
	}	
}

int main()
{
	int n;
	printf("Enter the number of Disks: \n");
	scanf("%d", &n);
	
	printf("\nThe Sequence of moves are as Follows: \n");
	towerOfHanoi(n, 'A', 'B', 'C');
	
	return 0;
}

```



```c
#include <stdio.h>

// Function to solve Tower of Hanoi puzzle
void towerOfHanoi(int n, char A, char B, char C)
{
    // Base case: if no disks to move, return
    if (n > 0)
    {
        // Move n-1 disks from A to B, using C as auxiliary
        towerOfHanoi(n - 1, A, C, B);

        // Move the nth disk from A to C
        printf("\nMove disk %d from %c tower to %c tower\n", n, A, C);

        // Move n-1 disks from B to C, using A as auxiliary
        towerOfHanoi(n - 1, B, A, C);
    }
}

int main()
{
    int n;

    // Prompt user for the number of disks
    printf("Enter the number of disks: \n");
    scanf("%d", &n);

    // Print the sequence of moves to solve the puzzle
    printf("\nThe sequence of moves is as follows:\n");
    towerOfHanoi(n, 'A', 'B', 'C');

    return 0;
}

```
