<template>
  <div>
    <h1>Films</h1>
    <ul>
      <li v-for="film in films" :key="film.key">
        <nuxt-link :to="film.path" v-text="film.text" />
      </li>
    </ul>
  </div>
</template>

<script>
import { FILMS } from "@/core/constants"
import { capital } from "case"

export default {
  data() {
    return {
      films: FILMS.map((film) => ({
        text: capital(film),
        path: `/film/${film}`,
        key: film
      }))
    }
  }
}
</script>
