import { defineComponent  } from "vue";

export default defineComponent({
  props: {
    txt: String,
    txt1: String, 
    num1: Number,
    num: Number
  },
  setup() {
    
  },
  render() {
    return () => (
      <>
        <ul>
          <li>The txt I got is {this.txt}</li>
          <li>The num I got is {this.num}</li>
          <li>The txt1 I got is {this.txt1}</li>
          <li>The num1 I got is {this.num1}</li>
        </ul>
      </>
    )
  }
})