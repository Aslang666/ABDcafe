"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  UniAddressSelector();
}
const UniAddressSelector = () => "../../components/editaddr.js";
const _sfc_main = {
  __name: "editaddr",
  setup(__props) {
    const showUniAddressSelector = false;
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: showUniAddressSelector
      }, {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/ABDcafe/pages/editaddr/editaddr.vue"]]);
wx.createPage(MiniProgramPage);
