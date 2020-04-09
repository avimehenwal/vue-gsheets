<template>
  <v-container>
    <h1>Mixin</h1>
    {{ records }}<br>
    {{ items }}
  </v-container>
</template>

<script>
import { sheetMixin } from '@/Mixins.js'

export default {
  mixins: [sheetMixin],
  data: () => ({
    SHEETPAGENUMBER: 3,
    COLUMNS: 6
  }),
  created () {
    console.log('Hello from COMPONENET')
  }
}
</script>
