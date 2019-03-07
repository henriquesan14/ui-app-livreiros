<template>
  <div class="table-responsive">
    <table class="table table-hover">
        <thead class="thead-dark">
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="editora of editoras" :key="editora.id">
                <td>{{editora.id}}</td>
                <td>{{editora.nome}}</td>
                <td><button class="btn btn-primary btn-sm"><i class="fas fa-pencil-alt"></i></button></td>
                <td><button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TabelaEditoras",
  data() {
    return {
      editoras: [
        {id: '1',
        nome: 'Editora1'},
        {id: '2',
        nome: 'Editora2'},
        {id: '3',
        nome: 'Editora3'},
        {id: '4',
        nome: 'Editora4'},
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
