import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加載全局樣式
import './styles/index.less'

// 加載Vant組件庫
import Vant from 'vant'

// 加載Vant組件庫樣式
import 'vant/lib/index.css'

// 自動設置 REM 基準值 (html 標籤字體大小)
import 'amfe-flexible'

// 全局註冊Vant中的組件
Vue.use(Vant)

Vue.config.productionTip = false

// 創建Vue根實例，將router, store配置到根實例中
// 把App根組件渲染到#app節點
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
