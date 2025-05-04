---
title: "03 - String Manipulation Methods"
description: ""
summary: ""
date: 2024-11-07T14:46:14+05:30
lastmod: 2024-11-07T14:46:14+05:30
draft: false
weight: 324
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

```js
// Getting a substring
slice(start, end)
substring(start, end)
substr(start, length)	

// String Concatenation
+
concat(" ", toJoin)

// Whitespace Manipulation
trim()
trimStart()
trimEnd()

// Padding Strings
padStart(Number, element)
padEnd(Number, element)

// Repeating Strings
repeat(count)

// Replacing Parts of Strings
replace(toReplace, replacedWith)
replaceAll(toReplace, replacedWith)

// String to Array Conversion
split(separator)
join(separator)

// Reversing an Array
reverse()

```

____

#### 1. Extracting Substrings

##### slice(start [, end])

The `slice()` method extracts a portion of a string and returns a new string. If the `end` parameter is omitted, it slices from the `start` to the end of the string.

- **Negative indices** count from the end of the string (e.g., `-1` refers to the last character).

```js
let text = "Apple, Kiwi, Banana";

alert(text.slice(0, 5));    // "Apple" (from 0 to 5)
alert(text.slice(0,1));     // "A", from 0, 1 not included
alert(text.slice(7));       // "Kiwi, Banana" (from index 7 to end)
alert(text.slice(-12));     // "Kiwi, Banana" (starts 12 chars from end)
alert(text.slice(-12, -6)); // "Kiwi," (from -12 to -6)
```

##### substring(start [, end])

The `substring()` method returns a portion of the string between the `start` and `end` indices (not including the `end`).

- Unlike `slice()`, if `start` is greater than `end`, `substring()` swaps them.
- **Negative indices** are treated as `0`.

```js
let text = "Apple, Kiwi, Banana";

alert(text.substring(7, 13));  // "Kiwi"
alert(text.substring(6, 2));   // "p, k" (start and end swapped)
alert(text.substring(-4));     // "Apple, Kiwi, Banana" (negative treated as 0)

let str = "stringify";

alert(str.substring(2, 6));  // "ring"
alert(str.substring(6, 2));  // "ring"
alert(str.slice(2, 6));      // "ring"
alert(str.slice(6, 2));      // ""  // not same in slice
```

##### substr(start [, length])

The `substr()` method extracts a substring starting at `start` for a specified `length`.

- The `start` parameter can be negative to count from the end.
- If `length` is omitted, the substring starts from `start` and continues to the end of the string.

```js
let text = "stringify";

alert(text.substr(2, 4));  // "ring" (from index 2, length 4)
alert(text.substr(-4, 2)); // "gi" (from 4 chars from end, 2 chars)
```

|Method|Behavior|Negative Indices|
|---|---|---|
|slice(start, end)|Extracts from `start` to `end` (excluding `end`)|Supports negative|
|substring(start, end)|Extracts between `start` and `end` (excluding `end`)|Negative treated as `0`|
|substr(start, length)|Extracts from `start` for `length` characters|Supports negative `start`|

---

#### 2. String Concatenation

##### concat()

The `concat()` method joins two or more strings and returns a new string. This is similar to using the `+` operator but allows multiple string inputs.

```js
let text1 = "Hello";
let text2 = "World";

let result = text1.concat(" ", text2); // "Hello World"
result = "Hello".concat(" ", "World"); // "Hello World"
```

---

#### 3. Whitespace Manipulation

##### trim(), trimStart(), trimEnd()

These methods remove whitespace from the string:

- **trim()** removes whitespace from both ends.
- **trimStart()** removes whitespace from the beginning.
- **trimEnd()** removes whitespace from the end.

```js
let text = "   Hello World!   ";

alert(text.trim());       // "Hello World!"
alert(text.trimStart());  // "Hello World!   "
alert(text.trimEnd());    // "   Hello World!"
```

---

#### 4. Padding Strings

##### padStart(targetLength, padString), padEnd(targetLength, padString)

These methods pad the string to the specified length with a given character. If the string is already long enough, the original string is returned.

- **padStart()** pads the start of the string.
- **padEnd()** pads the end of the string.

```js
let text = '5';

alert(text.padStart(4, "0")); // "0005"
alert(text.padEnd(4, "x"));   // "5xxx"
```

---

#### 5. Repeating Strings

##### repeat(count)

The `repeat()` method repeats the string a given number of times.

```js
let text = "Hello";
let result = text.repeat(3);   // "HelloHelloHello"
```

---

#### 6. Replacing Parts of Strings

##### replace(toReplace, replacedWith)

The `replace()` method replaces the first occurrence of `toReplace` with `replacedWith`. If you want to replace all occurrences, use a regular expression with the `g` (global) flag.

Searches are case-sensitive; to replace case-insensitively, use a regular expression with an `/i` (insensitive) flag.

```js
let text = "Please visit Microsoft and Microsoft";
let newText = text.replace("Microsoft", "W3Schools"); // Replaces the first occurrence
alert(newText);  // "Please visit W3Schools and Microsoft"

newText = text.replace(/Microsoft/g, "W3Schools"); // Replaces all occurrences
alert(newText);  // "Please visit W3Schools and W3Schools"

let newText = text.replace(/MICROSOFT/i, "W3School");
// regular expressions are written without Quotes
```

##### replaceAll(toReplace, replacedWith)

The `replaceAll()` method replaces **all** occurrences of the substring or pattern with the specified replacement string.

```js
let text = "Cats are nice, but Cats are noisy!";
let newText = text.replaceAll("Cats", "Dogs");
alert(newText);  // "Dogs are nice, but Dogs are noisy!"
```

Allows you to specify a regular expression instead of a string to be replaced. If the parameter is a regular expression, the global flag `/g` must be set.

```js
text = text.replaceAll("Cats", "Dogs");
text = text.replaceAll(/Cats/g, "Dogs");
```

---

#### 7. String to Array Conversion

##### split(separator)

The `split()` method splits a string into an array of substrings based on a separator. If no separator is provided, the entire string becomes a single element array, i.e., the returned array will contain the whole string in `index[0]`.

- **Empty string ("")** splits the string into an array of individual characters.

```js
let sentence = "Secretary Bird specialize in stomping";
let words = sentence.split(" "); // Splits by spaces

console.log(words); // ["Secretary", "Bird", "specialize", "in", "stomping"]

let chars = sentence.split(""); // Splits into individual characters
console.log(chars); // ["S", "e", "c", "r", "e", "t", "a", "r", "y", " " ...]

text.split(",");   // split on commas
text.split("|");   // split on pipe
```

##### join(separator)

The `join()` method joins all elements of an array into a single string with the specified separator.

```js
let words = ["Secretary", "Bird", "specialize", "in", "stomping"];
let sentence = words.join(" ");  // Joins words with a space
alert(sentence);  // "Secretary Bird specialize in stomping"
```

##### reverse()

You can reverse an array before joining it to create a string in reverse order.

```js
let sentence = "Secretary Bird specialize in stomping";
let reversedWords = sentence.split(" ").reverse().join(" ");
console.log(reversedWords);  // "stomping in specialize Bird Secretary"
```

---

### Summary

These are some of the most common string manipulation methods in JavaScript:

- **slice(), substring(), substr()**: Extract substrings with different ways of specifying start and end.
- **concat()**: Join strings together.
- **trim(), trimStart(), trimEnd()**: Remove whitespace.
- **padStart(), padEnd()**: Add padding to strings.
- **repeat()**: Repeat the string a specified number of times.
- **replace() and replaceAll()**: Replace parts of strings.
- **split() and join()**: Convert strings to arrays and vice versa.

[Main reference for String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


____


