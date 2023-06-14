<!--
  Det här är startsidan, här ska man 
  kunna bli om diregerad till 
  sign-in sidan
-->

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'


</script>

<template>

  <RouterView />
</template>

<style scoped>
body{
  margin: 0;
}
.search-bar-section{
  margin: 30px;
  height: 80px;
}
</style>
