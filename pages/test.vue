<template>
  <v-container>
    Records : {{ records }}<br>
    Columns : {{ columns }}<br>
    Headers : {{ headers }}<br>
    <v-list>
      <v-list-item v-for="item in items" :key="item.QUOTE">
        <v-list-item-content>
          <v-list-item-title>{{ item.AUTHOR }}</v-list-item-title>
          <v-list-item-subtitle> {{ item.QUOTE }}</v-list-item-subtitle>
          {{ item.COLOR }}
          {{ item.IMAGE }}
          <v-list-item-action> {{ item.URL }}</v-list-item-action>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    {{ items }}
  </v-container>
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
