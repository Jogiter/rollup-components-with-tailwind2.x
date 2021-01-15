<template>
  <h1 class="text-base bg-blue-500 text-red-500 cursor-pointer">Hello {{ name }}</h1>
</template>

<script lang="ts">
// @ts-ignore
import Vue, { VueConstructor } from 'vue'

export default Vue.extend({
  data() {
    return { name: 'Jane Doe' }
  }
})
</script>

<style scoped>
h1 {
  color: red;
}
</style>
