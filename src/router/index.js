import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home/Home';
import Dashboard from '@/components/pages/Dashboard/Dashboard';
import CadastroLivro from '@/components/pages/CadastroLivro/CadastroLivro';
import Autores from '@/components/pages/Autores/Autores';
import Editoras from '@/components/pages/Editoras/Editoras';
import Assuntos from '@/components/pages/Assuntos/Assuntos';
import Categorias from '@/components/pages/Categorias/Categorias';
import Livros from '@/components/pages/Livros/Livros';
import Usuarios from '@/components/pages/Usuarios/Usuarios';
import Login from '@/components/pages/Login/Login';
import Forgot from '@/components/pages/Forgot/Forgot';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [ 
        {
            path: '',
            name: 'Login',
            component: Login,
            beforeEnter: function(to, from, next){
                if(isLogged()){
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
                if(isLogged()){
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
                if(isLogged()){
                    next()
                    return;
                }
                next('/')
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
                },
                {
                    path: '/usuarios',
                    name: 'Usuarios',
                    component: Usuarios
                },
            ]
        },
        {
            path: '/**',
            name: 'Login',
            component: Login,
            beforeEnter: function(to, from, next){
                if(isLogged()){
                    next('/dashboard')
                    return;
                }
                next()
            }
        },
        
    ],
});

const isLogged = () => {
    let token = localStorage.getItem('token')
     if(token){
        return true;
     }
     return false;
}
