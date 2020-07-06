<template>
  <div>
    <!-- <v-btn class="mx-12 my-4" @click="loading = !loading">
      Toggle
    </v-btn> -->
    <v-skeleton-loader
      :loading="loading"
      :transition="transition"
      type="article"
    >
      <v-card :href="to" dark outlined hover :shaped="shaped">
        <!-- image  lazy-src="/placeholder.svg" not needed here -->
        <v-img
          lazy-src="/placeholder.svg"
          aspect-ratio="1"
          :alt="title"
          :src="image"
        />
        <v-card-title>
          {{ title }}
        </v-card-title>
        <v-card-subtitle>
          {{ desc }}
          <span v-if="to != '/'">
            <v-icon class="float-right" small color="success darken-1">
              mdi-circle
            </v-icon>
          </span>
        </v-card-subtitle>
        <v-card-text>Card Text</v-card-text>
        <v-card-actions>
          <v-rating
            class="text-center"
            color="warning"
            background-color="grey darken-1"
            half-increments
            readonly
            :large="large"
            :value="Number(rating)"
          />
          <v-btn
            class="float-right"
            icon
            color="warning"
            :href="href"
            target="_blank"
          >
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-skeleton-loader>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    image: {
      type: String,
      default: 'url'
    },
    href: {
      type: String,
      default: '/'
    },
    to: {
      type: String,
      default: '/'
    },
    title: {
      type: String,
      default: 'Avi M'
    },
    desc: {
      type: String,
      default: 'bla bla bla'
    },
    rating: {
      type: String,
      default: '1'
    },
    large: {
      type: Boolean,
      default: false
    },
    shaped: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    loading: true,
    transition: 'fade-transition'
  }),
  mounted () {
    this.wait()
  },
  methods: {
    wait () {
      setTimeout(this.stop_loading, 2500)
    },
    stop_loading () {
      this.loading = false
    }
  }
}
</script>

<style>
</style>
