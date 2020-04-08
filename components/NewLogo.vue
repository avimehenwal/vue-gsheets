<template>
  <v-btn icon class="Logo">
    <v-icon color="warning">mdi-guy-fawkes-mask</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'NewLogo'
}
</script>

<style>
.Logo {
  height:180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
