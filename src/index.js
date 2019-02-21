import weiboEmoji from './compontent/weibo_emoji'
const emoji = {
    install(Vue, options) {
        Vue.component(weiboEmoji.name, weiboEmoji);
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(emoji);
}
export default emoji