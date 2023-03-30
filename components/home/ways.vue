<template>
	<view class="container">
		<view class="block" v-for="item in waysList" :key="item.id">
			<view @click="navto(item.navurl)">
				<view class="text">
					<view>{{item.title}}</view>
					<view >{{item.engtitle}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	name:"ways";
	let waysList = [{
		id: '1',
		title: '到店自取',
		engtitle: 'PICK UP',
		navurl: '../menu/menu'
	}, {
		id: '2',
		title: '外卖配送',
		engtitle: 'DELIVERY',
		navurl: '../menu/menu'
	}]
	const navto = (url) =>{
		uni.switchTab({
			url: '../menu/menu',
		})
	}
</script>

<style lang="scss" scocped>
.container{
	background: #002fa5;
	box-shadow: 0px 0px 2px 0px #222;
	width: 90%;
	display: flex;
	color: #fff;
	justify-content: space-around;
	margin: auto;
	margin-top: 20px;
	padding: 2vw;
	text-align: center;
	.block{
		padding: 10px;
		width: 50%;
		border: solid 5px #fff;
		.text{
			display: flex;
			flex-direction: column;
		}
	}
	.block:nth-child(1){
		border-right: solid 1px #fff;
	}
	.block:nth-child(2){
		border-left: solid 1px #fff;
	}
}

</style>