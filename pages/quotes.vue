<template>
  <!-- <v-container>
    Records : {{ records }}
    <div v-for="index in records" :key="index">
      {{ color[index] }}
      {{ author[index] }}
      {{ quote[index] }}
      {{ image[index] }}
      {{ url[index] }}
    </div>
  </v-container> -->

  <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="index in records" :key="index">
      <v-sheet :color="color[index]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <!-- <v-icon size="100" class="float-left">mdi-format-quote-close</v-icon> -->
          <v-container class="text-center display-3">
            {{ quote[index] }}
          </v-container>
          <v-btn outlined text :href="url[index]">
            {{ author[index] }}
          </v-btn>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
const YOURGOOGLESHEETCODE = '1FR9QOFhMZBG6GVcNTbBb3hc8wzG47t0-_BmZuzSBi8U'
const SHEETPAGENUMBER = '2'
const URL = 'https://spreadsheets.google.com/feeds/cells/' +
      YOURGOOGLESHEETCODE + '/' + SHEETPAGENUMBER + '/public/full?alt=json'

export default {
  async asyncData ({ $axios }) {
    const data = await $axios.$get(URL)
    const entry = data.feed.entry
    const columns = 5
    const records = (entry.length / columns) - 1
    const color = []
    const author = []
    const quote = []
    const image = []
    const url = []
    for (let i = 0; i < entry.length; i += columns) {
      // entry[i].content.$t retrieves the content of each cell
      color.push(entry[i].content.$t)
      author.push(entry[i + 1].content.$t)
      quote.push(entry[i + 2].content.$t)
      image.push(entry[i + 3].content.$t)
      url.push(entry[i + 4].content.$t)
    }
    return {
      records,
      columns,
      color,
      author,
      quote,
      image,
      url
    }
  }
}
</script>
