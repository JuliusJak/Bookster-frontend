<!--
  här har vi en kompnent som används som header
  över hela projectet. Den har en titel
  och en sign-in/out knapp samt så visar den 
  vem man är inloggad som
-->

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import UserHeaderDisplayed from '@/components/UserHeaderDisplayed.vue';

const props = defineProps<{
  username: string | null;
}>();

const user: string | null = props.username;
</script>

<template>
  <header>
    <h1 class="centered">Bookster-app</h1>
      <UserHeaderDisplayed :user="'Browsing as '+user"></UserHeaderDisplayed>
      
  </header>
</template>

<style scoped>
header{
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(204, 204, 204);
  height: fit-content;
  min-height: 5rem;
  display: flex;
  text-align: left;

}
.centered{
  margin: auto;
  margin-left: 44.409931506%;
}
.right-aligned{
  margin: 10px;
  margin-left: auto;
}
</style>