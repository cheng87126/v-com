<style>
.btn{
    display: inline-block;
    border-radius:5px; 
    border: 1px solid skyblue;
    cursor: pointer;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
}
.btn:hover{
    color: #fff;
    background-color: #00CCCC;
}
.btn-s{
    padding: 5px 10px;
}
.btn-m{
    padding: 10px 20px;
}
.btn-l{
    padding: 15px 30px;
}
.success,
.warning,
.error{
    color: #fff;
}
.success{
    background-color: #99CC33;
}
.success:hover{
    background-color: #99CC66;
}
.warning{
    background-color: #FFFF33;
}
.warning:hover{
    background-color: #FFFF66;
}
.error{
    background-color: #FF0033;    
}
.error:hover{
    background-color: #FF3333;
}
</style>
<template>
    <div class="btn" 
        v-bind:class="classObject">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'button',
    props:{
        size:{
            type:String,
            default:'m'
        },
        type:{
            type:String,
            default:'normal'
        }
    },
    computed:{
        classObject(){
            return {
                'btn-s':this.size === 's',
                'btn-m':this.size === 'm',
                'btn-l':this.size === 'l',
                'success':this.type === 'success',
                'warning':this.type === 'warning',
                'error':this.type === 'error'
            }
        }
    }
}
</script>
