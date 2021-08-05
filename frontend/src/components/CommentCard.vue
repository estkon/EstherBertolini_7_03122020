<template>
  <div class="comment">
    <div class="card">
      <div class="card-header">
        <p>{{ comment.userName }} {{ comment.createdAt | formatDate }}</p>
      </div>
      <div class="card-body">
        <p class="card-text">{{ comment.content }}</p>
        <div v-if="user.isAdmin || comment.UserId == user.id">
          <button title="supprimer" class="btn btn-sm btn-danger" @click="supprimerCom($event)">
            <span class="fa fa-trash"></span>Supprimer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "CommentCard",
  props: ["comment", "postId"],
  computed: {
    ...mapGetters(["user"]),
  },

  methods: {
    supprimerCom(event) {
      let commentId = this.comment.id;
      axios
        .delete("http://localhost:8000/api/comment/" + commentId)
        .then(() => {
          event.target.parentNode.parentNode.parentNode.style.display = "none";
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style scoped>
.card-header {
  background-color: #e8e8e8;
}
.comment {
  margin-bottom: 2em;
}
</style>