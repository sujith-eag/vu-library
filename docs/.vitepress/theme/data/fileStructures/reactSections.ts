export const reactIntro = [{
    title: "React Introduction",
    items: [
      { label: "React Overview", link: "/react/01_basic/01_react_intro" },
      { label: "React Stack", link: "/react/01_basic/02_react_stack" },
      { label: "React App", link: "/react/01_basic/03_react_app" },
      { label: "React Vite App", link: "/react/01_basic/04_react_vite" }
    ]
}];

export const reactJSX = [{
    title: "Component & useState",
    items: [
      { label: "JSX Basics", link: "/react/02_comp_state/00_jsx" },
      { label: "Function Component", link: "/react/02_comp_state/01_functional" },
      { label: "Component Props", link: "/react/02_comp_state/02_props" },
      { label: "State Basics", link: "/react/02_comp_state/03_useState" },
      { label: "Conditional Rendering", link: "/react/02_comp_state/04_branching" },
      { label: "State Management", link: "/react/02_comp_state/05_state_management" }
    ]
}];

export const reactComponents = [{
    title: "Styling, useRef & useEffect",
    items: [
      { label: "Outputting List", link: "/react/03_style_hooks/02_list_data" },
      { label: "Styling Components", link: "/react/03_style_hooks/03_styling" },
      { label: "useRef Hook", link: "/react/03_style_hooks/04_refs" },
      { label: "useEffect Hook", link: "/react/03_style_hooks/05_useEffect" },
    ]
},
// {
//     title: "Class Components",
//     items: [
//       { label: "Creating Class Components", link: "/react/class-components/creating" },
//       { label: "Props & State", link: "/react/class-components/props-state" },
//       { label: "Lifecycle Methods", link: "/react/class-components/lifecycle" },
//       { label: "Children & Nesting", link: "/react/class-components/children-nesting" }
//     ]
// }
];

export const reactSection = [
    ...reactIntro,
    ...reactJSX,
    ...reactComponents
];
