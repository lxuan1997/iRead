import { defineUserConfig, defaultTheme } from 'vuepress'
import { navbar } from "./navbar";

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'iRead',
    description: '这是我的 VuePress 站点',
    base: '/iRead',
    theme: defaultTheme({
        navbar
    })
})
