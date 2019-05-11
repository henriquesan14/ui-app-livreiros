<template>
  <Painel titulo="Usuários" col="12" text="white" header="primary">
    <Loading :loader="loader"></Loading>
    <div v-if="!loader">
      <div class="row container mb-4">
        <input
        v-model="nome"
        @keydown.enter="searchUser()"
          type="text"
          class="form-control col-md-6 mr-2"
          placeholder="Pesquise o nome do usuário..."
        >
        
        <button @click="searchUser()" class="btn btn-primary mr-2 botao" type="button">
          <i class="fas fa-search-plus mr-1"></i>Consultar
        </button>
        <button class="btn btn-primary botao" type="button" data-toggle="modal" data-target="#modalUsuario">
          <i class="fas fa-plus-circle mr-1"></i>Cadastrar
        </button>
      </div>

      <TabelaUsuarios :users="users.rows"></TabelaUsuarios>
      <Paginator :users="users" @go-page="goPage"  @next="next" @previous="previous"></Paginator>
    </div>
    <Modal titulo="Cadastro Usuário" idModal="modalUsuario" :large="true">
      <FormUsuario :user="user"></FormUsuario>
    </Modal>
  </Painel>

  
  
  
</template>

<script>
import Painel from "../../shared/Painel/Painel";
import Modal from "../../shared/Modal/Modal";
import FormUsuario from "../../shared/FormUsuario/FormUsuario";
import TabelaUsuarios from "../../shared/TabelaUsuarios/TabelaUsuarios";
import Paginator from "../../shared/Paginator/Paginator";
import Loading from "../../shared/Loading/Loading"
import {mapGetters} from 'vuex';
export default {
  name: "Usuarios",
  components: {
    Painel,
    Modal,
    FormUsuario,
    TabelaUsuarios,
    Paginator,
    Loading
  },
  data() {
    return {
      pagAtiva: 0,
      nome: '',
      loader: false,
      user: {

      }
    }
  },
  computed: mapGetters([
      'users'
  ]),
  created(){
      this.getAll();
  },
  methods: {
    async getAll(nome ='',page=0){
      this.loader = true;
      try{
        await this.$store.dispatch('GETALL', {nome, page});
      }catch(err){
        console.log(err)
      }finally{
        this.loader = false;
      }      

    },
    searchUser(){
      this.getAll(this.nome);
    },
    goPage(index){
      this.getAll(this.nome, index);
      this.pagAtiva = index;
    },
    next(){
      this.getAll(this.nome, this.pagAtiva+1);
      this.pagAtiva = this.pagAtiva+1;
    },
    previous(){
      this.getAll(this.nome, this.pagAtiva-1);
      this.pagAtiva = this.pagAtiva-1;
    }
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
