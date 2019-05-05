<template>
    <div>
      <form>
        <div class="row">
          <div class="form-group col-md-4">
            <label for="codigo">Código</label>
            <input readonly="readonly" type="text" name="codigo" id="codigo" class="form-control">
          </div>
          <div class="form-group col-md-4">
            <label for="total">Total</label>
            <input readonly="readonly" type="text" name="total" id="total" class="form-control">
          </div>
          <div class="form-group col-md-2">
            <label for="qtd">Qtd</label>
            <input  type="text" name="qtd" id="qtd" class="form-control">
          </div>
          <div class="form-group col-md-2">
              <label>Incremento</label>
            <button class="btn btn-primary" type="button"><i class="fas fa-plus"></i></button>
          </div>
          <div class="form-group col-md-12">
            <label for="total">Descrição</label>
            <textarea readonly="readonly" type="text" name="total" id="total" class="form-control"></textarea>
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
  name: "DescricoesLivro"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
