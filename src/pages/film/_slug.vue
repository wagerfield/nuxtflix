<template>
  <div class="film-page grid">
    <h1 v-text="title" />
    <v-image :src="film.poster.file.url" :alt="film.title" />
  </div>
</template>

<script>
export default {
  async validate({ store, params, payload }) {
    if (payload) {
      return true
    } else {
      await store.dispatch("getFilms")
      const film = store.getters.filmBySlug(params.slug)
      return Boolean(film)
    }
  },
  computed: {
    slug() {
      return this.$route.params.slug
    },
    film() {
      return this.$store.getters.filmBySlug(this.slug)
    },
    title() {
      return `Film: ${this.film.title}`
    }
  }
}
</script>

<style lang="scss" scoped>
.film-page {
  padding-top: $header-height;
}
</style>
