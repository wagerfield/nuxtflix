<template>
  <component :is="tag" :class="classes"> <slot /> </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    classes() {
      return []
    }
  }
}
</script>
