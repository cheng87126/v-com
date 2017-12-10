<style>
.tab-title{
    flex: 1;
    color: #fff;
    padding: 0.5em 1em;
    background-color: skyblue;    
    border-right: 1px solid #f0f0f0;
    cursor: pointer;
}
.tab-title:last-child{
    border: none;
}
.tab-active{
    background-color: #f60;
}
</style>
<template>
    <div class="tab-title"
        v-bind:class="{'tab-active':currentTitle}"
        @click="change()">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'tabTitle',
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
            //console.log(this.$parent.$refs)
            let parent = this.$parent
            for(let i=0,l=parent.$children.length;i<l;i++){
                if(parent.$children[i].$el === this.$el){
                    this.$emit('input',i)
                    break
                }
            }
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
