// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style.css'
// import 'bootstrap/dist/css/bootstrap.css'
/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: Layout,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     'doc-bottom': () => h(FooterLayout)
  //   })
  // },
  enhanceApp({ app, router, siteData }) {

  }
}
