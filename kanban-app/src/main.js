/* eslint-disable */

import Vue from 'vue'
import 'es6-promise/auto' //promise 폴리필
import App from './App'
import ErrorBoundary from './ErrorBoundary.vue' // 오류를 포착하는 컴포넌트
import router from './router/index.js'
import store from './store/index.js' //vuex 스토어 인스턴스 임포트

Vue.config.productionTip = false
Vue.config.performance = true // NODE_ENV == 'development'로 설정하여 프로파일링 활성화

// ErrorBoundary 컴포넌트 설치
Vue.component(ErrorBoundary.name, ErrorBoundary)

Vue.config.errorHandler = (err, vm, info) => {
  console.error('errorHandler err:', err)
  console.error('errorHandler vm:', vm)
  console.error('errorHandler info:', info)
}

// 오류 원인 해결!!
Vue.prototype.$store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 임포트한 스토어 인스턴스를 'store' 옵션으로 전달
  render: h => h(App)
})
