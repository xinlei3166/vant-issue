import { createApp as _createApp } from 'vue'
import VConsole from 'vconsole'
import App from './App.vue'
import router from './router'
import 'animate.css'
// 移动端适配，使用postcss-pxtorem时打开这个
// import 'amfe-flexible'

function createApp() {
  if (import.meta.env.MODE !== 'production') {
    new VConsole()
  }

  const app = _createApp(App)
  app.use(router)

  app.mount('#app')

  if (import.meta.env.MODE !== 'development') {
    app.config.errorHandler = (err, vm, info) => {
      console.group('vue_global_error')
      console.log('捕获到异常：', { err, vm, info })
      console.groupEnd()
    }

    window.onerror = function (message, source, lineno, colno, error) {
      console.group('window_global_error')
      console.log('捕获到异常：', { message, source, lineno, colno, error })
      console.groupEnd()
    }
  }

  return app
}

createApp()
