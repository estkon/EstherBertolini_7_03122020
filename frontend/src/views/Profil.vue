<template>
      <form>
    
    <h3>Profil</h3>

    <div class="form-group">
      <label>Name</label>
      <input
        type="name"
        class="form-control"
        v-model="name"
        placeholder="Name"
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
        type="Password"
        class="form-control"
        v-model="password"
        placeholder="Password"
      />
    </div>

    <div class="btn-group">
        <button class="btn btn-primary btn-block">Save</button>
        <button class="btn btn-primary btn-block">Delete account</button>
    </div>
  </form>
</template>

<script>


export default {
  name: "Profil",

  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  },
}
</script>

<style scoped>
button{
   max-width: 45%;
   
}
.btn-group{
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
}

</style>



