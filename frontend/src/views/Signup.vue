<!--page inscription-->
<template>
  <form @submit.prevent="handleSubmit">
    <error v-if="error" :error="error" />
    <h3>Inscription</h3>

    <div class="form-group">
      <label>Prénom</label>
      <input
        type="text"
        class="form-control"
        v-model="first_name"
        placeholder="Prénom"
        aria-label="prenom"
      />
    </div>

    <div class="form-group">
      <label>Nom</label>
      <input
        type="text"
        class="form-control"
        v-model="last_name"
        placeholder="Nom"
        aria-label="nom"
      />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input
        type="email"
        class="form-control"
        v-model="email"
        placeholder="Email"
        aria-label="email"
      />
    </div>

    <div class="form-group">
      <label>Password</label>
      <input
        type="password"
        class="form-control"
        v-model="password"
        placeholder="Mot de passe"
        aria-label="mot de passe"
      />
    </div>

    <button title="s'inscrire" type="submit" class="btn btn btn-block">S'inscrire</button>
  </form>
</template>

<script>
import axios from "axios";
import Error from "../components/Error.vue";

export default {
  name: "Signup",
  components: {
    Error,
  },

  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      error: "",
    };
  },

  methods: {
    async handleSubmit() {
      if (
        this.first_name !="" &&
        this.last_name !="" &&
        this.email !="" &&
        this.password !=""
      ) {
         axios
          .post("http://localhost:8000/api/user/inscription", {
            firstname: this.first_name,
            lastname: this.last_name,
            email: this.email,
            password: this.password,
          })
          .then(() => {
            //renvoyer l'utilisateur vers le login
            this.$router.push("/connexion");
          })

          .catch(() => {
            this.error = "Veuillez remplir tous les champs!";
          });

      } else {
        this.error = "Veuillez remplir tous les champs";
       
      }
    },
  },
};
</script>

<style scoped>
h3{
      color: #f05454;
}
.btn {
  background-color: #30475e;
  color:white;
}
</style>