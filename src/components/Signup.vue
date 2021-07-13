<template>
        <form>
        <h3>SignUp</h3>

        <div class="form-group">
                <label>FirstName</label>
                <input type="FirstName" class="form-control" placeholder="FirstName"/>
        </div>

        <div class="form-group">
                <label>LastName</label>
                <input type="LastName" class="form-control" placeholder="LastName"/>
        </div>
        <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Email"/>
        </div>

        <div class="form-group">
                <label>Password</label>
                <input type="Password" class="form-control" placeholder="Password"/>
        </div>

        <button class="btn btn-primary btn-block"> SignUp</button>
    </form>
</template>

<script>
    export default{
        name: 'Signup'
    }
</script>