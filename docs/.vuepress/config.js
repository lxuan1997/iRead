import { defineUserConfig, defaultTheme } from 'vuepress'
import { blogPlugin } from "vuepress-plugin-blog2";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";

export default defineUserConfig({
    lang: 'zh-CN',
    title: '',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    description: 'keep reading , day day up',
    base: '/iRead',
    theme: defaultTheme({
        logo: '/images/logo.png',
        logoDark: '/images/logo-dark.png',
        navbar,
        // sidebar
    }),
    plugins: [
        blogPlugin({

        })
    ]
})
