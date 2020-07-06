<template>
  <div>
    <h1>{{ title }}</h1>
    <br>

    <Button :href="wiki" text="wiki page" />
    <Button :href="manga" text="Read Manga" />
    <Button :href="fandom" text="Fandom site" />
    <Button :href="bg" text="Background Inspiration" />
    <Button :href="imdb" text="IMDB" />
    <Button :href="news" text="News" />
    <br>
    <br>

    <h3>Seasons and Movies</h3>
    <div v-for="season in seasons" :key="season">
      <Check :text="season.name" :done="season.done" />
    </div>

    <br>
    <ol>
      <li>Whoever dies heredies in vain, I will give you a reason worth dying</li>
    </ol>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/4PqQAqrVvdo"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />

    <br>
    <Comments />
  </div>
</template>

<script>
import Button from '@/components/button.vue'
import Comments from '@/components/Comments.vue'
import Check from '@/components/Check.vue'

export default {
  components: {
    Button,
    Comments,
    Check
  },
  data: () => ({
    title: 'Vinland Saga',
    manga: 'https://readvinlandsaga.com/',
    wiki: 'https://en.wikipedia.org/wiki/Vinland_Saga_(manga)',
    bg: 'https://en.wikipedia.org/wiki/Vinland',
    fandom: 'https://vinlandsaga.fandom.com/wiki/Vinland_Saga_(anime)',
    imdb: 'https://www.imdb.com/title/tt10233448/?ref_=vp_back',
    news: 'https://news.google.com/search?q=vinland%20saga',
    seasons: [
      { name: 'Vinland Saga: Season 1', done: true },
      { name: 'Vinland Saga: Season 2, Click News for more info', done: false }
    ]
  })
}
</script>
