<template>
  <div class="modal fade" v-bind:id="idModal">
      <div class="modal-dialog" v-bind:class="{'modal-lg': large==true}">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{titulo}}</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    titulo: {
      type: String,
      required: true
    },
    idModal: {
      type: String,
      required: true
    },
    large: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
