<template>
  <v-checkbox v-model="done" :label="text" color="green" hide-details />
</template>

<script>
export default {
  name: 'Check',
  props: {
    text: {
      type: String,
      default: 'N/A'
    },
    done: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
</style>
