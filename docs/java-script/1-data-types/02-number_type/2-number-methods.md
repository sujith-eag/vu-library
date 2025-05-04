---
title: "02 - Number Methods"
description: ""
summary: ""
date: 2024-11-07T14:44:18+05:30
lastmod: 2024-11-07T14:44:18+05:30
draft: false
weight: 314
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




Notes on Common Number Methods: **Rounding**, **Tests with `isNaN` and `isFinite`**, and **`parseInt()`/`parseFloat()` Functions** and **Math Object**

---

### Arithmetic Behavior in JavaScript

Arithmetic in JavaScript does not raise errors in cases of overflow, underflow, or division by zero. When the result of a numeric operation exceeds the largest representable number (overflow), the result is a special infinity value: `Infinity`. 

Similarly, when the absolute value of a negative number exceeds the largest representable negative number, the result is `-Infinity`.

```js
> Infinity      // too big number to represent
Infinity

> Number.POSITIVE_INFINITY  // same
Infinity

> 1 / 0
Infinity

> Number.MAX_VALUE      
1.7976931348623157e+308

> Number.MAX_VALUE * 2      // Overflow
Infinity
```

```js
> -Infinity
-Infinity

> Number.NEGATIVE_INFINITY     // same
-Infinity

> -1 / 0
-Infinity

> -Number.MAX_VALUE
-1.7976931348623157e+308

> -Number.MAX_VALUE * 2
-Infinity
```

```js
> 0 / 0
NaN

> Infinity / -Infinity
NaN

> Infinity / Infinity
NaN
```

Zero divided by zero does not have a well-defined value, and the result of this operation is the special "Not-a-Number" value, `NaN`. `NaN` also arises when attempting to divide infinity by infinity, take the square root of a negative number, or use arithmetic operators with non-numeric operands that cannot be converted to numbers.

---

### Number Properties in ES6

```js
// The following Number properties are defined in ES6:

Number.parseInt()       
// Same as the global parseInt() function

Number.parseFloat()     
// Same as the global parseFloat() function

Number.isNaN(x)         
// Is x the NaN value?

Number.isFinite(x)      
// Is x a number and finite?

Number.isInteger(x)     
// Is x an integer?

Number.isSafeInteger(x) 
// Is x an integer -(2**53) < x < 2**53?

Number.MIN_SAFE_INTEGER  
// => -(2**53 - 1)

Number.MAX_SAFE_INTEGER  
// => 2**53 - 1

Number.EPSILON           
// => 2**-52: smallest difference between numbers
```

---

## Testing for NaN and Finite Numbers

### Arithmetic Behavior

**Division by Zero**: When dividing by zero, JavaScript returns **Infinity** or **-Infinity** depending on the sign.
    
```js
alert(1 / 0);  // Infinity
alert(-1 / 0); // -Infinity
```

**NaN (Not a Number)**: If an operation results in a value that cannot be calculated, it returns `NaN` (Not a Number). This can happen in operations like division by zero, or invalid operations involving non-numeric values.

```js
alert("not a number" / 2);  // NaN
alert(NaN + 1);  // NaN
```

**Special Cases Involving NaN**:

- Any expression involving `NaN` will propagate `NaN` as the result:
```js
0 / 0;           // NaN
Infinity - Infinity;  // NaN
```

- **NaN Propagation**: If `NaN` is part of an expression, the result will also be `NaN`, unless the operation is **NaN raised to the power of 0**, which is **1**.

```js
NaN ** 0;   // 1
```


JavaScript provides special functions to handle cases where values may not be valid numbers or may be infinite. The **Not-a-Number** value has one unusual feature in JavaScript: it does not compare equal to any other value, including itself.

This means that you can’t write `x === NaN` to determine whether the value of a variable `x` is `NaN`. Instead, you must write `x != x` or `Number.isNaN(x)`. These expressions will be true if, and only if, `x` has the same value as the global constant `NaN`.

---

### 'isNaN()'

The `isNaN()` function returns true if its argument is `NaN`, or if that argument is a non-numeric value that cannot be converted to a number. It first converts the argument to a number and then checks if it is `NaN`.

```js
alert(isNaN(NaN));    
// true

alert(isNaN("str"));  
// true (because "str" is not a number)

alert(NaN === NaN);   
// false (NaN is not equal to itself)
```

### 'isFinite()'

The `isFinite()` function tests whether a value is a **finite number** (i.e., not `NaN`, `Infinity`, or `-Infinity`).

```js
alert(isFinite("15"));      
// true (string "15" is converted to number)

alert(isFinite("str"));     
// false (because "str" is not a number)

alert(isFinite(Infinity));  // false
alert(isFinite(-Infinity)); // false
```

`isFinite()` is often used to validate user input to ensure it's a regular number:

```js
let num = +prompt("Enter a number", '');
alert(isFinite(num));  
// true unless the value is NaN or Infinity
```

---

## Converting Strings to Numbers: 'parseInt()' and 'parseFloat()'

JavaScript provides two built-in functions to convert strings into numeric values: `parseInt()` and `parseFloat()`.

- **`parseInt()`**: Converts a string to an **integer** (whole number).
- **`parseFloat()`**: Converts a string to a **floating-point number** (decimal number).

### 'parseInt()'

`parseInt()` parses a string and returns an integer. It reads the string until it encounters a non-digit character, then stops parsing and returns the integer.

```js
alert(parseInt('100px'));  // 100
alert(parseInt('12.5em')); // 12 (stops parsing at the first non-numeric character)
alert(parseInt('12.3'));   // 12 (only integer part is parsed)
alert(parseInt('a123'));   // NaN (cannot parse anything)
```

### 'parseFloat()'

`parseFloat()` parses a string and returns a floating-point number. It reads until it encounters a character that is not part of a floating-point number (e.g., a letter).

```js
alert(parseFloat('12.5em')); // 12.5
alert(parseFloat('12.3.4')); // 12.3 (stops parsing at the second dot)
alert(parseFloat('100px'));  // 100
alert(parseFloat('a123'));   // NaN
```

### Numeric Conversion Using + or 'Number()'

For strict conversion of a string to a number, you can use the unary plus (`+`) or `Number()` function. These will fail if the string cannot be strictly converted to a valid number.

```js
alert(+"100px"); // NaN (invalid string)
alert(Number("100px")); // NaN

alert(+"123");  // 123 (valid number)
alert(Number("123")); // 123
```

---
