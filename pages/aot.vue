<template>
  <div>
    <Button :href="wiki" text="wiki page" />
    <Button :href="manga" text="Read Manga" />
    <Comments />
  </div>
</template>

<script>
import Button from '@/components/button.vue'
import Comments from '@/components/Comments.vue'

export default {
  components: {
    Button,
    Comments
  },
  data: () => ({
    manga: 'https://ww2.attack-on-titan.com/',
    wiki: 'https://en.wikipedia.org/wiki/Attack_on_Titan'
  })
}
</script>
