// demo the idea of an Widget
import { defineComponent } from "vue"
import ChildInSlot from './ChildInSlot'
import CompWithSlot from "./CompWithSlot"
import CompWithSlotPinia from "./CompWithSlotPinia"
import FuncComp from './FuncComp'

export default defineComponent({
  name: 'WidgetOne',
  components: {
    CompWithSlot,
    CompWithSlotPinia,
    ChildInSlot
  },
  setup() {
    return { myTxt: 'This text is from WidgetOne' }
  },
  render() {
    return (
    <>
      <h3>Part One - using provider with Vuex</h3>
      <CompWithSlot txt={ this.myTxt }>
        <ChildInSlot />
      </CompWithSlot>
      <h3>Part Two - using provider with Pinia</h3>
      <CompWithSlotPinia txt={ this.myTxt }>
        <ChildInSlot />
      </CompWithSlotPinia>
    </>
    )
  }
})