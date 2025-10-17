import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Services from '@/pages/Services.vue'

const i18n = createI18n({
    locale: 'km',
    fallbackLocale: 'en',
    messages: {
        km: {
            hello: 'សួស្តី',
            welcome: 'សូមស្វាគមន៍',
            cypto_currency: 'រូបិយប័ណ្ណឌីជីថល',
            read_more: 'អាន​បន្ថែម',
        },
        en: {
            hello: 'Hello',
            welcome: 'Welcome',
            cypto_currency: 'Cryptocurrency',
            read_more: 'Read More',
        }
    }
})


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/services', component: Services }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
