<!--page profil user-->
<template>
      <form>
    
    <h3>Votre Compte</h3>

    <div class="form-group">
      <label>Prénom</label>
      <input
        type="name"
        class="form-control"
        v-model="firstname"
        placeholder="Name"
        />
    </div>

        <div class="form-group">
      <label>Nom</label>
      <input
        type="name"
        class="form-control"
        v-model="lastname"
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
        <button class="btn btn-primary btn-block">Enregistrer</button>
        <button class="btn btn-primary btn-block">Supprimer le compte</button>
    </div>
  </form>
</template>

<script>


export default {
  name: "Profil",

  data() {
    return {
      name: "",
      firstname:"",
      lastname:"",
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

.btn {
  background-color: #f05454;
  color:white;
}

</style>



