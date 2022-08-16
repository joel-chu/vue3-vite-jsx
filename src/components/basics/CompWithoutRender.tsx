// recreate the HelloWorld example without the render 
import { defineComponent, ref } from 'vue'
// main
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {
    const { msg } = props
    const count = ref(0)
    return () => (
      <div>
        <h1>{ msg }</h1>
        <div>The count is using ref</div>
        <div class="card">
          <button type="button" onClick={ () => count.value++ }>count is { count.value }</button>
        </div>
      </div>
    )
  }
})
