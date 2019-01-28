<template>
  <v-placeholder>
    <div v-if="canInstallWebApp" class="callout">
      <v-button text="Install" elevate @click="installWebApp" />
    </div>
  </v-placeholder>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  computed: mapGetters(["canInstallWebApp"]),
  methods: mapActions(["installWebApp"])
}
</script>

<style lang="scss" scoped>
.callout {
  margin-top: 4rem;
}
</style>
