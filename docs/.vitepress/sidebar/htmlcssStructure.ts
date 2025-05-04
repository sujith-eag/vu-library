// docs/.vitepress/sidebar/content.js

export function htmlcssSidebar() {
    return [
      {
        text: 'HTML',
        collapsed: true,
        items: [
          { text: '1 Boilerplate', link: '/html/1boilerplate' },
          { text: '2 Texts & Lists', link: '/html/2texts_lists' },
          { text: '3 Links & Images', link: '/html/3links_images' },
          { text: '4 Input Types', link: '/html/4input_types' },
          { text: '5 Button', link: '/html/5button' },
          { text: '6 DOM Events', link: '/html/6domevents' }
        ]
      },
      {
        text: 'CSS',
        collapsed: true,
        items: [
            {
                text: 'CSS Basics',
                collapsed: true,
                items: [
                  { text: '1 Selectors', link: '/css/css_basics/1_selectors' },
                  { text: '2 Multiple Selectors', link: '/css/css_basics/2_multiple_selecors' },
                  { text: '3 Declaration', link: '/css/css_basics/3_declaration' },
                  { text: '4 Adding CSS', link: '/css/css_basics/4_adding_css' },
                  { text: '9 Utility Class Inheritance', link: '/css/css_basics/9_utilityclass_inheritance' }
                ]
            },
            {
                text: 'Box Model',
                items: [
                  { text: '5 Box Model', link: '/css/box_model/5_box_model' }
                ],
                collapsed: true
              },
            {       
            text: 'CSS Values Units',
            link: '/css/css_values_units/index'
          },
          {
            text: 'Flex Box',
            link: '/css/flex_box/index'
          },
          {
            text: 'CSS Grid',
            link: '/css/css_grid/index'
          },

        ]
      },
    ]
  }
  
 