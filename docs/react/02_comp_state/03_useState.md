
# Events in React

Listening to events and triggering actions is a common requirement in web apps. React offers a **built-in event system** that allows you to attach event listeners directly to JSX elements.

```jsx
function EmailInput() {
  let errorMessage = '';

  function evaluateEmail(event) {
    const enteredEmail = event.target.value;
    if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      errorMessage = 'The entered email address is invalid.';
    } else {
      errorMessage = '';
    }
  }

  return (
    <div>
      <input
        placeholder="Your email"
        type="email"
        onBlur={evaluateEmail}
      />
      <p>{errorMessage}</p>
    </div>
  );
}
```

- This code **handles the event**, but it **won’t update the UI**, because React doesn’t re-render on plain variable changes.
    
- The `onBlur` prop is a built-in React event handler, available on native elements.

### React Event Naming Convention

React uses `onEventName` props:

- `onBlur`
- `onClick`
- `onChange`
- `onSubmit`
- ... and many others

These props require pointer to the function that should be executed when the event occurs.

>[!important]
> There’s a big difference between `evaluateEmail` and `evaluateEmail()`:
> 
> - `evaluateEmail` is a **function reference**
>     
> - `evaluateEmail()` is a **function call**
>     


## State in React

**State** allows React components to **hold and update data**, and automatically re-render the UI based on changes.

When you want to update something dynamically (e.g., when a button is clicked or an input changes), you need to store that information somewhere—this is where **state** comes in.

**State** refers to the internal data of a component that can change over time. A stateful component can render different output depending on its current state.

For example, whether a button is clicked or not can be stored as a state value. A component that holds such values is considered **stateful**.


### Why State Matters

State is essential for building **interactive** applications. Without state, your app is static—it renders once and doesn’t change unless refreshed.

Any time you need to:

- Track a button click
    
- Show or hide UI
    
- Store form input
    
- Manage authentication
    
...you need **state**.

Each component in React can be **individually stateful**—this allows React apps to manage dynamic behavior in a modular way.


## React Component State

- **Stateful Component**: Can manage and update its own data using internal logic (e.g., timers, counters).
    
- **Stateless Component**: Receives props from a parent and cannot maintain or modify its own data.
    
**Example**:

- A stateless clock shows a fixed time passed via props.
    
- A stateful clock updates itself every second to show the current time.

## Categories of State

React app state usually falls into three categories:

1. **Application Data**  
    e.g., User information, fetched data — typically stored globally (e.g., using context or state libraries).
    
2. **UI State**  
    e.g., Is a tab open? Is the dropdown expanded? — typically stored locally in components.
    
3. **Form Data**  
    e.g., Text input, checkbox state — often stored locally in the form component.
    


#### What Not to Store in State

Avoid storing:

- **Values that never change**, like config constants.
    
- **Duplicates of other state**, which can lead to bugs.
    
- **Derived values**, that can be calculated from existing state or props.


## React Hooks: `useState`

To use state in a functional component, you need the `useState` hook from React. All hooks start with `use`.

#### Rules of Hooks

1. **Hooks must be called at the top level** of your function component. 
2. You cannot call hooks inside loops, conditions, or nested functions.
3. **Hooks must always be called in the same order** on every render.

Incorrect example (violates Rule 2):

```jsx
function Counter({ isVisible }) {
	if (!isVisible) {
		return null;
	}
	const [counter, setCounter] = useState(0); 
	// Won't work
}
```

Correct:

```jsx
function Counter({ isVisible }) {
	const [counter, setCounter] = useState(0);

	if (!isVisible) {
		return null;
	}

	return <p>Clicks: {counter}</p>;
}
```

## `useState()`

- A **Hook** that lets you register state inside a React component.
    
- When the state value updates, React **re-runs** the component function.

```jsx
const [stateValue, setStateValue] = useState(initialValue);
```    

- `useState()` returns an **array** with two elements:    
    1. The **current state value**
    2. A **function to update** that state

```jsx
const [errorMessage, setErrorMessage] = useState('');
```

- When `setErrorMessage()` is called, React:
    - Updates the value
    - Re-evaluates the component
    - Updates the UI if needed

---

### Naming Conventions

| Element         | Naming Example                       |
| --------------- | ------------------------------------ |
| State value     | `email`, `enteredEmail`, `userEmail` |
| Setter function | `setEmail`, `setEnteredEmail`        |

---

### Initializing State

- You must always provide an **initial value** to `useState`.
    
- The initial value is used only on the **first render** and **ignored** on subsequent renders.

Common Initial Values:

- `false` — for toggles, dropdowns
    
- `""` — for input fields
    
- `null` — for uninitialized values    

You can also initialize state using cookies, localStorage, etc.

### Allowed State Value Types

You can store:

- Primitive values (`string`, `number`, `boolean`)
    
- Complex values (`objects`, `arrays`)
    
- Change value types at runtime

___

### Example: Click Counter

```jsx{4,9}
import { useState } from 'react';

function Counter() {
	const [counter, setCounter] = useState(0);

	return (
		<main>
			<p>Clicks: {counter}</p>
			<button onClick={() => setCounter((value) => value + 1)}>
				Increment
			</button>
		</main>
	);
}

function App() {
	return <Counter />;
}

export default App;
```

- `useState(initialValue)` returns `[currentValue, setterFunction]`.
    
- You **must** call `useState` **at the top** of the component, not conditionally.
    
- The setter function updates the value and triggers a re-render.

### Example: Email Validation

```jsx
import { useState } from 'react';

function EmailInput() {
  const [errorMessage, setErrorMessage] = useState('');

  function evaluateEmail(event) {
    const enteredEmail = event.target.value;
    if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      setErrorMessage('The entered email address is invalid.');
    } else {
      setErrorMessage('');
    }
  }

  return (
    <div>
      <input
        placeholder="Your email"
        type="email"
        onBlur={evaluateEmail}
      />
      <p>{errorMessage}</p>
    </div>
  );
}
```

## Dynamic Initial Values Using Props

```jsx
import { useState } from 'react';

function Counter({ start }) {
	const [counter, setCounter] = useState(start);

	return (
		<main>
			<p>Clicks: {counter}</p>
			<button onClick={() => setCounter((v) => v + 1)}
				>Increment</button>
		</main>
	);
}

function App() {
	return (
		<>
			<Counter start={0} />
			<Counter start={100} />
		</>
	);
}
export default App;
```

## Initializer Functions

Avoid calling expensive functions on every render. Instead, pass a function to `useState`.

#### Without Function (called every render):

```jsx
const [password, setPassword] = useState(generatePassword()); // called every render
```
`generatePassword()` function will actually be called on every render (because it’s executed on every render), while the return value will be ignored on every render except the first.

#### With Initializer Function (called once):

```jsx
const [password, setPassword] = useState(() => generatePassword());
```
initial value function will only be invoked the first time around and will be ignored for future renders.


## Storing Functions in State

To store a function (not call it), wrap it in another function:

```jsx
const [operator, setOperator] = useState(() => OPERATORS.ADDITION);
```

### Calculator Example:

```jsx
const OPERATORS = {
	ADDITION: (a, b) => a + b,
	SUBTRACTION: (a, b) => a - b,
	PRODUCT: (a, b) => a * b,
};

function Calculator({ a, b }) {
	const [operator, setOperator] = useState(() => OPERATORS.ADDITION);

	return (
		<main>
			<h1>Calculator</h1>
			<button onClick={() => setOperator(() => OPERATORS.ADDITION)}>Plus</button>
			<button onClick={() => setOperator(() => OPERATORS.SUBTRACTION)}>Minus</button>
			<button onClick={() => setOperator(() => OPERATORS.PRODUCT)}>Multiply</button>

			<p>
				Result of applying operator to {a} and {b}:
				<code>{operator(a, b)}</code>
			</p>
		</main>
	);
}

function App() {
	return <Calculator a={7} b={4} />;
}

export default App;
```

---

