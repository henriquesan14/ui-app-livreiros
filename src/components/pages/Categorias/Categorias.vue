<template>
  <Painel titulo="Categorias" col="12" text="white" header="primary">
    <div class="row container mb-4">
      <input
        type="text"
        class="form-control col-md-6 mr-2"
        placeholder="Pesquise o nome da categoria..."
      >
      <button class="btn btn-primary mr-2 botao" type="button">
        <i class="fas fa-search-plus mr-1"></i>Consultar
      </button>
      <button class="btn btn-primary botao" type="button" data-toggle="modal" data-target="#modalCategoria">
        <i class="fas fa-plus-circle mr-1"></i>Cadastrar
      </button>
    </div>

    <TabelaCategorias></TabelaCategorias>
    <Paginator :qtdPag="2"></Paginator>

    <Modal titulo="Cadastro Categoria" idModal="modalCategoria">
      <FormCategoria></FormCategoria>
    </Modal>

    <Modal titulo="Gerenciar Descrição" idModal="modalDescricao" :large="true">
      <FormDescricao></FormDescricao>
      <TabelaDescricoes></TabelaDescricoes>
        <button class="btn btn-danger" data-dismiss="modal">Fechar</button>
    </Modal >
      
    <Modal titulo="Editar Descrição" idModal="modalEditDesc" :large="true">
      <FormDescricao btn="Editar"></FormDescricao>
    </Modal>
  </Painel>
  
</template>

<script>
import Painel from "../../shared/Painel/Painel";
import Modal from "../../shared/Modal/Modal";
import FormCategoria from "../../shared/FormCategoria/FormCategoria";
import TabelaCategorias from "../../shared/TabelaCategorias/TabelaCategorias";
import Paginator from "../../shared/Paginator/Paginator";
import FormDescricao from "../../shared/FormDescricao/FormDescricao";
import TabelaDescricoes from "../../shared/TabelaDescricoes/TabelaDescricoes";
export default {
  name: "Editoras",
  components: {
    Painel,
    Modal,
    FormCategoria,
    TabelaCategorias,
    Paginator,
    FormDescricao,
    TabelaDescricoes
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
