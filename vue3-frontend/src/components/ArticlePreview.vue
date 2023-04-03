<template>
  <div class="article">
    <h1 class="title">{{ title }}</h1>
    <div class="text">
      {{ text }}
    </div>
    <v-btn variant="plain" class="details-btn">Read more >></v-btn>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: Number,
  title: String,
  text: String,
});

</script>
<style lang="scss" scoped>
.article {
  text-overflow: ellipsis;
  height: 240px;
  max-width: 780px;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  .text {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .details-btn {
    margin-top: 36px;
    align-self: flex-end;
  }
}
</style>
