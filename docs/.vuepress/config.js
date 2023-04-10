import { defineUserConfig, defaultTheme } from 'vuepress'
import { blogPlugin } from "vuepress-plugin-blog2";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";

export default defineUserConfig({
    base: '/iRead/',
    lang: 'zh-CN',
    title: '',
    head: [
        ['link', { rel: 'icon', href: '/iRead/images/logo-icon.png' }],
        // 添加apple icon
        ['link', { rel: 'apple-touch-icon', href: '/iRead/images/logo-icon.png' }]
    ],
    description: 'keep reading , day day up',
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
