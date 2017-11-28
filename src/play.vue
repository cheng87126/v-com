<style>
.play-btn{
    width: 0;
    height: 74px;
    cursor: pointer;
    will-change: border-width;
    transition: 50ms all ease;
    box-sizing: border-box;
}
.play{
    border-style: solid;
    border-width: 37px 0px 37px 74px;
    border-color: transparent transparent transparent #202020;
}
.pause{
    border-color: #202020;
    border-style: double;
    border-width: 0px 0 0px 37px;
}
</style>
<template>
    <div class="play-btn"
        v-bind:class="state ? 'play' : 'pause'"
        v-on:click="update"></div>
</template>
<script>
export default {
    name:'play',
    props:{
        value:Boolean
    },
    computed:{
        state(){
            return this.value
        }
    },
    methods:{
        update(){
            this.$emit('input',!this.state)
        }
    }
}
</script>
