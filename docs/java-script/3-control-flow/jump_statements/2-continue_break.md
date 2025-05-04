---
title: "02 - continue, break"
description: ""
summary: ""
date: 2024-11-07T20:52:20+05:30
lastmod: 2024-11-07T20:52:20+05:30
draft: false
weight: 372
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


The `continue` statement is similar to the `break` statement. However, instead of exiting a loop, the `continue` statement restarts the loop at the next iteration.

The `continue` statement is used to **skip the current iteration** of a loop and proceed with the next iteration. The rest of the code inside the loop body is skipped for that particular iteration.

The `continue` statement can also be used with a label:

```js
continue labelName;
```

### 'continue' in Loops

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;  // Skip even numbers
  alert(i);  // Outputs: 1, 3, 5, 7, 9
}
```

- The loop runs from 0 to 9.
- The `continue` statement skips the even numbers (when `i % 2 === 0`), so the `alert(i)` is only executed for odd numbers.

```js
for (let i = 0; i < data.length; i++) {
  if (!data[i]) continue; // Skip undefined or falsy data
  total += data[i];
}
```

---

### Using 'continue' with Labels

Similarly to `break`, you can use `continue` with labels to **skip to the next iteration** of a labeled loop.

```js
outer:  // Label for the outer loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) continue outer;  // Skip the rest of the outer loop for i = 1, j = 1
    console.log(`i=${i}, j=${j}`);
  }
}
```

- This example uses `continue outer` to skip the remaining part of the outer loop when `i === 1 && j === 1`, causing the program to jump directly to the next iteration of the outer loop.

---



## 'break' Statement

The `break` statement, when used alone, causes the innermost enclosing loop or `switch` statement to exit immediately. It is only legal inside loops and `switch` statements.

The `break` statement is used to **immediately exit** from a loop, `switch` statement, or even a `try...catch` block. When encountered, the loop or block is terminated, and execution continues with the code after the loop.

### 'break' in Loops:

```js
for (let i = 0; i < a.length; i++) {
	if (a[i] === target) break;
}
```

```js
for (let current = 20; current <= 30; current++) {
	if (current % 7 == 0) {
	    console.log(current);  // Outputs 21
	    break;  // Exit the loop
  }
}
```

- The loop starts from `current = 20` and increments by 1.
- It checks if the number is divisible by 7.
- When `21` is found (the first number greater than 20 and divisible by 7), it prints `21` and exits the loop with `break`.

```js
let sum = 0;

while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break;  // break if empty line
  sum += value;
}
alert('sum: ' + sum);
```


---

### Using 'break' with Labels

JavaScript also allows the `break` keyword to be followed by a statement label (just the identifier, with no colon):

```js
break labelName;
```

When `break` is used with a label, it jumps to the end of, or terminates, the enclosing statement that has the specified label.

To break out of a **nested loop** and jump directly to the code after the outer loop, you can use a label with `break`.

The `break labelName` breaks out of the named loop. The `break` directive must be inside the code block.

```js
label: {
  // Code omitted
  break label;
  // More code omitted
}
```

```js
outer:  // Label for the outer loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    if (!input) break outer;  // Exit both loops if input is empty or canceled
  }
}
alert('Done!');
```

- In this example, if the user enters an empty string or cancels the prompt, the `break outer` will stop both the inner and outer loops, and the message `'Done!'` will be displayed.

---

### Using 'break' and 'continue' Inside Code Blocks

You can also use `break` and `continue` inside **blocks** of code by labeling the block itself. This is useful when you need to break out of specific code sections rather than the entire loop.

```js
label: {
  // Some code before
  console.log('Before break');
  break label;  // Exit the block
  console.log('After break');  // This won't run
}
```

- Here, the `break label` exits the block of code before the `console.log('After break')` line is executed.

---

### Using 'break' with Complex Statements

You need the labeled form of the `break` statement when you want to break out of a statement that is not the nearest enclosing loop or a `switch`.

```js
let matrix = getData(); // Get a 2D array of numbers from somewhere
// Now sum all the numbers in the matrix.
let sum = 0, success = false;
// Start with a labeled statement that we can break out of if errors occur

computeSum: if (matrix) {
  for (let x = 0; x < matrix.length; x++) {
    let row = matrix[x];
    if (!row) break computeSum;
    for (let y = 0; y < row.length; y++) {
      let cell = row[y];
      if (isNaN(cell)) break computeSum;
      sum += cell;
    }
  }
  success = true;
}
// The break statements jump here. If we arrive here with success == false
// then there was something wrong with the matrix we were given.
// Otherwise, sum contains the sum of all cells of the matrix.
```

---
