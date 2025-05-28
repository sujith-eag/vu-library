
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

---

# State in React

**State** allows React components to **hold and update data**, and automatically re-render the UI based on changes.

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

### Allowed State Value Types

You can store:

- Primitive values (`string`, `number`, `boolean`)
    
- Complex values (`objects`, `arrays`)
    
- Change value types at runtime

## Managing Multiple State Values


### 1. Using Multiple State Slices

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

---

### 2. Using a Merged State Object

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

---
