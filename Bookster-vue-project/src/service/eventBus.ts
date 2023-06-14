import { ref, readonly } from 'vue';

const searchQuery = ref('');

export function setSearchQuery(query:any) {
  searchQuery.value = query;
}

export function getSearchQuery() {
  return readonly(searchQuery);
}
