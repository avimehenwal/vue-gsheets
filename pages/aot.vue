<template>
  <div>
    <Button href="https://en.wikipedia.org/wiki/Attack_on_Titan" text="wiki page" />
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
  }
}
</script>
