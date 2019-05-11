import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth'
import user from './modules/user'
import estado from './modules/estado'
import axios from 'axios'
import router from '../router'

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

// axios.interceptors.response.use((response) => {
//     return response;
// }, function (error) {
//     // Do something with response error
//     if (error.response.status === 401) {
//         localStorage.removeItem('token')
//         router.go('/')
//     }
//     return Promise.reject(error);
// });


export default new Vuex.Store({
    modules: {
        auth,
        user,
        estado
    }
})