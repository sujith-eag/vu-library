---
title: "JS - 03.01 - Function"
description: ""
summary: ""
date: 2024-11-09T17:00:29+05:30
lastmod: 2024-11-09T17:00:29+05:30
draft: false
weight: 442
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


### **Expressions vs Statements**

- **Expression**: A fragment of code that produces a value. Expressions can contain other expressions, allowing for nesting.  
  ```js
  1;          // Expression
  !false;     // Expression
  ```

- **Statement**: A complete instruction that stands on its own, corresponding to a full sentance. The simplest statement is an expression followed by a semicolon.  
  ```js
  1;          // Statement
  !false;     // Statement
  ```

- **Side Effects**: When an expression or statement produces a value but does not affect the program's state or produce a lasting impact (i.e., the value is discarded).  
  ```js
  1;          // No side effect, value is produced and discarded
  ```

---

### **Functions in JavaScript**

- **Environment**: The collection of bindings (variables) and their values that exist at any given time during the execution of a program. The environment is not empty when a program starts, as it includes built-in values and functions.

- **Functions**: A function is essentially a program wrapped in a value. When you assign a function to a variable or pass it as an argument, you are using the function as a value.  
  A function can be **invoked**, **called**, or **applied** to run the program inside it.
  ```js
  prompt('Enter detail');        // Invokes the prompt function
  console.log("hello");          // Invokes the console.log function
  ```

- **Arguments**: The values provided inside the parentheses `()` when invoking a function. These are given to the program inside the function to be used.

- **Return Values**: Functions can return values, which are values the function produces when it completes. These returned values can be used in further expressions.  
  ```js
  console.log(Math.max(2, 4));   // 4
  console.log(Math.min(2, 4) + 100); // 102
  ```

- **Side Effects of Functions**: Functions like `alert()`, `prompt()`, or `console.log()` often have side effects because they perform actions such as displaying a dialog box or printing to the console.

---

### **Naming Functions**

- **Function Names**: Functions typically represent actions, so their names should usually be verbs. The name should briefly describe what the function does. It's often helpful to start with a prefix that conveys the function's purpose:
  - `show...` (e.g., `showMessage()`)
  - `get...` (e.g., `getUserInput()`)
  - `calc...` (e.g., `calcTotal()`)
  - `create...` (e.g., `createElement()`)
  - `check...` (e.g., `checkEligibility()`)

- **Clarity**: A function's name should clearly indicate what the function does. If a function performs multiple actions, it might be a good idea to break it into smaller functions. If two functions need to be called together, create a third function that calls both.

---

### **Best Practices**

1. **Keep functions focused**: A function should do exactly what its name implies. If it does more than one thing, consider splitting it into smaller functions.
   
2. **Avoid repetition**: Functions allow you to structure larger programs by reusing code, so you should use functions to reduce code repetition and isolate different parts of your program.

3. **Organize functions logically**: Group related functions together to make the code more readable and maintainable.

4. **Use descriptive names**: A function's name should give a clear idea of its purpose. Use meaningful and consistent naming conventions throughout your codebase.


