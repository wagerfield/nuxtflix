<template>
  <component :is="component" :width="size" :height="size" class="logo" />
</template>

<script>
import VLogoLightMono from "~/assets/graphics/logo-light-mono.svg"
import VLogoDarkMono from "~/assets/graphics/logo-dark-mono.svg"
import VLogoLight from "~/assets/graphics/logo-light.svg"
import VLogoDark from "~/assets/graphics/logo-dark.svg"

export default {
  components: {
    VLogoLightMono,
    VLogoDarkMono,
    VLogoLight,
    VLogoDark
  },
  props: {
    theme: {
      type: String,
      default: "light",
      validate(value) {
        return /^(light|dark)(-mono)?$/.test(value)
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
  }
}
</script>

<style lang="scss">
.logo {
  display: block;
}
</style>
