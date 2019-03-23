<template>
  <div class="table-responsive">
    <table class="table table-hover">
        <thead class="thead-light">
            <tr>
                <th>Cód.</th>
                <th>Nome</th>
                <th>(-)R$</th>
                <th>Status</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="descricao of descricoes" :key="descricao.id">
                <td>{{descricao.id}}</td>
                <td>{{descricao.nome}}</td>
                <td>{{descricao.valor}}</td>
                <td><button class="btn btn-sm" v-bind:class="{'btn-success': descricao.status, 'btn-danger': !descricao.status}"><i class="fas fa-power-off"></i></button></td>
                <td><button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalEditDesc"><i class="fas fa-pencil-alt" ></i></button></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TabelaDescricoes",
  data() {
    return {
      descricoes: [
        {id: '1',
        nome: 'Descricao1',
        valor: '2.00',
        status: true},
        {id: '2',
        nome: 'Descricao2',
        valor: '1.00',
        status: true},
        {id: '3',
        nome: 'Descricao3',
        valor: '1.50',
        status: true},
        {id: '4',
        nome: 'Descricao4',
        valor: '2.50',
        status: false},
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
