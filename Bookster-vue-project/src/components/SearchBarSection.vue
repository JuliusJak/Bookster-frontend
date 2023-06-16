<!--
    search bar har en searchbar och 
    adminSearchBarSection ifall användaren
    är en admin.
    
    Här tas det värde från <input> och
    sedan skcikas det viadere till de 
    komponenter som behöver det 
    Informationen skcikas med en eventBus


-->
<script setup lang="ts">
import { ref, type Ref } from 'vue';
import AdminSearchBarSection from './AdminSearchBarSection.vue';
import { setSearchQuery } from '../service/eventBus';
import { searchBooks } from '../service/getBooksAPI';
import { watch } from 'vue';

const inputValue: Ref<string> = ref('');

function updateSearchQuery() {
  setSearchQuery(inputValue.value);
}
function clearSearch() {
  inputValue.value= ''
}
function blurInput() {
  const inputElement: HTMLInputElement | null = document.querySelector('input');
  if (inputElement) {
    inputElement.blur();
  }
}

watch(inputValue, updateSearchQuery);
</script>

<template>
  <body>
    <div class="background-image">
      <input
        type="text"
        placeholder="Search query..."
        v-model="inputValue"
        @dblclick="clearSearch"
      >

    </div>
    <template v-if="$route.path === '/admin/books' || $route.path ==='/admin/users'">
        <AdminSearchBarSection></AdminSearchBarSection>
      </template>
  </body>
</template>

<style scoped>

body{
    display: flex;
    flex-direction: row;
    margin-top: 3%;
}
input{
    background-image: url('../assets/magnifying-glass.png');
    background-size: 12%;
    background-repeat: no-repeat;
    background-position: 2px;
    opacity: 0.6; 

    padding: 10px;
    padding-left: 50px;
    padding-right: 0;
    font-size: xx-large;
    border-radius: 5px;
}
</style>