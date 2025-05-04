---
title: "03 - for-of Loop"
description: ""
summary: ""
date: 2024-11-07T20:51:24+05:30
lastmod: 2024-11-07T20:51:24+05:30
draft: false
weight: 366
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



The `for/of` loop is a convenient and simpler way to iterate over **iterable objects** (e.g., arrays, strings, maps, sets). ES6 introduced the `for/of` loop, which is different from both the regular `for` loop and the older `for/in` loop.

```js
for (const element of iterable) {
    // code to run for each element
}
```

The loop body runs once for each element in the iterable object. Before each execution of the loop body, the next element is assigned to the `element` variable. For arrays, elements are iterated in order from first to last.

```js
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;

for (let element of data) {
    sum += element;
}
console.log(sum);
// => 45
```

**Important:** Arrays are iterated "live" — changes made during iteration may affect the outcome. For example, if you modify the array inside the loop (e.g., adding a new item with `data.push(sum)`), it can lead to an infinite loop, as the loop will never reach the last element.

---

### **'for/of' with Arrays**

The `for/of` loop provides a more concise way to iterate through arrays compared to the traditional `for` loop:

#### Traditional 'for' loop and Index:

```js
const cats = ["Leopard", "Jaguar", "Tiger", "Lion"];

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}
// Output: Leopard, Jaguar, Tiger, Lion
```

#### Using `for/of` loop:

```js
const cats = ["Leopard", "Jaguar", "Tiger", "Lion"];

for (const cat of cats) {
    console.log(cat);
}
// Output: Leopard, Jaguar, Tiger, Lion
```

---

### **'for/of' with Objects**

Objects are **not iterable** by default. Attempting to use `for/of` on a regular object will throw a `TypeError`. 

However, you can iterate through an object's properties using `Object.keys()`, `Object.values()`, or `Object.entries()` since they return an array of properties, values or pair inside the object.

```js
let o = { x: 1, y: 2, z: 3 };

for (let element of o) { 
    console.log(element);
}
// Throws TypeError: o is not iterable
```


Using `Object.keys()` with `for/of`:
```js
let o = { x: 1, y: 2, z: 3 };
let keys = "";

for (let element of Object.keys(o)) { 
    keys += element;  // Concatenate the property names
}
console.log(keys);  // "xyz"
```

Using `Object.values()` with `for/of`:
```js
let sum = 0;

for (let v of Object.values(o)) {
    sum += v;  // Sum the values of the object
}
console.log(sum);  // Output: 6
```


Using `Object.entries()` with `for/of` and Destructuring to get both key and value:
```js
let pairs = "";

for (let [key, value] of Object.entries(o)) {
    pairs += key + value;  // Concatenate key/value pairs
}
console.log(pairs);  // Output: "x1y2z3"
```

---

### **'for/of' with Strings**

Strings are iterable character-by-character in ES6. This allows you to iterate over each character in a string using `for/of`.

```js
let word = "Hello";

for (const char of word) {
    console.log(char);
}
// Output: H, e, l, l, o
```

#### Frequency Count Example:

```js
let frequency = {};

for (let letter of "mississippi") {
    if (frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}
console.log(frequency);
// Output: { m: 1, i: 4, s: 4, p: 2 }
```

---

### **'for/of' with Set and Map**

The ES6 `Set` and `Map` classes are iterable. The `for/of` loop allows easy iteration over both of these types.

#### Iterating over a Set:

```js
const set = new Set([1, 2, 3, 4, 5]);

for (const number of set) {
    console.log(number);
}
// Output: 1, 2, 3, 4, 5
```

#### Print Unique Words in a Text:

```js
let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];

for (let word of wordSet) {
    unique.push(word);
}
console.log(unique); 
// Output: ["Na", "na", "Batman!"]
```

#### Iterating over a Map:

Maps are interesting because the iterator returns key-value pairs.

```js
let m = new Map([[1, "one"]]);

for (let [key, value] of m) {
    console.log(key);   // Output: 1
    console.log(value); // Output: "one"
}
```

```js
const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}
// Output: 
// key1: value1
// key2: value2
```

---

### **Create a Function 'unique(arr)'**

The following function returns an array of unique items from the input array:

```js
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

let strings = ['hare', 'krisna', 'hare', 'krishna', 'krishna', 'krishna', 'hare', 'hare', ':-0'];

alert(unique(strings)); 
// Output: hare, krisna, krishna, :-0
```

This function iterates through the input array `arr` using `for...of` and checks if each element is already in the `result` array using `includes()`. If the element is not present, it gets added to the result.

**Note:** This approach is inefficient for large arrays due to the repeated comparisons made by `includes()`. A more optimized solution uses a `Set`.

---

### **Optimized Version Using 'Set'**

A more efficient way to achieve uniqueness is by using a `Set`, which automatically handles duplicates:

```js
function unique(arr) {
    return [...new Set(arr)];
}

let strings = ['hare', 'krisna', 'hare', 'krishna', 'krishna', 'krishna', 'hare', 'hare', ':-0'];

alert(unique(strings)); 
// Output: hare, krisna, krishna, :-0
```

This version is more efficient because a `Set` automatically removes duplicates.

---

