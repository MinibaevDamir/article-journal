<template>
  <div class="blog-container">
    <div class="blog-container__article-wrapper">
      <ArticlePreview
        v-for="article in articles"
        :id="article.id"
        :text="article.text"
        :title="article.title"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import ArticlePreview from "@/components/ArticlePreview.vue";
import { useArticleStore } from "@/store/articleStore";
const store = useArticleStore();
const { articles } = store

</script>
<style lang="scss" scoped>
.blog-container {
  width: 100%;
  background-color: white;
  margin: 24px 24px 24px 80px;
  border-radius: 16px;
  &__article-wrapper {
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
