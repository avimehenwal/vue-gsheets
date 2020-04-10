<template>
  <div>
    <Comments :items="items"/>
  </div>
</template>

<script>
import Comments from '@/components/Comments.vue'
import { sheetMixin } from '@/Mixins.js'

export default {
  mixins: [sheetMixin],
  components: {
    Comments
  },
  data: () => ({
    link: 'https://vuejs.org/v2/guide/forms.html',
    SHEETPAGENUMBER: 1,
    COLUMNS: 4,
    YOURGOOGLESHEETCODE: '10eubbEN9rSfGPjALZnP83DR7hKasdf-mThrxzjYksLY'
  })
}
</script>
