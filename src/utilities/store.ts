import { reactive } from "vue";

export const store = reactive({
    menuOpen: false,
    
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  },
});
