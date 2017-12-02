<style>
.switch-box{
    display: inline-block;
    width: 3em;
    height: 1em;
    border:1px solid #8c8c8c;
    border-radius: 0.5em;
    cursor: pointer;
}
.switch-box::after{
    content: '';
    display: inline-block;
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    background-color: #8c8c8c;
    margin-top: -2px;
    margin-right: -2px;
}
.tar{
    text-align: right;
}
.switch-box.tar{
    border:1px solid skyblue;
}
.switch-box.tar::after{
    background-color: skyblue;
}
</style>
<template>
    <div class="switch-box" 
        v-on:click="changeVal"
        v-bind:class="{'tar':value}"></div>
</template>
<script>
export default {
    name:'switch',
    props:{
        value:Boolean
    },
    methods:{
        changeVal(){
            this.$emit('input',!this.value)
        }
    }
}
</script>
