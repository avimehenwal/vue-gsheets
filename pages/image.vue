<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in images"
      :key="i"
      :src="item.pathLong"
      reverse-transition="fade-transition"
      transition="fade-transition"
    />
    {{ item }}
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      images: []
    }
  },
  mounted () {
    this.importAll(require.context('@/assets/images/', true, /\.png$/))
  },
  methods: {
    importAll (r) {
      r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })))
    }
  }
}
</script>
