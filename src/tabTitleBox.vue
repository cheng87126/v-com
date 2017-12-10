<style>
.tab-title-box{
    display:flex;
    align-items: center;
    justify-content:center;
}
</style>
<template>
    <div class="tab-title-box">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'tabTitleBox'
}
</script>
