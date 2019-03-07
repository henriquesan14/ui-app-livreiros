<template>
    <div >
      <form>
        <div class="row" >
          <div class="form-group col-md-6">
            <label for="isbn">ISBN*</label>
            <input type="text" name="isbn" id="isbn" class="form-control">
            <button class="btn btn-primary mt-1" type="button">
              <i class="fa fa-cloud-download-alt mr-1"></i>Buscar Informações
            </button>
          </div>

          <div class="form-group col-md-6">
            <label for="titulo">Titulo*</label>
            <input type="text" name="titulo" id="titulo" class="form-control">
          </div>

          <div class="form-group col-md-6">
            <label for="autor">Autor*</label>
            <input type="text" name="autor" id="autor" class="form-control">
            <button class="btn btn-primary mt-1 mr-2" type="button" >
              <i class="fas fa-search-plus mr-1"></i>Consultar
            </button>
            <button class="btn btn-primary mt-1" type="button" data-toggle="modal" data-target="#modalAutor">
              <i class="fas fa-plus-circle mr-1"></i>Cadastrar
            </button>
          </div>

          <div class="form-group col-md-6">
            <label for="editora">Editora*</label>
            <input type="text" name="editora" id="editora" class="form-control">
            <button class="btn btn-primary mt-1 mr-2" type="button">
              <i class="fas fa-search-plus mr-1"></i>Consultar
            </button>
            <button class="btn btn-primary mt-1" type="button" data-toggle="modal" data-target="#modalEditora">
              <i class="fas fa-plus-circle mr-1"></i>Cadastrar
            </button>
          </div>

          <div class="form-group col-md-6">
            <label for="assunto">Assunto*</label>
            <input type="text" name="assunto" id="assunto" class="form-control">
            <button class="btn btn-primary mt-1 mr-2" type="button">
              <i class="fas fa-search-plus mr-1"></i>Consultar
            </button>
            <button class="btn btn-primary mt-1" type="button" data-toggle="modal" data-target="#modalAssunto">
              <i class="fas fa-plus-circle mr-1"></i>Cadastrar
            </button>
          </div>

          <div class="form-group col-md-6">
            <label for="idioma">Idioma*</label>
            <input type="text" name="idioma" id="idioma" class="form-control">
          </div>

          <div class="form-group col-md-6">
            <label for="ano">Ano de Publicação*</label>
            <input type="text" name="ano" id="ano" class="form-control">
          </div>

          <div class="form-group col-md-6">
            <label for="edicao">Edição*</label>
            <input type="text" name="edicao" id="edicao" class="form-control">
          </div>

          <div class="form-group col-md-6">
            <label for="preco">Preço*</label>
            <input type="text" name="preco" id="preco" class="form-control">
          </div>

          <div class="form-group col-md-6">
            <label for="condicao">Condição*</label>
            <select class="custom-select" required>
              <option value>Selecione uma opção</option>
              <option value="1">Usado</option>
              <option value="2">Novo</option>
            </select>
          </div>

          <div class="form-group col-md-6">
            <label for="qtd">Qtd Páginas*</label>
            <input type="text" name="qtd" id="qtd" class="form-control">
          </div>

          <div class="form-group col-md-6">
            <label for="peso">Peso(g)*</label>
            <input type="text" name="peso" id="peso" class="form-control">
          </div>

          <div class="form-group col-md-6">
            <label for="colecao">Coleção*</label>
            <input type="text" name="colecao" id="colecao" class="form-control">
          </div>

          <div class="form-group col-md-6">
            <label for="traducao">Tradução*</label>
            <input type="text" name="traducao" id="traducao" class="form-control">
          </div>

          <div class="form-group col-md-6">
            <label for="ilustracao">Ilustração*</label>
            <input type="text" name="ilustracao" id="ilustracao" class="form-control">
          </div>

          <div class="form-group col-md-6">
            <label for="dimensoes">Dimensões*</label>
            <input type="text" name="dimensoes" id="dimensoes" class="form-control">
          </div>

          <div class="form-group col-md-6">
            <label for="acabamento">Acabamento*</label>
            <select class="custom-select" required>
              <option value>Selecione uma opção</option>
              <option value="1">Capa Comum</option>
              <option value="2">Capa Dura</option>
              <option value="3">Livro de Bolso</option>
            </select>
          </div>

          <div class="form-group col-md-6">
            <label for="sinopse">Sinopse*</label>
            <textarea class="form-control" id="sinopse" rows="3"></textarea>
          </div>

          <div class="form-group col-md-12">
            <button type="button" class="btn btn-success mr-1"><i class="fas fa-save mr-1"></i>Cadastrar</button>
            <button type="button" class="btn btn-danger mr-1"><i class="fas fa-broom mr-1"></i>Limpar</button>
            <button type="button" class="btn btn-light" data-dismiss="modal" ><i class="fas fa-arrow-circle-left mr-1"></i>Voltar</button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>

export default {
  name: "FormLivro"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
