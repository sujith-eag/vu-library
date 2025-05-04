---
title: "04 - Looping through Array Elements"
description: ""
summary: ""
date: 2024-11-09T17:09:29+05:30
lastmod: 2024-11-09T17:09:29+05:30
draft: false
weight: 426
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



As of ES6, the easiest way to loop through each element of an array (or any iterable object) is with the `for/of` loop.

---

## for Loop

A traditional `for` loop is a common way to iterate through an array, but the `for/of` loop is preferred for simplicity and readability:

```js
for (let i = 0; i < journal.length; i++) {
	let entry = journal[i];
	console.log(entry);  // Do something with each entry
}
```

---

**Copying an Array to a new Array using for loop**
```js
let a = ["a", "b", "c"];
let b = [];

for (let i = 0; i < a.length; i++) {
	b[i] = a[i];
}

// In ES6, you can copy arrays more concisely with Array.from()
let c = Array.from(b);
```

---

**Filtering Vowels from an Array**
```js
let vowels = "";
for (let i = 0; i < letters.length; i++) {  // For each index in the array
	let letter = letters[i];  // Get the element at that index
	if (/[aeiou]/.test(letter)) {  // Use a regular expression test
		vowels += letter;  // If it's a vowel, remember it
  }
}
console.log(vowels);  // => "eoo"
```

---

If you want to compare two distinct objects or arrays, you must compare their properties or elements:

```js
function equalArrays(a, b) {
	if (a === b) return true;  // Identical arrays are equal
	if (a.length !== b.length) return false;  // Different-size arrays are not equal

	for (let i = 0; i < a.length; i++) {  // Loop through all elements
		if (a[i] !== b[i]) return false;  // If any element differs, arrays are not equal
  }
	return true;
}
```

---

In some cases, particularly in nested loops or performance-critical scenarios, you may want to save the array length in a local variable to avoid looking it up on each iteration.

```js
// Save the array length into a local variable
for (let i = 0, len = letters.length; i < len; i++) {
	// loop body remains the same
}
```

Alternatively, you can iterate backwards from the end of the array to the start:

```js
// Iterate backwards from the end of the array to the start
for (let i = letters.length - 1; i >= 0; i--) {
	// loop body remains the same
}
```

---

#### Skipping undefined and Nonexistent Elements

When dealing with sparse arrays or arrays where some elements may be `undefined`, you can check for `undefined` elements to avoid errors or unexpected behavior:

```js
for (let i = 0; i < a.length; i++) {
	if (a[i] === undefined) continue;  // Skip undefined and nonexistent elements
  // loop body here
}
```

---

## for/of Loop

The `for..of` loop is a simpler way to iterate over array elements. It directly gives you the value without needing the index.

The built-in array iterator that the `for/of` loop uses returns the elements of an array in ascending order. It has no special behavior for sparse arrays and simply returns `undefined` for any array elements that do not exist.

```js
for (let entry of journal) {
	console.log(`${entry.event.length} events.`);  
	// Logs the number of events
}
```

##### **Reassembling a String**

```js
let letters = [..."Hello world"];  // An array of letters
let string = "";
for (let letter of letters) {
	string += letter;
}
console.log(string);  
// => "Hello world";       we reassembled the original text
```

#### **Getting Array Element Indexes with entries()**

If you want to use a `for/of` loop for an array but need the index of each array element, use the `entries()` method of the array, along with destructuring assignment:

```js
let everyOther = "";
for (let [index, letter] of letters.entries()) {
	if (index % 2 === 0) everyOther += letter;  
	// Letters at even indexes
}
console.log(everyOther);  
// => "Hlowrd"
```

---


