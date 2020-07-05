<template>
  <div>
    <Button :href="wiki" text="wiki page" />
    <Button :href="manga" text="Read Manga" />
    <Button :href="fandom" text="Fandome site" />
    <Button :href="bg" text="Background Inspiration" />
    <br><br>

    <h3>Seasons and Movies</h3>
    <div v-for="season in seasons" :key="season">
      <div v-if="season == 'The Seven Deadly Sins: Anger\'s Judgement'">
        <Check :text="season" :done="false" />
      </div>
      <div v-else>
        <Check :text="season" />
      </div>
    </div><br>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/3X_TC0m6kJQ"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen />
    <br><br><v-divider /><br>
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
    manga: 'https://ww3.read7deadlysins.com/',
    wiki: 'https://en.wikipedia.org/wiki/List_of_The_Seven_Deadly_Sins_episodes',
    bg: 'https://en.wikipedia.org/wiki/Seven_deadly_sins',
    fandom: 'https://nanatsu-no-taizai.fandom.com/wiki/Nanatsu_no_Taizai_Wiki',
    seasons: [
      'The Seven Deadly Sins',
      'The Seven Deadly Sins: Signs of Holy War',
      'The Seven Deadly Sins: Revival of The Commandments',
      'The Seven Deadly Sins: Wrath of the Gods',
      'The Seven Deadly Sins: Anger\'s Judgement',
      'The Seven Deadly Sins the Movie: Prisoners of the Sky'
    ]
  })
}
</script>
