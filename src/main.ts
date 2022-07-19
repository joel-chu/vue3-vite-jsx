import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createPinia } from 'pinia'
import './style.css'
import App from './App'
// create the pinia instance
const pinia = createPinia()
// import the stores 
import msgStore from './stores/msg'
import numStore from './stores/num'
const vuexStores = createStore({
  modules: {
    msgStore,
    numStore
  },
  strict: false // even in production, do not switch it on, unless you need to deep debug via devTool 
})

const app = createApp(App)
app.use(vuexStores)
app.use(pinia)
// finally mount it
app.mount('#app')