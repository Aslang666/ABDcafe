<template>
	<!-- <view> -->
		<view class="bg"></view>
		<view class="card">
		  <view >
		    <view class="address" v-for="item in 3" :key="item">
		      <view class="address__content" >
		        <view class="address__info">
		          <text class="address__name">刘佩虹</text>
		          <text class="address__tel">19874064526</text>
		          <text class="address__default" >默认</text>
		        </view>
				<!-- wx:if="{{item.isDefault}}" -->
		        <view class="address__addr">
		          <!-- {{item.province}}{{item.city}}{{item.county}}{{item.addressDetail}} -->
				  广东省广州市白云区石井街道聚源街123456865号杀杀杀杀杀杀
		        </view>
		      </view>
			  <view class="address__edit" @click="onCLickEdit">
			  <image class="address__edit" src="../../static/edit.png"></image>
			  </view>
		    </view>
		  </view>
		</view>
		<view class="no_address">
			<view class="no_img">
			  <image class="" src="../../static/noaddress.png"></image>
			</view>
			<view class="no_text">
				<span>请添加收获地址</span>
				<span><text>ABDcafé</text>美味直达您身边</span>
			</view>
		</view>
	
</template>

<script setup>
	const onCLickEdit = () =>{
		uni.navigateTo({
			url:'../editaddr/editaddr'
		})
	}
</script>

<style lang="scss" scoped>
	page{
		background: #f6f6f6;
	}
.bg {
  background-color: #0037ae;
  font-size: 14px;
  height: 200rpx;
  margin-bottom: -100rpx;
}

.card{
  margin:0 32rpx;
  padding: 16rpx 32rpx;
  background-color: #fff;
  border-radius: 24rpx 24rpx 0 0;
}

.address{
  display: flex;
  align-items: center;
  padding: 24rpx 0;
  border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
}
.address:last-child{
  border-bottom: none;
}
.address__content{
  flex-grow: 1;
  color: #595a5b;
}
.address__info{
  display: flex;
  align-items: center;
  gap: 24rpx;
}
.address__default{
  padding: 0 16rpx;
  color: #fff;
  font-size: small;
  background-color: #0037ae;
  border-radius: 999rpx;
}
.address__addr{
  margin-top: 8rpx;
  font-size: smaller;
}
.address__edit{
	width: 18px;
	height: 18px;
}
.no_address{
	display: flex;
	flex-direction: column;
	.no_img{
		display: flex;
		justify-content: center;
		width: 340px;
		height: 340px;
		margin: auto ;
		image{
		width: 340px;
		height: 340px;	
		}
	}
	.no_text{
		margin-top: -40px;
		display: flex;
		flex-direction: column;
		text-align: center;
		color: #595a5b;
		font-weight: 600;
		font-size: 18px;
		text{
			color: #0037ae;
		}
	}
}

</style>
