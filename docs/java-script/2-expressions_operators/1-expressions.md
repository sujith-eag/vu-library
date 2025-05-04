---
title: "01 - Expressions"
description: ""
summary: ""
date: 2024-11-07T14:47:05+05:30
lastmod: 2024-11-07T14:47:05+05:30
draft: false
weight: 338
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


An **expression** is a phrase in JavaScript that can be evaluated to produce a value.

A variable name is also a simple expression that evaluates to whatever value has been assigned to that variable. Complex expressions are built from simpler expressions.

The most common way to build a complex expression out of simpler expressions is with an operator. An operator combines the values of its operands (usually two of them) in some way and evaluates to a new value.

---

If you already know another programming language that uses C-style syntax, you’ll find that the syntax of most of JavaScript’s expressions and operators is already familiar to you.

The simplest expressions, known as **primary expressions**, are those that stand alone—they do not include any simpler expressions. Primary expressions in JavaScript are constant or literal values, certain language keywords, and variable references. **Literals** are constant values that are embedded directly in your program. They look like these:

```js
1.23
"hello"
/pattern/
true
null
this
i
sum
undefined
```

---

### Array and Object Initializers

An **array initializer** is a comma-separated list of expressions contained within square brackets. The value of an array initializer is a newly created array. The elements of this new array are initialized to the values of the comma-separated expressions:

```js
[]
[1 + 2, 3 + 4]

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let sparseArray = [1, , , , 5];
```

**Object initializer expressions** are like array initializer expressions, but the square brackets are replaced by curly brackets, and each subexpression is prefixed with a property name and a colon:

```js
let p = { x: 2.3, y: -1.2 }; // An object with 2 properties

let q = {}; // An empty object with no properties
q.x = 2.3;
q.y = -1.2;  

// Now q has the same properties as p
```

Object literals can be nested.

```js
let rectangle = {
  upperLeft: { x: 2, y: 2 },
  lowerRight: { x: 4, y: 5 }
};
```

---

### Function Definition Expressions

A **function definition expression** defines a JavaScript function, and the value of such an expression is the newly defined function. In a sense, a function definition expression is a “function literal.”

```js
// This function returns the square of the value passed to it.
let square = function(x) { return x * x; };
```

Functions can also be defined using a **function statement** rather than a function expression. And in ES6 and later, function expressions can use a compact new **arrow function** syntax.

---

### Property Access Expressions

A **property access expression** evaluates to the value of an object property or an array element. JavaScript defines two syntaxes for property access:

```js
expression . identifier

expression [ expression ]
```

The expression specifies the object, and the identifier specifies the name of the desired property:

```js
let o = {x: 1, y: {z: 3}};
let a = [o, 4, [5, 6]];

o.x         // 1
o.y.z       // 3
o["x"]      // 1
a[1]        // 4
a[2]["1"]   // 6
a[0].x      // 1
```

---

### Object Creation Expressions

An **object creation expression** creates a new object and invokes a function (called a constructor) to initialize the properties of that object. Object creation expressions are like invocation expressions except that they are prefixed with the keyword `new`:

```js
new Object()
new Point(2, 3)
```

If no arguments are passed to the constructor function in an object creation expression, the empty pair of parentheses can be omitted:

```js
new Object
new Date
```


____

