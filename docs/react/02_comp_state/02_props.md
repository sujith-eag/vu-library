
# Props in Components

React components can be configured just like regular HTML elements using a React concept called **props**.

Some components are **reusable** and therefore need props, while others are **unique** and might not require them.

## Two Ways of Using Props in Components

1. **Passing props to components**
    
2. **Consuming props in a component**

### Passing Props to Components

When working with HTML, you pass content and configuration either between element tags or via attributes. React components work similarly.

Props are passed:

- As **attributes** to a component
    
- As **child content** between component tags
    
- Or a **mix of both**    

```jsx
<Product id="abc1" price="12.99" />

<FancyLink target="https://some-website.com">Click me</FancyLink>
```


### Consuming Props in a Component

To **access prop values** inside a component, use the `props` parameter—passed automatically to every functional component.

```jsx
<ul>
  <GoalItem id="g1" title="Finish Book" />
  <GoalItem id="g2" title="Learn React" />
</ul>
```

```jsx
function GoalItem(props) {
  return <li>{props.title} (ID: {props.id})</li>;
}
```

- You can name the parameter anything, but `props` is the convention.
    
- `props` is always an **object**, where each property corresponds to the attributes passed into the component.
    

## The Special `children` Prop

React automatically includes a `children` prop that contains **content between opening and closing tags**.

```jsx
<ul>
  <GoalItem id="g1">Finish Book</GoalItem>
  <GoalItem id="g2">Learn React</GoalItem>
</ul>
```

```jsx
function GoalItem(props) {
  return <li>{props.children} (ID: {props.id})</li>;
}
```

Use `children` when your component should **wrap or render nested content**, similar to HTML behavior.

## Dealing with Multiple Props

You can pass many props individually or group them using objects or arrays.

### Individual Props

```jsx
<Product title="A Book" price={29.99} id="p1" />
```

### Grouped Props

```jsx
const productData = {
  title: "A Book",
  price: 29.99,
  id: "p1",
};

<Product data={productData} />
```

---

### Using Destructuring for Cleaner Code

Instead of accessing values via `props.title`, use **object destructuring**:

```js
const user = { name: "Max", age: 29 };

const { name, age } = user;
console.log(name); // "Max"
```

### In Components

This syntax can also be used to extract all prop values and assign them to equally named variables directly at the start of component function:
```jsx
function Product({ title, price, id }) {
  // title, price, and id are now directly accessible
}
```

## Spreading Props

To pass all props to a child element without listing them individually, use the **spread operator** (`...`):

```jsx
function Link({ children, config }) {
  return (
    <a {...config} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
```

```js
const config = { href: "https://some-site.com", download: true };
```

Using the spread operator:

```jsx
<a {...config}>  // becomes:
<a href="https://some-site.com" download={true}>
```

---

### Using the Rest Operator

You can also destructure certain props and gather the rest in rest operator:

```jsx
function Link({ children, ...props }) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

// Usage
<Link href="https://google.com">Can you Google that for me?</Link>
```

This makes components more flexible and reusable without predefining every prop.


## Prop Chains / Prop Drilling

**Prop drilling** occurs when props are passed through multiple layers of components just to reach a deeply nested child.

```jsx
function NavItem(props) {
  return <div><AnimatedLink target={props.target} text="Some text" /></div>;
}

function AnimatedLink(props) {
  return <a href={props.target}>{props.text}</a>;
}
```

- `NavItem` does not need `target` directly, but must receive and forward it to `AnimatedLink`.
    
- This leads to **prop chains**, which can clutter components and reduce maintainability.
    

---
