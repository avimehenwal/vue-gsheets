<template>
  <v-container>
    <!-- # of items loaded panel -->
    <v-row>
      <v-alert dense text outlined type="success">
        <strong> {{ records }} </strong> Records loaded ...
      </v-alert>
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Filter Cards"
        single-line
        hide-details
      />
    </v-row>

    <!-- Grid card layout -->
    <div v-if="grid">
      <v-row>
        <v-col v-for="(item) in items" :key="item.TITLE" cols="12" :md="cards">
          <Card
            :image="item.IMAGE"
            :href="item.EXTERNAL"
            :title="item.TITLE"
            :desc="item.SUBTITLE"
            :rating="item.RATING"
            :to="item.TO"
            :large="large"
            :shaped="shaped"
          />
        </v-col>
      </v-row>

      <!-- Reactive card controls on UI -->
      <v-row>
        <v-col cols="12" xs="6" md="2">
          <v-switch v-model="shaped" dense label="Toggle shape" />
        </v-col>
        <v-col cols="12" xs="6" md="2">
          <v-switch v-model="large" dense label="Toggle rating" />
        </v-col>
        <v-col cols="12" xs="6" md="2">
          <v-switch v-model="grid" dense label="Toggle view" />
        </v-col>
        <v-col cols="12" xs="6" md="2">
          <v-select
            v-model="numCards"
            :items="numCardsValues"
            label="Cards"
            outlined
            dense
          />
        </v-col>
      </v-row>
    </div>

    <!-- Listview layout -->
    <div v-else>
      <v-card class="mx-auto" max-width="1000">
        <v-toolbar color="indigo" dark>
          <!-- <v-app-bar-nav-icon /> -->
          <v-toolbar-title>
            Quarentine Anime List
          </v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-list two-line subheader>
          <v-list-item v-for="item in items" :key="item.TITLE" :href="item.TO">
            <v-list-item-avatar>
              <v-img :src="item.IMAGE" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="item.TITLE" />
              <v-list-item-subtitle v-text="item.SUBTITLE" />
              <v-list-item-action>
                <v-btn text :href="item.EXTERNAL">
                  details
                </v-btn>
              </v-list-item-action>
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

    <!-- Comments component -->
    <Comments />
  </v-container>
</template>

<script>
import { sheetMixin } from '@/Mixins.js'
import Comments from '@/components/Comments.vue'
import Card from '@/components/Card.vue'

export default {
  components: {
    Comments,
    Card
  },
  mixins: [sheetMixin],
  data: () => ({
    SHEETPAGENUMBER: 3,
    COLUMNS: 6,
    shaped: false,
    large: false,
    grid: true,
    numCards: 4,
    numCardsValues: [1, 2, 3, 4, 5, 6],
    search: ''
  }),
  computed: {
    itemsLength () {
      return this.filteredCards.length
    },
    filteredCards () {
      // TypeError: Cannot read property 'match' of undefined
      return this.items.filter((imageObj) => {
        return imageObj.pathShort.match(this.search)
      })
    },
    cards () {
      return (12 / this.numCards)
    }
  }
}
</script>
