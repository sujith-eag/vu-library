---
title: "04 - Logical Operators"
description: ""
summary: ""
date: 2024-11-07T14:47:05+05:30
lastmod: 2024-11-07T14:47:05+05:30
draft: false
weight: 344
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Logical operators are used to reason about **Boolean** values. They can be applied to values of any type, not just Boolean.

The common logical operators in JavaScript are: `||` (OR), `&&` (AND), `!` (NOT), and `??` (Nullish Coalescing).

Logical operators like `&&`, `??`, and `||` **convert** the left-hand value to a Boolean to decide how to proceed. These operators might **return** either the original left-hand value or the right-hand value, based on the evaluation. These are known as **Short-circuiting Operators**.

---

### OR (||) Operator

The `||` (OR) operator evaluates to `true` if **any** of its operands are true.

```js
if (1 || 0) {  // Equivalent to true || false
    alert('truthy!');
}
```

```js
let hour = 9;
let isWeekend = true;

if (hour < 10 || hour > 18) {
    alert('The office is closed.');
}

if (hour < 10 || hour > 18 || isWeekend) {
    alert('The office is closed.');
}
```

#### Short-Circuit Evaluation using OR

Returns the first truthy value.

```js
alert(1 || 0);  // 1 (truthy)

alert(null || 1);  // 1 (truthy)

alert(null || 0 || 1);  // 1 (truthy)

alert(undefined || null || 0);  // 0 (falsy)

alert(first || last || Nickname || "Anonymous");  
// "Anonymous" (if all fail)
```

The operands are evaluated **left to right**. Each operand is converted to Boolean. The operator returns the **first truthy value** it finds, or the last value if no truthy value is found.

Values considered **falsy** in JavaScript (like `0`, `NaN`, `""`, `null`, `undefined`) will cause `||` to return the **right-hand value**.

Once the first truthy value is found, evaluation stops, and further operands aren't evaluated. This is useful for executing commands only when the left side is false or falsy.

```js
true || alert("not printed");  // alert won't run

false || alert("printed");     // alert will run
```

```js
console.log(null || "user");   
// "user" (null is falsy)

console.log("Agnes" || "user"); 
// "Agnes" (non-empty string is truthy)
```

---

#### Fallback to Default Values

The `||` operator is often used to provide **default values** when a variable might be empty or falsy.

```js
let username = "";
let defaultName = "Guest";

let name = username || defaultName;
console.log(name);  
// "Guest" (since username is falsy, defaultName is returned)
```

`"Guest"` is used as a fallback value if `username` is falsy (empty string, `null`, etc.).

---

### AND (&&) Operator

The `&&` (AND) operator returns the **first falsy value** it encounters, or the last value if all operands are truthy.

The `&&` (AND) operator evaluates to `true` only if **both** operands are true. It works **oppositely** to `||` and `??`.

```js
0 && "user"      // 0 (falsy)

"Agnes" && "user" // "user" (both are truthy)
```

This is useful for **chaining conditions** or using a default value if the left operand is truthy:

```js
let user = "John";
let role = "admin";

let userRole = user && role;  // "admin"
```

If `user` is falsy (e.g., `null`, `undefined`, `""`), `userRole` will be assigned the falsy value of `user`.

```js
if (hour == 12 && minute == 30) {
    alert("The time is 12:30");
}

if (1 && 0) {
    alert("Won't work as one of them is falsy");
}
```

```js
result = value1 && value2 && value3;

alert(1 && 0);  // 0 (falsy)
alert(1 && 5);  // 5 (truthy)
alert(null && 5);  // null (falsy)
alert(0 && "whatever");  // 0 (falsy)
alert(1 && 2 && null && 3);  // null (falsy)
alert(1 && 2 && 3);  // 3 (truthy)
```

#### Operator Precedence

The `&&` operator has **higher precedence** than `||`, so it is evaluated first in expressions.

```js
a && b || c && d 
// both are equal
(a && b) || (c && d)

alert(null || 2 && 3 || 4);
// 2 && 3 evaluates to 3
// null || 3 || 4 evaluates to 3
```

---

### NOT (!) Operator

The `!` (NOT) operator negates the Boolean value of its operand. It flips `true` to `false` and `false` to `true`.

```js
result = !value;
alert(!true);  // false
alert(!0);     // true (0 is falsy)
```

```js
if (!(age >= 14 && age <= 90)) {
    // Age is not between 14 and 90
}
```

This is equivalent to:

```js
if (age < 14 || age > 90) {
    // Age is not between 14 and 90
}
```

#### Operator Precedence

The `!` operator has **higher precedence** than both `&&` and `||`, so it is evaluated first.

```js
if (-1 || 0) alert('first');
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('third');

// "first" and "third" will execute as -1 is truthy
```

---

### Important Notes

**Avoid Replacing `if` with `||` or `&&`:** Logical operators are often used for short-circuit evaluations, not for complex branching. It’s recommended to use `if...else` when the logic requires more than just a true/false check.

---
