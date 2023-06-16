<!--
    Detta är vad man ser ifall man loggar 
    in som en användare

    man kan använda sökfunktionen som en gäst
    men man kan även beställa böcker
-->
<script lang="ts">
import MainHeader from '../components/MainHeader.vue';
import SearchBarSection from '@/components/SearchBarSection.vue';
import columns from './columns/columns.vue';
import { getSearchQuery } from '@/service/eventBus';
import { getBookTitles, getBookAuthor, getBookQuantity } from '@/service/getBooksAPI';
import { ref, watch, onMounted } from 'vue';

export default {
  components: {
    columns,
    MainHeader,
    SearchBarSection,
  },
  setup() {
    const bookTitles = ref([]);
    const bookAuthor = ref([]);
    const bookQuantity = ref([]);
    const userName: string | null = localStorage.getItem('user');


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
      userName,

    };
  },
};
</script>

<template>
    <header>
        <MainHeader :username="userName"></MainHeader>
    </header>

        <SearchBarSection class="searchbar-section"></SearchBarSection>
    <div class="columns">
        <columns :head-title="'Book Title'" :content="bookTitles"></columns>
      <columns :head-title="'Book Author'" :content="bookAuthor"></columns>
      <columns :head-title="'Availability'" :content="bookQuantity"></columns>
      <columns :head-title="'Order'" :content="''"></columns>
    </div>

</template>
<style scoped>
.columns{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    margin: auto;
}

.container{
    margin: 2px;
    width: 100%;
}
.searchbar-section{
    width: 90%;
    margin: auto;
    margin-top: 2%;
}
</style>