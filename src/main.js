import { createApp } from 'vue'
import i18n from './i18n/index.js'
import router from './routes/index.js'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
