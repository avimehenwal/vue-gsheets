<template>
  <v-container>
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
    <v-divider />
    <Comments />
  </v-container>
</template>

<script>
import { sheetMixin } from '@/Mixins.js'
import Comments from '@/components/Comments.vue'

export default {
  components: {
    Comments
  },
  mixins: [sheetMixin],
  data: () => ({
    SHEETPAGENUMBER: 2,
    COLUMNS: 5
  })
}
</script>
