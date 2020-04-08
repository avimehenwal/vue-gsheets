<template>
  <v-container>
    <div v-if="grid">
      <v-row>
        <v-col v-for="(index) in records" :key="index" cols="12" md="4">
          <v-card dark outlined :href="info[index]" hover :shaped="shaped">
            <v-img class="align-end" :alt="title[index]" :src="image[index]" />
            <v-card-title> {{ title[index] }} </v-card-title>
            <v-card-subtitle> {{ subtitle[index] }} </v-card-subtitle>
            <v-card-text>
              <!-- <div class="text-center mt-12"> -->
              <v-rating
                class="text-center"
                :value="Number(rating[index])"
                color="warning"
                background-color="grey darken-1"
                half-increments
                readonly
                :large="large"
              />
              <!-- </div> -->
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-switch v-model="shaped" label="Toggle shape" />
      <v-switch v-model="large" label="Toggle rating size" />
    </div>

    <div v-else>
      <v-card class="mx-auto" max-width="1000">
        <v-toolbar color="indigo" dark>
          <!-- <v-app-bar-nav-icon /> -->
          <v-toolbar-title>
            My Quarentine Anime List {{ records }}
          </v-toolbar-title>
          <v-spacer />
          <!-- <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          /> -->
        </v-toolbar>
        <v-list two-line subheader>
          <v-list-item v-for="index in records" :key="index" :href="info[index]">
            <v-list-item-avatar>
              <v-img :src="image[index]" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="title[index]" />
              <v-list-item-subtitle v-text="subtitle[index]" />
            </v-list-item-content>

            <!-- <v-list-item-icon>
              <v-rating
                class="text-center"
                :value="Number(rating[index])"
                color="warning"
                background-color="grey darken-1"
                half-increments
                readonly
                :large="large"
              />
            </v-list-item-icon> -->
            <!-- <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">
                  mdi-information
                </v-icon>
              </v-btn>
            </v-list-item-action> -->
          </v-list-item>
        </v-list>
      </v-card>
    </div>
    <v-switch v-model="grid" label="Toggle Grid/List view" />
  </v-container>
</template>

<script>
const YOURGOOGLESHEETCODE = '1FR9QOFhMZBG6GVcNTbBb3hc8wzG47t0-_BmZuzSBi8U'
const SHEETPAGENUMBER = '3'
const URL = 'https://spreadsheets.google.com/feeds/cells/' +
      YOURGOOGLESHEETCODE + '/' + SHEETPAGENUMBER + '/public/full?alt=json'

export default {
  async asyncData ({ $axios }) {
    const data = await $axios.$get(URL)
    const entry = data.feed.entry
    const columns = 5
    const records = (entry.length / columns) - 1
    const title = []
    const subtitle = []
    const rating = []
    const image = []
    const info = []
    for (let i = 0; i < entry.length; i += columns) {
      // entry[i].content.$t retrieves the content of each cell
      title.push(entry[i].content.$t)
      subtitle.push(entry[i + 1].content.$t)
      rating.push(entry[i + 2].content.$t)
      image.push(entry[i + 3].content.$t)
      info.push(entry[i + 4].content.$t)
    }
    return {
      records,
      columns,
      title,
      subtitle,
      rating,
      image,
      info
    }
  },
  data: () => ({
    shaped: false,
    large: false,
    grid: false,
    search: ''
  }),
  computed: {
    // ToDO: Add filtered search to list
    filteredList () {
      return this.title.filter((post) => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>
