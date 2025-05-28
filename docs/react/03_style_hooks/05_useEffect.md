
# Handling Side Effects in React

In most real-world applications, you’ll need to perform tasks that go beyond rendering UI—such as sending HTTP requests, accessing browser storage, setting timers, or logging information. These tasks are called **side effects**.

React's component rendering system is declarative and predictable. This means that **any logic unrelated to rendering UI**, like data fetching or interacting with the browser environment, must be handled carefully to avoid bugs and performance issues.

## What Is a Side Effect?

A **side effect** is any code that affects something outside the scope of the current function or component which needs more than just JSX. In React, this typically includes:

- Fetching data from an API
    
- Storing or retrieving data from `localStorage`
    
- Interacting with browser APIs (e.g., geolocation, scroll events)
    
- Setting timers with `setTimeout()` or `setInterval()`
    
- Logging to the console for debugging
    
* Display a user's camera, handle input or set a cookie

If such operations are executed **directly inside** a component’s main function, they will run **every time the component re-renders**, which may lead to:

- Repeated API requests
    
- Performance bottlenecks
    
- Infinite re-render loops if state is updated within the operation
    
## The Problem with Side Effects in Components

Let’s say you build a timer component that counts how many seconds it's been mounted. You might update a state value every second:

```jsx
setInterval(() => setSeconds(prev => prev + 1), 1000);
```

But if this logic is placed inside the component’s body or re-runs on every re-render:

- A **new interval starts every time**.
    
- The counter updates **multiple times per second**.
    
- If the component is unmounted, the **interval keeps running**, trying to update a component that no longer exists — leading to memory leaks and console errors.
    
React solves this problem with the `useEffect` hook.

## Side Effects Without `useEffect`

Here’s an example where the HTTP request is **not** treated as a side effect. Instead, it's triggered by a user interaction (a button click). This approach avoids re-render loops and is often fine for on-demand actions :

```jsx
import { useState } from 'react';
import classes from './BlogPosts.module.css';

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const blogPosts = await response.json();
  return blogPosts;
}

function BlogPosts() {
  const [loadedPosts, setLoadedPosts] = useState([]);

  function handleFetchPosts() {
    fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }

  return (
    <>
      <button onClick={handleFetchPosts}>Fetch Posts</button>
      <ul className={classes.posts}>
        {loadedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default BlogPosts;
```


## `useEffect` : Running Side Effects in Components

The `useEffect` hook allows you to run side effects in a controlled, lifecycle-aware way. It can also return a **cleanup function** to clean up after itself when:

1. The component unmounts
    
2. The effect dependencies change

When you want to **run side effects automatically** (fetching data when a component mounts) you should use the `useEffect` hook.

### Basic Syntax of `useEffect`

```jsx
useEffect(() => {
  // side effect logic
}, [dependencies]);
```

```jsx
useEffect(() => {
	// Your effect code here (e.g. fetch, timer)
	
	return () => {
		// Optional cleanup code here
	};
}, [dependencies]);
```

- The first argument is a function that runs your side effect.
- The effect runs **after the component mounts**
    
- The second argument is a **dependency array** that tells React when to run the effect. 
- The effect re-runs **only if a dependency changes**.

- The cleanup runs **before re-running the effect or on unmount**.

---

### Five Common Effect Use Cases

|Use Case|When Effect Runs|When Cleanup Runs|
|---|---|---|
|Fetch external data|On mount|Never|
|Start a timer|On mount|On unmount|
|Watch for unmount (e.g. dialog close)|Never|On unmount|
|React to a prop change|On specific prop change|Before next effect run or unmount|
|Conditionally run effects|On condition change (e.g. `isActive`)|Before next run or unmount|

## Understanding the Dependency Array

The second argument to `useEffect` controls **when** the effect runs:

- `[]` — Effect runs once after the first render.
    
- `[someValue]` — Effect runs whenever `someValue` changes.
    
- No dependency array — Effect runs after **every** render (not recommended in most cases).
    

> Always include in the dependency array any variable used inside the effect that comes from **outside** the effect.


## Common Use Cases for `useEffect`

### 1. Fetching Data

Used to load external data from an API.

```jsx
useEffect(() => {
  fetch('...')
    .then(response => response.json())
    .then(data => setData(data));
}, []);
```

### 2. Setting Timers or Intervals

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    console.log('Timer triggered');
  }, 1000);

  return () => {
    clearTimeout(timer); // cleanup
  };
}, []);
```

### 3. Accessing Local Storage

```jsx
useEffect(() => {
  const savedData = localStorage.getItem('key');
  if (savedData) {
    setData(JSON.parse(savedData));
  }
}, []);
```

### 4. Event Listeners

```jsx
useEffect(() => {
  function handleResize() {
    console.log('Window resized');
  }

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize); // cleanup
  };
}, []);
```


## Cleaning Up Side Effects

Some side effects need to be **cleaned up** to avoid memory leaks—especially those involving timers, subscriptions, or event listeners. React allows you to return a cleanup function from `useEffect`.

```jsx
useEffect(() => {
  const intervalId = setInterval(() => {
    console.log('Tick');
  }, 1000);

  return () => {
    clearInterval(intervalId); // cleanup
  };
}, []);
```

### Cleanup-Only Effects

Sometimes, you want to **run logic only when a component unmounts** — like dismissing a dialog or removing event listeners.

```jsx
useEffect(() => {
	return () => {
		console.log("Component unmounted!");
	};
}, []);
```

## Conditional Effects Based on Dependencies

Here’s a timer that starts/stops based on a flag:

```jsx
useEffect(() => {
	if (!isActive) return;

	const interval = setInterval(() => {
		setSeconds(prev => prev + 1);
	}, 1000);

	return () => clearInterval(interval);
}, [isActive]);
```

- The effect runs only when `isActive` changes.
    
- If `isActive` becomes `false`, the timer is cleared.
    
- Keeps the component efficient and bug-free.
    

## Example 1: Fetching Data with `useEffect`

Let’s now use `useEffect` to fetch posts **as soon as the component mounts**:

```jsx
import { useEffect, useState } from 'react';
import classes from './BlogPosts.module.css';

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const blogPosts = await response.json();
  return blogPosts;
}

function BlogPosts() {
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((fetchedPosts) => {
      setLoadedPosts(fetchedPosts);
    });
  }, []); // runs only once after initial render

  return (
    <ul className={classes.posts}>
      {loadedPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default BlogPosts;
```

- The `useEffect` callback runs **after the first render**.
    
- The empty dependency array `[]` ensures the effect runs **only once**, similar to `componentDidMount()` in class components.
    
- It avoids unnecessary HTTP requests and prevents infinite loops.    


## Example 2: Run Effect Once on Mount

Let’s create a dropdown that loads remote data **only once**, on mount.

```jsx
import { useState, useEffect } from "react";

function RemoteDropdown() {
	const [options, setOptions] = useState([]);

	useEffect(() => {
		fetch("//www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => data.results)
			.then(characters => characters.map(({ name }) => name))
			.then(setOptions);
	}, []); // Empty dependency array: run only once

	return (
		<select>
			{options.map(option => (
				<option key={option}>{option}</option>
			))}
		</select>
	);
}

function App() {
	return <RemoteDropdown />;
}

export default App;
```

- The effect only runs once — when the component mounts.
    
- There’s **no cleanup** because there’s **no ongoing process** to clean up.    

#### Potential Issue

If the component unmounts **before the fetch completes**, it may attempt to update state on an unmounted component. That should be handled with a cleanup function or abort controller.


## Example 3: Effect with Cleanup on Unmount

Let’s build a stopwatch. It should:

- Start ticking on mount.
    
- Stop ticking (clear interval) when unmounted.

```jsx
import { useState, useEffect } from "react";

function Stopwatch() {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(prev => prev + 1);
		}, 1000);

		// Cleanup function: clears interval on unmount
		return () => clearInterval(interval);
	}, []); // Empty array ensures this runs only once

	return <h1>Seconds: {seconds}</h1>;
}

function App() {
	const [showWatch, setShowWatch] = useState(false);

	return (
		<>
		  <button onClick={() => setShowWatch(prev => !prev)}>
			Toggle Watch
		  </button>
		  {showWatch && <Stopwatch />}
		</>
	);
}

export default App;
```

- The effect sets up the interval **once** on mount.
    
- The cleanup clears the interval **when the component is removed**.
    
- `setSeconds` is stable, so it doesn’t need to be in the dependency array.
    
## Summary

|Concept|Description|
|---|---|
|`useEffect()`|Runs code after render (like lifecycle hooks)|
|Cleanup|Optional; runs before next effect or on unmount|
|Dependency array|Controls when effect runs|
|Empty array `[]`|Run once on mount only|
|Side effects|Ideal for timers, fetches, subscriptions, DOM events|

---
