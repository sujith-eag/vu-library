# React State Management


## Updating State Based on Previous State

When a **new state depends on the previous one**, use the **function form** of `setState()`.

#### Incorrect Example

```jsx
function Counter() {
	const [counter, setCounter] = useState(0);
	
	function handleIncrement() {
		setCounter(counter + 1); 
		// Not reliable if updates happen quickly
	}
	
	return (
		<>
			<p>Counter Value: {counter}</p>
			<button onClick={handleIncrement}>Increment</button>
		</>
	);
}
```

#### Correct Approach

```jsx
function Counter() {
	const [counter, setCounter] = useState(0);
	
	function handleIncrement() {
		setCounter(prevCounter => prevCounter + 1);
	}
	
	return (
		<>
			<p>Counter Value: {counter}</p>
			<button onClick={handleIncrement}>Increment</button>
		</>
	);
}
```

When you pass a function to `setCounter`, React calls the function and passes the latest state value. The function should return a value for the new value to be stored by react.

### With Objects

```jsx
function LoginForm() {
	const [userData, setUserData] = useState({ email: '', password: '' });

	function handleUpdateEmail(event) {
		setUserData(prevData => ({
			...prevData,
			email: event.target.value
		}));
	}

	function handleUpdatePassword(event) {
		setUserData(prevData => ({
			...prevData,
			password: event.target.value
		}));
	}
}
```

>[!important]
>Always use the function form to the state-updating function if the new state depends on the previous state. If it depends on some other value (user input), directly passing the new state value as a function argument is absolutely fine and recommended.


## Two-Way Binding

Two-way binding means user input updates state, and state controls the input value.

Input source (typically an `<input>` element) sets some state upon user input (upon the change event) and outputs the input at the same time.
```jsx
function NewsletterField() {
	const [email, setEmail] = useState('');

	function handleUpdateEmail(event) {
		setEmail(event.target.value);
	}

	return (
		<input
			type="email"
			placeholder="Your email address"
			value={email}
			onChange={handleUpdateEmail}
		/>
	);
}
```

React prevents infinite loops and keeps input and state in sync.

>[!note]
>This might look like an infinite loop, but React deals with this. This is referred to as two-way binding as a value is both set and read from the same source.

### Resetting Input

```jsx
function NewsletterField() {
	const [email, setEmail] = useState('');

	function handleClearInput() {
		setEmail('');
	}

	return (
		<>
			<input
				type="email"
				placeholder="Your email address"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<button onClick={handleClearInput}>Reset</button>
		</>
	);
}
```

Without two-way binding, clearing the state wouldn't reset the input field.

## Deriving Values from State

You can derive values from state directly in the component. Passing state via props to repeat what was typed.

### Simple Echo

```jsx
function Repeater() {
	const [userInput, setUserInput] = useState('');

//	function handleChange(event) {
//		setUserInput(event.target.value); };
	return (
		<>
			<input 
				type="text" 
				onChange={
				  e => setUserInput(e.target.value)} 
			/>
			<p>You entered: {userInput}</p>
		</>
	);
}
```

### Derived Value (Character Count)

```jsx
function Repeater() {
	const [userInput, setUserInput] = useState('');
	const numChars = userInput.length;

	return (
		<>
			<input 
				type="text" 
				onChange={
					e => setUserInput(e.target.value)} 
			/>
			<p>Characters entered: {numChars}</p>
		</>
	);
}
```

No need to store derived values in state—they can be calculated on render.


## Forms and Form Submission

Use `onSubmit` on `<form>` to assign a function and call `event.preventDefault()` to ensure browse won't generate HTTP request by default but manage form submissions manually.

```jsx
function NewsletterSignup() {
	const [email, setEmail] = useState('');
	const [agreed, setAgreed] = useState(false);

	function handleUpdateEmail(event) {
		// could add email validation here
		setEmail(event.target.value);
	};
	
	function handleUpdateAgreement(event) {
		setAgreed(event.target.checked); 
		// checked is a default JS boolean property
	};

	function handleSignup(event) {
		event.preventDefault(); 
		// prevent browser default of sending a Http request
		const userData = {userEmail: email, userAgrees: agreed};
		// doWhateverYouWant(userData);
	};
	
	return (
	  <form onSubmit={handleSignup}>
		<div>
		  <label htmlFor="email">Your email</label>
			<input type="email" id="email" onChange={handleUpdateEmail}/>
		</div>

		<div>
		  <input type="checkbox" id="agree" onChange={handleUpdateAgreement}/>
			<label htmlFor="agree">Agree to terms and conditions</label>
		</div>
	  </form>
	);
};
```

Shorter Version with function defined in `onChange` directly. 
```jsx
function NewsletterSignup() {
	const [email, setEmail] = useState('');
	const [agreed, setAgreed] = useState(false);

	function handleSignup(event) {
		event.preventDefault();
		const userData = { userEmail: email, userAgrees: agreed };
		// handle submission logic
	}

	return (
		<form onSubmit={handleSignup}>
		  <div>
			<label htmlFor="email">Your email</label>
			  <input type="email" id="email" onChange={e => setEmail(e.target.value)} />
		</div>

		<div>
		  <input type="checkbox" id="agree" onChange={e => setAgreed(e.target.checked)} />
			<label htmlFor="agree">Agree to terms and conditions</label>
		</div>

		<button type="submit">Sign Up</button>
	  </form>
	);
}
```

> Note: Use `htmlFor` instead of `for` in JSX to avoid conflicts with reserved keywords which represents JS loop.


## Lifting State Up

When multiple components need access to the same piece of state, move the state to their common ancestor.

#### Incorrect: State in Child Only

```jsx
function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('');
	
	return <input 
		type="search" 
		onChange={e => setSearchTerm(e.target.value)} 
	/>;
}

function Overview() {
	return <p>
		Currently searching for {searchTerm}
	</p>; // Not accessible here
}
```

#### Correct: Lift State to Parent

```jsx
function App() {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<>
		  <SearchBar 
			  onUpdateSearch={e => setSearchTerm(e.target.value)} />
		  <Overview currentTerm={searchTerm} />
		</>
	);
}

function SearchBar({ onUpdateSearch }) {
	return <input 
		type="search" 
		onChange={onUpdateSearch} />;
}

function Overview({ currentTerm }) {
	return <p>Currently searching for {currentTerm}</p>;
}
```

Changes in `App` cause re-rendering of child components, keeping the UI in sync.

>[!important]
>State is lifted by using props in the components that need to manipulate (that is, set) or read state, and by registering state in the ancestor component that is shared by the two other components.


---

## Summary and Key Takeaways

- Event handlers are added via `onEventName` props (e.g., `onClick`, `onChange`).
    
- Use `useState()` to define and manage internal component state.
    
- `useState()` returns `[currentValue, setValue]`.
    
- Use a function form of the state updater if the new value depends on the previous one.
    
- Any JavaScript value (string, number, object, array) can be stored in state.
    
- For inputs, use two-way binding (`value` + `onChange`) to keep state and UI in sync.
    
- Handle form submissions using `onSubmit` + `preventDefault()`.
    
- When multiple components need access to the same state, **lift state up** to their common ancestor.
    

---
