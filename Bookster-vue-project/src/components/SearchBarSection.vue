<!--
    search bar section
    Includes
    *Search bar
    *add new book (if admin)
    *view books or user (id admin)


-->
<script setup lang="ts">
import { ref } from 'vue';
import AdminSearchBarSection from './AdminSearchBarSection.vue';
import { setSearchQuery } from '../service/eventBus';
import { searchBooks } from '../service/getBooksAPI';
import { watch } from 'vue';

const inputValue = ref('');

function updateSearchQuery() {
  setSearchQuery(inputValue.value);
}
function clearSearch() {
  inputValue.value= ''
}
function blurInput() {
  const inputElement = document.querySelector('input');
  if (inputElement) {
    inputElement.blur();
  }
}

watch(inputValue, updateSearchQuery);
</script>

<template>
  <body>
    <input
      type="text"
      placeholder="Search query..."
      v-model="inputValue"
      @dblclick="clearSearch"
    >
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
    padding: 10px;
    padding-right: 0;
    font-size: xx-large;
    border-radius: 5px;
}
</style>