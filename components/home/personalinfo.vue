<template>
	<view class="">
		<view class="container" v-if="user">
			<view class="block">
				{{user}}
	<!-- 			<view class="left">
					<view class="text">
						<span>SHARE</span>
						<span>TOGETHER</span>
					</view>
				</view>
				<view class="right">
					<button class="login_btn" @click="navto">注册/登录</button>
				</view> -->
			</view>
		</view>
		<view class="container" v-else>
			<view class="block">
				<view class="left">
					<view class="text">
						<span>SHARE</span>{{user}}
						<span>TOGETHER</span>
					</view>
				</view>
				<view class="right">
					<button class="login_btn" @click="navto">注册/登录</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted } from "vue";
	name: "personalinfo";
	const navto = () => {
		uni.navigateTo({
			url: '../login/login'
		})
	}
	let user = uni.getStorageSync('user')
	onMounted(()=>{
		// user = uni.getStorageSync('user')
		console.log(user)
	})
</script>

<style lang="scss" scocped>
	.container {
		background: #cf4347;
		width: 90%;
		height: 60px;
		display: flex;
		color: #fff;
		margin: auto;
		padding: 2vw;
		margin-top: 20px;

		.block {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-evenly;

			.left {
				width: 50%;
				height: 100%;
				display: flex;
				align-items: center;
				text-align: left;
				font-size: 20px;
				font-weight: 800;

				.text {
					display: flex;
					align-items: flex-start;
					flex-direction: column;
				}

				image {
					width: 30px;
					height: 30px;
				}
			}

			.right {
				.login_btn {
					background-color: #002fa5;
					color: #fff;
					border: 2px solid #fff;
					border-radius: 0px !important;
				}
			}
		}
	}
</style>