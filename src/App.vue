<!--

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
-->
<template>

    <div id ="app">
        <nav class="navbar navbar-expand navbar-light fixed-top">
            <div class="container">
                <a href="#" class="navbar-brand"> Home  </a>   
                <div class="collapse navbar-collapse" >
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="#" class="nav-link"> Login </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link"> Sign Up </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

export default{

    name:'App'
}
</script>


<style>

body {
  background: #1C8EF9 ;
  min-height: 100vh;
  display: flex;
  font-weight: 400;

}

nav{
  background:white;

}

.navbar-collapse {
justify-content: flex-end;
}

</style>