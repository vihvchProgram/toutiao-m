import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加載全局樣式
import './styles/index.less'

Vue.config.productionTip = false

// 創建Vue根實例，將router, store配置到根實例中
// 把App根組件渲染到#app節點
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
