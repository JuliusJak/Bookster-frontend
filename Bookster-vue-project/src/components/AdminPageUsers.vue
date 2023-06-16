<!--
    samma som AdminPageBooks men 
    för users iställer för bäcker
-->

<script lang="ts">
import columns from './columns/columns.vue';
import MainHeader from '../components/MainHeader.vue';
import SearchBarSection from '@/components/SearchBarSection.vue';
import AdminSearchBarSection from './AdminSearchBarSection.vue';
import { getSearchQuery } from '@/service/eventBus';
import { ref, watch, onMounted } from 'vue';
import { getBookTitles, getBookAuthor, getBookQuantity } from '@/service/getBooksAPI';
import { getUsers, getUsername, getRoles, getpurchases } from '@/service/getUsersAPI';

export default {
  components: {
    columns,
    MainHeader,
    SearchBarSection,
    AdminSearchBarSection,
  },
  setup() {
    const username = ref([]);
    const role = ref([]);
    const purchases = ref([]); // Define 'purchases' as a ref with an initial value of 0

    const usernameArray = ref ([]);
    const searchQuery = getSearchQuery();

    watch(searchQuery, async (newQuery) => {
        username.value = await getUsername();
        role.value = await getRoles();
        purchases.value = await getpurchases('Bob'); 
    });

    onMounted(async () => {
        const initialQuery = searchQuery.value;
        username.value = await getUsername();
        role.value = await getRoles();
        purchases.value = await getpurchases('Bob');
    });

    return {
        username,
        role,
        purchases,
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
        <columns :head-title="'Users'" :content="username"></columns>
        <columns :head-title="'Role'" :content="role"></columns>
        <columns :head-title="'Purchases'" :content="purchases"></columns>
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