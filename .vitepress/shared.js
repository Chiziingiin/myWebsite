import { defineConfig } from 'vitepress'
export const shared = defineConfig({
  title: "赤子英金 - 梦想只是开始，探索永不止步",
  description: "赤子英金于2021年8月成立，是一个学生团体，目前主要致力于开发利于学生团体的一些轻项目。Founded in 2021, Chiziingiin is a student organization that focuses on developing light projects that are beneficial to student organizations.",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  head: [
    ['meta', { name:'description', content:'赤子英金于2021年8月成立，是一个学生团体，目前主要致力于开发利于学生团体的一些轻项目。Founded in 2021, Chiziingiin is a student organization that focuses on developing light projects that are beneficial to student organizations.'} ],
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

  ],
  themeConfig: {
    search:{
      provider: 'local',
      options: {
        appId: '31IY2WV1HC',
        apiKey: '3e04c5a0346eda91f9e5649056c9d2d0',
        indexName: 'chiziingiin.top'
      }
    },
    
    logo:'/logo_cn_en colored.png',
    siteTitle:false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Chiziingiin/myWebsite/' }
    ],
  },
})