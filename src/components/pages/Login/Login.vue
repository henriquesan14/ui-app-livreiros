<template>
  <div id="form-container">

    <div
      class="panel"
      id="form-box"
    >
      <form
        method="post" @submit.prevent="login"
      >
        <img
          src="../../../assets/logo.jpg"
          id="logo" class="mb-3"
        />
        <div class="alert alert-danger" v-if="error" role="alert">
          {{error}}
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span
              class="input-group-text"
              id="basic-addon1"
            ><i class="fas fa-user"></i></span>
          </div>
          <input
            required
            email
            type="text"
            name="login"
            class="form-control"
            placeholder="Login"
            aria-label="login"
            aria-describedby="basic-addon1"
            v-model="user.loginUsuario"
          >
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span
              class="input-group-text"
              id="basic-addon1"
            ><i class="fas fa-lock"></i></span>
          </div>
          <input
            required
            minlength="6"
            maxlength="40"
            type="password"
            name="senha"
            class="form-control"
            placeholder="Password"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="user.senhaUsuario"
          >
        </div>

        <div class="form-group">
          <button
            type="submit"
            class="btn btn-success btn-login form-control"
          >Entrar
          <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button>
        </div>
      

        <div class="forgot mb-2">
          <router-link to="/forgot">Esqueceu sua senha?</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      user: {
        loginUsuario: '',
        senhaUsuario: ''
      },
      loading: false,
      error: ''
    }
  },
  methods:{
    async login(){
      this.loading = true;
      this.$store.dispatch('LOGIN', this.user)
      .then(
        () => {this.$router.push('/dashboard')}    
      )
      .catch(
        (err) => {
          this.error = 'Usuario/Senha inválidos!'
        }
      )
      .finally( () => {
        this.loading = false;
      }
      );
      
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Login.css">
</style>
