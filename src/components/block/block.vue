<template>
  <component :is="tag" :style="style" class="block"><slot /></component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String,
      default: "#e1e1e6"
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

<style lang="scss">
.block {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
