/*
 * @Author: Molly Pan
 * @Date: 2022-06-27 22:24:52
 * @LastEditTime: 2022-06-28 16:30:14
 * @FilePath: /vue-netease-music/src/main.js
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
