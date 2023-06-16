<!--
    Här kan man skapa ett nytt konto

    ifall man redan har ett konto finns det en 
    länk till signInPage.vue där man kan logga
    in om man redan har ett konto


-->
<script lang="ts">
import axios from 'axios';
import { registerNewUser } from '@/service/authService';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    registerNewAccount() {
      const payload = {
        username: this.username,
        password: this.password
      };
      registerNewUser(payload)
      this.$router.push('/library/books');

  }
}};
</script>


<template>
    <div class="container">
      <div class="login-symbol">
        <p>Register</p>
      </div>
  
      <div>
        <p class="username">Username</p>
      </div>
      <input v-model="username" type="text" class="username-input" placeholder="Type Your Username Here..." />
  
      <div>
        <p class="password">Password</p>
      </div>
      <input v-model="password" type="password" class="password-input" placeholder="Type Your Password Here..." />
  
      <div>
        <p class="no-account">
          Already have an account? Sign in <router-link :to="'/signin'">here!</router-link>
        </p>
      </div>
      <button class="sign-up" @click="registerNewAccount">Register new account</button>
    </div>
  </template>

<style scoped>
.container{
    font-family: Arial, Helvetica, sans-serif;
    margin: auto;
    margin-top: 5%;
    min-width: 50%;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: lightgrey;

}
.container > *{
    width: 70%;
    min-height: 50px;
    margin: auto;
    font-size: x-large;
}
.login-symbol{
    width: 90%;
    background-color: rgb(100, 98, 98);
    font-size: xx-large;
    color: white;
    margin: 2%;
}
.username{
    text-align: left;
    margin-left: 5%;
    margin-bottom: 0;
}
.password{
    text-align: left;
    margin-left: 5%;
    margin-bottom: 0;
}
input{
    border: 0;
}
.username-input{
    font-size: medium;
}
.password-input{
    font-size: medium;
}
.no-account{
    text-align: left;
    font-size: large;
}
.sign-up{
    background-color: rgb(100, 98, 98);
    color: white;
    margin-bottom: 3%;
}
button{
    border-radius: 10px;
    border: 0;
}


</style>