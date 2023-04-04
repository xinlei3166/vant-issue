<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
  <Menu />
  <van-tabs v-model:active="active" class="tabs">
    <van-tab title="热门推荐">热门推荐</van-tab>
    <van-tab title="时尚流行">时尚流行</van-tab>
    <van-tab title="经典怀旧">经典怀旧</van-tab>
    <van-tab title="其他类型">其他类型</van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menu from './Menu.vue'

const active = ref(0)
</script>

<style lang="less" scoped>
.my-swipe {
  .van-swipe-item {
    color: #fff;
    font-size: 32px;
    line-height: 300px;
    text-align: center;
    background-color: var(--van-primary-color);
  }
  :deep(.van-swipe__indicators) {
    //bottom: 60px;
  }
}

.tabs {
  margin-top: 32px;
}
</style>
