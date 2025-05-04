---
title: "03 - Math Object"
description: ""
summary: ""
date: 2024-11-07T14:43:35+05:30
lastmod: 2024-11-07T14:43:35+05:30
draft: false
weight: 316
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


JavaScript offers several methods for rounding numbers to the nearest integer or specific digits after the decimal point.

### Rounding Methods

**`Math.floor()`**  
Rounds a number **down** to the nearest integer.

```js
Math.floor(3.1);  // 3
Math.floor(-1.1); // -2
```

**`Math.ceil()`**  
Rounds a number **up** to the nearest integer.

```js
Math.ceil(3.1);   // 4
Math.ceil(-1.1);  // -1
```

**`Math.round()`**  
Rounds a number to the nearest integer. Rounds **up** if the decimal part is `>= 0.5`, and **down** if it is `< 0.5`.

```js
Math.round(3.1);  // 3
Math.round(3.6);  // 4
Math.round(3.5);  // 4
Math.round(-3.5); // -3
```

**`Math.trunc()`**  
Removes the decimal part of a number without rounding.

```js
Math.trunc(3.1);   // 3
Math.trunc(-1.1);  // -1
```
_Note: `Math.trunc()` is **not supported** by Internet Explorer.
    

### Rounding to a Specific Number of Digits

**Multiply-and-Divide Method**  
Multiplies the number by a power of 10, applies the rounding function, then divides by the same power of 10.

```js
let num = 1.23456;
alert(Math.round(num * 100) / 100);  
// 1.23  (Rounds two decimal place)
```

**`toFixed(n)`**  
Rounds the number to `n` decimal places and returns a string.

```js
let num = 12.3445;
alert(num.toFixed(1));  // "12.3"
let num2 = 12.3745;
alert(num2.toFixed(1)); // "12.4"

let num3 = 12.36;
alert(num3.toFixed(5));  // "12.36000"

alert(+num3.toFixed(5));  // 12.36000 (Converts back to a number)
```
You can convert the string back to a number by using the unary plus (`+`) operator.

**Floating-Point Precision Issues** JavaScript may encounter **floating-point precision errors**.

```js
alert(0.1 + 0.2);  
// 0.3000000000004 (Precision issue)

alert(+(0.1 + 0.2).toFixed(2));  
// 0.30 (Fixed by rounding)
```


---

### The Math Object

JavaScript has a built-in [**Math object**](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math) providing a set of mathematical functions and constants.

### Common Math Functions

JavaScript's `Math` object provides useful functions for various mathematical operations.

**`Math.abs(x)`**: Returns the absolute value of `x`.

```js
Math.abs(-5); // 5
```

**`Math.max(a, b, ...)`**: Returns the largest value among the arguments.

```js
Math.max(1, 2, 3); // 3
```

**`Math.min(a, b, ...)`**: Returns the smallest value among the arguments.

```js
Math.min(1, 2, 3); // 1
```

**`Math.pow(base, exponent)`**: Returns the base raised to the power of the exponent.

```js
Math.pow(2, 3); // 8
```

**`Math.sqrt(x)`**: Returns the square root of `x`.

```js
Math.sqrt(16); // 4
```

**Constants**:  
**`Math.PI`**: The value of Pi (3.14159...).

```js
Math.PI; // 3.141592653589793
```

**`Math.random()`**: Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).

```js
Math.random(); // Random number between 0 and 1
```

___

#### **Trigonometric Functions**:  
`Math.cos()`, `Math.sin()`, `Math.tan()` – Compute the cosine, sine, and tangent of an angle (in radians).  

`Math.asin()`, `Math.acos()`, `Math.atan()` – Compute the arcsine, arccosine, and arctangent, respectively.

#### **Rounding Functions**:  

**`Math.floor()`**: Rounds down to the nearest integer.  
**`Math.ceil()`**: Rounds up to the nearest integer.  
**`Math.round()`**: Rounds to the nearest integer.

____

