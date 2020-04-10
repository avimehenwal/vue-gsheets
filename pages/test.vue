<template>
  <div>
    <Comments :items="items" />
  </div>
</template>

<script>
import Comments from '@/components/Comments.vue'
import { commentsMixin } from '@/Mixins.js'

export default {
  components: {
    Comments
  },
  mixins: [commentsMixin]
}
</script>
