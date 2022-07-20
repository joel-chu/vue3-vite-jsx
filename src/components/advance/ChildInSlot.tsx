import { defineComponent, inject } from "vue";
import { provideKey1 } from './keys'

export default defineComponent({
  // even we couldn't use the 
  props: {
    txt: String,
    txt1: String, 
    num1: Number,
    num: Number
  },
  setup() {
    const passingProps = inject(provideKey1) as object
    
    return { ...passingProps }
  },
  render() {
    return (
      <>
        receiving end
        <ul>
          <li>The txt I got is: { this.txt }</li>
          <li>The num I got is: { this.num }</li>
          <li>The txt1 I got is: { this.txt1 }</li>
          <li>The num1 I got is: { this.num1 }</li>
        </ul>
      </>
    )
  }
})