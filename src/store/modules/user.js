import axios from 'axios';
import {apiConfig} from '../../config/config'

const state = {
  users: {}
}

const mutations = {
  RECEIVE_USERS (state, {users}) {
    state.users = users
  }
}

const actions = {
  async GETALL ({commit}, params) {
    const url = `${apiConfig.baseUrl}/usuarios?nome=${params.nome}&pagina=${params.page}`;
    const { data } = await axios.get(url);
    commit('RECEIVE_USERS',{ users: data});
  }
},

getters =  {
  users: state => state.users
}

export default {
  state,
  mutations,
  actions,
  getters
}