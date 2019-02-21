<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h1>{{ selsctEmoji }}</h1>
    <weibo-emoji :weiboIcon="weiboIcon" @changeEmoji="selsctEmoji = selsctEmoji + arguments[0].phrase" ref="emoji"> </weibo-emoji>
  </div>
</template>

<script>
import testData from './data.js'
export default {
  name: 'app',
  data () {
    return {
      msg: '微博表情插件',
      selsctEmoji:'',
      weiboIcon:testData,
    }
  },
  methods: {
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
