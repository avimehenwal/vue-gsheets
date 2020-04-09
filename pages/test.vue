<template>
  <v-container>
    <v-card href="https://github.com/avimehenwal/fan-gallery/blob/develop/pages/index.vue">
      <h1>Mixin</h1>
      <v-btn
        class="float-right"
        icon
        color="warning"
        :href="link"
        target="_blank"
      >
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    SHEETPAGENUMBER: 3,
    COLUMNS: 6,
    link: 'https://vuejs.org/v2/guide/forms.html'
  })
}
</script>
