<style>
input[type="radio"]{
    display: none;
}
input[type="radio"] + label span {
    display: inline-block; 
    vertical-align: middle; 
    width: 20px;
    height: 20px;
    border: 2px solid #888;
    border-radius: 50%;
    margin-right: 6px; 
}
input[type="radio"] + label span::after{
    content: '';
    display: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    margin-left: 5px;
    margin-top: 5px;
    background-color: skyblue;
}
input[type="radio"]:checked + label span::after{ 
    display: block;
}
input[type="radio"]:disabled + label span {
    border-color: #bbb;
}
input[type="radio"]:disabled + label{
    color: #bbb;
}
input[type="radio"]:disabled + label span::after{
    background-color: #bbb;
}
</style>
<template>
    <div>
        <input type="radio" 
            v-bind:name="name" 
            v-bind:id="id"
            v-bind:value="value"
            v-model="picked"
            v-bind:disabled="disabled">
        <label v-bind:for="id"><span></span><slot></slot></label>
    </div>
</template>
<script>
export default {
    name:'radio',
    data(){
        return{

        }
    },
    props:{
        name:String,
        id:String,
        value:String,
        checked:String,
        disabled:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        picked:{
            get(){
                return this.checked
            },
            set(){
                this.$emit('update:checked', this.value)
            }
        }
    }
}
</script>
