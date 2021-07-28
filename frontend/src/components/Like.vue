<template>

    <div class="btn-group" role="group" aria-label="Basic example">
        <form @submit.prevent="sendLike">
            <button @click='likePost' type="button" class="btn btn-primary" >
                J'aime ({{ countLike }})
            </button>

            <button @click='dislikePost' type="button" class="btn btn-primary">
                Je n'aime pas ({{ countDislike }})
            </button>
        </form>
    </div>


</template>

<script>    
import axios from "axios"

export default{
    name:'Like',
  data() {
    return {
      countLike:"",
      countDislike:""
     }
  },
    methods:{
        likePost(){ //au click sur j'aime
                this.countLike=1 // incrémenté de 1
                if(this.countDislike >0){
                    this.countDislike--
                    }
         },
        dislikePost(){ //au click sur j'aime pas
        this.countDislike=1 // incrémenté de 1
        if(this.countLike >0){
            this.countLike--
            }
        }
    },
    sendLike: function () {
      let formData = new FormData();
      formData.append(
        "like",
        JSON.stringify({ countLike: this.countLike,countDislike: this.countDislike, userId: JSON.parse(localStorage.getItem("user")).id })
      );
      axios.post("http://localhost:8000/api/post", formData, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }) .then(()=> {
      this.$router.push("/")
    }).catch(err => console.log(err))


}
}
</script>

<style scoped>
.btn-primary{
    background-color: #30475e;
    font-size: 12px;
}

</style>