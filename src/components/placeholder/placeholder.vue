<template>
  <div class="placeholder grid">
    <div class="content">
      <h1 class="title uppercase" v-text="title" />
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Coming soon."
    }
  }
}
</script>

<style lang="scss">
.placeholder {
  align-content: center;
  padding-top: $header-height;
  box-sizing: border-box;
  background: $yellow;
  min-height: 100%;

  .content {
    grid-column: content;
    margin: 1rem 0 2rem;
  }

  .title {
    max-width: 10ch;
    font-size: 5.5rem;
    margin: 0;

    @include above(400px) {
      font-size: 6.5rem;
    }

    @include above(600px) {
      font-size: 7.5rem;
    }
  }
}
</style>
