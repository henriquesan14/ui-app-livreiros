import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router';
import store from './store';


Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
});
