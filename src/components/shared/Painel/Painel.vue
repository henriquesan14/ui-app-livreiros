<template>
  <div v-bind:class="'col-md-'+ col">
    <div class="card mb-3">
      <div v-bind:class="'card-header bg-' + header + ' text-center text-'+ text">{{titulo}}</div>
      <div v-bind:class="'card-body bg-' + body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Painel",
  props: {
    titulo: {
      type: String,
      required: true
    },
    col: {
      type: String,
      required: false,
      default: '12'
    },
    header: {
      type: String,
      required: false,
      default: 'default'
    },
    text: {
      type: String,
      required: false,
      default: 'black'
    },
    body: {
      type: String,
      required: false,
      default: 'White'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
