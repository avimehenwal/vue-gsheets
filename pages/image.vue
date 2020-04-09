<template>
  <div>
    {{ itemLength }}
    <v-row>
      <v-col v-for="(item, index) in images" :key="item.pathLong" cols="12" md="4">
        <v-card>
          <v-img class="white--text align-end" :src="item.pathLong">
            <v-card-title>
              <v-btn fab outlined color="white">
                {{ index }}
              </v-btn>
            </v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in images"
        :key="i"
        :src="item.pathLong"
        reverse-transition="fade-transition"
        transition="fade-transition"
      />
    </v-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: []
    }
  },
  computed: {
    itemLength () {
      return this.images.length
    }
  },
  mounted () {
    // use webpack to collect files
    this.importAll(require.context('@/assets/images/', true, /\.png$/))
  },
  methods: {
    importAll (r) {
      r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })))
    }
  }
}
</script>
