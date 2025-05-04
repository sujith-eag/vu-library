---
title: "01 - Auto Type Conversion"
description: ""
summary: ""
date: 2024-11-07T14:47:36+05:30
lastmod: 2024-11-07T14:47:36+05:30
draft: false
weight: 330
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


JavaScript automatically converts values between different types when necessary. This is commonly known as **type coercion**. It happens in a variety of scenarios, such as when performing mathematical operations or comparisons.

If JavaScript wants a string, it will convert whatever value you give it to a string. If JavaScript wants a number, it will try to convert the value you give it to a number (or to `NaN` if it cannot perform a meaningful conversion). When JavaScript expects a boolean value, you may supply a value of any type, and JavaScript will convert it as needed based on truthy or falsy.

---

### Automatic Type Conversion:

#### 1. **Comparison with Different Types**:

JavaScript will convert values to the same type when doing comparisons, which can sometimes produce unexpected results.

```js
'2' > 1        // '2' converted to number
true

'01' == 1      // '01' converted to number  
true

true == 1      // true is converted to 1
true

false == 0     // false converted to 0
true

10 + 'Object'  // 10 converted to string
'10Object'

'Object' + 10  // 10 converted to string
'Object10'

'7' + '4'      // Concatenates strings
'74'

'7' * '4'      // both strings converted to number
28

let n = 1 - "x";  // "x" cannot be converted to a number
n
NaN
n + "object"
'NaNobject'
```

#### 2. **Boolean Conversion**:

When converting values to `Boolean`, JavaScript considers certain values as **falsy** (which become `false`) and others as **truthy** (which become `true`).

**Falsy values**:

- 0
- "" (empty string)
- null
- undefined
- NaN

**Truthy values**:

- Non-zero numbers
- Non-empty strings
- Objects, arrays, functions, etc.

```js
Boolean(1)        // true
Boolean(0)        // false
Boolean("0")      // true
Boolean("")       // false
Boolean("Hello")  // true
Boolean(null)     // false
Boolean('null')   // true
Boolean([])       // true (empty array is truthy)
```

---

### Object-to-Primitive Conversion

Object-to-primitive conversion is somewhat more complicated. The primitive-to-primitive conversions shown in the table are relatively straightforward.

Keep in mind that convertibility of one value to another does not imply equality of those two values.

The `if` statement converts `undefined` to `false`, but the `==` operator never attempts to convert its operands to booleans.

**Use strict checks `===` and `!==` to avoid implicit conversions of types.**

---
