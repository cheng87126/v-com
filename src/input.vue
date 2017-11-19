<style>

</style>
<template>
    <div>
        <label v-bind:for="id"><slot></slot></label>
        <input type="text" 
            v-bind:id="id"
            v-bind:name="name"
            v-bind:value="value"
            v-bind:placeholder="placeholder"
            v-on:input="updateVal($event.target.value)"
            v-on:blur="validData($event.target.value)">
    </div>
</template>
<script>
export default {
    name:'input',
    data(){
        return{

        }
    },
    props:{
        id:String,
        name:String,
        value:String,
        placeholder:String
    },
    methods:{
        updateVal(val){
            this.$emit('input',val)
        },
        validData(val){
            this.$emit('blur',val)
        }
    }
}
</script>
