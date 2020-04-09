<template>
  <v-container>
    <img src="@/assets/animeListImages/107235.jpg">
    <img :src="image">
  </v-container>
</template>

<script>

export default {
  components: {
  },
  data: () => ({
    youtubeUrl: 'https://youtu.be/wMVp1G63WNU',
    image: '_nuxt/assets/animeListImages/107235.jpg'
  })
}
</script>
