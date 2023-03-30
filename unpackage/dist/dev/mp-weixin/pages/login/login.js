"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const login = () => {
      common_vendor.index.getUserProfile({
        desc: "登录后可同步数据",
        lang: "zh_CN",
        success: (res) => {
          common_vendor.index.setStorageSync("user", res.userInfo);
          if (common_vendor.index.getStorageSync("user")) {
            common_vendor.index.reLaunch({
              url: "../index/index"
            });
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(login)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "D:/code/ABDcafe/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
