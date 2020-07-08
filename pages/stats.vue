<template>
  <div>
    <v-row>
      <v-card width="20%" color="light-blue darken-4">
        <v-card-text>
          <div class="display-4 text-center white--text font-weight-regular">
            {{ ghUser.public_repos }}
          </div>
        </v-card-text>
        <v-card-subtitle class="text-center font-weight-bold">
          Public Repositories
        </v-card-subtitle>
      </v-card>
      <v-spacer />
      <v-card width="20%">
        <v-card-text>
          <div class="display-4 text-center blue--text text--lighten-3">
            {{ ghUser.public_gists }}
          </div>
        </v-card-text>
        <v-card-subtitle class="text-center font-weight-bold">
          Public Gists
        </v-card-subtitle>
      </v-card>
      <v-spacer />
      <v-card width="20%">
        <v-card-text>
          <div class="display-4 text-center red--text text--lighten-3">
            {{ ghUser.followers }}
          </div>
        </v-card-text>
        <v-card-subtitle class="text-center font-weight-bold">
          Githhub Followers
        </v-card-subtitle>
      </v-card>
      <v-spacer />
      <v-card width="20%">
        <v-card-text>
          <div class="display-4 text-center green--text text--lighten-3">
            {{ ghUser.following }}
          </div>
        </v-card-text>
        <v-card-subtitle class="text-center font-weight-bold">
          Github Following
        </v-card-subtitle>
      </v-card>
    </v-row>
    <br>
    <v-row>
      <v-card width="29%" outlined>
        <v-card-title>
          Project contributor(s)
        </v-card-title>
        <v-card-subtitle>
          Number of people contributing to the project, with the volume of contributions
        </v-card-subtitle>
        <v-card-text>
          <DoughnutChart :data="doughnutChartData" :options="{ legend: { display: false }, maintainAspectRatio: false }" />
        </v-card-text>
      </v-card>
      <v-spacer />
      <v-card width="70%" outlined right>
        <v-card-title>
          Commit Activity
        </v-card-title>
        <v-card-text>
          <BarChart :data="barChartData" :options="{ maintainAspectRatio: false }" />
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import moment from 'moment'
import DoughnutChart from '~/components/doughnut-chart'
import BarChart from '~/components/bar-chart'

function isBot (username) {
  return username.includes('[bot]') || username.includes('-bot')
}

function getRandomColor () {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export default {
  components: {
    DoughnutChart,
    BarChart
  },
  async asyncData ({ $http, env }) {
    let contributors = await $http.$get('https://api.github.com/repos/avimehenwal/fan-gallery/contributors', {
      headers: {
        Authorization: `token ${env.githubToken}`
      }
    })
    const stats = await $http.$get('https://api.github.com/repos/avimehenwal/fan-gallery/stats/commit_activity', {
      headers: {
        Authorization: `token ${env.githubToken}`
      }
    })
    const ghUser = await $http.$get('https://api.github.com/users/avimehenwal')
    contributors = contributors.filter(c => c.contributions >= 10 && !isBot(c.login))
    return {
      barChartData: {
        labels: stats.map(stat => moment(stat.week * 1000).format('GGGG[-W]WW')),
        datasets: [
          {
            label: 'avimehenwal/fan-gallery Commit Activity',
            backgroundColor: '#41B38A',
            data: stats.map(stat => stat.total)
          }
        ]
      },
      doughnutChartData: {
        labels: contributors.map(c => c.login),
        datasets: [
          {
            label: 'Nuxt.js Contributors',
            backgroundColor: contributors.map(getRandomColor),
            data: contributors.map(c => c.contributions)
          }
        ]
      },
      ghUser
    }
  }
}
</script>

<style scoped>
/* .doughnut-chart {
  width: 80%;
  height: 80%;
  margin: auto;
  margin-top: 30px;
}
.bar-chart {
  width: 80%;
  height: 80%;
  margin: auto;
  margin-top: 30px;
} */
</style>
