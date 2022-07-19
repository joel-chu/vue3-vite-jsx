// implement the same msgStore in pinia 
import { defineStore } from 'pinia'

export const useMsgStore = defineStore('msg', {
  state: () => ({
    msg: 'pinia message'
  }),
  getters: {
    stockMsg: (state) => 'stock ' + state.msg
  },
  actions: {
    write(newMsg: string) {
      this.msg = newMsg
    }
  }
})