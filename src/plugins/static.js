import Vue from "vue"

Vue.mixin({
  created() {
    if (this.$options.static) {
      Object.assign(this, this.$options.static)
    }
  }
})
