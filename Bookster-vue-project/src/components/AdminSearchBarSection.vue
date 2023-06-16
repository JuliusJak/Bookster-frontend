<!-- 
    Här finns tre knappar
    add new book, books och users

    add new books är till för att läga
    till nya böcker och book/users
    används för att byra mellan
    books och users view för admins
-->

<script setup lang="ts">
import Popup from './Popup.vue'
import { ref, type Ref } from 'vue';

const showPopup: Ref<boolean> = ref(false);
const currentBookId: Ref<number> = ref<number>(0);



const openPopup = () => {
  // Handle opening the popup for the specific book
  showPopup.value = true;

};

const closePopup = () => {
  showPopup.value = false;
};
</script>
<template>
<button class="add-book" @click="openPopup">Add New Book</button>

<section class="view-switcher">
    <router-link
        to="/admin/books"
        custom
        v-slot="{ navigate }">

        <button 
            class="view-books"
            @click="navigate"
            role="link">
            Books
        </button>
    </router-link>
    <router-link
        to="/admin/users"
        custom
        v-slot="{ navigate }">

        <button
            class="view-users"
            @click="navigate"
            role="link">
            Users
        </button>
    </router-link>
</section>
<Popup :current-book-id="currentBookId" v-if="showPopup" :show="showPopup" @close="closePopup" :mode="'add'" />

</template>

<style scoped>
.view-switcher{
    display: flex;
    flex-direction: row;
}
.view-switcher button{
    background-color: darkgray;
    border-radius: 0;
    height: 50px;
    margin-top: auto;
    border: 0;
    color: white;

    width: 100px;
    -webkit-transform: skewX(-10deg);
    -moz-transform: skewX(-10deg);
    -ms-transform: skewX(-10deg);
    transform: skewX(-10deg);
}
.add-book{
    background-color: darkgray;
    border-radius: 10px;
    width: fit-content;
    color: white;
    height: 50px;
    width: fit-content;
    margin-top: auto;
    padding-right: 40px;
    padding-left: 40px;
}

</style>