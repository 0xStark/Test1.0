<template>
	<div>
		<p :class="direction">
			<span v-for="(item, index) in 100" :key="index">{{ msg }}<i> /// </i></span>
		</p>
	</div>
</template>

<script>
	export default {
		name: 'SectionMarquee',
		props: {
			msg: String,
			direction: String
		}
	}
</script>

<style>
</style>
