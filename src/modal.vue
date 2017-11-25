<style>
    .overlay{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
    }
    .modal-box{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        width: 500px;
        border-radius:5px;
        z-index: 1;
    }
    .close{
        float: right;
        cursor: pointer;
    }
    .title{
        float: left;
    }
    .modal-box header{
        padding: 0 10px;
        line-height: 30px;
        border-bottom: 1px solid skyblue;
    }
    .modal-box main{
        min-height: 50px;
        padding: 0 10px;
    }
    .modal-box footer{
        padding: 5px 10px;
        border-top: 1px solid skyblue;    
    }
    .clear-fix::after,
    .clear-fix::before{
        content: '';
        display: block;
        clear: both;
        line-height: 0;
    }
</style>
<template>
    <div class="overlay" v-show="value">
        <section class="modal-box">
            <header class="clear-fix">
                <div class="title"><slot name="header"></slot></div>
                <span class="close" v-on:click="close">X</span>
            </header>
            <main>
                <slot></slot>                
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </section>
    </div>
</template>
<script>
export default {
    name:'modal',
    props:{
        value:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        close(){
            this.$emit('input',false)
        }
    }
}
</script>
