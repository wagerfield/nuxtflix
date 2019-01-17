<template>
  <div>
    <h1>Films</h1>
    <ul>
      <li v-for="film in films" :key="film.fields.id">
        <nuxt-link :to="getPath(film)" v-text="film.fields.title" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  async fetch({ store }) {
    await store.dispatch("getFilms")
  },
  computed: mapState(["films"]),
  methods: {
    getPath(film) {
      return `/film/${film.fields.slug}`
    }
  }
}
</script>
