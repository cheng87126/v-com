<style scoped>
    label{
        display: inline-block;
        cursor: pointer;
    }
    #upload{
        display: none;
    }
</style>
<template>
    <label for="upload">
        <img src="./img/upload.svg" alt="upload">
        <input type="file" name="upload" id="upload"
            v-on:change="upload($event.target.files)">
    </label>
</template>
<script>
export default {
    name:'upload',
    data(){
        return {

        }
    },
    props:{
        action:String
    },
    methods:{
        upload(filesList){
            let formData = new FormData()
            formData.append('upload', filesList[0])
            
            let xhr = new XMLHttpRequest()
            xhr.open('POST', this.action)
            xhr.onload = () => {
                if (xhr.status === 200) {
                　　console.log('success')
                } else {
                    console.log('error')
                }
            }
            xhr.send(formData)
        }
    }
}
</script>
