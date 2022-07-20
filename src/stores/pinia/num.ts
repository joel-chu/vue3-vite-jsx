import { defineStore } from 'pinia'

export const useNumStore = defineStore('msg', {
  state: () => ({
    num: 0
  }),
  getters: {
    display: (state) => 'number: ' + state.num
  },
  actions: {
    add() {
      this.num++
    }
  }
})