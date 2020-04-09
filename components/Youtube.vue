<template>
  <iframe
    width="560"
    height="315"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    :src="url"
  />
</template>

<script>
export default {
  name: 'Youtube',
  props: {
    url: {
      type: String,
      default: 'N/A'
    }
  }
}
</script>
