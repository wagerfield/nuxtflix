<template>
  <h1 v-text="title" />
</template>

<script>
export default {
  async validate({ params, store, payload }) {
    if (payload) {
      return payload.slug === params.slug
    } else {
      await store.dispatch("getFilms")
      const slugs = store.getters.filmSlugs
      return slugs.includes(params.slug)
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
      return `Watch: ${this.film.title}`
    }
  }
}
</script>
