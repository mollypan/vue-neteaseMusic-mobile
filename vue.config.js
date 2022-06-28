/*
 * @Author: Molly Pan
 * @Date: 2022-06-27 22:24:52
 * @LastEditTime: 2022-06-28 16:09:42
 * @FilePath: /vue-netease-music/vue.config.js
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 配置代理跨域
    proxy: {
        // 指的是哪些请求会触发代理跨域，/指的是任意的请求都会触发
        '/api': {
            // target指的是代理地址，我们需要代理请求的地址
            target: 'http://localhost:3000',
            changeOrigin: true,
            pathRewrite: {
                '^/api': 'http://localhost:3000'
            }
        }
    }
},
})
