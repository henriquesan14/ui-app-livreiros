<template>
  <Painel titulo="Editoras" col="12" text="white" header="primary">
    <div class="row container mb-4">
      <input
        type="text"
        class="form-control col-md-6 mr-2"
        placeholder="Pesquise o nome da editora..."
      >
      <button class="btn btn-primary mr-2 botao" type="button">
        <i class="fas fa-search-plus mr-1"></i>Consultar
      </button>
      <button class="btn btn-primary botao" type="button" data-toggle="modal" data-target="#modalEditora">
        <i class="fas fa-plus-circle mr-1"></i>Cadastrar
      </button>
    </div>

    <TabelaEditoras></TabelaEditoras>

    <Modal titulo="Cadastro Editora" idModal="modalEditora">
      <FormEditora></FormEditora>
    </Modal>
  </Painel>
  
</template>

<script>
import Painel from "../shared/Painel";
import Modal from "../shared/Modal";
import FormEditora from "../shared/FormEditora";
import TabelaEditoras from "../shared/TabelaEditoras";
export default {
  name: "Editoras",
  components: {
    Painel,
    Modal,
    FormEditora,
    TabelaEditoras
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
