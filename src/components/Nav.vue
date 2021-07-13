<template>

            <nav class="navbar navbar-expand navbar-light fixed-top">
            <div class="container">
                
                <router-link to="/" class="navbar-brand"> <img class="logo" src="../assets/logo.png" alt="Logo groupomania"> </router-link>   
                 
                <div class="collapse navbar-collapse" >
                    <ul class="navbar-nav ml-auto" v-if="!user">
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link"> Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/signup" class="nav-link"> SignUp</router-link>
                        </li>
                    </ul>
                    <!-- Navigation si user connecté -->
                     <ul class="navbar-nav ml-auto" v-if="user">
                        <li class="nav-item">
                            <a href="javascript:void(0)" @click="handleClick" class="nav-link"> Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>


<script>
import {mapGetters} from 'vuex'

export default {
    name: 'Nav',
    methods: {
        handleClick(){
            // déconnexion donc suppression du token
            localStorage.removeItem('token');
            //gestion du logout changement de la nav
            this.$store.dispatch('user', null);
            //retour à la page principale
            this.$router.push('/');
        }
    },
    computed: {
        ...mapGetters(['user'])
    }
}
</script>


<style scoped>
  img{
      display: flex;
      justify-content: center;
  }

  .navbar .navbar-expand .navbar-light .fixed-top{
      max-height: 150px;
  }
</style>