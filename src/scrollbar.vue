<style>
.scrollbar{
    position: relative;
    overflow: hidden;
}
.scrollbar-content{
    position: absolute;
    width: 100%;
}
.scrollbar-rail-y{
    width: 4px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: skyblue;
}
.scrollbar-thumb-y{
    width: 2px;
    height: 30px;
    position: absolute;
    left: 1px;
    background-color: #fff;
}
</style>
<template>
    <div class="scrollbar" ref="scrollbar">
        <div class="scrollbar-content" ref="cont"
            v-bind:style="{'top':top+'px'}">
            <slot></slot>
        </div>
        <div class="scrollbar-rail-y">
            <div class="scrollbar-thumb-y" ref="thumb"
                v-bind:style="{'height':thumbHeight+'px','top':thumbTop+'px'}"></div>
        </div>
    </div>
</template>
<script>
import {addMouseEvent,getElemHeight} from './js/util'
export default {
    name:'scrollbar',
    data(){
        return {
            top:0,
            boxHeight:0,
            contHeight:0,
            disY:0,
            thumbTop:0
        }
    },
    computed:{
        thumbHeight(){
            return (this.boxHeight / this.contHeight) * this.boxHeight
        }
    },
    props:{
        step:{
            default:10
        }
    },
    mounted(){
        let boxHeight = this.boxHeight = getElemHeight(this.$refs.scrollbar),
            contHeight = this.contHeight = getElemHeight(this.$refs.cont),
            disY = this.disY = contHeight - boxHeight //如果contHeight < boxHeight 应该隐藏滚动条
        
        addMouseEvent(this.$refs.scrollbar,'mousewheel',(e)=>{
            e.preventDefault()
            console.log(this.$refs.cont.offsetTop)
            this.top += e.delta * this.step
            this.top = this.top <= -disY ? -disY : this.top >= 0 ? 0 : this.top 
        
            let offsetTop = this.$refs.cont.offsetTop
            this.thumbTop =  -this.top * (this.boxHeight - this.thumbHeight) / disY
        },false)
    }
}
</script>
