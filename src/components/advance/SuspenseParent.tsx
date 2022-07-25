import { h, Suspense, defineComponent } from 'vue'

export default defineComponent({
  name: 'SuspenseParent',
  setup () {

  },
  render () {
    return h(Suspense, null, [])
  }
})
