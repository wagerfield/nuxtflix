<template>
  <div class="film-page grid">
    <h1 class="title" v-text="film.title" />
    <h2 class="rating" v-text="film.rating" />
  </div>
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
.film-page {
  padding-top: $header-height;
}

.title {
  grid-column: content;
}
</style>
