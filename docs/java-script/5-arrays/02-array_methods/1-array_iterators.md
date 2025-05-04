---
title: "01 - Array Iterator Methods - forEach()"
description: ""
summary: ""
date: 2024-11-09T17:08:28+05:30
lastmod: 2024-11-09T17:08:28+05:30
draft: false
weight: 435
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Array iterator methods in JavaScript are used to iterate over arrays, applying a provided function to array elements in a specific manner. These methods are often used to map, filter, test, and reduce arrays.

Iterator methods abstract away index management, which is required in traditional loops (`for` and `for/of`). This means less risk of off-by-one errors and manual index handling. In methods like `map()`, `filter()`, and `forEach()`, the callback function automatically receives each element, without you needing to explicitly handle the current index.

#### General Characteristics

- **Function as First Argument**: All array iterator methods accept a function as their first argument and call this function once for each element (or some elements) of the array.
- **Sparse Arrays**: If the array is sparse, the function is not invoked for nonexistent elements.
- **Inline Functions**: It's common to define the function inline (often using arrow functions) as part of the method invocation.

### **Common Iterator Methods**

- `forEach()`
- `map()`
- `filter()`
- `find()`
- `findIndex()`
- `every()`
- `some()`
- `reduce()`
- `reduceRight()`

Each of these methods iterates over array elements in different ways. None of the methods described here modify the array on which they are invoked (though the function you pass can modify the array).


---

### forEach() Method

The `forEach()` method executes a provided function once for each array element.

```js
arr.forEach(function(item, index, array) {
    // Do something with item
});
```

**Parameters**:
- `item`: The value of the current array element.
- `index`: The index of the current array element.
- `array`: The entire array being iterated.

`forEach()` iterates through every element in the array.

The function is called with three arguments: the element, its index, and the entire array. If you only care about the value of array element, then write a function with only one parameter.

It does not allow early termination (e.g., no `break` like in a regular `for` loop). `forEach()` is aware of sparse arrays and skips over empty slots, does not invoke the function for them.

**Sum of all elements**
```js
let data = [1, 2, 3, 4, 5], sum = 0;

data.forEach(value => { sum += value; });
// sum == 15
```

Here other parameters are also considered for **Incrementing array elements**
```js
data.forEach(function(v, i, a) { a[i] = v + 1; });
// data == [2, 3, 4, 5, 6]
```

**Converting Letters to Uppercase**
```js
let uppercase = "";
letters.forEach(letter => { 
    uppercase += letter.toUpperCase();
});
console.log(uppercase);  
// Output: "HELLO WORLD"
```

**Creating an HTML List**
```js
const fruits = ["Banana", "Orange", "Mango"];
let text = "";

function myFunction(value) {
    text += "<li>" + value + "</li>";
}

fruits.forEach(myFunction);
```

**Accessing Index and Array**
```js
fruits.forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});
```

____


