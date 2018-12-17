<template>
  <div class="default-layout" :class="{ offline }">
    <v-header />
    <main><nuxt /></main>
    <v-footer />
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: mapState(["offline"])
}
</script>
