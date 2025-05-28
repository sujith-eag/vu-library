
# Styling React Apps

In React, you can apply styles and classes to JSX elements just like you would in plain HTML. All standard CSS syntax and selectors are fully supported.

### Global CSS Import

In Vite projects, global styles are typically imported in `main.jsx`:

```js
import './index.css';
```

This CSS gets injected into `index.html` during the build process, allowing global styles to be applied across the entire app.


## Inline Styles

You can apply inline styles via the `style` prop using a **JavaScript object**, not a string.

>[!note]
>The Double Curly braces needed for Inline style is escaped to avoid error in site compilation

#### JSX vs. HTML Inline Styles

```jsx
function TodoItem() {
	return <li 
		style={\{ color: 'red', fontSize: '18px' }\}
		>Learn React!</li>;
}
```

```html
<!-- Plain HTML -->
<li style="color: red; font-size: 18px">Learn React!</li>
```

- Use **camelCase** property names in JSX: `fontSize`, not `font-size`.
    
- The `style` prop accepts a **JavaScript object**, so double curly braces `{\{...}\}` are required. One for non-string values.

## CSS Classes in JSX

Use the `className` attribute instead of `class` (which is a reserved keyword in JavaScript):

```jsx
<ul>
	<li className="goal-item">Learn React!</li>
	<li className="goal-item">Master React!</li>
</ul>
```

```css
.goal-item {
	color: red;
	font-size: 18px;
}
```

## Dynamic Styling

### Using State with Inline Styles

```jsx
function ColoredText() {
	const [enteredColor, setEnteredColor] = useState('');

	function handleTextColor(event) {
		setEnteredColor(event.target.value);
	}

	return (
		<>
		  <input type="text" onChange={handleTextColor} />
			<p style={\{ color: enteredColor }\}>
		      This text is dynamically colored
			</p>
		</>
	);
}
```

### Switching CSS Classes via State

```jsx
function TodoPriority() {
	const [chosenPriority, setChosenPriority] = useState('low-prio');

	function handleChoosePriority(event) {
		setChosenPriority(event.target.value);
	}

	return (
		<>
			<p className={chosenPriority}>Chosen Priority: {chosenPriority}</p>
			<select onChange={handleChoosePriority}>
				<option value="low-prio">Low</option>
				<option value="high-prio">High</option>
			</select>
		</>
	);
}
```

```css
.low-prio {
	background-color: blue;
	color: white;
}

.high-prio {
	background-color: red;
	color: white;
}
```

## Conditional Styling

### Via CSS Classes

```jsx
function TextInput({ isValid, isRecommended, ...props }) {
	let cssClass = 'input-default';

	if (isRecommended) {
		cssClass = 'input-recommended';
	}
	if (!isValid) {
		cssClass = 'input-invalid';
	}

	return <input className={cssClass} {...props} />;
}
```

This wrapper component is to set some default styles for the `<input>` element. It provides a pre-styled input element that can be used anywhere in the app.

### Via Inline Styles

```jsx
function TextInput({ isValid, isRecommended, ...props }) {
	let bgColor = 'black';

	if (isRecommended) bgColor = 'blue';
	if (!isValid) bgColor = 'red';

	return <input 
		style={\{ backgroundColor: bgColor }\} {...props} />;
}
```


## Combining Multiple CSS Classes

```jsx
function ExplanationText({ children, isImportant }) {
	let cssClasses = 'text-default text-expl';

	if (isImportant) {
		cssClasses += ' text-important'; 
		// or use template literals or join
	}

	return <p className={cssClasses}>{children}</p>;
}
```

Alternative methods:

```js
cssClasses = `${cssClasses} text-important`;

cssClasses = [cssClasses, 'text-important'].join(' ');
```


## Merging Inline Style Objects

```jsx
function ExplanationText({ children, isImportant }) {
	let style = { color: 'black' };

	if (isImportant) {
		style = { ...style, backgroundColor: 'red' };
	}

	return <p style={style}>{children}</p>;
}
```


## Components with Customizable Styles

### Using `className` Prop

```jsx
function Button({ children, config, className }) {
	return (
		<button 
			{...config} 
			className={`btn ${className}`}
			>{children}
		</button>
	);
}
```

Usage:

```jsx
<Button 
	config={\{ onClick: doSomething }\} 
	className="btn-alert"
	>Click me!
</Button>
```

The same component can be used in different places on a page with different configurations to yield a different output.

### Overriding the Default Class

```jsx
function Button({ children, config, className }) {
	const cssClasses = className || 'btn';

	return (
		<button {...config} className={cssClasses}>
			{children}
		</button>
	);
}
```

## Customization with Props

```jsx
function App() {
	return (
		<>
			<TextBox 
				mode="info"
				>Visit React.dev for API References
			</TextBox>
			<TextBox 
				mode="alert"
				>Loading failed
			</TextBox>
		</>
	);
}
```

```jsx
function TextBox({ children, mode }) {
	let cssClassName;

	if (mode === 'alert') {
		cssClassName = 'box-alert';
	} else if (mode === 'info') {
		cssClassName = 'box-info';
	}

	return <p className={cssClassName}>{children}</p>;
}
```

The styling is not set with class name but with help of specific prop.

---

## Global CSS Conflicts
  
CSS styles are global by default. This can lead to **style conflicts** if different components reuse the same class names because they are not scoped to specific component.

### Solutions to CSS Scoping

Popular solutions include:

- **CSS Modules** (built-in with Vite)
    
- **Styled Components** (3rd-party library)
    
- **Tailwind CSS** (utility-first CSS framework)

---

### Scoped Styles with CSS Modules

- Save `css` file as: `ComponentName.module.css`
- Import it like:

```css
/* TextBox.module.css */
.alert {
	padding: 1rem;
	background-color: #f9bcb5;
	color: #480c0c;
}
.info {
	padding: 1rem;
	background-color: #d6aafa;
	color: #410474;
}
```

```jsx
import classes from './TextBox.module.css';

function TextBox({ children, mode }) {
	let cssClasses;

	if (mode === 'alert') {
		cssClasses = classes.alert;
	} else if (mode === 'info') {
		cssClasses = classes.info;
	}

	return <p className={cssClasses}>{children}</p>;
}
```

> [!Important]
> CSS Modules **transform** class names to unique names automatically to avoid conflicts. 
> Only **class selectors** are supported since modules rely on classes not tags like `input()`, `someID()`

The final class name code will not match the set class names
```jsx

<p class='_info_1mtzh_8'>CSS Module Can be Useful</p>
```

You can write selectors that combine classes with other selectors, such as `input.invalid {}`


## Styled-Components Library

A **CSS-in-JS** solution that co-locates styles with components.

```bash
npm install styled-components
```

```jsx
import styled from 'styled-components';

const Button = styled.button`
	background-color: #370566;
	color: white;
	padding: 1rem;
	border-radius: 4px;
	border: none;
`;

function App() {
	return <Button>Click me!</Button>;
}
```

## Tailwind CSS

A **utility-first** CSS framework for rapid UI development.

```jsx
function App() {
	return (
		<main className="bg-gray-200 text-gray-900 h-screen p-12 text-center">
			<h1 className="font-bold text-4xl">Tailwind CSS is amazing!</h1>
			<p className="text-gray-600">
				Great for devs who prefer not to write custom CSS.
			</p>
		</main>
	);
}
```

**Advantages:**

- No custom CSS files needed
    
- Utility classes = composable styles
    
- Faster development because of CSS in JSX
    
- Tailwind documentation: [tailwindcss.com/docs/utility-first](https://tailwindcss.com/docs/utility-first)
    

---

### Other Styling Libraries

- **Animate.css** – for CSS-based animations
    
- **Bootstrap** – a popular CSS component library
    
- **Framer Motion** – for advanced animations in React
    

---
