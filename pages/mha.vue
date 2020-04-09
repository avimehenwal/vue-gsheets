<template>
  <div>
    <div>
      <v-chip outlined color="warning" large>
        {{ records }}
      </v-chip>
      <Button text="wiki page" href="https://en.wikipedia.org/wiki/My_Hero_Academia" />
      <Button text="read manga" href="https://w7.myheromanga.com/" />
    </div>
    <!-- MANGA details -->
    <v-container class="right">
      <div>My favourite OST music</div>
      <iframe
        width="560"
        height="315"
        :src="youtube"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </v-container>

    <v-timeline
      align-top
      :dense="$vuetify.breakpoint.smAndDown"
      :reverse="reverse"
      :small="small"
    >
      <v-timeline-item
        v-for="item in items"
        :key="item.title"
        :color="item.color"
        :icon="item.icon"
        fill-dot
        large
      >
        <span slot="opposite">
          <v-chip color="primary"> {{ item.tag }} </v-chip>
        </span>
        <v-card :color="item.color" dark>
          <v-card-title class="title">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="white text--primary">
            <p class="black--text">
              {{ item.text }}
            </p>
            <v-btn :color="item.color" class="mx-0" outlined>
              {{ item.button }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-switch v-model="reverse" label="Toggle direction" />
    <v-switch v-model="small" label="Toggle small" />
  </div>
</template>

<script>
import Button from '@/components/button.vue'
// import Youtube from '@/components/Youtube.vue'

const YOURGOOGLESHEETCODE = '1FR9QOFhMZBG6GVcNTbBb3hc8wzG47t0-_BmZuzSBi8U'
const SHEETPAGENUMBER = '1'
const URL = 'https://spreadsheets.google.com/feeds/cells/' +
      YOURGOOGLESHEETCODE + '/' + SHEETPAGENUMBER + '/public/full?alt=json'

export default {
  components: {
    // Youtube,
    Button
  },
  async asyncData ({ $axios }) {
    const data = await $axios.$get(URL)
    const entry = data.feed.entry
    const columns = 6
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
  },
  data: () => ({
    reverse: true,
    small: false,
    youtube: 'https://www.youtube.com/embed/K9840msu1CM'
  })
}
</script>
