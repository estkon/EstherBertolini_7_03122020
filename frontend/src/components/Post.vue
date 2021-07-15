<template>
    
    <form>
    
    <h3>Post</h3>

    <div class="form-group">
      <label>Title</label>
      <input
        type="title"
        class="form-control"
        v-model="title"
        placeholder="Title"
        />
    </div>
    <div class="form-group">
      <label>Post</label>
     <textarea class="form-control" name="post" >
      
    </textarea>

    </div>



        <button class="btn btn-primary btn-block">Send</button>

  </form>
</template>

<script>


export default {
  name: "Post",

  data() {
    return {
      title: "",
      post: ""
    };
  },
}
</script>

<style scoped>
span{
    word-wrap: break-word;
    height: fit-content;
}

</style>
