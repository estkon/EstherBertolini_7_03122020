<template>
  <div class="userList">
    <div v-if="users">
      <div v-for="_user in users" :key="_user.id">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">{{_user.firstname}} {{_user.lastname}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <div v-if="user.isAdmin && _user.id != user.id">rwcd cfxfd 
            <button @click="deleteUser(_user.id)" class="btn btn-danger">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "UserList",
  computed: {
    ...mapGetters(["user"]),
  },
  data() {
    return {
      users: null,
    };
  },
  //récupération des posts depuis la BDD via axios
  created() {
    axios
      .get("http://localhost:8000/api/user")
      .then((response) => {
        console.log(response);
        this.users = response.data;
      })
      .catch((error) => console.log(error));
  },
  methods:{
      deleteUser(userId){
          axios.delete("http://localhost:8000/api/user/" + userId)
          .then(()=>{
              window.location.href='/liste-utilisateurs'
          })
          .catch((error) => console.log(error)); 
      }
  }
};
</script>

<style scoped>
.postList {
  width: 80%;
  margin: auto;
}
</style>