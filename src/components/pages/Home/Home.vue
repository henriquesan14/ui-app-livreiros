
<template>
  <div class="container">
    <Painel col="12" titulo="Home">
      <div class="row">
        <Painel class="painel"  col="6" titulo="Cadastrar Livros" body="primary" header="primary" text="white">
          <div class="box" > 
            <router-link to="/livros/cadastro">
              <i class="fas fa-book icon"></i>
            </router-link>
          </div>
        </Painel>

        <Painel class="painel" titulo="Buscar Livros" col="6" body="primary" header="primary" text="white">
          <div class="box"> 
            <router-link to="/livros">
              <i class="fas fa-list icon"></i>
            </router-link>
          </div>
        </Painel>

        <Painel class="painel" titulo="Cadastrar Categoria de Descrição" col="6" body="primary" header="primary" text="white">
          <div class="box"> 
            <router-link to="/categorias">
              <i class="fas fa-list-alt icon"></i>
            </router-link>
          </div>
        </Painel>
        
      </div>
    </Painel>
    

  </div>
</template>

<script>
import Painel from '../../shared/Painel/Painel'
export default {
  
  name: "Home",
  components: {
    Painel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .box{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon{
    cursor: pointer;
    color: white;
    font-size: 100px;
    padding: 20px ;
    border-radius: 10px;
  }

  .icon:hover{
    background-color: #0D3072;
  }
</style>
