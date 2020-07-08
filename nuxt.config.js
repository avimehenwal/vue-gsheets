import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  components: true,
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // file do not exists
    // {
    //   src: '~/plugins/vue-chart.js', mode: 'client'
    // }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/google-analytics',
    '@nuxtjs/eslint-module',
    '@nuxt/components',
    '@nuxtjs/vuetify',
    '@nuxtjs/gtm'
  ],
  googleAnalytics: {
    id: process.env.GA_ID || '',
    debug: {
      enabled: true,
      sendHitTask: true
    }
  },
  gtm: {
    id: process.env.GTM_ID || ''
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxt/http'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  content: {
    // Options
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    githubToken: '42cdf9fd55abf41d24f34c0f8a4d9ada5f9e9b93'
  }
}
