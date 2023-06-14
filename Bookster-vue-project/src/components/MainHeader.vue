<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import UserHeaderDisplayed from '@/components/UserHeaderDisplayed.vue';

const props = defineProps<{
  username: string;
}>();

const user: string = props.username;
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