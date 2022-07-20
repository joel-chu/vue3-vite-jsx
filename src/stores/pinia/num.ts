import { defineStore } from 'pinia'

export const useNumStore = defineStore('num', {
  state: () => ({
    num: 0
  }),
  actions: {
    add() {
      this.num++
    }
  }
})