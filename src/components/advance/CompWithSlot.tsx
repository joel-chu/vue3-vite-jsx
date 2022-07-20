import { defineComponent, ref, provide, toRef } from 'vue'
import { mapState, mapMutations, useStore } from "vuex"
import { provideKey1 } from './keys'

export default defineComponent({
  name: 'CompWithSlot',
  props: {
    txt: String
  },
  computed: {
    ...mapState('numStore', ['num'])
  },
  methods: {
    ...mapMutations('numStore', ['add'])
  },
  setup(props) {
    const store = useStore()
    
    const { txt } = props
    let ctn = 0
    const num1 = ref(0)
    const timer = setInterval(() => {
      ++num1.value
      ++ctn 
      if (ctn >= 10) {
        ctn = 0
        num1.value = 0
      } 
    }, 1000)

    const num = toRef(store.state.numStore, 'num')

    provide(provideKey1, { 
      num1, 
      txt, 
      txt1: 'This text is from ComptWithSlot', 
      num
    })

    return {}
  },
  render() {
    return (
      <div style="display: block; background-color: yellow; min-height: 200px; color: black">
        <h4>{ this.txt }</h4>
        <button onClick={ this.add }>
          Click to add <strong style="color:red">{ this.num }</strong>
        </button>
        <br />
        
        { this.$slots.default ? this.$slots.default() : 'Nothing' }

      </div>
    )
  }
})