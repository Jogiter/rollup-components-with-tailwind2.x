<template>
  <h1 class="text-base bg-blue-500 text-red-500 border-gray-500 border-solid border demo">Hello {{ name }}</h1>
</template>

<script>
export default {
  data() {
    return { name: 'Jane Doe' }
  }
}
</script>

<style scoped>
.demo {
  @apply leading-snug font-semibold;
}
</style>
