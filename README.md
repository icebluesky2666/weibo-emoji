# Weibo-emoji

> 微博表情emoji插件

## effect：

![weibo-emoji](https://github.com/icebluesky2666/weibo-emoji/blob/master/src/assets/img/weibo_emoji.png)

## Install

` npm install weibo-emoji `

` import WeiboEmoji from 'weibo-emoji' `

` Vue.use(WeiboEmoji) `

## Api
```javascript
 <weibo-emoji :weiboIcon="weiboIcon" @changeEmoji="selsctEmoji = arguments[0].phrase" ref="emoji"> </weibo-emoji> 
```
* weiboIcon 为图表数据，数据格式见源码/src/data.js 如无需与线上一致图标，可以使用静态数据文件
* changeEmoji为图标点击回调，返回图标对象

## Feedback

在使用中有任何问题，欢迎反馈给我
* Email: 1359658384@qq.com



