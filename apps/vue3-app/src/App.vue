<template>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export default defineComponent({
  name: 'App',
  setup() {
    return {}
  }
})
</script>

<style lang="less">
body {
  background: #f5f5f5;
}
</style>
