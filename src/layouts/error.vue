<template>
  <div class="error-page grid">
    <span class="status h1" v-text="status" />
    <p class="message mono" v-text="error.message" />
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  computed: {
    status() {
      return this.error.statusCode || 500
    },
    message() {
      return this.error.message || "Something went wrong"
    }
  }
}
</script>

<style lang="scss">
.error-page {
  $row-gap: 2rem;
  grid-template-rows:
    [bleed-start header-start]
    $header-height
    [header-end]
    minmax($row-gap, 1fr)
    [error-start]
    auto
    [error-end]
    minmax($row-gap, 1fr)
    [bleed-end];
  text-align: center;
  background: $black;
  min-height: 100%;

  .status {
    line-height: 1;
    font-size: 12rem;
    user-select: none;
    grid-area: error / content;
    margin: 0 0 1rem;
    color: $night;
    opacity: 0.5;

    @include desktop {
      font-size: 16rem;
    }
  }

  .message {
    grid-area: error / content;
    align-self: center;
    color: $white;
    z-index: 1;

    @include desktop {
      grid-column: column-2 / column-5;
    }
  }
}
</style>
