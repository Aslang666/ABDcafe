<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay"
				:interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in list1" :key="index"  >
					<view class="swiper-item uni-bg-red" @click="navto">
							<image :src="item" @click="navto" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script >
	export default {
		name:"banner",
		data() {
			return {
				duration: 500,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				list1: [
					'../../static/banner2.jpg',
					'../../static/banner1.jpg',
					'../../static/banner3.jpg',
				],
			};
		},
		methods: {
			navto() {
				uni.switchTab({
					url: '../menu/menu'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper {
		height: 530px;
		// overflow:hidden; 
	}
	.swiper-item {
		height: 100%;
		width: 100%;
		text-align: center;
		image{
			width: 100%;
			height: 100%;
		}
	}

</style>