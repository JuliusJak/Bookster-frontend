<!--
    Detta är vad man ser ifall man loggar 
    in som en användare

    man kan använda sökfunktionen som en gäst
    men man kan även beställa böcker
-->
<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue';
import SearchBarSection from '@/components/SearchBarSection.vue';


</script>

<template>
    <header>
        <MainHeader username="Herbert"></MainHeader>
    </header>

        <SearchBarSection class="searchbar-section"></SearchBarSection>
        <div class="columns">

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