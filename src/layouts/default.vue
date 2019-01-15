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

<style lang="scss" scoped>
.layout {
  grid-template-rows:
    [header-start content-start]
    $header-height
    [header-end]
    minmax(calc(100vh - #{$header-height}), auto)
    [footer-start content-end]
    auto
    [footer-end];
}

.header {
  grid-area: header / bleed;
  z-index: 2;

  @include desktop {
    grid-column: content;
  }
}

.footer {
  grid-area: footer / bleed;
  z-index: 1;
}

.content {
  grid-area: content / bleed;
}
</style>
