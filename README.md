
## 安装

#### 下载插件后，在需要使用的页面中引入插件即可使用

## 使用方法
在页面中使用组件，自定义一个ref名称进行方法的调用，目前最多只支持一二三级，需要做更多的可以自己修改

传参说明

| 参数名           | 使用说明                           |
|---------------|--------------------------------|
| districtData1 | 必须传入一整组树状结构（父节点必须要有children）   |
| title         | 需要展示的字段名，默认为name，如果为title则不需要传 |
| level         | 级联数，默认为三级选择器，传2则为二级选择器         |
| getAddress    | 获取地区数据的方法                      |

示例
```html
<template>
    <cc-address-selector ref="addressSelector" :districtData1="regionData" :level="2"  :title="name"  @getAddress="getAddress"></cc-address-selector>
</template>
```
```js
methods: {
    // 获取地区数据
    getAddress(title, data) {
       // 这里写自己的赋值操作
    },
    // 打开地区选择器
    showSelector() {
        this.$refs.addressSelector.showSelector();
    }
}
```
