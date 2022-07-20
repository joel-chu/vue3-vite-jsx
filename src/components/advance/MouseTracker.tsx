// try to re-implement the Mouse Tracker in JSX 
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    update(e: {pageX: number, pageY: number}) {
      this.x = e.pageX
      this.y = e.pageY
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.update)
  },
  unmounted() {
    window.removeEventListener('mousemove', this.update)
  },
  render() {
    return (
      <>
        { this.$slots.default ? this.$slots.default({ x: this.x, y: this.y }) : ''}
      </>
    )
  }
})