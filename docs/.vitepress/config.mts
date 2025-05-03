import { defineConfig } from 'vitepress'
import { javaSidebar } from './sidebar/java'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sujith's Library",
  description: "A curated catalog of Java learning resources and examples.",
  ignoreDeadLinks: true,
  base: '/vu-library/',
  
  cleanUrls: true,  // removing .html
  
  head: [
    ['link', { rel: 'icon', href: './logo/logo.png' }]
  ],  // should be 16x16 or 32x32 ico or png
  
  markdown: {
    theme: {
        light: 'github-light',
        dark: 'min-dark'  
    },
    lineNumbers: true
  },
  
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo/logo.png',
    // siteTitle: 'This Site',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Java', link: '/java/' },
      { text: 'Python', link: '/python/' }
    ],

    sidebar: {
      '/java/': javaSidebar(),
      // need to plan for multiple return functions with collapsed
    },
      
    outline: {
      level: [2, 6],
    },
    
    
    search:{
      provider: 'local' // 'agolia'
    },
    
    footer: {
      message: 'Created for students, by a fellow learner.',
      copyright: '© Sujith. Made with ❤️'    },
    
//    editLink: {
//      pattern: 'https://github.com/sujith-eag/vu-library/edit/main/docs/:path',    
//      text: 'Edit this page on Github' 
//    },
    
    lastUpdated: {
      text: 'Updated on',
      formatOptions: {
        dateStyle: 'long'
      }
    },
    
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/sujith-eag/'
      },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/sujith-eag'
      } 
    ]
  }
})
