<template>
  <component :is="component" :width="size" :height="size" class="logo" />
</template>

<script>
import VLogoLight from "~/assets/graphics/logo-light.svg"
import VLogoDark from "~/assets/graphics/logo-light.svg"

export default {
  props: {
    theme: {
      type: String,
      default: "light",
      validate(value) {
        return /^(light|dark)$/.test(value)
      }
    },
    scale: {
      type: Number,
      default: 2
    }
  },
  computed: {
    component() {
      return `v-logo-${this.theme}`
    },
    size() {
      return this.scale * 16
    }
  },
  components: {
    VLogoLight,
    VLogoDark
  }
}
</script>

<style lang="scss">
.logo {
  display: block;
}
</style>
