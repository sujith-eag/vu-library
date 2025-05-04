---
title: "01 - Inheritance in Objects"
description: ""
summary: ""
date: 2024-11-09T17:05:46+05:30
lastmod: 2024-11-09T17:05:46+05:30
draft: false
weight: 400
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




JavaScript objects have a set of **own properties**, and they also inherit a set of properties from their **prototype object**. Every time you create an instance of a class using `new`, you are creating an object that inherits properties from a prototype object.

#### Property Lookup in the Prototype Chain

Suppose you query the property `x` in the object `o`. If `o` does not have an own property with that name, JavaScript will search for the property in the **prototype object** of `o`. 

If the prototype object does not have an own property with that name, but has a prototype itself, the query continues on the prototype of the prototype. This process continues until the property is found or until an object with a `null` prototype is reached.

#### Prototype Chain and Property Lookup

```js
let o = {};
// o inherits object methods from Object.prototype
o.x = 1;
// Now o has an own property x.

let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2;
// p now has an own property y.

let q = Object.create(p); // q inherits properties from p, o, and Object.prototype
q.z = 3;
// q has an own property z, and inherits from p, o, and Object.prototype.

let f = q.toString();
// toString is inherited from Object.prototype

q.x + q.y;
// => 3; x and y are inherited from o and p
```

#### Property Assignment and Inheritance

Suppose you assign a value to the property `x` of the object `o`. If `o` already has an own (non-inherited) property named `x`, then the assignment simply changes the value of that existing property. Otherwise, the assignment creates a new property `x` on the object `o`. 

If `o` previously inherited the property `x`, that inherited property is now **hidden** by the newly created own property with the same name.

**Key Point:** Inheritance occurs when querying properties, but **not** when setting them. This is a key feature of JavaScript, as it allows us to selectively override inherited properties.

#### Overriding Inherited Properties

```js
let unitcircle = { r: 1 };
// An object to inherit from
let c = Object.create(unitcircle); // c inherits the property r
c.x = 1; c.y = 1;
// c defines two properties of its own
c.r = 2;
// c overrides its inherited property
unitcircle.r
// => 1: the prototype is not affected
```

#### Accessor Properties and Setters

There is one exception to the rule that a property assignment either creates or sets a property in the original object: If `o` inherits the property `x`, and that property is an **accessor property** with a **setter method**, then the setter method is called instead of creating a new property `x` in `o`.

However, note that the setter method is called on the **object `o`**, not on the prototype object that defines the property. If the setter method defines any properties, they will be created on `o`, and the prototype chain will remain unmodified.

---
