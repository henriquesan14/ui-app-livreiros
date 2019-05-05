
<template>
  <Painel titulo="Cadastro de Livros" col="12" text="white" header="primary">
    <FormLivro></FormLivro>

    <Modal titulo="Cadastro Autor" idModal="modalAutor">
      <FormAutor></FormAutor>
    </Modal>

    <Modal titulo="Cadastro Editora" idModal="modalEditora">
      <FormEditora></FormEditora>
    </Modal>

    <Modal titulo="Cadastro Assunto" idModal="modalAssunto">
      <FormAssunto></FormAssunto>
    </Modal>

  </Painel>
</template>

<script>
import Painel from "../../shared/Painel/Painel";
import Modal from "../../shared/Modal/Modal";
import FormLivro from "../../shared/FormLivro/FormLivro";
import FormAutor from "../../shared/FormAutor/FormAutor";
import FormEditora from "../../shared/FormEditora/FormEditora";
import FormAssunto from "../../shared/FormAssunto/FormAssunto";
export default {
  name: "CadastroLivro",
  components: {
    Painel,
    Modal,
    FormLivro,
    FormAutor,
    FormEditora,
    FormAssunto
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
