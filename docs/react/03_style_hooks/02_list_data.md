
# Outputting List Data

In React apps, list data is typically received as an **array of values**. Let's explore how to render these arrays into JSX elements and understand best practices for managing dynamic lists.

```jsx
const products = [
	{ id: 'p1', title: 'A Book', price: 59.99 },
	{ id: 'p2', title: 'A Carpet', price: 129.49 },
	{ id: 'p3', title: 'Another Book', price: 39.99 }
];

function ProductList({ products }) {
	// ... todo
}
```

### Outputting List Items Using a `for...of` Loop

```jsx
const productElements = [];

for (const product of products) {
	productElements.push(
		<li>
			<h2>{product.title}</h2>
			<p>${product.price}</p>
		</li>
	);
}
```

JSX elements are JavaScript values, so they can be **stored in arrays** and dynamically rendered.

```jsx
return (
	<ul>
		{productElements}
	</ul>
);
```

> [!Important]  
> JSX arrays render all included elements as siblings in the DOM.

**Equivalent syntax:**

```jsx
<div>
	{[<p>Hi there</p>, <p>Another item</p>]}
</div>
```

Is the same as:
```jsx
<div>
	<p>Hi there</p>
	<p>Another item</p>
</div>
```


## Mapping List Data

The `map()` method simplifies transforming arrays into JSX:

```jsx
const users = [
	{ id: 'u1', name: 'Max', age: 35 },
	{ id: 'u2', name: 'Anna', age: 32 }
];

const userNames = users.map(user => user.name);
// Result: ['Max', 'Anna']
```

`map()` method that can be called on any JavaScript array. It accepts a function as a parameter and executes that function for every array item. `map()` then combines all these returned, transformed values into a new array and returns it.

### Example in a React Component

```jsx
function ProductsList({ products }) {
	const productElements = products.map(product => (
		<li>
			<h2>{product.title}</h2>
			<p>${product.price}</p>
		</li>
	));
	
	return <ul>{productElements}</ul>;
}
```

### Inline Mapping (Concise)

```jsx
function ProductsList({ products }) {
	return (
		<ul>
			{products.map(product => (
				<li>
					<h2>{product.title}</h2>
					<p>${product.price}</p>
				</li>
			))}
		</ul>
	);
}
```

> Using `.map()` is the **standard approach** to render lists in React.


## Updating Lists

To update dynamic lists, you must modify the state **immutably** using the state-updating function from `useState`.

#### Incorrect: Mutating the State Directly

```jsx
const [todos, setTodos] = useState(
		['Learn React', 'Recommend this book']
	);

function handleAddTodo() {
	todos.push('A new todo'); 
	// React won't re-render
}
```

Even worse: State updating function should receive the new state as an argument. `push()` method doesn’t return the updated array, it mutates the existing array in place.

```jsx
function handleAddTodo() {
	setTodos(todos.push('A new todo')); 
	// push returns the new length, not the array
}
```

>[!important]
>While updating an array (or an object), perform update in an immutable way (i.e., without changing the original array or object). Instead, create a new array or object. This new array can be based on the old array and contain all the old data, as well as any new or updated data.

### Correct: Using Immutability

Use the **spread operator**:

```jsx
function handleAddTodo() {
	setTodos(prevTodos => [...prevTodos, 'A new todo']);
}
```

Or use `.concat()`:

```jsx
function handleAddTodo() {
	setTodos(prevTodos => prevTodos.concat('A new todo'));
}
```

> [!Note]
> A function is passed to the state updater since the new state **depends on the previous state**.

## The Problem with List Keys

Keys are simply unique identifier values that can (and should) be attached to JSX elements when rendering list data. Keys help React identify elements that were rendered before and didn’t change.

Without proper **keys**, React cannot efficiently update lists:
- React may **re-render the entire list** unnecessarily.
- **Missing keys** trigger warnings in development.

### Solution: Add Unique `key` Props

```jsx
<li key={todo.id}>{todo.text}</li>
```

> [!Note]  
> Avoid using array indexes as keys unless you're certain items won't change order or be removed.

Index isn’t attached to the list item data. If you reorder items in a list, the index isn't reordered so stay the same. 

### Values Can Be Keys

```jsx
const hobbies = ['Sports', 'Cooking'];

hobbies.map(hobby => <li key={hobby}>{hobby}</li>);
```

If list values are **unique and stable**, they can be used directly as keys.


## Lists of JSX Elements

Use `.map()` to render lists. Always provide a unique `key`.

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
  const items = ["apples", "pears", "playstations"];
  return <Select items={items} />;
}
```

> **Note:** `key` is a special React prop used for efficient rendering. It should be **unique within the list**, ideally an ID or unique value, not just an index.


## Fragments in JSX

Fragments let you group multiple elements without adding extra nodes to the DOM.

### Long syntax:

```jsx
import { Fragment } from 'react';

return (
  <Fragment>
    <h1>Hello</h1>
    <a href="/blog">Blog</a>
  </Fragment>
);
```

### Short syntax:

```jsx
return (
  <>
    <h1>Hello</h1>
    <a href="/blog">Blog</a>
  </>
);
```

---

### Example: List with Fragment and `key`

Use `<Fragment>` with `key` when mapping JSX blocks:

```jsx
function Breeds({ list }) {
  return (
    <dl>
      {list.map(({ breed, description }) => (
        <Fragment key={breed}>
          <dt>{breed}</dt>
          <dd>{description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}

function App() {
  const list = [
    { breed: "Chihuahua", description: "Small breed of dog." },
    { breed: "Corgi", description: "Cute breed of dog." },
    { breed: "Cumberland Sheepdog", description: "Extinct breed of dog." }
  ];
  return <Breeds list={list} />;
}
```


>[!important]
> Use `<Fragment>` when using `key` Short syntax (`<>...</>`) can’t accept props, so use `<Fragment key={...}>` for list rendering.

---
