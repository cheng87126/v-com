<style>
.timeline-dot{
	position: relative;
	display: inline-block;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: skyblue;
}
.timeline-dot::after{
	content: '';
	display: block;
	height: 30px;
	width: 2px;
	position: absolute;
	left: 50%;
	top: 30px;
	transform: translate(-50%,-50%);
	background-color: skyblue;
}
.timeline{
	height: 45px;
}
.timeline:last-child .timeline-dot::after{
	display: none;
}
.timeline-content{
	display: inline-block;
}
</style>
<template>
	<div class="timeline">
		<span class="time-box">{{timeline.time}}</span>
		<div class="timeline-dot"></div>
		<div class="timeline-content">{{timeline.content}}</div>
	</div>
</template>
<script>
export default {
	name:'timeline',
	props:{
		timeline:Object
	}
}
</script>
