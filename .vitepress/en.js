import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  title: 'Chiziingiin',
  description: 'Chiziingiin Website',
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/en/': { base: '/en/project/', items: sidebarProject() },
      '/en/record/': { base: '/en/record/', items: sidebarRecord() },
      '/en/about/': { base: '/en/about/', items: sidebarAbout() }
    },
    footer: {
      message: 'Thanks to everyone who supports and follows us ❤️ This website is powered by Cloudfalre and VitePress',
      copyright: `All rights reserved © 2022-${new Date().getFullYear()} Chiziingiin`
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    outline: {
      label: 'Page navigation'
    },
    lastUpdated: {
      text: 'Last updated at',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    langMenuLabel: 'Multilingual',
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Dark theme',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode'
  }
})

function nav() {
  return [
    { text: 'Home', link: '/en/' },
    { text: 'Works', link: '/en/project/' },
    { text: 'Record', link: '/en/record/' },
    { text: 'About', link: '/en/about/' }
  ];
}

function sidebarProject() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Overview', link: 'index' },
      ]
    },
    {
      text: 'Scheduler',
      collapsed: false,
      items: [
        { text: 'Start', link: 'Scheduler/start' },
        { text: 'Install', link: 'Scheduler/install' },
        { text: 'Guide', link: 'Scheduler/guide' },
        { text: 'History', link: 'Scheduler/history' },
      ]
    },
    {
      text: 'Blind Man Mechanical Dog Project',
      collapsed: true,
      items: [
        { text: 'History', link: 'custom-theme' },
      ]
    },
  ]
}

function sidebarRecord(){
  return [
    {
      text: 'Record',
      items: [
        
      ]
    }
  ]
}

function sidebarAbout(){
  return [
    {
      text: 'About',
      items: [
        { text: 'Who am I', link: 'who-am-i' },
        { text: 'Chiziingiin', link: 'who-are-we' },
        { text: 'Focus', link: 'focus' },
      ]
    }
  ]
}

export const search = {
  zh: {
    placeholder: 'Search documents',
    translations: {
      button: {
        buttonText: 'Search documents',
        buttonAriaLabel: 'Search documents'
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Clear query conditions',
          resetButtonAriaLabel: 'Clear query conditions',
          cancelButtonText: 'Cancel',
          cancelButtonAriaLabel: 'Cancel'
        },
        startScreen: {
          recentSearchesTitle: 'Search history',
          noRecentSearchesText: 'No search history',
          saveRecentSearchButtonTitle: 'Save to search history',
          removeRecentSearchButtonTitle: 'Remove from search history',
          favoriteSearchesTitle: 'Favorites',
          removeFavoriteSearchButtonTitle: 'Remove from favorites'
        },
        errorScreen: {
          titleText: 'Unable to get results',
          helpText: 'You may need to check your network connection'
        },
        footer: {
          selectText: 'Select',
          navigateText: 'Switch',
          closeText: 'Close',
          searchByText: 'Search provider'
        },
        noResultsScreen: {
          noResultsText: 'Unable to find related results',
          suggestedQueryText: 'You can try to query',
          reportMissingResultsText: 'Do you think this query should have results?',
          reportMissingResultsLinkText: 'Click to feedback'
        }
      }
    }
  }
}
