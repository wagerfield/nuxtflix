<template>
  <v-lazy ssr-only><v-placeholder /></v-lazy>
</template>

<script>
import { always } from "ramda"
import VLazy from "vue-lazy-hydration"

export default {
  components: {
    VLazy,
    VPlaceholder: always(import("~/components/placeholder/placeholder.vue"))
  }
}
</script>
