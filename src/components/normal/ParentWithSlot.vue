<script setup lang="ts">
export default {
  data() {
    return {
      key: 'me here',
      data: {
        txt: 'here',
        num: 1
      }
    }
  }
}
</script>

<template>
  <div style="border: 1px solid dashed; display: block;">
    here is the slot:
    <div style="background-color: green">
      <slot :data="data" />
    </div>
    <br />
  </div>
</template>