<template>
  <div id="app">
    
      <Nav :user= "user"/>

    <div class="container pt-5">
     
             <router-view />

    </div>

  </div>
</template>

<script>
import Nav from "./components/Nav.vue";


// import axios from 'axios'

export default {
  name: "App",
  components: {
    Nav,
  },
  data() {
    return {
      user: null,
    };
  },
  methods:{
  checkLoggedUser: function () {
    //Si user pas connecté => login
      if ( !localStorage.getItem("user")) {
      this.$router.push("/login");
      }// Si user connecté => recupération data user ds LS
      else{
        this.user = JSON.parse(localStorage.getItem("user"))
      }
    },
  },
  
  created() {
    this.checkLoggedUser();
  },

     };
</script>


<style>

</style>