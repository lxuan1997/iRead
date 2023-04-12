import { defineUserConfig, defaultTheme } from 'vuepress'
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
    base: '/iRead/',
    lang: 'zh-CN',
    title: '',
    head: [
        ['link', { rel: 'icon', href: '/iRead/images/logo-icon.png' }],
        // 添加apple icon
        ['link', { rel: 'apple-touch-icon', href: '/iRead/images/logo.png' }],
        ['link', { rel: 'stylesheet', href: '/iRead/styles/index.css' }]
    ],
    description: 'keep reading , day day up',
    theme: defaultTheme({
        logo: '/images/logo.png',
        logoDark: '/images/logo-dark.png',
        navbar,
        sidebar,
        docsRepo: 'https://github.com/lxuan1997/iRead',
        docsBranch: 'main',
        docsDir: 'docs',
        contributors: false,
        // editLinkText: '编辑此页',
        // lastUpdatedText: '最近更新'
    }),
    plugins: [
        mdEnhancePlugin({
            // 任务列表
            tasklist: true
        }),
    ]
})
