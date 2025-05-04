---
title: "Boolean Type"
description: ""
summary: ""
date: 2024-11-07T14:51:09+05:30
lastmod: 2024-11-07T14:51:09+05:30
draft: false
weight: 326
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Booleans are a primitive data type with only two possible values: `true` and `false`. They are commonly used to represent binary states such as "yes/no" or "on/off".

```js
let nameFieldChecked = true;
let ageFieldChecked = false;
```
___

Boolean values often come as the result of comparison operations. (`==, `!=`, `>=`, `<=`)

```js
let n = 3;
n === 3  // true
n > 3    // false
n < 4    // true
```

```js
let a = 4;
let b = 2;

if(a === 4) { b = b + 1; } else { a = a + 1; }
// 3  
```

This code checks whether `a` equals 4. If so, it adds 1 to `b`; otherwise, it adds 1 to `a`.

____

#### String Comparison

When comparing strings, JavaScript compares their Unicode values from left to right, one character at a time. This means that **uppercase letters** are considered "less than" **lowercase letters** (because their Unicode values are smaller), and **non-alphabetical characters** are also considered.

Here's the step-by-step process: Compare the first character. If they are the same, move to the next character and repeat. The first difference found determines the result.

```js
'z' > 'A'       
// true    // uppercase 'A' < lowercase 'z'

'Glow' > 'Glee' 
// true    // 'o' > 'e' so 'Glow' is greater than 'Glee'

'Glow' > 'Gmm'  // false

'Aardvark' < 'Zoroaste'  
// true   // 'A' < 'Z' because of Unicode comparison

'Bee' > 'Be'    
// true    // 'Bee' is longer than 'Be'

'Bee' > 'be'    // false
```

---

### Type Conversion to Boolean

JavaScript value can be converted to a boolean value. The following values convert to, and therefore work like, false:

```js
undefined
null
0
-0
NaN
""    // the empty string
```

All other values, including all objects (and arrays) are called truthy. Any time JavaScript expects a boolean value, a falsy value works like false and a truthy value works like true.

---

### Strict Comparison
(`===`, `!==`)

Regular check `==` cannot differentiate `0` from `false`. For strict equality comparisons, JavaScript offers the `===` (strict equality) and `!==` (strict inequality) operators. These operators **do not perform type conversion**. The `==` equality operator is deprecated in favor of the strict equality operator `===`, which does no type conversions.

Regular equality comparison performs type conversion:

```js
// 0 and "" empty string are falsy

0 == false    // true
"" == false   // true
```

Strict equality comparison does not perform type conversion. When we use `===` or `!==`, JavaScript checks both the **value and the type**, so there's no unexpected type conversion:

```js
// "" is a string
"" === false  // false

// 0 is a number
0 === false   // false
```

---

### Comparison with 'null' & 'undefined'

- `null` is a keyword used to indicate the absence of a value. Using the `typeof` operator on `null` returns the string "object", indicating that `null` can be thought of as a special object value that indicates "no object" used to indicate "no value" for numbers and strings as well as objects. (similar to NULL, nil or None of other languages)
- `undefined` represents a deeper kind of absence. It is the value of variables that have not been initialized and the value you get when you query the value of an object property or array element that does not exist.
- `undefined` is a predefined global constant (not a language keyword like null)

With **Equality `==`**: `null` and `undefined` are considered equal to each other, but not equal to any other values.

With **Strict Equality `===`**: `null` is not equal to `undefined`, because they are different types.


```js
> null == undefined  // only null == undefined is true
true

> null === undefined  // strict comparison
false

> null == 0    // null is not equal to 0
false

> null == false  // null is not equal to false
false
```


#### Testing for a valid value:

To check if a variable is not `null` or `undefined`, use the `==` or `!=` operators. This can be useful to determine if a value has been set.

`if( n !== null )` is strict and executes only if the value is not `null`. `if (n)` is less strict, it will execute the body of the if only if `n` is not false or any falsy value (such as `null` or `undefined`).

If you need to distinguish `null` from `0` and `""`, then you should use an explicit comparison.

```js
let value = null;

if (value == null) {
    alert("Value is null or undefined");
} else if (value !== null) {
    alert("Value not null");
}
```

---

### Math Comparisons 
(`>`, `<`, `<=`, `>=`)

When performing mathematical comparisons involving `null` or `undefined`, JavaScript performs type coercion:

- **`null` becomes `0`** when compared mathematically.
- **`undefined` becomes `NaN`** (Not-a-Number), which is **never equal to any number**.

```js
alert(null < 0);    // false (null is treated as 0)
alert(null == 0);   // false (null is not equal to 0)
alert(null >= 0);   // true (null is treated as 0)

alert(undefined == 0);  // false (undefined is not equal to 0)
alert(undefined < 0);   // false (undefined becomes NaN, which is not less than 0)
alert(undefined >= 0);  // false (undefined becomes NaN, which is not greater than or equal to 0)
```

---

|Comparison|`==` Behavior|`===` Behavior|
|---|---|---|
|**`null == undefined`**|true|false|
|**`null == 0`**|false|false|
|**`undefined == 0`**|false|false|
|**`null < 0`**|false|-|
|**`null >= 0`**|true|-|
|**`undefined < 0`**|false|-|
|**`undefined >= 0`**|false|-|

---

### Logical Expression

Boolean values have a `toString()` method that you can use to convert them to the strings "true" or "false", but they do not have any other useful methods.

The `&&` operator performs the Boolean AND operation. It evaluates to a truthy value if and only if both of its operands are truthy; it evaluates to a falsy value otherwise.

The `||` operator is the Boolean OR operation: it evaluates to a truthy value if either one (or both) of its operands is truthy and evaluates to a falsy value if both operands are falsy.

The unary `!` operator performs the Boolean NOT operation: it evaluates to `true` if its operand is falsy and evaluates to `false` if its operand is truthy.

```js
if ((x === 0 && y === 0) || !(z === 0)) {
    // x and y are both zero or z is non-zero
}
```

_____
