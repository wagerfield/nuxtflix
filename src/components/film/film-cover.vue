<template>
  <component :is="tag" class="film-cover" :style="style">
    <v-image
      :src="film.cover.file.url"
      :alt="film.title"
      :width="width"
      :height="height"
      fit="fill"
      webp
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
    ratio: {
      type: Number,
      default: 1.48 // Cover art aspect ratio
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    height() {
      return Math.ceil(this.width * this.ratio)
    },
    style() {
      const paddingBottom = `${Math.ceil(this.ratio * 100)}%`
      return { paddingBottom }
    }
  }
}
</script>

<style lang="scss">
.film-cover {
  overflow: hidden;
  position: relative;

  .image {
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
}
</style>
