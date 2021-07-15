<template>
  <form @submit.prevent="handleSubmit">
    <error v-if="error" :error="error" />
    <h3>SignUp</h3>

    <div class="form-group">
      <label>FirstName</label>
      <input
        type="text"
        class="form-control"
        v-model="first_name"
        placeholder="FirstName"
      />
    </div>

    <div class="form-group">
      <label>LastName</label>
      <input
        type="text"
        class="form-control"
        v-model="last_name"
        placeholder="LastName"
      />
    </div>
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
        type="text"
        class="form-control"
        v-model="password"
        placeholder="Password"
      />
    </div>

    <button class="btn btn-primary btn-block">SignUp</button>
  </form>
</template>

<script>
import axios from "axios";
import Error from "./Error.vue";

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
      try {
        await axios.post("signup", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
        });
        //renvoyer l'utilisateur vers le login
        this.$router.push("/login");
      } catch (e) {
        this.error = "error occurred !";
      }
    },
  },
};
</script>