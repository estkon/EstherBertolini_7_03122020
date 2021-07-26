<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/"><img src="../assets/logo-blanc.png" width="150"></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <!--Utilisé cette nav si user connecté-->
        
          <ul v-if="user" class="navbar-nav ml-auto mb-2 mb-lg-0" >
            <li class="nav-item">
              <router-link  class="nav-link" to="/profil"
                >{{user.firstname}} {{user.lastname}}</router-link>
            </li>
            <li class="nav-item ">
              <router-link class="nav-link active"  to="/post"> Créer un Post</router-link>
            </li>
            <li class="nav-item">
              <a @click="logoutClick" class="nav-link active" aria-current="/logout" href="/login"
                >Déconnexion</a
              >
            </li>
          </ul>
        
       
                <!--Utilisé cette nav si user non connecté-->
        
          <ul v-if="!user" class="navbar-nav me-auto mb-2 mb-lg-0" >
            <li class="nav-item">
              <router-link class="nav-link active"  to="/login"
                >Connexion</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link active"  to="/signup"
                >Inscription</router-link
              >
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
        computed: {
        ...mapGetters(["user"]),
    },
      data(){
        return{
        }
      },
    methods: {
        logoutClick(){
            // déconnexion donc suppression du token
            localStorage.clear();
            //gestion du logout changement de la nav
            this.$store.dispatch('user', null);
            //retour à la page principale
            this.$router.push('/');
        }
    },


}


</script>


<style scoped>
.navbar{
    background-color: #f05454;
}
.navbar-light .navbar-nav .nav-link {
    color: white;
}
</style>