
# React App

This section covers fundamental React concepts such as elements, components, and properties.

In a nutshell, **elements** are instances of **components** that can be passed **properties**.


## Creating a New React App

```bash
$ npx create-react-app name-of-app
```

>[!note]
> `npx` is a package runner that comes with npm. It allows you to run commands using packages that are either local to the project or downloaded temporarily as needed.

This command:

- Creates a new folder named `name-of-app`
    
- Initializes a Git repository
    
- Downloads the CRA (Create React App) package
    
- Installs all necessary dependencies
    

Process breakdown:

```
npx create-react-app name-of-app

    → npx requests create-react-app 
    → create-react-app is installed (if not present)
    → folder with given name is created
    → dependencies are requested
    → dependencies are installed
```

Start the app:

```bash
cd name-of-app
npm start
```

Runtime process:

```
→ Compiler builds from source files
→ Web server watches file system
→ Local app is launched in browser

If source file is updated:
→ Compiler rebuilds from updated source
→ Web server detects the change
→ App in browser auto-updates
```


## React Project Commands

Create React App comes with four main commands:

- **start** – Launches a local development server and compiles the project continuously.
    
- **build** – Compiles the app into a production-ready package in the `/build` directory.
    
- **test** – Runs unit tests.
    
- **eject** – Makes the full configuration files visible and editable.
    

### Details

- `start`: Uses the **development version** of React, which includes detailed warnings and debugging support. It’s not optimized for production and has a larger file size.
    
- `build`: Uses the **production version** of React, which is smaller and optimized. Outputs are placed in the `/build` folder.
    
- `test`: Runs all test files (e.g., `.test.js`) in the project.
    
- `eject`: Grants full control over configuration but is irreversible. Use with caution.
    

---

## File Structure

```
/
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   └── App.js
└── package.json
```

### Explanation

- **public/**: Files served directly (e.g., `index.html`, favicon, images, etc.)
    
- **src/**: Bundled JavaScript and related assets (CSS, JSON, icons). `index.js` is the entry point. `App.js` commonly contains the main component.
    
- **package.json**: Project configuration file for dependencies, scripts, and metadata.
    

---

## Templates

You can specify a template with CRA:

```bash
$ npx create-react-app name-of-app --template name-of-template
```

- `--template minimal`: A barebones version without extras.
    
- `--template typescript`: Starts a project with TypeScript.
    
- `--template minimal-typescript`: Minimal TypeScript setup.
    
- `--template redux-typescript`: Includes Redux and TypeScript.
    
- `--template rb`: A React boilerplate with Redux-Saga, styled-components, ESLint, husky, etc.
    

> **Note**  
> The CRA template system is decentralized. Anyone can publish a custom template on npm for use in new apps.


## Pros and Cons of CRA

### Pros

- **Simplicity**: Out-of-the-box support for JSX, bundling, testing, and hot reloading.
    
- **Upgradability**: Easily update via `npm install --exact react-scripts@VERSION`.
    
- **Community**: A rich ecosystem of templates and support.
    
- **Customization**: Easy to add external libraries like Google Maps or AWS SDKs.
    

### Cons

- **Understanding**: You don’t learn what's under the hood unless you eject or build from scratch.
    
- **Control**: Limited to CRA’s chosen tools (e.g., Webpack, Babel). You can’t easily switch to alternatives like Vite, SWC, esbuild, etc.
    
- **Integration**: CRA is not optimized for integration into server-side setups or frameworks like Next.js or Remix.



## JSX Is Optional

Although JSX is widely used in React, browsers do not understand it directly. Understanding how to use React without JSX is beneficial.

### Example (without JSX):

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First React Application</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</head>
<body>
  <div id="root"></div>

  <script type="text/javascript">
    const reactElement = React.createElement(
      'h1',
      null,
      'Hello world!'
    );

    const domNode = document.getElementById('root');
    const root = ReactDOM.createRoot(domNode);

    root.render(reactElement);
  </script>
</body>
</html>
```

### Breakdown

- **React.createElement** creates a React element.
    
    ```js
    React.createElement('h1', null, 'Hello world!');
    ```
    
- **document.getElementById('root')** finds the mount point.
    
- **ReactDOM.createRoot(domNode)** connects React to that DOM node.
    
- **root.render(element)** mounts the React component to the DOM.
    

### Concise Version

```js
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(React.createElement('h1', null, 'Hello world!'));
```

---

## Running a Local Development Server

You must serve your HTML using a local web server due to browser restrictions on loading remote scripts from local files.

Run a server in your folder using:

```bash
$ npx serve
```

> [!Note]  
> Browsers block local file access to remote domains (like unpkg.com) due to cross-origin restrictions.

### Alternatives:

```bash
$ npx http-server -p 3000
$ python -m http.server 3000
$ php -S localhost:3000
```

---
