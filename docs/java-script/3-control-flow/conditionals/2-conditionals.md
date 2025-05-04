---
title: "02 - Conditional Statements"
description: ""
summary: ""
date: 2024-11-07T20:47:52+05:30
lastmod: 2024-11-07T20:47:52+05:30
draft: false
weight: 354
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Conditional statements execute or skip other statements depending on the value of a specified expression. These statements are the decision points of your code, and they are also sometimes known as **"branches."**

Conditional statements are the places where the code branches into two or more paths, and the interpreter must choose which path to follow.

---

### 'if()' Statement

The `if` statement allows you to execute a block of code only if a specified condition is true. The condition is typically a Boolean expression that evaluates to either `true` or `false`.

```js
if (expression)
    statement;

if (condition) {
    // Code to execute if condition is true
}
```

#### Single Statement

When there’s only one statement to execute after `if`, curly braces `{}` can be omitted:

```js
if (1 + 1 == 2) console.log("It's true");
// → It's true

if (username == null)
    username = "John Doe";

if (!username) username = "John Doe";
```

However, it's considered good practice to always use curly braces for clarity and to avoid errors when adding additional statements.

```js
if (!address) {
    address = "";
    message = "Please specify an address";
}
```

```js
let hour = 14; // Example hour value
let greeting;

if (hour < 18) {
    greeting = "Good Day";
}
console.log(greeting); 
// -> Good Day
```

---

```js
let theNumber = Number(prompt("Pick a number"));

if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + (theNumber * theNumber));
}
```

- `Number()` converts the user input to a number. If the input is not a valid number (i.e., `NaN`), the condition fails.
- `Number.isNaN()` is a standard function that returns `true` only if the argument is `NaN`.
- The condition `!Number.isNaN(theNumber)` ensures that the block is executed only if the value is a valid number.

**Note**: `Number.isNaN()` is more reliable than `isNaN()` because it specifically checks for `NaN` values, whereas `isNaN()` can produce unexpected results for non-numeric strings.

---

### 'else' Clause

The second form of the `if` statement introduces an `else` clause that is executed when the expression is `false`.

```js
if (expression)
    statement1;
else
    statement2;

if (condition) {
    // Code if condition is true
} else {
    // Code if condition is false
}
```

```js
if (n === 1)
    console.log("You have 1 new message.");
else
    console.log(`You have ${n} new messages.`);
```

Make a habit of enclosing the bodies of `if` and `else` statements (as well as other compound statements, such as `while` loops) within curly braces, even when the body consists of only a single statement. Doing so consistently can prevent problems.

```js
if (i === j) {
    if (j === k) {
        console.log("i equals k");
    }
} else {
    console.log("i doesn't equal j");
}
```

```js
let theNumber = Number(prompt("Pick a number"));

if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + (theNumber * theNumber));
} else {
    console.log("Why didn't you give me a number?");
}
```

---

### 'else if' Statement

The `else if` statement is used when you have multiple conditions to check. It allows you to chain multiple conditions together.

```js
if (condition1) {
    // Code for condition1
} else if (condition2) {
    // Code for condition2
} else {
    // Code if none of the above conditions are true
}
```

```js
if (n === 1) {
    // Execute code block #1
} else if (n === 2) {
    // Execute code block #2
} else if (n === 3) {
    // Execute code block #3
} else {
    // If all else fails, execute block #4
}
```

Example with a number check:

```js
let num = Number(prompt("Pick a number"));

if (num < 10) {
    console.log("Small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}
```

If `num` is less than 10, it prints `"Small"` and does not check further conditions. The evaluation stops after the first `true` condition.

---

### Common Pitfalls

**String and Number Conversion**

It’s important to handle type conversion carefully, especially when working with user inputs. For example, the `Number()` function can produce unexpected results if the user enters something that isn’t a valid number.

**Tip**: Always ensure to check that the input is valid before performing mathematical operations.

---

### FizzBuzz Example

```js
for (let number = 1; number <= 100; number++) {
    if ((number % 3) === 0 && (number % 5) === 0) {
        console.log("fizzbuzz");
    } else if (number % 5 === 0) {
        console.log("buzz");
    } else if (number % 3 === 0) {
        console.log("fizz");
    } else {
        console.log(number);
    }
}
```

---

### Chessboard Grid Example

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid, there is either a space or a "#" character. The characters should form a chessboard.

```js
let size = 8;

for (let i = size; i >= 0; i--) {
    if ((i % 2) === 0) {
        console.log(" #".repeat(size));
    } else {
        console.log("# ".repeat(size));
    }
}
```

`" #"*size` doesn't work like in Python, so `repeat` is needed.

The output:

```
 # # # # # # # #
# # # # # # # # 
 # # # # # # # #
# # # # # # # # 
 # # # # # # # #
# # # # # # # # 
 # # # # # # # #
# # # # # # # # 
 # # # # # # # #
```

---

