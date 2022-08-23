import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import the stores
import { vuexStores } from './stores'
import './style.css'
import App from './App'
// create the pinia instance
const pinia = createPinia()

const app = createApp(App)
app.use(vuexStores)
app.use(pinia)
// finally mount it
app.mount('#app')
