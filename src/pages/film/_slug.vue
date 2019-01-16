<template>
  <h1 v-text="title" />
</template>

<script>
import { capital } from "case"

export default {
  async validate({ params, store, payload }) {
    if (payload) {
      return payload.fields.slug === params.slug
    } else {
      await store.dispatch("getFilms")
      const slugs = store.getters.filmSlugs
      return slugs.includes(params.slug)
    }
  },
  computed: {
    title() {
      return capital(this.$route.params.slug)
    }
  }
}
</script>
