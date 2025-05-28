
# Conditional Rendering in React

React allows you to show, hide, or switch content based on conditions. This is a powerful pattern for building dynamic interfaces.


## Basic Conditional Rendering with `if` Statements

You can assign conditional content to a variable and render it.

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

If `showTerms` is `false`, `paragraph` is `undefined` and nothing is rendered. React ignores `null` or `undefined` in JSX.


> [!Tip]
>  You can store **entire JSX trees** (multiple, nested, or sibling elements) in variables or constants. Anything returnable by a component can be stored in a variable.

---

Branching logic is essential in React. You often want to conditionally render elements depending on props, state, or context (e.g., user authentication status).

Common branching patterns:

- Early return (`return null`) for rendering nothing.
    
- Ternary operators for alternatives.
    
- && Logical AND for optional rendering.
    
- Object mapping for multiple outcomes.
    
- Extracted components for complex branching.

- Dynamic tag rendering

- Custom tag rendering 


---

### 1. Early Return

Render nothing if a condition is not met. Countdown component that displays only if time remains.

```jsx
function Countdown({ remains }) {
	if (remains === 0) return null;

	const seconds = remains % 60;
	const minutes = Math.floor(remains / 60);

	return <p>{minutes}:{seconds}</p>;
}
```

Early return is a clean way to avoid deep nesting.

---

### 2. Ternary Expressions

#### JSX Variable:

```jsx
function TermsOfUse() {
	const [showTerms, setShowTerms] = useState(false);

	//function handleShowTerms() {
	//	setShowTerms(true); }
	
	const paragraph = showTerms ? (
		<p>By continuing you accept the conditions</p>
	) : null;

	return (
		<section>
			<button onClick={() => setShowTerms(true)}>
				Show Terms of Use Summary
			</button>
			{paragraph}
		</section>
	);
}
```

#### Inline JSX:

```jsx
// no need of Variable storing

{showTerms ? 
	<p>By continuing you accept the conditions</p> 
	: null}
```

### Nested JSX Rendering Example:

```jsx
//Show cart items if any, or a message otherwise.
function ShoppingCart({ items }) {
	return (
		<aside>
			<h1>Shopping cart</h1>
			{items.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<CartItems items={items} />
			)}
		</aside>
	);
}
```

---

### 3. Logical `&&` Operator


Instead of a ternary that returns `null`, use short-circuit evaluation. Render only if a condition is true.

```jsx
// Show a checkmark only if user is verified.
function UserName({ username, isVerified }) {
	return (
		<p>
			{username}
			{isVerified && <Checkmark />}
		</p>
	);
}
```

Another example:

```jsx
<div>
	{showDetails && <h1>Product Details</h1>}
</div>
```

---

### 4. Object Mapping for Multiple Conditions

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

Replace nested ternaries or `switch` statements:

```jsx
// Render different icons depending on post status.
const statusToIcon = {
	draft: <DraftIcon />,
	published: <PublishedIcon />,
	deleted: <TrashIcon />
};

function PostStatus({ status }) {
	return statusToIcon[status] || statusToIcon.deleted;
}
```

Cleaner and more scalable than deeply nested ternaries.

---

### 5. Conditional Custom Components

You can conditionally choose entire components:

```jsx
import MyComponent from './MyComponent.jsx';
import MyOtherComponent from './MyOtherComponent.jsx';

const Tag = someCondition ? MyComponent : MyOtherComponent;

function Example() {
	return <Tag someProp="value" />;
}
```

---

### 6. Dynamic Tag Names

#### Using `if`:

```jsx
function Button({ isButton, config, children }) {
	if (isButton) {
		return <button {...config}>{children}</button>;
	}
	return <a {...config}>{children}</a>;
}
```

#### Using variable tag:

```jsx
function Button({ isButton, config, children }) {
	const Tag = isButton ? 'button' : 'a';
	return <Tag {...config}>{children}</Tag>;
}
```

> Tag names in JSX that are variables must start with an uppercase letter.

---

### 7. Complex Conditional Components

When logic gets too complex, extract parts into separate components.

#### Example: Conditional Buttons Based on User and Cart

**Requirements:**

- Logged-in users:
    
    - With credit card: show Checkout (+ One-click buy if address is present)
        
    - Without credit card: show Add Credit Card
        
- Guests:
    
    - Show Login + Checkout as Guest
        
- Disable buttons if items are out of stock or cart is empty.

```jsx
function UserButtons({ user, canCheckout }) {
  const hasCreditCard = user.creditcard !== null;
  const hasAddress = user.address !== null;

  return hasCreditCard ? (
    <>
      <button disabled={!canCheckout}>Checkout</button>
      {hasAddress && (
        <button disabled={!canCheckout}>One-click buy</button>
      )}
    </>
  ) : (
    <button>Add credit card</button>
  );
}

function GuestButtons({ canCheckout }) {
  return (
    <>
      <button>Login</button>
      <button disabled={!canCheckout}>Checkout as guest</button>
    </>
  );
}

function ShoppingCart({ items, user }) {
  const hasItems = items.length > 0;
  const isAvailable = items.every((item) => !item.outOfStock);
  const canCheckout = hasItems && isAvailable;

  const isLoggedIn = user !== null;

  return isLoggedIn ? (
    <UserButtons user={user} canCheckout={canCheckout} />
  ) : (
    <GuestButtons canCheckout={canCheckout} />
  );
}

function App() {
  const items = [1, 2, 3];
  const user = { creditcard: null, address: true };

  return <ShoppingCart items={items} user={user} />;
}
```


## Lists of JSX Elements

Render lists with `.map()` and assign `key`:

```jsx
function Select({ items }) {
	return (
		<select>
			{items.map((item) => (
				<option key={item}>{item}</option>
			))}
		</select>
	);
}

function App() {
	const items = ['apples', 'pears', 'playstations'];
	return <Select items={items} />;
}
```

> `key` must be unique within the list and is used by React internally for efficient rendering.

---


