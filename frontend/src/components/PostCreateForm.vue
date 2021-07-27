<!--formulaire création post-->
<template>
  <form @submit.prevent="submitPost">
    <h3>Créer un post</h3>

    <div class="form-group">
      <label>Title</label>
      <input
        type="text"
        class="form-control"
        v-model="title"
        placeholder="Title"
      />
    </div>

    <div class="form-group">
      <label>Image</label>
      <input type="file" class="form-control" @change="setImageFile" />
    </div>

    <div class="form-group">
      <label>Post</label>
      <textarea v-model="post" class="form-control" name="post"> </textarea>
    </div>

    <div v-if="url">
      <img class="imagePreview" :src="url" width="100px" />
    </div>

    <button type="submit" class="btn btn-primary btn-block">Send</button>
  </form>
</template>

<script>
import axios from "axios";


export default {
  name: "PostCreateForm",

  data() {
    return {
      title: "",
      post: "",
      image: "",
      url: "",
    };
  },
  methods: {
    submitPost: function () {
      let formData = new FormData();
      formData.append(
        "post",
        JSON.stringify({ title: this.title, post: this.post, userId: JSON.parse(localStorage.getItem("user")).id })
      );
      formData.append("image", this.image);
      axios.post("http://localhost:8000/api/post", formData, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }) .then(()=> {
      this.$router.push("/")
    }).catch(err => console.log(err))


    },
    setImageFile: function (event) {
      this.image = event.target.files[0];
      this.url = URL.createObjectURL(this.image);
    },
  },
};
</script>

<style scoped>
span {
  word-wrap: break-word;
  height: fit-content;
}
</style>
