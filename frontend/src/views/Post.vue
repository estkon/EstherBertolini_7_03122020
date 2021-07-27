<template>
<div class="post">


</div>

</template>

<script>
import axios from "axios"


export default {
    name:'Post',


    //changer l'id du post en fonction de celui sur lequel on clique sans rechargement de page
  watch: {
    "$route.params.id": function  () {
      let id = this.$route.params.id;
      axios.get("http://localhost:8000/api/post/"+Id)
               .then(this.post =  response.data)
    },
  },
};

</script>
