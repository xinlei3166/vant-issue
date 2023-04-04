<template>
  <van-tabbar v-model="activeTabBar" fixed route>
    <van-tabbar-item v-for="item in tabBars" :key="item.to" :to="item.to" :icon="item.icon">
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import type { PropType } from 'vue'

interface TabBar {
  title: string
  to: string
  icon: string
  [key: string]: any
}

const props = defineProps({
  defaultActiveTabBar: { type: [Number, String], default: '' },
  tabBars: { type: Array as PropType<TabBar[]>, default: () => [] }
})

const internalTabBars = ref<TabBar[]>([
  { title: '首页', to: '/home', icon: 'wap-home-o' },
  { title: '资讯', to: '/news', icon: 'comment-o' },
  { title: '消息', to: '/message', icon: 'chat-o' },
  { title: '我的', to: '/my', icon: 'contact' }
])

const activeTabBar = computed(() => props.defaultActiveTabBar || internalTabBars.value[0].to)
const tabBars = computed<TabBar[]>(() => {
  return props.tabBars.length ? props.tabBars : internalTabBars.value
})
</script>
<style lang="less" scoped></style>
