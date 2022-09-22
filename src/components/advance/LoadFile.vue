<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoadFile',
  data() {
    return {
      content: ''
    }
  },
  methods: {
    load() {
      const self = this;
      fetch("vite.svg")
        .then(res => res.text())
        .then(str => {
          self.content = str;
        })
    }
  }
})
</script>

<template>
  <div>
    <h3>Testing if load a file via fetch is possible (as in file://)</h3>
    <div>
      <button @click="load">Load something</button>
    </div>
    <div v-html="content">
    </div>
  </div>
</template>
