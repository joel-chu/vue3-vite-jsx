import { createStore } from 'vuex'
import msgStore from './msg'
import numStore from './num'

export const vuexStores = createStore({
  modules: {
    msgStore,
    numStore
  },
  strict: false // even in production, do not switch it on, unless you need to deep debug via devTool 
})