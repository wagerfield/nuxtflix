<template>
  <h1 v-text="title" />
</template>

<script>
import { capital } from "case"
import { FILMS } from "~/core/constants"

export default {
  validate({ params }) {
    return FILMS.includes(params.id)
  },
  computed: {
    title() {
      return capital(this.$route.params.id)
    }
  }
}
</script>
