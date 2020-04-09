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

    <v-timeline
      align-top
      :dense="$vuetify.breakpoint.smAndDown"
      :reverse="reverse"
      :small="small"
    >
      <!-- <div v-for="index in records" :key="index">
      {{ index }}
      {{ color[index] }}
      {{ icon[index] }}
      {{ tag[index] }}
      {{ title[index] }}
      {{ text[index] }}
      {{ button[index] }}
    </div> -->

      <v-timeline-item
        v-for="index in records"
        :key="index"
        :color="color[index]"
        :icon="icon[index]"
        fill-dot
        large
      >
        <span slot="opposite">
          <v-chip color="primary"> {{ tag[index] }} </v-chip>
        </span>
        <v-card :color="color[index]" dark>
          <v-card-title class="title">
            {{ title[index] }}
          </v-card-title>
          <v-card-text class="white text--primary">
            <p class="black--text">
              {{ text[index] }}
            </p>
            <v-btn :color="color[index]" class="mx-0" outlined>
              {{ button[index] }}
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

const YOURGOOGLESHEETCODE = '1FR9QOFhMZBG6GVcNTbBb3hc8wzG47t0-_BmZuzSBi8U'
const SHEETPAGENUMBER = '1'
const URL = 'https://spreadsheets.google.com/feeds/cells/' +
      YOURGOOGLESHEETCODE + '/' + SHEETPAGENUMBER + '/public/full?alt=json'

export default {
  components: {
    Button
  },
  async asyncData ({ $axios }) {
    const data = await $axios.$get(URL)
    const entry = data.feed.entry
    const columns = 6
    const records = (entry.length / columns) - 1
    const color = []
    const icon = []
    const tag = []
    const title = []
    const text = []
    const button = []
    for (let i = 0; i < entry.length; i += columns) {
      // entry[i].content.$t retrieves the content of each cell
      color.push(entry[i].content.$t)
      icon.push(entry[i + 1].content.$t)
      tag.push(entry[i + 2].content.$t)
      title.push(entry[i + 3].content.$t)
      text.push(entry[i + 4].content.$t)
      button.push(entry[i + 5].content.$t)
    }
    return {
      records,
      columns,
      color,
      icon,
      tag,
      title,
      text,
      button
    }
  },
  data: () => ({
    reverse: true,
    small: false
  })
}
</script>
