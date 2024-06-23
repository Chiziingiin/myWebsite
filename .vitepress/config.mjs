import { defineConfig } from 'vitepress'
import { zh } from './zh'
import { en } from './en'
import { shared } from './shared'
export default defineConfig({
  ...shared,
  image: {
    lazyLoading: true
  },
  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en },
  },
  sitemap: {
    hostname: 'https://www.chiziingiin.top'
  }
})
