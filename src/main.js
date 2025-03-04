import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// Buat aplikasi Vue
const app = createApp(App)

// Pasang router ke aplikasi
app.use(router)

// Mount aplikasi ke DOM
app.mount('#app')