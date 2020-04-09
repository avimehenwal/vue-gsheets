<template>
  <!-- <vue-core-video-player src="https://youtu.be/wMVp1G63WNU" /> -->
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/wMVp1G63WNU"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</template>

<script>
// import VueCoreVideoPlayer from 'vue-core-video-player'
// import VueYoutubePlayer from 'vue-youtube-player'

export default {
  components: {
    // VueCoreVideoPlayer,
    // VueYoutubePlayer
  },
  data: () => ({
    youtubeUrl: 'https://youtu.be/wMVp1G63WNU'
  })
}
</script>
