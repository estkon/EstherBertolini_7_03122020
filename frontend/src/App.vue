<template>

    <div id ="app">
    <div class="nav">
      <Nav />
    </div>
        <div class="auth-wrapper">
                <div class="auth-inner">
                    <router-view />
                </div>
        </div>
    </div>
</template>

<script>
import Nav from './components/Nav.vue'
import axios from 'axios'


export default{
    name:'App',
    components:{

      Nav,
      
    },
      data (){
        return{
            user: null
        }
    },

    async created() {
        const response = await axios.get('user');

       this.$store.dispatch('user', response.data);
      }
    }

</script>


<style>

    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

    * {
      box-sizing: border-box;
    }
    body {
      background: #f05454 ;
      min-height: 100vh;
      display: flex;
      font-weight: 400;
      font-family: 'Fira Sans', sans-serif;
    }

  h1,h2,h3,label,span{
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;
    text-align: center;
  }

  body, html, #app, #roots, .auth-wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #app{
    display: flex;

  }
  .form-group,h3{
      margin-bottom: 0.5em;
  }
  .navbar-light{
    background-color: white;
    box-shadow: blueviolet;
  }
    nav{
      background:white;

    }

    .navbar-collapse {
    justify-content: flex-end;
    }

    .auth-inner{
      width: 450px; 
      margin: auto;
      background: white;
      box-shadow: 0px 14px  80px blueviolet;
      padding: 20px 25px 30px 25px;
      border-radius: 15px;
      transition: all .3s;
      margin-top: 13em;
      
    }
    img{
    width: 30%;
    margin: -3em 0em;
    }

</style>