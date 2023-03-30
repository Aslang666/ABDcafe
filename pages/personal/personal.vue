<template>
	<view class="container">
		<image class="bg" src="../../static/star.jpg" mode="widthFix" />
		<view class="content">
			<view class="profile">
				<!-- :src="user.avatarUrl" -->
				<image class="user-img" src="../../static/loginbg.jpg" mode="widthFix" />
				<view>
					<!-- {{userInfo.nickName}} -->
					<view class="nick-name">Aslang</view>
					<view class="desc"></view>
				</view>
			</view>
			<view class="setting-list">
				<view v-for="(item,index) in settings" :key="index">
					<view class="setting" @click="onClickSetting(item.path)">
						<view class="setting__name">
						<image class="setting__image" :src="item.iconUrl"></image>
						<text>
						{{item.name}}
						</text>
						</view>
						<image  class="setting__image" src="../../static/right_arrow.png"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	let user = uni.getStorageSync('user')
	let settings = [{
		name: '个人资料',
		path: '../profile/profile',
		iconUrl:'../../static/profile.png'
	}, {
		name: '我的订单',
		path: '../order/order',
		iconUrl:'../../static/myorder.png'
	}, {
		name: '地址管理',
		path: '../address/address',
		iconUrl:'../../static/address.png'
	}, {
		name: '安全中心',
		path: '../security/security',
		iconUrl:'../../static/security.png'
	}]
	const onClickSetting = (res) => {
		if (res == '../order/order') {
			uni.switchTab({
				url: res,
				success: (res) => {
					console.log(res);
				}
			});
		} else {
			uni.navigateTo({
				url: res,
				animationType: 'pop-in',
				animationDuration: 200,
				success: (res) => {
					console.log(res);
				}
			});

		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #f6f6f6;
	}

	.bg {
		width: 100%;
	}

	.content {
		position: relative;
		margin: -200rpx 24rpx 24rpx;
		padding: 24rpx 24rpx 0rpx;
		background-color: rgba(255, 255, 255, 0.8);
		border-radius: 24rpx;
	}

	.profile {
		display: flex;
		gap: 32rpx;
	}

	.user-img {
		width: 124rpx;
		border-radius: 50%;
	}

	.nick-name {
		color: #0037ae;
		font-size: large;
		font-weight: bold;
	}

	.desc {
		margin-top: 16rpx;
		color: #8e8e8e;
		font-size: smaller;
	}

	.setting-list {
		margin-top: 40rpx;
	}

	.setting:nth-child(5) {
		border-bottom: none;
	}

	.setting {
		display: flex;
		justify-content: space-between;
		padding: 24rpx 0;
		color: #595a5b;
		border-bottom: solid 1rpx rgba(0, 0, 0, 0.1);
	}
	.setting__name {
		display: flex;
		justify-content: space-between;
	}
	.setting__image{
		width: 24px;
		height: 24px;
	}
</style>