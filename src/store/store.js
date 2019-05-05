import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { apiConfig } from '../config/config'

Vue.use(Vuex)


axios.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function(err) {
    return Promise.reject(err);
});

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

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store