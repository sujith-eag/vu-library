---
title: "03 - switch-case Statement"
description: ""
summary: ""
date: 2024-11-07T20:47:19+05:30
lastmod: 2024-11-07T20:47:19+05:30
draft: false
weight: 356
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



The `switch` statement is a more concise and readable way to handle multiple conditional checks based on a single value. It is often used as an alternative to multiple `if...else if` statements, particularly when you have many conditions to check against a single expression but not multiple conditional checks.


```js
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
        // Code to execute if no cases match
        break;
}
```

- The `switch` keyword is followed by an expression in parentheses and a block of code enclosed in curly braces.
- Various locations in the block of code are labeled with the `case` keyword followed by an expression and a colon.
- When a `switch` executes, it computes the value of the expression and then looks for a `case` label whose expression evaluates to the same value (using `===` for strict equality, meaning no type conversion is allowed, so `"3" !== 3`).

If it finds a match, it starts executing the block of code at the `case` statement. If it does not find a matching case, it looks for a `default:` statement. If no `default` is provided, the switch statement skips the block of code.

- **Execution continues until the nearest `break`, or the end of the `switch`.**
- **If there is no `break`, execution continues with the next `case` without any checks.**

The `break` statement causes the interpreter to jump to the end of the switch statement, continuing with the statement that follows it. Without a `break`, the `switch` continues executing its block of code from the matched case label until it hits a `break` or reaches the end of the block.

### **Fall Through**

On rare occasions, it is useful to write code that “falls through” from one case label to the next. However, 99% of the time, you should be careful to end every case with a `break` statement.

When using a `switch` inside a function, you may use a `return` statement instead of `break`. Both serve to terminate the `switch` statement and prevent execution from falling through to the next case.

---


**Basic Switch Statement**
```js
let a = 2 + 2;

switch (a) {
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('Exactly');
        break;
    default:
        alert('I don’t know such values');
}
```

- `a` matches `case 4`, so the corresponding code `alert('Exactly')` is executed.
- The `break` statement prevents further case evaluation, exiting the `switch` block.

---


**Function Using Switch**
```js
function convert(x) {
    switch (typeof x) {
        case "number":  // Convert to a hexadecimal integer
            return x.toString(16);
        case "string":  // Return the string enclosed in quotes
            return '"' + x + '"';
        default:        // Convert any other type in the usual way
            return String(x);
    }
}
```

This function converts a variable to a string based on its type:

- For numbers, it converts them to hexadecimal.
- For strings, it encloses them in quotes.
- For other types, it simply converts them to a string.

---


**Weather Application**
```js
switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
        break;
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}
```

- Asks the user for the current weather and responds accordingly.

---

### **Grouping 'case' Blocks**

You can group multiple `case` values that should run the same code. This allows you to combine cases that share identical behavior.

```js
let a = 3;

switch(a) {
    case 4:
        alert('Right!');
        break;

    case 3:
    case 5:
        alert('Wrong');
        alert("Why don't you take a math class?");
        break;

    default:
        alert('The result is strange.');
}
```

- Both `case 3` and `case 5` trigger the same block of code.

---

### **Key Points to Remember**

1. **`switch` uses strict equality (`===`)**: Ensure that both the value and type match. For example, `'3' !== 3`.
2. **`break` is optional**: Without it, execution will "fall through" to the next `case`.
3. **`default` is optional**: It provides a fallback when no cases match.
4. **Many `case` values can share the same block**: You can group cases that should execute the same code.
5. **`switch` is generally more readable**: When dealing with many conditions based on a single value, `switch` can improve readability compared to long chains of `if...else` statements.

---
