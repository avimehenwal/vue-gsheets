<template>
  <div>
    <h1>{{ title }}</h1><br>
    <Button :href="wiki" text="wiki page" />
    <Button :href="manga" text="Read Manga" />
    <Button :href="fandom" text="Fandom site" />
    <Button :href="bg" text="Background Inspiration" />
    <Button :href="imdb" text="IMDB" />
    <Button :href="news" text="News" />
    <br><br>

    <h3>Seasons and Movies</h3>
    <div v-for="season in seasons" :key="season.text">
      <Check :text="season.name" :done="season.done" />
    </div>

    <List :items="items" />
    <!-- Insert markdown content -->
    <p>
      Water Breathing techniques | Fighting forms | Total concentration Constant Technique
      Increase breathing capacity | Blood deamon Art
      Brace your core | All it has to be hammered into your flash
      Hanafuda Earrings | It will cost you your Humanity
      Deamon slayer core | 9 Pillars | 10 ranks
      12 Mooons | 6 upper moons | 6 lower moons
      Hinokami Kagura | Flame Breathing != Fire Breathing
    </p>
    <v-card>
      <v-card-title>Water Breathing Techniques</v-card-title>
      <v-card-text>
        <ol>
          <li>1. Water Surface slash</li>
          <li>2. Water wheel</li>
          <li>3. Flowing Dance/Dance Of The Rapid Current</li>
          <li>4. Striking Tide</li>
          <li>6. Twisting Whirlpool</li>
          <li>7. Drop Ripple Thrust-Curve/Piercing Rain Drop</li>
          <li>8. Waterfall Basin/Waterfall Jar</li>
        </ol>
      </v-card-text>
    </v-card>

    <!-- <Comments /> -->
  </div>
</template>

<script>
import Button from '@/components/button.vue'
// import Comments from '@/components/Comments.vue'
import Check from '@/components/Check.vue'
import List from '@/components/List.vue'

export default {
  components: {
    Button,
    // Comments,
    Check,
    List
  },
  data: () => ({
    title: 'Demon Slayer: Kimetsu no Yaiba',
    wiki: 'https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba',
    bg: 'https://www.viz.com/demon-slayer-kimetsu-no-yaiba',
    fandom: 'https://kimetsu-no-yaiba.fandom.com/wiki/Kimetsu_no_Yaiba_Wiki',
    imdb: 'https://www.imdb.com/title/tt9335498/',
    news: 'https://demonslayer-anime.com/',
    manga: 'https://demonslayer-anime.com/risshihen/comic/',
    seasons: [
      { name: 'Demon Slayer: Season 1', done: true }
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
