<template>
  <view class="area-selector">
<!--    <Picker
      v-model="value"
      :columns="columns"
      :title="title"
      @cancel="onCancel"
      @confirm="onConfirm"
    >
      <template v-slot:title>
        <view class="area-selector-title">{{ title }}</view>
      </template>
    </Picker> -->
	<!-- <van-picker title="标题" :columns="columns" ></van-picker> -->
	 <view style="display: flex; flex-direction: column; gap: 24rpx;padding-top:24rpx;">
	   <van-cell-group inset>
	     <van-field model:value="{{ name }}" label="姓名" placeholder="收货人姓名" />
	     <van-field model:value="{{ tel }}" label="电话" placeholder="收货人手机号" />
	     <van-cell title="地区" is-link @click="showAddrPicker" />
		 <!-- value="{{areaCode?areaText:'选择省/市/区'}}" -->
	     <van-field model:value="{{ addressDetail }}" label="详细地址" placeholder="街道门牌、楼层房间号等信息" />
	     <van-field model:value="{{ postalCode }}" label="邮政编码" placeholder="邮政编码" />
	   </van-cell-group>
	 
	   <van-cell-group inset>
	     <van-cell title="设为默认收货地址" center>
	       <van-switch slot="right-icon" checked="{{ isDefault }}" bind:change="onDefaultChange" active-color="#0037ae" size="48rpx" />
	     </van-cell>
	   </van-cell-group>
	 
	   <view style="margin: 48rpx 24rpx 0;">
	     <van-button type="primary" size="large" color="#0037ae" round bind:click="saveAddr">保存地址</van-button>
	   </view>
	 </view>
<!-- 	 
	 <van-popup show="{{ addrPickerShow }}" position="bottom" bind:close="hideAddrPicker">
	   <van-area area-list="{{ areaList }}" value="{{areaCode}}" bind:confirm="onAreaChange" />
	 </van-popup> -->
	   <van-picker v-if=" addrPickerShow" title="标题" :columns="columns" />
	 <van-toast id="van-toast" />
  <van-picker v-if=" addrPickerShow" title="标题" :columns="columns" />
  <!-- </view> -->
  </view>
</template>

<script setup>
import  columns  from '../../utils/region.js';
let addrPickerShow = false
const  showAddrPicker =()=> {
	console.log(addrPickerShow);
      addrPickerShow=true
  }
</script>
