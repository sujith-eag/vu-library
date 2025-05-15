export const jsDomBasics = [
  {
    title: 'DOM Basics',
    items: [
      { label: 'DOM Introduction', link: '/java-script-dom/1-dom-basics/1.1-dom' },
      { label: 'Selectors', link: '/java-script-dom/1-dom-basics/1.4-selectors' },
      { label: 'Text and HTML Content', link: '/java-script-dom/1-dom-basics/1.3-text-html-content' },
      { label: 'Navigating the DOM', link: '/java-script-dom/1-dom-basics/1.2-navigating-dom' },
      { label: 'Attributes and Properties', link: '/java-script-dom/1-dom-basics/1.5-attributes-properties' }
    ]
  }
];

export const jsDomModification = [
  {
    title: 'DOM Modification',
    items: [
      { label: 'DOM Modification Basics', link: '/java-script-dom/2-dom-modification/2.1_dom_mod_basic' },
      { label: 'Modification Practice', link: '/java-script-dom/2-dom-modification/2.2_mod_practice' },
      { label: 'Class Attributes', link: '/java-script-dom/2-dom-modification/2.3_class_atributes' },
      { label: 'Styling', link: '/java-script-dom/2-dom-modification/2.4_styling' },
      { label: 'Size and Coordinates', link: '/java-script-dom/2-dom-modification/2.5_size_co-ordinates' },
      { label: 'Alert, Prompt, Confirm', link: '/java-script-dom/2-dom-modification/2.1.1_alert_prompt_confirm' }
    ]
  }
];


export const jsDomEvents = [
  {
    title: 'Event Fundamentals',
    items: [
      { label: 'Events Basics', link: '/java-script-dom/3-dom_events/3.1_events' },
      { label: 'Event Handlers', link: '/java-script-dom/3-dom_events/3.2_events_handler' },
      { label: 'Event Practices', link: '/java-script-dom/3-dom_events/3.3_events_practice' },
      { label: 'Related Events', link: '/java-script-dom/3-dom_events/3.4_events_related' }
    ]
  },
];

export const jsUiEvents = [
  {
    title: 'Mouse & Keyboard Events',
    items: [
      { label: 'Mouse Events', link: '/java-script-dom/4-ui_events/4.1_mouse_events' },
      { label: 'Moving Mouse', link: '/java-script-dom/4-ui_events/4.2_moving_mouse' },
      { label: 'Pointer Events', link: '/java-script-dom/4-ui_events/4.4_pointer_events' },
      { label: 'Drag and Drop', link: '/java-script-dom/4-ui_events/4.3_drag_drop' },
      { label: 'Keyboard Events', link: '/java-script-dom/4-ui_events/4.5_keyboard' }
    ]
  },
];



export const jsdomSection = [
  ...jsDomBasics,
  ...jsDomModification,
  ...jsDomEvents,
  ...jsUiEvents,
];
