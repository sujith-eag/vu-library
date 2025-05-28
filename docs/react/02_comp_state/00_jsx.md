
# Introduction to JSX

JSX (JavaScript XML) is a syntax extension for JavaScript that makes it easier to write and visualize React elements.

```jsx
const link = <a href="//react.dev">React</a>;
```

- JSX is not a string, not a template literal, and not HTML.
    
- It compiles to JavaScript objects via tools like Babel.
    
- It is purely for **developer experience**—not performance.
    

---

JSX is syntactic sugar for `React.createElement()` and:

- Is easier to read and write
    
- Provides better error messages
    
- Is faster to type
    
- Reduces syntax errors
    


## JSX vs. `React.createElement()`

**Without JSX:**

```js
const element = React.createElement(
  'main',
  null,
  React.createElement(Title, null, 'Welcome'),
  React.createElement(Carousel, { images: 6 }),
  React.createElement('a', { href: '/blog' }, 'Go to the blog')
);
```

**With JSX:**

```jsx
const element = (
  <main>
    <Title>Welcome</Title>
    <Carousel images={6} />
    <a href="/blog">Go to the blog</a>
  </main>
);
```


## JSX Syntax & Examples

### Element Creation

```jsx
<h1 /> // Same as React.createElement('h1')
```

```jsx
React.createElement(
	'h1',
	null,
	'Welcome',
	);

<h1>Welcome</h1> // Adds Children
```

```jsx
React.createElement(
	Title,
	null,
	'Welcome',
	);

<Title>Welcome</Title> // Custom components
```

```jsx
React.createElement(
	Title,
	{ size: 6 }
	'Welcome',
	);
	
<Title size="6">
  Welcome to <strong>Narnia</strong>
</Title>
```


## JSX in Functional Components

**Before (class):**

```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return <h1>Hello <em>World</em>!</h1>;
  }
}
```

**After (functional):**

```jsx
import React from 'react';

function App() {
  return <h1>Hello <em>World</em>!</h1>;
}

export default App;
```

You can store JSX in variables:

```jsx
const title = <h1>Hello <em>World</em>!</h1>;

return title;
```


## Multiline JSX

Wrap JSX in parentheses when returning multiple lines:

```jsx
return (
  <main>
    <h1>Hello world</h1>
  </main>
);
```

Or inline:

```jsx
return <main><h1>Hello world</h1></main>;
```


## Outputting Variables in JSX

```jsx
function DateTimeNow() {
  const dateTime = new Date().toLocaleString();
  return <span>Current date and time is {dateTime}.</span>;
}
```

You can also use JSX variables:

```jsx
const now = <date>{new Date().toLocaleTimeString()}</date>;
const message = <p>Today is {now}</p>;
```


## Calling Component Functions

```jsx
function ButtonList({ disabled }) {
  const getButton = (text) => (
    <button disabled={disabled}>{text}</button>
  );

  return (
    <aside>
      {getButton('Up')}
      {getButton('Down')}
    </aside>
  );
}
```

You can also use JavaScript expressions inside `{}`:

```jsx
<p>Today is {new Date().toLocaleTimeString()}.</p>
```


## Working with Props

HTML attributes and custom props look the same:

```jsx
<a href="//react.dev">Let's do React!</a>

// on custom Link component
<Link url="//react.dev" framework="React" />
```


## Passing Props Dynamically

```jsx
function ProfileLink({ url, label }) {
  return (
    <a href={url} title={label} target="_blank">Profile</a>
  );
}

<ProfileLink url="/users/johnny" label="Profile for Johnny" />
```

**Spread operator for props:**

```jsx
<Post {...post} />
```

**Manual prop passing:**

```jsx
<Post id={post.id} title={post.title} content={post.content} />
```


## Special Prop: `children`

```jsx
function Link({ url, children }) {
  return (
    <p>
      <a href={url}>{children}</a>
    </p>
  );
}

function App() {
  return (
    <>
      <Link url="//react.dev"><strong>React</strong></Link>
      <Link url="//vuejs.org">Vue</Link>
      <Link url="//angular.io">Angular</Link>
    </>
  );
}

export default App;
```

With `children`:

```jsx
<Link url="//react.dev">
  <strong>React</strong>
</Link>
```

With content prop:

```jsx
<Link url="//react.dev" content={<strong>React</strong>} />
```


## JSX Comments

#### Outside JSX:

```jsx
// Standard comment
const title = <h1>Hello</h1>;
```

#### Inside JSX:

```jsx
<div>
	{/* JSX comment */}
	<p>Content</p>
</div>
```


## Gotchas in JSX

- Self-closing tags are required: `<img />`
    
- Use `className` instead of `class`
    
- Multi-word props: use camelCase (`onClick`, `ariaLabel`)
    
- `style` prop must be an object: `{ color: 'blue' }`
    
- Boolean attributes: use `{true}` or simply include the prop
    
- Whitespace is mostly collapsed
    
- `data-*` attributes are supported
    

## Transpiling JSX

JSX must be compiled to standard JavaScript using tools such as:

- [Babel](https://babeljs.io/)
    
- [SWC](https://swc.rs/)
    
- [Sucrase](https://sucrase.io/)
    
- [esbuild](https://esbuild.github.io/)
    

These tools convert JSX syntax to `React.createElement()` calls under the hood.

---

