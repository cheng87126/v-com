<style>
.backtop{
	position: fixed;
    bottom: 100px;
    right: 10px;
	padding: 15px 10px;
	border-radius: 4px;
	background-color: skyblue;
	cursor: pointer;
}
.backtop::after{
	content: '';
	display: block;
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 10px 10px 10px;
	border-color: transparent transparent #fff transparent;
}
</style>
<template>
	<div class="backtop" 
	v-show="showBtn"
	v-on:click="backTop"></div>
</template>
<script>
import {addMouseEvent} from './js/util'
export default {
	name:'backTop',
	data(){
		return{
			scrollTop:0
		}
	},
	computed:{
		showBtn(){
			return this.scrollTop > this.position
		}
	},
	props:{
		position:{
			default:100
		}
	},
	methods:{
		backTop(){
			this.scrollTop = document.documentElement.scrollTop = 0
		}
	},
	mounted(){
		this.scrollTop = document.documentElement.scrollTop
		addMouseEvent(document,'mousewheel',(e)=>{
			this.scrollTop = document.documentElement.scrollTop
		},false)
	}
}
</script>
