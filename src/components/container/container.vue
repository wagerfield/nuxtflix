<template>
  <component class="container" :is="tag"><slot /></component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}
</script>

<style>
.container {
  display: flex;
}
</style>
