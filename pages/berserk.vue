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

    <v-list>
      <v-list-item>
        Living day-to-day, extra long sword, brand of sacrifise
      </v-list-item>
      <v-list-item>
        Gutts: scar on nose - May who slayed hundred men
      </v-list-item>
      <v-list-item>
        Mercenery group: Band of the Hawk, led by resourceful General Griffith - The Grim Reaper of the Battlefield
      </v-list-item>
      <v-list-item>
        Egg of the king - Amulet
      </v-list-item>
      <v-list-item>
        100 year war: The kingdom of Midland | The Empire of Chuder
      </v-list-item>
      <v-list-item>
        Every sword belongs in it's sheath. Go back to the sheath your master holds
      </v-list-item>
      <v-list-item>
        Battle of Doldrey: 5k against 30k, vanguard=2k
      </v-list-item>
      <v-list-item>
        Griffit: White Phoenix knights
      </v-list-item>
      <v-list-item>
        Mercaneries Iron clad rule | Skull Knight | Sign of sacrifise
      </v-list-item>
    </v-list>

    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpOoiNI5uFEJZrn-4feLhH1Vo8_AZ9uZzbE7IMhr8BDlNXHGjRPG_4tM7FH_xZYH2seo4Q1NNT1mDE/pubhtml?widget=true&amp;headers=false" />
    <iframe src="https://www.youtube.com/embed/yJafSOtQaOo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
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
    wiki: 'https://en.wikipedia.org/wiki/Berserk:_The_Golden_Age_Arc',
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
      },
      {
        text: 'Wiki Quotes',
        link: 'https://en.wikiquote.org/wiki/Berserk_(anime)'
      }
    ]
  })
}
</script>
