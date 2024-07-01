// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
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
    app.use(ElementPlus, { locale: zhCn })
  }
}
