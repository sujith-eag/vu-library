---
title: "01 - Lexical Structure"
description: ""
summary: ""
date: 2024-11-07T14:43:05+05:30
lastmod: 2024-11-07T14:43:05+05:30
draft: false
weight: 302
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


**Running JavaScript in Browser Console**     
JavaScript can be run in the browser console directly by opening the developer tools (usually by pressing `Ctrl+Shift+I`). Then, you can write JavaScript code in the console window.

#### Running JavaScript on Node.js      

To run JavaScript in Node.js, first, open the terminal and type `node` to start the REPL (Read-Eval-Print Loop):

```js
$ node
Welcome to Node.js v20.17.0.
Type ".help" for more information.
> let x = 2, y = 3
undefined
> x + y
5
> (x == 2) & (x === 2)
1
> (x === 2) && (y === 3)
true
> (x > 2) && (y < 3)
false
```

#### Node.js REPL Commands:

```js
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file
```

You can also enter editor mode to write code directly:

```js
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
let a = []
a.push(1, 2, 3)
a.reverse()

[3, 2, 1]
```

Or save a file with `.js` extension and run in node `$ node snippet.js`

---

#### Create HTML File to Run JavaScript in Browser

```html
<!-- hello.html -->
<html>
  <head>
    <title>JavaScript Example</title>
  </head>
  <body>
    <script src="hello.js"></script>
  </body>
</html>
```

```js
// hello.js

console.log("Hello, World!");
```

Open `hello.html` in a browser using a `file://` URL (e.g., `file:///Users/username/javascript/hello.html`) and open the Developer Tools (console) to see the output.

---

### Lexical Structure of JavaScript

The lexical structure defines how JavaScript code is written. It is the lowest syntax of a language that includes rules for naming variables, using comments, and structuring statements. 

- **Case Sensitivity**: JavaScript is case-sensitive, meaning that keywords, variables, function names, and identifiers must be consistently capitalized.

- **Spaces and Line Breaks**: JavaScript ignores spaces between tokens and line breaks, allowing for using spaces and newlines freely in code for formatting and indentation to make it better understandable.

### Comments

Comments are used to explain code and are ignored by the JavaScript engine.

Single-line comment`//`   Multi-line comment `/* ... */`
```js
// anyting follwing a double slashes is a comment

/* This is also a comment */   // and here is another comment.

/*
* This is a multi-line comment. The extra * characters at the start of
* each line are not a required part of the syntax; they just look cool!
*/
```

___

### Literals

Literals represent direct values used in code.

```js
12         // Number
1.2        // Number
"hello"    // String
'hi'       // String
true       // Boolean
false      // Boolean
null       // Null
```

### Identifiers

Identifiers are simply names for variables, functions, and other entities. They must start with a letter, underscore (`_`), or dollar sign (`$`).

```js
i
my_variable_name
v13
_dummy
$str
```

### Reserved Words

JavaScript has reserved words that cannot be used as identifiers, as they are part of the language syntax.

```js
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield
```

When creating a binding produces an unexpected syntax error, check whether you’re trying to define a reserved word.

### Optional Semicolons

Like many other languages, JS uses Semicolon `;` to separate statements, but they can often be omitted if each statement is on a new line.

You can also omit a semicolon at the end of a program or if the next token in the program is a closing curly brace : }

However, avoid inserting line breaks between `return`, `break`, or `continue` and the expression that follows them. This can lead to unexpected behavior.

```js
let a
a = 3
console.log(a)

// JavaScript interprets it as:
let a; a = 3; console.log(a);
```

If you insert a line break incorrectly:
```js
return
true;

// JS will be interpreted as:
return; true;
```

you must not insert a line break between return, break, or continue and the expression that follows the keyword. 

If you do insert a line break, your code is likely to fail in a non-obvious way that is difficult to debug.


____

