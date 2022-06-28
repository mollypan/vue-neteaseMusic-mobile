<!--
 * @Author: Molly Pan
 * @Date: 2022-06-28 15:03:42
 * @LastEditTime: 2022-06-28 17:39:44
 * @FilePath: /vue-netease-music/src/views/home/components/recommend/index.vue
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
-->
/*
 * @Author: Molly Pan
 * @Date: 2022-06-28 15:03:42
 * @LastEditTime: 2022-06-28 15:03:50
 * @FilePath: /vue-netease-music/src/views/recommend/index.js
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */

<template>
<div>
    <div class="title">
        <span>|</span>
        <span>推荐歌单</span>
    </div>
    <div class="container">
        <div class="song-container">
            <div class="song-list" v-for="(item, index) in songList" :key="index">
                <div class="pic">
                    <img :src="item.picUrl" alt="">
                    <span>{{item.playCount | count}}万</span>
                </div>
                <div class="text">
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        created() {
            this.getSongList()
        },
        data() {
            return {
                songList: [],
            }
        },
        methods: {
            getSongList() {
                this.$http.post("/api/personalized?limit=6").then(res => {
                    console.log(res, 'res')
                    if(res.statusText == "OK" && res.status==200) {
                        this.songList = res.data.result
                    } else {
                        console.error(res.statusText)
                    }
                    })
            }
        },
        filters: {
            count(val) {
                return (val / 10000).toFixed(1)
            }
        }
    }
</script>

<style  lang="less" scoped> 

    .title {
        border-top: 1px solid #ccc;
        padding: 15px 0;
        display: flex;
        font-weight: 330;
        font-size: 15px;
    }

    .title span:first-child{
        color: #d43c33;
        font-size: 16px;
        font-weight: 800;
        margin-right: 5px;
    }

    .container {
        height: 500px;
        overflow: auto;
    }

    .song-container {
        display: flex;
        flex-wrap: wrap;
        .song-list {
            flex: calc(33% - 4px);
            margin-right: 2px;
            margin-bottom: 5px;
            .pic {
                position: relative;
                img {
                    width: 100%;
                }
                span {
                    position: absolute;
                    top: 3px;
                    right: 3px;
                    color: white;
                    font-size: 12px;
                    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2); 
                    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+);
                    background-position: center left;
                    background-repeat: no-repeat;
                    background-size: 60% 60%;
                    padding-left: 29px;
                }
            }
            .text {
                font-size: 13px;
                color: #333;
                font-weight: 400;
                padding: 0 2px;
            }
        }
    }

    .song-list:nth-of-type(3n) {
        margin-right: 0;
    }
</style>