import { defineConfig } from 'vitepress'
// Import our custom CSS
import { searchZH } from './zh'
import { searchEN } from './en'

export const shared = defineConfig({
  title: "赤子英金 - 梦想只是开始，探索永不止步",
  description: "赤子英金于2021年8月成立，是一个学生团体，目前主要致力于开发利于学生团体的一些轻项目。Founded in 2021, Chiziingiin is a student organization that focuses on developing light projects that are beneficial to student organizations.",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  markdown: {
    math:true,
    image: {
      lazyLoading: true
    }
  },
  head: [
    ['meta', { name:'description', content:'赤子英金 - 梦想只是开始，探索永不止步'} ],
    ['link', { rel: 'icon', type: 'image/png', href: 'https://www.chiziingiin.top/logo.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: '赤子英金 | 梦想只是开始，探索永不止步' }],
    ['meta', { property: 'og:site_name', content: 'Chiziingiin' }],
    ['meta', { property: 'og:image', content: 'https://www.chiziingiin.top/logo.png' }],
    ['meta', { property: 'og:url', content: 'https://www.chiziingiin.top/' }],
    ['meta', { name:"google-adsense-account", content:"ca-pub-6253158297867597"}],
    
    //Anlysis
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-090FBQC34B' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-090FBQC34B');`
    ],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?01e99ec5a6356060912e6d94991c17bf";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
    [
      'script',
      {},
      `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "mixmj39vq4");`
    ],

    //ADS
    [
      'script',
      {async:'',src:'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6253158297867597',crossorigin:'anonymous'}
    ],

    //share
    [
      'script',
      {src:'https://res.wx.qq.com/open/js/jweixin-1.2.0.js'}
    ],

  ],
  themeConfig: {
    search:{
      provider: 'algolia',
      options: {
        appId: '01EE2AO7BT',
        apiKey: 'd8a788d0a445edc6ac28bd4fdddbd02e',
        indexName: 'chiziingiin',
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          },
          ...searchEN
        }
      },
    },
    
    logo:'/logo_cn_en colored.png',
    siteTitle:false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Chiziingiin/myWebsite/' }
    ],
  },
})
