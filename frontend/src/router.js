import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Profil from './views/Profil.vue'
import UsersList from './views/UsersList.vue'
import PostCreateForm from './components/PostCreateForm.vue'
import Post from './views/Post.vue'
import  store  from './vuex'
import VueRouter from 'vue-router'


Vue.use(Router)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
    { path: '/',name:"Home", component: Home, meta: { requiresLogin: true } },
    { path: '/connexion', name:"Login", component: Login },
    { path: '/inscription', name:"Signup", component: Signup },
    { path: '/profil', name:"Profil", component: Profil, meta: { requiresLogin: true } },
    { path: '/creer-post', name:"PostCreate" ,component: PostCreateForm, meta: { requiresLogin: true } },
    { path: '/liste-utilisateurs', name:"UsersList" ,component: UsersList, meta: { requiresLogin: true } },
    { path: '/post/:id', name:"Post" ,component: Post, meta: { requiresLogin: true } },
    
    
]
const router = new Router({
    mode: 'history', //pour enlever le # du path
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin) && !store.state.user) {
        // set Vuex state's globalError, then redirect
        next("/connexion")
    } else {
        next()
    }
})

export default router