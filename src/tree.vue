<style scoped>
li{
    list-style: none;
    line-height: 32px;
}
.tree-triangle-right {
    width: 0;
    height: 0;
    display: inline-block;
    border-top: 5px solid transparent;
    border-left: 10px solid skyblue;
    border-bottom: 5px solid transparent;
    margin-right: 5px;
    cursor: pointer;
}
.tree-triangle-rotate{
    transform: rotate(90deg);
}
</style>
<template>
    <ul>
        <li v-for="item in treeData" :key="item.id">
            <span
                v-on:click="toggle(item.id)"
                v-bind:class="{'tree-triangle-right':item.children.length !== 0,'tree-triangle-rotate':showChild == item.id}"></span>{{item.name}}
            <v-tree 
                v-if="item.children.length !== 0" v-bind:treeData="item.children"
                v-show="showChild === item.id"></v-tree>
        </li>
    </ul>
</template>
<script>
export default {
    name:'v-tree',
    data(){
        return{
            showChild:''
        }
    },
    props:{
        treeData:{
            type:Array
        }
    },
    methods:{
        toggle(id){
            this.showChild === '' ? this.showChild = id : this.showChild = ''
        }
    }
}
</script>
