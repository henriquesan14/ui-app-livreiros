<template>
    <div>
      <form>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="nome">Nome*</label>
            <input v-model="user.nomeUsuario" type="text" name="nome" id="nome" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="login">Login*</label>
            <input v-model="user.loginUsuario" type="text" name="login" id="login" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="senha">Senha*</label>
            <input v-model="user.senhaUsuario" type="password" name="senha" id="senha" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="confirmSenha">Confirmação de senha*</label>
            <input  type="password" name="confirmSenha" id="confirmSenha" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="email">Email*</label>
            <input v-model="emailUsuario" type="email" name="email" id="email" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="cpf">CPF*</label>
            <input v-model="cpfUsuario" type="text" name="cpf" id="cpf" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="rg">RG*</label>
            <input v-model="rgUsuario" type="text" name="rg" id="rg" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="cep">CEP*</label>
            <input v-model="cepUsuario" type="text" name="cep" id="cep" class="form-control">
          </div>
          <div class="form-group col-md-10">
            <label for="logradouro">Logradouro*</label>
            <input v-model="ruaUsuario" type="text" name="logradouro" id="logradouro" class="form-control">
          </div>
          <div class="form-group col-md-2">
            <label for="numero">Nº*</label>
            <input v-model="numeroUsuario" type="text" name="numero" id="numero" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="complemento">Complemento</label>
            <input v-model="complementoUsuario" type="text" name="complemento" id="complemento" class="form-control">
          </div>
          <div class="form-group col-md-6">
            <label for="bairro">Bairro*</label>
            <input v-model="bairroUsuario" type="text" name="bairro" id="bairro" class="form-control">
          </div>
          
          <div class="form-group col-md-6">
            <label for="estado">Estado*</label>
            <select v-model="selecionado" @change="changeCidades()"  class="custom-select" name="estado" id="estado" required>
              <option  :value="estado.idUf" v-for="estado in estados" :key="estado.idUf">{{estado.nomeUf}}</option>
            </select>
          </div>
          <div  class="form-group col-md-6">
            <label for="cidade">Cidade*</label>
            <select v-model="user.cidadeUsuario"  class="custom-select" name="cidade" id="cidade" required>
              <option :value="cidade.idCidade" v-for="cidade in cidades" :key="cidade.idCidade">{{cidade.nomeCidade}}</option>
            </select>
          </div>
          <div class="form-group col-md-12">
            <button @click="saveUsuario()" type="button" class="btn btn-success mr-1"><i class="fas fa-save mr-1"></i>Cadastrar</button>
            <button type="button" class="btn btn-danger mr-1"><i class="fas fa-broom mr-1"></i>Limpar</button>
            <button type="button" class="btn btn-light" data-dismiss="modal"><i class="fas fa-arrow-circle-left mr-1"></i>Voltar</button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import axios from 'axios';
import {apiConfig} from '../../../config/config.js'
export default {
  name: "FormUsuario",
  computed: mapGetters([
    'estados',
    'cidades'
  ]),
  data() {
    return {
      selecionado: null
    }
  },
  props:{
    user: {
      type: Object,
      required: true
    }
  },
  methods:{
    async changeCidades(){
      await this.$store.dispatch('GETCIDADES', {id: this.selecionado});
    },
    saveUsuario(){
      axios.post(`${apiConfig.baseUrl}/usuarios`, this.user).then(() => this.user = {}).catch(err => console.log(err))
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
