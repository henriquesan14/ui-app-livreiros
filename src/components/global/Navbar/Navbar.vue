<template>
  <div class="menu" v-bind:class="{ 'menu-open': menuAberto }">
    <ul>
      <li>
        <router-link to="/dashboard">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </router-link>
      </li>

      <li>
        <router-link to="/autores">
          <i class="fas fa-list"></i>
          <span>Autores</span>
        </router-link>
      </li>

      <li>
        <router-link to="/editoras">
          <i class="fas fa-book-open"></i>
          <span>Editorsa</span>
        </router-link>
      </li>

      <li>
        <router-link to="/assuntos">
          <i class="fas fa-comments"></i>
          <span>Assuntos</span>
        </router-link>
      </li>

      <li>
        <router-link to="/categorias">
          <i class="fas fa-file-alt"></i>
          <span>Categorias</span>
        </router-link>
      </li>

      <li>
        <router-link to="/usuarios">
          <i class="fas fa-user"></i>
          <span>Usuários</span>
        </router-link>
      </li>

      <li>
        <a href="#"  @click.stop.prevent="toggle()">
          <i class="fas fa-book"></i>
          <span>Livros</span><i class="fas fa-caret-down"></i>
        </a>
        <ul v-bind:class="{'show-menu': opLivros, 'hide-menu': !opLivros}">
          <li>
            <router-link to="/livros">
              <i class="fas fa-list-alt"></i>Listar
            </router-link>
          </li>
          <li>
            <router-link  to="/livros/cadastro">
              <i class="fas fa-plus-square"></i>Cadastrar
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { EventBus } from "../../../event-bus.js";
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
    windowWidth(newWidth){
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
      this.opLivros = !this.opLivros;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Navbar.css"></style>
