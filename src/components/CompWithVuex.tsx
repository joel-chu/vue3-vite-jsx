// recreate the HelloWorld with vuex 
import { defineComponent } from "vue"
import { mapState, mapMutations } from "vuex"

export default defineComponent({
  name: 'CompWithVuex',
  computed: {
    ...mapState('numStore', ['num'])
  },
  methods: {
    ...mapMutations('numStore', ['add'])
  },
  setup() {

  },
  render() {
    return (
    <div>
      <p>This component is using Vuex</p>
      <h2>{ this.num }</h2>
      <div class="card">
        <button type="button" onClick={ () => this.add() }>count is { this.num }</button>
        <p>
          Edit
          <code>components/CompWithVuex</code> to test HMR
        </p>
      </div>  
    </div>
    )
  }
})