import Vue from 'vue'
import App from './App.vue'

import weiboEmoji from './index.js' //使用本地的
// import weiboEmoji from 'vue-area-select-lei' //插件的方式引入

Vue.use(weiboEmoji)

new Vue({
    el: '#app',
    render: h => h(App)
})