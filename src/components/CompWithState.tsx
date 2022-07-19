import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useMsgStore } from '../stores/pinia/msg'

export default defineComponent({
  name: 'CompWithState',
  setup() {
    const store = useMsgStore()
    const { msg, stockMsg } = storeToRefs(store)
    return {
      msg, stockMsg
    }
  },
  render() {
    return  (
      <div>
        <h3>CompWithState</h3>
        msg: { this.msg }
        <br />
        stockMsg: { this.stockMsg }
        <br />
        <input type="text" name="changeMe" />
      </div>
    )
  }
})