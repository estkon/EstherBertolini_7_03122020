<!--page login-->
<template>
  <form @submit.prevent="handleSubmit">
    <error v-if="error" :error="error" />
    <h3>Connexion</h3>

    <div class="form-group">
      <label>Email</label>
      <input
        type="email"
        class="form-control"
        v-model="email"
        placeholder="Email"
      />
    </div>

    <div class="form-group">
      <label>Password</label>
      <input
        type="Password"
        class="form-control"
        v-model="password"
        placeholder="Password"
      />
    </div>

    <button type="submit" class="btn btn-primary btn-block">Login</button>
  </form>
</template>

<script>
import axios from "axios";
import Error from "../components/Error.vue";

export default {
  name: "Login",
  components: {
    Error,
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods:{
    handleSubmit() {
      axios
        .post("http://localhost:8000/api/user/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          //envoi du token
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("user", JSON.stringify(response.data.user));
          this.$store.dispatch("user", response.data.user);
          this.$router.push("/");
        })
        .catch((e) => {
          this.error = "Invalid username/password!" + e;
        });
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #f05454;
  color: white;
}
</style>