<style>
    .select{
        width: 200px;
        position: relative;
    }
    .select-box{
        display: inline-block;
        width: 100%;
        height: 30px;
        line-height: 30px;
        border: 1px solid skyblue;
        border-radius: 4px;
    }
    .select-box::after{
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 10px solid skyblue;
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .selected.select-box::after{
        transform: rotateZ(180deg)
    }
    .select ul{
        margin: 0;
        padding:0;   
    }
    .select li{
        line-height: 30px;
        padding-left: 10px;
        list-style: none;
    }
    .select li:hover{
        background-color: #efefef;
    }
    .dropdwon{
        position: absolute;
        top: 32px;
        width: 100%;
        box-shadow: 0 0 2px #000;
    }
</style>
<template>
    <div class="select">
        <span class="select-box"
            v-on:click="toggle"
            v-bind:class="{'selected':isOpen}">{{selectedVal}}</span>
        <ul class="dropdwon" v-show="isOpen">
            <li v-for="item in list" :key="item.id" 
                v-on:click="selectItem(item.value)">{{item.label}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'select',
    model:{
        prop:'selected',
        event:'change'
    },
    data(){
        return{
            isOpen:false
        }
    },
    props:{
        list:{
            type:Array
        },
        selected:{
            type:String
        }
    },
    methods:{
        toggle(){
            this.isOpen = !this.isOpen
        },
        selectItem(val){
            this.$emit('change',val)
            this.isOpen = !this.isOpen
        }
    },
    computed:{
        selectedVal(){
            return this.selected.length === 0?'请选择':this.selected
        }
    }
}
</script>
