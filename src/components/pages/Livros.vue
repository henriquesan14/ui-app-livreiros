
<template>
  <Painel titulo="Livros" col="12" text="white" header="primary">
    <div class="row container mb-1">
      <select class="custom-select col-md-2 mr-2 mb-1">
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
      <button class="btn btn-primary mr-2 mr-top" type="button">
        <i class="fas fa-search-plus mr-1"></i>Consultar
      </button>
      <button class="btn btn-primary mr-top" type="button" data-toggle="modal" data-target="#modalLivro">
        <i class="fas fa-plus-circle mr-1"></i>Cadastrar
      </button>
    </div>

    <div class="row container mb-4">
      <select class="custom-select col-md-2 mr-2 mb-1">
          <option>Ano</option>
          <option>Editora</option>
      </select>
      <input
        type="text"
        class="form-control col-md-6 mr-2"
        placeholder="Pesquise..."
      >
      <button class="btn btn-primary mr-top" type="button">
        <i class="fas fa-search-plus mr-1"></i>Filtrar
      </button>

    </div>

    <TabelaLivros></TabelaLivros>
    <Paginator :qtdPag="10"></Paginator>

    <Modal titulo="Cadastro Livro" idModal="modalLivro" :large="true">
      <FormLivro></FormLivro>
    </Modal>

    <Modal titulo="Adicionar Livro Descrito" idModal="modalLivroDescrito" :large="true">
      <div class="table-responsive">
          <table class="table table-striped">
            <thead class="bg-warning">
              <tr>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Editora</th>
                <th>Ano</th>
                <th>Condição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HISTORIA DA FILOSOFIA OCIDENTAL (BOX) - 3 VOLUMES</td>
                <td></td>
                <td>ELSEVIER/ALTA BOOKS</td>
                <td>2015</td>
                <td>Usado</td>
              </tr>
            </tbody>
          </table>
      </div>
      <FormLivroDescrito></FormLivroDescrito>
    </Modal>

  </Painel>
  
</template>

<script>
import Painel from "../shared/Painel";
import Modal from "../shared/Modal";
import FormLivro from "../shared/FormLivro";
import TabelaLivros from "../shared/TabelaLivros";
import Paginator from "../shared/Paginator";
import FormLivroDescrito from "../shared/FormLivroDescrito"
export default {
  name: "Livros",
  components: {
    Painel,
    Modal,
    TabelaLivros,
    Paginator,
    FormLivro,
    FormLivroDescrito
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media (max-width: 767px) {
    .mr-top{
      margin-top:5px;
    }
   }

</style>
