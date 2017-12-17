<style>
.h{
	width: 20px;
	height: 256px;
	display: inline-block;
	margin-left: 20px;
	position: relative;
	background:linear-gradient(to bottom, red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);
}
.sb-box{
	position: relative;
	display: inline-block;
	width: 256px;
	height: 256px;
}
.sb{
	width: 100%;
	height: 100%;
	position: absolute;
}
.sb1{
	z-index: 0;
	background: linear-gradient(to right, #fff 0%, rgba(255,255,255,0) 100%);
}
.sb2{
	z-index: 1;
	background: linear-gradient(to bottom, transparent 0%, #000 100%);
}
.picker{
	width: 15px;
	height: 15px;
	border-radius: 50%;
	border: 1px solid skyblue;
	cursor: pointer;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	z-index: 2;
}
.triangle-right {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 10px solid skyblue;
    border-bottom: 5px solid transparent;
	position: absolute;
	left: -10px;
	transform: translateY(-50%);
    cursor: pointer;
}
</style>
<template>
	<div>
		<div class="sb-box" 
			v-bind:style="{background:bg}"
			v-on:click="pickColor($event)">
			<div class="picker" ref="p"
				v-bind:style="{left:pickerX,top:pickerY}"></div>
			<div class="sb sb1"></div>
			<div class="sb sb2"></div>
		</div>
		<div class="h" 
			ref="h"
			v-on:click="changeH($event)">
			<div class="triangle-right"
				v-bind:style="{top:y+'px'}"></div>
		</div>
		<div>
			<p style="width:30px;height:30px;"
				v-bind:style="{background:color}"></p>
			{{color}}
		</div>
	</div>
</template>
<script>
export default {
	name:'colorpicker',
	data(){
		return {
			hue:0,
			y:256,
			pickerX:'50%',
			pickerY:'50%',
		}
	},
	computed:{
		bg(){
			var rgb = this.hsb2rgb(this.hue/360,1,1)
			return `rgb(${rgb.r},${rgb.g},${rgb.b})`
		},
		color(){
			var x = parseInt(this.pickerX),
				y = parseInt(this.pickerY),
				rgb = this.hsb2rgb(this.hue/360,x/256,(256-y)/256)
			return `rgb(${rgb.r},${rgb.g},${rgb.b})`
		}
	},
	methods:{
		hsb2rgb(H,S,V){
			var R, G, B
    		if (S == 0){
    		    R = G = B = V
    		}else{
    		    var _H = H * 6
    		    if (_H == 6){
    		        _H = 0
    		    }
    		    var i = Math.floor(_H)
    		    var v1 = V*(1 - S);
    		    var v2 = V*(1 - S*(_H - i ))
    		    var v3 = V*(1 - S*(1 - (_H - i)))
    		    if (i == 0){
    		        R = V
    		        G = v3
    		        B = v1
    		    }else if(i == 1){
    		        R = v2
    		        G = V
    		        B = v1
    		    }else if(i == 2){
    		        R = v1
    		        G = V
    		        B = v3
    		    }else if(i == 3){
    		        R = v1
    		        G = v2
    		        B = V
    		    }else if(i == 4){
    		        R = v3
    		        G = v1
    		        B = V
    		    }else{
    		        R = V
    		        G = v1
    		        B = v2
    		    }
    		}
    		return {r: Math.round(R*255), g: Math.round(G*255), b: Math.round(B*255)}
		},
		changeH(e){
			var height = this.height,
				y = this.y = e.offsetY,
				hue = this.hue = y / height * 360
			console.log(this.hsb2rgb(hue/360,1,1))
		},
		pickColor(e){
			this.pickerX = e.offsetX + 'px'
			this.pickerY = e.offsetY + 'px'
		}
	},
	mounted(){
		this.height = this.$refs.h.clientHeight
	}
}
</script>
