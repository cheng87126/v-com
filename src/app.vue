<style>

</style>
<template>
    <div id="app">
        <v-upload action="/"></v-upload>
    </div>
</template>
<script>
import Upload from './upload.vue'
export default {
    name:'app',
    components:{
        'v-upload':Upload
    }
}
</script>
