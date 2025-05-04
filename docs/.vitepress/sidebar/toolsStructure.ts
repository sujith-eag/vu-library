 // docs/.vitepress/sidebar/content.js

 export function toolsSidebar() {
    return [
      {
        text: 'Tools',
        collapsed: true,
        items: [
          {
            text: 'Hugo',
            items: [
              { text: 'Doks 1', link: '/tools/hugo/doks1' },
              { text: 'Doks 2', link: '/tools/hugo/doks2' }
            ],
            collapsed: true
          },
          {
            text: 'VSCode',
            link: '/tools/vscode/index'
          },
          {
            text: 'Obsidian',
            link: '/tools/obsidian/index'
          },
          {
            text: 'Chrome',
            link: '/tools/chrome/index'
          },
          {
            text: 'Git GitHub',
            link: '/tools/git-github/index'
          }
        ]
      }
    ]
  }
  