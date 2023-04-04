<!-- 不需要头部导航/嵌套app有头部导航时使用这个布局 -->
<template>
  <div id="layout">
    <div class="layout-content">
      <router-view />
    </div>
    <TabBar class="layout-tabbar" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import TabBar from '@/components/layout/TabBar.vue'

const data = ref()
provide('data', data)
</script>

<style lang="less" scoped></style>
