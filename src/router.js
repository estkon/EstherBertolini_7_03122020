import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

Vue.use(Router)

export default new Router({
    mode:'history', //pour enlever le # du path
    routes: [
        {path:'/', component: Home},
        {path:'/Login', component: Login},
        {path:'/Signup', component: Signup}
    ]
})

