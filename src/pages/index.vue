<template>
  <div class="index-page grid">
    <h1 class="title uppercase">The end of Earth will not be the end of us.</h1>
    <v-button class="callout" v-if="install" @click="$install"
      >Install</v-button
    >
    <!-- <v-button class="callout" @click="$install">Install App</v-button> -->
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
  $row-gap: 2rem;
  grid-template-rows:
    [bleed-start header-start]
    $header-height
    [header-end]
    minmax($row-gap, 1fr)
    [title-start]
    auto
    [title-end]
    $row-gap
    [callout-start]
    auto
    [callout-end]
    minmax($row-gap, 0.5fr)
    [bleed-end];
  background: $stone center;
  background-image: url("~assets/images/interstellar.jpg");
  background-image: url("~assets/images/interstellar.webp");
  background-size: cover;
  min-height: 100%;

  .title {
    grid-area: title / content;
    font-size: 5rem;
    max-width: 20ch;
    color: $white;
  }

  .callout {
    grid-area: callout / content;
    justify-self: start;
  }
}
</style>
