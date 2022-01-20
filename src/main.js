import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
// 导入axios Vue全局绑定axios
import axios from 'axios'
// 配置基础地址
axios.defaults.baseURL = "https://www.escook.cn"
// axios方法添加到Vue的原型对象上
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
