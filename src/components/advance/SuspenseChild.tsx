import { defineComponent } from 'vue'

const fakeAsyncRes = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Here is what you asked for')
    }, 5000)
  })
}

export default defineComponent({
  name: 'SuspenseChild',
  async setup () {
    const res = await fakeAsyncRes()
    return {
      res
    }
  },
  render () {
    return (
      <div>
        {this.res}
      </div>
    )
  }
})
