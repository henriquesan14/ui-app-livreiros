
<template>
  <Painel titulo="Livros" col="12" text="white" header="primary">
    <div class="row container mb-2">
      <select class="custom-select col-md-2 mr-2">
          <option>Titulo</option>
          <option>Autor</option>
          <option>ISBN</option>
          <option>Código</option>
      </select>
      <input
        type="text"
        class="form-control col-md-6 mr-2"
        placeholder="Pesquise..."
      >
      <button class="btn btn-primary mr-2 botao" type="button">
        <i class="fas fa-search-plus mr-1"></i>Consultar
      </button>
      <button class="btn btn-primary botao" type="button" data-toggle="modal" data-target="#modalAutor">
        <i class="fas fa-plus-circle mr-1"></i>Cadastrar
      </button>
    </div>

    <div class="row container mb-4">
      <select class="custom-select col-md-2 mr-2">
          <option>Ano</option>
          <option>Editora</option>
      </select>
      <input
        type="text"
        class="form-control col-md-6 mr-2"
        placeholder="Pesquise..."
      >
      <button class="btn btn-primary botao" type="button">
        <i class="fas fa-search-plus mr-1"></i>Filtrar
      </button>

    </div>

    <TabelaLivros></TabelaLivros>
    <Paginator :qtdPag="10"></Paginator>

  </Painel>
  
</template>

<script>
import Painel from "../shared/Painel";

import TabelaLivros from "../shared/TabelaLivros";
import Paginator from "../shared/Paginator";
export default {
  name: "Livros",
  components: {
    Painel,
    TabelaLivros,
    Paginator
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media (max-width: 767px) {
    .botao{
      margin-top:5px;
    }
   }
</style>
