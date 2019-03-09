<template>
  <div>
    <form>
      <div class="row">
        <div class="form-group col-md-6">
          <label for="codigo">Código*</label>
          <input readonly="readonly" type="text" name="codigo" id="codigo" class="form-control">
        </div>
        <div class="form-group col-md-6">
          <label for="categoria">Categoria*</label>
          <input readonly="readonly" type="text" name="categoria" id="categoria" class="form-control">
        </div>
        <div class="form-group col-md-6">
          <label for="descricao">Nova Descrição*</label>
          <input type="text" name="descricao" id="descricao" class="form-control">
        </div>
        <div class="form-group col-md-6">
          <label for="valor">(-)R$*</label>
          <input type="text" name="valor" id="valor" class="form-control">
        </div>
        <div class="form-group col-md-12">
          <button type="button" class="btn btn-primary mr-1">
            <i class="fas mr-1" v-bind:class="{'fa-plus': btn=='Adicionar', 'fa-pencil-alt': btn=='Editar'}"></i>{{btn}}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormDescricao",
  props: {
    btn: {
      type: String,
      required: false,
      default: 'Adicionar'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
