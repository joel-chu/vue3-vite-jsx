// just create another store to see how the useStore returns it

export interface NumStoreState {
  num: number
}


export default {
  state() {
    return {
      num: 0
    }
  },
  mutations: {
    add(state: NumStoreState) {
      ++state.num
    }
  },
  namespaced: true
}