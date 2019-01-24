<template>
  <picture class="image">
    <source
      v-for="source in sources"
      :key="source.type"
      :type="source.type"
      :data-srcset="source.srcset"
    />
    <img :alt="alt" :data-src="url" class="lazyload" />
  </picture>
</template>

<script>
import { mergeRight, omit } from "ramda"
import { buildSources, buildUrl, props } from "~/cms/contentful/image"

const buildOptions = omit(["src", "alt"])

export default {
  props: mergeRight(props, {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }),
  computed: {
    options() {
      return buildOptions(this.$props)
    },
    sources() {
      return buildSources(this.src, this.options)
    },
    url() {
      return buildUrl(this.src, this.options)
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
