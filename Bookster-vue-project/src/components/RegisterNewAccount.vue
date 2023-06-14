<template>
    <div class="container">
        <div class="login-symbol">
            <p>Register</p>
        </div>

        <div>
            <p class="username">Username</p>
        </div>
        <input type="text" class="username-input" placeholder="Type Your Username Here...">

        <div>
            <p class="password">Password</p>
        </div>
        <input type="text" class="password-input" placeholder="Type Your Password Here...">

        <div>
            <p class="no-account">
                Already have an account? sign-in <router-link :to="'/signin'">here!</router-link>
            </p>
        </div>
        <button class="sign-up">Register new account</button>
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