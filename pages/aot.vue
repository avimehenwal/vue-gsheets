<template>
  <div>
    <Button :href="wiki" text="wiki page" />
    <Button :href="manga" text="Read Manga" />
    <br><br>
    <h3>Highlights</h3>
    <Check text="upto date with manga" />
    <Check text="Season 1" />
    <Check text="Season 2" />
    <Check text="Season 3 Part 1" />
    <Check text="Season 3 Part 2" />

    <br><v-divider />
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
    manga: 'https://ww2.attack-on-titan.com/',
    wiki: 'https://en.wikipedia.org/wiki/Attack_on_Titan'
  })
}
</script>
