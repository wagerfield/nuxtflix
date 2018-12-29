<template>
  <div>
    <h1>Index</h1>
    <v-button v-if="install" @click="$install">Install</v-button>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: mapState(["install"])
}
</script>
