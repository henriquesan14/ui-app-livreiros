<template>
  <Painel titulo="Usuários" col="12" text="white" header="primary">
    <div class="row container mb-4">
      <input
        type="text"
        class="form-control col-md-6 mr-2"
        placeholder="Pesquise o nome do usuário..."
      >
      
      <button class="btn btn-primary mr-2 botao" type="button">
        <i class="fas fa-search-plus mr-1"></i>Consultar
      </button>
      <button class="btn btn-primary botao" type="button" data-toggle="modal" data-target="#modalEditora">
        <i class="fas fa-plus-circle mr-1"></i>Cadastrar
      </button>
    </div>

    <TabelaUsuarios :users="users.rows"></TabelaUsuarios>
    <Paginator :qtdPag="users.totalPage+1"></Paginator>

    <Modal titulo="Cadastro Usuário" idModal="modalEditora">
      <FormEditora></FormEditora>
    </Modal>
  </Painel>
  
</template>

<script>
import Painel from "../../shared/Painel/Painel";
import Modal from "../../shared/Modal/Modal";
import FormEditora from "../../shared/FormEditora/FormEditora";
import TabelaUsuarios from "../../shared/TabelaUsuarios/TabelaUsuarios";
import Paginator from "../../shared/Paginator/Paginator";
import {mapGetters} from 'vuex';
export default {
  name: "Usuarios",
  components: {
    Painel,
    Modal,
    FormEditora,
    TabelaUsuarios,
    Paginator
  },
  mounted(){
      this.$store.dispatch('GETALL', 0);
  },
  computed: mapGetters([
      'users'
  ])
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
