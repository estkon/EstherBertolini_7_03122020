<template>

  <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">
      <p>{{post.user.firstname}} {{post.user.lastname}}</p>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{post.title}}</h5>
    <img class="card-img"  :src="'http://localhost:8000'+post.image" alt="Card image cap" />
    <p class="card-text">{{post.content}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
  data() {
    return {
      image: null,
    };
  },
};
</script>

<style  scoped>
.card-body {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  text-align: center;
}
</style>