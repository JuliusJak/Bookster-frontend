<!--
    detta är vad man ser ifall man loggar 
    in som gäst

    Man kan inte göra något annat än att 
    använda sök funktionen för att se 
    vad som finns
-->

<script lang="ts">
import columns from './columns/columns.vue';
import MainHeader from '../components/MainHeader.vue';
import SearchBarSection from '@/components/SearchBarSection.vue';
import AdminSearchBarSection from './AdminSearchBarSection.vue';
import { getSearchQuery } from '@/service/eventBus';
import { ref, watch, onMounted } from 'vue';
import { getBookTitles, getBookAuthor, getBookQuantity } from '@/service/getBooksAPI';

export default {
  components: {
    columns,
    MainHeader,
    SearchBarSection,
    AdminSearchBarSection,
  },
  setup() {
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
    };
  },
};
</script>

<template>
    <header>
        <MainHeader username="Guest"></MainHeader>
    </header>

    <SearchBarSection class="searchbar-section"></SearchBarSection>
    <div class="columns">
        <columns :head-title="'Book Title'" :content="bookTitles"></columns>
        <columns :head-title="'Book Author'" :content="bookAuthor"></columns>
        <columns :head-title="'Availability'" :content="bookQuantity"></columns>
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