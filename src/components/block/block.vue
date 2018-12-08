<template>
  <v-layout :style="style"> <slot /> </v-layout>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#EEE"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100px"
    }
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height,
        backgroundColor: this.color
      }
    }
  }
}
</script>
