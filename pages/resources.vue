<template>
  <v-container>
    <h1>{{ title }}</h1> <br />

    <v-card class="mx-auto" max-width="100%" tile>
      <div v-for="item in resources" :key="item">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <a :href="item.link" target="_blank">
                {{ item.text }}
              </a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-card>

    <br />
    <v-divider />
    <Comments />
  </v-container>
</template>

<script>
// import Button from '@/components/button.vue';
// import Comments from '@/components/Comments.vue';
// import Check from '@/components/Check.vue';

export default {
  components: {
    // Button,
    // Comments,
    // Check
  },
  data: () => ({
    title: 'Anime Resources',
    resources: [
      {
        text: 'Most Popular Anime Movies and TV Shows',
        link: 'https://www.imdb.com/search/keyword/?keywords=anime'
      },
      {
        text: 'viz Schonen Jump - weekly anime magazine',
        link: 'https://www.viz.com/shonenjump'
      },
      {
        text: 'List of Japanese manga magazines by circulation',
        link: 'https://en.wikipedia.org/wiki/List_of_Japanese_manga_magazines_by_circulation'
      }
    ]
  })
}
</script>
