"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "personalinfo",
  setup(__props) {
    const navto = () => {
      common_vendor.index.navigateTo({
        url: "../login/login"
      });
    };
    let user = common_vendor.index.getStorageSync("user");
    common_vendor.onMounted(() => {
      console.log(user);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(user)
      }, common_vendor.unref(user) ? {
        b: common_vendor.unref(user).avatarUrl,
        c: common_vendor.t(common_vendor.unref(user).nickName)
      } : {
        d: common_vendor.t(common_vendor.unref(user)),
        e: common_vendor.o(navto)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/元数科技/ABDcafe/components/home/personalinfo.vue"]]);
wx.createComponent(Component);
