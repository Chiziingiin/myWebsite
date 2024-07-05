import { defineConfig } from 'vitepress'
// Import our custom CSS
import { searchZH } from './zh'
import { searchEN } from './en'

function htmlToTextWithRegex(htmlString) {
  // 匹配 <h1> 到 <h6> 标签及 <p> 标签内的文本内容，但排除带属性的 <header> 标签及其内容
  var headingsAndParagraphsRegex = /<(h[1-6]|p)[^>]*>(.*?)<\/\1>|<header[^>]*>.*?<\/header>/gi;
  var matches = htmlString.match(headingsAndParagraphsRegex);
  
  if (matches && matches.length > 0) {
      // 提取每个匹配项的文本内容并拼接在一起
      var combinedText = matches.map(function(match) {
          // 匹配标签内的文本内容，去除标签，只保留文本内容
          var textContent = match.replace(/<\/?[^>]+(>|$)/g, '');
          return textContent.trim();  // 去除首尾空白
      }).join(' ');

      return combinedText;
  } else {
      // 如果未找到匹配的标签，返回空字符串或者其他自定义的错误处理方式
      return '';
  }
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
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:site_name', content: '赤子英金' }],
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
    let content = htmlToTextWithRegex(context.content).slice(60, 260)

    return [ 
      ['meta', { property: 'og:description', content:context.description + ' ' + content}],
      ['meta', { property: 'og:title', content:context.title}],
      ['meta', { name: 'keywords', content:`赤子英金,Chiziingiin,`+content.split(/[，|\.|\s]/).slice(0,6).join(',')}],
    ] 
 
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
