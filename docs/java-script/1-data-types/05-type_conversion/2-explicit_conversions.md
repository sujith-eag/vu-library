---
title: "02 - Explicit Type Conversion"
description: ""
summary: ""
date: 2024-11-07T14:47:36+05:30
lastmod: 2024-11-07T14:47:36+05:30
draft: false
weight: 332
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



There are situations where you might need to explicitly convert values between types, which can be done using functions like `String()`, `Number()`, and `Boolean()`.

#### String Conversion

To convert a value to a string explicitly, you can use the `String()` function.

```js
> Number("3")
3

> String(false)
'false'

> Boolean(1)
true

> Boolean([])
true

> let value = true;
> value = String(value);
"true"
> typeof value
"string"
```

```js
> let num = "100";
> let bool = "false";

> Number(num)
100

> Number(bool)  // not a number
NaN

> Boolean(bool)  // non-empty string
true

> String(num)
'100'
```

Alternatively, you can use string concatenation to convert any value to a string:

```js
> let numm = 123;
undefined

// Converts to string by concatenation to string
> let strr = numm + ""
undefined
> strr
'123'
```

#### Implicit Operator Conversion

Certain JavaScript operators perform implicit type conversions and are sometimes used explicitly for the purpose of type conversion:

- If one operand of the `+` operator is a string, it converts the other one to a string.
- The unary `+` operator converts its operand to a number.
- The unary `!` operator converts its operand to a boolean and negates it.

```js
x + ""   // => String(x)
+x       // => Number(x)
x - 0     // => Number(x)
!!x      // => Boolean(x): Note double !
```

#### Numeric Conversion

When performing mathematical operations, JavaScript automatically converts strings to numbers if they represent valid numeric values. For explicit conversion, the `Number()` function can be used.

```js
let str = "123";
let num = Number(str);
alert(num);  // 123
alert(typeof num);  // "number"
```

If the value is not a valid number, `Number()` will return `NaN`.

```js
let str = "Hello";
let num = Number(str);
alert(num);  // NaN
```

Common automatic conversions:

- `undefined` becomes `NaN`
- `null` becomes `0`
- Strings containing a valid numeric value are converted to numbers (e.g., `"123"` becomes `123`).
- Non-numeric strings become `NaN`.

#### Numeric Conversion with Unary `+`

The unary `+` operator is a shorthand for converting a value to a number, similar to `Number()`.

```js
alert(+true);   // 1
alert(+false);  // 0
alert(+"");     // 0
alert(+undefined); // NaN
```

In the case of strings that are numbers, it works like `Number()`:

```js
let apple = "2";
let orange = "3";

alert(apple + orange);    // "23" (concatenation, as both are strings)
alert(+apple + +orange);  // 5 (conversion to number, then addition)
```

---

#### toString()

The `toString()` method, and the result of this method is usually the same as that returned by the `String()` function.

The `toString()` method, defined by the `Number` class, accepts an optional argument that specifies a radix, or base, for the conversion. If you do not specify the argument, the conversion is done in base 10. However, you can also convert numbers in other bases (between 2 and 36).

```js
> let n = 17
> let binary =  n.toString(2);
> binary
'10001'

> let octal = n.toString(8)
> octal
'21'

> let hex = n.toString(16);
> hex
'11'
```

The `Number` class defines three methods for these kinds of number-to-string conversions.

- `toFixed()` converts a number to a string with a specified number of digits after the decimal point. It never uses exponential notation.
- `toExponential()` converts a number to a string using exponential notation, with one digit before the decimal point and a specified number of digits after the decimal point (which means that the number of significant digits is one larger than the value you specify).
- `toPrecision()` converts a number to a string with the number of significant digits you specify.

```js
let n = 123456.789;
n.toFixed(0)      // "123457"
n.toFixed(2)      // "123456.79"
n.toFixed(5)      // "123456.78900"
n.toExponential(1) // "1.2e+5"
n.toExponential(3) // "1.235e+5"
n.toPrecision(4)  // "123457"
n.toPrecision(7)  // "123456.8"
n.toPrecision(10) // "123456.7890"
```

---

- **String Conversion**: `String(value)` or concatenating with an empty string (`value + ""`) will convert any value to a string.
- **Numeric Conversion**: `Number(value)` or unary `+` will convert values to numbers. If the value is not a valid number, it will return `NaN`.
- **Boolean Conversion**: `Boolean(value)` converts any value to true or false, based on its truthiness.

---

