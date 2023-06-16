<!--
  I order så väljer kan en admin eller 
  användare välja hur många exemplar av 
  en bok de vill beställa



-->

<script setup lang="ts">

import { ref, watch, type Ref } from 'vue';

let counter: Ref<number> = ref(0);

function add() {
  counter.value++;
}

function minus() {
    if (counter.value > 0) {
    counter.value--;
  }
}
function reset() {
  counter.value = 0;
}


</script>
<script lang="ts">
export default {
  props: {
    bookTitle: {
      type: String,
      required: true,
    },
    bookAuthor: {
      type: String,
      required: true,
    },
    bookQuantity: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      title: this.bookTitle,
      author: this.bookAuthor,
      quantity: this.bookQuantity,
    };
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
    saveBook(ammount:number) {
      const newBook = {
        title: String(this.title),
        author: String(this.author),
        quantity: String(this.quantity),
      };

      const user = localStorage.getItem('user')
      const existingBooks: string | null = localStorage.getItem(`${user}-books`);
      let books = [];

      if (existingBooks) {
        books = JSON.parse(existingBooks);
      }

      for (let i = 0; i < ammount; i++) {
        books.push(newBook);
      }
      
      localStorage.setItem(`${user}-books`, JSON.stringify(books));

      //localStorage.removeItem('books')
    },
  },
};
</script>

<template>
  <div class="order-container">
    <button class="amount" @click="minus">-</button>
    <h2 class="counter">{{ counter }}</h2>
    <button class="amount" @click="add">+</button>
    <button class="order-button" @mousedown="saveBook(counter)" @mouseup="reset">Order</button>
  </div>
</template>

<style scoped>
.order-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
}
.order-container >*{
    margin: auto;
    margin-left: 5px;
    margin-right: 5px;
}
.amount{
    background-color: lightgrey;
    border: none;
    padding: 0;
    font-size: 200%;
    cursor: pointer;
    flex: 1;
    border-radius: 10%;
    transition-duration: 0.4s;
}
.amount:hover{
    background-color: rgb(100, 98, 98);
    color: white;
}
.order-button{
  background-color: rgb(100, 98, 98);
  border: none;
  padding: 0;
  font-size: 100%;
  cursor: pointer;
  flex: 1;
  border-radius: 10%;
  color: white;
  margin: 0;
  margin-left: 2px;
  transition-duration: 0.4s;
}
.order-button:hover{
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
}

</style>