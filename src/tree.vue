<style scoped>
    li{
        list-style: none;
        line-height: 32px;
    }
</style>
<template>
    <ul>
        <li v-for="item in treeData" :key="item.id">
            {{item.name}}
            <v-tree v-if="item.children.length !== 0" v-bind:treeData="item.children"></v-tree>
        </li>
    </ul>
</template>
<script>
export default {
    name:'v-tree',
    data(){
        return{

        }
    },
    props:{
        treeData:{
            type:Array
        }
    }
}
</script>
