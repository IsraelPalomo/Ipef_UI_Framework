import { defineStore } from 'pinia';

export const GlobalStore = defineStore('global-store', {
  state: () => ({
    name: 'Israel',
  }),
  actions: {
    changeName(newName: string) {
      this.$state.name = newName;
    },
  },
  getters: {
    greetings(state) {
      return `Hello, ${state.name}`;
    },
  },
});
