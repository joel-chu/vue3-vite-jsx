import { defineComponent, ref } from 'vue'
// main
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup (props) {
    const { msg } = props
    const count = ref(0)

    return {
      count,
      msg
    }
  },
  render () {
    return (
      <>
        <h1>{ this.msg }</h1>
        <div>The count is using ref</div>
        <div class="card">
          <button type="button" onClick={ () => this.count++ }>count is { this.count }</button>
          <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
          </p>
        </div>
      </>
    )
  }
})
