<template>
  <component :is="tag" class="button" v-on="$listeners">
    <div class="button-content mono uppercase" v-text="text" />
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
    theme: {
      type: String,
      default: "light",
      validate(value) {
        return /^(light|dark)$/.test(value)
      }
    }
  }
}
</script>

<style lang="scss">
$button-border-radius: 0px;
$button-offset-over: 3px;
$button-offset-out: 7px;

.button {
  padding: 0;
  border: none;
  cursor: pointer;
  background: $black;
  border-radius: $button-border-radius;

  &:hover .button-content {
    transform: translate3d($button-offset-over, -$button-offset-over, 0);
  }
}

.button-content {
  transition: transform 0.1s ease-out;
  transform: translate3d($button-offset-out, -$button-offset-out, 0);
  border-radius: $button-border-radius;
  box-shadow: 0 0 0 2px $black inset;
  background: $white;
  padding: 1em 2em;
  font-weight: 700;
  font-size: 14px;
  line-height: 1;
}
</style>
