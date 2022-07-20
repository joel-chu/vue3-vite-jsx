// demo the idea of an Widget
import { defineComponent } from "vue";
import ChildInSlot from './ChildInSlot'
import CompWithSlot from "./CompWithSlot";

export default defineComponent({
  name: 'WidgetOne',
  setup() {
    return { myTxt: 'This text is from WidgetOne' }
  },
  render() {
    <>
      <h3>Widget One</h3>
      <CompWithSlot txt={ this.myTxt }>
        <ChildInSlot />
      </CompWithSlot>
    </>
  }
})