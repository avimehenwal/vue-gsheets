<template>
  <v-container>
    <v-alert dense text outlined type="success">
      <strong> {{ records }} </strong> Records loaded ...
    </v-alert>
    <div v-if="grid">
      <v-row>
        <v-col v-for="(item) in items" :key="item.TITLE" cols="12" md="4">
          <v-card dark outlined hover :shaped="shaped" :to="item.TO">
            <v-img
              :alt="item.TITLE"
              :src="item.IMAGE"
              lazy-src="https://picsum.photos/id/1011/100/60"
              aspect-ratio="1"
            />
            <v-card-title> {{ item.TITLE }} </v-card-title>
            <v-card-subtitle>
              {{ item.SUBTITLE }}
              <span v-if="item.TO != '/'">
                <v-icon class="float-right" small color="success darken-1">
                  mdi-circle
                </v-icon>
              </span>
            </v-card-subtitle>
            <client-only placeholder="Loading...">
              <v-card-actions>
                <v-rating
                  class="text-center"
                  color="warning"
                  background-color="grey darken-1"
                  half-increments
                  readonly
                  :large="large"
                  :value="Number(item.RATING)"
                />
                <v-btn text small :href="item.EXTERNAL">
                  details
                </v-btn>
              </v-card-actions>
            </client-only>
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
            Quarentine Anime List
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
    <v-switch v-model="grid" label="Toggle Grid/List view" />
  </v-container>
</template>

<script>
import { sheetMixin } from '@/Mixins.js'

export default {
  mixins: [sheetMixin],
  data: () => ({
    SHEETPAGENUMBER: 3,
    COLUMNS: 6,
    shaped: false,
    large: false,
    grid: true,
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
