---
title: "01 - Control Statements"
description: ""
summary: ""
date: 2024-11-07T20:46:23+05:30
lastmod: 2024-11-07T20:46:23+05:30
draft: false
weight: 352
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Expressions are evaluated to produce a value, but statements are executed to make something happen.

**Expression Statements:**  
Expressions with side effects, such as assignments and function invocations, can stand alone as statements. When used this way, they are known as **expression statements**.

**Declaration Statements:**  
A similar category of statements are the **declaration statements**, which declare new variables and define new functions.

By default, the JavaScript interpreter executes these statements one after another in the order they are written. However, there are ways to alter this default order of execution, using control structures in JavaScript:

- **Conditionals:**  
    Statements like `if` and `switch` that make the JavaScript interpreter execute or skip other statements depending on the value of an expression.
    
- **Loops:**  
    Statements like `while` and `for` that execute other statements repetitively.
    
- **Jumps:**  
    Statements like `break`, `return`, and `throw` that cause the interpreter to jump to another part of the program.
    

---

### Expression Statements

The simplest kinds of statements in JavaScript are expressions that have side effects. **Assignment statements** are a major category of expression statements.

```js
greeting = "Hello " + name;
i *= 3;
```

The increment (`++`) and decrement (`--`) operators are also related to assignment statements.  
Function calls are another major category of expression statements.

---

### Compound and Empty Statements

**Compound Statements:**  
A statement block combines multiple statements into a single compound statement. A statement block is simply a sequence of statements enclosed within curly braces.

```js
{
  x = Math.PI;
  cx = Math.cos(x);
  console.log("cos(π) = " + cx);
}
```

The primitive statements within the block end in semicolons, but the block itself does not.  
A compound statement allows you to use multiple statements where JavaScript syntax expects a single statement.

**Empty Statement:**  
The **empty statement** is the opposite of a compound statement: it allows you to include no statements where one is expected. The empty statement looks like this:

```js
;
```

The JavaScript interpreter takes no action when it executes an empty statement. The empty statement is occasionally useful when you want to create a loop that has an empty body.

```js
// Initialize an array a
for(let i = 0; i < a.length; a[i++] = 0) ;
```

Note that the accidental inclusion of a semicolon after the right parenthesis of a `for` loop, `while` loop, or `if` statement can cause frustrating bugs that are difficult to detect.

```js
if ((a === 0) || (b === 0)); // This line does nothing...
  o = null;   // and this line is always executed.
```

When you intentionally use the empty statement, it’s a good idea to comment your code to clarify your intention.

```js
for(let i = 0; i < a.length; a[i++] = 0) /* empty */ ;
```

---

