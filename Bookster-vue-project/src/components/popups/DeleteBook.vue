<template>
  <div class="popup">
    <div class="popup-content">
      <div class="header">
        <h2 class="popup-title">&lt; Delete Book &gt;</h2>
        <button class="exit-button" @click="closePopup">×</button>
      </div>

      <div class="input-section">
        <h2>&lt;Book Title&gt;</h2>
        <h2>{{ bookTitle }}</h2>
      </div>
      <div class="input-section">
        <h2>&lt;Author&gt;</h2>
        <h2>{{ bookAuthor }}</h2>
      </div>
      <div class="input-section">
        <h2>&lt;Quantity&gt;</h2>
        <h2>{{ bookQuantity }}</h2>
      </div>
      <div class="button-section">
        <button @click="closePopup">Cancel</button>
        <button @click="handleDelete">Delete</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { deleteBook } from '@/service/adminService';
export default {
  props: {
    bookTitle: {
      type: String,
      required: true,
    },
    bookAuthor: {
      type: String,
      required: true,
    },
    bookQuantity: {
      type: Number,
      required: true,
    },
  },
  methods: {
    async handleDelete() {
      const stringTitle:string = this.bookTitle
      try {
        await deleteBook(stringTitle);
        console.log('Book deleted successfully');
        this.closePopup();
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    },
    closePopup() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.popup {
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.popup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  background-color: lightgray;
  width: 50vw;
  height: 60vh;
  overflow-y: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
}

.input-section {
  margin-bottom: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  transition-duration: 0.4s;
  border-radius: 10px;
}
.input-section:hover{
  background-color: rgb(175, 175, 175);

}
.input-section > *{
  margin: 0;
  font-style: italic;

}
.button-section {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.button-section button {
  margin: 0 10px;
}
.header{
  display: flex;
  width: 100%;
}
.popup-title{
  margin-left: auto;
}
.exit-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-left: auto;
  margin-bottom: auto;
}
</style>