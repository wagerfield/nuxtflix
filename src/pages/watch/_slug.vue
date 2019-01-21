<template>
  <div class="watch-page grid"><v-video :embed="film.trailer" /></div>
</template>

<script>
export default {
  async asyncData({ app, params, payload }) {
    const film = payload || (await app.$cms.getFilmBySlug(params.slug))
    return { film }
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
