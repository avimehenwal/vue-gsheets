<template>
  <div>
    <v-row>
      <v-chip color="warning" outlined>
        {{ itemLength }}
      </v-chip>
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Filter images"
        single-line
        hide-details
      />
    </v-row>
    <v-row>
      <v-col v-for="(item, index) in filteredImages" :key="item.pathShort" cols="12" md="4">
        <v-card>
          <v-img
            class="white--text align-end"
            lazy-src="https://fakeimg.pl/100x100/?text=loading"
            :src="item.pathLong"
            :alt="item.pathShort"
          >
            <v-card-title>
              <v-btn fab outlined color="white"> {{ index }} </v-btn>
            </v-card-title>
            <v-card-text> {{ item.pathShort }} </v-card-text>
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
    <Comments />
  </div>
</template>

<script>
import Comments from '@/components/Comments.vue'

export default {
  components: {
    Comments
  },
  data () {
    return {
      images: [],
      search: '' // start with empty string and not null
    }
  },
  computed: {
    itemLength () {
      return this.filteredImages.length
    },
    filteredImages () {
      return this.images.filter((imageObj) => {
        return imageObj.pathShort.match(this.search)
      })
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
