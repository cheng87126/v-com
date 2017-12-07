<style scoped>
.clearfix::after,
.clearfix::before{
    content: '';
    display: block;
    clear: both;
    line-height: 0;
}
ul{
    margin: 0;
    padding: 0;
}
.breadcrumb{
    width: 600px;
    margin: 10px auto;
    background: #f0f0f0;
    height: 32px;
    overflow: hidden;
    line-height: 32px;
    position: relative;
}
.breadcrumb li{
  float:left; 
  width:200px; 
  text-align:center; 
  position:relative; 
  z-index:2; 
  font-weight:bold; 
  font-size:14px;
  list-style: none;
}
.breadcrumb li em{
  position:absolute; 
  right:-24px; 
  top:-8px; 
  width:0; 
  height:0; 
  line-height:0; 
  border-width:24px 0 24px 24px; 
  border-color:transparent  transparent transparent #fff; 
  border-style:dashed dashed dashed solid;
}
.breadcrumb li i{
  position:absolute; 
  right:-16px; 
  top:0; 
  width:0; 
  height:0; 
  line-height:0; 
  border-width:16px 0 16px 16px; 
  border-color:transparent  transparent transparent #f0f0f0; 
  border-style:dashed dashed dashed solid;
}
.breadcrumb li.current{
  background:#f60; 
  color:#fff; 
  z-index:1;
}
.breadcrumb li.current i{
  border-color:transparent  transparent transparent #f60;
}
</style>
<template>
    <div class="breadcrumb">
        <ul class="clearfix">
            <li 
                v-for="(item,idx) in name" :key="item.id"
                v-bind:class="{'current':current === idx}">{{item}}<em></em><i></i></li>
            <!-- <li>面包屑二<em></em><i></i></li>
            <li class="current">面包屑二<em></em><i></i></li> -->
        </ul>
    </div>
</template>
<script>
export default {
    name:'breadcrumb',
    props:{
        name:Array,
        current:Number
    }
}
</script>
