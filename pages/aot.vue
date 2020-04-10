<template>
  <div>
    <Button href="https://en.wikipedia.org/wiki/Attack_on_Titan" text="wiki page" />
    <Comments :items="items" />
  </div>
</template>

<script>
import Button from '@/components/button.vue'
import Comments from '@/components/Comments.vue'
import { commentsMixin } from '@/Mixins.js'

export default {
  components: {
    Button,
    Comments
  },
  mixins: [commentsMixin]
}
</script>
