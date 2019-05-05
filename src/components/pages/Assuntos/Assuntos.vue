<template>
  <Painel titulo="Assuntos" col="12" text="white" header="primary">
    <div class="row container mb-4">
      <input
        type="text"
        class="form-control col-md-6 mr-2"
        placeholder="Pesquise o nome do assunto..."
      >
      <button class="btn btn-primary mr-2 botao" type="button">
        <i class="fas fa-search-plus mr-1"></i>Consultar
      </button>
      <button class="btn btn-primary botao" type="button" data-toggle="modal" data-target="#modalAssunto">
        <i class="fas fa-plus-circle mr-1"></i>Cadastrar
      </button>
    </div>

    <TabelaAssuntos></TabelaAssuntos>
    <Paginator :qtdPag="3" ></Paginator>

    <Modal titulo="Cadastro Assunto" idModal="modalAssunto">
      <FormAssunto></FormAssunto>
    </Modal>
  </Painel>
  
</template>

<script>
import Painel from "../../shared/Painel/Painel";
import Modal from "../../shared/Modal/Modal";
import Paginator from "../../shared/Paginator/Paginator";
import FormAssunto from "../../shared/FormAssunto/FormAssunto";
import TabelaAssuntos from "../../shared/TabelaAssuntos/TabelaAssuntos";
export default {
  name: "Assuntos",
  components: {
    Painel,
    Modal,
    FormAssunto,
    TabelaAssuntos,
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
