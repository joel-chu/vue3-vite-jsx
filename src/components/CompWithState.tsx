import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useMsgStore } from '../stores/pinia/msg'

export default defineComponent({
  name: 'CompWithState',
  setup() {
    const store = useMsgStore()
    const { msg, stockMsg } = storeToRefs(store)

    const changeText = (e: Event) => {
      const value = (e.target as HTMLInputElement).value
      store.write(value)
    }

    return {
      msg, 
      stockMsg,
      changeText
    }
  },
  render() {
    return  (
      <div>
        <h3>CompWithState using pinia</h3>
        msg: { this.msg }
        <br />
        stockMsg: { this.stockMsg }
        <br />
        <input type="text" name="changeMe" onChange={ this.changeText } />
      </div>
    )
  }
})