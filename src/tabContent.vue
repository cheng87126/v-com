<style>
.tab-content{
    display: block;
}
</style>
<template>
    <div class="tab-content"
        v-show="currentTitle"
        @click="change()">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'tabContent',
    data(){
        return {
            currentTitle:false
        }
    },
    props:{
        value:Number
    },
    methods:{
        change(){
            console.log(this.$parent)
        },
        setCurrent(){
            let parent = this.$parent
            this.currentTitle = parent.$children[this.value] && parent.$children[this.value].$el === this.$el
        }
    },
    mounted(){
        this.setCurrent()
    },
    watch:{
        value(){
            this.setCurrent()
        }
    }
}
</script>
