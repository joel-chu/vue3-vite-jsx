import { createApp } from 'vue'
import { createStore } from 'vuex'
import './style.css'
import App from './App'
// import the stores 
import msgStore from './stores/msg'
import numStore from './stores/num'
const store = createStore({
  modules: {
    msgStore,
    numStore
  }
})

const app = createApp(App)
app.use(store)
// finally mount it
app.mount('#app')