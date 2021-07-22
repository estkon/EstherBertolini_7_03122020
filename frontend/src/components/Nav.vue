<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="/"><img src="../assets/logo.png" width="60"></a>
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
        <div v-if="user">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="/profil" href="#"
                >Profil</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="/post" href="#">Post</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="/logout" href="#"
                >Logout</a
              >
            </li>
          </ul>
        </div>
        <div v-if="!user">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="/login" href="#"
                >Login</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="/signup" href="#"
                >Signup</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: "Nav",
  props: ["user"],

  methods: {
    Logout() {
      localStorage.clear();
      window.location.href = "/login";
    },
  },
};
</script>


<style scoped>

</style>