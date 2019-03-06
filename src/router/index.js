import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import CadastroLivro from '@/components/pages/CadastroLivro';
import Autores from '@/components/pages/Autores';
import Editoras from '@/components/pages/Editoras';
import Assuntos from '@/components/pages/Assuntos';

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
            path: '/autores',
            name: 'Autores',
            component: Autores
        },
        {
            path: '/editoras',
            name: 'Editoras',
            component: Editoras
        },
        {
            path: '/assuntos',
            name: 'Assuntos',
            component: Assuntos
        },
        {
            path: '/livros/cadastro',
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