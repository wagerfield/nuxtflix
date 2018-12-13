<template>
  <component :is="component" />
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
    }
  },
  components: {
    VLogoLight,
    VLogoDark
  }
}
</script>
