<template>
	<view class="container">
		<view class="top">
			<image src="../../static/abd.png" mode=""></image>
		</view>
		<span class="text">
			立即登录，享受
			<span>ABDcafé</span>
			会员权益
		</span>
		<!-- <view class=""> -->
			<view class="block">
				<view class="left">
					<view class="text">
						<image src="../../static/abbr.png" mode=""></image>
						<span>专属客服</span>
					</view><view class="text">
						<image src="../../static/ticket.png" mode=""></image>
						<span>优惠券</span>
					</view><view class="text">
						<image src="../../static/cafe.png" mode=""></image>
						<span>邀请任喝</span>
					</view>
				</view>
				<view class="right">
					<button class="login_btn" @click="login">微信一键登录</button>
				</view>
			</view>
		<!-- </view> -->
	</view>
</template>

<script setup>
	const login =()=>{
		     uni.getUserProfile({
		          desc: '登录后可同步数据',
		          lang: 'zh_CN',
		          success: (res) => {
		            // console.log('getUserProfile', res);
					uni.setStorageSync('user',res.userInfo)
					if(uni.getStorageSync('user')){
						uni.reLaunch({
							url:'../index/index',
						})
					}
		          },
		        });
	}
	
</script>

<style lang="scss" scoped>
	page {
		background: #f5f6f7;
	}

	.container {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
	}

	.top {
		width: 100%;
		height: 300px;
		background: #c5dfff;
		display: flex;
		justify-content: center;
		border-radius: 300px;
		border-bottom-left-radius: 200px;
		border-bottom-right-radius: 200px;

		image {
			width: 300px;
			height: 300px;
		}
	}

	.text {
		margin: 20px auto;
		font-size: 20px;
		font-weight: 800;
		span:nth-child(1) {
			color: #002fa5;
			font-size: 20px;
		}
		span {
			color: #9d9d9d;
			font-size: 17px;
		}
	}
	.block {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		background: #fff;
		border-radius: 5px;
		.left {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			text-align: left;
			font-size: 20px;
			font-weight: 800;
			justify-content: center;
			.text {
				display: flex;
				align-items: center;
				flex-direction: column;	
			image {
				width: 50px;
				height: 50px;
			}
			}

		}
	
		.right {
			width: 100%;
			.login_btn {
				background-color: #002fa5;
				color: #fff;
				border-radius: 0px !important;
			}
		}
	}
</style>