<template>
  <picture class="image">
    <source
      v-for="source in sources"
      :key="source.type"
      :type="source.type"
      :srcset="source.srcset"
    />
    <img :src="url" :alt="alt" />
  </picture>
</template>

<script>
import { __, both, either, equals, flip, gte, lte, includes, is } from "ramda"

const EXT_REGEX = /\.([\w]+)$/
const TYPE_MAP = {
  png: "image/png",
  jpg: "image/jpeg",
  webp: "image/webp"
}

const oneOf = flip(includes)
const isNumber = is(Number)

export default {
  props: {
    src: {
      type: String,
      required: true,
      validate(value) {
        const match = value.match(EXT_REGEX)
        const ext = match && match[1]
        return includes(ext, ["jpg", "png"])
      }
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: null
    },
    fit: {
      type: String,
      default: null,
      validate: oneOf(["pad", "fill", "scale", "crop", "thumb"])
    },
    focus: {
      type: String,
      default: null,
      validate: oneOf([
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top_left",
        "top_right",
        "bottom_left",
        "bottom_right",
        "face",
        "faces"
      ])
    },
    radius: {
      type: [Number, String],
      default: null,
      validate: either(isNumber, equals("max"))
    },
    quality: {
      type: Number,
      default: null,
      validate: both(gte(__, 1), lte(__, 100))
    },
    flag: {
      type: String,
      default: null,
      validate: oneOf(["progressive", "png8"])
    },
    background: {
      type: String,
      default: null
    }
  },
  computed: {
    ext() {
      const match = this.src.match(EXT_REGEX)
      return match && match[1]
    },
    formats() {
      return ["webp", this.ext]
    },
    query() {
      let query = ""
      if (this.background) query += `&bg=${this.background}`
      if (this.quality) query += `&q=${this.quality}`
      if (this.radius) query += `&r=${this.radius}`
      if (this.height) query += `&h=${this.height}`
      if (this.width) query += `&w=${this.width}`
      if (this.focus) query += `&f=${this.focus}`
      if (this.flag) query += `&fl=${this.flag}`
      if (this.fit) query += `&fit=${this.fit}`
      return query
    },
    sources() {
      return this.formats.map((format) => ({
        srcset: `${this.src}?fm=${format}${this.query}`,
        type: TYPE_MAP[format]
      }))
    },
    url() {
      return `${this.src}${this.query.replace(/^&/, "?")}`
    }
  }
}
</script>

<style lang="scss">
.image {
  img,
  source {
    display: block;
    width: 100%;
  }
}
</style>
