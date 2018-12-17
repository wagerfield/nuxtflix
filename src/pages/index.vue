<template>
  <div>
    <h1>Index</h1>
    <button v-if="install" @click="$install">Install</button>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: mapState(["install"])
}
</script>
