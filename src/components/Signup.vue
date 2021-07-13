<template>
        <form @submit.prevent="handleSubmit">
        <h3>SignUp</h3>

        <div class="form-group">
                <label>FirstName</label>
                <input type="text" class="form-control" v-model="first_name" placeholder="FirstName"/>
        </div>

        <div class="form-group">
                <label>LastName</label>
                <input type="text" class="form-control" v-model="last_name" placeholder="LastName"/>
        </div>
        <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>

        <div class="form-group">
                <label>Password</label>
                <input type="text" class="form-control" v-model="password" placeholder="Password"/>
        </div>

        <button class="btn btn-primary btn-block"> SignUp</button>
    </form>
</template>

<script>
    import axios from 'axios'

    export default{
        name: 'Signup',
        data(){
           return{
                   first_name:'',
                   last_name:'',
                   email:'',
                   password:''
           }
        },

        methods: {
                async handleSubmit() {
                         const response= await axios.post('signup', {
                                first_name: this.first_name ,
                                last_name: this.last_name ,
                                email: this.email ,
                                password: this.password

                        });
                        console.log(response);
                        //renvoyer l'utilisateur vers le login
                        this.$router.push('/login');                }
        }
    }

</script>