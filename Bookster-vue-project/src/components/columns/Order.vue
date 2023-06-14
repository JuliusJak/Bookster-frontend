<script setup lang="ts">

import { ref, watch } from 'vue';

let counter = ref(0);

function add() {
  counter.value++;
}

function minus() {
    if (counter.value > 0) {
    counter.value--;
  }
}

watch(counter, (newValue) => {
  console.log('Counter updated:', newValue);
});
</script>

<template>
    <div class="order-container">

        <button class="amount"
        @click="minus">-</button>
        <h2 class="counter"> {{ counter }} </h2>
        <button class="amount"
        @click="add">+</button>
        <button class="order-button">Order</button>

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