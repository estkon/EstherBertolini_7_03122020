<template>
  
  <div v-if="post" class="card text-dark bg-light mb-3" >
    <div class="card-header">
        <p v-if="post.User">{{post.User.firstname}} {{post.User.lastname}} {{post.createdAt|formatDate}}</p>
        
            <div v-if="post.User.isAdmin || post.User.id == user.id">
              <button class="btn btn-sm btn-danger" @click="supprimerPost"><span class="fa fa-trash"></span>Supprimer</button>
            </div>

          <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
                <img class="card-img" :src="'http://localhost:8000'+post.image" alt="Card image cap" />
            <p class="card-text">{{post.content}}</p>
            <div class="like">
                <Like/>
            </div>
          </div>
              <form @submit="sendCommenter"> 
              <textarea rows=3 class="form-control" placeholder="Votre commentaire ici" v-model="commentaire" ></textarea>
              <button type="submit" class="btn btn-primary btn-block">Poster</button>
              </form>
          </div>
              
  </div>
</template>

<script>
import {mapGetters} from "vuex" 
import axios from 'axios'
import Like from '../components/Like.vue'

export default {
  name: "PostCard",
  props: ["post"],
 components:{

      Like,
      
    },
  data() {
    return {
      image: null,
      showCommentForm: false,
      commentaire:"",
     }
  },
  methods:{

    supprimerPost(){
      let postId = this.post.id
      axios.delete("http://localhost:8000/api/post/" + postId)
      .then(() => {
          window.location.href="/"
      })
      .catch(err => console.log(err))
    }
  },
  
    
  computed:{
    ...mapGetters(['user'])
  }
};
  
</script>

<style  scoped>

.btn-danger {
  color :white;
  background-color: #f05454;
  border: none;
}
.btn-primary{
   color :white;
  background-color:#30475e ;
  border: none;
}
.card-body {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  text-align: center;
}
h5{
    color:#f05454;
}
.card-text{
    color:#30475e;
}
img{
  width:40%;
  height:40%;
  border: 1px solid  #f05454;
  margin:auto;
  
}
</style>