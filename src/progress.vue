<style>
.progress{
    width: 100%;
    height: 1em;
    border: 1px solid skyblue;
    border-radius: 0.5em;
}
.progress-bar{
    width: 0;
    height: 1em;
    border-radius: 0.5em;
    background-color: skyblue;
}
.progress::after{
    content: attr(data-value);
    display: block;
    position: absolute;
    font-size: 0.5em;
    color: skyblue;
    margin-top: -1em;
    margin-left: 50%;
    transform: translate(-50%,-50%);
}
.half::after{
    color: #eee;
}
</style>
<template>
    <div class="progress"
        v-bind:class="{'half':value>50}"
        v-bind:data-value="value+'%'">
        <div class="progress-bar"
            v-bind:style="{width:width+'px'}"></div>
    </div>
</template>
<script>
export default {
    name:'progress',
    data(){
        return{
            boxWidth:0
        }
    },
    props:{
        value:Number
    },
    computed:{
        width(){
            return this.boxWidth * this.value / 100
        }
    },
    mounted(){
        this.boxWidth = this.$el.clientWidth
    }
}
</script>
