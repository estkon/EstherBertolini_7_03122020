<template>

    <form>
        <h3>Login</h3>

        <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Email"/>
        </div>

        <div class="form-group">
                <label>Password</label>
                <input type="Password" class="form-control" placeholder="Password"/>
        </div>

        <button class="btn btn-primary btn-block"> Login </button>
    </form>

</template>

<script>
    export default{
        name: 'Login'
    }
</script>
<style scoped>
.form-group,h3{
    margin-bottom: 0.5em;
}
</style>