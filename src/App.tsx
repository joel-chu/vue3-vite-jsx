import { defineComponent, ref } from "vue"
import HelloWorld from './components/HelloWorld'
// main
export default defineComponent({
  components: { HelloWorld },
  setup() {
    const msg = ref('Vite + Vue')


    return () => (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
     
      <HelloWorld msg={ msg.value } />
    </>
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