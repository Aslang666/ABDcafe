<template>
	<view class="page-index">
		<UniAddressSelector v-if="showUniAddressSelector" :areaInfoSelected="areaInfoObj" @cancel="handleCancel"
			@confirm="handleConfirm">
		</UniAddressSelector>
		1123
	</view>
</template>

<script setup>
	import UniAddressSelector from '../../components/editaddr.vue';
	name: 'editaddr'

	const showUniAddressSelector = false
	const areaInfoObj = {
		provinceObj: {
			areaCode: '',
			areaName: '',
		},
		cityObj: {
			areaCode: '',
			areaName: '',
		},
		cityObj: {
			areaCode: '',
			areaName: '',
		},
		areaObj: {
			areaCode: '',
			areaName: '',
		},
		streetObj: {
			areaCode: '',
			areaName: '',
		}
	}

	const handleCancel = () => {
		this.showUniAddressSelector = false;
	}
	const handleConfirm = (areaInfoObj) => {
		this.showUniAddressSelector = false;
		this.areaInfoObj = areaInfoObj;
	}
</script>

<style lang="scss" scoped>

</style>