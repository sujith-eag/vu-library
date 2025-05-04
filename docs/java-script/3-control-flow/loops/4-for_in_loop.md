---
title: "04 - for-in Loop"
description: ""
summary: ""
date: 2024-11-07T20:51:38+05:30
lastmod: 2024-11-07T20:51:38+05:30
draft: false
weight: 368
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



The `in` operator is used to check if a specific property exists in an object. It returns `true` if the property is present and `false` otherwise.

```js
"property" in object
```

- `"property"`: The name of the property as a string (it can also be a variable holding the name).
- `object`: The object to check for the property.

```js
let user = { name: "John", age: 30 };

alert("age" in user);  // true (the property 'age' exists in user)
alert("bla" in user);  // false (the property 'bla' does not exist in user)
```

#### **Using Variables with 'in':**

If we omit the quotes, it refers to a variable. That variable should contain the actual name to be tested.

```js
let user = { age: 30 };
let key = "age";

alert(key in user);  // true (the property 'age' exists in user)
```

#### **Handling 'undefined':**

The `in` operator will return `true` even if a property exists but its value is `undefined`.

```js
let obj = { test: undefined };

alert(obj.test);  
// undefined (the property exists with value 'undefined')
alert("test" in obj);  
// true (the property 'test' exists)
```

---

### **'for / in' Loop:**

The `for...in` loop has been part of JavaScript since the beginning, unlike the `for/of` loop, which is new in ES6. The `for/in` loop works with any object after the `in`, while `for/of` requires an iterable object.

The [for…in](https://javascript.info/object#forin) loop is used to iterate over the **keys/properties** of an object. It allows us to walk through the keys (or property names) in an object.

```js
for (variable in object)
  statement
```

```js
for (key in object) {
  // Code to execute for each property of the object
}
```
- `key`: The variable that will hold the name of the current property.
- `object`: The object whose properties are being iterated.

```js
for (let p in o) {
       // Assign property names of o to variable p
  console.log(o[p]);  
      // Print the value of each property
}
```

**Note:** The `variable` typically names a variable, but it can be an arbitrary expression, as long as it evaluates to something suitable for the left side of an assignment.

**Example: Copying property names into an array:**

```js
let o = { x: 1, y: 2, z: 3 };
let a = [], i = 0;
for (a[i++] in o) /* empty */;
```

#### **Common Mistake:**

A common source of bugs in code is the accidental use of `for/in` with arrays instead of `for/of`. When working with arrays, you almost always want to use `for/of` instead of `for/in`.

The `for/in` loop does not enumerate all properties of an object. It does not loop through properties whose names are symbols. Additionally, it only loops over **enumerable properties**.

Many developers prefer using `for/of` in combination with `Object.keys()` instead of `for/in`.

____

#### **Iterating over properties of an object:**

```js
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  alert(key);  // Outputs the name of the property
  alert(user[key]);  // Outputs the value of the property
}
// Output:
// name
// John
// age
// 30
// isAdmin
// true
```

**Note:** The looping variable (`key` in this case) can be named anything you prefer, such as `prop`, `field`, etc. The example `for (let prop in user)` is also widely used.

---

### **Order of Properties in Objects**

The order in which properties are looped over in an object depends on whether the property names are **integers** or **non-integers**.

- **Integer property names** are ordered by their numeric value, regardless of whether they are stored as strings.
- **Non-integer property names** (i.e., strings that are not numbers) are listed in the order they were created.

**Example of Integer vs Non-integer Order:**

```js
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Britain",
  "+1": "USA"
};

for (let code in codes) {
  alert(+code);  // Outputs the numeric value of the country code
}
// Output:
// 49
// 41
// 44
// 1
```

- When you iterate over properties with integer names (like `"1"`, `"44"`, `"49"`), JavaScript **converts** them to numbers and orders them numerically.
- In this case, if we want to preserve the order of non-integer property names, we can prefix the integer strings with a `+` (e.g., `"+49"` becomes `"49"`).

---

### **Use Case of 'for/in'**

The `for..in` loop is typically used when you need to iterate over **object properties** and doesn't work well with arrays in most cases (since array indices are considered numeric, and `for..in` might return unexpected results).

For arrays, the `for...of` loop is preferred since it directly iterates over the values rather than the keys.

---

- **Integer properties**: JavaScript automatically converts string numbers into integers and sorts them accordingly.
