<template>
  <v-placeholder>
    <div v-if="install" class="callout">
      <v-button text="Install" elevate @click="$install" />
    </div>
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
  margin-top: 4rem;
}
</style>
