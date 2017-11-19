<style>

</style>
<template>
    <div id="app">
        <v-upload action="/"></v-upload>
        <v-radio name="web" id="js-id" value="js" v-bind:checked.sync="radioVal">js</v-radio>
        <v-radio name="web" id="css-id" value="css" v-bind:checked.sync="radioVal">css</v-radio>
        <div>radio value:{{radioVal}}</div>
        <v-checkbox name="checkboxs" id="js-vue" value="Vue" v-model="checkboxVal">Vue</v-checkbox>
        <v-checkbox name="checkboxs" id="js-react" value="React" v-model="checkboxVal">React</v-checkbox>
        <v-checkbox name="checkboxs" id="js-angular" value="Angular" v-model="checkboxVal">Angular</v-checkbox>
        <div>checkbox value:{{checkboxVal}}</div>
        <v-input id="test" name="test" placeholder="test input" v-model="testVal" v-on:blur="validInput">text</v-input>
        <div>input value:{{testVal}}</div>
    </div>
</template>
<script>
import Upload from './upload.vue'
import Radio from './radio.vue'
import Checkbox from './checkbox.vue'
import Input from './input.vue'
export default {
    name:'app',
    data(){
        return{
            radioVal:'js',
            checkboxVal:['Vue'],
            testVal:'testVal'
        }
    },
    components:{
        'v-upload':Upload,
        'v-radio':Radio,
        'v-checkbox':Checkbox,
        'v-input':Input
    },
    methods:{
        validInput(val){
            console.log(val)
        }
    }
}
</script>
