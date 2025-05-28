# React Stack

### Fitting React into a Website

The React core library is a UI library first and foremost. On its own, it’s comparable to other UI libraries, but not directly to full-fledged web application frameworks such as Angular.

It’s very difficult—and nearly impossible—to create a hybrid single-page application (SPA) where parts are rendered by Angular or Vue and others by React.

However, React can be used for just part of a UI. For example, if your website includes smaller interactive elements (widgets), you can replace them individually with small React applications without needing to overhaul your entire site.

React is backend-agnostic. You don’t need a JavaScript-based backend (like Node or Deno) to use React on the frontend.

---

Another common use case for React is in static site generators. In these setups, React is used to define the site locally, but when deployed, the site is rendered down to plain HTML. JavaScript adds only minimal interactivity. This approach was originally most common for smaller websites such as blogs that don’t change frequently.

---

To summarize, React is typically used in the following ways:

- As a UI library in an SPA (e.g., React + React Router + Redux)
    
- As a drop-in widget in any frontend stack (e.g., an autocomplete component)
    
- As a static website rendered at deployment for infrequently updated content
    
- As a UI library in mobile apps (React Native) or desktop apps (Electron)
    

---

### Single-Page Applications and React

A website is considered an SPA if most of its functionality is available in the browser, not just static information.

Examples of SPAs include Facebook, Google Docs, and Gmail.

SPAs use multiple technologies, and React is just one part of the stack. React alone isn’t sufficient; it must be combined with other tools to be usable as a full application.

SPAs are often referred to as **thick clients** because the browser handles more application logic, rendering, validation, and UI updates.

In contrast, **thin clients** rely on the server to render pages. The browser just displays pre-rendered content.

SPA workflow:

1. The user types a URL into the browser.
    
2. The browser sends a request to the server.
    
3. The server responds with static assets (HTML, CSS, JavaScript). The HTML often contains only the structure, sometimes with a "Loading..." message.
    
4. The browser loads JavaScript, which makes additional requests for application data.
    
5. The data (in formats like JSON or XML) is returned.
    
6. React (or another SPA library) renders the UI based on this data.
    
7. The browser displays the final content.


> [!hydaration]
> Hydration: The process where the browser injects live data into pre-rendered HTML templates.

In an SPA, the browser performs most of the rendering. Only the data is transferred between the server and client. In a traditional (non-SPA) website, all rendering happens on the server.

React fits this SPA model by:

- Rendering UI based on incoming data
    
- Handling user input and updating the view when the data changes
    

---

### The React Stack

React is minimal by design, focusing solely on rendering reactive UIs.

While React can be used as a small part of a larger stack, many developers opt for a **React-centric stack**, which typically includes:

- **Data libraries and state managers**:
    
    - TanStack Query: [tanstack.com/query](https://tanstack.com/query/latest)
        
    - Redux: [redux.js.org](http://redux.js.org)
        
    - Recoil: [recoiljs.org](https://recoiljs.org/)
        
    - XState: [xstate.js.org](https://xstate.js.org/)
        
    - Apollo GraphQL: [apollographql.com](https://www.apollographql.com/)
        
- **Routing libraries**:
    
    - React Router: [react-router](https://github.com/remix-run/react-router)
        
- **Styling libraries**:
    
    - Component libraries: [Material UI](https://mui.com/), [React Bootstrap](https://react-bootstrap.github.io/)
        
    - CSS-in-JS solutions: [Styled Components](https://styled-components.com/), [Vanilla Extract](https://vanilla-extract.style/)
        
    - Utility-first CSS: [Tailwind CSS](https://tailwindcss.com/)
        

---

React’s composable components make code reuse simple. Many reusable components are available as npm packages.

A curated list of React components and tools is available here:  
[https://github.com/brillout/awesome-react-components](https://github.com/brillout/awesome-react-components)

This list includes everything from form components and UI frameworks to utilities and testing tools.

---

### Full-Stack React Frameworks

Some frameworks build on top of React to offer full server-side rendering, routing, data fetching, and deployment pipelines:

- **Gatsby** – Popular for blogs and static websites.
    
- **Next.js** – The most widely used React framework, suitable for both static and dynamic web applications.
    
- **Remix** – A newer framework gaining popularity for high-performance dynamic applications.
    

---
