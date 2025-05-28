export const reactIntro = [{
    title: "Introduction to React",
    items: [
      { label: "React Overview", link: "/react/01_basic/01_react_intro" },
      { label: "Why React", link: "/react/01_basic/02_react_stack" },
      { label: "React Ecosystem", link: "/react/01_basic/03_react_app" },
      { label: "React Ecosystem", link: "/react/01_basic/04_react_vite" }
    ]
}];

export const reactJSX = [{
    title: "Components Basics",
    items: [
      { label: "JSX Basics", link: "/react/02_components/01_functional_component" },
      { label: "Embedding Expressions", link: "/react/02_components/02_props_in_Component" },
      { label: "JSX Branching & Loops", link: "/react/02_components/03_events_states" },
      { label: "JSX Branching & Loops", link: "/react/02_components/04_states" }
    ]
}];

export const reactComponents = [{
    title: "Components Handling",
    items: [
      { label: "Creating Function Components", link: "/react/03_comp_handling/01_condional_content" },
      { label: "Props in Function Components", link: "/react/03_comp_handling/02_list_data_output" },
      { label: "State with Hooks", link: "/react/03_comp_handling/03_styling_components" },
      { label: "useEffect & Lifecycle", link: "/react/03_comp_handling/04_refs" },
      { label: "useEffect & Lifecycle", link: "/react/03_comp_handling/05_useEffect" }
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
