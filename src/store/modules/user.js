import axios from 'axios';
import {apiConfig} from '../../config/config'

const state = {
  users: []
}

const mutations = {
  RECEIVE_USERS (state, {users}) {
    state.users = users
  }
}

const actions = {
  async GETALL ({commit}) {
    const url = `${apiConfig.baseUrl}/usuarios`;
    const { data } = await axios.get(url);
    commit('RECEIVE_USERS',{ users: data.rows});
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