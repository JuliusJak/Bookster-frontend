<!--
    här visas Action kolumnen från wireframen
    i admin.
    Den ska visa olika saker beroende på ifall
    man är i books eller Users mode

    I books mode ska man kunna redigera
    och radera böckers

    I Users mode ska man kunna promota
    eller radera användares konton
    
-->
<script lang="ts">
import { defineProps, ref, onMounted, watch, type Ref } from 'vue';
import { getBookQuantity } from '@/service/getBooksAPI';
import { getSearchQuery } from '@/service/eventBus';
import Popup from '../Popup.vue';

interface Book {
  id: number;
  author: string;
}

export default {
    props: {
    bookId: {
      type: Number,
      required: true,
    },
  },
  components: {
    Popup
  },
  setup(props) {
    const showPopup: Ref<boolean> = ref(false);
    const currentBookId: Ref<number> = ref(props.bookId);
    const popupMode: Ref<string> = ref('');

    const openPopup = (mode: string) => {
      // Handle opening the popup for the specific book
      popupMode.value = mode;
      showPopup.value = true;
    };

    const closePopup = () => {
      showPopup.value = false;
    };

    return {
      openPopup,
      closePopup,
      showPopup,
      currentBookId,
      popupMode
    };
  }
};
</script>


<template>
    <div class="action-container">
      <div class="mini-container">
        <button class="edit" @click="openPopup('edit')">Edit</button>
        <button class="delete" @click="openPopup('delete')">Delete</button>
      </div>
    </div>
    <Popup
      :current-book-id="currentBookId"
      v-if="showPopup && popupMode === 'edit'"
      :show="showPopup"
      @close="closePopup"
      :mode="popupMode"
    />
    <Popup
      :current-book-id="currentBookId"
      v-if="showPopup && popupMode === 'delete'"
      :show="showPopup"
      @close="closePopup"
      :mode="popupMode"
    />
  </template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: large;
    
}
.mini-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;

}
.mini-container > *{
    margin: auto;
    margin-top: 10px;
}

.mini-container > *{
    background-color: lightgrey;
    border: none;
    padding: 0;
    font-size: 100%;
    cursor: pointer;
    flex: 1;
    border-radius: 10%;
    transition-duration: 0.4s;
}
.mini-container > *:hover{
    background-color: rgb(100, 98, 98);
    color: white;
}
.container > *{
    text-align: center;
    margin-bottom: 2px;
    background-color: lightgrey; 
    height: fit-content;   
    padding: 20px;
    flex: 1;
    max-height: 50px;
}
.head-div{
    background-color: rgb(100, 98, 98);
    color: white;
    margin-top: 10px;
    min-height: 50px;
}
.head-div h2{
  margin: auto;
}
</style>