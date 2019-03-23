<template>
  <div class="table-responsive">
    <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th>Cód.</th>
          <th>Nome</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="assunto of assuntos" :key="assunto.id">
          <td>{{assunto.id}}</td>
          <td>{{assunto.nome}}</td>
          <td>
            <button class="btn btn-primary btn-sm">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </td>
          <td>
            <button class="btn btn-danger btn-sm">
              <i class="fas fa-trash"></i>
            </button>
          </td>   
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TabelaAssuntos",
  data() {
    return {
      assuntos: [
        { id: "1", nome: "Assunto1" },
        { id: "2", nome: "Assunto2" },
        { id: "3", nome: "Assunto3" },
        { id: "4", nome: "Assunto4" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
