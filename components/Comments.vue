<template>
  <div>
    <br>
    <v-divider />
    <br>
    <v-card>
      <v-card-title color="red">
        Comments
      </v-card-title>
      <v-card-text>
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
              <span slot="opposite"> <v-chip>{{ humanRedableTime(n.Timestamp) }} </v-chip></span>
              <v-card class="elevation-2" outlined>
                <v-card-title class="headline">
                  {{ n.Author }}
                  <!-- <v-avatar color="red" class="ml-7">
                  <span class="white--text headline">CJ</span>
                </v-avatar> -->
                </v-card-title>
                <v-card-subtitle>{{ humanRedableTime(n.Timestamp) }} </v-card-subtitle>
                <v-card-text>
                  <p>{{ n.Comment }}</p>
                  <v-icon v-if="n.Helpful == 'YES'" color="success">
                    mdi-thumb-up
                  </v-icon>
                  <v-icon v-else color="error">
                    mdi-thumb-down
                  </v-icon>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>

          <!-- Add Comment -->
          <div v-if="addComment">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd1NEpiNvpe5pZ8c3-npS0ut56ThKZ9z01YEN0PD_BLGQNy9Q/viewform?embedded=true"
              width="100%"
              height="400"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >Loading…</iframe>
          </div>
          <v-container>
            <v-btn x-large :color="btnColor" @click="addComment = !addComment">
              {{ buttonText }}
            </v-btn>
          </v-container>

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
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment'
import { sheetMixin } from '@/Mixins.js'

export default {
  name: 'Comments',
  mixins: [sheetMixin],
  data: () => ({
    alignTop: true,
    avatar: false,
    dense: true,
    fillDot: false,
    hideDot: false,
    icon: false,
    iconColor: false,
    left: false,
    reverse: false,
    right: false,
    small: true,
    addComment: false,
    btnColor: 'success',
    SHEETPAGENUMBER: 1,
    COLUMNS: 4,
    YOURGOOGLESHEETCODE: '10eubbEN9rSfGPjALZnP83DR7hKasdf-mThrxzjYksLY'
  }),
  computed: {
    buttonText () {
      if (this.addComment) {
        return 'Um! I changed my mind'
      } else {
        return 'add a comment +'
      }
    }
  },
  methods: {
    humanRedableTime (timestamp) {
      return moment(timestamp).format('MMM Do YY')
    }
  },
  buttonColor () {
    // Not working
    if (this.addComment) {
      this.btnColor = 'success'
    } else {
      this.btnColor = 'warning'
    }
  }
}
</script>
