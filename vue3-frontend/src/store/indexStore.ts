import { defineStore } from "pinia";

export const useIndexStore = defineStore("indexStore", {
  state: () => ({
    sidebarItems: [
      {
        route: "/login",
        icon: "mdi-account-key",
        title: "Login",
        value: "login",
      },
      {
        route: "/register",
        icon: "mdi-account-edit",
        title: "Register",
        value: "register",
      },
      {
        route: "/",
        icon: "mdi-archive",
        title: "My Blog",
        value: "myfiles",
      },
      {
        route: "/blogs",
        icon: "mdi-magnify",
        title: "User Blogs",
        value: "search",
      },
      {
        route: "/favorite",
        icon: "mdi-star",
        title: "Starred",
        value: "starred",
      },
      {
        route: "/statistics",
        icon: "mdi-chart-pie",
        title: "Statistics",
        value: "statistics",
      },
    ],
  }),
  actions: {},
});
