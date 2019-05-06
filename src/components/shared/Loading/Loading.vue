<template>
  <div class="text-center" v-if="loader">
  <div class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    loader: {
      type: Boolean,
      required: true
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
