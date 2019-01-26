<template>
  <div class="watch-page grid">
    <v-lazy ssr-only><v-video :embed="film.trailer"/></v-lazy>
  </div>
</template>

<script>
import { always } from "ramda"
import VLazy from "vue-lazy-hydration"

export default {
  async asyncData({ app, params, payload }) {
    const film = payload || (await app.$cms.getFilmBySlug(params.slug))
    return { film }
  },
  components: {
    VLazy,
    VVideo: always(import("~/components/video/video.vue"))
  }
}
</script>

<style lang="scss" scoped>
.watch-page {
  padding-top: $header-height;
  box-sizing: border-box;
  background: black;
  min-height: 100%;
}

.video {
  grid-column: bleed;
}
</style>
