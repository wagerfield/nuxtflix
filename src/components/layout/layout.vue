<template>
  <component :is="tag" :class="classes"> <slot /> </component>
</template>

<script>
const ALIGN_CONTENT = ["start", "end", "center", "around", "between", "stretch"]
const ALIGN_ITEMS = ["start", "end", "center", "stretch", "baseline"]
const DIRECTION = ["row", "row-reverse", "column", "column-reverse"]
const WRAP = ["nowrap", "wrap", "wrap-reverse"]
const JUSTIFY_CONTENT = [
  "start",
  "end",
  "center",
  "around",
  "between",
  "evenly"
]

const validate = (options) => (value) => options.includes(value)

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    direction: {
      type: String,
      validate: validate(DIRECTION)
    },
    justifyContent: {
      type: String,
      validate: validate(JUSTIFY_CONTENT)
    },
    alignContent: {
      type: String,
      validate: validate(ALIGN_CONTENT)
    },
    alignItems: {
      type: String,
      validate: validate(ALIGN_ITEMS)
    },
    wrap: {
      type: String,
      validate: validate(WRAP)
    }
  },
  computed: {
    classes() {
      return []
    }
  }
}
</script>
