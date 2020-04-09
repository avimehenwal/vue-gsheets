<template>
  <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="item in items" :key="item.QUOTE">
      <v-sheet :color="item.COLOR" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <!-- <v-icon size="100" class="float-left">mdi-format-quote-close</v-icon> -->
          <v-container class="text-center display-3">
            {{ item.QUOTE }}
          </v-container>
          <v-btn outlined text :href="item.URL">
            {{ item.AUTHOR }}
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
    const headers = []
    const items = []
    for (let i = 0; i < columns; i++) {
      headers.push(entry[i].content.$t)
    }
    for (let i = headers.length; i < entry.length; i += columns) {
      const item = {}
      for (let j = 0; j < headers.length; j++) {
        // entry[i].content.$t retrieves the content of each cell
        item[headers[j]] = entry[i + j].content.$t
      }
      items.push(item)
    }
    return {
      records,
      columns,
      items,
      headers
    }
  }
}
</script>
