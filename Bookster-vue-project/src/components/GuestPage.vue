<script setup lang="ts">
import columns from './columns/columns.vue';
import MainHeader from '../components/MainHeader.vue';
import SearchBarSection from '@/components/SearchBarSection.vue';
import { getBookTitles, getBooks, getBookAuthor, getBookQuantity } from '@/service/getBooksAPI';



</script>
<script lang="ts">

const bookTitles = await getBookTitles('')
const BookAuthor = await getBookAuthor('')
const bookQuantity= await getBookQuantity('')

</script>

<template>
    <header>
        <MainHeader username="Guest"></MainHeader>
    </header>

    <SearchBarSection class="searchbar-section"></SearchBarSection>
    <div class="columns">
        <columns :head-title="'Book Title'" :book-title="bookTitles"></columns>
        <columns :head-title="'Book Author'" :book-title="BookAuthor"></columns>
        <columns :head-title="'Availability'" :book-title="bookQuantity"></columns>
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