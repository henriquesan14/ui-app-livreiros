import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import CadastroLivro from '@/components/pages/CadastroLivro';
import Autores from '@/components/pages/Autores';
import Editoras from '@/components/pages/Editoras';
import Assuntos from '@/components/pages/Assuntos';
import Categorias from '@/components/pages/Categorias';
import Livros from '@/components/pages/Livros';

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
            path: '/categorias',
            name: 'Categorias',
            component: Categorias
        },
        {
            path: '/livros',
            name: 'Livros',
            component: Livros
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