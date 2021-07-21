import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Profil from './views/Profil.vue'
import Post from './components/Post.vue'

Vue.use(Router)

export default new Router({
    mode:'history', //pour enlever le # du path
    routes: [
        {path:'/', component: Home},
        {path:'/Login', component: Login},
        {path:'/Signup', component: Signup},
        {path:'/Profil', component: Profil},
        {path:'/Post', component: Post}
    ]
})

