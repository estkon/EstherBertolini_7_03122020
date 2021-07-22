<template>
<div>

        <div v-if= "posts">
            <div v-for = "post in posts" :key= "post.id">
                <PostCard :post="post"/>
            </div>
        </div>

</div>

</template>

<script>
import axios from "axios"
import {mapGetters} from 'vuex'
import PostCard from '../components/PostCard.vue'

export default {
    name:'Home',
    components:{

      PostCard,
      
    },
    computed: {
        ...mapGetters(['user'])
    },
     
     data(){
         return {
             posts: null,
         }
     },
    //récupération des posts depuis la BDD via axios
     created(){
         axios.get('http://localhost:8000/api/post') 
            .then( response => this.posts = response.data)
            .catch( error => console.log(error));
     }
};

</script>

<style scoped>

</style>