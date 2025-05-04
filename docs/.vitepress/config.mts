import { defineConfig } from 'vitepress'

import { cSidebar } from './sidebar/cStructure'
import { javaSidebar } from './sidebar/javaStructure'
import { htmlcssSidebar } from './sidebar/htmlcssStructure'
import { toolsSidebar } from './sidebar/toolsStructure'

import { dbmsSidebar } from './sidebar/dbmsStructure'
import { javaScriptDomSidebar } from './sidebar/jsdomStructure'
import { javaScriptSidebar } from './sidebar/jsStructure'
import { bashSidebar } from './sidebar/linuxStructure'
import { linuxSidebar } from './sidebar/linuxStructure'
import { osSidebar } from './sidebar/osStructure'
import { pythonSidebar } from './sidebar/pythonStructure'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sujith's Library",
  description: "Curated collection of learning resources with examples.",
  ignoreDeadLinks: true,
  base: '/',
  
  cleanUrls: true,  // removing .html
  appearance: false, // defaults to light, user can still toggle

  head: [
    ['link', { rel: 'icon', href: './logo/logo.png' }]
  ],

  markdown: {
    theme: {
        light: 'github-light',
        dark: 'dracula'
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
      '/c/': cSidebar(),

      '/css/': htmlcssSidebar(),
      '/linux/bash/': bashSidebar(),
      '/dbms/': dbmsSidebar(),
      '/html/': htmlcssSidebar(),
      '/java/': javaSidebar(),
      '/java-script/': javaScriptSidebar(),
      '/java-script-dom/': javaScriptDomSidebar(),
      '/linux/': linuxSidebar(),
      '/os/': osSidebar(),
      '/python/': pythonSidebar(),
      '/tools/': toolsSidebar()
      // need to plan for multiple return functions with collapsed
    },
      
    outline: {
      level: [2, 6],
    },
    
    
    search:{
      provider: 'local' // 'agolia'
    },
    
    footer: {
      message: 'Made with ❤️ for students, by a fellow learner.',
      copyright: '© Sujith.'
    },
    
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
