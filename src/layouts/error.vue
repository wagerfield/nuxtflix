<template>
  <div>
    <h1 v-text="status" />
    <p v-text="error.message" />
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
