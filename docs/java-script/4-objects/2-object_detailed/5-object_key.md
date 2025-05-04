---
title: "05 - 'new' Contructor Function"
description: ""
summary: ""
date: 2024-11-09T17:07:30+05:30
lastmod: 2024-11-09T17:07:30+05:30
draft: false
weight: 408
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Constructor functions are used to create multiple similar objects with the same properties and methods, without having to manually repeat the object structure each time. 

By using a constructor function, you define the blueprint for creating objects, allowing you to instantiate them efficiently using the `new` operator.

The regular `{...}` syntax allows us to create one object. 

Using ***constructor functions*** and the `"new"` operator, many similar objects, like multiple users or menu items can be made.

---

### **Constructor Function Basics**

1. **Naming Convention**: Constructor functions should be named with an uppercase letter to distinguish them from regular functions.
2. **Usage with `new`**: Constructor functions are meant to be invoked with the `new` operator.

```js
function User(name) {
	this.name = name;
	this.isAdmin = false;
} // constructor function

let person = new User("Jack");   //constructor

console.log(person.name); // "Jack"
console.log(person.isAdmin); // false
```

When `new User("Jack")` is called:
  1. A new object is created.
  2. The `this` keyword inside the constructor function refers to that new object.
  3. The constructor function runs, setting the properties and methods on the new object.
  4. The new object is returned.

---

### **Creating Multiple Similar Objects**

A constructor function allows you to create multiple similar objects by defining the properties and methods that each object will share. For instance, you can create multiple users using the same constructor function.

```js
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user1 = new User("Jack");
let user2 = new User("Anna");

console.log(user1.name); // "Jack"
console.log(user2.name); // "Anna"
```

In this case, `user1` and `user2` are separate objects with the same constructor (`User`), but they have different values for the `name` property.

---

### **Constructor vs Regular Function for Object Creation**

Before the introduction of constructor functions, people would use regular functions to create objects manually:

```js
function createPerson(name) {
	const obj = {};  // create object
	obj.name = name; // add property
	obj.introduceSelf = function() { // add method
		console.log(`Hi! I'm ${this.name}`);
  };
	return obj;
}

const frank = createPerson("Frank");
frank.introduceSelf();  // "Hi! I'm Frank."
```

This approach works but is less efficient compared to using a constructor function. If multiple objects need the same `introduceSelf` method, it will be recreated each time an object is created. This can lead to inefficient memory usage.

---

### **Benefits of Constructor Functions**

By using a constructor function, you can define methods that are shared by all instances, without having to recreate them for each individual object. Constructor functions allow you to define the **shape** of the object and instantiate multiple objects with the same properties and methods.

```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

const frankie = new Person("Frankie");
frankie.introduceSelf(); // "Hi! I'm Frankie."
```

Here, `Person` acts as a blueprint for creating new objects, each with their own `name` property and `introduceSelf` method.

---

### **Understanding 'this' in Constructors**

Inside a constructor function, the `this` keyword refers to the newly created object. You can use `this` to set properties and methods for that object.

For example:
```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

const john = new Person("John");
john.introduceSelf(); // "Hi! I'm John."
```

- When `new Person("John")` is called, it creates a new object, and inside the constructor, `this` refers to that object.
- The properties and methods (`name` and `introduceSelf`) are assigned to that new object.

---

### **Constructor for Accumulator Example**

Here’s an example of a constructor that uses a method to accumulate values:

```js
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
alert(accumulator.value); // Displays the new accumulated value
```

- `this.value` is initialized to the `startingValue`.
- The `read()` method prompts the user for a value and adds it to `this.value`.

Each time a new instance of `Accumulator` is created, the `value` property and `read` method are set on the object, allowing for different instances with their own accumulated values.

---

### **Objects Are Everywhere**

JavaScript is an object-oriented language, and even primitive types like strings, numbers, and arrays are automatically wrapped in their respective object types. This allows them to have methods and properties associated with them.

Strings are objects, and they have methods like `.split()`:
```js
let myString = "apple,banana,orange";
let fruits = myString.split(",");
console.log(fruits); // ["apple", "banana", "orange"]
```

Here, `myString` is treated as a `String` object, and the `.split()` method is available because strings in JavaScript are instances of the `String` object.

---

### **Additional Features of Objects**

#### Optional Chaining (`?.`)
The optional chaining operator (`?.`) allows you to access deeply nested properties of an object without worrying about whether intermediate properties exist. If any property in the chain is `null` or `undefined`, it safely returns `undefined` instead of throwing an error.

Example:
```js
let user = { name: "Alice", address: { city: "New York" } };

console.log(user.address?.city);  // "New York"
console.log(user.contact?.phone); // undefined (doesn't throw an error)
```

#### Symbol Type as Property Key

`Symbol` is a unique and immutable data type that can be used as a property key in objects. It is often used to create private object properties.

```js
const sym = Symbol('unique');
let obj = {
  [sym]: 'value'
};

console.log(obj[sym]);  // "value"
```

Each `Symbol` is unique, so even if two symbols have the same description, they will not be equal.

#### Object to Primitive Conversion

JavaScript allows objects to be converted into primitive values when needed. This is achieved via special methods like `valueOf()` and `toString()`.

Example:
```js
let obj = {
  value: 5,
  valueOf() {
    return this.value;
  }
};

console.log(obj + 1);  // 6, `obj.valueOf()` is called
```

- `valueOf()` is used when an object needs to be converted to a number.
- `toString()` is used for string conversions.

---

[Optional Chaining '?'](https://javascript.info/optional-chaining)
Feature to access properties without throwing error of it doesn't exist.
use when needed for 'non existing user problem'

[Symbol type as property key](https://javascript.info/symbol)

[Object to primitive conversion](https://javascript.info/object-toprimitive)

____

