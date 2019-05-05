import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth'
import user from './modules/user'
import axios from 'axios'

Vue.use(Vuex);

axios.interceptors.request.use(function(config) {
    const auth = JSON.parse(localStorage.getItem('token'));
    if(auth) {
        config.headers.Authorization = auth.token;
    }
    return config;
}, function(err) {
    return Promise.reject(err);
});


export default new Vuex.Store({
    modules: {
        auth,
        user
    }
})