import { defineConfig } from 'vitepress'
// Import our custom CSS
import { searchZH } from './zh'
import { searchEN } from './en'

function htmlToTextWithRegex(html) {    
  const regex = /<main ([\s\S]*?)<\/main>/g;  
  let match;  
  while ((match = regex.exec(html)) !== null) {  
      return ' | ' + ('<main '+match[1]).replace(/<[^>]+>/g, '').replace(/[\s]{2,}/g, '').replace(/[\t\r\n]+/g, ''); // 移除所有HTML标签  
  }  
  return '';  
}  

export const shared = defineConfig({
  title: "赤子英金 - 梦想只是开始，探索永不止步",
  // description: "赤子英金网站",
  lastUpdated: false,
  cleanUrls: true,
  metaChunk: true,
  externalLinkIcon:true,
  markdown: {
    math:true,
    image: {
      lazyLoading: true
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://www.chiziingiin.top/logo.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh' }],
    ['meta', { name: 'og:title', content: '赤子英金 | 梦想只是开始，探索永不止步' }],
    ['meta', { name: 'og:site_name', content: 'Chiziingiin' }],
    ['meta', { name: 'og:image', content: 'https://www.chiziingiin.top/logo.png' }],
    ['meta', { name: 'og:url', content: 'https://www.chiziingiin.top/' }],
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
  ],
  themeConfig: {
    search:{
      provider: 'algolia',
      options: {
        appId: '01EE2AO7BT',
        apiKey: 'd8a788d0a445edc6ac28bd4fdddbd02e',
        indexName: 'chiziingiin',
        locales: {
          root: searchZH.zh,
          ...searchEN,
        }
      },
    },
    siteTitle:false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Chiziingiin/myWebsite/' }
    ],
    logo:'/logo_cn_en colored.png',
  },
  transformHead: async (context) =>{
    // 假设你想将页面的 content 的前 100 个字符作为 description  
    return [ ['meta', { name: 'description', content: context.title.replace(' | 赤子英金 - 梦想只是开始，探索永不止步','') + (htmlToTextWithRegex(context.content).slice(0, 100))+'...' }]] 
 
  }  
  // transformPageData: (pageData,u) => {
  //   pageData.frontmatter.head ??= [];
  //   pageData.frontmatter.head.push([
  //     'meta',
  //     {
  //       name: 'og:title',
  //       content:
  //         pageData.frontmatter.layout === 'home'
  //           ? `赤子英金 | 梦想只是开始，探索永不止步`
  //           : `${pageData.title} | 赤子英金 - 梦想只是开始，探索永不止步${JSON.stringify(u)}`
  //     }
  //   ]);
  //   pageData.description = 
  //   pageData.title + ' ';
  //   // alert();
  // }




})
