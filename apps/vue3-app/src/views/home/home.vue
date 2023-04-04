<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
  <Menu />
  <van-tabs v-model:active="active" class="tabs">
    <van-tab title="热门推荐">
      <div style="margin-top: 20px">
        <van-card
          v-for="(item, index) in data"
          :key="index"
          num="2"
          price="2.00"
          desc="描述信息"
          title="热门推荐"
          thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
        />
      </div>
    </van-tab>
    <van-tab title="时尚流行">
      <div style="margin-top: 20px">
        <van-card
          v-for="(item, index) in data"
          :key="index"
          num="2"
          price="2.00"
          desc="描述信息"
          title="时尚流行"
          thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
        />
      </div>
    </van-tab>
    <van-tab title="经典怀旧">
      <div style="margin-top: 20px">
        <van-card
          v-for="(item, index) in data"
          :key="index"
          num="2"
          price="2.00"
          desc="描述信息"
          title="经典怀旧"
          thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
        />
      </div>
    </van-tab>
    <van-tab title="其他类型">
      <div style="margin-top: 20px">
        <van-card
          v-for="(item, index) in data"
          :key="index"
          num="2"
          price="2.00"
          desc="描述信息"
          title="其他类型"
          thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
        />
      </div>
    </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menu from './Menu.vue'

const active = ref(0)
const data = Array.from({ length: 10 })
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
