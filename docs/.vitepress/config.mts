import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sujith's Library",
  description: "Library Catalog of",
  ignoreDeadLinks: true,
  
  base: '/vu-library/',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Java', link: '/java/' }
    ],

    sidebar: {
      // Home page Side bar
      '/': [
         {
          text: 'Home',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
    ],
    
    // Sidebar for Java Section
    '/java/': [
      {
        text:'Java',
        items:[
          {text: 'Introduction', link:'/java/java_intro'},
          {text: 'Java Basics', link:'/java/java_next'}
        ]
      },
      {
        text:'Java Core',
        items:[
          {text: 'Introduction', link:'/java/java_core/intro'},
          {text: 'Java Basics', link:'/java/java_core/next'}
        ]
      }
    ]
  },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sujith-eag/vu-library' }
    ]
  }
})
