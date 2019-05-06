<template>
  <div class="table-responsive">
    <table class="table table-hover">
        <thead class="thead-dark">
            <tr>
                <th>Cód.</th>
                <th>Nome</th>
                <th>Login</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user of users" :key="user.idUsuario">
                <td>{{user.idUsuario}}</td>
                <td>{{user.nomeUsuario}}</td>
                <td>{{user.loginUsuario}}</td>
                <td><button class="btn btn-primary btn-sm"><i class="fas fa-pencil-alt"></i></button></td>
                <td><button class="btn btn-danger btn-sm"><i class="fas fa-arrow-circle-up"></i></button></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TabelaUsuarios",
  props: {
    users: {
      type: Array,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
