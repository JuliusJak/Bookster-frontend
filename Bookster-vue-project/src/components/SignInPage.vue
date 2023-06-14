<template>
    <div class="container">
        <div class="login-symbol">
            <p>Login</p>
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
                No account? sign-up <router-link :to="'/signup'">here!</router-link>
            </p>
        </div>
        <router-link
            to="/sign-in-as-{{ user }}"
            custom
            v-slot="{ navigate }">

            <button
                class="sign-in"
                @click="navigate"
                role="link">
                Sign in
            </button>
        </router-link>
        
        <router-link
            to="/guest"
            custom
            v-slot="{ navigate }">

            <button
                class="continue"
                @click="navigate"
                role="link">
                Continue as guest user
            </button>
        </router-link>
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
.sign-in{
    background-color: rgb(100, 98, 98);
    color: white;
}
button{
    border-radius: 10px;
    border: 0;
}

.continue{
    margin-top: 3%;
    margin-bottom: 3%;
}
</style>