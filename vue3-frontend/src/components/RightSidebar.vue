<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list density="compact" nav>
      <div class="item-wrapper" v-for="(item, index) in sidebarItems">
        <v-list-item
          class="sidebar-item"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
          :to="item.route"
          link
          :exact-active-class="item.route"
          exact
        />
        <v-divider v-if="index === 1" />
      </div>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "@/store";

const store = useStore();
const sidebarItems = computed(() => store.state.sidebarItems);
</script>
<style lang="scss" scoped>
.right-sidebar {
  .sidebar-item {
    &::v-deep {
      .v-list-item-title {
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
      }
    }
  }
}
</style>
