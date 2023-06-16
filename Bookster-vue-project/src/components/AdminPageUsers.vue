<!--
    samma som AdminPageBooks men 
    för users iställer för bäcker
-->

<script setup lang="ts">
import MainHeader from './MainHeader.vue';
import SearchBarSection from './SearchBarSection.vue';
import columns from './columns/columns.vue';


</script>

<template>
    <header>
        <MainHeader username="Bob"></MainHeader>
    </header>
        <SearchBarSection class="searchbar-section"></SearchBarSection>
    <div class="columns">
        <columns :head-title="'Book Title'" :content="''"></columns>
        <columns :head-title="'Book Author'" :content="''"></columns>
        <columns :head-title="'Availability'" :content="''"></columns>
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
    background-color: darkgray;
}
::v-deep .view-switcher :last-child{
    background-color: rgb(75, 75, 75);
}
</style>