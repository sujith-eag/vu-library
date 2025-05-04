---
title: "02 - for Loop"
description: ""
summary: ""
date: 2024-11-07T20:50:52+05:30
lastmod: 2024-11-07T20:50:52+05:30
draft: false
weight: 364
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


The `for` loop simplifies loops that follow a common pattern where you initialize a counter, test it before each iteration, and increment (or update) it at the end of each loop cycle. These three actions—initialization, test condition, and increment—are all encoded as part of the loop's syntax.


```js
for (initialize; test; increment) {
    statement;
}
```

In while loop this would have been
```js
initialize;
while(test) {
	statement
	increment;
}
```

The `for` loop is typically used when you know the number of iterations in advance. The three parts of the `for` loop are:

1. **Initialize**: Runs once before the loop begins.
2. **Test**: Evaluated before each iteration. The loop continues if the condition is truthy.
3. **Increment**: Typically updates the counter variable (e.g., `++`, `--`, or other operations) after each iteration.

You can update the loop counter using shorthand operators for more concise code:

```js
counter = counter + 1;  // equivalent to counter++;
counter -= 1;   // equivalent to counter--;
result *= 2;   // equivalent to result = result * 2;
```

---

### **Using the 'for' Loop**

#### Simple Loop with Counter:

```js
for (let count = 0; count < 10; count++) {
    console.log(count);
}
// Output: 0, 1, 2, ..., 9
```

#### Loop with Counter and Increment by 2:

```js
for (let number = 0; number <= 12; number += 2) {
    console.log(number);
}
// Output: 0, 2, 4, 6, 8, 10, 12
```

#### Loop with Calculation:

```js
let result = 1;

for (let counter = 0; counter < 10; counter++) {
    result *= 2;
}

console.log(result);  // Output: 1024 (2^10)
```

#### Loop with Squares:

```js
for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    console.log(newResult);  // Logs the square of each number
}
```

---

### **Complex 'for' Loop**

Sometimes multiple variables change with each iteration of the loop.

You can also use multiple variables in a `for` loop by using the comma operator. This allows you to combine multiple initialization and increment expressions:

```js
let i, j, sum = 0;

for (i = 0, j = 10; i < 10; i++, j--) {
    sum += i * j;
}
```

---

### **Skipping Parts of the 'for' Loop**

You can omit any of the three parts of the `for` loop (initializer, condition, or final-expression), but the semicolons are required. If the condition is omitted, the loop will run indefinitely (creating an infinite loop, similar to `while(true)`).

#### Skipping Initializer:

```js
let i = 0;  // Initializer outside the loop
for ( ; i < 3 ; i++ ) {
    alert(i);  // Output: 0, 1, 2
}
```

#### Skipping Final-Expression:

```js
let i = 0;
for ( ; i < 3 ; ) {
    alert(i);  // Output: 0, 1, 2
    i++;  // Incrementing inside the loop body
}
```

#### Non-Numeric Loop Variable:

```js
function tail(o) {  // Return the tail of a linked list
    for (; o.next; o = o.next) /* empty */;
    return o;
}
// Traverse while o.next is truthy
```

---

### **Adding "and" Before the Last Item in an Array**

This example demonstrates how to format a list with an "and" before the last item in an array:

```js
const cats = ["Leopard", "Jaguar", "Tiger", "Lion"];

let myFavouriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
        myFavouriteCats += `and ${cats[i]}.`;  // Add "and" before the last cat
    } else {
        myFavouriteCats += `${cats[i]}, `;
    }
}

console.log(myFavouriteCats);
// Output: "My cats are called Leopard, Jaguar, Tiger, and Lion."
```

---

### **Chessboard Pattern**

To print a chessboard pattern, you can use a nested loop:

```js
let size = 8;  // Chessboard size (8x8)
let board = "";  // Start with an empty string

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 === 0) {
            board += " ";  // White square
        } else {
            board += "#";  // Black square
        }
    }
    board += "\n";  // Newline after each row
}

console.log(board);
```

This code generates an 8x8 chessboard pattern using a combination of two loops. Each square is determined by whether the sum of `x` and `y` is even or odd.

---

