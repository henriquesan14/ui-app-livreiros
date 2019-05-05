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
            <tr v-for="autor of autores" :key="autor.id">
                <td>{{autor.id}}</td>
                <td>{{autor.nome}}</td>
                <td><button class="btn btn-primary btn-sm"><i class="fas fa-pencil-alt"></i></button></td>
                <td><button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TabelaAutores",
  data() {
    return {
      autores: [
        {id: '1',
        nome: 'Autor1'},
        {id: '2',
        nome: 'Autor2'},
        {id: '3',
        nome: 'Autor3'},
        {id: '4',
        nome: 'Autor4'},
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
