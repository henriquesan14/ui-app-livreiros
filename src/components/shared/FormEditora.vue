<template>
    <div>
      <form>
        <div class="row">
          <div class="form-group col-md-12">
            <label for="nome">Nome*</label>
            <input type="text" name="nome" id="nome" class="form-control">
          </div>
          <div class="form-group col-md-12">
            <button type="button" class="btn btn-success mr-1"><i class="fas fa-save mr-1"></i>Cadastrar</button>
            <button type="button" class="btn btn-danger mr-1"><i class="fas fa-broom mr-1"></i>Limpar</button>
            <button type="button" class="btn btn-light" data-dismiss="modal"><i class="fas fa-arrow-circle-left mr-1"></i>Voltar</button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: "FormEditora"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
