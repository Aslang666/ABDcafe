<template>
	<view class="content">
		<banner></banner>
		<ways></ways>
		<personalinfo></personalinfo>
	</view>
</template>

<script setup>
import banner from '../../components/home/banner.vue'
import ways from '../../components/home/ways.vue'
import personalinfo from '../../components/home/personalinfo.vue'
</script>

<style>
	.content {
		margin-bottom: 20px;
	}

</style>
