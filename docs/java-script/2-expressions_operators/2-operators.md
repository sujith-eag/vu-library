---
title: "02 - Operators"
description: ""
summary: ""
date: 2024-11-07T14:47:05+05:30
lastmod: 2024-11-07T14:47:05+05:30
draft: false
weight: 340
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



### Operand

An **operand** is the value or entity that an operator acts upon. In simple terms, it is the input for an operation.

In the expression `5 * 2`:

- The operands are `5` (on the left) and `2` (on the right).
- The operator `*` (multiplication) operates on these two operands.

Sometimes, operands are also referred to as "arguments", especially in the context of functions or method calls.

---

Operators can be categorized based on the number of operands they expect (their **arity**). Most JavaScript operators, like the multiplication operator `*`, are **binary operators** that combine two expressions into a single, more complex expression.

JavaScript also supports a number of **unary operators**, which convert a single expression into a single, more complex expression.

JavaScript supports one **ternary operator**, the **conditional operator `?:`**, which combines three expressions into a single expression.

#### Unary Operators (with one operand):

```js
++  // Pre- or post-increment

--  // Pre- or post-decrement

-   // Negate number

+   // Convert to number

~   // Invert bits

!   // Invert boolean value

delete  // Remove a property

typeof  // Determine type of operand

void    // Return undefined value
```

#### Binary Operators (between operands):

```js
**  // Exponentiation

+   // Add numbers, concatenate strings

*   // Multiply

/   // Divide

%   // Remainder

-   // Subtract

<   // Less than

<=  // Less than or equal to

>   // Greater than

>=  // Greater than or equal to

in  // Test whether property exists

instanceof  // Test object class
```

```js
=   // Assign to variable or property

==  // Test for non-strict equality

!=  // Test for non-strict inequality

=== // Strict equality test

!== // Strict inequality test

||  // Logical OR

&&  // Logical AND
```

```js
// Operate and assign
**=, *=, /=, %=, +=, -=
```

JavaScript operators usually convert the type of their operands as needed.

---

### Unary Operator

A **unary operator** is an operator that works with only one operand. It operates on a single value and typically performs an operation such as negation or increment.

```js
let x = 5;
x = -x;  // Unary negation operator (-) reverses the sign of 'x'
```

In this example, the unary negation operator `-` is applied to the operand `x`, and it changes the value of `x` from `5` to `-5`.

### Binary Operator

A **binary operator** is an operator that works with two operands. It performs operations between two values, such as addition, subtraction, or comparison.

```js
let x = 5, y = 3;
alert(y - x);  // Binary subtraction operator (-) subtracts 'x' from 'y', returns -2
```

Here, the binary operator `-` is applied between two operands, `y` and `x`. The result is `-2` (3 minus 5).

---

### Operator Precedence

**Operator precedence** determines the order in which operators are evaluated in an expression with multiple operators. Operators with higher precedence are evaluated first.

When operators have the same precedence, they are evaluated from **left to right** (except for certain operators like `**` and `=`, which are evaluated from right to left).

```js
let result = 2 + 3 * 4;  // The multiplication happens first
alert(result);  // 14 (3 * 4 = 12, then 2 + 12 = 14)
```

In this example, the multiplication (`*`) has higher precedence than addition (`+`), so `3 * 4` is calculated first.

#### Precedence of Common Operators:

- **Unary plus (`+`)**: Precedence level 14 (higher than addition)
- **Addition (`+`)**: Precedence level 12
- **Assignment (`=`)**: Precedence level 2 (lowest, so assignments happen last)

**[operator precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)**

---

### Modify in Place

Certain operators in JavaScript allow you to modify the value of a variable **in place**. These operators simplify assignments by performing an operation on a variable and immediately storing the result back in the same variable.

```js
let n = 2;

n = n + 5;  // standard way
n += 5;     // shorthand equivalent (same result)
```

The `+=` operator is a shorthand for adding to a variable and assigning the result back. This is true for all arithmetic and bitwise operators like `-`, `*`, `/`, and `%`.

```js
n = n * 2;  // standard multiplication
n *= 2;     // shorthand multiplication
```

---

### Increment / Decrement Operators

The **increment** (`++`) and **decrement** (`--`) operators increase or decrease a variable’s value by 1, respectively. They can be used in two forms:

1. **Postfix**: `counter++`
    - The **postfix** form increases the value after the current expression is evaluated.
2. **Prefix**: `++counter`
    - The **prefix** form increases the value before the current expression is evaluated.

```js
let counter = 1;
alert(2 * ++counter); // 4 (counter is incremented first, then used in the multiplication)
```

In this example, `++counter` increments the value of `counter` to `2` before multiplying by `2`.

```js
let counter = 1;
alert(2 * counter++); // 2 (counter is used first, then incremented)
```

Here, `counter++` uses the current value of `counter` (`1`), and then it gets incremented after the multiplication.

#### Rules:

- **Postfix**: Returns the value before the increment/decrement.
- **Prefix**: Returns the value after the increment/decrement.

Note: You **cannot** increment or decrement a constant or non-variable, such as `5++`, which will result in a syntax error.

---

### [Bitwise Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators)

Bitwise operators are used to perform operations on the **binary representation** of numbers. These operators treat operands as 32-bit integers and work on the bit level. While they are rarely used in everyday JavaScript programming, they are essential for low-level programming or working with data manipulation at the binary level.

#### List of Bitwise Operators:

1. **AND (`&`)**: Compares each bit of two numbers and returns `1` if both bits are `1`, otherwise `0`.
2. **OR (`|`)**: Compares each bit of two numbers and returns `1` if at least one of the bits is `1`.
3. **XOR (`^`)**: Compares each bit of two numbers and returns `1` if the bits are different, otherwise `0`.
4. **NOT (`~`)**: Inverts all bits of a number (flips `1` to `0` and `0` to `1`).
5. **Left Shift (`<<`)**: Shifts the bits of a number to the left by a specified number of positions, filling with zeros.
6. **Right Shift (`>>`)**: Shifts the bits of a number to the right, keeping the sign bit (for negative numbers).
7. **Zero-Fill Right Shift (`>>>`)**: Shifts the bits of a number to the right, filling with zeros (ignores sign bit).

```js
let a = 5;  // 0101 in binary
let b = 3;  // 0011 in binary

console.log(a & b);   // 1 (0101 & 0011 = 0001)
console.log(a | b);   // 7 (0101 | 0011 = 0111)
console.log(a ^ b);   // 6 (0101 ^ 0011 = 0110)
console.log(~a);      // -6 (inverts all bits of 5, result in 32-bit two's complement representation)
console.log(a << 1);  // 10 (shift left, 0101 becomes 1010)
console.log(a >> 1);  // 2 (shift right, 0101 becomes 0010)
console.log(a >>> 1); // 2 (shift right, zero-fill shift)
```

---
