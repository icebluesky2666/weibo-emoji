<template>
    <div class="emoji_box">
        <ul style="font-size: 12px;display:inline-block;float: left;">
            <li v-for="(cate,index) in categorys" :key="cate.category" v-show="isShowCate(index)" :class="{em_cate:true,activity:cate.category == activeCate.category,leftBorder:index == nowIndex}" @click="changeTab(cate)">
                <span class="cat_name">{{cate.category}}</span>
                <div class="cat_gr"></div>
            </li>
        </ul>
         <ul style="font-size: 12px;display:inline-block;float:right">
            <li :class="{em_cate:true, lrbtn:true,displayLeft: isFirst}"  @click="move(0)"><i class="iconfont icon-weibo-emojiln_sanjiaozuo"></i></li><li :class="{em_cate:true, lrbtn:true,displayRight:isLeast}"  @click="move(1)"><i class="iconfont icon-weibo-emojiln_sanjiaoyou"></i></li>
        </ul>
        <ul style="margin-top: 6px;display: inline-block;">
            <li v-for="emotion in emotionActiveGroup" :key="emotion.id" class="ej"  @click.prevent.stop="$emit('changeEmoji', emotion)">
                <img class="emotion_img" :src="emotion.url" alt="">
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
    ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .emoji_box{
        width: 373px;
        .em_cate{
            border-top: 1px solid #d9d9d9;
            border-bottom: 1px solid #d9d9d9;
            border-right: 1px solid #d9d9d9;
            display: inline-block;
            background: #f2f2f5;
            cursor: pointer;
            &.activity{
                background: #fff;
                font-weight: bold;
                .cat_gr{
                    height: 2px;
                    background: #fa7d3c;
                }
            }
            &:hover{
                color:#fa7d3c;
            }
            .cat_name{
                margin:0 8px;
                height: 27px;
                line-height: 28px;
            }
            .cat_gr{ 
                height: 2px;
                background: #f2f2f5;
            }
            &.leftBorder{
                 border-left: 1px solid #d9d9d9;
            }
            &.lrbtn{
                height: 27px;
                line-height: 28px;
                i{
                    margin: 0 8px;
                    font-size: 12px;
                }
                &:first-child{
                    border-left: 1px solid #d9d9d9;
                }
                &.displayLeft{
                    color: #d9d9d9!important
                }
                &.displayRight{
                    color: #d9d9d9!important
                }
            }
        }
        .ej{
            float: left;
            cursor: pointer;
            border: 1px solid #e8e8e8;
            height: 22px;
            width: 26px;
            overflow: hidden;
            margin: -1px 0 0 -1px;
            padding: 4px 2px;
            text-align: center;
            &:hover{
                border: 1px solid #fa7d3c;
                z-index: 999;
                position: relative;
            }
            .emotion_img{
                width: 22px;
                height: 22px;
            }
        }
    }
</style>
<script>
import { getCategory,getEmotions } from './handle';
import 'normalize.css'
import '../assets/icon/iconfont.css'
export default {
    name: 'weibo-emoji',
    props: ['weiboIcon'],
    watch: {
        weiboIcon: function(){
            this.initData();
        },
        nowIndex: function(){
            if(this.nowIndex>= this.categorys.length-4) {
                this.isLeast = true;
            }else{
                this.isLeast = false;
            }
            if(this.nowIndex<= 0){
                this.isFirst = true;
            }else{
                this.isFirst = false;
            }
        }
    },
    computed:{
        emotionActiveGroup: function(){
            for(var em in this.emotions){
                if(em == this.activeCate.category){
                    return this.emotions[em]
                }
            }
        }
    },
    data(){
        return{
            categorys: [],
            emotions: {},
            activeCate:'',
            nowIndex:0,
            isFirst:true,
            isLeast:false
        }
    },
    methods:{
        changeTab: function(cate){
            this.activeCate = cate;
        },
        initState: function(){
            this.activeCate = this.categorys[0];
            this.nowIndex = 0;
            this.isFirst=true;
            this.isLeast=false;
        },
        isShowCate: function(index){
            return (index>=this.nowIndex && index<=this.nowIndex+3);
        },
        move: function(flag){
            if(flag){
                if(this.nowIndex>= this.categorys.length-4) {
                    return;
                }
                this.nowIndex = this.nowIndex +1;
            }else{
                if(this.nowIndex<= 0){
                    return;
                };
                this.nowIndex = this.nowIndex -1;
            }
        },
        initData:function(){
            this.categorys = getCategory(this.weiboIcon);
            this.emotions = getEmotions(this.weiboIcon);
            this.activeCate = this.categorys[0];
        }
    },
    mounted() {
        this.initData();
    },
}
</script>