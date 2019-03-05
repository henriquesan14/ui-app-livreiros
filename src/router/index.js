import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import CadastroLivro from '@/components/pages/CadastroLivro';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/cadastro',
            name: 'CadastroLivro',
            component: CadastroLivro
        },
        {
            path: '/**',
            name: 'Home',
            component: Home
        },
    ],
});