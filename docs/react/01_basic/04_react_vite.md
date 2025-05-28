
# Custom React Project Using Vite

You can quickly set up a modern React project using [Vite](https://vitejs.dev/), a fast build tool and development server.:

```bash
npm create vite@latest app-name
cd app-name
npm install        # Install all dependencies
npm run dev        # Start the development server

# Visit http://localhost:5173 to view your app
```


JavaScript allows you to build **interactive web user interfaces (UIs)** by reacting to user events and manipulating the page after it loads.

## Libraries and Frameworks

A **library** is a collection of pre-written code that helps you perform common tasks more efficiently. It allows you to write less code while achieving the same result, often with fewer bugs.

### React

> React is “The library for web and native user interfaces.”

React is a **JavaScript library** for building user interfaces in a **declarative** way, making your code more predictable and easier to debug.

## Imperative vs Declarative Code


### Vanilla JavaScript: Imperative Approach

```js
const buttonElement = document.querySelector('button');
const paragraphElement = document.querySelector('p');

function updateTextHandler() {
  paragraphElement.textContent = 'Text was Changed';
}

buttonElement.addEventListener('click', updateTextHandler);
```

This is **imperative programming** — telling the browser exactly **how** to do something step-by-step. You need to write all the Document Object Model (DOM) instructions that allow your code to interact with elements, add elements, manipulate elements, and so on.

### React: Declarative Approach

```jsx
import { useState } from 'react';

function App() {
  const [outputText, setOutputText] = useState('Initial text');

  function updateTextHandler() {
    setOutputText('Text was changed');
  }

  return (
    <>
		<button onClick={updateTextHandler}>
	      Click to change text
		</button>
		<p>{outputText}</p>
    </>
  );
}
```

> [!Note] 
> JSX (JavaScript + XML) allows writing HTML-like syntax in JavaScript. It’s preprocessed during the build step (transpilation).

React lets you describe **what** should happen, not **how** it happens. When the state changes, React automatically updates the UI.

## Handling Input and Validation in React

```jsx
import { useState } from 'react';

function validateEmail(enteredEmail) {
  return new Promise((resolve, reject) => {
    if (enteredEmail === 'test@test.com') {
      reject(new Error('Email exists already'));
    } else {
      resolve();
    }
  });
}

function validatePassword(enteredPassword) {
  if (enteredPassword.trim().length < 6) {
    throw new Error('Invalid Password - must be at least 6 characters');
  }
}

function App() {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [modalData, setModalData] = useState(null);

  async function validateInputHandler(inputType, event) {
    const enteredValue = event.target.value;
    let validateFn = validateEmail;

    if (inputType === 'password') {
      validateFn = validatePassword;
    }

    let isValid = true;

    try {
      await validateFn(enteredValue);
    } catch {
      isValid = false;
    }

    inputType === 'email'
      ? setEmailIsValid(isValid)
      : setPasswordIsValid(isValid);
  }

  function submitFormHandler(event) {
    event.preventDefault();

    const title = emailIsValid && passwordIsValid ? 'Success!' : 'An error occurred';
    const message = emailIsValid && passwordIsValid
      ? 'User created successfully'
      : 'Invalid input values';

    setModalData({ title, message });
  }

  function closeModal() {
    setModalData(null);
  }

  return (
    <>
      {modalData && <div className="backdrop" onClick={closeModal}></div>}
      {modalData && (
        <aside className="modal">
          <header><h2>{modalData.title}</h2></header>
          <section><p>{modalData.message}</p></section>
          <footer><button onClick={closeModal}>Okay</button></footer>
        </aside>
      )}

      <header><h1>Create a New Account</h1></header>
      <main>
        <form onSubmit={submitFormHandler}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onBlur={validateInputHandler.bind(null, 'email')}
            />
            {!emailIsValid && <p>This email is already taken!</p>}
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onBlur={validateInputHandler.bind(null, 'password')}
            />
            {!passwordIsValid && <p>Password must be at least 6 characters long</p>}
          </div>

          <button>Create User</button>
        </form>
      </main>

      <footer>
        <p>© Sujith Kumar</p>
      </footer>
    </>
  );
}

export default App;
```

> [!note]
> Notice how **no direct DOM manipulation** (like `document.querySelector`) is used. React handles it all under the hood.


## How React Manipulates the DOM

React’s core functionality is split into two packages:

- **`react`** — defines components, state, and hooks
    
- **`react-dom`** — acts as a bridge to the browser's DOM
    

> The `react-dom/client` package translates React’s **virtual DOM** updates into real **DOM operations**. Acts as a 'Translation Bridge' between code and DOM

The split exists because React can be used in environments beyond the browser (like React Native), the separation allows it to work across platforms.

---

## Full-Stack React and Frameworks

Modern frameworks like **Next.js** allow you to build **full-stack applications** using React on both the frontend and backend. However, these frameworks can introduce concepts unrelated to React itself.

> To learn React effectively, it’s best to start with a simple setup — like **React with Vite**.

**Vite** is an **open-source development and build tool** designed to create and run modern web development projects. It supports a variety of libraries and frameworks — **React** is just one of the many options you can choose.

- Vite includes a **built-in, preconfigured build process**.
    
- For React projects, it **automatically handles JSX transpilation** during development and build steps.
    
- It provides a **lightning-fast development server** that runs locally, allowing you to preview your app in real time as you build it.

## Creating a React Project with Vite

### Step-by-step:

```bash
npm create vite@latest my-react-project
```

1. Select **React**.
    
2. Choose **JavaScript** (or TypeScript).
    
3. Project creation does not install any required dependencies so:
```bash
cd my-react-project
npm install
npm run dev
```

---

## Project Structure (Vite + React)

Every new Vite-based React project includes:

- `src/`
    
    - `main.jsx`: Entry point of the application
        
    - `App.jsx`: Root React component
        
    - Styling files (`*.css`)
        
    - `assets/`: For images and media
        
- `public/`: For static assets (e.g., favicon)
    
- `index.html`: Main HTML file
    
- `package.json` and `package-lock.json`: Project dependencies
    
- `.gitignore`: Git configuration
    
- `node_modules/`: Installed third-party packages
    

> [!important]
> Vite enforces `.jsx` file extensions for files that use JSX syntax. so `App.jsx`, `main.jsx`

---