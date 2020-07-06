<template>
  <div>
    <h1>{{ title }}</h1><br>
    <Button :href="wiki" text="wiki page" />
    <Button :href="manga" text="Read Manga" />
    <Button :href="fandom" text="Fandome site" />
    <Button :href="bg" text="Background Inspiration" />
    <Button :href="imdb" text="IMDB" />
    <Button :href="news" text="News" />
    <br><br>

    <h3>Seasons and Movies</h3>
    <div v-for="season in seasons" :key="season.text">
      <Check :text="season.name" :done="season.done" />
    </div>

    <v-btn class="mx-12 my-4" @click="loading = !loading">
      Toggle
    </v-btn>
    <v-skeleton-loader
      :loading="loading"
      :transition="transition"
      height="94"
      type="list-item-two-line"
    >
      <v-card>
        <v-card-title>Title</v-card-title>
        <v-card-text>Card Text</v-card-text>
      </v-card>
    </v-skeleton-loader>

    <!-- <Comments /> -->
  </div>
</template>

<script>
import Button from '@/components/button.vue'
// import Comments from '@/components/Comments.vue'
import Check from '@/components/Check.vue'
// import List from '@/components/List.vue'

export default {
  components: {
    Button,
    // Comments,
    Check
    // List
  },
  data: () => ({
    title: 'Hunter X Hunter',
    wiki: 'https://en.wikipedia.org/wiki/Hunter_%C3%97_Hunter',
    bg: 'Link',
    fandom: 'https://hunterxhunter.fandom.com/wiki/Hunterpedia',
    imdb: 'Link',
    news: 'https://news.google.com/search?q=hunter%20xhunter&hl=en-US&gl=US&ceid=US%3Aen',
    manga: 'Link',
    seasons: [
      { name: 'Hunter x Hunter Movie: Phantom Rogue', done: true },
      { name: 'Hunter x Hunter Movie: The Last Mission', done: true }
    ],
    loading: true,
    transition: 'fade-transition'
  })
}
</script>
