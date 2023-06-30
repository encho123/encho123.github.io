import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Find myself",
  description: "try to find myself,we all need this",

  //修改favicon  href的值，直接就是./,不过这个样放在public下面
  head: [['link', { rel: 'icon', href: './icon.png' }]],

  // base: '/encho123.github.io/qcsy/'  
  //当我添加这个时候，github 就无法获得 css 和 js 文件，当我取消这个的时候，就可以正常的运行。

  themeConfig: {

    //添加搜索
    search: {
      provider: 'local'
    },
    // siteTitle: 'My Custom Title',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'mytest', link: 'sth by me' },
      { text: 'Guide', link: '/guide/' },
      { text: 'expector', link: 'this is another' },

    ],

    // 侧边栏  数组形式
    sidebar: [

      // examples
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'By me', link: '/sth by me' }
        ]
      },
      //加入了mytest
      {
        text: 'mytest',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          {
            text: 'Item C',
            items: [
              { text: 'Item C1', link: '/item-3-1' },
              { text: 'Item C2', link: '/item-3-2' }
            ]
          }
        ]
      },
    ],

    // 侧边栏  对象形式
    // sidebar: {
    //   '/guide/': [
    //     {
    //       text: 'Guide',
    //       items: [
    //         { text: 'xxx', link: '/guide/xxx' },
    //         { text: 'One', link: '/guide/one' },
    //         { text: 'Two', link: '/guide/two' }
    //       ]
    //     }
    //   ],
    // },


    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'facebook', link: 'https://github.com/vuejs/vitepress' },

    ]
  }
})
