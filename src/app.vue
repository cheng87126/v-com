<style>

</style>
<template>
    <div id="app">
        <v-upload action="/"></v-upload>
        <v-radio name="web" id="js-id" value="js" v-bind:checked.sync="radioVal">js</v-radio>
        <v-radio name="web" id="css-id" value="css" v-bind:checked.sync="radioVal">css</v-radio>
        <div>radio value:{{radioVal}}</div>
    </div>
</template>
<script>
import Upload from './upload.vue'
import Radio from './radio.vue'
export default {
    name:'app',
    data(){
        return{
            radioVal:'js'
        }
    },
    components:{
        'v-upload':Upload,
        'v-radio':Radio
    }
}
</script>
