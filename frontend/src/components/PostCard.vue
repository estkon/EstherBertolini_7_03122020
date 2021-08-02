<template>
  <div v-if="post" class="card text-dark bg-light mb-3">
    <div class="card-header">
      <p v-if="post.User">
        {{ post.User.firstname }} {{ post.User.lastname }}
        {{ post.createdAt | formatDate }}
      </p>

      <div v-if="post.User.isAdmin || post.User.id == user.id">
        <button class="btn btn-sm btn-danger" @click="supprimerPost">
          <span class="fa fa-trash"></span>Supprimer
        </button>
      </div>

      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <router-link :to=" '/post/' + post.id " >
        <img
          class="card-img"
          :src="'http://localhost:8000' + post.image"
          alt="Card image cap"
        />
        </router-link>
        <p class="card-text">{{ post.content }}</p>
        <div class="like">
          <Like :postId ="post.id"/>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Like from "../components/Like.vue";

export default {
  name: "PostCard",
  props: ["post"],

  components: {
    Like,
  },
  data() {
    return {
      image: null,
      youLikedPost: "", // clé pour savoir si le user a liker
    };
  },
  //on vérifie s’il a liké, depuis les post.likes on regardes si l’ID du user exist
  // created: {
  //   isPostLiked: function () {
  //     this.post.Like.forEach((like) => {
  //       //cherché les like sur ce post
  //       if (like.UserId == this.user.id) {
  //         // si le like.userId correspond à l'id su user connecté
  //         this.youLikedPost = true; // le user a liké
  //       }
  //     });
  //     return this.youLikedPost;
  //   },
  // },
  computed: {
    ...mapGetters(["user"]),
  },

  methods: {
    supprimerPost() {
      let postId = this.post.id;
      axios
        .delete("http://localhost:8000/api/post/" + postId)
        .then(() => {
          window.location.href = "/";
        })
        .catch((err) => console.log(err));
    },

  //   likePost: function () {
  //     axios
  //       .post("http://localhost:8000/like/" + this.post.id, {
  //         UserId: this.user.id,
  //         PostId: this.post.id,
  //         like: this.youLikedPost ? 0 : 1,
  //       })
  //       .then((reponse) => {
  //         // récupérer le bon post depuis le backend
  //         this.youLikedPost = reponse.data.filter(
  //           (post) => post.id == this.post.id
  //         );

  //         this.youLikedPost = !this.youLikedPost;
  //       });
  //   },
  // },
}}
</script>

<style  scoped>
.btn-danger {
  color: white;
  background-color: #f05454;
  border: none;
}
.btn-primary {
  color: white;
  background-color: #30475e;
  border: none;
}
.card-body {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  text-align: center;
}
h5 {
  color: #f05454;
}
.card-text {
  color: #30475e;
}
img {
  width: 40%;
  height: 40%;
  border: 1px solid #f05454;
  margin: auto;
}
a{
  text-decoration: none;
}
</style>