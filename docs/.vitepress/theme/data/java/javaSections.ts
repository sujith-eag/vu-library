export const javaBasics = [
    {
      title: 'Java Basics',
      items: [
        { label: 'Primitive Data Types', link: '/java/java_intro' },
        { label: 'Lists', link: '/java/java_core/java_format' },
        { label: 'Dictionaries', link: '/python/1data-types/complex-types/7dictionary/' },
        { label: 'Tuple & Set', link: '/python/1data-types/complex-types/5tuple_set/' },
        { label: 'Control Flow', link: '/python/4control_statements/' },
        { label: 'Functions', link: '/python/5functions/' },
      ]
    }
  ]

export const javaDom = [
    {
      title: 'JavaScript DOM',
      items: [
        { label: 'DOM Basics', link: '/JavaScript-DOM/01-DOM-Basics/' },
        { label: 'DOM Modification', link: '/JavaScript-DOM/02-DOM-modification/' },
        { label: 'DOM Events', link: '/JavaScript-DOM/03-DOM-events/' },
      ]
    }
  ]
  
export const javaSections = [...javaBasics, ...javaDom]
