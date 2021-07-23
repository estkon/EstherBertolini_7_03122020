<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/"><img src="../assets/logo-blanc.png" width="150"></a>
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
        
          <ul v-if = "user" class="navbar-nav ml-auto mb-2 mb-lg-0" >
            <li class="nav-item">
              <a class="nav-link active" aria-current="/profil" href="/profil"
                >{{user.firstname}} {{user.lastname}}</a
              >
            </li>
            <li class="nav-item ">
              <a class="nav-link active" aria-current="/post" href="/post"> Créer un Post</a>
            </li>
            <li class="nav-item">
              <a @click="logoutClick" class="nav-link active" aria-current="/logout" href="/login"
                >Déconnexion</a
              >
            </li>
          </ul>
        
       
                <!--Utilisé cette nav si user non connecté-->
        
          <ul v-if = "!user" class="navbar-nav me-auto mb-2 mb-lg-0" >
            <li class="nav-item">
              <a class="nav-link active" aria-current="/login" href="/login"
                >Connexion</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="/signup" href="/signup"
                >Inscription</a
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
       
    methods: {
        logoutClick(){
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
.navbar{
    background-color: #f05454;
}
.navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show>.nav-link {
    color:white;
}
</style>