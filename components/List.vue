<template>
  <div>
    <br>
    <v-card class="mx-auto" max-width="100%" tile>
      <div v-for="item in items" :key="item">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <a :href="item.link" target="_blank">
                {{ item.text }}
              </a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-card>
    <br>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      default () {
        return [
          {
            link: '',
            text: 'text'
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
