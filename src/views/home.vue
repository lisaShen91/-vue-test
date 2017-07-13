<template>
    <div><hello></hello></div>
</template>
<script>
	import Hello from 'components/hello'
    export default {
		name: 'home',
		components: {
			Hello
        },
        created () {
			console.log('home')
        }
    }
</script>