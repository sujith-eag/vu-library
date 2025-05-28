# Intro to React

Creating composable UIs has been around for a long time, but React is the first to use pure JavaScript without templates to make this possible. This approach has proven easier to maintain, reuse, and extend.

Use React to define a component `<Captcha />` or `<DatePicker />` that you can add to your form: a simple drop-in component with all the functionality and logic to communicate with the backend.

React is a great library for building UIs and should be part of your frontend web toolkit, but it isn’t a complete solution for all frontend web development.

### Benefits of Using React

- **Simpler web apps** — React uses a component-based architecture (CBA) with pure JavaScript, a declarative style, and powerful, developer-friendly Document Object Model (DOM) abstractions (and not just DOM, but also iOS, Android, etc.).
    
- **Fast UIs** — React provides outstanding performance thanks to its virtual DOM and smart reconciliation algorithm. This also allows testing without spinning up a headless browser.
    
- **Less code to write** — React’s large community and vast ecosystem of components provide a wide variety of libraries and components, which is important when choosing a development framework.
    

#### Simplicity is Achieved Through

- **Declarative over imperative style** — React embraces a declarative style by updating views automatically.
    
- **CBA using pure JavaScript** — React does not use domain-specific languages (DSLs) for components, just pure JavaScript. There’s no separation between HTML and JavaScript for a single piece of functionality.
    
- **Powerful abstractions** — React simplifies interaction with the DOM, normalizing event handling and other interfaces that work consistently across browsers.
    

---

### Declarative over Imperative Style

Declarative style means writing _how_ the UI should look, not _how to build it step by step_.

- **Statements vs. expressions** — Imperative programming uses individual statements to modify program state. Declarative programming uses expressions that build on each other.
    
- **Reserved words** — Imperative code relies heavily on reserved words like `for`, `while`, `switch`, `if`, and `else`. Declarative code uses array methods, arrow functions, object access, boolean expressions, and ternary operators.
    
- **Function composition** — Imperative code uses isolated function calls. Declarative code composes small, generalized functions into more complex logic.
    
- **Mutability** — Imperative style often manipulates existing objects. Declarative style uses immutable data, creating new structures from the old.
    

Example (Imperative):

```js
function countGoodPasswords(passwords) {
	const goodPasswords = [];
	
	for (let i = 0; i < passwords.length; i++) {
		const password = passwords[i];
		if (password.length < 9) {
			continue;
		}
		goodPasswords.push(password);
	}
	
	return goodPasswords.length;
}
```
Here new statements change the program state `const, push`, existing objects are mutated, reserved words control the program flow.

Example (Declarative):

```js
function countGoodPasswords(passwords) {
	return passwords.filter(p => p.length >= 9).length;
}
```
We arrive directly at the goal in a single statement by manipulating an object in several steps, using function composition to arrive at the target.

React takes the same declarative approach when composing UIs. Developers describe UI elements declaratively. When internal state changes, React updates the view accordingly.

---

### Component-Based Architecture Using Pure JavaScript

Separation of concerns, loose coupling, and code reuse are core benefits of this architecture.

Before React, pure JavaScript implementations of CBA were lacking. Frameworks like Angular, Backbone, and Ember required separate files for JavaScript and templates.

With React, there's no separation of HTML and JavaScript within components.

React uses a virtual DOM to calculate the differences (delta) between the browser-rendered UI and the new view. This process is called **DOM diffing** or **reconciliation**. Developers update the state, and React updates the view accordingly—no need for manual DOM manipulation.

---

### Powerful Abstractions

React includes several helpful abstractions:

- **Synthetic events** — Wrap native browser events, abstracting away differences across browsers.
    
- **JSX (JavaScript XML)** — Abstracts the JavaScript DOM and allows HTML-like syntax in JavaScript files.
    
- **Browser independence** — Supports rendering in non-browser environments (e.g., server-side rendering).
    

When using an `onClick` handler in React, the handler receives a synthetic event object, providing consistent behavior across browsers. Touch events are also supported.

JSX, while optional, allows writing UI components using HTML-like syntax:

```js
if (user.session) {
	return <a href="/logout">Logout</a>;
} else {
	return <a href="/login">Login</a>;
}
```

JSX is compiled into JavaScript and not run directly in the browser.

React can also render on the server for better SEO and performance. Hybrid rendering strategies are also possible, where initial content is server-rendered and then hydrated in the browser.

---

### Speed and Testability

React’s virtual DOM lives in memory. When data changes:

1. React computes the difference between the current and new views.
    
2. Only the necessary parts of the real DOM are updated.
    

Example: If a `<p>` element’s text changes via state, React updates just the text (via `innerHTML`), not the entire element.

This selective update process leads to better performance than re-rendering full sections or entire pages.

---

### Disadvantages of React

- **Not a complete framework** — Requires pairing with libraries like Redux or XState for advanced features.
    
- **Package management overhead** — Using React often means managing multiple packages and their versions, which increases maintenance complexity.
    
- **Learning curve** — JSX and functional programming can be intimidating to new developers.
    
- **One-way data binding** — React’s one-way binding is powerful but may seem limiting compared to frameworks with two-way binding.
    
- **Not reactive by default** — For fully reactive programming, you need additional libraries like React Query to manage async content and state.
    

---

