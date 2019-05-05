import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  logged: false,
  token: ''
}

const mutations = {
  LOGIN (state, response) {
    state.logged = true,
    state.token = response,
    localStorage.setItem('token', response);
    localStorage.setItem('logged', true);
    console.log('state updated');
    console.log('state.logged flag is: '+state.logged);
    console.log('state.token: '+state.token);
  },
  LOGOUT: (state) => {
    state.logged = false;
    state.token = '';
    localStorage.setItem('token', '');
    localStorage.setItem('logged', false);
}
}

const actions = {
  async LOGIN ({commit}, user) {
    const url = `http://localhost:3000/login`;
    const { data } = await axios.post(url, user);
    commit('LOGIN', JSON.stringify(data.auth.token));
  },
  LOGOUT ({commit}) {
    commit('LOGOUT');
  }
},

getters =  {
  logged: state => state.session.logged,
  token: state => state.session.token
}

// const getters = {
//   characters: state => {
//     return state.data.map(data => {
//       return {
//         name: data.name,
//         url: data.urls[1] ? data.urls[1].url : data.urls[0].url,
//         image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
//         description: data.description === '' ? 'No description listed for this character.' : data.description
//       }
//     })
//   }
//}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store