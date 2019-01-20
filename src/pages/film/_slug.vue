<template>
  <div class="film-page grid">
    <h1 class="title" v-text="film.title" />
    <v-image :src="film.cover.file.url" :alt="film.title" :width="600" />
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

.title,
.image {
  grid-column: content;
}

@include desktop {
  .title {
    grid-column: half-1;
  }
  .image {
    grid-column: half-2;
  }
}
</style>
