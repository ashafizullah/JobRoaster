import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap CSS// In your main.js or main.ts
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Bootstrap JavaScript and all its components
import * as bootstrap from 'bootstrap'

// Make bootstrap globally available
window.bootstrap = bootstrap

const app = createApp(App)
app.use(router)
app.mount('#app')