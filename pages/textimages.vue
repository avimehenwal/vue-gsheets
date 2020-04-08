<template>
  <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <v-icon size="100" class="float-left">mdi-format-quote-close</v-icon>
          <v-container class="text-center display-3">
            {{ slide.quote }} Slide
          </v-container>
          ~{{ slide.author }}
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: [
        {
          quote: 'I will tell you something which you already know',
          author: 'All Might'
        },
        {
          quote: 'You can not help the things your heart longs for',
          author: ''
        },
        {
          quote: 'Meddling when you dont have to, is the essence of being a hero',
          author: 'All Might'
        }
      ]
    }
  }
}
</script>
