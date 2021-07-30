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
      />
    </div>

    <div class="form-group">
      <label>Nom</label>
      <input
        type="text"
        class="form-control"
        v-model="user.lastname"
        placeholder="Nom"
      />
    </div>
    <div class="form-group">
      <label>Mot de passe</label>
      <input
        type="password"
        class="form-control"
        v-model="user.password"
        placeholder="Mot de passe"
      />
    </div>

    <div class="btn-group">
      <button type="submit" class="btn btn-primary btn-block">Enregistrer</button>
      <!-- <div v-if="User.isAdmin || User.id == user.id">  -->
        <button type="button" class="btn btn-primary btn-block" @click="deleteUser(user.id)"> Supprimer le compte</button>
      <!-- </div> -->
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
  max-width: 45%;
}
.btn-group {
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
}

.btn {
  background-color: #f05454;
  color: white;
}
</style>



