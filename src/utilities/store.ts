
// store.js
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
   menuOpen: false,
    user: null
  }),
  actions: {
    toggleMenu() {
      this.menuOpen = !this menuOpen;
    },
  }
});

