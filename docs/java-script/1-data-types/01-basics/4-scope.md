---
title: "05 - Scope of Variables"
description: ""
summary: ""
date: 2024-11-07T14:43:05+05:30
lastmod: 2024-11-07T14:43:05+05:30
draft: false
weight: 310
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


The **scope** of a variable is the region of your program source code in which it is defined.

Variables and constants declared with `let` and `const` are **block-scoped**. This means they are only defined within the block of code where the `let` or `const` statement appears.

Roughly speaking, if a variable or constant is declared within a set of curly braces, those curly braces delimit the region of code in which the variable or constant is defined.

When a declaration appears at the top level, outside of any code blocks, it is called a **global variable** or **constant**, and it has **global scope**. In **Node.js** and **client-side JavaScript modules**, the scope of a global variable is the file it is defined in. In traditional client-side JavaScript, the scope of a global variable is the **HTML document** in which it is defined.

It is a syntax error to use the same name with more than one `let` or `const` declaration in the same scope. However, it is legal (though generally discouraged) to declare a new variable with the same name in a **nested scope**.

```js
const x = 1;  // Declare x as a global constant

if (x === 1) {
    let x = 2;
    // Inside a block, x can refer to a different value
    console.log(x); // Prints 2
}
console.log(x);
// Prints 1: we're back in the global scope now
let x = 3;
// ERROR! Syntax error trying to re-declare x
```

---

## Declarations and Types

In statically typed languages like C or Java, the primary purpose of variable declarations is to specify the type of values that may be assigned to a variable. However, in JavaScript, there is no type associated with variable declarations. A JavaScript variable can hold a value of **any type**.

For example, it is perfectly legal (though generally poor programming style) in JavaScript to assign a number to a variable and then later assign a string to that variable:

```js
let i = 10;
i = "ten";
```


____

