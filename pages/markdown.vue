<template>
  <v-container>
    {{ contents }}
  </v-container>
</template>

<script>
import Markdown from '@nuxt/markdown'

const markdown = `
# Hello world

[alert]
This is an alert
[/alert]
`

export default {
  data: () => ({
    markdown: '# Hello Avi',
    contents: ''
  }),
  mounted () {
    this.translate()
  },
  methods: {
    translate () {
      const md = new Markdown({ toc: false, sanitize: false })
      this.contents = md.toHTML(markdown)
    }
  }

}
</script>

<style>

</style>
