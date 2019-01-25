<template>
  <component :is="tag" class="film-cover" :style="style">
    <v-image
      :alt="film.title"
      :src="film.cover.file.url"
      :dimensions="dimensions"
      fit="fill"
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
    widths: {
      type: Array,
      default: () => [240]
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
    dimensions() {
      return this.widths.map((width) => [width, this.height(width)])
    },
    style() {
      const paddingBottom = `${Math.ceil(this.ratio * 100)}%`
      return { paddingBottom }
    }
  },
  methods: {
    height(width) {
      return Math.ceil(width * this.ratio)
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
