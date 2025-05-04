---
title: "02 - String Methods"
description: ""
summary: ""
date: 2024-11-07T14:45:28+05:30
lastmod: 2024-11-07T14:45:28+05:30
draft: false
weight: 322
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Strings in JavaScript are **primitive values** and are immutable, meaning their content cannot be modified after they are created. However, they come with built-in properties and methods that allow manipulation and examination of string data.

### Basic String Methods

String methods in JavaScript are used to manipulate string values, and they are applied with dot notation. For example: `str.toLower()`, `str.indexOf()`.

```js
string.length
at(position)        // Allows negative index
charAt(position)    // Character from position
string[pos]         // Square bracket indexing works the same

toUpperCase()
toLowerCase()
```

```js
// searching for a substring 

search()
indexOf()   // Returns the position of first occurrence
lastIndexOf()  // Returns the position of last occurrence
match()     // Matches a regular expression
includes()   // Returns true if substring is found
startsWith()    // Checks if string starts with substring
endsWith()     // Checks if string ends with substring
```

```js
// String manipulation

"str".repeat(n)     // Repeats string n times

padStart(targetLength, padString)  
padEnd(targetLength, padString)

trim()     // Removes whitespace from both ends
trimStart()  // Removes whitespace from the start
trimEnd()   // Removes whitespace from the end
```

```js
// Special String Methods

charCodeAt(position)  // Returns Unicode value of character
codePointAt(pos)    // Returns decimal code for character at position
fromCodePoint(code) // Creates a character from its numeric code
```

---

#### String Length

The `length` property returns the number of characters in a string, counting spaces and special characters like `\n`.

```js
let text = 'Hello, world!';
let len = text.length;
alert(len);  // 13

alert( `My\n`.len );  
// 3 because \n is considered one character
```

Note: `str.length` is a numeric property, not a function, so it is used without parentheses.

____

#### Accessing String Characters

There are several ways to access characters in a string:

**Using `[]`**: Access a character at a specific position.     
**Note**: `[]` does not support negative indexing.
```js
let text = "Hello";
let char = text[0];  // "H"
```

**Using `at(position)`**: This method supports negative indices, counting from the end of the string.

```js
let text = "Hello";
console.log(text.at(0));    // "H"
console.log(text.at(-1));   // "o"
```

**Using `charAt(position)`**: Works similarly to `at()`, but does not support negative indexing.

```js
let text = "Hello";
console.log(text.charAt(0));  // "H"
```

**Using `charCodeAt(position)`**: Returns the Unicode (ASCII) value of the character at the specified position.

```js
let text = "Hello";
console.log(text.charCodeAt(0));  // 72 (Unicode value for 'H')
```

#### Iterating Over Characters

To iterate over each character in a string, you can use a `for...of` loop.

```js
for (let char of "Hello") {
  alert(char);  // "H", "e", "l", "l", "o"
}
```

---

### String Methods: Immutable Operations

Strings in JavaScript are immutable, meaning their characters cannot be modified directly. If you want to change a string, you must create a new one.

```js
let str = "hi";
str[0] = 'H';  // This does not work
alert(str[0]);  // "h"

let newStr = 'H' + str[1];  // Create a new string
alert(newStr);  // "Hi"
```

### Case Conversion

You can convert strings to upper or lower case using `toUpperCase()` and `toLowerCase()`.

```js
let text = "Hello World";
let upperCase = text.toUpperCase();  // "HELLO WORLD"
let lowerCase = text.toLowerCase();  // "hello world"

alert( 'Interface'.toUpperCase() );  // "INTERFACE"
alert( 'Interface'[0].toLowerCase() );  // "i"
```

### Searching for Substrings

JavaScript provides several methods to search for substrings within strings:

**`search()`**: Searches for a match against a regular expression and returns the index of the match.
    
```js
let text = "Hello world!";
let index = text.search("world");  // 6 (position where "world" starts)
alert(index);
```
    
**`indexOf()`**: Finds the position of the first occurrence of a substring.

```js
let text = 'Widget with id';
alert(text.indexOf('Widget'));  // 0
alert(text.indexOf('widget'));  // -1 (case-sensitive)
```
    
**`lastIndexOf()`**: Similar to `indexOf()`, but searches from the end of the string.
    
```js
let text = 'As sly as a fox, as strong as an ox';
let target = 'as';
let pos = text.lastIndexOf(target);  // 30 (last "as")
alert(pos);
```
    
**`match()`**: Returns matches based on a regular expression.
    
```js
let text = "The rain in Spain stays mainly in the plain";
let matches = text.match(/ain/g);  // ["rain", "Spain", "plain"]
alert(matches);
```

**`includes()`**: Returns `true` if the substring is found, otherwise `false`.

```js
alert("Hello World".includes("World"));  // true
alert("Hello World".includes("world"));  // false
```

**`startsWith()`**: Checks if the string starts with the given substring.
    
```js
alert("Hello".startsWith("He"));  // true
alert("Hello".startsWith("he"));  // false
```
    
**`endsWith()`**: Checks if the string ends with the given substring.
    
```js
alert("Hello".endsWith("lo"));  // true
alert("Hello".endsWith("ell"));  // false
```

____

### String Padding

JavaScript provides `padStart()` and `padEnd()` to pad strings to a specific length:

- **`padStart(targetLength, padString)`**: Pads the start of a string until it reaches `targetLength`.

```js
let text = "5";
console.log(text.padStart(3, "0"));  // "005"
```

- **`padEnd(targetLength, padString)`**: Pads the end of a string until it reaches `targetLength`.

```js
let text = "5";
console.log(text.padEnd(3, "0"));  // "500"
```

### Special String Methods

- **`toUpperCase()` and `toLowerCase()`**: Convert a string to uppercase or lowercase.
- **`trim()`**: Removes whitespace from both ends of a string.

```js
let str = "   Hello World   ";
console.log(str.trim());  // "Hello World"
```

- **`charCodeAt()`**: Returns the Unicode value of a character at a specific index.
- **`codePointAt()`**: Returns the code point of a character at the specified position.

```js
let str = "Hello";
console.log(str.charCodeAt(0));  // 72
console.log(str.codePointAt(0));  // 72
```

- **`String.fromCodePoint()`**: Converts a Unicode code point to a string.

```js
let char = String.fromCodePoint(72);  // "H"
console.log(char);
```

---
