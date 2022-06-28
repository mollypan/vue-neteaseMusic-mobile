<!--
 * @Author: Molly Pan
 * @Date: 2022-06-28 10:18:36
 * @LastEditTime: 2022-06-28 15:09:15
 * @FilePath: /vue-netease-music/src/views/home/index.vue
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
-->
<template>
    <div>
        <div class="header">
            <img src="../../assets/img/01.gif" alt="">
            <img src="../../assets/img/02.gif" alt="">
        </div>
        <tabs v-model="active" title-active-color="#d43c33" line-width="60px">
            <tab title="推荐音乐"><Recommend /></tab>
            <tab title="热歌榜">内容 2</tab>
            <tab title="搜索">内容 3</tab>
        </tabs>
    </div>
    
</template>

<script>
import Vue from 'vue';
import Recommend from './components/recommend/index.vue'
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);

    export default {
        name: 'Home',
        data() {
            return {
                active: 0
            }
        },
        components: {
            Tab,
            Tabs,
            Recommend
        }
        
    }
</script>

<style  lang = "less" scoped>
.header {
    background-color: #d43c33;
    padding: 20px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
