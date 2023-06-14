<script setup lang="ts">
import { defineProps, ref, onMounted, watch } from 'vue';
import { getBookQuantity } from '@/service/getBooksAPI';
import { getSearchQuery } from '@/service/eventBus';
import EditPopup from '../editPopup.vue';


interface Book {
  id: number;
  author: string;
}


const searchQuery = getSearchQuery();
const books = ref<Book[]>([]);
const counts = ref<number[]>([]);
const newIndex = ref<number[]>([]);
const showPopup = ref(false);
const currentBookId = ref<number>(0); // Initialize with a default value



const openPopup = () => {
  // Handle opening the popup for the specific book
  showPopup.value = true;

};

const closePopup = () => {
  showPopup.value = false;
};

</script>


<template>
    <div class="action-container">
        <div class="mini-container">
          <button class="edit" @click="openPopup">Edit</button>
          <button class="delete">Delete</button>
      </div>
  
    </div>
    <EditPopup :current-book-id="currentBookId" v-if="showPopup" :show="showPopup" @close="closePopup" />
  </template>
  

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: large;
    
}
.mini-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;

}
.mini-container > *{
    margin: auto;
    margin-top: 10px;
}

.mini-container > *{
    background-color: lightgrey;
    border: none;
    padding: 0;
    font-size: 100%;
    cursor: pointer;
    flex: 1;
    border-radius: 10%;
    transition-duration: 0.4s;
}
.mini-container > *:hover{
    background-color: rgb(100, 98, 98);
    color: white;
}
.container > *{
    text-align: center;
    margin-bottom: 2px;
    background-color: lightgrey; 
    height: fit-content;   
    padding: 20px;
    flex: 1;
    max-height: 50px;
}
.head-div{
    background-color: rgb(100, 98, 98);
    color: white;
    margin-top: 10px;
    min-height: 50px;
}
.head-div h2{
  margin: auto;
}
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

.popup-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    background-color: lightgray;
    width: 50vw;
    height: 55vh;
    overflow-y: auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.input-section {
    margin-bottom: 20px;
    width: 50%;
}
input{
    height: 30px;
    width: 100%;
    padding: 5px;
    padding-left: 20px;
}
.button-section {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.button-section button {
    margin: 0 10px;
}
.header{
    display: flex;
    width: 100%;
}
.popup-title{
    margin-left: auto;
}
.exit-button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    margin-left: auto;
    margin-bottom: auto;
}
</style>