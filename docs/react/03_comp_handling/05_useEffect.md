
# Handling Side Effects in React

In most real-world applications, you’ll need to perform tasks that go beyond rendering UI—such as sending HTTP requests, accessing browser storage, setting timers, or logging information. These tasks are called **side effects**.

React's component rendering system is declarative and predictable. This means that **any logic unrelated to rendering UI**, like data fetching or interacting with the browser environment, must be handled carefully to avoid bugs and performance issues.

---

## What Is a Side Effect?

A **side effect** is any code that affects something outside the scope of the current function or component. In React, this typically includes:

- Fetching data from an API
    
- Storing or retrieving data from `localStorage`
    
- Interacting with browser APIs (e.g., geolocation, scroll events)
    
- Setting timers with `setTimeout()` or `setInterval()`
    
- Logging to the console for debugging
    

If such operations are executed **directly inside** a component’s main function, they will run **every time the component re-renders**, which may lead to:

- Repeated API requests
    
- Performance bottlenecks
    
- Infinite re-render loops if state is updated within the operation
    

---

## Side Effects Without `useEffect`

Here’s an example where the HTTP request is **not** treated as a side effect. Instead, it's triggered by a user interaction (a button click):

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

In this example, the HTTP request is **not** a side effect in the React sense because it’s triggered by a user event of clicking a button and not during the component’s execution. This approach avoids re-render loops and is often fine for on-demand actions.

---

## Introducing `useEffect`

When you want to **run side effects automatically**—for example, fetching data when a component mounts—you should use the `useEffect` hook.

### Basic Syntax of `useEffect`

```jsx
useEffect(() => {
  // side effect logic
}, [dependencies]);
```

- The first argument is a function that runs your side effect.
    
- The second argument is a **dependency array** that tells React when to run the effect.

---

## Fetching Data with `useEffect`

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

---

## Understanding the Dependency Array

The second argument to `useEffect` controls **when** the effect runs:

- `[]` — Effect runs once after the first render.
    
- `[someValue]` — Effect runs whenever `someValue` changes.
    
- No dependency array — Effect runs after **every** render (not recommended in most cases).
    

> Always include in the dependency array any variable used inside the effect that comes from **outside** the effect.

---

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

---

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

---
