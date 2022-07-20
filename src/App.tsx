import { defineComponent } from "vue"
import HelloWorld from './components/basics/HelloWorld'
import CompWithoutRender from "./components/basics/CompWithoutRender"
import CompWithPinia from './components/basics/CompWithPinia'
import CompWithVuex from './components/basics/CompWithVuex'
import WidgetOne from "./components/advance/WidgetOne"
import MouseTracker from "./components/advance/MouseTracker"
// main
export default defineComponent({
  components: { 
    HelloWorld, 
    CompWithoutRender,
    CompWithPinia,
    CompWithVuex,
    WidgetOne,
    MouseTracker
  },
  setup(_, ctx) {
    // console.log(ctx)
    // const stores = useStore() // it's useless if you using namespaced
    // console.log(stores)
    // const msg = ref('Vite + Vue')
    /*
    <MouseTracker>
      {
        (props: { x: number, y: number }) => <div>{ props.x }, { props.y }</div>
      }
      </MouseTracker>
    */
    const dummyMsg = 'Comp using render'
    const title2 = 'Comp without render'
    return () => (
    <div>
      <WidgetOne />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
      </div>
      <CompWithoutRender msg={ title2 } />
      <hr />
      <HelloWorld msg={ dummyMsg } />
      <hr />
      <CompWithPinia />
      <hr />
      <CompWithVuex />
    </div>
    )
  }
})


/* one of the draw back with jsx - no where to define your scope styling 
@TODO need to confirm
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
*/