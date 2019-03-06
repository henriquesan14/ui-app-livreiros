<template>
  <div class="menu" v-bind:class="{ 'menu-open': menuAberto }">
    <ul>
      <li>
        <router-link to="/">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </router-link>
      </li>

      <li >
        <a href="#" @click.stop.prevent="toggle()">
          <i class="fas fa-list"></i>
          <span>Autor</span>
        </a>
        <ul v-bind:class="{'show-menu': opAutor, 'hide-menu': !opAutor}">
          <li>
            <router-link to="/autores">
              <i class="fas fa-list"></i>Listar
            </router-link>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-plus-square"></i>Cadastrar
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a href="#" @click.stop.prevent="toggle2()">
          <i class="fas fa-book-open"></i>
          <span>Editora</span>
        </a>
        <ul v-bind:class="{'show-menu': opEditora, 'hide-menu': !opEditora}">
          <li>
            <router-link to="/editoras">
              <i class="fas fa-list-alt"></i>Listar
            </router-link>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-plus-square"></i>Cadastrar
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a href="#" @click.stop.prevent="toggle3()">
          <i class="far fa-comments"></i>
          <span>Assunto</span>
        </a>
        <ul v-bind:class="{'show-menu': opAssunto, 'hide-menu': !opAssunto}">
          <li>
            <router-link to="/assuntos">
              <i class="fas fa-list-alt"></i>Listar
            </router-link>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-plus-square"></i>Novo
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a href="#"  @click.stop.prevent="toggle4()">
          <i class="fas fa-file-alt"></i>
          <span>Descrição</span>
        </a>
        <ul v-bind:class="{'show-menu': opDescricao, 'hide-menu': !opDescricao}">
          <li>
            <a href="#">
              <i class="fas fa-list-alt"></i>Listar
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-plus-square"></i>Cadastrar
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a href="#"  @click.stop.prevent="toggle5()">
          <i class="fas fa-book"></i>
          <span>Livros</span>
        </a>
        <ul v-bind:class="{'show-menu': opLivros, 'hide-menu': !opLivros}">
          <li>
            <router-link to="#">
              <i class="fas fa-list-alt"></i>Listar
            </router-link>
          </li>
          <li>
            <router-link to="/livros/cadastro">
              <i class="fas fa-plus-square"></i>Cadastrar
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";
export default {
  name: "Navbar",
  data() {
    return {
      menuAberto: true,
      opAutor: false,
      opEditora: false,
      opAssunto: false,
      opDescricao: false,
      opLivros: false,
      windowWidth: 0
    };
  },
  created() {
    var largura = window.innerWidth;
    if (largura < 900) {
      this.menuAberto = false;
    }
    var that = this;
    EventBus.$on("abreMenu", function() {
      that.menuAberto = !that.menuAberto;
    });
  },
  watch: {
    windowWidth(newWidth, oldWidth){
        this.handleResize(newWidth);
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      });
    })
  },
  methods: {
    handleResize(largura) {
      if (largura < 900) {
        this.menuAberto = false;
      } else {
        this.menuAberto = true;
      }
    },
    toggle(){
      this.opAutor = !this.opAutor;
    },
    toggle2(){
      this.opEditora = !this.opEditora;
    },
    toggle3(){
      this.opAssunto = !this.opAssunto;
    },
    toggle4(){
      this.opDescricao = !this.opDescricao;
    },
    toggle5(){
      this.opLivros = !this.opLivros;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Navbar.css"></style>
