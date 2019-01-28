<template>
  <v-placeholder>
    <div v-if="canInstallWebApp" class="callout">
      <v-button text="Install" elevate @click="installWebApp" />
    </div>
    <v-button text="Track" elevate @click="$ga.event('Button', 'track')" />
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
.placeholder {
  background: $green;
}
.callout {
  margin-top: 4rem;
}
</style>
