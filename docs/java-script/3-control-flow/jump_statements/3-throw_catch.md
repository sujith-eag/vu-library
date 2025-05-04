---
title: "03 - throw, try, catch, finally"
description: ""
summary: ""
date: 2024-11-07T20:52:20+05:30
lastmod: 2024-11-07T20:52:20+05:30
draft: false
weight: 374
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



`throw, try, catch, finally` form the basic exception / error handling mechanisms in JavaScript.

### Throw Statement

In JavaScript, exceptions are thrown whenever a runtime error occurs or when the program explicitly throws one using the `throw` statement. Exceptions are caught using the `try/catch/finally` statement.

```js
throw expression;
```

The `expression` can evaluate to any type of value. You might throw a number that represents an error code, or a string that contains a human-readable error message. The `Error` class and its subclasses are typically used when the JavaScript interpreter itself throws an error, but you can use them as well.

#### Throwing an Error Object

Here's a function that throws an `Error` object when invoked with an invalid argument:

```js
function factorial(x) {
  // If the input argument is invalid, throw an exception!
  if (x < 0) throw new Error("x must not be negative");
  
  // Otherwise, compute a value and return normally
  let f;
  for(f = 1; x > 1; f *= x, x--) /* empty */ ;
  return f;
}

factorial(4);  // => 24
```

When an exception is thrown, the JavaScript interpreter immediately stops normal program execution and jumps to the nearest exception handler. Exception handlers are written using the `catch` clause of the `try/catch/finally` statement.

If an exception is thrown in a function that does not contain a `try/catch/finally` statement to handle it, the exception propagates up to the code that invoked the function.

If no exception handler is found, the exception is treated as an error and is reported to the user.

---

### try/catch/finally Statement

The `try/catch/finally` statement is JavaScript’s exception handling mechanism. 

* The `try` block defines the code whose exceptions are to be handled. 
* The `try` block is followed by a `catch` block, which is executed when an exception occurs anywhere within the `try` block. 
* The `catch` block is followed by a `finally` block, which contains cleanup code that is guaranteed to be executed, regardless of what happens in the `try` block.

Both the `catch` and `finally` blocks are optional, but the `try` block must be accompanied by at least one of these blocks. 

The `try`, `catch`, and `finally` blocks all begin and end with curly braces. These braces are required, even if a clause contains only a single statement.

#### Syntax of 'try/catch/finally':

```js
try {
  // Normally, this code runs from the top of the block to the bottom
  // without problems. But it can sometimes throw an exception,
  // either directly with a `throw` statement, or indirectly, by calling
  // a method that throws an exception.
} catch (e) {
  // The statements in this block are executed if the `try` block throws
  // an exception. These statements can use the local variable `e` to refer
  // to the Error object or other value that was thrown.
  // This block may handle the exception, ignore it, or rethrow the exception.
} finally {
  // This block contains statements that are always executed, regardless of
  // what happens in the `try` block. They are executed whether the `try` block
  // terminates:
  // 1) normally, after reaching the bottom of the block
  // 2) because of a `break`, `continue`, or `return` statement
  // 3) with an exception that is handled by a `catch` clause above
  // 4) with an uncaught exception that is still propagating
}
```
`catch ()` keyword is generally followed by an identifier in parentheses. This identifier is like a function parameter. When an exception is caught, the value associated with the exception (an Error object) is assigned to this parameter.

___

#### Example of Using `try/catch/finally`:

```js
try {
  // Ask the user to enter a number
  let n = Number(prompt("Please enter a positive integer", ""));
  
  // Compute the factorial of the number, assuming the input is valid
  let f = factorial(n);
  
  // Display the result
  alert(n + "! = " + f);
} catch (ex) {
  // If the user's input was not valid, we end up here
  alert(ex); // Tell the user what the error is
}
```

In this example, if the user enters an invalid number, the exception is caught, and an error message is displayed.

#### Using 'finally'

Although `finally` is not used as often as `catch`, it can be useful. The `finally` block is guaranteed to be executed if any portion of the `try` block is executed, regardless of how the code in the `try` block completes. It is generally used to clean up after the code in the `try` clause.

#### Bare Catch Clauses

Sometimes, you may use a `catch` clause solely to detect and stop the propagation of an exception, even if you do not care about the type or value of the exception. In ES2019 and later, you can omit the parentheses and the identifier in the `catch` clause.

Here is an example:
```js
// Like JSON.parse(), but returns `undefined` instead of throwing an error
function parseJSON(s) {
  try {
    return JSON.parse(s);
  } catch {
    // Something went wrong, but we don't care what it was
    return undefined;
  }
}
```

In this example, the `catch` clause simply catches any errors that occur and ensures that `undefined` is returned instead of throwing an exception.

---
