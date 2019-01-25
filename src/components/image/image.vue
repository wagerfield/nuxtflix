<template>
  <picture class="image">
    <template v-if="webp">
      <source
        v-for="source in sources"
        :key="source.type"
        :type="source.type"
        :data-srcset="source.srcset"
        :data-aspectratio="aspectratio"
        :data-optimumx="optimumx"
        :data-sizes="sizes"
      />
    </template>
    <img
      :alt="alt"
      :data-src="url"
      :data-srcset="srcset"
      :data-aspectratio="aspectratio"
      :data-optimumx="optimumx"
      :data-sizes="sizes"
      :class="objectFit"
      :style="styles"
      class="lazyload"
    />
  </picture>
</template>

<script>
import { mergeRight, omit } from "ramda"
import { oneOf } from "~/core/utils"
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
    aspectratio: {
      type: Number
    },
    optimumx: {
      type: [Number, String],
      default: "auto"
    },
    objectFit: {
      type: String,
      validate: oneOf(["contain", "cover"])
    },
    objectPosition: {
      type: String
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
    styles() {
      return { objectPosition: this.objectPosition }
    },
    url() {
      return buildUrl(this.src, this.options)
    }
  }
}
</script>

<style lang="scss">
.image {
  display: block;

  img[data-sizes="auto"] {
    display: block;
  }

  img.cover,
  img.contain {
    width: 100%;
    height: 100%;
  }

  img.cover {
    @include object-fit(cover);
  }

  img.contain {
    @include object-fit(contain);
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
