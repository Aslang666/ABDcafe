"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "address",
  setup(__props) {
    const onCLickEdit = () => {
      common_vendor.index.navigateTo({
        url: "../editaddr/editaddr"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(3, (item, k0, i0) => {
          return {
            a: common_vendor.o(onCLickEdit, item),
            b: item
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-40ca010a"], ["__file", "D:/code/ABDcafe/pages/address/address.vue"]]);
wx.createPage(MiniProgramPage);
