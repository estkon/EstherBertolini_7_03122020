import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Profil from './views/Profil.vue'
import PostCreateForm from './components/PostCreateForm.vue'
import  store  from './vuex'
import VueRouter from 'vue-router'


Vue.use(Router)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
    { path: '/',name:"Home", component: Home, meta: { requiresLogin: true } },
    { path: '/login', name:"Login", component: Login },
    { path: '/signup', name:"Signup", component: Signup },
    { path: '/profil', name:"Profil", component: Profil, meta: { requiresLogin: true } },
    { path: '/postCreate', name:"PostCreate" ,component: PostCreateForm, meta: { requiresLogin: true } },
    
    
]
const router = new Router({
    mode: 'history', //pour enlever le # du path
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin) && !store.state.user) {
        // set Vuex state's globalError, then redirect
        next("/login")
    } else {
        next()
    }
})

export default router