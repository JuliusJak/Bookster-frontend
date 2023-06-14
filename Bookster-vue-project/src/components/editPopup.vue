<!--
  Detta är det edit fönster som dycker 
  upp när en admin trycker på edit knappen
  här ska man kunna redigera en bok
-->

<script lang="ts">
import { getBookQuantity, getBooks, getBookTitles, getBookAuthor } from '@/service/getBooksAPI';
import { ref } from 'vue';

export default {
  props: {
    currentBookId: {
      type: Number,
      required: true,
    },
  },
  emits: ['close'],
  setup(_, { emit }) {
    const closePopup = () => {
      emit('close');
    };

    const bookTitle = ref<string[]>([]);
    const bookAuthor = ref<string[]>([]);
    const bookQuantity = ref<number[]>([]);

    // Fetch the book data
    getBookTitles('').then((titles) => {
      bookTitle.value = titles;
    });
    getBookAuthor('').then((authors) => {
      bookAuthor.value = authors;
    });
    getBookQuantity('').then((quantities) => {
      bookQuantity.value = quantities;
    });

    console.log(bookQuantity.value);
    console.log(bookTitle.value);
    console.log(bookAuthor.value);

    return {
      closePopup,
      bookTitle,
      bookAuthor,
      bookQuantity,
    };
  },
};
</script>
<template>
  <div class="popup">
    <div class="popup-content">
      <div class="header">
        <h2 class="popup-title">&lt; Add/Edit Book &gt;</h2>
        <button class="exit-button" @click="closePopup">×</button>
      </div>

      <div class="input-section">
        <h2>Book Title {{ bookTitle[currentBookId] }}</h2>
        <input type="text" placeholder="Input new title..."/>
      </div>
      <div class="input-section">
        <h2>Author {{ bookAuthor[currentBookId] }}</h2>
        <input type="text" placeholder="Input new author..."/>
      </div>
      <div class="input-section">
        <h2>Quantity {{ bookQuantity[currentBookId] }}</h2>
        <input type="number" placeholder="Input new quantity..."/>
      </div>
      <div class="button-section">
        <button @click="closePopup">Cancel</button>
        <button>Save</button>
      </div>
    </div>
  </div>
</template>

  
  
<style scoped>
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
  