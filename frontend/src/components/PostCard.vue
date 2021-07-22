<template>
  <div class="card" >
    <img class="card-img-top"  :src="'http://localhost:8000'+post.image" alt="Card image cap" />
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
.card-body{
    display: flex;
    flex-direction: column;
    align-content: space-between;
    text-align: center;
}

</style>