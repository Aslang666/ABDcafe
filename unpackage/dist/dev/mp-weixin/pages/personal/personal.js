"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "personal",
  setup(__props) {
    common_vendor.index.getStorageSync("user");
    let settings = [{
      name: "个人资料",
      path: "../profile/profile",
      iconUrl: "../../static/profile.png"
    }, {
      name: "我的订单",
      path: "../order/order",
      iconUrl: "../../static/myorder.png"
    }, {
      name: "地址管理",
      path: "../address/address",
      iconUrl: "../../static/address.png"
    }, {
      name: "安全中心",
      path: "../security/security",
      iconUrl: "../../static/security.png"
    }];
    const onClickSetting = (res) => {
      if (res == "../order/order") {
        common_vendor.index.switchTab({
          url: res,
          success: (res2) => {
            console.log(res2);
          }
        });
      } else {
        common_vendor.index.navigateTo({
          url: res,
          animationType: "pop-in",
          animationDuration: 200,
          success: (res2) => {
            console.log(res2);
          }
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(settings), (item, index, i0) => {
          return {
            a: item.iconUrl,
            b: common_vendor.t(item.name),
            c: common_vendor.o(($event) => onClickSetting(item.path), index),
            d: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6ae23533"], ["__file", "D:/code/ABDcafe/pages/personal/personal.vue"]]);
wx.createPage(MiniProgramPage);
