---
title: "03 - Ternary Operator"
description: ""
summary: ""
date: 2024-11-07T14:47:05+05:30
lastmod: 2024-11-07T14:47:05+05:30
draft: false
weight: 342
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



**Ternary Operator / Conditional Operator**

The conditional operator `?:` is the only ternary operator (three operands) in JavaScript and is sometimes called the ternary operator.

It provides a shorthand for `if-else` statements.

With three operands, the first goes before the `?`, the second goes between the `?` and the `:`, and the third goes after the `:`:

```js
x > 0 ? x : -x  // Absolute value of x

let result = condition ? value1 : value2;

boolean ? runIfTrue : runIfFalse;
```

The first operand is evaluated and interpreted as a boolean. If the value of the first operand is truthy, the second operand is evaluated, and its value is returned. If the first operand is falsy, the third operand is evaluated, and its value is returned. Only one of the second and third operands is evaluated, never both.

If the `condition` is `true`, the expression returns `value1`; otherwise, it returns `value2`:

```js
console.log(true ? 1 : 2);    // 1
console.log(false ? 1 : 2);   // 2
```

```js
let accessAllowed = (age > 18) ? true : false;

// This is equivalent to:

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
```

The `?` operator has low precedence, meaning it runs after operators like `>`.

```js
greeting = "hello" + (username ? username : "there");
// If username exists, add username

// Equivalent to:
greeting = "hello ";
if (username) {
    greeting += username;
} else {
    greeting += "there";
}
```

```js
const greeting = isBirthday ? "Happy birthday" : "Good morning";
```

```js
// Switching between black and white theme
select.value === "black" ? update("black", "white") : update("white", "black");
// Switch black to white, or white to black
```

---

### Multiple Conditional Operators (Chaining)

You can chain multiple ternary operators `?:` together to handle more complex conditions:

```js
let age = prompt("How old are you?", 18);

let message = (age < 3) ? "Hi, baby" :    // If true, "Hi, baby"
    (age < 18) ? "Hello" :                // If true, "Hello"
        (age < 100) ? "Greetings" :      // If true, "Greetings"
            "What an unusual age";      // Default message
alert(message);
```

- The operator evaluates the condition before the `?` and selects one of the two options after the `?` based on the result.
- In `a ? b : c`, it returns `b` if `a` is `true`, and `c` if `a` is `false`.

This is equivalent to using `if...else`:

```js
if (age < 3) {
    message = 'Hi, baby';
} else if (age < 18) {
    message = 'Hello';
} else if (age < 100) {
    message = 'Greetings';
} else {
    message = 'What an unusual age';
}
```

---

### **Non-traditional Use of ?**

It’s possible to use the ternary operator without assigning a value to a variable, though it's generally discouraged. For example:

```js
let company = prompt('Which company?', '');

(company == 'Netscape') ? alert('Right!') : alert('Wrong.');
```

However, this usage is **not recommended** because:

- It sacrifices readability and clarity.
- The purpose of the ternary operator is to return one of two values, not to execute different branches of code. For branching logic, an `if...else` is more appropriate.

Our eyes scan the code vertically. Code blocks that span several lines are easier to understand than a long, horizontal instruction set.

---

### Limitations of ?

#### No 'break' or 'continue' with `?`

The ternary operator only works with **expressions** and cannot handle **statements** like `break` or `continue`.

```js
if (i > 5) {
    alert(i);
} else {
    continue;  // Invalid
}

// This will result in an error:
(i > 5) ? alert(i) : continue;  // 'continue' is not allowed here
```

In such cases, use an `if...else` statement instead.

---
