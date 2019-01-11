<template>
  <div class="index-page grid">
    <h1 class="title uppercase">Yo!</h1>
    <v-button v-if="install" @click="$install">Install</v-button>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: mapState(["install"])
}
</script>

<style lang="scss">
.index-page {
  align-content: center;
  grid-row-gap: 2rem;
  background: $green;
  min-height: 100%;

  .title {
    grid-column: content;
    text-align: center;
    font-size: 15vw;
  }

  .install {
    grid-column: third2;
  }
}
</style>
