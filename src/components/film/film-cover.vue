<template>
  <component :is="tag" class="film-cover">
    <v-image
      :src="film.poster.file.url"
      :alt="film.title"
      :width="width"
      class="film-cover-image"
    />
  </component>
</template>

<script>
export default {
  props: {
    film: {
      type: Object,
      required: true
    },
    width: {
      type: Number,
      default: 400
    },
    tag: {
      type: String,
      default: "div"
    }
  }
}
</script>

<style lang="scss">
.film-cover {
  overflow: hidden;
  position: relative;
  padding-bottom: 148%; // Cover art aspect ratio
}

.film-cover-image {
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}
</style>
