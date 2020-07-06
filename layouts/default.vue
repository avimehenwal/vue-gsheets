<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item two-line to="/">
          <v-list-item-avatar> <NewLogo /> </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Fan Animae project</v-list-item-title>
            <v-list-item-subtitle>v1.1.8</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-divider />

        <v-list-item target="_blank" href="https://www.linkedin.com/in/avimehenwal/">
          <v-list-item-avatar>
            <v-img src="https://raw.githubusercontent.com/avimehenwal/avimehenwal/master/Images/avimehenwal.jpg" />
          </v-list-item-avatar>
          <v-list-item-action>
            <v-list-item-title>Avi Mehenwal</v-list-item-title>
            <v-list-item-subtitle>Say hello / Contact me</v-list-item-subtitle>
          </v-list-item-action>
        </v-list-item>
        <v-list-item href="https://www.buymeacoffee.com/F1j07cV" target="_blank">
          <v-list-item-content>
            <v-img
              alt="Buy Me A Coffee"
              src="https://cdn.buymeacoffee.com/buttons/default-white.png"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <nuxt-link to="/">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <v-spacer />
      <NewLogo />

      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer" >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <!-- Footer -->
    <img alt="Vuetify Logo" src="/wave.svg">
  </v-app>
</template>

<script>
import NewLogo from '@/components/NewLogo.vue'
export default {
  components: {
    NewLogo
  },
  data () {
    return {
      clipped: true,
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'My Animes',
          to: '/'
        },
        {
          icon: 'mdi-file-image',
          title: 'Images',
          to: '/image'
        },
        {
          icon: 'mdi-comment-quote',
          title: 'Quotes',
          to: '/quotes'
        },
        {
          icon: 'mdi-chart-timeline',
          title: 'MHA Arcs Timeline',
          to: '/mha'
        },
        {
          icon: 'mdi-search-web',
          title: 'Resources',
          to: '/resources'
        },
        {
          icon: 'mdi-format-list-bulleted-square',
          title: 'Test',
          to: '/test'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'My Anime Fan Project'
    }
  }
}
</script>
