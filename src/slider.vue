<style>
.slider{
    position: relative;
    width: 500px;
    height: 5px;
    background-color: skyblue;
    border-radius: 2px;
}
.slider-in{
    position: absolute;
    width: 16px;
    height: 16px;
    top: 50%;
    border-radius: 50%;
    transform: translateY(-50%);
    background-color: #3399CC;
    cursor: pointer;
}
</style>
<template>
    <div class="slider">
        <div class="slider-in"
            v-on:mousedown="dragStart($event)"
            v-bind:style="{ left: left-8 + 'px' }"></div>
    </div>
</template>
<script>
export default {
    name:'slider',
    data(){
        return {
            dragAble:false,
            left:this.value
        }
    },
    props:{
        value:{
            default:0
        }
    },
    methods:{
        dragStart(e){
            this.dragAble = true
            this.x = e.clientX
        },
        drag(e){
            if(!this.dragAble) return
            let disX = e.clientX - this.x
            let left = this.left + disX
            this.left = left > 500 ? 500 : left < 0 ? 0 : left
            this.x = e.clientX

            this.$emit('input',this.left)
        },
        dragEnd(){
            this.dragAble = false
        }
    },
    mounted(){
        document.addEventListener('mousemove',this.drag,false)
        document.addEventListener('mouseup',this.dragEnd,false)
    },
    beforeDestroy(){
        document.removeEventListener('mousemove',this.drag)
        document.removeEventListener('mouseup',this.dragEnd)
    }
}
</script>
