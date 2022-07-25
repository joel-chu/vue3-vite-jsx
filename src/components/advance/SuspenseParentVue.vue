<script setup>
import SuspendChild from './SuspenseChild'

</script>

<template>
  <Suspense>
    <h4>Suspend parent vue</h4>
    <SuspenseChild />
    <!-- loading state via #fallback slot -->
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>
