<template>

            <nav class="navbar navbar-expand navbar-light fixed-top">
            <div class="container">
                
                <router-link to="/" class="navbar-brand"> <img class="logo" src="../assets/logo.png" alt="Logo groupomania"> </router-link>   
                 
                <div class="collapse navbar-collapse" >
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link"> Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/signup" class="nav-link"> SignUp</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>


<script>
export default {
    name: 'Nav'
}
</script>


<style scoped>
  img{
      display: flex;
      justify-content: center;
  }

  .navbar .navbar-expand .navbar-light .fixed-top{
      max-height: 150px;
  }
</style>