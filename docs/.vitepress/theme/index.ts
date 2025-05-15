// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BookCard from './components/BookCard.vue'
import ProfilePage from './components/ProfilePage.vue'
import ProjectsShowcase from './components/ProjectsShowcase.vue'

import './style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('BookCard', BookCard)  // component registration
    app.component('ProfilePage', ProfilePage)
    app.component('ProjectsShowcase', ProjectsShowcase)
    

    // Adding Script for GoatCounter Analytics
    // <script data-goatcounter="https://sujith.goatcounter.com/count"
    //    async src="//gc.zgo.at/count.js"></script>
    if(typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.setAttribute('data-goatcounter', 'https://sujith.goatcounter.com/count')
      script.setAttribute('src', '//gc.zgo.at/count.js')
      script.setAttribute('async', 'true')
      document.body.appendChild(script)
    }
  }
} satisfies Theme
