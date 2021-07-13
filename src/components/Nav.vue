<template>

            <nav class="navbar navbar-expand navbar-light fixed-top">
            <div class="container">
                
                <a href="#" class="navbar-brand"> <img class="logo" src="../assets/logo.png" alt="Logo groupomania"> </a>   
                 
                <div class="collapse navbar-collapse" >
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="#" class="nav-link"> Login </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link"> SignUp </a>
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