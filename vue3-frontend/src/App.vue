<script setup lang="ts">
import { RouterView } from "vue-router";
import RightSidebar from "@/components/RightSidebar.vue";
</script>

<template>
  <v-layout class="application-container">
    <RightSidebar />
    <RouterView />
  </v-layout>
</template>

<style lang="scss">
@import "./assets/main.scss";
.application-container {
  display: flex;
  background-color: $color-solid-white;
  height: 100vh;
}
</style>
