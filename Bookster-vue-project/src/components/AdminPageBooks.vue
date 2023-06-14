<!--
    Denna visar adminView books från wireframen

    Den fungerar genom att använda Columns
    som en komponent där man kan sätta in
    data, data är gjort via de olika 
    get funktionerna i script taggen
    functionerna finns i service/getBooksAPI
    
-->
<script setup lang="ts">
import columns from './columns/columns.vue';
import MainHeader from '../components/MainHeader.vue';
import SearchBarSection from '@/components/SearchBarSection.vue';
import { getBookTitles, getBooks, getBookAuthor, getBookQuantity } from '@/service/getBooksAPI';
import AdminSearchBarSection from './AdminSearchBarSection.vue';
import { getSearchQuery } from '@/service/eventBus';
import { ref, watch, onMounted } from 'vue';

</script>
<script lang="ts">


const bookTitles:string = await getBookTitles('')
const BookAuthor:string = await getBookAuthor('')
const bookQuantity:string= await getBookQuantity('')

</script>

<template>
    <header>
        <MainHeader username="Admin"></MainHeader>
    </header>
    
    <SearchBarSection class="searchbar-section"></SearchBarSection>
    
    <div class="columns">
        <columns :head-title="'Book Title'" :content="bookTitles"></columns>
        <columns :head-title="'Book Author'" :content="BookAuthor"></columns>
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