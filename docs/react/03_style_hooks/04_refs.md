
# Refs in React

React encourages describing the **desired UI state**, letting React handle DOM updates. However, there are situations where you still need **direct access** to DOM elements—for example:

- Reading input values.
    
- Managing focus.
    
- Measuring element positions.    

React supports these cases through **Refs** and **Portals**.


## A World Without Refs

In a typical React form:

```jsx
function EmailForm() {
  const [enteredEmail, setEnteredEmail] = useState('');

  function handleUpdateEmail(event) {
    setEnteredEmail(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    // send enteredEmail to a server
  }

  return (
    <form className={classes.form} onSubmit={handleSubmitForm}>
      <label htmlFor="email">Your email</label>
      <input type="email" id="email" onChange={handleUpdateEmail} />
      <button>Save</button>
    </form>
  );
}
```

The logic mimics this:

```js
const enteredValue = document.getElementById('email').value;
```

This **direct DOM access** breaks React’s abstraction. React wouldn’t be aware of DOM changes, causing the UI and internal state to go out of sync.


## Using Refs

Refs give you a way to store and interact with DOM elements **without leaving React’s world**.

### Creating a Ref

```jsx
import { useRef } from 'react';

function EmailForm() {
  const emailRef = useRef(null);
  // other logic...
}
```

### Attaching a Ref to JSX

The generated Ref object, `emailRef` is initially set to null but can then be assigned to any JSX element. 

Assignment is done via a special prop (`ref` prop) that is automatically supported by every JSX element:
```jsx
<input ref={emailRef} type="email" id="email" />
```

Only after that initial component render cycle that the connection will be established and value stored in Ref will be the DOM object.

### Accessing the DOM Element

```jsx
function handleSubmit(event) {
  event.preventDefault();
  const enteredEmail = emailRef.current.value;
  // ...
}
```


>[!note]
>React stores the value assigned to the Ref object in a nested object, accessible via the `current` property.
>`emailRef.current` yields the DOM Object.


## Refs vs State

Use Refs to read values when needed—**without triggering re-renders** like state would:

```jsx
function EmailForm() {
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="email">Your email</label>
      <input ref={emailRef} type="email" id="email" />
      <button>Save</button>
    </form>
  );
}
```

Refs can replace state if you’re just accessing some value to read it when some function (a form submit handler function, for example) is executed.

### When to Use State Instead

If you want to **reset input fields**, not just read the values, use state:

```jsx
function EmailForm() {
  const [enteredEmail, setEnteredEmail] = useState('');

  function handleEmailUpdate(event) {
    setEnteredEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // do something with enteredEmail
    setEnteredEmail('');
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="email">Your email</label>
      <input
        type="email"
        id="email"
        onChange={handleEmailUpdate}
        value={enteredEmail}
      />
      <button>Save</button>
    </form>
  );
}
```

> [!important]
> `emailRef.current.value = ''` is possible, but discouraged. Let React manage the DOM.


## Refs for Non-DOM Values

Refs aren’t limited to DOM elements. They can store **any value** which can can persist across renders:

```jsx
const passwordRetries = useRef(0);

// Later...
passwordRetries.current = 1;
console.log(passwordRetries.current); // 1
```

>[!important]
>Changing Ref values does not trigger component functions to be executed again—state, on the other hand, does


## Refs in Custom Components

You can use Refs to call functions or access data inside **child components**.

Refs can be used as a communication device between two components, just as they were used as a communication device with a DOM element.

### Child Component Example (`Preferences`)

```jsx
function Preferences(props){
	const { ref } = props // extracting ref prop
	
	const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
	const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);
	
	function handleChangeNewProdPref () {
		setWantsNewProdInfo((prevPref) => !prevPref);
	}
	
	function handleChangeUpdateProdPref() {
		setWantsProdUpdateInfo((prevPref) => !prevPref);
	}

	function reset() {
		setWantsNewProdInfo(false);
		setWantsProdUpdateInfo(false);
	}
	
	ref.current.reset = reset;
	
	ref.current.selectedPreferences = {
		newProductInfo: wantsNewProdInfo,
		productUpdateInfo: wantsProdUpdateInfo,
	};
	
	return (
		<div className={classes.preferences}>
		  <label>
			<input
			  type="checkbox"
			  id="pref-new"
			  checked={wantsNewProdInfo}
			  onChange={handleChangeNewProdPref}
			/>
			<span>New Products</span>
		  </label>
			
		  <label>
			<input
				type="checkbox"
				id="pref-updates"
				checked={wantsProdUpdateInfo}
				onChange={handleChangeUpdateProdPref}
			/>
			<span>Product Updates</span>
		</label>
	</div>
	);
}
```

#### Concise Version

```jsx
function Preferences(props) {
  const { ref } = props; // extracting ref prop

  const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
  const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);

  function reset() {
    setWantsNewProdInfo(false);
    setWantsProdUpdateInfo(false);
  }

  ref.current = {
    reset,
    selectedPreferences: {
      newProductInfo: wantsNewProdInfo,
      productUpdateInfo: wantsProdUpdateInfo,
    },
  };

  return (
    <div className={classes.preferences}>
      <label>
        <input
          type="checkbox"
          checked={wantsNewProdInfo}
          onChange={() => setWantsNewProdInfo((prev) => !prev)}
        />
        <span>New Products</span>
      </label>

      <label>
        <input
          type="checkbox"
          checked={wantsProdUpdateInfo}
          onChange={() => setWantsProdUpdateInfo((prev) => !prev)}
        />
        <span>Product Updates</span>
      </label>
    </div>
  );
}
```

### Parent Component Example (`Form`)

```jsx
function Form() {
  const preferencesRef = useRef({});

  function handleSubmit(event) {
    event.preventDefault();
    console.log(preferencesRef.current.selectedPreferences);
    preferencesRef.current.reset();
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.formControl}>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" />
      </div>
      <Preferences ref={preferencesRef} />
      <button>Submit</button>
    </form>
  );
}
```

By using Refs like this, a parent component (Form) is able to interact with some child component (Preferences) in an imperative way


## Controlled vs Uncontrolled Components

- **Uncontrolled Component**: DOM manages state (e.g., Refs).
    
- **Controlled Component**: React manages state (via props/state).
    

### Controlled Example

**Preferences (Child):**

```jsx
function Preferences({ newProdInfo, prodUpdateInfo, onUpdateInfo }) {
  return (
    <div className={classes.preferences}>
      <label>
        <input
          type="checkbox"
          id="pref-new"
          checked={newProdInfo}
          onChange={onUpdateInfo.bind(null, 'pref-new')}
        />
        <span>New Products</span>
      </label>

      <label>
        <input
          type="checkbox"
          id="pref-updates"
          checked={prodUpdateInfo}
          onChange={onUpdateInfo.bind(null, 'pref-updates')}
        />
        <span>Product Updates</span>
      </label>
    </div>
  );
}
```

`bind()` is used on the `onUpdateInfo` prop (which will receive a function as a value) to pre-configure the function for future execution.

**Form (Parent):**

```jsx
function Form() {
  const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
  const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);

  function handleUpdateProdInfo(selection) {
    if (selection === 'pref-new') {
      setWantsNewProdInfo((prev) => !prev);
    } else if (selection === 'pref-updates') {
      setWantsProdUpdateInfo((prev) => !prev);
    }
  }

  function reset() {
    setWantsNewProdInfo(false);
    setWantsProdUpdateInfo(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    reset();
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.formControl}>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" />
      </div>
      <Preferences
        newProdInfo={wantsNewProdInfo}
        prodUpdateInfo={wantsProdUpdateInfo}
        onUpdateInfo={handleUpdateProdInfo}
      />
      <button>Submit</button>
    </form>
  );
}
```


The Form component now controls the Preferences component.

---
