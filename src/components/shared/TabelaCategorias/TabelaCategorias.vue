<template>
  <div class="table-responsive">
    <table class="table table-hover">
        <thead class="thead-dark">
            <tr>
                <th>Cód.</th>
                <th>Nome</th>
                <th>Status</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="categoria of categorias" :key="categoria.id">
                <td>{{categoria.id}}</td>
                <td>{{categoria.nome}}</td>
                <td><button class="btn btn-sm" v-bind:class="{'btn-success': categoria.status, 'btn-danger': !categoria.status}"><i class="fas fa-power-off"></i></button></td>
                <td><button class="btn btn-primary btn-sm"><i class="fas fa-pencil-alt"></i></button></td>
                <td><button class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalDescricao"><i class="fas fa-plus-circle"></i></button></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TabelaCategorias",
  data() {
    return {
      categorias: [
        {id: '1',
        nome: 'Categoria1',
        status: true},
        {id: '2',
        nome: 'Categoria2',
        status: true},
        {id: '3',
        nome: 'Categoria3',
        status: true},
        {id: '4',
        nome: 'Categoria4',
        status: false},
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
