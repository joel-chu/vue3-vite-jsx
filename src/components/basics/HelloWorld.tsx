import { defineComponent, ref } from 'vue'
// main
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
<<<<<<< HEAD
  methods: {
    // @NOTE, when you need to call `this` 
    // you can not use arrow function! 
    add() { 
      this.count++
    }
  },
  setup(props) {
=======
  setup (props) {
>>>>>>> 17d631a (adding cypress to the project)
    const { msg } = props
    const count = ref(0)

    return {
      count,
      msg
    }
  },
  render () {
    return (
<<<<<<< HEAD
    <>
      <h1>{ this.msg }</h1>
      <div>The count is using ref</div>
      <div class="card">
        <button type="button" onClick={ () => this.add() }>count is { this.count }</button>
=======
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
>>>>>>> 17d631a (adding cypress to the project)
        <p>
          Check out
          <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
            >create-vue</a
          >, the official Vue + Vite starter
        </p>
        <p>
          Install
          <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
          in your IDE for a better DX
        </p>
        <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
      </>
    )
  }
})
