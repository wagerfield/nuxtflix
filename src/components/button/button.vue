<template>
  <component class="button" :is="tag" v-on="$listeners"><slot /></component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "button"
    }
  }
}
</script>

<style lang="scss">
.button {
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;
  background: $white;
  box-shadow: 0 0 0 1px $black inset;
  padding: 0.75em 1em;
  z-index: 1;

  // &:before {
  //   z-index: 0;
  //   content: "";
  //   width: 100%;
  //   height: 100%;
  //   background: $black;
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  // }
}
</style>
