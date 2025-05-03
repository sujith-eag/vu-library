// docs/.vitepress/sidebar/java.js

export function javaSidebar() {
    return [
      {
        text: 'Java',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/java/java_intro' },
          { text: 'Java Basics', link: '/java/java_next' }
        ]
      },
      {
        text: 'Java Core',
        collapsed: true,
        items: [
          { text: 'Intro to Core', link: '/java/java_core/java_format' },
          { text: 'OOP Concepts', link: '/java/java_core/oop' },
          { text: 'Collections', link: '/java/java_core/collections' }
        ]
      },
      {
        text: 'Advanced Java',
        collapsed: true,
        items: [
          { text: 'Streams', link: '/java/advanced/streams' },
          { text: 'Concurrency', link: '/java/advanced/concurrency' }
        ]
      }
    ]
  }
  