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
    border-radius: 10px; 
    background: radial-gradient(#eee, #aaa); 
}
input[type="radio"] + label span { 
    border-radius: 50%;
}
input[type="radio"]:checked + label span { 
    background-image: radial-gradient(#9999CC, #9999FF); 
}
</style>
<template>
    <div>
        <input type="radio" 
            v-bind:name="name" 
            v-bind:id="id"
            v-bind:value="value"
            v-model="picked">
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
        checked:String
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
