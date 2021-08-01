<template>
<div class="comment">
    <div class="card ">
  <div class="card-header">
    {{ comment.User.firstname }} {{comment.User.lastname }}
        {{ comment.createdAt | formatDate }}
  </div>
  <div class="card-body">
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <div v-if="comment.User.isAdmin || comment.User.id == user.id">
        <button class="btn btn-sm btn-danger" @click="supprimerCom">
          <span class="fa fa-trash"></span>Supprimer
        </button>
      </div>
  </div>
  </div>
</div>
</template>
<script>
export default {
  name: "CommentCard",
  props: ["comment"],


};
</script>