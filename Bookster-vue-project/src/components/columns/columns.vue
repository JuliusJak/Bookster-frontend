<!-- 
  Meningen med Columns är att bygga en grund
  som är till de columner so visas wiredramen
  userview, guestView och admin view
  
  Den skapar lika många <div> som det behövs
  sen fylls det i data från andra komponenter


-->
<script setup lang="ts">
import Order from './Order.vue';
import Action from './Action.vue';
</script>
<script lang="ts">
import { searchBooks } from '@/service/getBooksAPI';
import { defineComponent, ref, watchEffect, type PropType, type Ref } from 'vue';
import { getSearchQuery } from '@/service/eventBus';

export default defineComponent({
  props: {
    headTitle: {
      type: String as PropType<string>,
      required: true,
    },
    content: {
      type: Array as unknown as PropType<never[]>,
      required: true,
    },
  },
  data() {
    return {
      books: [] as Array<{ 
        id: string; 
        title: string; 
        author: string; 
        quantity: number 
      }>,
    };
  },
  async mounted() {
    const initialSearchQuery: string = getSearchQuery().value;
    this.books = await searchBooks(initialSearchQuery);

    watchEffect(() => {
      const newSearchQuery: string = getSearchQuery().value;
      this.updateBooks(newSearchQuery);
    });
  },
  methods: {
    async updateBooks(newTitle: string) {
      this.books = await searchBooks(newTitle);
      //console.log(this.books); // Log the array of books to the console

    },
   
  }
});

</script>


<template>
  <div class="big-container">
    <div class="container">
      <div class="head-div">
        <h2>{{ headTitle }}</h2>
      </div>
      <div v-for="(book, index) in books" :key="book.id" class="book-div">
        <template v-if="headTitle === 'Order'">
            <Order :bookTitle="book.title" :bookQuantity="book.quantity" :bookAuthor="book.author"></Order>
        </template>
        <template v-if="headTitle === 'Action'">
            <Action :bookId="index"></Action>
        </template>
        <div class="content-placeholder">
          <!-- Placeholder for the content -->
          {{ content[index] }}
          
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.big-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: x-large;
  margin-left: 1px;
  margin-right: 1px;
}
.container > * {
  text-align: center;
  padding: 10px;
  margin-bottom: 2px;
  background-color: lightgrey;
  height: fit-content;
  
  flex: 1;
  max-height: 50px;
}
.head-div {
  background-color: rgb(100, 98, 98);
  color: white;
  margin-top: 10px;
  min-height: 50px;
  text-align: center;
}
.head-div h2 {
  margin: auto;
  height: fit-content;

}


</style>