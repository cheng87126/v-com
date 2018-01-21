<style>
input[type="checkbox"]{
    display: none;
}
input[type="checkbox"] + label span { 
    display: inline-block; 
    vertical-align: middle; 
    width: 20px;
    height: 20px;
    border: 2px solid skyblue;
    border-radius: 4px;
    margin-right: 5px;
}
input[type="checkbox"]:disabled + label{
    color: #919191;
}
input[type="checkbox"]:checked + label span{
    background-color: skyblue;
}
input[type="checkbox"]:checked + label span::before { 
    content: '';
    background: url(./img/check.png) center center;
    background-size: 20px 20px;
    display: block;
    width: 20px;
    height: 20px;
}
</style>
<template>
    <div>
        <input type="checkbox" 
            v-bind:name="name" 
            v-bind:id="id"
            v-bind:value="value"
            v-bind:checked="picked"
            v-bind:disabled="disabled"
            v-on:change="updateVal($event,$event.target.value)">
        <label v-bind:for="id"><span></span><slot></slot></label>
    </div>
</template>
<script>
export default {
    name:'checkbox',
    data(){
        return {

        }
    },
    model:{
        prop:'checked',
        event:'change'
    },
    props:{
        name:String,
        id:String,
        value:String,
        disabled:{
            type:Boolean,
            default:false
        },
        checked:{
            default:false
        }
    },
    computed:{
        picked(){
            if(Array.isArray(this.checked)){
                return this.checked.includes(this.value) 
            }
            return this.checked
        }
    },
    methods:{
        updateVal(e,val){
            if(Array.isArray(this.checked)){
                let newValue = [...this.checked]
                if(e.target.checked){
                    newValue.push(val)
                }else{
                    newValue.splice(newValue.indexOf(val), 1)
                }

                this.$emit('change',newValue)
            }else{
                this.$emit('change',e.target.checked)
            }
        }
    }
}
</script>
