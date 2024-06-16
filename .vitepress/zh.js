import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const zh = defineConfig({
  lang: 'zh-Hans',
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/project/': { base: '/project/', items: sidebarProject() },
      '/record/': { base: '/record/', items: sidebarRecord() },
      '/about/': { base: '/about/', items: sidebarAbout() }
    },
    footer: {
      message: '感谢所有支持和关注我们的人 ❤️ 本网站由 Cloudfalre 和 VitePress 驱动',
      copyright: `版权所有 © 2022-${new Date().getFullYear()} Chiziingiin`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '暗色主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav() {
  return [
    { text: '首页', link: '/' },
    { text: '作品', link: '/project/project' },
    { text: '文章', link: '/passage/passage' },
    { text: '记录', link: '/record/' },
    { text: '关于', link: '/about/who-am-i' }
  ];
}

function sidebarProject() {
  return [
    { text: '项目',link: 'project' },
    {
      text: 'Scheduler',
      collapsed: false,
      items: [
        { text: '开始', link: 'Scheduler/' },
        { text: '安装', link: 'Scheduler/install' },
        { text: '指南', link: 'Scheduler/guide' },
        { text: '历史', link: 'Scheduler/history' },
      ]
    },
    {
      text: '赤子英金学生网络社区',
      collapsed: false,
      items: [
        { text: '隐私政策', link: 'blog/privacy-policy' },
      ]
    },
    {
      text: '盲人机械狗项目',
      collapsed: false,
      items: [
        { text: '历史', link: 'dog/' },
      ]
    },
  ]
}

function sidebarRecord(){
  return [
    {
      text: '记录',
      items: [
        
      ]
    }
  ]
}

function sidebarPassage(){
  return [
    {
      text: '文章',
      items: [
        { text: '我是谁', link: 'who-am-i' },
        { text: '了解赤子英金', link: 'who-are-we' },
        { text: '致谢', link: 'thanks' },
      ]
    }
  ]
}

function sidebarAbout(){
  return [
    {
      text: '关于',
      items: [
        { text: '我是谁', link: 'who-am-i' },
        { text: '了解赤子英金', link: 'who-are-we' },
        { text: '致谢', link: 'thanks' },
      ]
    }
  ]
}

export const search = {
  zh: {
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
  }
}