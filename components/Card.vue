<template>
  <div>
    <v-btn class="mx-12 my-4" @click="loading = !loading">
      Toggle
    </v-btn>

    <v-skeleton-loader
      :loading="loading"
      :transition="transition"
      type="article"
    >
      <v-card>
        <v-img src="/placeholder.svg" />
        <v-card-title>Title</v-card-title>
        <v-card-subtitle>Sub title</v-card-subtitle>
        <v-card-text>Card Text</v-card-text>
        <v-card-actions>
          <v-btn>btn 1</v-btn><v-btn>btn 2</v-btn>
        </v-card-actions>
      </v-card>
    </v-skeleton-loader>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data: () => ({
    loading: true,
    transition: 'fade-transition'
  }),
  mounted () {
    this.wait()
  },
  methods: {
    wait () {
      setTimeout(this.stop_loading, 2000)
    },
    stop_loading () {
      this.loading = false
    }
  }
}
</script>

<style>
</style>
