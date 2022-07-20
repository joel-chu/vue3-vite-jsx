import { defineComponent, ref } from 'vue'
import { mapState, mapMutations } from "vuex"


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
    const { txt } = props
    let ctn = 0
    const num1 = ref(0)
    const timer = setInterval(() => {
      ++num1.value
      ++ctn 
      if (ctn >= 10) {
        clearInterval(timer)
      } 
    }, 500)
    return { 
      props: {
        num1,
        txt,
        txt1: 'This text is from ComptWithSlot'
      }
    }
  },
  render() {
    return () => (
      <div style="display: block; background-color: yellow; min-height: 300px">
        <button onClick={ this.add }>Click to add { this.num }</button>
        <br />
        { this.$slots.default ? this.$slots.default(Object.assign(this.props, { num: this.num })) : '' }
      </div>
    )
  }
})