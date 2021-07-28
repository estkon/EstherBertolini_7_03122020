<!--page créer un post-->

<template>
<div class="post">
            <div v-for = "post in posts" :key= "post.id"> <!--Dans les post chercher le post avec cet id-->
                <PostCard :post="post"/> 
            </div>
            <form class="comment">

            </form>
</div>


</template>

<script>
import axios from "axios"


export default {
    name:'Post',
      components:{

      PostCard,
      
    },

    //changer l'id du post en fonction de celui sur lequel on clique sans rechargement de page
  watch: {
    "$route.params.id": function  () {
      let id = this.$route.params.id;
      axios.get("http://localhost:8000/api/post/"+ id)
               .then(this.post =  response.data)
    },
  },
};

</script>
