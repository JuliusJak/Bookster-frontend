/*
  Jag använder den här event bussen för att 
  kunna updatera andra komponenter när det beövs 
*/
import { ref, readonly, type Ref } from 'vue';

const searchQuery: Ref<string> = ref('');

export function setSearchQuery(query:string): void {
  searchQuery.value = query;
}

export function getSearchQuery(): Readonly<Ref<string>> {
  return readonly(searchQuery);
}
