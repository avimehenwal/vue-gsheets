<template>
  <div>
    <h1>Hello MD</h1>
    <nuxt-content :document="doc" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const doc = await $content(params.slug || 'index').fetch()
    return { doc }
  }
}
</script>

<style>
</style>
