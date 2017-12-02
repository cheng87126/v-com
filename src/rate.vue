<style>
.rate{
    display: inline-block;
    width: 1em;
    height: 1em;
    fill: skyblue;
    vertical-align: -2px;
    margin-right: 5px;
}
</style>
<template>
    <div>
        <div v-if="light">{{rating}}</div>
        <div v-else>
            <svg viewBox="0 0 1024 1024" style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <symbol id="rate">
                    <path d="M512 844.117333l-281.258667 100.693334 8.874667-298.609778L56.888889 409.827556 343.608889 325.973333 512 79.189333l168.391111 246.784L967.111111 409.827556l-182.727111 236.373333 8.874667 298.666667z"></path>
                </symbol>
            </svg>
            <svg>
                <use xlink:href="#rate" class="rate"/>
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
    }
}
</script>
