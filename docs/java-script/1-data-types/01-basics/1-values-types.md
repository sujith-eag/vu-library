---
title: "02 - Values and Types"
description: ""
summary: ""
date: 2024-11-07T14:43:05+05:30
lastmod: 2024-11-07T14:43:05+05:30
draft: false
weight: 304
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


The kinds of values that can be represented and manipulated in a programming language are known as types, and one of the most fundamental characteristics of a programming language is the set of types it supports.

**Values** are chunks of information. Each value has a specific **type** that defines how it behaves and interacts with other values.

There are eight basic types in JavaScript:

```js
number
bigint
string
boolean
null
undefined
object
symbol
```

---

## Types of Values

### Primitive Types

Primitive types can hold **only one value** at a time, and they are **immutable** (i.e., they can't be changed). These types include:

**String**: Represents a sequence of characters.  
`let name = "Eag";`

**Number**: Represents both integer and floating-point numbers. JavaScript doesn't distinguish between them — all numbers are of the same type.  
`let age = 30;`

**Boolean**: Represents a true or false value.  
`let isApproved = false;`

**Undefined**: Indicates that a variable has been declared but not assigned a value.  
`let firstName = undefined; // Value not initialized`

**Null**: Represents an intentionally empty or non-existent value.  
`let lastName = null; // Value intentionally left blank`

**BigInt**: Used to represent very large integers that are beyond the limit of the standard `Number` type.  
`let largeNumber = 1234567890123456789012345678901234567890n; // BigInt`

**Symbol**: Represents a unique and immutable value, often used to create unique identifiers.  
`let sym = Symbol("id");`

### Reference Types

Reference types can store **collections of data** and **more complex entities**. These include:

- **Object**: Is a member of type object, an unordered collection of named values (properties) where each property has a name and a value (either primitive or object).  
    `let user = { name: "John", age: 30 };`
    
- **Array**: A special type of object for storing ordered collections of numbered values, which is different from ordinary objects.  
    `let numbers = [1, 2, 3];`
    
- **Function**: A special type of object used to define callable blocks of code.
    
```js
function greet() {
  console.log("Hello!");
}
```
    
- **Symbol**: Used to create unique identifiers, ensuring no collisions in object properties.
    

---

### 'typeof' Operator

The `typeof` operator is used to determine the **type** of a value or variable. It returns a string indicating the type of the operand.  
The type can change based on the value it holds.

```js
typeof 0              // "number"
typeof 10n            // "bigint"
typeof 'foo'          // "string"
typeof Symbol("id")   // "symbol"

typeof Math           // "object"  (Math is an object)
typeof null           // "object"  (This is a known quirk in JavaScript)
typeof alert          // "function" (Functions are objects)
```

**Note**: The behavior of `typeof` with `null` is incorrect — it returns `"object"`, which is a **known issue** in JavaScript, but it's kept for compatibility reasons. `null` is not an object; it is its own unique type.

#17sep24 

____


