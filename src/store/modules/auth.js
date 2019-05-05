import axios from 'axios';
import {apiConfig} from '../../config/config'

const state = {
  logged: false,
  token: ''
}

const mutations = {
  LOGIN (state, response) {
    state.logged = true,
    state.token = response,
    localStorage.setItem('token', response);
  },
  LOGOUT: (state) => {
    state.logged = false;
    state.token = '';
    localStorage.removeItem('token')
}
}

const actions = {
  async LOGIN ({commit}, user) {
    const url = `${apiConfig.baseUrl}/login`;
    const { data } = await axios.post(url, user);
    commit('LOGIN', JSON.stringify(data.auth));
  },
  async LOGOUT ({commit}) {
    const url = `${apiConfig.baseUrl}/logout`;
    await axios.post(url);
    commit('LOGOUT');
  }
},

getters =  {
  logged: state => state.logged,
  token: state => state.token
}

export default {
  state,
  mutations,
  actions,
  getters
}