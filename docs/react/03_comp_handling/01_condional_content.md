
# Conditional Content in React


### Basic Example with `if` Statements

```jsx
import { useState } from 'react';

function TermsOfUse() {
	const [showTerms, setShowTerms] = useState(false);

	function handleShowTerms() {
		setShowTerms(true);
	}

	let paragraph;

	if (showTerms) {
		paragraph = <p>By continuing you accept the conditions</p>;
	}

	return (
		<section>
			<button onClick={handleShowTerms}>
				Show Terms of Use Summary
			</button>
			{paragraph}
		</section>
	);
}
```

If `showTerms` is `false`, `paragraph` is `undefined` and nothing is rendered in the DOM. React ignores `null` or `undefined` when used in JSX.

> [!Tip]
>  You can store **entire JSX trees** (multiple, nested, or sibling elements) in variables or constants. Anything returnable by a component can be stored in a variable.

---

Alternative Conditional Rendering Techniques that can be used :

- Ternary expressions
    
- Logical operators (`&&`)
    
- Dynamic tag rendering

---

### 1. Ternary Expressions

**Traditional if-to-ternary conversion:**

```js
// Instead of:
let a = 1;
if (someCondition) {
	a = 2;
}

// Use:
const a = someCondition ? 2 : 1;
```

**Applied to the TermsOfUse component:**

```jsx
import { useState } from 'react';

function TermsOfUse() {
	const [showTerms, setShowTerms] = useState(false);

	function handleShowTerms() {
		setShowTerms(true);
	}

	const paragraph = showTerms ? <p>By continuing you accept the conditions</p> : null;

	return (
		<section>
			<button onClick={handleShowTerms}>
				Show Terms of Use Summary
			</button>
			{paragraph}
		</section>
	);
}
```

**Inline usage in JSX:**

```jsx
import { useState } from 'react';

function TermsOfUse() {
	const [showTerms, setShowTerms] = useState(false);

	function handleShowTerms() {
		setShowTerms(true);
	}

	return (
		<section>
			<button onClick={handleShowTerms}>
				Show Terms of Use Summary
			</button>
			{showTerms ? <p>By continuing you accept the conditions</p> : null}
		</section>
	);
}
```

---

### 2. Logical Operators (`&&`)

Instead of a ternary that returns `null`, use short-circuit evaluation:

```jsx
<div>
	{showDetails && <h1>Product Details</h1>}
</div>
```

In JavaScript, the `&&` operator returns the second value if the first is truthy (not false, undefined, null, 0, and so on) :

```js
console.log(true && 'Hello'); 
// Output: 'Hello'
```

This makes it useful in JSX for conditional rendering.

---

### 3. Selecting Property Values from an Object

```jsx
const languages = {
	de: 'de-DE',
	us: 'en-US',
	uk: 'en-GB'
};

function LanguageSelector({ country }) {
	return <p>Selected Language: {languages[country]}</p>;
}
```

Using an object as a map is a common alternative to multiple `if` or `switch` statements.

## Setting Element Tags Conditionally

### Using `if`:

```jsx
function Button({ isButton, config, children }) {
	if (isButton) {
		return <button {...config}>{children}</button>;
	}
	return <a {...config}>{children}</a>;
}
```

### Dynamic Tag Selection:

```jsx
function Button({ isButton, config, children }) {
	const Tag = isButton ? 'button' : 'a';
	return <Tag {...config}>{children}</Tag>;
}
```

> JSX supports using **variables as tag names**, but they must begin with an **uppercase character**.


## Using Custom Components Conditionally

Instead of using HTML tags, you can conditionally use custom components.

```jsx
import MyComponent from './MyComponent.jsx';
import MyOtherComponent from './MyOtherComponent.jsx';

const Tag = someCondition ? MyComponent : MyOtherComponent;

function Example() {
	return <Tag someProp="value" />;
}
```

This allows dynamic rendering of entire component trees based on conditions.

---
