---
title: "01 - Creating An Array"
description: ""
summary: ""
date: 2024-11-09T17:08:28+05:30
lastmod: 2024-11-09T17:08:28+05:30
draft: false
weight: 420
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


JavaScript arrays are a special type of object used to store ordered sequences of values. Unlike regular objects, which use named keys (like strings), arrays use numeric indexes. Arrays in JavaScript are a specialized form of JavaScript objects, and array indexes are essentially property names that happen to be integers as key.

An array is an ordered collection of values, where each value is called an element, and each element has a numeric position in the array, known as its index. 

Arrays in JavaScript can be sparse, meaning that the elements need not have contiguous indexes, and there can be gaps between them.

ES6 introduces a set of new array classes known collectively as "typed arrays." Unlike regular JavaScript arrays, typed arrays have a fixed length and a fixed numeric element type.

---

## Creating Arrays

There are several ways to create arrays in JavaScript:

1. **Array Literals**
2. **The Spread Operator (`...`) on an Iterable Object**
3. **The `Array()` Constructor**
4. **The `Array.of()` and `Array.from()` Factory Methods**

---

## 1. Array Literals

The simplest way to create an array is with an array literal. An array literal is simply a comma-separated list of array elements within square brackets (`[]`).

```js
let empty = []; // An empty array

let primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements

let misc = [1.1, true, "a"]; // An array with 3 elements of different types
```

You can also have a trailing comma in the array literal, which does not affect the array's length:

```js
let misc = [1.1, true, "a", ]; // 3 elements, trailing comma is allowed
```

#### Sparse Arrays

If an array literal contains multiple commas in a row with no value between them, the array becomes sparse. This means the elements for which values are omitted do not exist, but querying them will return `undefined`.

```js
let count = [1,,3]; // Array with elements at indexes 0 and 2, no element at index 1

let undefs = [,,];   
// An array with no elements, but a length of 2
```

You can also assign values to specific indexes that go beyond the current length of the array:
```js
let a = [];

a[1000] = 0; 
// Adds an element at index 1000, making the length 1001
```

#### Arrays of Objects, Arrays, and Functions

Arrays in JavaScript can contain any type of data, including objects, functions, and even other arrays. JavaScript arrays are untyped, meaning that different elements of the same array can be of different types.

**Array of Numbers:**

```js
let base = 1024;

let table = [base, base+1, base+2, base+3]; 
// Array of numbers
```

**Array of Objects:** You can store objects inside an array, which is common for structured data. Array literals can contain object literals or other array literals:

```js
let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]]; 
// Array containing arrays and objects
```

Example with a more complex structure:

```js
let journal = [
  {event: ["work", "touched tree", "pizza", "running"], squirrel: false},
  {event: ["work", "ice cream", "lasagna"], squirrel: false},
  {event: ["weekend", "cycling", "peanuts"], squirrel: true}
]; // Array of objects
```

**Array of Functions:** Arrays can also contain functions:

```js
let functionsArray = [
  function() { console.log("Function 1"); },
  function() { console.log("Function 2"); },
  function() { console.log("Function 3"); }
]; // Array of functions
```

**Arrays within Arrays:** Arrays can even contain other arrays, creating nested structures:

```js
let arrayOfArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]; // Array of arrays (2D array)
```

---

## 2. Spread Operator

In ES6 and later, **spread operator** (`...`) can be used to include the elements of one array within an array literal:

```js
let a = [1, 2, 3];
let b = [0, ...a, 4];
// b == [0, 1, 2, 3, 4]
```

The three dots (`...`) "spread" the array `a`, so that its elements become part of the new array literal. It's as if the `...a` was replaced by the elements of array `a`, listed literally within the enclosing array.

The spread operator is a convenient way to create a **shallow copy** of an array:

```js
let original = [1, 2, 3];
let copy = [...original];

copy[0] = 0; // Modifying the copy does not change the original
console.log(original[0]); // => 1
```

The spread operator works on any iterable object. (Iterable objects are what the `for...of` loop iterates over.) Strings are iterable, so you can use the spread operator to turn any string into an array of single-character strings:

```js
let digits = [..."0123456789ABCDEF"];

console.log(digits); 
// => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
```

Since **Set** objects are iterable, an easy way to remove duplicate elements from an array is to convert the array to a set, and then immediately convert the set back to an array using the spread operator:

```js
let letters = [..."hello world"];
let uniqueLetters = [...new Set(letters)];
console.log(uniqueLetters); 
// => ["h", "e", "l", "o", " ", "w", "r", "d"]
```

---

## 3. 'Array()' Constructor

Another way to create an array is with the **`Array()`** constructor. You can invoke this constructor in three distinct ways:

##### Call it with no arguments:

```js
let a = new Array();

// same as 
let a = []
```

This creates an empty array with no elements and is equivalent to the array literal `[]`.

##### Call it with a single numeric argument:

```js
let a = new Array(10);
```

This creates an array with a **specified length**. No values are stored in the array, and the array index properties (e.g., `"0"`, `"1"`, etc.) are not even defined for the array. This is used to preallocate an array when the number of elements is known. 

##### Call it with two or more arguments (explicitly specifying elements):

```js
let a = new Array(5, 4, 3, 2, 1, "testing, testing");
```

In this form, the constructor arguments become the elements of the new array.

**Note**: Using an array literal is almost always simpler than using the `Array()` constructor in this form.

When the `Array()` constructor is invoked with **one numeric argument**, it uses that argument as an array length. But when invoked with **multiple arguments**, it treats those arguments as elements to be included in the array. This means the `Array()` constructor cannot be used to create an array with a single numeric element.

---

### 'Array.of()'

In ES6, the `Array.of()` function was introduced to address the limitations of the `Array()` constructor. It is a factory method that creates and returns a new array using its argument values as the array elements (regardless of how many arguments there are even if it one or zero):

```js
Array.of();           
// => []  (returns an empty array with no arguments)

Array.of(10);         
// => [10] (creates an array with a single numeric argument)

Array.of(1, 2, 3);    
// => [1, 2, 3] (creates an array with multiple elements)
```

---

### 'Array.from()'

`Array.from()` is an array factory method introduced in ES6. It accepts an **iterable** or **array-like** object as its first argument and returns a new true array containing the elements of that object. This method works similarly to the spread operator (`[...iterable]`) and is commonly used to create copies of arrays.

```js
let copy = Array.from(original);
let trueArray = Array.from(arrayLike);
```

```js
Array.from(obj[, mapFn, thisArg])
```

- **`obj`**: The iterable or array-like object.
- **`mapFn`** _(Optional)_: A function to apply to each element in the array.
- **`thisArg`** _(Optional)_: A value to use as `this` inside the `mapFn` function.

The key advantage of `Array.from()` is that it enables conversion of **array-like objects** (such as those with a numeric `length` property and integer-based property names) into true arrays. For example, web browser methods like `NodeList` return array-like objects, which can be more easily manipulated after conversion to true arrays.

Additionally, `Array.from()` makes it possible to use array methods like `.map()`, `.filter()`, and `.reduce()` on these converted objects.

[MDN documentation on Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)


**Converting an Array-like Object to a True Array:**

```js
let arrayLike = { 0: 'a', 1: 'b', length: 2 };
let trueArray = Array.from(arrayLike);
console.log(trueArray); 
// => ['a', 'b']
```

**Converting a String into an Array of characters:**
```js
let str = "hello";
let arr = Array.from(str);
console.log(arr);  // Outputs: ['h', 'e', 'l', 'l', 'o']
```

**Converting an Array-like Object into an Array:**

```js
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike);
console.log(arr);  // Outputs: ['Hello', 'World']
console.log(arr.pop());  // Outputs: World
```

#### Using the `mapFn` Argument

`Array.from()` accepts a **second argument** called `mapFn`, a mapping function applied to each element before adding it to the resulting array as the array is being built. 

This is similar to the `map()` method but more efficient because the transformation happens while the array is being created.

**Doubling the Values of an Array**

```js
let numbers = [1, 2, 3];
let doubled = Array.from(numbers, num => num * 2);
console.log(doubled); // => [2, 4, 6]
```

**Squaring the Numbers in an Array**

```js
let numbers = [1, 2, 3];
let squaredNumbers = Array.from(numbers, num => num * num);
console.log(squaredNumbers);  // Outputs: [1, 4, 9]
```

In both examples, `Array.from()` creates an array from the original array and applies the `mapFn` to either double or square each number before storing it in the new array.

---

#18sep24  Updated on `#03mar25`

___
