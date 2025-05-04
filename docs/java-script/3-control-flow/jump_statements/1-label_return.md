---
title: "01 - label, return, yield"
description: ""
summary: ""
date: 2024-11-07T20:52:03+05:30
lastmod: 2024-11-07T20:52:03+05:30
draft: false
weight: 370
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Jump statements are a category of JavaScript statements that cause the JavaScript interpreter to jump to a new location in the source code. These statements control the flow of execution by transferring control to different parts of the program.

#### 1. Named (Labeled) Statements
JavaScript allows statements to be named or labeled. Both `break` and `continue` can identify the target loop or other statement by using a label.

#### 2. break Statement
The `break` statement makes the interpreter jump to the end of a loop or other statement, effectively terminating it. This is typically used to exit a loop early based on a condition.

#### 3. continue Statement
The `continue` statement makes the interpreter skip the rest of the body of a loop and jump back to the top of the loop to begin a new iteration. It is used to skip certain iterations of a loop.

#### 4. return Statement

The `return` statement makes the interpreter jump from a function invocation back to the code that invoked it. It also provides a value to the function's invocation.

#### 5. throw Statement

The `throw` statement is a type of interim return from a generator function. It raises, or throws, an exception and is designed to work with the `try/catch/finally` statement. The `try/catch/finally` block establishes a section of exception-handling code. When an exception is thrown, the interpreter jumps to the nearest enclosing exception handler, which could be in the same function or in a calling function up the call stack.

---

### Labels in JavaScript

Any statement may be labeled by preceding it with an identifier and a colon:

```js
identifier: statement
```

A label is an **identifier** followed by a colon (`:`) before a loop or other block of code. For example:

```js
labelName: for (...) {
  // loop body
}

labelName:
for (...) {
  // loop body
}
```

By labeling a statement, you give it a name that can be used to refer to it elsewhere in your program. This is particularly useful for statements that have bodies, such as loops and conditionals.

Using a label allows you to use `break` and `continue` statements inside the body of the loop to either exit the loop or jump directly to the top of the loop to begin the next iteration. **`break`** and **`continue`** are the only JavaScript statements that utilize statement labels.

#### Using Labels in Nested Loops

When you need to break or continue **multiple loops** at once, labels become extremely useful.

Example of using a label to continue a specific loop:

```js
mainloop: while (token !== null) {
  // Code omitted...
  continue mainloop;  // Jump to the next iteration of the named loop
  // More code omitted...
}
```

The namespace for labels is different from the namespace for variables and functions. This means you can use the same identifier for both a statement label and a variable or function name without conflict.

---

### return Statement

A `return` statement within a function specifies the value that is returned when the function is invoked.

```js
return expression;
```

A `return` statement can only appear within the body of a function. It is a syntax error for it to appear anywhere else. When the `return` statement is executed, the function returns the value of `expression` to its caller. For example:

```js
function square(x) { 
  return x * x;  // A function that has a return statement
}

square(2);  // => 4
```

If there is no `return` statement in a function, the function simply executes each statement in the function body in turn, and when it reaches the end, it returns `undefined` by default.

___

A function **returns** to its caller when the `return` statement is executed, even if there are other statements remaining in the function body. For example:

```js
function displayObject(o) {
  // Return immediately if the argument is null or undefined
  if (!o) return;
  // rest of the function
}
```

In this example, if the argument `o` is falsy (null, undefined, etc.), the function returns immediately without executing the rest of the code in the function body.

---

#### yield Statement

The `yield` statement is similar to the `return` statement but is used only in ES6 generator functions to produce the next value in the generated sequence without actually returning the function.

```js
// A generator function that yields a range of integers
function* range(from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
}
```

In order to understand `yield`, you must understand **iterators** and **generators**.

Technically, `yield` is an **operator** rather than a statement.

---
