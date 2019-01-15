<template>
  <component :is="tag" class="button" :class="classes" v-on="$listeners">
    <div class="button-text mono uppercase" v-text="text" />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "button"
    },
    text: {
      type: String,
      default: "Button"
    },
    dark: {
      type: Boolean
    },
    fill: {
      type: Boolean
    },
    elevate: {
      type: Boolean
    }
  },
  computed: {
    classes() {
      return [
        this.dark && "button-dark",
        this.fill && "button-fill",
        this.elevate && "button-elevate"
      ]
    }
  }
}
</script>

<style lang="scss" src="./button.scss" />
