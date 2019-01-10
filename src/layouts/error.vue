<template>
  <div class="error grid">
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
.error {
  align-items: center;
  text-align: center;
  background: $black;
  min-height: 100%;

  .status {
    font-size: 12rem;
    user-select: none;
    grid-column: content;
    grid-row: 1 / 2;
    color: $night;
    opacity: 0.5;

    @include desktop {
      font-size: 16rem;
    }
  }

  .message {
    margin-top: 2.5rem;
    grid-column: column2 / column5;
    grid-row: 1 / 2;
    color: $white;
    z-index: 1;
  }
}
</style>
