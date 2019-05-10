<template>
    <div>
      <form>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="nome">Nome*</label>
            <input type="text" name="nome" id="nome" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="login">Login*</label>
            <input type="text" name="login" id="login" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="senha">Senha*</label>
            <input type="password" name="senha" id="senha" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="confirmSenha">Confirmação de senha*</label>
            <input type="password" name="confirmSenha" id="confirmSenha" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="email">Email*</label>
            <input type="email" name="email" id="email" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="cpf">CPF*</label>
            <input type="text" name="cpf" id="cpf" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="rg">RG*</label>
            <input type="text" name="rg" id="rg" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="cep">CEP*</label>
            <input type="text" name="cep" id="cep" class="form-control">
          </div>
          <div class="form-group col-md-10">
            <label for="logradouro">Logradouro*</label>
            <input type="text" name="logradouro" id="logradouro" class="form-control">
          </div>
          <div class="form-group col-md-2">
            <label for="numero">Nº*</label>
            <input type="text" name="numero" id="numero" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="complemento">Complemento</label>
            <input type="text" name="complemento" id="complemento" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="bairro">Bairro*</label>
            <input type="text" name="bairro" id="bairro" class="form-control">
          </div>
          
          <div class="form-group col-md-6">
            <label for="estado">Estado*</label>
            <select class="custom-select" name="estado" id="estado" required>
              <option value>Selecione uma opção</option>
              <option value="1">PB</option>
              <option value="2">PE</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="cidade">Cidade*</label>
            <select class="custom-select" name="cidade" id="cidade" required>
              <option value>Selecione uma opção</option>
              <option value="1">PB</option>
              <option value="2">PE</option>
            </select>
          </div>
          <div class="form-group col-md-12">
            <button type="button" class="btn btn-success mr-1"><i class="fas fa-save mr-1"></i>Cadastrar</button>
            <button type="button" class="btn btn-danger mr-1"><i class="fas fa-broom mr-1"></i>Limpar</button>
            <button type="button" class="btn btn-light" data-dismiss="modal"><i class="fas fa-arrow-circle-left mr-1"></i>Voltar</button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: "FormUsuario"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
