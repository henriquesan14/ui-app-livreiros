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
  async GETALL ({commit}, page, nome) {
    const url = `${apiConfig.baseUrl}/usuarios?pagina=${page}&nome=${nome}`;
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