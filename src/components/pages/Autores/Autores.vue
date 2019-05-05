
<template>
  <Painel titulo="Autores" col="12" text="white" header="primary">
    <div class="row container mb-4">
      <input
        type="text"
        class="form-control col-md-6 mr-2"
        placeholder="Pesquise o nome do autor..."
      >
      <button class="btn btn-primary mr-2 botao" type="button">
        <i class="fas fa-search-plus mr-1"></i>Consultar
      </button>
      <button class="btn btn-primary botao" type="button" data-toggle="modal" data-target="#modalAutor">
        <i class="fas fa-plus-circle mr-1"></i>Cadastrar
      </button>
    </div>

    <TabelaAutores></TabelaAutores>
    <Paginator :qtdPag="7"></Paginator>

    <Modal titulo="Cadastro Autor" idModal="modalAutor">
      <FormAutor></FormAutor>
    </Modal>
  </Painel>
  
</template>

<script>
import Painel from "../../shared/Painel/Painel";
import Modal from "../../shared/Modal/Modal";
import FormAutor from "../../shared/FormAutor/FormAutor";
import TabelaAutores from "../../shared/TabelaAutores/TabelaAutores";
import Paginator from "../../shared/Paginator/Paginator";
export default {
  name: "Autores",
  components: {
    Painel,
    Modal,
    FormAutor,
    TabelaAutores,
    Paginator
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media (max-width: 767px) {
    .botao{
      margin-top:10px;
    }
   }
</style>
