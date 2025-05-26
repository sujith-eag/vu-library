export const reactIntro = [{
    title: "Introduction to React",
    items: [
      { label: "React Overview", link: "/react/intro/overview" },
      { label: "Why React", link: "/react/intro/why" },
      { label: "React Ecosystem", link: "/react/intro/ecosystem" }
    ]
}];

export const reactJSX = [{
    title: "JSX & Rendering",
    items: [
      { label: "JSX Basics", link: "/react/jsx/basics" },
      { label: "Embedding Expressions", link: "/react/jsx/expressions" },
      { label: "JSX Branching & Loops", link: "/react/jsx/branching-loops" }
    ]
}];

export const reactComponents = [{
    title: "Function Components",
    items: [
      { label: "Creating Function Components", link: "/react/function-components/creating" },
      { label: "Props in Function Components", link: "/react/function-components/props" },
      { label: "State with Hooks", link: "/react/function-components/state-hooks" },
      { label: "useEffect & Lifecycle", link: "/react/function-components/useeffect-lifecycle" }
    ]
},
{
    title: "Class Components",
    items: [
      { label: "Creating Class Components", link: "/react/class-components/creating" },
      { label: "Props & State", link: "/react/class-components/props-state" },
      { label: "Lifecycle Methods", link: "/react/class-components/lifecycle" },
      { label: "Children & Nesting", link: "/react/class-components/children-nesting" }
    ]
}];

export const reactEvents = [{
    title: "React Events",
    items: [
      { label: "Handling Events", link: "/react/events/handling" },
      { label: "Synthetic Events", link: "/react/events/synthetic" },
      { label: "Event Binding", link: "/react/events/binding" }
    ]
}];

export const reactForms = [{
    title: "React Forms",
    items: [
      { label: "Controlled vs Uncontrolled", link: "/react/forms/controlled-uncontrolled" },
      { label: "Handling Form Inputs", link: "/react/forms/inputs" },
      { label: "Validation", link: "/react/forms/validation" }
    ]
}];

export const reactRouting = [{
    title: "React Router",
    items: [
      { label: "Routing Basics", link: "/react/router/basics" },
      { label: "Route Parameters", link: "/react/router/params" },
      { label: "Nested Routes", link: "/react/router/nested" }
    ]
}];

export const reactStateManagement = [{
    title: "State Management",
    items: [
      { label: "Lifting State Up", link: "/react/state/lifting" },
      { label: "Context API", link: "/react/state/context" }
    ]
}];

export const reactAdvanced = [{
    title: "Advanced Topics",
    items: [
      { label: "Code Splitting", link: "/react/advanced/code-splitting" },
      { label: "Lazy Loading", link: "/react/advanced/lazy-loading" },
      { label: "Error Boundaries", link: "/react/advanced/error-boundaries" },
      { label: "Higher-Order Components", link: "/react/advanced/hoc" },
      { label: "Render Props", link: "/react/advanced/render-props" }
    ]
}];

export const reactSection = [
    ...reactIntro,
    ...reactJSX,
    ...reactComponents,
    ...reactEvents,
    // ...reactForms,
    // ...reactRouting,
    // ...reactStateManagement,
    // ...reactAdvanced
];
