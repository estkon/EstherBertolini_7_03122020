<template>
  <div class="card" style="width: 18rem">
    <img class="card-img-top" :src="'http://localhost:8000'+post.image" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{post.title}}</h5>
      <p class="card-text">
        {{post.content}}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
  data() {
      return {
          image: null
      }
  },

};
</script>

<style  scoped>
.post-card {
  width: 450px;
  margin: auto;
  background: white;
  padding: 20px 25px 30px 25px;
  border-radius: 15px;
  transition: all 0.3s;
  margin-top: 2em;
}
.post-user {
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
  color: #f05454;
}

.post-content {
  font-size: 16px;
  font-weight: 500;
}
</style>