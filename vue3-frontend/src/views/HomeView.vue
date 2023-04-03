<template>
  <div class="blog-container">
    <div class="article-wrapper">
      <ArticlePreview
        v-for="article in articleData"
        :id="article.id"
        :text="article.text"
        :title="article.title"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import ArticlePreview from "@/components/ArticlePreview.vue";
import { computed } from "vue";
import { useStore } from "@/store";
const store = useStore();
const articleData = computed(() => store.state.articles);
</script>
<style lang="scss" scoped>
.blog-container {
  width: 100%;
  background-color: white;
  margin: 24px 24px 24px 80px;
  border-radius: 16px;
  .article-wrapper {
    display: flex;
    flex-direction: column;
    margin: 24px auto;
    align-items: center;
  }
  @media screen and (max-width: 1280px) {
    margin: 24px;
  }
}
</style>
