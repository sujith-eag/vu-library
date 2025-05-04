---
title: "01 - while and do-while Loop"
description: ""
summary: ""
date: 2024-11-07T20:50:37+05:30
lastmod: 2024-11-07T20:50:37+05:30
draft: false
weight: 362
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Looping statements allow you to repeat portions of your code, making it possible to execute a block of code multiple times. JavaScript has five main types of looping statements: `while`, `do/while`, `for`, `for/of` (and its `for/await` variant), and `for/in`.

One common use for loops is to iterate over the elements of an array.

---

### **'while' Loop**

The `while` loop is the most basic type of loop in JavaScript. It repeatedly executes the code inside its body **as long as** the condition evaluates to **truthy**. The condition is checked **before** each iteration.

```js
while (expression) {
    statement;
}
```

```js
initializer / counter variable;
while (condition) {
    // code to run in the loop body
    final-expression;  // increment or other operation
}
```
You can create an infinite loop with the syntax `while(true)`.     
`n` expression that starts off truthy would never change, and the loop would never end! 

___
A single execution of the loop body is called an **iteration**.
variable count starts off at 0 and is incremented each time the body of the loop runs.

Once the loop has executed 10 times, the expression becomes false and the while statement finishes.

```js
let count = 0;
while (count < 10) {
    console.log(count);
    count++;  // Increment count
}
```

```
0
1
2
3
4
5
6
7
8
9
```

Another example where the condition is checked before each iteration:

```js
let number = 0;

while (number <= 12) {
    console.log(number);
    number = number + 2;  // Increment by 2
}
// Output: 0, 2, 4, 6, 8, 10, 12
```

Here, `result` is repeatedly doubled for each iteration, and the loop stops after 10 iterations:

```js
let result = 1;
let counter = 0;

while (counter < 10) {
    result = 2 * result;  // Multiply result by 2 each time
    counter = counter + 1;  // Increment counter
}
console.log(result);  // Output: 1024 (2^10)
```

#### Shortened `while` condition

You can simplify the condition in the `while` loop by using just the variable itself. If the condition is a variable (e.g., `i`), you can write it like this:

```js
let i = 3;
while (i) {
    alert(i);  // Alert the current value of i
    i--;  // Decrement i
}
// Output: Alerts 3, 2, 1, then stops as i becomes 0
```

```js
let hash = "";  // Start with an empty string

while (hash.length < 7) {
    hash += "#";  // Append one "#" to the string
    console.log(hash);  // Output the current string
}
// Output:
// "#"
// "##"
// "###"
// "####"
// "#####"
// "######"
// "#######"
```

---

### **'do...while' Loop**

The `do...while` loop works similarly to the `while` loop, but with one key difference: the condition is checked **after** the code block is executed. This ensures that the body of the loop is executed **at least once**.

```js
do {
    statement;
} while (expression);
```

```js
initializer / counter variable;
do {
    // code to run in the loop body
    final-expression;  // increment or other operation
} while (condition);
```

The condition is checked after the first execution, guaranteeing the loop runs at least once.

```js
let i = 0;
do {
    alert(i);  // Alert the current value of i
    i++;  // Increment i
} while (i < 3);
// Output: Alerts 0, 1, 2
```

#### Ensuring User Input

The `do...while` loop is often used when you want to ensure that the user provides valid input. Here's an example where the user is prompted to enter their name, and the loop continues until a non-empty value is entered:

```js
let yourName;

do {
    yourName = prompt("Who are you?");  // Prompt the user for their name
} while (!yourName);  // Continue if the input is falsy (e.g., empty string)

console.log("Hello " + yourName);  // Output: "Hello <user's name>"
```

Here, the loop ensures that the user must provide a non-empty name.

#### Example of Iterating Over an Array

This function prints each element of an array:

```js
function printArray(a) {
    let len = a.length, i = 0;
    if (len === 0) {
        console.log("Empty Array");
    } else {
        do {
            console.log(a[i]);
        } while (++i < len);
    }
}
```

---

### **Indenting Code**

Proper indentation is a **best practice** that makes your code more readable and maintainable. Although JavaScript can run code on a single line, using consistent indentation improves clarity.

#### Without Indentation:

```js
if (true != false) {console.log("That makes sense."); if (1 < 2) {console.log("No surprise there.");}}
```

#### With Proper Indentation:

```js
if (true != false) {
    console.log("That makes sense.");
    if (1 < 2) {
        console.log("No surprise there.");
    }
}
```

---

