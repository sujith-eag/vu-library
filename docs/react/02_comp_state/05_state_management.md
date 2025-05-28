
# React State Management


#### Updating State

1. By setting a **static value**
    
2. Using an **updater function** that takes the previous value
    

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


### Using an Updater Function

```jsx
const [counter, setCounter] = useState(0);

<button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
```

This is useful when the next state depends on the previous state.

---

### Changing the Type Dynamically

This is valid in React:

```jsx
const [counter, setCounter] = useState(0);

setCounter("hi there");
```

Although this is legal, changing types dynamically can lead to bugs and confusion. Prefer keeping state types consistent.

## Example: Resetting a Counter

Here’s an example of using state to implement a simple counter with an **Increment** and **Reset** button:

```jsx
import { useState } from 'react';

function Counter() {
	const [counter, setCounter] = useState(0);

	return (
		<main>
			<p>Counter: {counter}</p>
			<button onClick={() => setCounter(val => val + 1)}>
				Increment
			</button>
			<button onClick={() => setCounter(0)}>
				Reset
			</button>
		</main>
	);
}

function App() {
	return <Counter />;
}

export default App;
```


> [!NOTE]  
> **React Developer Tools** allow you to visually inspect re-renders and state changes.
> 
> - Chrome/Edge: [React DevTools](http://mng.bz/wvoq)
>     
> - Firefox: [React DevTools](http://mng.bz/qrYw)
>     


## Don’t Mutate State Directly

React compares new and old state values **by reference**. This means:

- If you update state with the same object or array reference, React won't re-render.
    
- Even if the **contents** of the object or array changed, React **won’t detect it** unless the reference itself changes.

```jsx
const arr = [1, 2, 3];
arr.push(4); // Mutates the original array (bad)
setState(arr); // React may not re-render
```

Instead, create a new reference:

```jsx
setState(prev => [...prev, 4]); //  new array reference
```

## Example: Updating an Array in State (Todo App)

Here’s a correct way to remove an item from an array in state:

```jsx
import { useState } from "react";

function TodoApplication({ initialList }) {
	const [todos, setTodos] = useState(initialList);

	return (
		<main>
		  {todos.map((todo, index) => (
			<p key={todo}>
			  {todo}
				<button
				  onClick={() =>
					setTodos(prev => [
					  ...prev.slice(0, index),
					  ...prev.slice(index + 1),
						])
					}
				>x</button>
			</p>
		  ))}
		</main>
	);
}

function App() {
	const items = ["Feed the plants", "Water the dishes", "Clean the cat"];
	return <TodoApplication initialList={items} />;
}

export default App;
```

This creates a **new array** that omits the deleted item and passes that to `setTodos`.


## Setting Function to a state

```jsx
import { useState } from "react";

const PLUS = (a,b) => a+b;
const MINUS = (a,b) => a-b;
const MULTIPLY = (a,b)=> a*b;

function Calculator({a, b})
{
	const [operator, setOperator] = useState( ()=> PLUS );
	
	return (
		<main>
			<h1>Calculator</h1>
			
			<button onClick= { ()=> setOperator( ()=>PLUS) } >
			Plus
			</button>
			
			<button onClick= { ()=> setOperator( ()=>MINUS) } >
			Minus
			</button>
			
			<button onClick= { ()=> setOperator( ()=>MULTIPLY) } >
			Multiply
			</button>
			
			<p>
				Result of applying operator to {a} and {b}:
				<code>{operator(a,b)}</code>
			</p>
		</main>
	); 
}

function App() {
	return <Calculator a={7} b={4} />
}
export default App;
```

The state value can be called now as a function to take the variables.


## Using Multiple States in a Component

Call `useState()` for each separate piece of state:

```jsx
function LoginForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  function handleUpdateEmail(event) {
    setEnteredEmail(event.target.value);
  }

  function handleUpdatePassword(event) {
    setEnteredPassword(event.target.value);
  }

  return (
    <form>
      <input
        type="email"
        placeholder="Your email"
        onBlur={handleUpdateEmail}
      />
      <input
        type="password"
        placeholder="Your password"
        onBlur={handleUpdatePassword}
      />
    </form>
  );
}
```

### Example: Todo App with Filtering and Completion

We’ll extend our todo app to include:

- A toggle to show/hide completed tasks.
    
- A way to mark tasks as done.
    
- Two separate state values: one for todos, one for the filter.
    

```jsx
import { useState } from "react";

function markDone(list, index) {
	return list.map((item, i) =>
		i === index ? { ...item, done: true } : item
	);
}

function TodoApplication({ initialList }) {
	const [todos, setTodos] = useState(initialList);
	const [hideDone, setHideDone] = useState(false);

	const filteredTodos = hideDone
		? todos.filter(({ done }) => !done)
		: todos;

	return (
		<main>
		  <div style={{ display: "flex", gap: "10px" }}>
			<button onClick={() => setHideDone(false)}>Show All</button>
			<button onClick={() => setHideDone(true)}>Hide Done</button>
		  </div>
			{filteredTodos.map((todo, index) => (
			  <p key={todo.task}>
				{todo.done ? (
				  <strike>{todo.task}</strike>
					) : (
					<>
					  {todo.task}
						<button
						  onClick={() =>
							setTodos(prev => markDone(prev, todo.index))
							}
							>✓</button>
					</>
					)}
			  </p>
			))}
		</main>
	);
}

function App() {
	const items = [
		{ task: "Feed the plants", done: false, index: 0 },
		{ task: "Water the dishes", done: false, index: 1 },
		{ task: "Clean the cat", done: false, index: 2 },
	];
	return <TodoApplication initialList={items} />;
}

export default App;
```

## Multiple States with Objects / Merged State Object

Use a single object to manage all related state:

```jsx
function LoginForm() {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  function handleUpdateEmail(event) {
    setUserData({
      email: event.target.value,
      password: userData.password
    });
  }

  function handleUpdatePassword(event) {
    setUserData({
      email: userData.email,
      password: event.target.value
    });
  }

  // return form...
}
```

```jsx
function LoginForm() {
	const [userData, setUserData] = useState({ 
	  email: '', 
	  password: '' 
	});

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

____

> [!Important]  
> When updating state objects, you must **preserve unchanged properties** manually. React **replaces** the old object entirely with the new one. The old ones will be lost.

Incorrect:

```jsx
setUserData({ email: 'test@example.com' }); // password is lost
```

Correct:

```jsx
setUserData({
  email: 'test@example.com',
  password: userData.password
});
```


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

To manage state **across multiple components**, you can "lift state up" to a parent component and pass both the state and its setter as props.

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


### Full Example:

We’ll now split our `TodoApplication` into smaller components:

- `FilterButton`: Renders the filter control.
    
- `Task`: Renders each task.
    
- `TodoApplication`: Holds state and logic.
    
```jsx
import { useState } from "react";

function markDone(list, index) {
	return list.map((item, i) =>
		i === index ? { ...item, done: true } : item
	);
}

function FilterButton({ current, flag, setFilter, children }) {
	const style = {
		border: "1px solid dimgray",
		background: current === flag ? "dimgray" : "transparent",
		color: current === flag ? "white" : "dimgray",
		padding: "4px 10px",
		marginRight: "10px",
	};
	return (
		<button style={style} onClick={() => setFilter(flag)}>
			{children}
		</button>
	);
}

function Task({ task, done, markDone }) {
	const paragraphStyle = {
		color: done ? "gray" : "black",
		display: "flex",
		alignItems: "center",
	};
	const buttonStyle = {
		border: "none",
		background: "transparent",
		color: "inherit",
		cursor: "pointer",
		marginRight: "8px",
	};

	return (
		<p style={paragraphStyle}>
			<button style={buttonStyle} onClick={done ? null : markDone}>
				{done ? "✓" : "◯"}
			</button>
			{done ? <strike>{task}</strike> : task}
		</p>
	);
}

function TodoApplication({ initialList }) {
	const [todos, setTodos] = useState(initialList);
	const [hideDone, setHideDone] = useState(false);

	const filteredTodos = hideDone
		? todos.filter(({ done }) => !done)
		: todos;

	return (
		<main>
			<div style={{ display: "flex", marginBottom: "10px" }}>
				<FilterButton
					current={hideDone}
					flag={false}
					setFilter={setHideDone}
				>
					Show All
				</FilterButton>

				<FilterButton
					current={hideDone}
					flag={true}
					setFilter={setHideDone}
				>
					Hide Done
				</FilterButton>
			</div>

			{filteredTodos.map((todo, index) => (
				<Task
					key={todo.task}
					task={todo.task}
					done={todo.done}
					markDone={() =>
						setTodos(prev => markDone(prev, todo.index))
					}
				/>
			))}
		</main>
	);
}

function App() {
	const items = [
		{ task: "Feed the plants", done: false, index: 0 },
		{ task: "Water the dishes", done: false, index: 1 },
		{ task: "Clean the cat", done: false, index: 2 },
	];
	return <TodoApplication initialList={items} />;
}

export default App;
```

---

### Summary and Key Takeaways

- Event handlers are added via `onEventName` props (e.g., `onClick`, `onChange`).
    
- Use `useState()` to define and manage internal component state.
    
- `useState()` returns `[currentValue, setValue]`.
    
- Use a function form of the state updater if the new value depends on the previous one.
    
- Any JavaScript value (string, number, object, array) can be stored in state.
    
- For inputs, use two-way binding (`value` + `onChange`) to keep state and UI in sync.
    
- Handle form submissions using `onSubmit` + `preventDefault()`.
    
- When multiple components need access to the same state, **lift state up** to their common ancestor.
    

---
