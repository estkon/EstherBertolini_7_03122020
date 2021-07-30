<template>
  <div id="app">
      <Nav />
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
  created() {
    if(sessionStorage.getItem('user') != undefined){
      this.$store.dispatch('user', JSON.parse(sessionStorage.getItem('user')))
      this.$router.push("/");
    }
  },
  data() {
    return {
      user: null,
    };
  },
};
</script>
<style>
.container{
    display: flex;
    justify-content: center;
}
</style>