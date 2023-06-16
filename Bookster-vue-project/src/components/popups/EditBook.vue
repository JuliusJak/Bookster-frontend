<template>
    <div class="popup">
      <div class="popup-content">
        <div class="header">
          <h2 class="popup-title">&lt; Edit Book &gt;</h2>
          <button class="exit-button" @click="closePopup">×</button>
        </div>
  
        <div class="input-section">
          <h2>Book Title {{ previousBookTitle }}</h2>
          <input v-model="newTitle" type="text" placeholder="Input new title..." />
        </div>
        <div class="input-section">
          <h2>Author {{ previousBookAuthor }}</h2>
          <input v-model="newAuthor" type="text" placeholder="Input new author..." />
        </div>
        <div class="input-section">
          <h2>Quantity {{ previousBookQuantity }}</h2>
          <input v-model="newQuantity" type="number" placeholder="Input new quantity..." />
        </div>
        <div class="button-section">
          <button @click="closePopup">Cancel</button>
          <button @click="saveBook">Save</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { editBook } from '@/service/adminService';
  export default {
    props: {
      previousBookTitle: {
        type: String,
        required: true,
      },
      previousBookAuthor: {
        type: String,
        required: true,
      },
      previousBookQuantity: {
        type: Number,
        required: true,
      },
    },
    data() {
    return {
      newTitle: '',
      newAuthor: '',
      newQuantity: '',
    };
  },
    methods: {
      closePopup() {
        this.$emit('close');
      },
      saveBook() {
      const newBook = {
        title: String(this.newTitle),
        author: String(this.newAuthor),
        quantity: String(this.newQuantity),
      };
      const previousBook = this.previousBookTitle;

      editBook(previousBook, newBook)
        .then(() => {
          console.log('Book edited:', previousBook, ' => ', newBook);
          this.closePopup(); 
        })
        .catch(error => {
          console.error('Error adding book:', error);
        });
    },
    },
  };
  </script>

<style scoped>
.popup {
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;
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
    height: 60vh;
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