import { defineComponent, ref, provide } from 'vue'
import { storeToRefs } from 'pinia'
import { useNumStore } from '../../stores/pinia/num'
import { provideKey1 } from './keys'

export default defineComponent({
  name: 'CompWithSlot',
  props: {
    txt: String
  },
  setup(props) {
    const store = useNumStore()
    const { num, display } = storeToRefs(store)
    const add = store.add 
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

    provide(provideKey1, { 
      num1, 
      txt, 
      txt1: 'This text is from ComptWithSlot', 
      num,
      add
    })

    return {
      display,
      num,
      add
    }
  },
  render() {
    return (
      <div style="display: block; background-color: yellow; min-height: 200px">
        <h4>{ this.txt }</h4>
        <p>{ this.display }</p>
        <button onClick={ this.add }>
          Click to add <strong style="color:red">{ this.num }</strong>
        </button>
        <br />
        
        { this.$slots.default ? this.$slots.default() : 'Nothing' }

      </div>
    )
  }
})