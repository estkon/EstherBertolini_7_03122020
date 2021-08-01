<template>
    <div class="post">
        
            <div>
                <PostCard :post="post"/>
            </div>

             <div class="commentList">

                 <div  v-if= "comments">
                    <div v-for = "comment in comments" :key= "comment.id">
                        <CommentCard :comment="comment"/>
                    </div>

                </div>

            </div>
    </div>
        
</template>
<script>
import axios from "axios"
import {mapGetters} from 'vuex'
import PostCard from '../components/PostCard.vue'
import CommentCard from '../components/CommentCard.vue'

export default {
 name: 'Post',
 
components:{

      PostCard,
      CommentCard
      
    },
    computed: {
        ...mapGetters(["post"])
    },
     
     data(){
         return {
             post: null,
             comments: null
         }
     },
    
     created(){
     //changer l'id du post en fonction de celui sur lequel on clique sans rechargement de page 
      let id = this.$route.params.id;
      //récupération du post
      axios.get("http://localhost:8000/api/post/"+ id)
               .then( response => {
                   this.post =  response.data })
    },

};

</script>
