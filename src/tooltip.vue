<style>
.tip-box{
    position: absolute;
    background: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%,-50%);
}
.tip-box::after{
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #f0f0f0;
    position: absolute;
    bottom: -9px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
<template>
    <div class="tooltip"
        v-on:mouseenter="enterTips"
        v-on:mouseleave="leaveTips">
        <div class="tip-box"
            v-show="showTip"
            v-bind:style="{left:left,top:top}">{{tips}}</div>
        <div ref="tips">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'toolTip',
    data(){
        return {
            showTip:true,
            left:0,
            top:0
        }
    },
    props:{
        tips:String
    },
    methods:{
        enterTips(){
            let style = this.$refs.tips.getBoundingClientRect()
            this.left = style.width / 2 + style.x + 'px'
            this.top = (document.documentElement.scrollTop + style.y - style.height - 10) + 'px'
            this.showTip = true
        },
        leaveTips(){
            this.showTip = false            
        }
    }
}
</script>
