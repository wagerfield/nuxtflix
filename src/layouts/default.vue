<template>
  <div class="layout grid" :class="{ offline }">
    <v-lazy when-idle><v-header /></v-lazy>
    <main class="content"><nuxt /></main>
    <v-lazy when-visible><v-footer /></v-lazy>
  </div>
</template>

<script>
import { always } from "ramda"
import { mapState } from "vuex"
import VLazy from "vue-lazy-hydration"

export default {
  components: {
    VLazy,
    VHeader: always(import("~/components/header/header.vue")),
    VFooter: always(import("~/components/footer/footer.vue"))
  },
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
