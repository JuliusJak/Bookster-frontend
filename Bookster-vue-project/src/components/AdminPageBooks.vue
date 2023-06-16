<!--
    Denna visar adminView books från wireframen

    Den fungerar genom att använda Columns
    som en komponent där man kan sätta in
    data, data är gjort via de olika 
    get funktionerna i script taggen
    functionerna finns i service/getBooksAPI
    
-->
<script lang="ts">
import columns from './columns/columns.vue';
import MainHeader from '../components/MainHeader.vue';
import SearchBarSection from '@/components/SearchBarSection.vue';
import AdminSearchBarSection from './AdminSearchBarSection.vue';
import { getSearchQuery } from '@/service/eventBus';
import { ref, watch, onMounted, type Ref } from 'vue';
import { getBookTitles, getBookAuthor, getBookQuantity } from '@/service/getBooksAPI';

export default {
  components: {
    columns,
    MainHeader,
    SearchBarSection,
    AdminSearchBarSection,
  },
  setup() {
    const bookTitles: Ref<never[]> = ref([]);
    const bookAuthor: Ref<never[]> = ref([]);
    const bookQuantity: Ref<never[]> = ref([]);

    const searchQuery: Readonly<Ref<string>> = getSearchQuery();

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
    };
  },
};
</script>

<template>
    <header>
      <MainHeader></MainHeader>
    </header>
    <SearchBarSection class="searchbar-section"></SearchBarSection>
    <div class="columns">
      <columns :head-title="'Book Title'" :content="bookTitles"></columns>
      <columns :head-title="'Book Author'" :content="bookAuthor"></columns>
      <columns :head-title="'Availability'" :content="bookQuantity"></columns>
      <columns :head-title="'Order'" :content="''"></columns>
      <columns :head-title="'Action'" :content="''"></columns>
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
    justify-content: space-between;
}
::v-deep .view-switcher :first-child{
    background-color: rgb(75, 75, 75);
    
}
::v-deep .view-switcher :last-child{
    background-color: darkgray;
    
}
</style>