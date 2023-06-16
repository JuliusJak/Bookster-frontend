<!--
  Detta är det edit fönster som dycker 
  upp när en admin trycker på edit knappen
  här ska man kunna redigera en bok
-->
<script lang="ts">
import { getBookQuantity, getBooks, getBookTitles, getBookAuthor } from '@/service/getBooksAPI';
import { onMounted, ref, watch } from 'vue';
import EditBook from './popups/EditBook.vue';
import AddBook from './popups/AddBook.vue';
import DeleteBook from './popups/DeleteBook.vue'
import { getSearchQuery } from '@/service/eventBus';

export default {
  props: {
    currentBookId: {
      type: Number,
      required: true,
    },
    mode: {
      type: String,
      required: true,
      validator: (value: unknown) => ['edit', 'add'].includes(value as string),
    },
  },
  emits: ['close'],
  components: {
    EditBook,
    AddBook,
    DeleteBook,
  },
  setup(_, { emit }) {
    const closePopup = () => {
      emit('close');
    };    
    const bookTitles = ref([]);
    const bookAuthor = ref([]);
    const bookQuantity = ref([]);

    const searchQuery = getSearchQuery();

    watch(searchQuery, async (newQuery) => {
      bookTitles.value = await getBookTitles(newQuery);
      bookAuthor.value = await getBookAuthor(newQuery);
      bookQuantity.value = await getBookQuantity(newQuery);
    });

    onMounted(async () => {
      const initialQuery = searchQuery.value;
      bookTitles.value = await getBookTitles(initialQuery);
      bookAuthor.value = await getBookAuthor(initialQuery);
      bookQuantity.value = await getBookQuantity(initialQuery);
    });

    return {
      bookTitles,
      bookAuthor,
      bookQuantity,
      closePopup,
    };
  },
};

</script>

<template>
  <div>
    <template v-if="mode === 'edit'">
      <EditBook
        @close="closePopup"
        :book-title="bookTitles[currentBookId]"
        :book-author="bookAuthor[currentBookId]"
        :book-quantity="bookQuantity[currentBookId]"
      ></EditBook>
    </template>
    <template v-else-if="mode === 'add'">
      <AddBook 
        @close="closePopup"
        ></AddBook>
    </template>
    <template v-else-if="mode === 'delete'">
      <DeleteBook 
        @close="closePopup"
        :book-title="bookTitles[currentBookId]"
        :book-author="bookAuthor[currentBookId]"
        :book-quantity="bookQuantity[currentBookId]"
        ></DeleteBook>
    </template>
  </div>
</template>