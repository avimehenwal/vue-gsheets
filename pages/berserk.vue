<template>
  <div>
    <header>
      <h1>{{ title }}</h1><br>
      <Button href="/" text="Home" />
      <Button :href="wiki" text="wiki page" />
      <Button :href="manga" text="Read Manga" />
      <Button :href="fandom" text="Fandome site" />
      <Button :href="bg" text="Background Inspiration" />
      <Button :href="imdb" text="IMDB" />
      <Button :href="news" text="News" />
      <br><br>
    </header>

    <h3>Seasons and Movies</h3>
    <div v-for="season in seasons" :key="season">
      <Check :text="season.name" :done="season.done" />
    </div>
    <List :items="items" />

    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpOoiNI5uFEJZrn-4feLhH1Vo8_AZ9uZzbE7IMhr8BDlNXHGjRPG_4tM7FH_xZYH2seo4Q1NNT1mDE/pubhtml?widget=true&amp;headers=false" />

    <br><v-divider />
    <Comments />
  </div>
</template>

<script>
import Button from '@/components/button.vue'
import Comments from '@/components/Comments.vue'
import Check from '@/components/Check.vue'
import List from '@/components/List.vue'

export default {
  components: {
    Button,
    Comments,
    Check,
    List
  },
  data: () => ({
    title: 'Berserk',
    wiki: 'https://en.wikipedia.org/wiki/Berserk_(manga)',
    bg: 'https://dictionary.cambridge.org/dictionary/english/berserk',
    fandom: 'https://berserk.fandom.com/wiki/Berserk_(Manga)',
    imdb: 'https://www.imdb.com/title/tt0318871/',
    news: 'https://news.google.com/search?q=berserk%20anime&hl=en-US&gl=US&ceid=US%3Aen',
    manga: 'Link',
    seasons: [
      { name: 'Vinland Saga: Season 1', done: true }
    ],
    items: [
      {
        text: 'Wortschatz',
        link: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTpOoiNI5uFEJZrn-4feLhH1Vo8_AZ9uZzbE7IMhr8BDlNXHGjRPG_4tM7FH_xZYH2seo4Q1NNT1mDE/pubhtml?gid=494044456&single=true'
      }
    ]
  })
}
</script>
