<template>

    <div>
        <h3 v-if = "user"> Bienvenue <br> {{ user.first_name}} {{ user.last_name}} ! </h3>
        <h3 v-if =  "!user"> Bienvenue cher collègue ! <br> Connectez-vous !</h3>
    </div>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name:'Home',
    computed: {
        ...mapGetters(['user'])
    }
}

</script>

<style scoped>
h3{
    text-align: center;
}
</style>