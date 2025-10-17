import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Services from '@/pages/Services.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/services', component: Services }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
