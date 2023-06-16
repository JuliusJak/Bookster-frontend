
<!--
    Show browsing as... 
    browsing as admin <username>
    browsing as user <username>

 -->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const userName: string = localStorage.getItem('user') || 'No user found';

function signOut(){
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}
</script>
<template>
    <header>
        <h2 class="show-user">{{ 'Browsing as '+ userName }}</h2>

        <router-link 
        to="/signin"
        custom
        v-slot="{ navigate }">

            <button class="sign-in-out" 
            @mousedown="signOut"
            @mouseup="navigate"
            role="link"
            >Sign-out
        </button>

        </router-link> 
    </header>

</template>

<style scoped>
header{
    width: 10%;
    display: flex;
    flex-direction: column;
    margin: 1%;
}
.show-user{
    font-size: small;
}
.sign-in-out{
    border-radius: 5px;
    height: fit-content;
    width: auto;
    font-size: xx-large;
    border: 0;
    
}

</style>