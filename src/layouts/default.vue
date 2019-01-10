<template>
  <div class="layout grid" :class="{ offline }">
    <v-header />
    <main class="content"><nuxt /></main>
    <v-footer />
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: mapState(["offline"])
}
</script>

<style lang="scss">
.layout {
  grid-template-rows:
    [header-start]
    $header-height
    [header-end content-start]
    minmax(calc(100vh - #{$header-height}), auto)
    [footer-start content-end]
    auto
    [footer-end];
}

.header {
  grid-column: bleed;
  grid-row: header;
  z-index: 3;

  @include desktop {
    grid-column: content;
  }
}

.footer {
  grid-column: bleed;
  grid-row: footer;
  z-index: 2;
}

.content {
  grid-column: bleed;
  grid-row: content;
  z-index: 1;

  @include desktop {
    grid-row-start: header-start;
  }
}
</style>
