import { defineStore } from "pinia";

export const useIndexStore = defineStore("indexStore", {
  state: () => ({
    loggedIn: false,
  }),
  actions: {
    setLoggedIn(status: boolean) {
      this.loggedIn = status;
    },
    login() {},
    register() {},
  },
});
