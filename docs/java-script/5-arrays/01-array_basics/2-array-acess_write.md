---
title: "02 - Acessing and Writing Array Elements"
description: ""
summary: ""
date: 2024-11-09T17:08:52+05:30
lastmod: 2024-11-09T17:08:52+05:30
draft: false
weight: 422
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




Elements of an array can be accessed using the `[]` operator using their **index values**. Arrays in JavaScript are **zero-indexed**, meaning the first element has an index of `0`. 

You can also use arithmetic expressions or arbitrary expression that results in a non-negative integer value can be used inside the brackets as indices. This applies to both reading and writing of elements of an array by assigning values to specific indices in an array.:

```js
const cars = ["Volvo", "BMW", "Tata"];
let car = cars[0];  // "Volvo"
```

```js
const cars = [];
cars[0] = "Volvo"; // Add "Volvo" at index 0
cars[1] = "BMW";   // Add "BMW" at index 1
```

Using variables and expressions as indices to read or write array elements.

```js
let a = ["world"];  // Starts with a one-element array

let value = a[0];   // Read element at index 0, store value
a[1] = 3.14;        // Write element at index 1

let i = 2;
a[i] = 3;           // Write element at index 2
a[i + 1] = "hello"; // Write element at index 3
a[a[i]] = a[0];     // Read elements at indexes 0 and 2, write element at index 3
```

---

### Arrays are Special Objects

Arrays in JavaScript are a specialized kind of **object**. The square brackets used to access array elements work in the same way as square brackets used to access object properties. JavaScript converts the specified numeric array index into a string—the index `1` becomes the string `"1"`—and then uses that string as a property name.

```js
let o = {};  // Create a plain object
o[1] = "one"; // Index it with an integer

console.log(o["1"]); 
// => "one" (numeric and string property names are the same)
```

It’s important to clearly distinguish an **array index** from an **object property name**. While all indexes are property names, only property names that are integers between `0` and `2^32 - 1` are considered array indexes.

---

### Non-Numeric Indices and Array Behavior

In JavaScript, you can index an array using **negative numbers** or **non-integer values**. When this happens, the number is converted to a string, and that string is used as the property name. Since the name is not a non-negative integer, it is treated as a **regular object property**, not an array index.

However, if you use a string that represents a non-negative integer, it behaves like an array index.

```js
a[-1.23] = true;  
// This creates a property named "-1.23"

a["1000"] = 0;     
// This is treated as the 1001st element of the array

a[1.000] = 1;      
// This is equivalent to a[1] = 1; (same as a[1] = 1)
```

#### **Associative Arrays in JavaScript (not supported)**

Although arrays in JavaScript are **indexed by numbers**, you can technically assign a value to a string index. Arrays with named indexes are called **associative arrays** or **hashes** in other languages, but JavaScript **does not support** associative arrays. 

When you use named indexes with arrays, JavaScript internally converts the array to an **object**, and array methods and properties may behave incorrectly.

***Example of incorrect usage (associative arrays):***
```js
const person = [];
person["first"] = "John";
person["last"] = "Doe";

console.log(person.length);  
// 0 (Incorrect, since it's now an object)

console.log(person["first"]);  // "John"
console.log(person[0]);  // undefined
```

If you need associative arrays, consider using an **object** instead.
```js
const person = {
  first: "John",
  last: "Doe"
};

```

#### No "Out of Bounds" Errors

The fact that JavaScript array indexes are simply a special type of object name means that there is no concept of **out-of-bounds** error when trying to access an element that does not exist. When you query a nonexistent property of an array (or any object), you get `undefined`. This behavior is the same for both arrays and regular objects.

```js
let a = [true, false]; // Array with elements at indexes 0 and 1
console.log(a[2]);     // => undefined (no element at this index)
console.log(a[-1]);    // => undefined (no property with this name)
```

---

### **Length Property**

The `length` property of an array returns the number of elements in the array. It's important to note that `length` is **not** zero-based; it represents the total count of elements, not the highest index.

```js
[].length
// => 0: The array has no elements

["a", "b", "c"].length 
// => 3: Highest index is 2, length is 3
```

```js
const fruits = ["Banana", "Orange", "Mango"];
console.log(fruits.length);  // 3
```

You can also use the `length` property to access the last element of an array:

```js
let fruit = fruits[ fruits.length - 1 ];  // "Mango"
```

JavaScript arrays may be **sparse**, meaning that the elements don't need to have contiguous indexes, and there may be gaps. For sparse arrays, the `length` is larger than the highest index of any element.

#### Behavior when modifying the length:

No index of element can be equal or larger than the array's length. If you assign a value to an array at an index greater than its current length, the `length` property is updated accordingly (set to `i + 1`), making the array sparse.

```js
let a = [1, 2, 3];
a.length = 5; // Array is now sparse with length 5
```

If you set the `length` property to a smaller value, any array elements whose index is greater than or equal to that value are deleted from the array:

```js
let a = [1, 2, 3, 4, 5];
a.length = 3;  // Array is now [1, 2, 3]
a.length = 0;  // Array is now []
a.length = 5;  // Array is now a new array with length 5, but no elements
```

Setting the `length` property to a larger value doesn’t add elements to the array; it only creates a sparse area at the end of the array.

---
