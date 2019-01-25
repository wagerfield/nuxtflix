<template>
  <picture class="image">
    <template v-if="webp">
      <source
        v-for="source in sources"
        :key="source.type"
        :type="source.type"
        :data-srcset="source.srcset"
        :data-optimumx="optimumx"
        :data-sizes="sizes"
      />
    </template>
    <img
      :alt="alt"
      :data-src="url"
      :data-srcset="srcset"
      :data-optimumx="optimumx"
      :data-sizes="sizes"
      class="lazyload"
    />
  </picture>
</template>

<script>
import { mergeRight, omit } from "ramda"
import {
  buildSources,
  buildSrcset,
  buildUrl,
  props
} from "~/cms/contentful/image"

const buildOptions = omit(["alt", "src", "sizes", "optimumx", "webp"])

export default {
  props: mergeRight(props, {
    alt: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    sizes: {
      type: String,
      default: "auto"
    },
    optimumx: {
      type: [Number, String],
      default: "auto"
    },
    webp: {
      type: Boolean,
      default: true
    }
  }),
  computed: {
    options() {
      return buildOptions(this.$props)
    },
    sources() {
      return buildSources(this.src, this.options)
    },
    srcset() {
      return buildSrcset(this.src, this.options)
    },
    url() {
      return buildUrl(this.src, this.options)
    }
  }
}
</script>

<style lang="scss">
.image {
  img[data-sizes="auto"] {
    display: block;
    width: 100%;
  }

  .lazyload,
  .lazyloading,
  .lazyloaded {
    @include move;
    transition: $fade;
    opacity: 0;
  }

  .lazyloaded {
    opacity: 1;
  }
}
</style>
