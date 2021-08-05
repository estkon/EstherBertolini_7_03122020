<template>
  <div class="post">
    <div v-if="post">
      <PostCard :post="post" />
    
      <form @submit.prevent="sendCommenter(post.id)">
        <textarea
          rows="3"
          class="form-control"
          placeholder="Votre commentaire ici"
          v-model="commentaire"
        ></textarea>

        <button
          type="submit"
          class="btn btn-primary btn-block"
          title="poster"
        >
          Poster
        </button>
      </form>
    </div>

    <div class="commentList">
      <div v-if="comments">
        <div v-for="comment in comments" :key="comment.id">
          <CommentCard :comment="comment" :postId="post.id"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import PostCard from "../components/PostCard.vue";
import CommentCard from "../components/CommentCard.vue";

export default {
  name: "Post",
  components: {
    PostCard,
    CommentCard,
  },
  computed: {
    ...mapGetters(["user"]),
  },
  data() {
    return {
      commentaire:"",
      post: null,
      comments: [],
      userLiked : false 
    };
  },
  methods: {
    sendCommenter() {
        console.log("commentaire")
     const commentData ={
     commentaire: this.commentaire,
     UserId: this.user.id,
     PostId: this.post.id
};
      axios
        .post("http://localhost:8000/api/comment", commentData, {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
        .then(() => {
           axios.get("http://localhost:8000/api/post/" + this.post.id).then((response) => {
            this.post = response.data;
            this.comments = this.post.Commentaries;
            this.userLiked= this.post.Likes.forEach(like => {
            if(this.user.id == like.UserId ){
                this.userLiked = true
}
})
      
    });
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    //changer l'id du post en fonction de celui sur lequel on clique sans rechargement de page
    let id = this.$route.params.id;
    //récupération du post avec l'id correspondant
    axios.get("http://localhost:8000/api/post/" + id).then((response) => {
      this.post = response.data;
      this.comments = this.post.Commentaries;
    });
  },
};
</script>
<style scoped>
#send-comment {
    background-color: #30475e;
    margin-bottom:2em;
}

</style>