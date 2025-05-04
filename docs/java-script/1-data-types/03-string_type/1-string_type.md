---
title: "01 - String Type"
description: ""
summary: ""
date: 2024-11-07T14:44:54+05:30
lastmod: 2024-11-07T14:44:54+05:30
draft: false
weight: 320
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


A **string** is a sequence of characters enclosed in single quotes (`' '`), double quotes (`" "`), or backticks (`` ` ``). Strings are one of the most commonly used data types in JavaScript.

An **empty string** is a string of length 0. JavaScript does not have a special type that represents a single element of a string.

#### String Literals

```js
let str = "Hello";                
// Double quotes

let str1 = 'Single quotes are ok'; 
// Single quotes
```

### Template Literals

Template literals are enclosed in backticks (`` ` ``) and can include JavaScript expressions inside `${}`. The value of the expression is evaluated, converted to a string, and combined with the surrounding characters.

```js
let name = "Bill";
let greeting = `Hello ${name}.`; 
// "Hello Bill"
```

```js
let a = 5, b = 10;
let result = `${a} + ${b} = ${a + b}`; 
// "5 + 10 = 15"
```

```js
let phrase = `Backticks allow embedding expressions like ${str}`;

let combined = `${str} ${phrase}`;  
// String concatenation using template literals

alert(`1 + 2 = ${sum(1, 2)}.`);     
// Using template literals to embed function results
```

```js
let name = "John";
console.log(`Hello, ${name}`); 
// Hello, John

console.log(`The result of 1 + 2 is ${1 + 2}`); // The result of 1 + 2 is 3
```

- **Multiline Strings**: Template literals can span multiple lines without escape characters.

```js
let multiline = `This is a string
that spans multiple lines.`;
```

```js
let errorMessage = '\
\u2718 Test failure at ${filename}: ${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
';
```

### Tagged Template Literals

```js
'\n'.length   // 1  (one character)

String.raw`\n`.length  // 2 (backslash and n)
```

Tagged template literals allow you to pass the template and its expressions to a function (called a "tag"). The function can process the expressions and return a value.

If a function name (or “tag”) comes right before the opening backtick, then the text and the values of the expressions within the template literal are passed to the function. The value of this “tagged template literal” is the return value of the function. 

The built-in `String.raw()` tag returns the string inside backticks without processing backslash escapes.


**Note :**  Even though the tag portion of a tagged template literal is a function, there are no parentheses used in its invocation. In this very specific case, the backtick characters replace the open and close parentheses.

The ability to define your own template tag functions is a powerful feature of Java‐Script. These functions do not need to return strings, and they can be used like constructors, as if defining a new literal syntax for the language.

___

### Escaping Characters

Escaping characters allows you to treat characters as literal text when needed, such as for special characters like quotes, newlines, or backslashes.

- **Escape sequences**:
    - `\n`: Newline character
    - `\t`: Tab character
    - `\\`: Backslash
    - `\'`: Single quote
    - `\"`: Double quote
    - `\0`: Null character
    - `\b`: Backspace
    - `\v`: Vertical tab

```js
let message = "First line\nSecond line";
console.log(message);  
// First line (newline) Second line

const quote = "I\'ve got no right to take my place";  // Escape single quote

console.log(quote);  
// I've got no right to take my place
```

### Concatenation

Concatenation is combining two or more strings into one. You can use the `+` operator to concatenate strings.

```js
let first = "Hello";
let second = "World";
let combined = first + " " + second;  
// "Hello World"

let name = "con" + "cat" + "e" + "nate"
```

If any operand is a string, the other is converted to a string and concatenated.

```js
alert('1' + 2);   // "12" (number 2 converted to string)
alert(2 + "1");   // "21" (number 2 converted to string)
```

JavaScript concatenates strings from **left to right**:

```js
alert(2 + 1 + "1");    // "31" (2 + 1 = 3, then "3" + "1" = "31")
alert("2" + 1 + 1);    // "211" ("2" + 1 = "21", then "21" + 1 = "211")
```

All other math operators try to convert string to number and do the operation but not `+`

The `String()` function explicitly converts other data types to strings.

```js
let number = 123;
let str = String(number);  // Converts the number to a string
console.log(str);          // "123"
```

### Comparing Strings

Strings can be compared using the standard `===` equality and `!==` inequality operators. Two strings are equal if they consist of the exact same sequence of characters. Strings can also be compared using the `<`, `<=`, `>`, and `>=` operators.


____
