<template>
  <v-container>
    <div>
      <v-timeline :align-top="alignTop" :dense="dense" :reverse="reverse">
        <v-timeline-item
          v-for="n in items"
          :key="n.Timestamp"
          :fill-dot="fillDot"
          :hide-dot="hideDot"
          :icon="icon ? 'mdi-star' : ''"
          :icon-color=" iconColor ? 'deep-orange' : ''"
          :left="left"
          :right="right"
          :small="small"
        >
          <template v-slot:icon>
            <v-avatar v-if="avatar">
              <img src="http://i.pravatar.cc/64">
            </v-avatar>
          </template>
          <span slot="opposite"> {{ humanRedableTime(n.Timestamp) }} </span>
          <v-card class="elevation-2">
            <v-card-title class="headline">
              {{ n.Author }}
              <v-avatar color="red" class="ml-7">
                <span class="white--text headline">CJ</span>
              </v-avatar>
            </v-card-title>
            <v-card-text>
              {{ n.Comment }}
            </v-card-text>
            <v-card-actions> {{ n.Helpful }} </v-card-actions>
          </v-card>
        </v-timeline-item>
      </v-timeline>

      <v-radio-group row wrap>
        <v-switch v-model="alignTop" label="Toggle align-top" class="mx-4" />
        <v-switch v-model="dense" label="Toggle dense" class="mx-4" />
        <v-switch v-model="fillDot" label="Toggle fill-dot" class="mx-4" />
        <v-switch v-model="hideDot" label="Toggle hide-dot" class="mx-4" />
        <v-switch v-model="icon" label="Toggle icon" class="mx-4" />
        <v-switch v-model="avatar" label="Toggle avatar" class="mx-4" />
        <v-switch v-model="iconColor" label="Toggle icon color" class="mx-4" />
        <v-switch v-model="reverse" label="Toggle reverse" class="mx-4" />
        <v-switch v-model="left" label="Toggle left" class="mx-4" />
        <v-switch v-model="right" label="Toggle right" class="mx-4" />
        <v-switch v-model="small" label="Toggle small" class="mx-4" />
      </v-radio-group>
    </div>
  </v-container>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Comments',
  props: {
    items: Array
  },
  data: () => ({
    alignTop: true,
    avatar: false,
    dense: false,
    fillDot: false,
    hideDot: false,
    icon: false,
    iconColor: false,
    left: false,
    reverse: false,
    right: true,
    small: true
  }),
  methods: {
    humanRedableTime (timestamp) {
      return moment(timestamp).format('MMM Do YY')
    }
  }
}
</script>
