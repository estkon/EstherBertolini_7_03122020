<!--page profil user-->
<template>
  <form @submit.prevent="modifyUserSubmit">

    <h3>Votre Compte</h3>

    <div class="form-group">
      <label>Prénom</label>
      <input
        type="text"
        class="form-control"
        v-model="user.firstname"
        placeholder="Prenom"
        aria-label="prenom"
      />
    </div>

    <div class="form-group">
      <label>Nom</label>
      <input
        type="text"
        class="form-control"
        v-model="user.lastname"
        placeholder="Nom"
        aria-label="nom"
      />
    </div>
    <div class="form-group">
      <label>Mot de passe</label>
      <input
        type="password"
        class="form-control"
        v-model="user.password"
        placeholder="Mot de passe"
        aria-label="mot de passe"
      />
    </div>

    <div class="btn-group">

        <button type="button" class="btn btn-primary btn-block" @click="deleteUser(user.id)"> Supprimer le compte</button>
     
    </div>
  </form>
</template>

<script>

import {mapGetters} from 'vuex'
import axios from 'axios'

export default {
  name: "ProfilForm",
  computed: {
    ...mapGetters(["user"]),
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      password: "",
      error: "",
    };
  },
  methods: {
      deleteUser(userId){
          axios.delete("http://localhost:8000/api/user/" + userId)
          .then(()=>{
            sessionStorage.clear()
              window.location.href='/signup'
          })
          .catch((error) => console.log(error)); 
      }
  }}
</script>

<style scoped>
button {
  max-width: 100%;
}
.btn-group {
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
}

.btn {
  background-color: #800000;
  color: white;
}
h3{
      color: #f05454;
}
</style>



