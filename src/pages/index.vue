<template>
  <v-placeholder>
    <v-button
      v-if="install"
      class="callout"
      text="Install"
      elevate
      @click="$install"
    />
  </v-placeholder>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: mapState(["install"])
}
</script>

<style lang="scss" scoped>
.callout {
  margin-top: 2rem;
}
</style>
