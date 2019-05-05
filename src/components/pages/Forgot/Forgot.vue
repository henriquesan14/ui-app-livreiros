<template>
  <div id="form-container">

    <div
      class="panel"
      id="form-box"
    >
      <form
        method="post"
      >
        <img
          src="../../../assets/logo.jpg"
          id="logo" class="mb-3"
        />
        <div>
          <h4>Recuperação de senha</h4>
          <p>Informe o email e receberá um códido para alteração da senha.</p>
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
            name="email"
            class="form-control"
            placeholder="Informe o email..."
            aria-label="email"
            aria-describedby="basic-addon1"
          >
        </div>

        <div class="form-group">
          <input
            type="submit"
            value="Enviar"
            class="btn btn-success btn-login form-control"
          />
          <router-link class="btn form-control back" to="/">Voltar</router-link>
        </div>


      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forgot"

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Forgot.css">
</style>
