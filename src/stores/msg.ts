// just to demo how bad JSX is 
// you couldn't pass  a very simple props to it
// instead we have to create a store just to make it work normally

export interface msgStoreState {
  msg: string
} 


export default {
  state() {
    return {
      msg: 'stock message'
    }
  },
  mutations: {
    write (state: msgStoreState, value: string) {
      state.msg = value
    }
  },
  namespaced: true
}

