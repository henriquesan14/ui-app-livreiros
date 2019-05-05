import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Dashboard from '@/components/pages/Dashboard';
import CadastroLivro from '@/components/pages/CadastroLivro';
import Autores from '@/components/pages/Autores';
import Editoras from '@/components/pages/Editoras';
import Assuntos from '@/components/pages/Assuntos';
import Categorias from '@/components/pages/Categorias';
import Livros from '@/components/pages/Livros';
import Login from '@/components/pages/Login';
import Forgot from '@/components/pages/Forgot';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [ 
        {
            path: '',
            name: 'Login',
            component: Login,
            beforeEnter: function(to, from, next){
                let token = localStorage.getItem('token')
                if(token){
                    next('/dashboard')
                    return;
                }
                next()
            }
        },
        {
            path: '/forgot',
            name: 'Forgot',
            component: Forgot,
            beforeEnter: function(to, from, next){
                let token = localStorage.getItem('token')
                if(token){
                    next('/dashboard')
                    return;
                }
                next()
            }
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            beforeEnter: function(to, from, next){
                let token = localStorage.getItem('token')
                if(!token){
                    next('/')
                    return;
                }
                next()
            },
            children: [
                {
                    path: '',
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
                }
            ]
        },
        {
            path: '/**',
            name: 'Login',
            component: Login,
            beforeEnter: function(to, from, next){
                let token = localStorage.getItem('token')
                if(token){
                    next('/dashboard')
                    return;
                }
                next()
            }
        },
        
    ],
});