/*
 * @Author: Molly Pan
 * @Date: 2022-06-27 22:24:52
 * @LastEditTime: 2022-06-27 23:29:40
 * @FilePath: /vue-netease-music/babel.config.js
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
