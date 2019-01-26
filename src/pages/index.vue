<template>
  <v-lazy when-idle>
    <v-placeholder>
      <div v-if="install" class="callout">
        <v-button text="Install" elevate @click="$install" />
      </div>
    </v-placeholder>
  </v-lazy>
</template>

<script>
import { always } from "ramda"
import { mapState } from "vuex"
import VLazy from "vue-lazy-hydration"

export default {
  components: {
    VLazy,
    VButton: always(import("~/components/button/button.vue")),
    VPlaceholder: always(import("~/components/placeholder/placeholder.vue"))
  },
  computed: mapState(["install"])
}
</script>

<style lang="scss" scoped>
.callout {
  margin-top: 4rem;
}
</style>
