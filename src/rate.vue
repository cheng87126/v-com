<style>
.rate{
    display: inline-block;
    width: 1em;
    height: 1em;
    fill: #8c8c8c;
    vertical-align: -2px;
    margin-right: 5px;
    cursor: pointer;
}
.favourite{
    fill: skyblue;
}
</style>
<template>
    <div>
        <div v-if="light">{{rating}}</div>
        <div v-else>
            <svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <symbol id="rate" viewBox="0 0 32 32">
                    <path d="M30.951,12.525c-0.118-0.362-0.431-0.626-0.807-0.681l-9.154-1.33L16.897,2.22 c-0.337-0.683-1.457-0.683-1.794,0l-4.093,8.294l-9.154,1.33c-0.376,0.055-0.689,0.319-0.807,0.681 c-0.118,0.362-0.02,0.759,0.253,1.025l6.624,6.456l-1.563,9.117c-0.064,0.375,0.09,0.754,0.398,0.978 c0.309,0.224,0.717,0.252,1.053,0.076L16,25.873l8.187,4.304c0.146,0.077,0.306,0.115,0.465,0.115c0.207,0,0.414-0.064,0.588-0.191 c0.308-0.224,0.462-0.603,0.398-0.978l-1.563-9.117l6.624-6.456C30.971,13.284,31.069,12.887,30.951,12.525z"></path>
                </symbol>
            </svg>
            <svg class="rate" 
                v-for="x in 5" :key="x.id"
                v-bind:class="{'favourite':x<=value}"
                v-on:click="update(x)">
                <use xlink:href="#rate"/>
            </svg>
        </div>
    </div>
</template>
<script>
export default {
    name:'rate',
    props:{
        value:{
            type:Number,
            default:0
        },
        light:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        rating(){
            return '★★★★★☆☆☆☆☆'.substring(5 - this.value, 10 - this.value )
        }
    },
    methods:{
        update(num){
            this.$emit('input',num)
        }
    }
}
</script>
