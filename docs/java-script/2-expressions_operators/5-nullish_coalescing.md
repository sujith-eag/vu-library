---
title: "05 - Nullish Coalescing"
description: ""
summary: ""
date: 2024-11-07T14:47:05+05:30
lastmod: 2024-11-07T14:47:05+05:30
draft: false
weight: 346
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


**Nullish Coalescing (??) / First-Defined**

The `??` (Nullish Coalescing) operator returns the **right-hand operand** if the left-hand operand is **null** or **undefined**.

A value is considered “**defined**” when it’s **neither `null` nor `undefined`**.

```js
result = a ?? b;  // returns b if a is null or undefined

// a ?? b    is equivalent to
(a !== null && a !== undefined) ? a : b
```

If `a` is neither `null` nor `undefined`, it returns `a`; otherwise, it returns `b`.

`??` is a useful alternative to `||` when you want to select the first **defined** operand rather than the first truthy operand.

The `??` operator behaves similarly to `||`, but with a key difference: it **only considers `null` and `undefined` as falsy** values. Other falsy values like `0`, `false`, or `""` are treated as valid values.

The problem with using `||` is that zero, the empty string, `NaN`, and `false` are all falsy values that may be perfectly valid in some circumstances. They are defined, but are treated as false and are ignored.

`??` works when the first operand is falsy. If that operand is falsy but defined, then `??` returns it. It is only when the first operand is “nullish” (i.e., `null` or `undefined`) that this operator evaluates and returns the second operand:

```js
> 0 || 100
100
> 0 ?? 100
0          // 0 is defined, so it returns 0

> null || 100
100
> null ?? 100
100
> undefined ?? 100
100       // undefined is not defined

> "" || 100
100
> "" ?? 100
''

> false || 100
100
> false ?? 100
false
> NaN ?? 100
NaN
```

```js
let user = null;
alert(user ?? "Anonymous");  // "Anonymous" (user is null)
```

```js
let username = null;
let defaultName = "Guest";

let name = username ?? defaultName;
alert(name);  // "Guest" (because username is null)
```

```js
let username = "John";
let defaultName = "Guest";

let name = username ?? defaultName;
alert(name);  // "John" (because username is not null/undefined)
```

---

`??` is more preferable than `||` as it is more predictable.

---

### Using ?? with && or ||

For safety reasons, JavaScript **forbids** combining `??` with `&&` or `||` **without explicitly specifying precedence** using parentheses. This is because the behavior of the combined operators can be ambiguous.

```js
let x = 1 && 2 ?? 3;  
// Syntax Error: Invalid use of ?? with &&
```

To avoid the error, use **parentheses** to clarify the precedence:

```js
let x = (1 && 2) ?? 3;  
// Correct! The AND operation happens first
```

---

```js
if (-1 || 0) alert ('first');
if (-1 && 0) alert ('second');
if (null || -1 && 1) alert ('third');

// first and third will become true and execute
// -1 is truthy
```

```js
if ( (iceCreamVanOutside || houseStatus === "on fire")) {
	console.log("you should leave the house quickly");
} else {
	console.log("you should just stay in then");
}

if ( !(iceCreamVanOutside || houseStatus === "on fire")) {
	console.log("you should just stay in then");
} else {
	console.log("you should leave the house quickly");
}
```

**Password Verification (using logical operators)**

```js
let userName = prompt("Who's there?", '');

if (userName === "Admin") {
    let pass = prompt('Password?', '');

    if (pass === 'TheMaster') {
        alert("Welcome!");
    } else if (pass === '' || pass === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (userName === '' || userName === null) {
    alert('Cancelled');
} else {
    alert("I don't know you");
}
```

---

### Short-Circuit Evaluation

All three logical operators (`&&`, `||`, and `??`) support **short-circuit evaluation**. This means that the right-hand operand is only evaluated if necessary.

- For `true || x`, `x` is **not evaluated** because the left-hand operand is already truthy (the result is `true`).
- For `false && x`, `x` is **not evaluated** because the left-hand operand is falsy (the result is `false`).

```js
console.log(true || alert("This will not be evaluated"));  // The alert is not triggered.
console.log(false && alert("This will not be evaluated either"));  // The alert is not triggered.

let x = null;
console.log(x ?? "default");  // "default" (null is treated as missing, so the right side is used)
```

---

### Summary of Logical Operators

- **`||` (OR):** Returns the right operand if the left operand is any **falsy** value (including `0`, `false`, `""`, etc.).
- **`&&` (AND):** Returns the first falsy value, or the last operand if all are truthy.
- **`!` (NOT):** Flips the Boolean value of its operand.
- **`??` (Nullish Coalescing):** Returns the right operand if the left operand is `null` or `undefined`.
- **Safety with `??`:** Don’t combine `??` with `&&` or `||` without parentheses. Ensure proper precedence to avoid syntax errors.
- **Short-Circuiting:** The right operand is only evaluated when necessary, allowing for efficient evaluations and conditional operations.

---
