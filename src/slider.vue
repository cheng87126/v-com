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
    transform: translate(-50%,-50%);
    background-color: #3399CC;
    cursor: pointer;
}
</style>
<template>
    <div class="slider" ref="slider">
        <div class="slider-in"
            v-on:mousedown="dragStart($event)"
            v-bind:style="{ left: left + 'px' }"></div>
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
        },
        min:{
            default:0
        },
        max:{
            default:100
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
            this.left = left > this.width ? this.width : left < 0 ? 0 : left
            this.x = e.clientX
            let val = this.left * (this.max - this.min) / this.width + this.min
            this.$emit('input',val)
        },
        dragEnd(){
            this.dragAble = false
        }
    },
    mounted(){
        this.width = this.$refs.slider.getBoundingClientRect().width
        let value = this.value < this.min ? this.min : this.value > this.max ? this.max : this.value
        this.left = (value - this.min) / (this.max - this.min) * this.width 
        this.$emit('input',value)

        document.addEventListener('mousemove',this.drag,false)
        document.addEventListener('mouseup',this.dragEnd,false)
    },
    beforeDestroy(){
        document.removeEventListener('mousemove',this.drag)
        document.removeEventListener('mouseup',this.dragEnd)
    }
}
</script>
