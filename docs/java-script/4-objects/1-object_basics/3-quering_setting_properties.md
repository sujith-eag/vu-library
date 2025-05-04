---
title: "03 - Quering and Setting Properties in Object"
description: ""
summary: ""
date: 2024-11-09T17:06:36+05:30
lastmod: 2024-11-09T17:06:36+05:30
draft: false
weight: 386
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




To obtain the value of a property, you can use either the **dot (`.`)** or **square bracket (`[]`)** operators. The left-hand side of these expressions should be an object.

- **Dot Notation**: If you use the dot operator to access properties, the right-hand side must be a simple identifier that names the property.

```js
person.age;         // Accessing a property
person.bio();       // Calling a method
```

```js
let author = book.author; // Get the "author" property of the book.
let name = author.surname; // Get the "surname" property of the author.
```

- **Bracket Notation**: If you use square brackets, the value inside the brackets must be an expression that evaluates to a string that contains the desired property name.

```js
let title = book["main title"]; // Get the "main title" property of the book.
```


Following two JavaScript expressions have the same value:
```js
object.property
object["property"]
```

```js
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);  // false
console.log(day1.wolf);  // undefined (property doesn't exist)

day1.wolf = false; // Create the "wolf" property
console.log(day1.wolf);  // false

delete day1.squirrel; // Remove the "squirrel" property
console.log(day1.squirrel);  // undefined (property no longer exists)
```
If a property doesn’t exist in an object, JavaScript returns `undefined`.

____

When property names are multi-word or contain special characters (like spaces), you must use square bracket notation:

```js
let user = {};
user["likes birds"] = true;  // valid

alert(user["likes birds"]);  // true
delete user["likes birds"];  // deletes the property
```


___

**Accessing Nested Objects**: Objects can contain other objects, and these nested properties can be accessed by chaining dot notations or bracket notation:

```js
const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
};

person.name.first ;  // "Bob"

// using bracket notation
person["name"]["first"] ;
```

---

## Creating or Modifying Properties

To create or set a property, you use the same dot or square bracket notation, but apply it on the **left-hand side** of an assignment expression.

```js
book.edition = 7; // Create an "edition" property on the book.
book["main title"] = "ECMAScript"; // Change the "main title" property of the book.
```

```js
// Using dot notation
person.age = 45;
person["name"]["last"] = "Cratch";

// Using bracket notation
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
```

---

### Objects as Associative Arrays

In JavaScript, objects can function like **associative arrays** (also known as hashes, maps, or dictionaries). You can access object properties using two syntaxes:

```js
object.property
object["property"]
```

The second syntax, using square brackets with a string, resembles array access. However, instead of indexing by numbers, you are indexing by **strings**. This is a key characteristic of **associative arrays**.

_____

#### Square Bracket Notation Details

When using square bracket notation, the expression inside the brackets must evaluate to a **string** or a value that can be **converted** to a string, or to a **Symbol**.

This allows you to use dynamic property names, making the syntax more flexible.

```js
let propertyName = "edition";
book[propertyName] = 8; // Sets the "edition" property to 8.
```

---

### Square Bracket Notation for Dynamic Access

When using **dot notation** (e.g., `object.property`), the property name must be a **literal identifier**. Identifiers are fixed and cannot be manipulated dynamically during runtime.

```js
let name = customer.name;  // 'name' must be a literal identifier
```

In contrast, **bracket notation** allows dynamic access to properties based on strings, offering greater flexibility for property names that need to change during execution.

```js
let dynamicProperty = "name";
let dynamicValue = customer[dynamicProperty];  // Access property dynamically using a variable
```

When you access a property of an object using the **square bracket notation** (`[]`), the property name is expressed as a **string**. Since strings are a JavaScript data type, they can be manipulated and created dynamically during the program’s execution, providing flexibility in scenarios where property names are not known in advance.

**Example: Dynamically Accessing Properties**
```js
let addr = "";
for (let i = 0; i < 4; i++) {
  addr += customer[`address${i}`] + "\n";
}
```

In this example, the code dynamically accesses the properties `address0`, `address1`, `address2`, and `address3` of the `customer` object and concatenates them into the `addr` string. 

This demonstrates how **square bracket notation** can be used to access properties with string expressions.

---

### Bracket Notation for Dynamic Property Names

**Bracket notation** allows you to use **variables** or **expressions** as property names, making it especially useful when property names need to be dynamic or come from user input. This is useful in scenarios where the property name is not fixed or is determined at runtime.

#### Example 1: Setting Properties with User Input

Suppose you have a form where the user provides both the **property name** and **value**. You can use bracket notation to dynamically set properties on an object based on that input.

```js
const dataName = nameInput.value;  // The property name entered by the user
const dataValue = nameValue.value; // The value entered by the user

// Dynamically setting the property using bracket notation
person[dataName] = dataValue;  // person[dataName] will create the property and assign the value
```

- `dataName` could be `"age"`, `"address"`, or any other string that represents a property name.
- `dataValue` is the value for that property.

This technique allows you to modify the `person` object dynamically based on user input.

#### Example 2: Setting a Dynamic Property

Here’s another example where we set a dynamic property without user input:

```js
const dataName = "height";       // The property name is stored in the variable
const dataValue = "1.70m";       // The value to be assigned to the property

// Using bracket notation to set the dynamic property and value
person[dataName] = dataValue;    // person.height = "1.70m"
```

```js
let key = "likes birds";
user[key] = true;  // Same as user["likes birds"] = true;
```

```js
let user = {
	name: "John",
	age: 30
};

let key = prompt("What do you know about user?", "name");
// access by variable
alert( user[key] );  // John ???
```

Accessing an object through a function using a variable in bracket notation.
```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);  // Access using a variable
}

logProperty("name");  // ["Bob", "Smith"]
logProperty("age");   // 32
```

---

#### Dot Notation Can't Be Used with Variables

While **dot notation** is commonly used to access and modify properties, it **cannot** work with variables or expressions as property names. 

If an object property name is held in a variable, then dot notation cannot be used to access the value.

In dot notation, the property name must be a fixed identifier, which means you cannot pass a variable or expression to specify the property names.

```js
person.dataName = "height";  // This assigns "height" as a string, not using the variable dataName
```

- `person.dataName` will create a property called `dataName` on the `person` object and assign it the string `"height"`.
- **This does not use the value inside the `dataName` variable** and thus prevents dynamic property names.


---

