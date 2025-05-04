---
title: "01 - Number Types"
description: ""
summary: ""
date: 2024-11-07T14:43:35+05:30
lastmod: 2024-11-07T14:43:35+05:30
draft: false
weight: 312
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


In JavaScript, there are two types of numbers: **Regular Numbers** and **BigInt Numbers**.

---

### Regular Numbers

**Regular Numbers** are stored in **64-bit** memory, with some bits representing the sign (positive or negative) and others representing the value of the number (including the decimal point for floating-point numbers).

#### Converting to Number

You can convert a value to a regular `number` using the `Number()` function. It will convert the value to a number if possible:

```js
const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum);  // "number"
```

---

### BigInt Numbers

A **BigInt** is a numeric type that can represent **integers of arbitrary length**, i.e., numbers larger than the limit of the regular `number` type (which is `2^53 - 1`). This makes **BigInt** useful for working with very large integers, such as cryptography or certain scientific calculations.

```js
const bigInt = 12345553213423423424241313322442324234342n;
// The 'n' at the end indicates it's a BigInt
```

BigInt literals are written as a string of digits followed by a lowercase letter `n`. By default, they are in base 10, but you can use the `0b`, `0o`, and `0x` prefixes for binary, octal, and hexadecimal BigInts:

```js
1234n     // A not-so-big BigInt literal
0b111111n   // A binary BigInt
0o7777n     // An octal BigInt
0x8000000000000000n   // => 2n**63n: A 64-bit integer
```

You can use `BigInt()` to convert regular JavaScript numbers or strings to BigInt values:

```js
BigInt(Number.MAX_SAFE_INTEGER)    // => 9007199254740991n

let string = "1" + "0".repeat(100);   // 1 followed by 100 zeros.

BigInt(string)        // => 10n**100n: one googol
```

Arithmetic with BigInt values works like arithmetic with regular JavaScript numbers, except that division drops any remainder and rounds down (toward zero). You may not mix operands of type BigInt with regular number operands. JavaScript does not allow mixed operands in arithmetic operations, but comparison operators work with mixed numeric types.

---

## Special Numeric Values

JavaScript has several special numeric values:

**Infinity**: Represents an infinitely large number. It results from dividing a positive number by zero.

```js
alert(1 / 0);  // Infinity
```

**-Infinity**: Represents an infinitely large negative number.
```js
alert(-1 / 0); // -Infinity
```

**NaN** (Not a Number): Indicates an invalid or undefined result of a mathematical operation.
```js
alert(0 / 0);  // NaN
alert("hello" * 2);  // NaN
```

`NaN` is **not equal** to itself (`NaN !== NaN`), which is a unique property in JavaScript. If `NaN` appears in an expression, the entire result will likely be `NaN`.


---

## Arithmetic Operators

JavaScript provides several operators for performing arithmetic operations on numbers:

```js
+   // Addition
-   // Subtraction
*   // Multiplication
/   // Division
%   // Modulo (Remainder) Operation
**  // Exponentiation (Power)
```

---

## Ways to Write Numbers in JavaScript

JavaScript provides different ways to represent numbers in a readable and compact form:

### 1. Using Underscores as Separators

You can use underscores to improve the readability of large numbers. These underscores are ignored during execution.

```js
let billion = 1_000_000_000; // 1 billion
```

### 2. Using Scientific Notation (e)

You can represent numbers using exponential (scientific) notation with the `e` character, where `e` represents "times 10 raised to the power of."

Positive exponent:
```js
let billion = 1e9;  // 1e9 is equal to 1,000,000,000 (1 billion)
alert(7.3e9);       // 7.3e9 is 7.3 billion
```

Negative exponent:
```js
let mcs = 1e-6;  // 1e-6 is 0.000001
alert(mcs);      // 0.000001
```


### 3. Standard Notation (Without Exponent)

A number can be written in its standard form without any scientific notation.

```js
let billion = 1000000000;  // 1 billion
```

---
