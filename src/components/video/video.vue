<template>
  <div class="video">
    <iframe class="video-iframe" :src="src" allowfullscreen />
  </div>
</template>

<script>
export default {
  props: {
    embed: {
      type: String,
      required: true
    }
  },
  computed: {
    src() {
      const base = "https://www.youtube.com/embed/"
      const query = "?iv_load_policy=3&modestbranding=1"
      return `${base}${this.embed}${query}`
    }
  }
}
</script>

<style lang="scss">
.video-iframe {
  display: block;
  border: none;
  width: 100%;
  height: 100%;
}
</style>
