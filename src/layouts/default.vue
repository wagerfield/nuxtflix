<template>
  <div class="default-layout" :class="{ offline }">
    <div class="upper-wrapper">
      <div class="header-wrapper"><v-header /></div>
      <main class="page-wrapper"><nuxt /></main>
    </div>
    <div class="lower-wrapper"><v-footer /></div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: mapState(["offline"])
}
</script>

<style lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;

  .upper-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .header-wrapper {
    flex: 0 0 auto;
    z-index: 10;

    @media (min-width: $max-width) {
      height: 0;
    }
  }

  .page-wrapper {
    flex: 1 0 auto;
  }
}
</style>
