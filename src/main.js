import './assets/main.css'
import router from './router/index.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')