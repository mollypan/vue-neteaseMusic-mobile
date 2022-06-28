/*
 * @Author: Molly Pan
 * @Date: 2022-06-28 10:29:39
 * @LastEditTime: 2022-06-28 11:44:01
 * @FilePath: /vue-netease-music/src/router/index.js
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */

import Vue from 'vue'
import vueRouter from 'vue-router'

import Home from '../views/home/index.vue'

Vue.use(vueRouter)

const router = new vueRouter({
    routes: [{
        path: '/home',
        name: 'Home',
        component: Home,
    }]
})

export default router