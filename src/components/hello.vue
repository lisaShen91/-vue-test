<template>
    <div class="outer">
        <div class="header">{{ message }}</div>
        <div class="test">获取列表</div>
    </div>
</template>
<script>
	export default {
		data: () => ({message: "hi"})
    }
</script>

<style lang="stylus">
    /*@import '../styles/normalize.css'*/

    .color
        color red
    .header
        height 80px
        background-color #148cec
</style>