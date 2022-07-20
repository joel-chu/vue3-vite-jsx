import { defineComponent } from "vue"
import HelloWorld from './components/basics/HelloWorld'
import CompWithPinia from './components/basics/CompWithPinia'
import CompWithVuex from './components/basics/CompWithVuex'
import WidgetOne from "./components/advance/WidgetOne"
// main
export default defineComponent({
  components: { 
    HelloWorld, 
    CompWithPinia,
    CompWithVuex,
    WidgetOne
  },
  setup(_, ctx) {
    // console.log(ctx)
    // const stores = useStore() // it's useless if you using namespaced
    // console.log(stores)
    // const msg = ref('Vite + Vue')

    const dummyMsg = 'DUMMY MESSAGE'

    return () => (
    <div>
      <WidgetOne />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
      </div>
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